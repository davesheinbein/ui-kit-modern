import React from 'react';
import styles from '../Loading.module.scss';
import type { LoadingProps } from './types';

const Bar: React.FC<LoadingProps> = ({
	'aria-busy': ariaBusy,
	'aria-label': ariaLabel,
	role,
	...rest
}) => (
	<div
		className={styles.bar}
		aria-busy={ariaBusy}
		aria-label={ariaLabel}
		role={role}
		{...rest}
	>
		<div className={styles.barFill} />
	</div>
);

export default Bar;
