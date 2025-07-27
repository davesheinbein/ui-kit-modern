import React from 'react';
import styles from '../Loading.module.scss';
import type { LoadingProps } from './types';

const Ring: React.FC<LoadingProps> = ({
	color,
	size,
	thickness = 4,
	animationSpeed,
	'aria-busy': ariaBusy,
	'aria-label': ariaLabel,
	role,
	...rest
}) => (
	<div
		className={styles.ring}
		style={{
			borderColor: color,
			borderWidth: thickness,
			width: size,
			height: size,
			animationDuration:
				animationSpeed ? `${animationSpeed}s` : undefined,
		}}
		aria-busy={ariaBusy}
		aria-label={ariaLabel}
		role={role}
		{...rest}
	/>
);

export default Ring;
