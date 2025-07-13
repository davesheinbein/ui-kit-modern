import React from 'react';
import FilePreview from './FilePreview';

interface FileUploadPreviewWrapperProps {
	showPreview: boolean;
	selectedFiles: File[];
	styles: any;
}

const FileUploadPreviewWrapper: React.FC<
	FileUploadPreviewWrapperProps
> = ({ showPreview, selectedFiles, styles }) => (
	<>
		{showPreview && selectedFiles.length > 0 && (
			<FilePreview
				files={selectedFiles}
				className={styles.preview}
			/>
		)}
	</>
);

export default FileUploadPreviewWrapper;
