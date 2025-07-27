import React from 'react';
import { InputClearButtonProps } from './types';
import styles from '../Input.module.scss';

const InputClearButton: React.FC<InputClearButtonProps> = ({
	onClear,
	className = '',
}) => (
	<button
		type='button'
		className={`${styles.inputClearButton} ${className}`}
		onClick={onClear}
		aria-label='Clear input'
	>
		×
	</button>
);

export default InputClearButton;
