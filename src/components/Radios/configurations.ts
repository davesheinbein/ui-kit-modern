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
	| 'custom';

// Extended radio kinds for specific use cases
export type ExtendedRadioKind =
	| 'standard'
	| 'button-group'
	| 'card-selection'
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
	color?: string; // Optional color for custom variant
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

export interface RadioProps {
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

const baseStandard: RadioConfiguration = {
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
};

const baseButton: RadioConfiguration = {
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
};

const baseCard: RadioConfiguration = {
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
};

// --- Consolidated Configurations ---
export const RADIO_CONFIGURATIONS: Record<
	ExtendedRadioKind,
	RadioConfiguration
> = {
	'standard': { ...baseStandard },
	'preference': { ...baseStandard, showDescriptions: true },
	'custom': {
		...baseStandard,
		variant: 'custom',
		borderRadius: 'medium',
	},

	'button-group': { ...baseButton },
	'color-picker': {
		...baseButton,
		style: 'filled',
		showLabels: false,
		borderRadius: 'full',
	},
	'size-selector': {
		...baseButton,
		size: 'small',
		borderRadius: 'small',
	},

	'card-selection': {
		...baseCard,
		alignment: 'grid',
		showDescriptions: true,
	},
	'image-radio': { ...baseCard },
	'plan-selector': {
		...baseCard,
		showDescriptions: true,
		required: true,
	},
};
