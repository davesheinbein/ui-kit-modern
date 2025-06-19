// VSQuickChatBar.tsx - migrated to Chat system
import React from 'react';
import styles from './Chat.module.scss';

export interface VSQuickChatBarProps {
	options: string[];
	onSend: (msg: string) => void;
}

const VSQuickChatBar: React.FC<VSQuickChatBarProps> = ({
	options,
	onSend,
}) => (
	<div className={styles.vsQuickChatBar}>
		{options.map((opt) => (
			<button
				key={opt}
				className={styles.vsQuickChatButton}
				onClick={() => onSend(opt)}
			>
				{opt}
			</button>
		))}
	</div>
);

export default VSQuickChatBar;
