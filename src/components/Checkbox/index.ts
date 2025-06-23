// Main Checkbox component (the core component)
export {
	default as Checkbox,
	UnifiedCheckbox,
} from './Checkbox';
export type {
	CheckboxKind,
	CheckboxProps,
	UnifiedCheckboxProps,
	BaseCheckboxProps,
} from './Checkbox';

// Configuration exports
export * from './configurations';

// Factory exports
export {
	default as CheckboxFactory,
	C,
	CheckboxPresets,
	CheckboxFactory as CheckboxFactoryClass,
} from './factory';
export type { CheckboxFactoryProps } from './factory';

// Legacy exports for specific checkbox types (these now use the unified system)
import React, { forwardRef } from 'react';
import Checkbox, { CheckboxProps } from './Checkbox';

export interface DarkModeToggleProps
	extends Omit<CheckboxProps, 'kind'> {}

export const DarkModeToggle = forwardRef<
	HTMLInputElement,
	DarkModeToggleProps
>((props, ref) => {
	return React.createElement(Checkbox, {
		ref,
		kind: 'dark-mode-toggle',
		darkModeContext: true,
		...props,
	});
});

DarkModeToggle.displayName = 'DarkModeToggle';

// Default export is the main Checkbox component
export default Checkbox;
