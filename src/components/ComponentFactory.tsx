import React from 'react';
import UnifiedButton, {
	UnifiedButtonProps,
	ButtonKind,
} from './Button/UnifiedButton';
import {
	UnifiedFormField,
	UnifiedFormFieldProps,
	FieldKind,
} from './FormField';
import {
	UnifiedModal,
	UnifiedModalProps,
	ModalKind,
} from './Modal';

/**
 * Ultra-DRY Component Configuration System
 *
 * This system allows you to create any UI component with a single function call
 * and a configuration object. Maximum reusability with zero duplication.
 */

// Base component types
export type ComponentType =
	| 'button'
	| 'form-field'
	| 'modal';

// Component configuration interfaces
export interface ButtonConfig
	extends Omit<UnifiedButtonProps, 'kind'> {
	type: 'button';
	kind: ButtonKind;
}

export interface FormFieldConfig
	extends Omit<UnifiedFormFieldProps, 'kind'> {
	type: 'form-field';
	kind: FieldKind;
}

export interface ModalConfig
	extends Omit<UnifiedModalProps, 'kind'> {
	type: 'modal';
	kind: ModalKind;
}

export type ComponentConfig =
	| ButtonConfig
	| FormFieldConfig
	| ModalConfig;

/**
 * Universal component factory - creates any component from config
 */
export const createComponent = (
	config: ComponentConfig
): React.ReactElement => {
	switch (config.type) {
		case 'button':
			const {
				type: _,
				kind: buttonKind,
				...buttonProps
			} = config;
			return (
				<UnifiedButton kind={buttonKind} {...buttonProps} />
			);

		case 'form-field':
			const {
				type: __,
				kind: fieldKind,
				...fieldProps
			} = config;
			return (
				<UnifiedFormField
					kind={fieldKind}
					{...fieldProps}
				/>
			);

		case 'modal':
			const {
				type: ___,
				kind: modalKind,
				...modalProps
			} = config;
			return (
				<UnifiedModal kind={modalKind} {...modalProps} />
			);

		default:
			throw new Error(
				`Unknown component type: ${(config as any).type}`
			);
	}
};

/**
 * Component preset library - pre-configured components for common use cases
 */
export const ComponentPresets = {
	// Button presets
	buttons: {
		save: (): ButtonConfig => ({
			type: 'button',
			kind: 'primary',
			children: 'Save',
			type: 'submit',
		}),

		cancel: (): ButtonConfig => ({
			type: 'button',
			kind: 'secondary',
			children: 'Cancel',
			type: 'button',
		}),

		delete: (): ButtonConfig => ({
			type: 'button',
			kind: 'danger',
			children: 'Delete',
		}),

		close: (): ButtonConfig => ({
			type: 'button',
			kind: 'close',
		}),

		fireIcon: (): ButtonConfig => ({
			type: 'button',
			kind: 'icon',
			icon: '🔥',
			label: 'Fire',
		}),

		gameWord: (
			word: string,
			selected = false
		): ButtonConfig => ({
			type: 'button',
			kind: 'word',
			word,
			isSelected: selected,
		}),
	},

	// Form field presets
	formFields: {
		name: (): FormFieldConfig => ({
			type: 'form-field',
			kind: 'input',
			label: 'Name',
			placeholder: 'Enter your name',
			required: true,
		}),

		email: (): FormFieldConfig => ({
			type: 'form-field',
			kind: 'input',
			type: 'email',
			label: 'Email',
			placeholder: 'Enter your email',
			required: true,
		}),

		message: (): FormFieldConfig => ({
			type: 'form-field',
			kind: 'textarea',
			label: 'Message',
			placeholder: 'Enter your message',
			rows: 4,
		}),

		country: (
			options: Array<{ value: string; label: string }>
		): FormFieldConfig => ({
			type: 'form-field',
			kind: 'select',
			label: 'Country',
			options,
		}),

		newsletter: (): FormFieldConfig => ({
			type: 'form-field',
			kind: 'checkbox',
			label: 'Subscribe to newsletter',
		}),

		notifications: (): FormFieldConfig => ({
			type: 'form-field',
			kind: 'switch',
			label: 'Enable notifications',
		}),
	},

	// Modal presets
	modals: {
		info: (
			title: string,
			children: React.ReactNode
		): ModalConfig => ({
			type: 'modal',
			kind: 'basic',
			title,
			children,
		}),

		confirm: (
			title: string,
			message: string,
			onConfirm: () => void
		): ModalConfig => ({
			type: 'modal',
			kind: 'confirmation',
			title,
			children: message,
			onConfirm,
		}),

		alert: (
			title: string,
			message: string,
			severity: 'error' | 'warning' | 'info' = 'info'
		): ModalConfig => ({
			type: 'modal',
			kind: 'alert',
			title,
			children: message,
			severity,
		}),
	},
};

/**
 * Batch component creator - create multiple components from configs
 */
export const createComponents = (
	configs: ComponentConfig[]
): React.ReactElement[] => {
	return configs.map((config, index) =>
		React.cloneElement(createComponent(config), {
			key: index,
		})
	);
};

/**
 * Component builder with fluent API
 */
export class ComponentBuilder {
	private config: Partial<ComponentConfig> = {};

	button(kind: ButtonKind): this {
		this.config = { type: 'button', kind } as ButtonConfig;
		return this;
	}

	formField(kind: FieldKind): this {
		this.config = {
			type: 'form-field',
			kind,
		} as FormFieldConfig;
		return this;
	}

	modal(kind: ModalKind): this {
		this.config = { type: 'modal', kind } as ModalConfig;
		return this;
	}

	props(props: any): this {
		Object.assign(this.config, props);
		return this;
	}

	text(text: string): this {
		if (this.config.type === 'button') {
			(this.config as ButtonConfig).children = text;
		}
		return this;
	}

	icon(icon: React.ReactNode, label?: string): this {
		if (this.config.type === 'button') {
			(this.config as ButtonConfig).icon = icon;
			if (label)
				(this.config as ButtonConfig).label = label;
		}
		return this;
	}

	label(label: string): this {
		if (this.config.type === 'form-field') {
			(this.config as FormFieldConfig).label = label;
		} else if (this.config.type === 'modal') {
			(this.config as ModalConfig).title = label;
		}
		return this;
	}

	build(): React.ReactElement {
		return createComponent(this.config as ComponentConfig);
	}
}

/**
 * Helper function to create a new component builder
 */
export const component = () => new ComponentBuilder();

// Usage examples:
/*
// Using presets
const saveButton = createComponent(ComponentPresets.buttons.save());
const nameField = createComponent(ComponentPresets.formFields.name());

// Using builder pattern
const customButton = component()
  .button('primary')
  .text('Custom Action')
  .icon('🚀')
  .props({ onClick: () => console.log('clicked') })
  .build();

// Using direct config
const directButton = createComponent({
  type: 'button',
  kind: 'icon',
  icon: '❤️',
  label: 'Like'
});

// Batch creation
const formComponents = createComponents([
  ComponentPresets.formFields.name(),
  ComponentPresets.formFields.email(),
  ComponentPresets.formFields.message()
]);
*/

export default {
	createComponent,
	createComponents,
	ComponentPresets,
	ComponentBuilder,
	component,
};
