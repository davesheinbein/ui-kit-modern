import React from 'react';
import styles from '../dropdown.module.scss';
import { Input } from '../../Inputs/Input';

interface DropdownInputProps {
	value: string;
	onChange: (val: string) => void;
	placeholder?: string;
	disabled?: boolean;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
	value,
	onChange,
	placeholder,
	disabled,
}) => (
	<Input
		kind='text'
		className={styles.searchInput}
		value={value}
		onChange={(e) => onChange(e.target.value)}
		placeholder={placeholder}
		disabled={disabled}
		autoFocus
	/>
);

export default DropdownInput;
