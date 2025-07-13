// Checkbox types and interfaces
import type { ExtendedCheckboxKind } from '../configurations';
import type { InputHTMLAttributes } from 'react';

export type CheckboxKind = ExtendedCheckboxKind;

export interface BaseCheckboxProps
	extends Omit<
		InputHTMLAttributes<HTMLInputElement>,
		'size'
	> {
	label?: string;
	labelPosition?: 'left' | 'right' | 'none';
	size?: 'small' | 'medium' | 'large';
	variant?: 'default' | 'success' | 'warning' | 'danger';
	animated?: boolean;
	error?: string;
	helperText?: string;
	fullWidth?: boolean;
}

export interface CheckboxProps extends BaseCheckboxProps {
	kind?: CheckboxKind;
	configuration?: Partial<any>; // Use CheckboxConfiguration if available
	darkModeContext?: boolean;
}
