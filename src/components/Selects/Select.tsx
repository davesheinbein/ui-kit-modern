import React, { forwardRef } from 'react';
import {
	SelectFactory,
	SelectFactoryProps,
} from './factory';

/**
 * Select - Main Select Component
 *
 * Simple wrapper around SelectFactory for backward compatibility and ease of use.
 * For advanced configurations, use SelectFactory directly.
 */
export const Select = forwardRef<
	HTMLDivElement,
	SelectFactoryProps
>((props, ref) => {
	return <SelectFactory ref={ref} {...props} />;
});

Select.displayName = 'Select';

export default Select;
