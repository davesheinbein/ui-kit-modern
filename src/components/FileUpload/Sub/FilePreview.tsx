import React from 'react';
import styles from '../file-upload.module.scss';

interface FilePreviewProps {
	files: File[];
	className?: string;
}

const FilePreview: React.FC<FilePreviewProps> = ({
	files,
	className,
}) => {
	const safeFiles =
		Array.isArray(files) ? files
		: files ? [files]
		: [];
	return (
		<div className={className || styles.preview}>
			{safeFiles.map((file, i) => (
				<div key={i} className={styles.previewItem}>
					{file.name}
				</div>
			))}
		</div>
	);
};

export default FilePreview;
