// Main Checkbox component (the core component)
export { Checkbox } from './Checkbox';
export type {
	CheckboxKind,
	CheckboxProps,
	BaseCheckboxProps,
} from './Checkbox';

// Configuration exports
export * from './configurations';

// Legacy exports for specific checkbox types (these now use the  system)
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
