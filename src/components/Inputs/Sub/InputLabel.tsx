import React from 'react';
import { InputLabelProps } from './types';
import styles from '../Input.module.scss';

const InputLabel: React.FC<InputLabelProps> = ({
	label,
	required,
	htmlFor,
	className = '',
}) => {
	if (!label) return null;
	return (
		<label
			className={`${styles.inputLabel} ${className}`}
			htmlFor={htmlFor}
		>
			{label}
			{required && (
				<span className={styles.inputRequired}>*</span>
			)}
		</label>
	);
};

export default InputLabel;
