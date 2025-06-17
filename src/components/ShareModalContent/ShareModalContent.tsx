// ShareModalContent.tsx - migrated from VibeGrid
import React from 'react';
import styles from './ShareModalContent.module.scss';

export interface ShareModalContentProps {
	children: React.ReactNode;
	className?: string;
}

const ShareModalContent: React.FC<
	ShareModalContentProps
> = ({ children, className = '' }) => (
	<div
		className={`${styles.shareModalContent} ${className}`.trim()}
	>
		{children}
	</div>
);

export default ShareModalContent;
