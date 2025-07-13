import React from 'react';
import styles from '../file-upload.module.scss';

interface FileProgressProps {
	progress: number;
	className?: string;
}

const FileProgress: React.FC<FileProgressProps> = ({
	progress,
	className,
}) => (
	<div className={className || styles.progressBar}>
		<div
			className={styles.progressFill}
			style={{
				width: `${progress}%`,
				background: '#3b82f6',
				height: 4,
			}}
		/>
	</div>
);

export default FileProgress;
