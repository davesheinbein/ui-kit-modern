import React from 'react';
import styles from './PreGameModal.module.scss';

export interface PreGameModalProps {
	open: boolean;
	onReady: () => void;
	onGoHome: () => void;
}

const PreGameModal: React.FC<PreGameModalProps> = ({
	open,
	onReady,
	onGoHome,
}) => {
	if (!open) return null;
	return (
		<div className={styles.pregameModalOverlay}>
			<div className={styles.pregameModal}>
				<h2 className={styles.pregameModalTitle}>
					Ready to Start?
				</h2>
				<p className={styles.pregameModalSubtext}>
					Get ready for your puzzle!
				</p>
				<button
					className={styles.pregameModalReadyBtn}
					onClick={onReady}
				>
					Ready
				</button>
				<button
					className={styles.pregameModalGoHomeBtn}
					onClick={onGoHome}
				>
					Go Home
				</button>
			</div>
		</div>
	);
};

export default PreGameModal;
