import React, { forwardRef, memo } from 'react';
import {
	FileUploadKind,
	getFileUploadConfig,
} from './FileUploadConfigurations';

export interface UnifiedFileUploadProps {
	kind: FileUploadKind;
	className?: string;
	onFilesSelected?: (files: File[]) => void;
	// Add more props as needed
}

const UnifiedFileUpload = forwardRef<
	HTMLDivElement,
	UnifiedFileUploadProps
>((props, ref) => {
	const { kind, className, onFilesSelected, ...restProps } =
		props;
	const config = getFileUploadConfig(kind);

	// Simplified implementation for now
	return (
		<div ref={ref} className={className} {...restProps}>
			<input
				type='file'
				accept={config.accept}
				multiple={config.multiple}
				onChange={(e) => {
					const files = Array.from(e.target.files || []);
					onFilesSelected?.(files);
				}}
			/>
			<p>File Upload: {kind}</p>
		</div>
	);
});

UnifiedFileUpload.displayName = 'UnifiedFileUpload';
export default memo(UnifiedFileUpload);
