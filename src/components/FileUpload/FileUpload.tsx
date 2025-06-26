import React, {
	forwardRef,
	memo,
	useCallback,
	useRef,
	useEffect,
} from 'react';
import { Wrapper } from '../Wrappers';
import {
	FileUploadKind,
	FileUploadVariant,
	FileUploadSize,
	FileUploadState,
	getFileUploadConfig,
	getFileUploadStyles,
	validateFiles,
} from './configurations';
import styles from './FileUpload.module.scss';
import {
	useAppDispatch,
	useAppSelector,
} from '../../store';
import {
	initializeComponentState,
	setComponentDragActive,
	setComponentUploadProgress,
	setComponentValidationErrors,
	setComponentSelectedFiles,
	clearComponentState,
	removeComponentState,
	selectComponentState,
	selectComponentDragActive,
	selectComponentUploadProgress,
	selectComponentValidationErrors,
	selectComponentSelectedFiles,
} from '../../store/slices/fileSlice';

export interface FileUploadProps {
	kind: FileUploadKind;
	componentId?: string; // Unique identifier for Redux state
	variant?: FileUploadVariant;
	size?: FileUploadSize;
	state?: FileUploadState;
	className?: string;
	disabled?: boolean;
	multiple?: boolean;
	accept?: string;
	maxFiles?: number;
	maxSize?: number; // in bytes
	onFilesSelected?: (files: File[]) => void;
	onFilesDrop?: (files: File[]) => void;
	onUploadProgress?: (progress: number) => void;
	onUploadComplete?: (files: File[]) => void;
	onUploadError?: (error: string) => void;
	children?: React.ReactNode;
	placeholder?: string;
	dragActiveText?: string;
	errorText?: string;
	successText?: string;
	showPreview?: boolean;
	allowedTypes?: string[];
}

const FileUpload = forwardRef<
	HTMLDivElement,
	FileUploadProps
