import { ReactNode, InputHTMLAttributes } from 'react';

export interface InputLabelProps {
	label?: ReactNode;
	required?: boolean;
	htmlFor?: string;
	className?: string;
}

export interface InputHelperTextProps {
	helperText?: ReactNode;
	errorText?: ReactNode;
	successText?: ReactNode;
	className?: string;
}

export interface InputIconProps {
	icon?: ReactNode;
	position?: 'left' | 'right';
	className?: string;
}

export interface InputClearButtonProps {
	onClear: () => void;
	className?: string;
}

export interface InputPasswordToggleProps {
	visible: boolean;
	onToggle: () => void;
	className?: string;
}

export interface InputProps
	extends Omit<
		InputHTMLAttributes<HTMLInputElement>,
		'size' | 'prefix' | 'suffix' | 'onChange'
	> {
	kind?: string;
	componentId?: string;
	variant?: string;
	size?: 'small' | 'medium' | 'large';
	state?: 'default' | 'error' | 'success';
	inputStyle?: 'outlined' | 'filled' | 'plain';
	label?: ReactNode;
	helperText?: ReactNode;
	errorText?: ReactNode;
	successText?: ReactNode;
	required?: boolean;
	icon?: ReactNode;
	prefix?: ReactNode;
	suffix?: ReactNode;
	clearable?: boolean;
	showPasswordToggle?: boolean;
	debounceMs?: number;
	debounced?: boolean;
	onValueChange?: (value: string) => void;
	containerClassName?: string;
	labelClassName?: string;
	inputClassName?: string;
	helperClassName?: string;
	iconClassName?: string;
	className?: string;
	customValidation?: (value: string) => string | undefined;
	/**
	 * Appearance style for the input: 'border', 'shadow', or 'borderShadow'.
	 */
	appearance?: 'border' | 'shadow' | 'borderShadow';
	boxShadow?: boolean;
	border?: boolean;
	onChange?: (
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
}
