/**
 * Checkbox Factory - Creates checkboxes with minimal configuration
 * This is the most DRY way to create checkboxes in the entire system
 */

import React, { forwardRef } from 'react';
import Checkbox, {
	CheckboxProps,
	CheckboxKind,
} from './Checkbox';
import { CHECKBOX_CONFIGURATIONS } from './configurations';

export interface CheckboxFactoryProps
	extends Omit<CheckboxProps, 'kind'> {
	kind: CheckboxKind;
}

/**
 * CheckboxFactory - Main factory for creating checkboxes
 */
export class CheckboxFactory {
	/**
	 * Create any checkbox with required props and optional overrides
	 */
	static create(
		kind: CheckboxKind,
		props: Partial<CheckboxProps> = {}
	) {
		return <Checkbox kind={kind} {...props} />;
	}

	/**
	 * Create a basic checkbox
	 */
	static checkbox(props: Partial<CheckboxProps> = {}) {
		return this.create('checkbox', props);
	}

	/**
	 * Create a toggle checkbox
	 */
	static toggle(props: Partial<CheckboxProps> = {}) {
		return this.create('toggle', props);
	}

	/**
	 * Create a switch checkbox
	 */
	static switch(props: Partial<CheckboxProps> = {}) {
		return this.create('switch', props);
	}

	/**
	 * Create a dark mode toggle
	 */
	static darkModeToggle(
		props: Partial<CheckboxProps> = {}
	) {
		return this.create('dark-mode-toggle', {
			darkModeContext: true,
			...props,
		});
	}
}

/**
 * Factory component for creating checkboxes
 */
const CheckboxFactoryComponent = forwardRef<
	HTMLInputElement,
	CheckboxFactoryProps
>(({ kind, ...props }, ref) => {
	return <Checkbox ref={ref} kind={kind} {...props} />;
});

CheckboxFactoryComponent.displayName = 'CheckboxFactory';

/**
 * Checkbox presets with common patterns
 */
export const CheckboxPresets = {
	// Basic presets
	basic: (
		label: string,
		props: Partial<CheckboxProps> = {}
	) => CheckboxFactory.checkbox({ label, ...props }),

	required: (
		label: string,
		props: Partial<CheckboxProps> = {}
	) =>
		CheckboxFactory.checkbox({
			label: `${label} *`,
			...props,
		}),

	// Toggle presets
	toggleSuccess: (
		label: string,
		props: Partial<CheckboxProps> = {}
	) =>
		CheckboxFactory.toggle({
			label,
			variant: 'success',
			...props,
		}),

	toggleWarning: (
		label: string,
		props: Partial<CheckboxProps> = {}
	) =>
		CheckboxFactory.toggle({
			label,
			variant: 'warning',
			...props,
		}),

	toggleDanger: (
		label: string,
		props: Partial<CheckboxProps> = {}
	) =>
		CheckboxFactory.toggle({
			label,
			variant: 'danger',
			...props,
		}),

	// Switch presets
	switchLarge: (
		label: string,
		props: Partial<CheckboxProps> = {}
	) =>
		CheckboxFactory.switch({
			label,
			size: 'large',
			...props,
		}),

	switchSmall: (
		label: string,
		props: Partial<CheckboxProps> = {}
	) =>
		CheckboxFactory.switch({
			label,
			size: 'small',
			...props,
		}),

	// Special presets
	darkMode: (props: Partial<CheckboxProps> = {}) =>
		CheckboxFactory.darkModeToggle(props),

	termsAndConditions: (
		props: Partial<CheckboxProps> = {}
	) =>
		CheckboxFactory.checkbox({
			label: 'I agree to the Terms and Conditions',
			...props,
		}),

	newsletter: (props: Partial<CheckboxProps> = {}) =>
		CheckboxFactory.checkbox({
			label: 'Subscribe to newsletter',
			...props,
		}),
};

export default CheckboxFactoryComponent;
