import React from 'react';
import styles from '../dropdown.module.scss';
import DropdownOptionItem from './DropdownOptionItem';
import { DropdownOption } from './types';

interface DropdownMenuProps {
	options: DropdownOption[];
	selectedValues: string[];
	multi: boolean;
	onSelect: (value: string) => void;
	disabled?: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
	options,
	selectedValues,
	multi,
	onSelect,
	disabled,
}) => (
	<div className={styles.menu} role='listbox'>
		{options.map((option) => (
			<DropdownOptionItem
				key={option.value}
				option={option}
				selected={selectedValues.includes(option.value)}
				multi={multi}
				onSelect={onSelect}
				disabled={disabled}
			/>
		))}
	</div>
);

export default DropdownMenu;
