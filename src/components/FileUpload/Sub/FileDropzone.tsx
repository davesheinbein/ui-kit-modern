import React from 'react';
import styles from '../file-upload.module.scss';

interface FileDropzoneProps {
	dragActive: boolean;
	onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
	onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
	children: React.ReactNode;
	className?: string;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({
	dragActive,
	onDrop,
	onDragOver,
	children,
	className,
}) => (
	<div
		className={className || styles.dropzone}
		onDrop={onDrop}
		onDragOver={onDragOver}
		data-drag-active={dragActive}
	>
		{children}
	</div>
);

export default FileDropzone;
