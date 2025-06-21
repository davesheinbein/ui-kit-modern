import React, { forwardRef } from 'react';
import UnifiedFileUpload, {
	UnifiedFileUploadProps,
} from './UnifiedFileUpload';

/**
 * FileUpload Component
 * A simplified wrapper around UnifiedFileUpload for backward compatibility
 */
export interface FileUploadProps
	extends Omit<UnifiedFileUploadProps, 'kind'> {
	kind?: UnifiedFileUploadProps['kind'];
	type?: 'dropzone' | 'button' | 'image' | 'document'; // Legacy prop mapping
}

const FileUpload = forwardRef<
	HTMLDivElement,
	FileUploadProps
>((props, ref) => {
	const { type, kind, ...restProps } = props;

	// Map legacy type prop to kind
	const mappedKind =
		kind ||
		(type === 'button' ? 'file-button'
		: type === 'image' ? 'image-uploader'
		: type === 'document' ? 'document-uploader'
		: 'dropzone');

	return (
		<UnifiedFileUpload
			ref={ref}
			kind={mappedKind}
			{...restProps}
		/>
	);
});

FileUpload.displayName = 'FileUpload';

export default FileUpload;
