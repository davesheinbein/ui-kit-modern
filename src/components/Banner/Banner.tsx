import React, { forwardRef } from 'react';
import { Button } from '../Button';
import styles from './Banner.module.scss';

export interface BannerProps {
	'children': React.ReactNode;
	'className'?: string;
	'variant'?:
		| 'feedback'
		| 'notification'
		| 'toast'
		| 'status'
		| 'global';
	'type'?:
		| 'burn'
		| 'achievement'
		| 'system'
		| 'taunt'
		| 'success'
		| 'error'
		| 'info'
		| 'warning';
	'position'?:
		| 'top'
		| 'bottom'
		| 'fixed'
		| 'relative'
		| 'center';
	'onClose'?: () => void;
	'autoClose'?: boolean;
	'duration'?: number;
	'aria-live'?: 'polite' | 'assertive' | 'off';
}

/**
 * Base Banner component - provides consistent styling and layout
 * Use this as the foundation for all banner types
 * Similar to the Modal and FormField base components
 */
const Banner = forwardRef<HTMLDivElement, BannerProps>(
	(
		{
			children,
			className = '',
			variant = 'notification',
			type = 'info',
			position = 'relative',
			onClose,
			autoClose = false,
			duration = 3200,
			'aria-live': ariaLive = 'polite',
			...props
		},
		ref
	) => {
		// Auto-close functionality
		React.useEffect(() => {
			if (autoClose && onClose && duration) {
				const timer = setTimeout(onClose, duration);
				return () => clearTimeout(timer);
			}
		}, [autoClose, onClose, duration]);

		const bannerClasses = [
			styles.banner,
			styles[`banner--${variant}`],
			styles[`banner--${type}`],
			styles[`banner--${position}`],
			className,
		]
			.filter(Boolean)
			.join(' ');

		return (
			<div
				ref={ref}
				className={bannerClasses}
				aria-live={ariaLive}
				{...props}
			>
				{children}
				{onClose && (
					<Button
						kind='close'
						className={styles.bannerCloseButton}
						onClick={onClose}
						aria-label='Close banner'
					>
						×
					</Button>
				)}
			</div>
		);
	}
);

Banner.displayName = 'Banner';

export default Banner;
