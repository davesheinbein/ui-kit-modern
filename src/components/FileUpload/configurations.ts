import React from 'react';

// =============================================================================
// TYPES & INTERFACES
// =============================================================================

export type FileUploadKind =
	| 'dropzone'
	| 'image-uploader'
	| 'avatar-uploader'
	| 'document-uploader'
	| 'file-button'
	| 'multiple-files'
	| 'drag-drop-zone'
	| 'gallery-uploader'
	| 'profile-picture'
	| 'bulk-uploader';

export type FileUploadVariant =
	| 'default'
	| 'minimal'
	| 'bordered'
	| 'filled'
	| 'modern'
	| 'compact'
	| 'detailed';

export type FileUploadSize = 'small' | 'medium' | 'large';

export type FileUploadState =
	| 'idle'
	| 'uploading'
	| 'success'
	| 'error'
	| 'disabled';

// =============================================================================
// CONFIGURATION INTERFACES
// =============================================================================

export interface FileUploadConfiguration {
	kind: FileUploadKind;
	variant?: FileUploadVariant;
	size?: FileUploadSize;
	styling?: FileUploadStyling;
	behavior?: FileUploadBehavior;
	validation?: FileUploadValidation;
	display?: FileUploadDisplay;
	// Convenience properties for backward compatibility
	accept?: string;
	multiple?: boolean;
}

export interface FileUploadStyling {
	theme?: 'light' | 'dark' | 'gradient';
	color?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'error';
	borderRadius?:
		| 'none'
		| 'small'
		| 'medium'
		| 'large'
		| 'round';
	shadow?: 'none' | 'small' | 'medium' | 'large';
	animation?: 'none' | 'subtle' | 'bounce' | 'pulse';
	border?: 'none' | 'solid' | 'dashed' | 'dotted';
}

export interface FileUploadBehavior {
	multiple?: boolean;
	allowDragDrop?: boolean;
	autoUpload?: boolean;
	clearOnSuccess?: boolean;
	disabled?: boolean;
	clickToUpload?: boolean;
	pasteToUpload?: boolean;
}

export interface FileUploadValidation {
	accept?: string | string[];
	maxSize?: number;
	minSize?: number;
	maxFiles?: number;
	minFiles?: number;
	allowedTypes?: string[];
	blockedTypes?: string[];
	customValidator?: (file: File) => boolean | string;
}

export interface FileUploadDisplay {
	showPreview?: boolean;
	showProgress?: boolean;
	showFileList?: boolean;
	showFileSize?: boolean;
	showFileName?: boolean;
	showRemoveButton?: boolean;
	previewSize?: 'small' | 'medium' | 'large';
	layout?: 'grid' | 'list' | 'compact';
	placeholder?: string;
	icon?: React.ReactNode;
	description?: string;
}

// =============================================================================
// FILE INTERFACES
// =============================================================================

export interface UploadedFile {
	id: string;
	file: File;
	name: string;
	size: number;
	type: string;
	status: 'pending' | 'uploading' | 'success' | 'error';
	progress?: number;
	url?: string;
	preview?: string;
	error?: string;
}

export interface FileUploadCallbacks {
	onFilesSelected?: (files: File[]) => void;
	onFileAdded?: (file: File) => void;
	onFileRemoved?: (fileId: string) => void;
	onUploadStart?: (file: File) => void;
	onUploadProgress?: (
		fileId: string,
		progress: number
	) => void;
	onUploadComplete?: (fileId: string, result: any) => void;
	onUploadError?: (fileId: string, error: string) => void;
	onValidationError?: (file: File, error: string) => void;
	onDragEnter?: () => void;
	onDragLeave?: () => void;
	onDrop?: (files: File[]) => void;
}

// =============================================================================
// PREDEFINED CONFIGURATIONS
// =============================================================================

export const FILE_UPLOAD_CONFIGURATIONS: Record<
	FileUploadKind,
	FileUploadConfiguration
