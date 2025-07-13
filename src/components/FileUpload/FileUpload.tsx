import { memo, forwardRef } from 'react';
import { FileUploadRoot } from './Sub';
import type { FileUploadProps } from './Sub/types';
import styles from './file-upload.module.scss';

const FileUpload = forwardRef<
	HTMLDivElement,
	FileUploadProps
>((props, ref) => <FileUploadRoot {...props} ref={ref} />);

FileUpload.displayName = 'FileUpload';
export default memo(FileUpload);
