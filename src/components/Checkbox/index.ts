// Main Checkbox component (the core component)
export { Checkbox } from './Checkbox';
export type {
	CheckboxKind,
	CheckboxProps,
	BaseCheckboxProps,
} from './Sub/types';

// Configuration exports
export * from './configurations';

// Specialized wrapper for dark mode toggle checkbox
import React, { forwardRef } from 'react';
import Checkbox from './Checkbox';
import type { CheckboxProps } from './Sub/types';

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
