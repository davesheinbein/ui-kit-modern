import React from 'react';
import styles from '../Loading.module.scss';
import type { LoadingProps } from './types';

const Dots: React.FC<LoadingProps> = ({
	color,
	count = 3,
	animationSpeed,
	'aria-busy': ariaBusy,
	'aria-label': ariaLabel,
	role,
	...rest
}) => (
	<div
		className={styles.dots}
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

export default Dots;
