import React from 'react';
import { Wrapper } from '../../Wrappers';
import FileUploadIcon from './FileUploadIcon';
import FileUploadDescription from './FileUploadDescription';
import FileUploadProgress from './FileUploadProgress';

interface FileUploadContentProps {
	config: any;
	styles: any;
	displayText: string;
	state: string;
	uploadProgress: number;
	className?: string;
}

const FileUploadContent: React.FC<
	FileUploadContentProps
> = ({
	config,
	styles,
	displayText,
	state,
	uploadProgress,
	className,
}) => (
	<Wrapper className={styles.content}>
		<FileUploadIcon
			icon={config.display?.icon}
			className={styles.icon}
		/>
		<Wrapper className={styles.text}>{displayText}</Wrapper>
		<FileUploadDescription
			description={config.display?.description}
			className={styles.description}
		/>
		<FileUploadProgress
			state={state}
			uploadProgress={uploadProgress}
			className={styles.progressBar}
		/>
	</Wrapper>
);

export default FileUploadContent;
