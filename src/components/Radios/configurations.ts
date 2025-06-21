/**
 * Radio Configuration System
 *
 * Defines all radio types, configurations, and presets for the DRY Radio system.
 */

// Basic radio types
export type RadioVariant =
	| 'standard'
	| 'button'
	| 'card'
	| 'switch'
	| 'custom';

// Extended radio kinds for specific use cases
export type ExtendedRadioKind =
	| 'standard'
	| 'button-group'
	| 'card-selection'
	| 'toggle-switch'
	| 'image-radio'
	| 'color-picker'
	| 'size-selector'
	| 'plan-selector'
	| 'preference'
	| 'custom';

// Radio size variants
export type RadioSize = 'small' | 'medium' | 'large';

// Radio state variants
export type RadioState =
	| 'default'
	| 'checked'
	| 'disabled'
	| 'error'
	| 'focus';

// Radio styling variants
export type RadioStyle =
	| 'default'
	| 'outlined'
	| 'filled'
	| 'ghost'
	| 'minimal';

// Radio alignment options
export type RadioAlignment =
	| 'horizontal'
	| 'vertical'
	| 'grid';

// Radio option structure
export interface RadioOption {
	value: string;
	label: string;
	description?: string;
	icon?: React.ReactNode;
	image?: string;
	disabled?: boolean;
	className?: string;
}

// Core configuration interface
export interface RadioConfiguration {
	variant: RadioVariant;
	size: RadioSize;
	state: RadioState;
	style: RadioStyle;
	alignment: RadioAlignment;
	showLabels: boolean;
	showDescriptions: boolean;
	allowDeselect: boolean;
	required: boolean;
	spacing: 'tight' | 'normal' | 'loose';
	borderRadius:
		| 'none'
		| 'small'
		| 'medium'
		| 'large'
		| 'full';
	animationDuration: number;
	customStyles?: {
		container?: string;
		option?: string;
		input?: string;
		label?: string;
		description?: string;
	};
}

// Factory props interface
export interface RadioFactoryProps {
	kind: ExtendedRadioKind;
	name: string;
	options: RadioOption[];
	value?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	label?: string;
	helpText?: string;
	error?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	configuration?: Partial<RadioConfiguration>;
}

// Predefined configurations
export const RADIO_CONFIGURATIONS: Record<
	ExtendedRadioKind,
	RadioConfiguration
> = {
	'standard': {
		variant: 'standard',
		size: 'medium',
		state: 'default',
		style: 'default',
		alignment: 'vertical',
		showLabels: true,
		showDescriptions: false,
		allowDeselect: false,
		required: false,
		spacing: 'normal',
		borderRadius: 'small',
		animationDuration: 200,
	},
	'button-group': {
		variant: 'button',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		alignment: 'horizontal',
		showLabels: true,
		showDescriptions: false,
		allowDeselect: false,
		required: false,
		spacing: 'tight',
		borderRadius: 'medium',
		animationDuration: 150,
	},
	'card-selection': {
		variant: 'card',
		size: 'large',
		state: 'default',
		style: 'outlined',
		alignment: 'grid',
		showLabels: true,
		showDescriptions: true,
		allowDeselect: false,
		required: false,
		spacing: 'normal',
		borderRadius: 'medium',
		animationDuration: 200,
	},
	'toggle-switch': {
		variant: 'switch',
		size: 'medium',
		state: 'default',
		style: 'filled',
		alignment: 'horizontal',
		showLabels: true,
		showDescriptions: false,
		allowDeselect: true,
		required: false,
		spacing: 'normal',
		borderRadius: 'full',
		animationDuration: 300,
	},
	'image-radio': {
		variant: 'card',
		size: 'large',
		state: 'default',
		style: 'outlined',
		alignment: 'horizontal',
		showLabels: true,
		showDescriptions: false,
		allowDeselect: false,
		required: false,
		spacing: 'normal',
		borderRadius: 'medium',
		animationDuration: 200,
	},
	'color-picker': {
		variant: 'button',
		size: 'medium',
		state: 'default',
		style: 'filled',
		alignment: 'horizontal',
		showLabels: false,
		showDescriptions: false,
		allowDeselect: false,
		required: false,
		spacing: 'tight',
		borderRadius: 'full',
		animationDuration: 150,
	},
	'size-selector': {
		variant: 'button',
		size: 'small',
		state: 'default',
		style: 'outlined',
		alignment: 'horizontal',
		showLabels: true,
		showDescriptions: false,
		allowDeselect: false,
		required: false,
		spacing: 'tight',
		borderRadius: 'small',
		animationDuration: 150,
	},
	'plan-selector': {
		variant: 'card',
		size: 'large',
		state: 'default',
		style: 'outlined',
		alignment: 'horizontal',
		showLabels: true,
		showDescriptions: true,
		allowDeselect: false,
		required: true,
		spacing: 'normal',
		borderRadius: 'medium',
		animationDuration: 200,
	},
	'preference': {
		variant: 'standard',
		size: 'medium',
		state: 'default',
		style: 'default',
		alignment: 'vertical',
		showLabels: true,
		showDescriptions: true,
		allowDeselect: false,
		required: false,
		spacing: 'normal',
		borderRadius: 'small',
		animationDuration: 200,
	},
	'custom': {
		variant: 'custom',
		size: 'medium',
		state: 'default',
		style: 'default',
		alignment: 'vertical',
		showLabels: true,
		showDescriptions: false,
		allowDeselect: false,
		required: false,
		spacing: 'normal',
		borderRadius: 'medium',
		animationDuration: 200,
	},
};
