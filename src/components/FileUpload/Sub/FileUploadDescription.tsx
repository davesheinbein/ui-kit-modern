import React from 'react';
import styles from '../file-upload.module.scss';

const FileUploadDescription: React.FC<{
	description?: React.ReactNode;
	className?: string;
}> = ({ description, className }) => {
	if (!description) return null;
	return (
		<div className={className || styles.description}>
			{description}
		</div>
	);
};

export default FileUploadDescription;
