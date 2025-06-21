/**
 * StartupPage - Legacy wrapper using the unified page system
 * This maintains backward compatibility while using the new DRY system under the hood
 */

import React from 'react';
import { PageFactory } from './factory';

export interface StartupPageProps {
	onStartDaily: () => void;
	onStartCustom: () => void;
	onBrowseCustom: () => void;
	onShare?: () => void;
	title?: string;
	className?: string;
}

const StartupPage: React.FC<StartupPageProps> = ({
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

export default StartupPage;
