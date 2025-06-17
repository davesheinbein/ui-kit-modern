import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './GoBackButton.module.scss';

export interface GoBackButtonProps {
	onClick: () => void;
	className?: string;
	label?: string;
	style?: React.CSSProperties;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({
	onClick,
	className = '',
	style,
	label,
}) => (
	<button
		type='button'
		className={`${styles.iconBtn} ${styles.goBackBtn} ${className}`.trim()}
		onClick={onClick}
		style={style}
		aria-label={label || 'Back'}
	>
		<FontAwesomeIcon
			icon={faArrowLeft}
			className={styles.goBackIcon}
		/>
		{label && (
			<span className={styles.goBackLabel}>{label}</span>
		)}
	</button>
);

export default GoBackButton;
