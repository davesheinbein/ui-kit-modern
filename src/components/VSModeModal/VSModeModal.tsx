import React from 'react';
import styles from './VSModeModal.module.scss';

export interface VSModeModalProps {
	open: boolean;
	onClose: () => void;
	onStart: (mode: string) => void;
}

const VSModeModal: React.FC<VSModeModalProps> = ({
	open,
	onClose,
	onStart,
}) => {
	if (!open) return null;
	return (
		<div className={styles.vsModeModalOverlay}>
			<div className={styles.vsModeModalContent}>
				<h2>Choose VS Mode</h2>
				<button onClick={() => onStart('classic')}>
					Classic
				</button>
				<button onClick={() => onStart('timed')}>
					Timed
				</button>
				<button onClick={onClose}>Cancel</button>
			</div>
		</div>
	);
};

export default VSModeModal;
