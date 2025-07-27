import React from 'react';
import styles from '../Loading.module.scss';
import type { LoadingProps } from './types';

const Wave: React.FC<LoadingProps> = ({
	color,
	count = 5,
	animationSpeed,
	direction = 'horizontal',
	'aria-busy': ariaBusy,
	'aria-label': ariaLabel,
	role,
	...rest
}) => (
	<div
		className={styles.wave + ' ' + styles[direction]}
		aria-busy={ariaBusy}
		aria-label={ariaLabel}
		role={role}
		{...rest}
	>
		{Array.from({ length: count }).map((_, i) => (
			<span
				key={i}
				style={{
					backgroundColor: color,
					animationDuration:
						animationSpeed ?
							`${animationSpeed}s`
						:	undefined,
				}}
			/>
		))}
	</div>
);

export default Wave;
