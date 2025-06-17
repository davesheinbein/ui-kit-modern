import React from 'react';
import styles from './RulesModal.module.scss';

export interface RulesModalProps {
	open: boolean;
	onClose: () => void;
	columnCount?: number;
	mode?: 'daily' | 'custom' | 'multiplayer';
	wildcardsActive?: boolean;
}

const RulesModal: React.FC<RulesModalProps> = ({
	open,
	onClose,
	columnCount = 4,
	mode = 'daily',
	wildcardsActive,
}) => {
	if (!open) return null;
	return (
		<div className={styles.rulesModalContent}>
			<button
				className={styles.modalCloseAbsolute}
				onClick={onClose}
				aria-label='Close'
			>
				×
			</button>
			<h2>How to Play</h2>
			<ul>
				<li>Find groups of {columnCount} related words.</li>
				<li>
					Click words to select, then submit your guess.
				</li>
				<li>Mode: {mode}</li>
				{wildcardsActive && <li>Wildcards are active!</li>}
			</ul>
		</div>
	);
};

export default RulesModal;
