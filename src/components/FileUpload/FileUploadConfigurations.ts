/**
 * FileUploadConfigurations.ts - DRY FileUpload Configuration System
 */

export type FileUploadKind =
	| 'dropzone'
	| 'image-uploader'
	| 'avatar-uploader'
	| 'document-uploader'
	| 'file-button'
	| 'multiple-files'
	| 'drag-drop-zone';

export type FileUploadVariant =
	| 'default'
	| 'minimal'
	| 'bordered'
	| 'filled'
	| 'modern';

export interface FileUploadConfiguration {
	kind: FileUploadKind;
	variant?: FileUploadVariant;
	accept?: string;
	multiple?: boolean;
	maxSize?: number;
	maxFiles?: number;
	showPreview?: boolean;
	allowDragDrop?: boolean;
}

export const FILE_UPLOAD_CONFIGURATIONS: Record<
	FileUploadKind,
	FileUploadConfiguration
> = {
	'dropzone': {
		kind: 'dropzone',
		variant: 'bordered',
		multiple: true,
		allowDragDrop: true,
		showPreview: true,
	},
	'image-uploader': {
		kind: 'image-uploader',
		variant: 'modern',
		accept: 'image/*',
		multiple: false,
		showPreview: true,
		allowDragDrop: true,
	},
	'avatar-uploader': {
		kind: 'avatar-uploader',
		variant: 'modern',
		accept: 'image/*',
		multiple: false,
		maxSize: 2 * 1024 * 1024, // 2MB
		showPreview: true,
		allowDragDrop: true,
	},
	'document-uploader': {
		kind: 'document-uploader',
		variant: 'default',
		accept: '.pdf,.doc,.docx,.txt',
		multiple: true,
		showPreview: false,
		allowDragDrop: true,
	},
	'file-button': {
		kind: 'file-button',
		variant: 'minimal',
		multiple: false,
		allowDragDrop: false,
		showPreview: false,
	},
	'multiple-files': {
		kind: 'multiple-files',
		variant: 'default',
		multiple: true,
		showPreview: true,
		allowDragDrop: true,
	},
	'drag-drop-zone': {
		kind: 'drag-drop-zone',
		variant: 'bordered',
		multiple: true,
		allowDragDrop: true,
		showPreview: true,
	},
};

export const getFileUploadConfig = (
	kind: FileUploadKind
): FileUploadConfiguration => {
	return (
		FILE_UPLOAD_CONFIGURATIONS[kind] ||
		FILE_UPLOAD_CONFIGURATIONS['dropzone']
	);
};
