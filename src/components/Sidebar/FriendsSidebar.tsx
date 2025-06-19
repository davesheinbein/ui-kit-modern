// Legacy FriendsSidebar.tsx - Backward compatibility wrapper
import React from 'react';
import UnifiedSidebar from './UnifiedSidebar';

export interface FriendsSidebarProps {
	open: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

const FriendsSidebar: React.FC<FriendsSidebarProps> = ({
	open,
	onClose,
	children,
}) => (
	<UnifiedSidebar
		kind='friends'
		open={open}
		onClose={onClose}
	>
		{children}
	</UnifiedSidebar>
);

export default FriendsSidebar;
