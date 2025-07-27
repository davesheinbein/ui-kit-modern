import React from 'react';
import type { LoadingProps } from './types';

const CustomSVG: React.FC<LoadingProps> = ({
	svg,
	'aria-busy': ariaBusy,
	'aria-label': ariaLabel,
	role,
	...rest
}) => (
	<span
		aria-busy={ariaBusy}
		aria-label={ariaLabel}
		role={role}
		{...rest}
	>
		{svg}
	</span>
);

export default CustomSVG;
