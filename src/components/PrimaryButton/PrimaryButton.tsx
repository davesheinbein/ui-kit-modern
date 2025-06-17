import React from 'react';
import styles from './PrimaryButton.module.scss';

export interface PrimaryButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
	children,
	className = '',
	...props
}) => (
	<button
		className={`${styles.primaryBtn} ${className}`.trim()}
		{...props}
	>
		{children}
	</button>
);

export default PrimaryButton;