> = {
	'dropzone': {
		kind: 'dropzone',
		variant: 'bordered',
		size: 'large',
		accept: '*/*',
		multiple: true,
		styling: {
			theme: 'light',
			color: 'primary',
			borderRadius: 'medium',
			shadow: 'small',
			border: 'dashed',
			animation: 'subtle',
		},
		behavior: {
			multiple: true,
			allowDragDrop: true,
			clickToUpload: true,
		},
		validation: {
			maxSize: 10 * 1024 * 1024, // 10MB
			maxFiles: 10,
		},
		display: {
			showPreview: true,
			showProgress: true,
			showFileList: true,
			showFileSize: true,
			layout: 'grid',
			placeholder: 'Drop files here or click to upload',
			icon: '📁',
			description: 'Drag and drop files or click to browse',
		},
	},
	'image-uploader': {
		kind: 'image-uploader',
		variant: 'modern',
		size: 'medium',
		accept: 'image/*',
		multiple: false,
		styling: {
			theme: 'light',
			color: 'primary',
			borderRadius: 'medium',
			shadow: 'medium',
			border: 'solid',
		},
		behavior: {
			multiple: false,
			allowDragDrop: true,
			clickToUpload: true,
		},
		validation: {
			accept: 'image/*',
			allowedTypes: [
				'image/jpeg',
				'image/png',
				'image/gif',
				'image/webp',
			],
			maxSize: 5 * 1024 * 1024, // 5MB
			maxFiles: 1,
		},
		display: {
			showPreview: true,
			showProgress: true,
			showFileName: true,
			previewSize: 'medium',
			placeholder: 'Upload an image',
			icon: '🖼️',
			description: 'Choose an image file to upload',
		},
	},
	'avatar-uploader': {
		kind: 'avatar-uploader',
		variant: 'modern',
		size: 'medium',
		styling: {
			theme: 'light',
			color: 'primary',
			borderRadius: 'round',
			shadow: 'medium',
			border: 'solid',
		},
		behavior: {
			multiple: false,
			allowDragDrop: true,
			clickToUpload: true,
		},
		validation: {
			accept: 'image/*',
			allowedTypes: ['image/jpeg', 'image/png'],
			maxSize: 2 * 1024 * 1024, // 2MB
			maxFiles: 1,
		},
		display: {
			showPreview: true,
			showProgress: true,
			previewSize: 'large',
		},
	},
	'document-uploader': {
		kind: 'document-uploader',
		variant: 'default',
		size: 'medium',
		styling: {
			theme: 'light',
			color: 'secondary',
			borderRadius: 'medium',
			shadow: 'small',
			border: 'solid',
		},
		behavior: {
			multiple: true,
			allowDragDrop: true,
			clickToUpload: true,
		},
		validation: {
			accept: '.pdf,.doc,.docx,.txt,.xls,.xlsx,.ppt,.pptx',
			allowedTypes: [
				'application/pdf',
				'application/msword',
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
				'text/plain',
			],
			maxSize: 25 * 1024 * 1024, // 25MB
			maxFiles: 5,
		},
		display: {
			showPreview: false,
			showProgress: true,
			showFileList: true,
			showFileSize: true,
			layout: 'list',
		},
	},
	'file-button': {
		kind: 'file-button',
		variant: 'minimal',
		size: 'small',
		styling: {
			theme: 'light',
			color: 'primary',
			borderRadius: 'medium',
			shadow: 'none',
			border: 'solid',
		},
		behavior: {
			multiple: false,
			allowDragDrop: false,
			clickToUpload: true,
		},
		validation: {
			maxSize: 5 * 1024 * 1024, // 5MB
			maxFiles: 1,
		},
		display: {
			showPreview: false,
			showProgress: false,
			showFileList: false,
		},
	},
	'multiple-files': {
		kind: 'multiple-files',
		variant: 'default',
		size: 'large',
		styling: {
			theme: 'light',
			color: 'primary',
			borderRadius: 'medium',
			shadow: 'medium',
			border: 'dashed',
		},
		behavior: {
			multiple: true,
			allowDragDrop: true,
			clickToUpload: true,
		},
		validation: {
			maxSize: 10 * 1024 * 1024, // 10MB
			maxFiles: 20,
		},
		display: {
			showPreview: true,
			showProgress: true,
			showFileList: true,
			showFileSize: true,
			showRemoveButton: true,
			layout: 'grid',
		},
	},
	'drag-drop-zone': {
		kind: 'drag-drop-zone',
		variant: 'bordered',
		size: 'large',
		styling: {
			theme: 'light',
			color: 'primary',
			borderRadius: 'large',
			shadow: 'large',
			border: 'dashed',
			animation: 'bounce',
		},
		behavior: {
			multiple: true,
			allowDragDrop: true,
			clickToUpload: true,
		},
		validation: {
			maxSize: 50 * 1024 * 1024, // 50MB
			maxFiles: 50,
		},
		display: {
			showPreview: true,
			showProgress: true,
			showFileList: true,
			showFileSize: true,
			showRemoveButton: true,
			layout: 'grid',
		},
	},
	'gallery-uploader': {
		kind: 'gallery-uploader',
		variant: 'modern',
		size: 'large',
		styling: {
			theme: 'light',
			color: 'primary',
			borderRadius: 'medium',
			shadow: 'medium',
			border: 'solid',
		},
		behavior: {
			multiple: true,
			allowDragDrop: true,
			clickToUpload: true,
		},
		validation: {
			accept: 'image/*',
			allowedTypes: [
				'image/jpeg',
				'image/png',
				'image/gif',
				'image/webp',
			],
			maxSize: 10 * 1024 * 1024, // 10MB
			maxFiles: 50,
		},
		display: {
			showPreview: true,
			showProgress: true,
			showFileList: true,
			showRemoveButton: true,
			previewSize: 'medium',
			layout: 'grid',
		},
	},
	'profile-picture': {
		kind: 'profile-picture',
		variant: 'modern',
		size: 'medium',
		styling: {
			theme: 'light',
			color: 'primary',
			borderRadius: 'round',
			shadow: 'medium',
			border: 'solid',
		},
		behavior: {
			multiple: false,
			allowDragDrop: true,
			clickToUpload: true,
		},
		validation: {
			accept: 'image/*',
			allowedTypes: ['image/jpeg', 'image/png'],
			maxSize: 3 * 1024 * 1024, // 3MB
			maxFiles: 1,
		},
		display: {
			showPreview: true,
			showProgress: true,
			previewSize: 'large',
		},
	},
	'bulk-uploader': {
		kind: 'bulk-uploader',
		variant: 'detailed',
		size: 'large',
		styling: {
			theme: 'light',
			color: 'primary',
			borderRadius: 'medium',
			shadow: 'large',
			border: 'dashed',
		},
		behavior: {
			multiple: true,
			allowDragDrop: true,
			clickToUpload: true,
			pasteToUpload: true,
		},
		validation: {
			maxSize: 100 * 1024 * 1024, // 100MB
			maxFiles: 100,
		},
		display: {
			showPreview: true,
			showProgress: true,
			showFileList: true,
			showFileSize: true,
			showFileName: true,
			showRemoveButton: true,
			layout: 'list',
		},
	},
};

