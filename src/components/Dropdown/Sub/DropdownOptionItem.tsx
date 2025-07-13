import React from 'react';
import styles from '../dropdown.module.scss';
import { Checkbox } from '../../Checkbox/Checkbox';
import { DropdownOption } from './types';

interface DropdownOptionItemProps {
	option: DropdownOption;
	selected: boolean;
	multi: boolean;
	onSelect: (value: string) => void;
	disabled?: boolean;
}

const DropdownOptionItem: React.FC<
	DropdownOptionItemProps
> = ({ option, selected, multi, onSelect, disabled }) => (
	<div
		className={
			styles.option +
			(selected ? ' ' + styles.selected : '')
		}
		onClick={() => !disabled && onSelect(option.value)}
		aria-selected={selected}
		tabIndex={-1}
		role='option'
	>
		{multi && (
			<Checkbox checked={selected} readOnly tabIndex={-1} />
		)}
		<span>{option.label}</span>
	</div>
);

export default DropdownOptionItem;
