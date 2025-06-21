import React, { forwardRef } from 'react';
import { RadioFactory, RadioFactoryProps } from './factory';

/**
 * Radio - Main Radio Component
 *
 * Simple wrapper around RadioFactory for backward compatibility and ease of use.
 * For advanced configurations, use RadioFactory directly.
 */
export const Radio = forwardRef<
	HTMLDivElement,
	RadioFactoryProps
>((props, ref) => {
	return <RadioFactory ref={ref} {...props} />;
});

Radio.displayName = 'Radio';

export default Radio;
