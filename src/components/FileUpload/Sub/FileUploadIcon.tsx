import React from 'react';
import styles from '../file-upload.module.scss';

const FileUploadIcon: React.FC<{
	icon?: React.ReactNode;
	className?: string;
}> = ({ icon, className }) => {
	if (!icon) return null;
	return (
		<div className={className || styles.icon}>{icon}</div>
	);
};

export default FileUploadIcon;
