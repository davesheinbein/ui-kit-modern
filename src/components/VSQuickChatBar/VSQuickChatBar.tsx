// VSQuickChatBar.tsx - migrated from VibeGrid
import React from 'react';
import styles from './VSQuickChatBar.module.scss';

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
			<button key={opt} onClick={() => onSend(opt)}>
				{opt}
			</button>
		))}
	</div>
);

export default VSQuickChatBar;
