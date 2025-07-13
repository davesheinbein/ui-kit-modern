// Dropdown types and interfaces
import type { ReactNode } from 'react';

export interface DropdownOption {
	label: string;
	value: string;
	numericValue?: number;
	className?: string;
}

export interface DropdownProps {
	data?: DropdownOption[];
	children?: ReactNode;
	value?: string | string[];
	defaultValue?: string | string[];
	onChange: (value: string | string[]) => void;
	onSearch?: (search: string) => void;
	label?: string | ReactNode;
	helpText?: string | ReactNode;
	error?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	loading?: boolean;
	name?: string;
	id?: string;
	variant?:
		| 'dropdown'
		| 'multiselect'
		| 'searchable'
		| 'custom';
	size?: 'small' | 'medium' | 'large';
	searchable?: boolean;
	clearable?: boolean;
	filter?: boolean;
	placeholder?: string;
	searchPlaceholder?: string;
	loadingMessage?: string;
	componentId?: string;
	[key: string]: any;
}
