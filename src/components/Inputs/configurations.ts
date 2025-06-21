/**
 * Input Configuration System
 *
 * Defines all input types, configurations, and presets for the DRY Input system.
 */

// Basic input types
export type InputVariant =
	| 'text'
	| 'email'
	| 'password'
	| 'number'
	| 'search'
	| 'url'
	| 'tel'
	| 'custom';

// Extended input kinds for specific use cases
export type ExtendedInputKind =
	| 'text'
	| 'email'
	| 'password'
	| 'number'
	| 'search'
	| 'url'
	| 'tel'
	| 'username'
	| 'login-email'
	| 'confirmation-password'
	| 'search-filter'
	| 'custom';

// Input size variants
export type InputSize = 'small' | 'medium' | 'large';

// Input state variants
export type InputState =
	| 'default'
	| 'focus'
	| 'error'
	| 'success'
	| 'disabled';

// Input styling variants
export type InputStyle =
	| 'outlined'
	| 'filled'
	| 'underlined'
	| 'ghost';

// Input configuration interface
export interface InputConfiguration {
	kind: ExtendedInputKind;
	variant?: InputVariant;
	size?: InputSize;
	state?: InputState;
	style?: InputStyle;
	placeholder?: string;
	label?: string;
	helperText?: string;
	errorText?: string;
	successText?: string;
	required?: boolean;
	disabled?: boolean;
	autoComplete?: string;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
	customValidation?: (value: string) => boolean | string;
	icon?: string;
	prefix?: string;
	suffix?: string;
	clearable?: boolean;
	showPasswordToggle?: boolean;
	debounceMs?: number;
}

// Predefined input configurations
export const INPUT_CONFIGURATIONS: Record<
	ExtendedInputKind,
	Partial<InputConfiguration>
> = {
	'text': {
		variant: 'text',
		style: 'outlined',
		size: 'medium',
	},
	'email': {
		variant: 'email',
		style: 'outlined',
		size: 'medium',
		autoComplete: 'email',
		pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
	},
	'password': {
		variant: 'password',
		style: 'outlined',
		size: 'medium',
		autoComplete: 'current-password',
		showPasswordToggle: true,
	},
	'number': {
		variant: 'number',
		style: 'outlined',
		size: 'medium',
	},
	'search': {
		variant: 'search',
		style: 'filled',
		size: 'medium',
		icon: 'search',
		clearable: true,
		debounceMs: 300,
	},
	'url': {
		variant: 'url',
		style: 'outlined',
		size: 'medium',
		autoComplete: 'url',
		prefix: 'https://',
	},
	'tel': {
		variant: 'tel',
		style: 'outlined',
		size: 'medium',
		autoComplete: 'tel',
	},
	'username': {
		variant: 'text',
		style: 'outlined',
		size: 'medium',
		autoComplete: 'username',
		placeholder: 'Enter your username',
		minLength: 3,
		maxLength: 20,
	},
	'login-email': {
		variant: 'email',
		style: 'outlined',
		size: 'large',
		autoComplete: 'email',
		placeholder: 'Enter your email address',
		label: 'Email',
	},
	'confirmation-password': {
		variant: 'password',
		style: 'outlined',
		size: 'medium',
		autoComplete: 'new-password',
		placeholder: 'Confirm your password',
		label: 'Confirm Password',
		showPasswordToggle: true,
	},
	'search-filter': {
		variant: 'search',
		style: 'filled',
		size: 'small',
		icon: 'filter',
		placeholder: 'Filter results...',
		clearable: true,
		debounceMs: 150,
	},
	'custom': {
		variant: 'text',
		style: 'outlined',
		size: 'medium',
	},
};

// Input groupings for organized display
export const INPUT_GROUPS = {
	basic: ['text', 'email', 'password', 'number'],
	specialized: ['search', 'url', 'tel'],
	authentication: [
		'username',
		'login-email',
		'confirmation-password',
	],
	utility: ['search-filter', 'custom'],
} as const;

export type InputKind = ExtendedInputKind;
