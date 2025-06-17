import React from 'react';
import styles from './CustomPuzzleModal.module.scss';

export interface CustomPuzzleModalProps {
	open: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

const CustomPuzzleModal: React.FC<
	CustomPuzzleModalProps
> = ({ open, onClose, children }) => {
	if (!open) return null;
	return (
		<div
			className={styles.customPuzzleModalOverlay}
			onClick={onClose}
		>
			<div
				className={styles.customPuzzleModalContent}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};

// Helper button for DRY uniform modal actions
export const ModalButton: React.FC<
	React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className = '', ...props }) => (
	<button
		className={`${styles.customPuzzleBtn} ${className}`.trim()}
		{...props}
	/>
);

export default CustomPuzzleModal;
