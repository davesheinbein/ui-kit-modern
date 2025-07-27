import React from 'react';
import styles from '../Loading.module.scss';
import type { LoadingProps } from './types';

/**
 * Animated 3x3 grid loader with pulse effect and staggered delays.
 * - 9 cells, arranged in a 3x3 grid
 * - Each cell animates with a pulse (fade in/out, scale)
 * - Animation is staggered for each cell
 * - Color and animation speed are customizable via props
 * - Purely decorative, no data
 */
const Grid: React.FC<LoadingProps> = ({
	color,
	count = 9,
	animationSpeed = 1.2,
	backgroundColor,
	'aria-busy': ariaBusy,
	'aria-label': ariaLabel = 'Loading grid',
	role = 'status',
	...rest
}) => {
	// Only support 9 cells (3x3)
	const cells = Array.from({ length: 9 });
	return (
		<div
			className={styles.grid}
			aria-busy={ariaBusy}
			aria-label={ariaLabel}
			role={role}
			{...rest}
		>
			{cells.map((_, i) => (
				<span
					key={i}
					style={
						{
							'--loading-grid-bg':
								(backgroundColor || color) ?? undefined,
							'animationDuration': `${animationSpeed}s`,
							// Staggered delay for each cell
							'animationDelay': `${i * 0.1}s`,
						} as React.CSSProperties
					}
				/>
			))}
		</div>
	);
};

export default Grid;
