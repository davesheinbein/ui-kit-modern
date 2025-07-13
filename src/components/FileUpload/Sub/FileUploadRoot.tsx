import React, {
	forwardRef,
	memo,
	useRef,
	useState,
	useCallback,
	useEffect,
} from 'react';
import type { FileUploadProps } from './types';
import Button from '../../Button/Button';
import Icons from '../../Icons/Icons';
import Loading from '../../Loading/Loading';
import { EmptyState } from '../../EmptyState';
import styles from '../file-upload.module.scss';

// Per-file state type
interface UploadFile {
	file: File;
	progress: number;
	error: string | null;
	success: boolean;
	abortController?: AbortController;
	previewUrl?: string;
	removing?: boolean;
}

const FileUploadRoot = forwardRef<
	HTMLDivElement,
	FileUploadProps
>(
	(
		{
			kind,
			variant = 'default',
			size = 'medium',
			state = 'idle',
			className = '',
			disabled = false,
			multiple = false,
			accept,
			maxFiles,
			maxSize,
			placeholder = 'No file selected',
			dragActiveText = 'Drop files to upload',
			errorText = 'Upload failed',
			successText = 'Upload successful',
			showPreview = false,
			icon,
			description,
			progressBar,
			filePreview,
			messages,
			actions,
			onFilesSelected,
			onFilesDrop,
			onUploadProgress,
			onError,
			onSuccess,
			appendOnUpload = false,
			onRemoveFile,
			children,
			...restProps
		},
		ref
	) => {
		const fileInputRef = useRef<HTMLInputElement>(null);
		const [files, setFiles] = useState<UploadFile[]>([]);
		const [dragActive, setDragActive] = useState(false);
		const [ariaMessage, setAriaMessage] = useState('');

		const createPreviewUrl = (file: File) =>
			file.type.startsWith('image/') ?
				URL.createObjectURL(file)
			:	undefined;

		// Cleanup object URLs
		useEffect(() => {
			return () => {
				files.forEach(
					(f) =>
						f.previewUrl &&
						URL.revokeObjectURL(f.previewUrl)
				);
			};
		}, [files]);

		// Validation (unchanged, but for File[])
		const validateFiles = useCallback(
			(files: File[]): string | null => {
				if (maxFiles && files.length > maxFiles) {
					return `You can only upload up to ${maxFiles} files.`;
				}
				for (const file of files) {
					if (maxSize && file.size > maxSize) {
						return `File ${file.name} exceeds the maximum size of ${Math.round(maxSize / 1024 / 1024)}MB.`;
					}
					if (accept) {
						const acceptList = accept
							.split(',')
							.map((a) => a.trim());
						const isAccepted = acceptList.some((type) => {
							if (type.startsWith('.'))
								return file.name.endsWith(type);
							if (type.endsWith('/*'))
								return file.type.startsWith(
									type.replace('/*', '')
								);
							return file.type === type;
						});
						if (!isAccepted)
							return `File ${file.name} is not an accepted type.`;
					}
				}
				return null;
			},
			[accept, maxFiles, maxSize]
		);

		// Handle file selection
		const handleFiles = useCallback(
			(newFiles: File[]) => {
				const validationError = validateFiles(newFiles);
				if (validationError) {
					setAriaMessage(validationError);
					onError?.(validationError);
					return;
				}
				let updatedFiles: File[];
				if (multiple && appendOnUpload) {
					const existingKeys = new Set(
						files.map(
							(f) =>
								f.file.name +
								f.file.size +
								f.file.lastModified
						)
					);
					const filtered = newFiles.filter(
						(f) =>
							!existingKeys.has(
								f.name + f.size + f.lastModified
							)
					);
					updatedFiles = [
						...files.map((f) => f.file),
						...filtered,
					].slice(0, maxFiles || undefined);
				} else {
					updatedFiles = newFiles.slice(
						0,
						maxFiles || undefined
					);
				}
				const uploadFiles: UploadFile[] = updatedFiles.map(
					(file) => ({
						file,
						progress: 0,
						error: null,
						success: false,
						previewUrl: createPreviewUrl(file),
					})
				);
				setFiles(uploadFiles);
				setAriaMessage(
					`${uploadFiles.length} file${uploadFiles.length !== 1 ? 's' : ''} selected.`
				);
				onFilesSelected?.(uploadFiles.map((f) => f.file));
			},
			[
				multiple,
				appendOnUpload,
				files,
				maxFiles,
				onFilesSelected,
				onError,
				validateFiles,
			]
		);

		const handleInputChange = (
			e: React.ChangeEvent<HTMLInputElement>
		) => {
			if (e.target.files)
				handleFiles(Array.from(e.target.files));
		};

		const handleDrop = (
			e: React.DragEvent<HTMLDivElement>
		) => {
			e.preventDefault();
			setDragActive(false);
			if (e.dataTransfer?.files) {
				handleFiles(Array.from(e.dataTransfer.files));
				onFilesDrop?.(Array.from(e.dataTransfer.files));
			}
		};

		// Remove file
		const handleRemoveFile = (idx: number) => {
			const removed = files[idx];
			if (removed.previewUrl)
				URL.revokeObjectURL(removed.previewUrl);
			const newFiles = files.filter((_, i) => i !== idx);
			setFiles(newFiles);
			setAriaMessage(`Removed file ${removed.file.name}`);
			onFilesSelected?.(newFiles.map((f) => f.file));
			onRemoveFile?.(removed.file, idx);
		};

		// Upload logic (async, with progress, cancel, retry)
		const uploadFiles = useCallback(async () => {
			const uploadPromises = files.map(
				async (fileState) => {
					if (fileState.success || fileState.error) return;
					const controller = new AbortController();
					const { file } = fileState;
					setFiles((prev) =>
						prev.map((f) =>
							f === fileState ?
								{ ...f, abortController: controller }
							:	f
						)
					);
					try {
						// Simulate async upload with progress
						for (let i = 1; i <= 100; i += 10) {
							if (controller.signal.aborted)
								throw new Error('Upload cancelled');
							await new Promise((res) =>
								setTimeout(res, 60)
							);
							setFiles((prev) =>
								prev.map((f) =>
									f === fileState ?
										{ ...f, progress: i }
									:	f
								)
							);
							onUploadProgress?.(i);
						}
						setFiles((prev) =>
							prev.map((f) =>
								f === fileState ?
									{ ...f, success: true, progress: 100 }
								:	f
							)
						);
						onSuccess?.(files.map((f) => f.file));
					} catch (err: any) {
						setFiles((prev) =>
							prev.map((f) =>
								f === fileState ?
									{
										...f,
										error: err.message || errorText,
										progress: 0,
									}
								:	f
							)
						);
						onError?.(err.message || errorText);
					}
				}
			);
			setDragActive(false);
			setAriaMessage(''); // Clear ARIA message on upload start
			await Promise.all(uploadPromises);
		}, [
			files,
			onUploadProgress,
			onSuccess,
			onError,
			errorText,
		]);

		const handleUpload = () => {
			uploadFiles();
		};
		const handleCancel = (fileState: UploadFile) => {
			fileState.abortController?.abort();
			setFiles((prev) =>
				prev.map((f) =>
					f === fileState ?
						{ ...f, progress: 0, error: 'Upload cancelled' }
					:	f
				)
			);
		};
		const handleRetry = (fileState: UploadFile) => {
			setFiles((prev) =>
				prev.map((f) =>
					f === fileState ?
						{ ...f, error: null, success: false }
					:	f
				)
			);
			uploadFiles();
		};
		const handleClear = () => {
			setFiles([]);
			setAriaMessage('');
		};

		// Accessibility: focus input on Enter/Space
		const handleKeyDown = (
			e: React.KeyboardEvent<HTMLDivElement>
		) => {
			if (
				(e.key === 'Enter' || e.key === ' ') &&
				!disabled
			) {
				fileInputRef.current?.click();
			}
		};

		// Theming: allow className, style, and CSS vars
		// Custom preview renderer
		const renderPreview = () => {
			if (!showPreview) return null;
			if (!files.length) {
				return (
					<EmptyState
						kind='file-upload-empty'
						title='No files selected'
						description={placeholder}
					/>
				);
			}
			return (
				<div
					className={styles['file-upload-preview-list']}
					style={{
						marginTop: 12,
						display: 'flex',
						gap: 12,
					}}
				>
					{files.map((fileState, idx) => (
						<div
							key={fileState.file.name + idx}
							className={styles['file-upload-preview-item']}
							style={{ position: 'relative', minWidth: 80 }}
						>
							{fileState.previewUrl ?
								<img
									src={fileState.previewUrl}
									alt={fileState.file.name}
									style={{
										width: 64,
										height: 64,
										objectFit: 'cover',
										borderRadius: 8,
									}}
								/>
							:	<Icons name='file' size={32} />}
							<div
								style={{
									fontSize: 12,
									marginTop: 4,
									textAlign: 'center',
									wordBreak: 'break-all',
								}}
							>
								{fileState.file.name}
							</div>
							{fileState.progress > 0 &&
								!fileState.success && (
									<Loading
										kind='bar'
										size='sm'
										message={`Uploading... ${fileState.progress}%`}
										style={{ marginTop: 4 }}
									/>
								)}
							{fileState.error && (
								<div
									style={{
										color: '#d32f2f',
										fontSize: 12,
										marginTop: 4,
									}}
								>
									{fileState.error}
								</div>
							)}
							<Button
								kind='ghost'
								size='small'
								style={{
									position: 'absolute',
									top: 0,
									right: 0,
								}}
								aria-label={`Remove ${fileState.file.name}`}
								onClick={() => handleRemoveFile(idx)}
								tabIndex={0}
							>
								<Icons name='close' size={16} />
							</Button>
						</div>
					))}
				</div>
			);
		};

		// Messages
		const renderMessages = () => {
			if (messages) return messages;
			if (ariaMessage)
				return (
					<div
						className={styles['file-upload-message']}
						style={{
							marginTop: 8,
							fontSize: 14,
							color: '#333',
						}}
					>
						{ariaMessage}
					</div>
				);
			return null;
		};

		// Actions (upload, clear, cancel, retry)
		const renderActions = () => {
			if (actions) return actions;
			if (!files.length) return null;
			return (
				<div
					className={styles['file-upload-actions']}
					style={{ marginTop: 12, display: 'flex', gap: 8 }}
				>
					{!files.some(
						(f) => f.progress > 0 && !f.success
					) && (
						<Button
							kind='primary'
							size={size}
							onClick={handleUpload}
							disabled={
								disabled ||
								files.some((f) => f.progress > 0)
							}
						>
							Upload
						</Button>
					)}
					{files.some((f) => f.progress > 0) && (
						<Button
							kind='secondary'
							size={size}
							onClick={() =>
								files.forEach((f) => handleCancel(f))
							}
						>
							Cancel
						</Button>
					)}
					{files.some((f) => f.error) && (
						<Button
							kind='primary'
							size={size}
							onClick={() =>
								files.forEach((f) => handleRetry(f))
							}
						>
							Retry
						</Button>
					)}
					<Button
						kind='ghost'
						size={size}
						onClick={handleClear}
					>
						Clear
					</Button>
				</div>
			);
		};

		// Drag overlay
		const renderDragOverlay = () => {
			if (!dragActive) return null;
			return (
				<div
					className={styles['file-upload-drag-overlay']}
					style={{
						position: 'absolute',
						inset: 0,
						background: 'rgba(0, 112, 243, 0.08)',
						border: '2px dashed #0070f3',
						borderRadius: 12,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 10,
						pointerEvents: 'none',
						fontSize: 18,
						color: '#0070f3',
						fontWeight: 500,
					}}
					aria-live='polite'
				>
					{dragActiveText}
				</div>
			);
		};

		return (
			<div
				ref={ref}
				className={`${styles['file-upload-root']} ${className}`}
				style={{
					position: 'relative',
					padding: 24,
					borderRadius: 12,
					background: '#fff',
					minWidth: 320,
					minHeight: 120,
					outline:
						dragActive ? '2px solid #0070f3' : undefined,
					...restProps.style,
				}}
				tabIndex={0}
				aria-disabled={disabled || state === 'disabled'}
				aria-busy={files.some(
					(f) => f.progress > 0 && !f.success
				)}
				aria-label='File upload area'
				onDrop={handleDrop}
				onDragOver={(e) => {
					e.preventDefault();
					setDragActive(true);
				}}
				onDragLeave={(e) => {
					e.preventDefault();
					setDragActive(false);
				}}
				onKeyDown={handleKeyDown}
				{...restProps}
			>
				{/* ARIA live region for file list changes */}
				<div
					aria-live='polite'
					style={{
						position: 'absolute',
						left: -9999,
						height: 1,
						width: 1,
						overflow: 'hidden',
					}}
				>
					{ariaMessage}
				</div>
				{renderDragOverlay()}
				{/* Visually hidden file input */}
				<input
					ref={fileInputRef}
					type='file'
					accept={accept}
					multiple={multiple}
					onChange={handleInputChange}
					className={styles.input}
					style={{ display: 'none' }}
					disabled={disabled || state === 'disabled'}
					tabIndex={-1}
				/>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 12,
						marginBottom: 8,
					}}
				>
					{/* Removed the decorative icon for minimal look */}
					<Button
						onClick={() => fileInputRef.current?.click()}
						kind='primary'
						size={size}
						disabled={disabled || state === 'disabled'}
						contentType='text'
						style={{ minWidth: 120 }}
						aria-label='Choose file(s)'
					>
						<span
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: 8,
							}}
						>
							<Icons name='upload' size={18} /> Choose File
						</span>
					</Button>
				</div>
				{description && (
					<div
						className={styles.description}
						style={{
							marginTop: 4,
							color: '#666',
							fontSize: 14,
						}}
					>
						{description}
					</div>
				)}
				{children ?
					children
				:	<>
						{renderPreview()}
						{renderMessages()}
						{renderActions()}
					</>
				}
			</div>
		);
	}
);

FileUploadRoot.displayName = 'FileUploadRoot';
export default memo(FileUploadRoot);
