import React from 'react';
import styles from './SecondaryButton.module.scss';

export interface SecondaryButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
	children,
	className = '',
	...props
}) => (
	<button
		className={`${styles.secondaryBtn} ${className}`.trim()}
		{...props}
	>
		{children}
	</button>
);

export default SecondaryButton;
