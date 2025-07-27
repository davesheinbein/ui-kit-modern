import React from 'react';
import styles from '../Loading.module.scss';
import type { LoadingProps } from './types';

const Pulse: React.FC<LoadingProps> = ({
	color,
	size,
	animationSpeed,
	shape = 'circle',
	backgroundColor,
	'aria-busy': ariaBusy,
	'aria-label': ariaLabel,
	role,
	...rest
}) => (
	<div
		className={styles.pulse + ' ' + styles[shape]}
		style={{
			backgroundColor: backgroundColor || color,
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

export default Pulse;
