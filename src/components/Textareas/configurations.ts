/**
 * Textarea Configuration System
 */

export type TextareaVariant =
	| 'standard'
	| 'outlined'
	| 'filled'
	| 'minimal'
	| 'custom';

export type ExtendedTextareaKind =
	| 'standard'
	| 'comment'
	| 'description'
	| 'message'
	| 'code'
	| 'review'
	| 'feedback'
	| 'note'
	| 'custom';

export type TextareaSize = 'small' | 'medium' | 'large';
export type TextareaState =
	| 'default'
	| 'focus'
	| 'error'
	| 'success'
	| 'disabled';
export type TextareaStyle =
	| 'outlined'
	| 'filled'
	| 'underlined'
	| 'ghost';

export interface TextareaConfiguration {
	variant: TextareaVariant;
	size: TextareaSize;
	state: TextareaState;
	style: TextareaStyle;
	showCounter: boolean;
	autoResize: boolean;
	required: boolean;
	borderRadius: 'none' | 'small' | 'medium' | 'large';
	rows: number;
	maxRows?: number;
	customStyles?: {
		container?: string;
		textarea?: string;
		label?: string;
		counter?: string;
	};
}

export interface TextareaProps {
	kind: ExtendedTextareaKind;
	value?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	label?: string;
	placeholder?: string;
	helpText?: string;
	error?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	maxLength?: number;
	name?: string;
	id?: string;
	configuration?: Partial<TextareaConfiguration>;
}

export const TEXTAREA_CONFIGURATIONS: Record<
	ExtendedTextareaKind,
	TextareaConfiguration
> = {
	standard: {
		variant: 'standard',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		showCounter: false,
		autoResize: false,
		required: false,
		borderRadius: 'medium',
		rows: 3,
	},
	comment: {
		variant: 'outlined',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		showCounter: true,
		autoResize: true,
		required: false,
		borderRadius: 'medium',
		rows: 3,
		maxRows: 8,
	},
	description: {
		variant: 'filled',
		size: 'medium',
		state: 'default',
		style: 'filled',
		showCounter: true,
		autoResize: true,
		required: false,
		borderRadius: 'medium',
		rows: 4,
		maxRows: 10,
	},
	message: {
		variant: 'minimal',
		size: 'medium',
		state: 'default',
		style: 'ghost',
		showCounter: false,
		autoResize: true,
		required: false,
		borderRadius: 'medium',
		rows: 2,
		maxRows: 6,
	},
	code: {
		variant: 'outlined',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		showCounter: false,
		autoResize: false,
		required: false,
		borderRadius: 'small',
		rows: 10,
	},
	review: {
		variant: 'outlined',
		size: 'large',
		state: 'default',
		style: 'outlined',
		showCounter: true,
		autoResize: true,
		required: true,
		borderRadius: 'medium',
		rows: 5,
		maxRows: 12,
	},
	feedback: {
		variant: 'filled',
		size: 'medium',
		state: 'default',
		style: 'filled',
		showCounter: true,
		autoResize: true,
		required: false,
		borderRadius: 'medium',
		rows: 4,
		maxRows: 8,
	},
	note: {
		variant: 'minimal',
		size: 'small',
		state: 'default',
		style: 'ghost',
		showCounter: false,
		autoResize: true,
		required: false,
		borderRadius: 'small',
		rows: 2,
		maxRows: 5,
	},
	custom: {
		variant: 'custom',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		showCounter: false,
		autoResize: false,
		required: false,
		borderRadius: 'medium',
		rows: 4,
	},
};
