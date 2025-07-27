import React from 'react';
import { InputPasswordToggleProps } from './types';
import styles from '../Input.module.scss';

const InputPasswordToggle: React.FC<
	InputPasswordToggleProps
> = ({ visible, onToggle, className = '' }) => (
	<button
		type='button'
		className={`${styles.inputPasswordToggle} ${className}`}
		onClick={onToggle}
		aria-label='Toggle password visibility'
	>
		{visible ? '🙈' : '👁️'}
	</button>
);

export default InputPasswordToggle;
