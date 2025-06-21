/**
 * Switch Configuration System
 *
 * Defines all switch types, configurations, and presets for the DRY Switch system.
 */

// Basic switch types
export type SwitchVariant =
	| 'toggle'
	| 'checkbox'
	| 'button'
	| 'slider'
	| 'custom';

// Extended switch kinds for specific use cases
export type ExtendedSwitchKind =
	| 'toggle'
	| 'checkbox-switch'
	| 'button-switch'
	| 'slider-switch'
	| 'dark-mode-toggle'
	| 'notification-toggle'
	| 'privacy-switch'
	| 'feature-toggle'
	| 'power-switch'
	| 'custom';

// Switch size variants
export type SwitchSize = 'small' | 'medium' | 'large';

// Switch state variants
export type SwitchState =
	| 'default'
	| 'checked'
	| 'disabled'
	| 'error'
	| 'focus';

// Switch styling variants
export type SwitchStyle =
	| 'default'
	| 'filled'
	| 'outlined'
	| 'ghost'
	| 'minimal';

// Core configuration interface
export interface SwitchConfiguration {
	variant: SwitchVariant;
	size: SwitchSize;
	state: SwitchState;
	style: SwitchStyle;
	showLabels: boolean;
	showIcons: boolean;
	animated: boolean;
	required: boolean;
	borderRadius:
		| 'none'
		| 'small'
		| 'medium'
		| 'large'
		| 'full';
	animationDuration: number;
	customStyles?: {
		container?: string;
		switch?: string;
		thumb?: string;
		track?: string;
		label?: string;
	};
}

// Factory props interface
export interface SwitchFactoryProps {
	kind: ExtendedSwitchKind;
	checked?: boolean;
	defaultChecked?: boolean;
	onChange?: (checked: boolean) => void;
	label?: string;
	onLabel?: string;
	offLabel?: string;
	helpText?: string;
	error?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	name?: string;
	id?: string;
	configuration?: Partial<SwitchConfiguration>;
}

// Predefined configurations
export const SWITCH_CONFIGURATIONS: Record<
	ExtendedSwitchKind,
	SwitchConfiguration
> = {
	'toggle': {
		variant: 'toggle',
		size: 'medium',
		state: 'default',
		style: 'default',
		showLabels: false,
		showIcons: false,
		animated: true,
		required: false,
		borderRadius: 'full',
		animationDuration: 200,
	},
	'checkbox-switch': {
		variant: 'checkbox',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		showLabels: true,
		showIcons: false,
		animated: true,
		required: false,
		borderRadius: 'small',
		animationDuration: 150,
	},
	'button-switch': {
		variant: 'button',
		size: 'medium',
		state: 'default',
		style: 'filled',
		showLabels: true,
		showIcons: false,
		animated: true,
		required: false,
		borderRadius: 'medium',
		animationDuration: 150,
	},
	'slider-switch': {
		variant: 'slider',
		size: 'medium',
		state: 'default',
		style: 'default',
		showLabels: false,
		showIcons: false,
		animated: true,
		required: false,
		borderRadius: 'full',
		animationDuration: 250,
	},
	'dark-mode-toggle': {
		variant: 'toggle',
		size: 'medium',
		state: 'default',
		style: 'default',
		showLabels: false,
		showIcons: true,
		animated: true,
		required: false,
		borderRadius: 'full',
		animationDuration: 300,
	},
	'notification-toggle': {
		variant: 'toggle',
		size: 'small',
		state: 'default',
		style: 'minimal',
		showLabels: true,
		showIcons: false,
		animated: true,
		required: false,
		borderRadius: 'full',
		animationDuration: 200,
	},
	'privacy-switch': {
		variant: 'toggle',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		showLabels: true,
		showIcons: true,
		animated: true,
		required: false,
		borderRadius: 'full',
		animationDuration: 200,
	},
	'feature-toggle': {
		variant: 'button',
		size: 'small',
		state: 'default',
		style: 'outlined',
		showLabels: true,
		showIcons: false,
		animated: true,
		required: false,
		borderRadius: 'medium',
		animationDuration: 150,
	},
	'power-switch': {
		variant: 'toggle',
		size: 'large',
		state: 'default',
		style: 'filled',
		showLabels: false,
		showIcons: true,
		animated: true,
		required: false,
		borderRadius: 'full',
		animationDuration: 250,
	},
	'custom': {
		variant: 'custom',
		size: 'medium',
		state: 'default',
		style: 'default',
		showLabels: true,
		showIcons: false,
		animated: true,
		required: false,
		borderRadius: 'medium',
		animationDuration: 200,
	},
};
