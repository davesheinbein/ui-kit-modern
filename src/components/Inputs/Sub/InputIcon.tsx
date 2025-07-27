import React from 'react';
import { InputIconProps } from './types';
import styles from '../Input.module.scss';

const InputIcon: React.FC<InputIconProps> = ({
	icon,
	position = 'left',
	className = '',
}) => {
	if (!icon) return null;
	return (
		<span
			className={`${styles.inputIcon} ${styles[`icon${position.charAt(0).toUpperCase() + position.slice(1)}`]} ${className}`}
		>
			{icon}
		</span>
	);
};

export default InputIcon;
