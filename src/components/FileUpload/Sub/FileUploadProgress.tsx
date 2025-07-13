import React from 'react';
import FileProgress from './FileProgress';

const FileUploadProgress: React.FC<{
	state: string;
	uploadProgress: number;
	className?: string;
}> = ({ state, uploadProgress, className }) => {
	if (state !== 'uploading') return null;
	return (
		<FileProgress
			progress={uploadProgress}
			className={className}
		/>
	);
};

export default FileUploadProgress;
