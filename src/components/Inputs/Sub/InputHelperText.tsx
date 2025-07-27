import React from 'react';
import { InputHelperTextProps } from './types';
import styles from '../Input.module.scss';

const InputHelperText: React.FC<InputHelperTextProps> = ({
	helperText,
	errorText,
	successText,
	className = '',
}) => {
	if (errorText)
		return (
			<div
				className={`${styles.inputHelperText} ${styles.inputError} ${className}`}
			>
				{errorText}
			</div>
		);
	if (successText)
		return (
			<div
				className={`${styles.inputHelperText} ${styles.inputSuccess} ${className}`}
			>
				{successText}
			</div>
		);
	if (helperText)
		return (
			<div
				className={`${styles.inputHelperText} ${className}`}
			>
				{helperText}
			</div>
		);
	return null;
};

export default InputHelperText;
