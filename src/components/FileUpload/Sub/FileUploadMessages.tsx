import React from 'react';
import styles from '../file-upload.module.scss';

interface FileUploadMessagesProps {
	error?: string;
	success?: string;
	className?: string;
}

const FileUploadMessages: React.FC<
	FileUploadMessagesProps
> = ({ error, success, className }) => (
	<div className={className || styles.messages}>
		{error && <div style={{ color: 'red' }}>{error}</div>}
		{success && (
			<div style={{ color: 'green' }}>{success}</div>
		)}
	</div>
);

export default FileUploadMessages;