// =============================================================================
// CONFIGURATION GROUPS
// =============================================================================

export const FILE_UPLOAD_GROUPS = {
	image: [
		'image-uploader',
		'avatar-uploader',
		'gallery-uploader',
		'profile-picture',
	] as FileUploadKind[],
	document: [
		'document-uploader',
		'bulk-uploader',
	] as FileUploadKind[],
	general: [
		'dropzone',
		'file-button',
		'multiple-files',
		'drag-drop-zone',
	] as FileUploadKind[],
	profile: [
		'avatar-uploader',
		'profile-picture',
	] as FileUploadKind[],
	bulk: [
		'multiple-files',
		'drag-drop-zone',
		'bulk-uploader',
	] as FileUploadKind[],
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

export const getFileUploadConfig = (
	kind: FileUploadKind
): FileUploadConfiguration => {
	return (
		FILE_UPLOAD_CONFIGURATIONS[kind] ||
		FILE_UPLOAD_CONFIGURATIONS['dropzone']
	);
};

export const createFileUploadConfig = (
	kind: FileUploadKind,
	overrides?: Partial<FileUploadConfiguration>
): FileUploadConfiguration => ({
	...getFileUploadConfig(kind),
	...overrides,
});

export const validateFileUploadConfig = (
	config: FileUploadConfiguration
): boolean => {
	return !!(
		config.kind && FILE_UPLOAD_CONFIGURATIONS[config.kind]
	);
};

export const formatFileSize = (bytes: number): string => {
	if (bytes === 0) return '0 B';

	const k = 1024;
	const sizes = ['B', 'KB', 'MB', 'GB'];
	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return (
		parseFloat((bytes / Math.pow(k, i)).toFixed(2)) +
		' ' +
		sizes[i]
	);
};

export const getFileExtension = (
	filename: string
): string => {
	return filename.split('.').pop()?.toLowerCase() || '';
};

export const getMimeTypeFromExtension = (
	extension: string
): string => {
	const mimeTypes: Record<string, string> = {
		// Images
		jpg: 'image/jpeg',
		jpeg: 'image/jpeg',
		png: 'image/png',
		gif: 'image/gif',
		webp: 'image/webp',
		svg: 'image/svg+xml',

		// Documents
		pdf: 'application/pdf',
		doc: 'application/msword',
		docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		xls: 'application/vnd.ms-excel',
		xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		ppt: 'application/vnd.ms-powerpoint',
		pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
		txt: 'text/plain',

		// Other
		zip: 'application/zip',
		rar: 'application/x-rar-compressed',
		json: 'application/json',
		xml: 'application/xml',
		csv: 'text/csv',
	};

	return mimeTypes[extension] || 'application/octet-stream';
};

export const validateFile = (
	file: File,
	validation: FileUploadValidation
): { valid: boolean; error?: string } => {
	// Check file size
	if (
		validation.maxSize &&
		file.size > validation.maxSize
	) {
		return {
			valid: false,
			error: `File size exceeds maximum of ${formatFileSize(validation.maxSize)}`,
		};
	}

	if (
		validation.minSize &&
		file.size < validation.minSize
	) {
		return {
			valid: false,
			error: `File size is below minimum of ${formatFileSize(validation.minSize)}`,
		};
	}

	// Check file type
	if (
		validation.allowedTypes &&
		validation.allowedTypes.length > 0
	) {
		if (!validation.allowedTypes.includes(file.type)) {
			return {
				valid: false,
				error: `File type ${file.type} is not allowed`,
			};
		}
	}

	if (
		validation.blockedTypes &&
		validation.blockedTypes.includes(file.type)
	) {
		return {
			valid: false,
			error: `File type ${file.type} is not allowed`,
		};
	}

	// Custom validation
	if (validation.customValidator) {
		const result = validation.customValidator(file);
		if (typeof result === 'string') {
			return { valid: false, error: result };
		}
		if (!result) {
			return {
				valid: false,
				error: 'File failed custom validation',
			};
		}
	}

	return { valid: true };
};

export const generateFileId = (): string => {
	return Math.random().toString(36).substr(2, 9);
};

export const createFilePreview = (
	file: File
): Promise<string> => {
	return new Promise((resolve, reject) => {
		if (!file.type.startsWith('image/')) {
			reject(new Error('File is not an image'));
			return;
		}

		const reader = new FileReader();
		reader.onload = (e) => {
			resolve(e.target?.result as string);
		};
		reader.onerror = () => {
			reject(new Error('Failed to read file'));
		};
		reader.readAsDataURL(file);
	});
};

export const getFileUploadStyles = (
	kind: FileUploadKind,
	variant?: FileUploadVariant,
	size?: FileUploadSize
) => {
	const config = getFileUploadConfig(kind);
	return {
		theme: config.styling?.theme || 'light',
		color: config.styling?.color || 'primary',
		borderRadius: config.styling?.borderRadius || 'medium',
		shadow: config.styling?.shadow,
		border: config.styling?.border,
		animation: config.styling?.animation,
	};
};

export const validateFiles = (
	files: File[],
	validation?: {
		maxFiles?: number;
		maxFileSize?: number;
		allowedTypes?: string[];
	}
): { isValid: boolean; errors: string[] } => {
	const errors: string[] = [];

	if (
		validation?.maxFiles &&
		files.length > validation.maxFiles
	) {
		errors.push(
			`Too many files. Maximum allowed: ${validation.maxFiles}`
		);
	}

	files.forEach((file, index) => {
		if (
			validation?.maxFileSize &&
			file.size > validation.maxFileSize
		) {
			errors.push(
				`File "${file.name}" is too large. Maximum size: ${formatFileSize(validation.maxFileSize)}`
			);
		}

		if (
			validation?.allowedTypes &&
			validation.allowedTypes.length > 0
		) {
			if (!validation.allowedTypes.includes(file.type)) {
				errors.push(
					`File "${file.name}" has unsupported type: ${file.type}`
				);
			}
		}
	});

	return {
		isValid: errors.length === 0,
		errors,
	};
};
