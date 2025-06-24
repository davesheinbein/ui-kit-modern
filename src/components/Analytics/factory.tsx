import React, { forwardRef } from 'react';
import { Wrapper } from '../Wrappers';
import Analytics from './Analytics';
import { Button } from '../Button';
import styles from './Analytics.module.scss';
import {
	analyticsConfigurations,
	AnalyticsKind,
	AnalyticsConfiguration,
} from './configurations';

export interface AnalyticsBodyFactoryProps {
	kind:
		| 'dashboard'
		| 'realtime'
		| 'reports'
		| 'metrics'
		| 'performance';
	configuration?: any;
	title?: string;
	data?: any[];
	metric?: {
		value: number | string;
		label: string;
		change?: number;
		trend?: 'up' | 'down' | 'neutral';
	};
	timeRange?: '1h' | '24h' | '7d' | '30d' | '90d' | '1y';
	refreshRate?: number;
	showLegend?: boolean;
	showTooltip?: boolean;
	interactive?: boolean;
	loading?: boolean;
	error?: string;
	onRefresh?: () => void;
	onExport?: (format: 'csv' | 'json' | 'pdf') => void;
	index?: number;
	[key: string]: any;
}

/**
 * AnalyticsBodyFactory - Creates the analytics content based on analytics kind
 * This is the DRY equivalent of the individual analytics components
 */
export const AnalyticsBodyFactory = forwardRef<
	HTMLDivElement,
	AnalyticsBodyFactoryProps
>(
	(
		{
			kind,
			configuration,
			title = 'Analytics',
			data = [],
			metric,
			timeRange = '24h',
			refreshRate = 30000,
			showLegend = true,
			showTooltip = true,
			interactive = true,
			loading = false,
			error,
			onRefresh,
			onExport,
			index,
			...props
		},
		ref
	) => {
		switch (kind) {
			case 'dashboard':
				return (
					<Wrapper
						ref={ref}
						className={styles.dashboardContainer}
						{...props}
					>
						<Wrapper className={styles.dashboardHeader}>
							<h2 className={styles.title}>{title}</h2>
							<Wrapper className={styles.controls}>
								{onRefresh && (
									<Button
										kind='ghost'
										onClick={onRefresh}
										className={styles.refreshButton}
										disabled={loading}
									>
										{loading ? '⟳' : '↻'}
									</Button>
								)}
								{onExport && (
									<Button
										kind='secondary'
										onClick={() => onExport('csv')}
										className={styles.exportButton}
									>
										Export
									</Button>
								)}
							</Wrapper>
						</Wrapper>
						<Wrapper className={styles.dashboardGrid}>
							{metric && (
								<Wrapper className={styles.metricCard}>
									<Wrapper className={styles.metricValue}>
										{metric.value}
									</Wrapper>
									<Wrapper className={styles.metricLabel}>
										{metric.label}
									</Wrapper>
									{metric.change && (
										<Wrapper
											className={`${styles.metricChange} ${
												styles[metric.trend || 'neutral']
											}`}
										>
											{metric.change > 0 ? '+' : ''}
											{metric.change}%
										</Wrapper>
									)}
								</Wrapper>
							)}
							{data.length > 0 && (
								<Wrapper className={styles.chartContainer}>
									<Wrapper
										className={styles.chartPlaceholder}
									>
										📊 Chart visualization would go here
									</Wrapper>
								</Wrapper>
							)}
						</Wrapper>
						{error && (
							<Wrapper className={styles.errorMessage}>
								Error: {error}
							</Wrapper>
						)}
					</Wrapper>
				);

			case 'realtime':
				return (
					<Wrapper
						ref={ref}
						className={styles.realtimeContainer}
						{...props}
					>
						<Wrapper className={styles.realtimeHeader}>
							<h3 className={styles.title}>{title}</h3>
							<Wrapper className={styles.liveIndicator}>
								<span className={styles.liveDot}></span>
								LIVE
							</Wrapper>
						</Wrapper>
						<Wrapper className={styles.realtimeMetrics}>
							{metric && (
								<Wrapper className={styles.realtimeMetric}>
									<span className={styles.value}>
										{metric.value}
									</span>
									<span className={styles.label}>
										{metric.label}
									</span>
								</Wrapper>
							)}
						</Wrapper>
						{data.length > 0 && (
							<Wrapper className={styles.realtimeChart}>
								<Wrapper
									className={styles.chartPlaceholder}
								>
									📈 Real-time chart
								</Wrapper>
							</Wrapper>
						)}
					</Wrapper>
				);

			case 'reports':
				return (
					<Wrapper
						ref={ref}
						className={styles.reportsContainer}
						{...props}
					>
						<Wrapper className={styles.reportsHeader}>
							<h3 className={styles.title}>{title}</h3>
							<Wrapper className={styles.timeRangeSelector}>
								<select
									value={timeRange}
									className={styles.timeRangeSelect}
								>
									<option value='1h'>Last Hour</option>
									<option value='24h'>Last 24 Hours</option>
									<option value='7d'>Last 7 Days</option>
									<option value='30d'>Last 30 Days</option>
									<option value='90d'>Last 90 Days</option>
									<option value='1y'>Last Year</option>
								</select>
							</Wrapper>
						</Wrapper>
						<Wrapper className={styles.reportsContent}>
							{data.length > 0 ?
								<Wrapper className={styles.reportsTable}>
									<Wrapper
										className={styles.tablePlaceholder}
									>
										📋 Reports table would go here
									</Wrapper>
								</Wrapper>
							:	<Wrapper className={styles.noData}>
									No data available for selected time range
								</Wrapper>
							}
						</Wrapper>
					</Wrapper>
				);

			case 'metrics':
				return (
					<Wrapper
						ref={ref}
						className={styles.metricsContainer}
						{...props}
					>
						<Wrapper className={styles.metricsHeader}>
							<h3 className={styles.title}>{title}</h3>
						</Wrapper>
						<Wrapper className={styles.metricsGrid}>
							{metric && (
								<Wrapper className={styles.metricCard}>
									<Wrapper className={styles.metricIcon}>
										📊
									</Wrapper>
									<Wrapper className={styles.metricContent}>
										<Wrapper className={styles.metricValue}>
											{metric.value}
										</Wrapper>
										<Wrapper className={styles.metricLabel}>
											{metric.label}
										</Wrapper>
									</Wrapper>
								</Wrapper>
							)}
						</Wrapper>
					</Wrapper>
				);

			case 'performance':
				return (
					<Wrapper
						ref={ref}
						className={styles.performanceContainer}
						{...props}
					>
						<Wrapper className={styles.performanceHeader}>
							<h3 className={styles.title}>{title}</h3>
							<Wrapper className={styles.performanceScore}>
								{metric?.value || 85}
							</Wrapper>
						</Wrapper>
						<Wrapper className={styles.performanceMetrics}>
							<Wrapper className={styles.performanceBar}>
								<Wrapper
									className={styles.performanceFill}
									style={{
										width: `${metric?.value || 85}%`,
									}}
								></Wrapper>
							</Wrapper>
							<Wrapper className={styles.performanceLabel}>
								{metric?.label || 'Overall Performance'}
							</Wrapper>
						</Wrapper>
					</Wrapper>
				);

			default:
				return (
					<Wrapper ref={ref} {...props}>
						<Wrapper className={styles.defaultAnalytics}>
							<h3>{title}</h3>
							<p>Default analytics view</p>
						</Wrapper>
					</Wrapper>
				);
		}
	}
);

