import React, { forwardRef } from 'react';
import UnifiedCheckbox, {
	UnifiedCheckboxProps,
} from './UnifiedCheckbox';

/**
 * DarkModeToggle - Legacy component wrapper for dark mode toggle functionality
 * This component is now powered by the unified checkbox system for maximum DRY-ness
 */
export interface DarkModeToggleProps
	extends Omit<UnifiedCheckboxProps, 'kind'> {}

const DarkModeToggle = forwardRef<
	HTMLInputElement,
	DarkModeToggleProps
>((props, ref) => {
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

export default DarkModeToggle;
