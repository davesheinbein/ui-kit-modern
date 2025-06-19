/**
 * Checkbox Factory - Creates checkboxes with minimal configuration
 * This is the most DRY way to create checkboxes in the entire system
 */

import React, { forwardRef } from 'react';
import UnifiedCheckbox, {
	UnifiedCheckboxProps,
	CheckboxKind,
} from './UnifiedCheckbox';
import { CHECKBOX_CONFIGURATIONS } from './CheckboxConfigurations';

export interface CheckboxFactoryProps
	extends Omit<UnifiedCheckboxProps, 'kind'> {
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
		props: Partial<UnifiedCheckboxProps> = {}
	) {
		return <UnifiedCheckbox kind={kind} {...props} />;
	}

	/**
	 * Create a basic checkbox
	 */
	static checkbox(
		props: Partial<UnifiedCheckboxProps> = {}
	) {
		return this.create('checkbox', props);
	}

	/**
	 * Create a toggle checkbox
	 */
	static toggle(props: Partial<UnifiedCheckboxProps> = {}) {
		return this.create('toggle', props);
	}

	/**
	 * Create a switch checkbox
	 */
	static switch(props: Partial<UnifiedCheckboxProps> = {}) {
		return this.create('switch', props);
	}

	/**
	 * Create a dark mode toggle
	 */
	static darkModeToggle(
		props: Partial<UnifiedCheckboxProps> = {}
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
	return (
		<UnifiedCheckbox ref={ref} kind={kind} {...props} />
	);
});

CheckboxFactoryComponent.displayName = 'CheckboxFactory';

/**
 * Ultra-short alias for rapid checkbox creation
 */
export const C = CheckboxFactory;

/**
 * Checkbox presets with common patterns
 */
export const CheckboxPresets = {
	// Basic presets
	basic: (
		label: string,
		props: Partial<UnifiedCheckboxProps> = {}
	) => CheckboxFactory.checkbox({ label, ...props }),

	required: (
		label: string,
		props: Partial<UnifiedCheckboxProps> = {}
	) =>
		CheckboxFactory.checkbox({
			label: `${label} *`,
			...props,
		}),

	// Toggle presets
	toggleSuccess: (
		label: string,
		props: Partial<UnifiedCheckboxProps> = {}
	) =>
		CheckboxFactory.toggle({
			label,
			variant: 'success',
			...props,
		}),

	toggleWarning: (
		label: string,
		props: Partial<UnifiedCheckboxProps> = {}
	) =>
		CheckboxFactory.toggle({
			label,
			variant: 'warning',
			...props,
		}),

	toggleDanger: (
		label: string,
		props: Partial<UnifiedCheckboxProps> = {}
	) =>
		CheckboxFactory.toggle({
			label,
			variant: 'danger',
			...props,
		}),

	// Switch presets
	switchLarge: (
		label: string,
		props: Partial<UnifiedCheckboxProps> = {}
	) =>
		CheckboxFactory.switch({
			label,
			size: 'large',
			...props,
		}),

	switchSmall: (
		label: string,
		props: Partial<UnifiedCheckboxProps> = {}
	) =>
		CheckboxFactory.switch({
			label,
			size: 'small',
			...props,
		}),

	// Special presets
	darkMode: (props: Partial<UnifiedCheckboxProps> = {}) =>
		CheckboxFactory.darkModeToggle(props),

	termsAndConditions: (
		props: Partial<UnifiedCheckboxProps> = {}
	) =>
		CheckboxFactory.checkbox({
			label: 'I agree to the Terms and Conditions',
			...props,
		}),

	newsletter: (props: Partial<UnifiedCheckboxProps> = {}) =>
		CheckboxFactory.checkbox({
			label: 'Subscribe to newsletter',
			...props,
		}),
};

export default CheckboxFactoryComponent;
