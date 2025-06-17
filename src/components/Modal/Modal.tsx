import React from 'react';
import styles from './Modal.module.scss';

export interface ModalProps {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
	className?: string;
	contentClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
	open,
	onClose,
	children,
	className = '',
	contentClassName = '',
}) => {
	if (!open) return null;
	return (
		<div
			className={`${styles.modalOverlay} ${className}`.trim()}
			onClick={onClose}
		>
			<div
				className={`${styles.modalContent} ${contentClassName}`.trim()}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