AnalyticsBodyFactory.displayName = 'AnalyticsBodyFactory';

export interface AnalyticsFactoryProps {
	kind: AnalyticsKind;
	configuration?: AnalyticsConfiguration;
	title?: string;
	data?: any[];
	metric?: {
		value: number | string;
		label: string;
		change?: number;
		trend?: 'up' | 'down' | 'neutral';
	};
	timeRange?: '1h' | '24h' | '7d' | '30d' | '90d' | '1y';
	variant?: 'default' | 'minimal' | 'detailed' | 'compact';
	size?: 'sm' | 'md' | 'lg';
	className?: string;
	loading?: boolean;
	error?: string;
	onRefresh?: () => void;
	onExport?: (format: 'csv' | 'json' | 'pdf') => void;
	[key: string]: any;
}

/**
 * AnalyticsFactory - Main factory component for creating analytics
 * This replaces all individual analytics components with a system
 */
export const AnalyticsFactory = forwardRef<
	HTMLDivElement,
	AnalyticsFactoryProps
>(
	(
		{
			kind,
			configuration,
			title,
			data,
			metric,
			timeRange,
			variant = 'default',
			size = 'md',
			className = '',
			loading,
			error,
			onRefresh,
			onExport,
			...props
		},
		ref
	) => {
		// Get configuration if not provided
		const config =
			configuration || analyticsConfigurations[kind];

		return (
			<Analytics
				ref={ref}
				className={className}
				variant={variant as any}
				size={size as any}
				loading={loading}
				error={error}
				{...props}
			>
				<AnalyticsBodyFactory
					kind={kind}
					configuration={config}
					title={title}
					data={data}
					metric={metric}
					timeRange={timeRange}
					onRefresh={onRefresh}
					onExport={onExport}
					{...props}
				/>
			</Analytics>
		);
	}
);

AnalyticsFactory.displayName = 'AnalyticsFactory';

// Export the factory class for backward compatibility
export class AnalyticsFactoryClass {
	static create(props: AnalyticsFactoryProps) {
		return React.createElement(AnalyticsFactory, props);
	}
}

// Export preset configurations for common analytics types
export const AnalyticsPresets = {
	Dashboard: (props: Partial<AnalyticsFactoryProps>) => (
		<AnalyticsFactory kind='dashboard' {...props} />
	),
	Realtime: (props: Partial<AnalyticsFactoryProps>) => (
		<AnalyticsFactory kind='realtime' {...props} />
	),
	Reports: (props: Partial<AnalyticsFactoryProps>) => (
		<AnalyticsFactory kind='reports' {...props} />
	),
	Metrics: (props: Partial<AnalyticsFactoryProps>) => (
		<AnalyticsFactory kind='metrics' {...props} />
	),
	Performance: (props: Partial<AnalyticsFactoryProps>) => (
		<AnalyticsFactory kind='performance' {...props} />
	),
};

// Shorthand export for convenience
export const Ana = AnalyticsFactory;

export default AnalyticsFactory;
