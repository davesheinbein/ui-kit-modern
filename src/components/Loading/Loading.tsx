/**
 * Loading.tsx - Universal Loading Component
 */

import React from 'react';
import styles from './Loading.module.scss';

export type LoadingKind =
	| 'spinner'
	| 'dots'
	| 'bar'
	| 'skeleton'
	| 'custom';

export interface LoadingProps
	extends React.HTMLAttributes<HTMLDivElement> {
	kind?: LoadingKind;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	color?: string;
	message?: string;
	className?: string;
}

const Loading: React.FC<LoadingProps> = ({
	kind = 'spinner',
	size = 'md',
	color,
	message,
	className = '',
	...rest
}) => {
	return (
		<div
			className={`${styles.loading} ${styles[kind] || ''} ${styles[size] || ''} ${className}`}
			{...rest}
		>
			{kind === 'spinner' && (
				<div
					className={styles.spinner}
					style={color ? { borderColor: color } : undefined}
				/>
			)}
			{kind === 'dots' && (
				<div className={styles.dots}>
					<span />
					<span />
					<span />
				</div>
			)}
			{kind === 'bar' && (
				<div className={styles.bar}>
					<div className={styles.barFill} />
				</div>
			)}
			{kind === 'skeleton' && (
				<div className={styles.skeleton} />
			)}
			{message && (
				<div className={styles.message}>{message}</div>
			)}
		</div>
	);
};

Loading.displayName = 'Loading';
export default Loading;
