import React from 'react';
import styles from '../file-upload.module.scss';

interface FileUploadInputProps {
	fileInputRef: React.RefObject<HTMLInputElement>;
	accept?: string;
	multiple?: boolean;
	disabled?: boolean;
	state?: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement>
	) => void;
	className?: string;
}

const FileUploadInput: React.FC<FileUploadInputProps> = ({
	fileInputRef,
	accept,
	multiple,
	disabled,
	state,
	onChange,
	className,
}) => (
	<input
		ref={fileInputRef}
		type='file'
		accept={accept}
		multiple={multiple}
		onChange={onChange}
		className={className || styles.input}
		disabled={disabled || state === 'disabled'}
	/>
);

export default FileUploadInput;
