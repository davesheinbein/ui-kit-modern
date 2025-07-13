import React from 'react';
import FileUploadMessages from './FileUploadMessages';

interface FileUploadMessagesWrapperProps {
	state: string;
	errorText?: string;
	successText?: string;
	validationErrors: string[];
}

const FileUploadMessagesWrapper: React.FC<
	FileUploadMessagesWrapperProps
> = ({
	state,
	errorText,
	successText,
	validationErrors,
}) => (
	<FileUploadMessages
		error={
			state === 'error' || validationErrors.length > 0 ?
				errorText || validationErrors[0]
			:	undefined
		}
		success={state === 'success' ? successText : undefined}
	/>
);

export default FileUploadMessagesWrapper;
