import React from 'react';
import styles from '../Loading.module.scss';
import type { LoadingProps } from './types';

const Spinner: React.FC<LoadingProps> = ({
	color = '#0070f3',
	size = '2em',
	thickness = '0.3em',
	animationSpeed = 1,
	'aria-busy': ariaBusy = true,
	'aria-label': ariaLabel = 'Loading',
	role = 'status',
	...rest
}) => (
	<div
		className={styles.spinner}
		style={
			{
				// Use CSS variables for theming
				'--spinner-color': color,
				'--spinner-size': size,
				'--spinner-thickness': thickness,
				'--spinner-speed': `${animationSpeed}s`,
			} as React.CSSProperties
		}
		aria-busy={ariaBusy}
		aria-label={ariaLabel}
		role={role}
		tabIndex={-1}
		{...rest}
	/>
);

export default Spinner;
