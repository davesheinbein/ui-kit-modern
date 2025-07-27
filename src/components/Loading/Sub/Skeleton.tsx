import React from 'react';
import styles from '../Loading.module.scss';
import type { LoadingProps } from './types';

const Skeleton: React.FC<LoadingProps> = ({
	shape = 'rect',
	backgroundColor,
	'aria-busy': ariaBusy,
	'aria-label': ariaLabel,
	role,
	...rest
}) => (
	<div
		className={styles.skeleton + ' ' + styles[shape]}
		style={{ backgroundColor }}
		aria-busy={ariaBusy}
		aria-label={ariaLabel}
		role={role}
		{...rest}
	/>
);

export default Skeleton;
