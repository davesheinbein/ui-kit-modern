import React, { forwardRef } from 'react';
import {
	SwitchFactory,
	SwitchFactoryProps,
} from './factory';

export const Switch = forwardRef<
	HTMLDivElement,
	SwitchFactoryProps
>((props, ref) => {
	return <SwitchFactory ref={ref} {...props} />;
});

Switch.displayName = 'Switch';

export default Switch;
