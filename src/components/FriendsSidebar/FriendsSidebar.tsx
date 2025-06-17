// FriendsSidebar.tsx - migrated from VibeGrid
import React from 'react';
import styles from './FriendsSidebar.module.scss';

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
	<div
		className={
			open ?
				styles.friendsSidebarOpen
			:	styles.friendsSidebarClosed
		}
	>
		<button
			className={styles.friendsSidebarCloseBtn}
			onClick={onClose}
		>
			Close
		</button>
		{children}
	</div>
);

export default FriendsSidebar;
