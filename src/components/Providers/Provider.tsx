import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Providers.module.scss';

export type ProviderVariant =
	| 'context'
	| 'socket'
	| 'listener'
	| 'settings'
	| 'theme'
	| 'custom';

export type ProviderPosition =
	| 'root'
	| 'app'
	| 'component'
	| 'inline';

export interface ProviderProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	variant?: ProviderVariant;
	position?: ProviderPosition;
	className?: string;
	[key: string]: any;
}

/**
 * Base Provider component - provides consistent structure for all provider types
 * Use this as the foundation for all provider components
 * Similar to the Button base component
 */
const Provider = forwardRef<HTMLDivElement, ProviderProps>(
	(
		{
			children,
			variant = 'context',
			position = 'component',
			className = '',
			...props
		},
		ref
	) => {
		const providerClasses = clsx(
			styles.provider,
			styles[`provider--${variant}`],
			styles[`provider--${position}`],
			className
		);

		// For listeners and context providers, we typically don't render visual elements
		// but we maintain the structure for consistency
		if (variant === 'listener') {
			// Listeners don't render visual content
			return null;
		}

		// Context providers typically wrap children without additional markup
		return (
			<div ref={ref} className={providerClasses} {...props}>
				{children}
			</div>
		);
	}
);

Provider.displayName = 'Provider';

export default Provider;