>((props, ref) => {
	const {
		kind,
		componentId,
		variant = 'default',
		size = 'medium',
		state = 'idle',
		className,
		disabled = false,
		multiple,
		accept,
		maxFiles,
		maxSize,
		onFilesSelected,
		onFilesDrop,
		onUploadProgress,
		onUploadComplete,
		onUploadError,
		children,
		placeholder,
		dragActiveText,
		errorText,
		successText,
		showPreview = false,
		allowedTypes,
		...restProps
	} = props;

	const config = getFileUploadConfig(kind);
	const styleConfig = getFileUploadStyles(
		kind,
		variant,
		size
	);

	// Redux setup
	const dispatch = useAppDispatch();
	const finalComponentId =
		componentId || `file-upload-${kind}-${Date.now()}`;

	// Initialize component state in Redux
	useEffect(() => {
		dispatch(initializeComponentState(finalComponentId));
		return () => {
			// Cleanup component state when unmounting
			dispatch(removeComponentState(finalComponentId));
		};
	}, [dispatch, finalComponentId]);

	// Redux selectors
	const dragActive = useAppSelector((state) =>
		selectComponentDragActive(finalComponentId)(state)
	);
	const uploadProgress = useAppSelector((state) =>
		selectComponentUploadProgress(finalComponentId)(state)
	);
	const selectedFiles = useAppSelector((state) =>
		selectComponentSelectedFiles(finalComponentId)(state)
	);
	const validationErrors = useAppSelector((state) =>
		selectComponentValidationErrors(finalComponentId)(state)
	);

	const fileInputRef = useRef<HTMLInputElement>(null);

	// Merge config with props
	const finalAccept =
		accept ||
		config.validation?.allowedTypes?.join(',') ||
		config.accept;
	const finalMultiple =
		multiple !== undefined ? multiple : config.multiple;
	const finalMaxFiles =
		maxFiles || config.validation?.maxFiles;
	const finalMaxSize =
		maxSize || config.validation?.maxFileSize;

	const handleFiles = useCallback(
		(files: FileList | File[]) => {
			const fileArray = Array.from(files);

			// Validate files
			const validation = validateFiles(fileArray, {
				maxFiles: finalMaxFiles,
				maxFileSize: finalMaxSize,
				allowedTypes:
					allowedTypes || config.validation?.allowedTypes,
			});

			if (!validation.isValid) {
				dispatch(
					setComponentValidationErrors({
						componentId: finalComponentId,
						errors: validation.errors,
					})
				);
				onUploadError?.(validation.errors.join(', '));
				return;
			}

			dispatch(
				setComponentValidationErrors({
					componentId: finalComponentId,
					errors: [],
				})
			);

			dispatch(
				setComponentSelectedFiles({
					componentId: finalComponentId,
					files: fileArray, // Use File[] directly for UI state
				})
			);
			onFilesSelected?.(fileArray);

			// Simulate upload progress if progress handler is provided
			if (onUploadProgress) {
				dispatch(
					setComponentUploadProgress({
						componentId: finalComponentId,
						progress: 0,
					})
				);
				const interval = setInterval(() => {
					dispatch(
						setComponentUploadProgress({
							componentId: finalComponentId,
							progress: Math.min(uploadProgress + 10, 100),
						})
					);

					if (uploadProgress >= 100) {
						clearInterval(interval);
						onUploadComplete?.(fileArray);
					}
				}, 100);
			}
		},
		[
			finalMaxFiles,
			finalMaxSize,
			allowedTypes,
			config.validation?.allowedTypes,
			onFilesSelected,
			onUploadProgress,
			onUploadComplete,
			onUploadError,
		]
	);

	const handleFileInput = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (e.target.files) {
				handleFiles(e.target.files);
			}
		},
		[handleFiles]
	);

	const handleDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			dispatch(
				setComponentDragActive({
					componentId: finalComponentId,
					dragActive: false,
				})
			);

			if (disabled || state === 'disabled') return;

			const files = e.dataTransfer.files;
			if (files) {
				handleFiles(files);
				onFilesDrop?.(Array.from(files));
			}
		},
		[disabled, state, handleFiles, onFilesDrop]
	);

	const handleDragOver = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			if (!disabled && state !== 'disabled') {
				dispatch(
					setComponentDragActive({
						componentId: finalComponentId,
						dragActive: true,
					})
				);
			}
		},
		[disabled, state, dispatch, finalComponentId]
	);

	const handleDragLeave = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			dispatch(
				setComponentDragActive({
					componentId: finalComponentId,
					dragActive: false,
				})
			);
		},
		[dispatch, finalComponentId]
	);

	const handleClick = useCallback(() => {
		if (!disabled && state !== 'disabled') {
			fileInputRef.current?.click();
		}
	}, [disabled, state]);

	// Generate CSS classes
	const cssClasses = [
		styles.fileUploadWrapper,
		styles[kind],
		styles[variant],
		styles[size],
		styleConfig.theme && styles[styleConfig.theme],
		dragActive && styles.dragActive,
		state && styles[state],
		disabled && styles.disabled,
		validationErrors.length > 0 && styles.error,
		className,
	]
		.filter(Boolean)
		.join(' ');

	// Determine display text
	const getDisplayText = () => {
		if (state === 'uploading')
			return `Uploading... ${uploadProgress}%`;
		if (state === 'success')
			return successText || 'Upload successful!';
		if (state === 'error' || validationErrors.length > 0) {
			return (
				errorText || validationErrors[0] || 'Upload failed'
			);
		}
		if (dragActive)
			return dragActiveText || 'Drop files here';
		if (selectedFiles.length > 0) {
			return `${selectedFiles.length} file${selectedFiles.length > 1 ? 's' : ''} selected`;
		}
		return (
			placeholder ||
			config.display?.placeholder ||
			'Choose files or drag and drop'
		);
	};

	return (
		<Wrapper
			ref={ref}
			className={cssClasses}
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onClick={handleClick}
			role='button'
			tabIndex={disabled ? -1 : 0}
			aria-disabled={disabled}
			{...restProps}
		>
			<input
				ref={fileInputRef}
				type='file'
				accept={finalAccept}
				multiple={finalMultiple}
				onChange={handleFileInput}
				className={styles.fileInputHidden}
				disabled={disabled || state === 'disabled'}
			/>

			{children || (
				<Wrapper className={styles.content}>
					{config.display?.icon && (
						<Wrapper className={styles.icon}>
							{config.display.icon}
						</Wrapper>
					)}

					<Wrapper className={styles.text}>
						{getDisplayText()}
					</Wrapper>

					{config.display?.description && (
						<Wrapper className={styles.description}>
							{config.display.description}
						</Wrapper>
					)}

					{state === 'uploading' && (
						<Wrapper className={styles.progressBar}>
							<Wrapper
								className={styles.fileUpload__progressFill}
								data-progress={uploadProgress}
							/>
						</Wrapper>
					)}
				</Wrapper>
			)}

			{showPreview && selectedFiles.length > 0 && (
				<Wrapper className={styles.preview}>
					{selectedFiles.map(
						(file: File, index: number) => (
							<Wrapper
								key={index}
								className={styles.previewItem}
							>
								{file.type.startsWith('image/') ?
									<img
										src={URL.createObjectURL(file)}
										alt={file.name}
										className={styles.previewImage}
									/>
								:	<Wrapper className={styles.previewFile}>
										{file.name}
									</Wrapper>
								}
							</Wrapper>
						)
					)}
				</Wrapper>
			)}
		</Wrapper>
	);
});

FileUpload.displayName = 'FileUpload';
export default memo(FileUpload);
