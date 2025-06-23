import React, { forwardRef } from 'react';
import { Button } from '../Button';
import styles from './Analytics.module.scss';

export interface AnalyticsProps {
	'children': React.ReactNode;
	'className'?: string;
	'variant'?:
		| 'dashboard'
		| 'realtime'
		| 'reports'
		| 'metrics'
		| 'performance';
	'type'?:
		| 'chart'
		| 'table'
		| 'card'
		| 'gauge'
		| 'counter'
		| 'graph';
	'size'?: 'sm' | 'md' | 'lg';
	'loading'?: boolean;
	'error'?: string;
	'refreshable'?: boolean;
	'exportable'?: boolean;
	'onRefresh'?: () => void;
	'onExport'?: (format: 'csv' | 'json' | 'pdf') => void;
	'aria-label'?: string;
}

/**
 * Base Analytics component - provides consistent styling and layout
 * Use this as the foundation for all analytics types
 * Similar to the Modal and FormField base components
 */
const Analytics = forwardRef<
	HTMLDivElement,
	AnalyticsProps
>(
	(
		{
			children,
			className = '',
			variant = 'dashboard',
			type = 'chart',
			size = 'md',
			loading = false,
			error,
			refreshable = false,
			exportable = false,
			onRefresh,
			onExport,
			'aria-label': ariaLabel,
			...props
		},
		ref
	) => {
		const analyticsClasses = [
			styles.analytics,
			styles[`analytics--${variant}`],
			styles[`analytics--${type}`],
			styles[`analytics--${size}`],
			loading && styles['analytics--loading'],
			error && styles['analytics--error'],
			refreshable && styles['analytics--refreshable'],
			exportable && styles['analytics--exportable'],
			className,
		]
			.filter(Boolean)
			.join(' ');

		if (loading) {
			return (
				<div
					ref={ref}
					className={analyticsClasses}
					aria-label={ariaLabel || 'Loading analytics'}
					{...props}
				>
					<div className={styles.loadingContainer}>
						<div className={styles.loadingSpinner}></div>
						<span className={styles.loadingText}>
							Loading analytics...
						</span>
					</div>
				</div>
			);
		}

		if (error) {
			return (
				<div
					ref={ref}
					className={analyticsClasses}
					aria-label={ariaLabel || 'Analytics error'}
					role='alert'
					{...props}
				>
					<div className={styles.errorContainer}>
						<div className={styles.errorIcon}>⚠️</div>
						<div className={styles.errorMessage}>
							<strong>Error loading analytics:</strong>
							<br />
							{error}
						</div>
						{refreshable && onRefresh && (
							<Button
								kind='secondary'
								onClick={onRefresh}
								className={styles.retryButton}
							>
								Retry
							</Button>
						)}
					</div>
				</div>
			);
		}

		return (
			<div
				ref={ref}
				className={analyticsClasses}
				aria-label={ariaLabel || `${variant} analytics`}
				{...props}
			>
				{children}
			</div>
		);
	}
);

Analytics.displayName = 'Analytics';

export default Analytics;
