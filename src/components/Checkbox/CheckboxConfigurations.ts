/**
 * Checkbox Configuration System
 * Defines all checkbox types and their configurations in a DRY manner
 */

export type CheckboxVariant =
	| 'default'
	| 'success'
	| 'warning'
	| 'danger'
	| 'toggle'
	| 'switch'
	| 'custom';

export type ExtendedCheckboxKind =
	| 'checkbox'
	| 'toggle'
	| 'switch'
	| 'dark-mode-toggle'
	| 'custom';

export interface CheckboxConfiguration {
	variant: CheckboxVariant;
	className: string;
	size: 'small' | 'medium' | 'large';
	labelPosition: 'left' | 'right' | 'none';
	defaultChecked?: boolean;
	disabled?: boolean;
	icon?: {
		checked?: string;
		unchecked?: string;
	};
	behavior: {
		toggle: boolean;
		switch: boolean;
		animated: boolean;
	};
	styling: {
		rounded: boolean;
		bordered: boolean;
		shadow: boolean;
	};
}

export const CHECKBOX_CONFIGURATIONS: Record<
	ExtendedCheckboxKind,
	CheckboxConfiguration
> = {
	'checkbox': {
		variant: 'default',
		className: 'checkbox-default',
		size: 'medium',
		labelPosition: 'right',
		behavior: {
			toggle: false,
			switch: false,
			animated: true,
		},
		styling: {
			rounded: false,
			bordered: true,
			shadow: false,
		},
	},
	'toggle': {
		variant: 'toggle',
		className: 'checkbox-toggle',
		size: 'medium',
		labelPosition: 'right',
		behavior: {
			toggle: true,
			switch: false,
			animated: true,
		},
		styling: {
			rounded: true,
			bordered: true,
			shadow: true,
		},
	},
	'switch': {
		variant: 'switch',
		className: 'checkbox-switch',
		size: 'medium',
		labelPosition: 'right',
		behavior: {
			toggle: false,
			switch: true,
			animated: true,
		},
		styling: {
			rounded: true,
			bordered: false,
			shadow: true,
		},
	},
	'dark-mode-toggle': {
		variant: 'toggle',
		className: 'dark-mode-toggle',
		size: 'large',
		labelPosition: 'none',
		behavior: {
			toggle: true,
			switch: false,
			animated: true,
		},
		styling: {
			rounded: true,
			bordered: false,
			shadow: false,
		},
		icon: {
			checked: '🌙',
			unchecked: '☀️',
		},
	},
	'custom': {
		variant: 'custom',
		className: 'checkbox-custom',
		size: 'medium',
		labelPosition: 'right',
		behavior: {
			toggle: false,
			switch: false,
			animated: false,
		},
		styling: {
			rounded: false,
			bordered: true,
			shadow: false,
		},
	},
};
