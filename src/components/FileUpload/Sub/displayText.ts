export function getFileUploadDisplayText({
	state,
	uploadProgress,
	successText,
	errorText,
	validationErrors,
	dragActive,
	dragActiveText,
	selectedFiles,
	placeholder,
	config,
}: {
	state: string;
	uploadProgress: number;
	successText?: string;
	errorText?: string;
	validationErrors: string[];
	dragActive: boolean;
	dragActiveText?: string;
	selectedFiles: File[];
	placeholder?: string;
	config: any;
}) {
	if (state === 'uploading')
		return `Uploading... ${uploadProgress}%`;
	if (state === 'success')
		return successText || 'Upload successful!';
	if (state === 'error' || validationErrors.length > 0) {
		return (
			errorText || validationErrors[0] || 'Upload failed'
		);
	}
	if (dragActive)
		return dragActiveText || 'Drop files here';
	if (selectedFiles.length > 0) {
		return `${selectedFiles.length} file${selectedFiles.length > 1 ? 's' : ''} selected`;
	}
	return (
		placeholder ||
		config.display?.placeholder ||
		'Choose files or drag and drop'
	);
}
