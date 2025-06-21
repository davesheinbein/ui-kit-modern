import React from 'react';
import { PageFactory } from './factory';

export { default as UnifiedPage } from './UnifiedPage';
export type {
	PageKind,
	UnifiedPageProps,
	BasePageProps,
} from './UnifiedPage';

// Keep the original Page component for backward compatibility
export { default as Page } from './Page';
export type { PageProps } from './Page';

export * from './configurations';

export {
	default as PageFactory,
	P,
	PagePresets,
	createPage,
} from './factory';
export type { UnifiedPageProps as PageFactoryProps } from './UnifiedPage';

// Legacy components using the unified system
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
