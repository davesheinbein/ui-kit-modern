// src/components/FileUpload/factory.ts
import React from 'react';
import {
	FileUploadConfiguration,
	getFileUploadConfig,
	FileUploadKind,
} from './configurations';
import { FileUploadProps } from './FileUpload';
import FileUpload from './FileUpload';

/**
 * FileUpload Factory
 * Creates configured file upload components from configuration objects
 */
export class FileUploadFactory {
	static create(
		config: FileUploadConfiguration &
			Partial<FileUploadProps>
	) {
		return React.forwardRef<
			HTMLDivElement,
			Partial<FileUploadProps>
		>((props, ref) =>
			React.createElement(FileUpload, {
				ref,
				...config,
				...props,
			})
		);
	}

	static createFromKind(kind: FileUploadKind) {
		const config = getFileUploadConfig(kind);
		return this.create(config);
	}
}

// Pre-configured file upload components
export const FileUploadComponents = {
	// Basic upload types
	Dropzone: FileUploadFactory.createFromKind('dropzone'),
	FileButton:
		FileUploadFactory.createFromKind('file-button'),
	DragDropZone: FileUploadFactory.createFromKind(
		'drag-drop-zone'
	),
	MultipleFiles: FileUploadFactory.createFromKind(
		'multiple-files'
	),
	BulkUploader:
		FileUploadFactory.createFromKind('bulk-uploader'),

	// Image upload types
	ImageUploader: FileUploadFactory.createFromKind(
		'image-uploader'
	),
	AvatarUploader: FileUploadFactory.createFromKind(
		'avatar-uploader'
	),
	GalleryUploader: FileUploadFactory.createFromKind(
		'gallery-uploader'
	),
	ProfilePicture: FileUploadFactory.createFromKind(
		'profile-picture'
	),

	// Document upload types
	DocumentUploader: FileUploadFactory.createFromKind(
		'document-uploader'
	),
};

export default FileUploadFactory;
