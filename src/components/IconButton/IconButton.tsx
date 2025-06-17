import React from 'react';
import styles from './IconButton.module.scss';

export interface IconButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: React.ReactNode;
	label?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
	icon,
	label,
	className = '',
	...props
}) => (
	<button
		className={`${styles.iconBtn} ${className}`.trim()}
		aria-label={label}
		{...props}
	>
		{icon}
	</button>
);

export default IconButton;
