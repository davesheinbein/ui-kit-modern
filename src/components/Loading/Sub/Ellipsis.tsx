import React from 'react';
import styles from '../Loading.module.scss';
import type { LoadingProps } from './types';

const Ellipsis: React.FC<LoadingProps> = ({
	color,
	animationSpeed,
	count = 3,
	'aria-busy': ariaBusy,
	'aria-label': ariaLabel,
	role,
	...rest
}) => (
	<div
		className={styles.ellipsis}
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

export default Ellipsis;
