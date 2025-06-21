export { default as UnifiedCheckbox } from './UnifiedCheckbox';
export type {
	CheckboxKind,
	UnifiedCheckboxProps,
	BaseCheckboxProps,
} from './UnifiedCheckbox';

// Keep the original Checkbox component for backward compatibility
export { default as Checkbox } from './Checkbox';
export type { CheckboxProps } from './Checkbox';

export * from './configurations';

export {
	default as CheckboxFactory,
	C,
	CheckboxPresets,
	CheckboxFactory as CheckboxFactoryClass,
} from './factory';
export type { CheckboxFactoryProps } from './factory';

// Legacy exports for specific checkbox types (these now use the unified system)
import React, { forwardRef } from 'react';
import UnifiedCheckbox, { UnifiedCheckboxProps } from './UnifiedCheckbox';

export interface DarkModeToggleProps extends Omit<UnifiedCheckboxProps, 'kind'> {}

export const DarkModeToggle = forwardRef<HTMLInputElement, DarkModeToggleProps>((props, ref) => {
	return (
		<UnifiedCheckbox
			ref={ref}
			kind='dark-mode-toggle'
			darkModeContext={true}
			{...props}
		/>
	);
});

DarkModeToggle.displayName = 'DarkModeToggle';
