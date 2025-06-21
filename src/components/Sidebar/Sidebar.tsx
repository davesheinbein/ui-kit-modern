// Base Sidebar component - Backward compatibility wrapper
import React from 'react';
import UnifiedSidebar from './UnifiedSidebar';
import { ExtendedSidebarKind } from './configurations';

export interface SidebarProps {
	kind?: ExtendedSidebarKind;
	open: boolean;
	onClose: () => void;
	children?: React.ReactNode;
	title?: string;
	[key: string]: any;
}

/**
 * Legacy Sidebar component for backward compatibility
 * For new development, use UnifiedSidebar directly
 */
const Sidebar: React.FC<SidebarProps> = ({
	kind = 'friends',
	open,
	onClose,
	children,
	title,
	...props
}) => (
	<UnifiedSidebar
		kind={kind}
		open={open}
		onClose={onClose}
		title={title}
		{...props}
	>
		{children}
	</UnifiedSidebar>
);

export default Sidebar;

// Legacy export for backward compatibility
export interface FriendsSidebarProps {
	open: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

export const FriendsSidebar: React.FC<FriendsSidebarProps> = ({
	open,
	onClose,
	children,
}) => (
	<Sidebar
		kind='friends'
		open={open}
		onClose={onClose}
	>
		{children}
	</Sidebar>
);
