import React from 'react';
import styles from '../file-upload.module.scss';

interface FileUploadActionsProps {
	onUpload?: () => void;
	onClear?: () => void;
	className?: string;
}

const FileUploadActions: React.FC<
	FileUploadActionsProps
> = ({ onUpload, onClear, className }) => (
	<div className={className || styles.actions}>
		{onUpload && (
			<button
				onClick={onUpload}
				className={styles.uploadButton}
			>
				Upload
			</button>
		)}
		{onClear && (
			<button
				onClick={onClear}
				className={styles.clearButton}
			>
				Clear
			</button>
		)}
	</div>
);

export default FileUploadActions;
