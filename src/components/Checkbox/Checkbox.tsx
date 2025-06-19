import React, { forwardRef } from 'react';
import UnifiedCheckbox, {
	UnifiedCheckboxProps,
	CheckboxKind,
} from './UnifiedCheckbox';

// Base Checkbox component (for backward compatibility)
export interface CheckboxProps
	extends Omit<UnifiedCheckboxProps, 'kind'> {
	kind?: CheckboxKind;
}

const Checkbox = forwardRef<
	HTMLInputElement,
	CheckboxProps
>(({ kind = 'checkbox', ...props }, ref) => {
	return (
		<UnifiedCheckbox ref={ref} kind={kind} {...props} />
	);
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
