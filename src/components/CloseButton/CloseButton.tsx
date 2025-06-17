import React from 'react';
import styles from './CloseButton.module.scss';

export interface CloseButtonProps {
	onClick: () => void;
	className?: string;
	label?: string;
	style?: React.CSSProperties;
}

const CloseButton: React.FC<CloseButtonProps> = ({
	onClick,
	className = '',
	label = 'Close',
	style,
}) => (
	<button
		type='button'
		className={`${styles.closeBtn} ${styles.modalCloseAbsolute} ${className}`.trim()}
		onClick={onClick}
		aria-label={label}
		style={style}
	>
		&#10005;
	</button>
);

export default CloseButton;
