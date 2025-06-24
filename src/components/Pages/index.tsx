import React from 'react';
import { Wrapper } from '../Wrappers';
import { PageFactory } from './factory';

export { default as Page } from './Page';
export type { PageProps, BasePageProps } from './Page';

export * from './configurations';

export {
	default as PageFactory,
	P,
	PagePresets,
	createPage,
} from './factory';

// Legacy components using the  system
export interface StartupPageProps {
	onStartDaily: () => void;
	onStartCustom: () => void;
	onBrowseCustom: () => void;
	onShare?: () => void;
	title?: string;
	className?: string;
}

export const StartupPage: React.FC<StartupPageProps> = ({
	onStartDaily,
	onStartCustom,
	onBrowseCustom,
	onShare,
	title = 'Game Title',
	className,
}) => {
	return (
		<PageFactory
			kind='startup'
			title={title}
			onStartDaily={onStartDaily}
			onStartCustom={onStartCustom}
			onBrowseCustom={onBrowseCustom}
			onShare={onShare}
			className={className}
		/>
	);
};
