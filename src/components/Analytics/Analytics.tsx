import React, {
	forwardRef,
	useMemo,
	useState,
	useEffect,
	useCallback,
	useRef,
} from 'react';
import { Wrapper } from '../Wrappers';
import { Button } from '../Button';
import styles from './Analytics.module.scss';
import {
	AnalyticsConfiguration,
	AnalyticsDataPoint,
	AnalyticsMetric,
	AnalyticsQuery,
	AnalyticsFilter,
	analyticsConfigurations,
} from './configurations';

export interface AnalyticsProps {
	// Basic props
	'children'?: React.ReactNode;
	'className'?: string;
	'style'?: React.CSSProperties;
	'aria-label'?: string;

	// Analytics type and configuration
	'kind'?:
		| 'dashboard'
		| 'chart'
		| 'metric'
		| 'heatmap'
		| 'funnel'
		| 'cohort'
		| 'report'
		| 'realtime';
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

	// Content and data
	'title'?: string;
	'subtitle'?: string;
	'data'?: AnalyticsDataPoint[] | AnalyticsMetric[] | any[];
	'metrics'?: AnalyticsMetric[];
	'query'?: AnalyticsQuery;
	'filters'?: AnalyticsFilter[];

	// Configuration
	'config'?: Partial<AnalyticsConfiguration>;
	'timeRange'?:
		| 'realtime'
		| 'hour'
		| 'day'
		| 'week'
		| 'month'
		| 'quarter'
		| 'year'
		| 'custom';
	'layout'?:
		| 'grid'
		| 'list'
		| 'single'
		| 'split'
		| 'sidebar'
		| 'fullscreen';
	'autoRefresh'?: boolean;
	'refreshInterval'?: number;

	// States
	'loading'?: boolean;
	'error'?: string | null;
	'empty'?: boolean;
	'emptyMessage'?: string;

	// Interactivity
	'interactive'?: boolean;
	'drilldown'?: boolean;
	'exportable'?: boolean;
	'filterable'?: boolean;
	'searchable'?: boolean;
	'refreshable'?: boolean;

	// Event handlers
	'onDataPoint'?: (point: AnalyticsDataPoint) => void;
	'onMetricClick'?: (metric: AnalyticsMetric) => void;
	'onFilter'?: (filters: AnalyticsFilter[]) => void;
	'onExport'?: (
		format: 'csv' | 'json' | 'pdf' | 'png'
	) => void;
	'onRefresh'?: () => void;
	'onDrilldown'?: (dimension: string, value: any) => void;
	'onTimeRangeChange'?: (timeRange: string) => void;

	// Customization
	'colors'?: string[];
	'theme'?: 'light' | 'dark' | 'auto';
	'height'?: number | string;
	'showHeader'?: boolean;
	'showFooter'?: boolean;
	'showLegend'?: boolean;
	'showControls'?: boolean;

	// Analytics-specific props
	'chartType'?:
		| 'line'
		| 'bar'
		| 'pie'
		| 'area'
		| 'scatter'
		| 'heatmap';
	'aggregation'?: 'sum' | 'avg' | 'count' | 'min' | 'max';
	'granularity'?:
		| 'minute'
		| 'hour'
		| 'day'
		| 'week'
		| 'month';

	// Real-time
	'realtime'?: boolean;
	'realtimeEndpoint'?: string;

	// Advanced
	'customRenderer'?: (data: any) => React.ReactNode;
	'plugins'?: any[];
}

// Stable default arrays to prevent infinite re-renders
const DEFAULT_DATA: any[] = [];
const DEFAULT_METRICS: AnalyticsMetric[] = [];
const DEFAULT_FILTERS: AnalyticsFilter[] = [];
const DEFAULT_COLORS = [
	'#3b82f6',
	'#10b981',
	'#f59e0b',
	'#ef4444',
	'#8b5cf6',
];
const DEFAULT_PLUGINS: any[] = [];

/**
 * Analytics component - provides comprehensive analytics functionality
 * Consolidates all analytics types and features into a single component
 * Supports dashboards, charts, metrics, heatmaps, funnels, cohorts, reports, and real-time analytics
 */
const Analytics = forwardRef<
	HTMLDivElement,
	AnalyticsProps
>(
	(
		{
			children,
			className = '',
			style = {},
			'aria-label': ariaLabel,

			// Analytics configuration
			kind = 'dashboard',
			variant = 'dashboard',
			type = 'chart',
			size = 'md',

			// Content and data
			title,
			subtitle,
			data = DEFAULT_DATA,
			metrics = DEFAULT_METRICS,
			query,
			filters = DEFAULT_FILTERS,

			// Configuration
			config = {},
			timeRange = 'day',
			layout = 'single',
			autoRefresh = false,
			refreshInterval = 30000,

			// States
			loading = false,
			error = null,
			empty = false,
			emptyMessage = 'No data available',

			// Interactivity
			interactive = true,
			drilldown = false,
			exportable = false,
			filterable = false,
			searchable = false,
			refreshable = false,

			// Event handlers
			onDataPoint,
			onMetricClick,
			onFilter,
			onExport,
			onRefresh,
			onDrilldown,
			onTimeRangeChange,

			// Customization
			colors = DEFAULT_COLORS,
			theme = 'auto',
			height = 300,
			showHeader = true,
			showFooter = false,
			showLegend = true,
			showControls = false,

			// Analytics-specific
			chartType = 'line',
			aggregation = 'sum',
			granularity = 'day',

			// Real-time
			realtime = false,
			realtimeEndpoint,

			// Advanced
			customRenderer,
			plugins = DEFAULT_PLUGINS,

			...props
		},
		ref
	) => {
		// Get configuration for the kind
		const configuration = useMemo(() => {
			const baseConfig =
				analyticsConfigurations[`${kind}-default`] ||
				analyticsConfigurations[kind] ||
				{};
			return { ...baseConfig, ...config };
		}, [kind, config]);

		// State management
		const [currentData, setCurrentData] = useState(data);
		const [currentFilters, setCurrentFilters] =
			useState(filters);
		const [isRefreshing, setIsRefreshing] = useState(false);
		const [lastUpdated, setLastUpdated] =
			useState<Date | null>(null);
		const refreshIntervalRef = useRef<number | null>(null);
		const onRefreshRef = useRef(onRefresh);

		// Keep the ref up to date
		useEffect(() => {
			onRefreshRef.current = onRefresh;
		}, [onRefresh]);

		// Event handlers - using stable callbacks
		const handleRefresh = useCallback(() => {
			if (!isRefreshing) {
				setIsRefreshing(true);
				onRefreshRef.current?.();
				setTimeout(() => {
					setIsRefreshing(false);
					setLastUpdated(new Date());
				}, 1000);
			}
		}, [isRefreshing]);

		const handleFilter = useCallback(
			(newFilters: AnalyticsFilter[]) => {
				setCurrentFilters(newFilters);
				onFilter?.(newFilters);
			},
			[onFilter]
		);

		const handleExport = useCallback(
			(format: 'csv' | 'json' | 'pdf' | 'png') => {
				onExport?.(format);
			},
			[onExport]
		);

		const handleTimeRangeChange = useCallback(
			(newTimeRange: string) => {
				onTimeRangeChange?.(newTimeRange);
			},
			[onTimeRangeChange]
		);

		// Auto-refresh logic
		useEffect(() => {
			if (autoRefresh && refreshInterval > 0) {
				refreshIntervalRef.current = setInterval(() => {
					setIsRefreshing(true);
					onRefreshRef.current?.();
					setTimeout(() => {
						setIsRefreshing(false);
						setLastUpdated(new Date());
					}, 1000);
				}, refreshInterval);

				return () => {
					if (refreshIntervalRef.current) {
						clearInterval(refreshIntervalRef.current);
					}
				};
			}
		}, [autoRefresh, refreshInterval]);

		// Update data when prop changes
		useEffect(() => {
			setCurrentData(data);
			setLastUpdated(new Date());
		}, [data]);

		// Helper functions
		const formatMetricValue = (
			value: number,
			format?: string
		) => {
			switch (format) {
				case 'currency':
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value);
				case 'percentage':
					return `${value}%`;
				case 'duration':
					return `${value}ms`;
				default:
					return new Intl.NumberFormat().format(value);
			}
		};

		// Render methods
		const renderHeader = () => {
			if (!showHeader) return null;

			return (
				<Wrapper className={styles.analytics__header}>
					<Wrapper>
						{title && (
							<h3
								className={styles.analytics__header_title}
							>
								{title}
							</h3>
						)}
						{subtitle && (
							<p
								className={
									styles.analytics__header_subtitle
								}
							>
								{subtitle}
							</p>
						)}
					</Wrapper>
					<Wrapper
						className={styles.analytics__header_actions}
					>
						{refreshable && onRefresh && (
							<Button
								kind='ghost'
								onClick={handleRefresh}
								disabled={isRefreshing}
								title='Refresh data'
							>
								{isRefreshing ? '⟳' : '↻'}
							</Button>
						)}
						{exportable && (
							<Wrapper
								className={styles.analytics__actions}
							>
								<Button
									kind='secondary'
									className={
										styles.analytics__actions_button
									}
									onClick={() => handleExport('csv')}
									title='Export as CSV'
								>
									CSV
								</Button>
								<Button
									kind='secondary'
									className={
										styles.analytics__actions_button
									}
									onClick={() => handleExport('pdf')}
									title='Export as PDF'
								>
									PDF
								</Button>
							</Wrapper>
						)}
					</Wrapper>
				</Wrapper>
			);
		};

		const renderControls = () => {
			if (!showControls) return null;

			return (
				<Wrapper className={styles.analytics__controls}>
					<Wrapper
						className={styles.analytics__controls_group}
					>
						<label
							className={styles.analytics__controls_label}
						>
							Time Range:
						</label>
						<select
							value={timeRange}
							onChange={(e) =>
								handleTimeRangeChange(e.target.value)
							}
							className={styles.analytics__controls_select}
						>
							<option value='hour'>Last Hour</option>
							<option value='day'>Last Day</option>
							<option value='week'>Last Week</option>
							<option value='month'>Last Month</option>
							<option value='quarter'>Last Quarter</option>
							<option value='year'>Last Year</option>
						</select>
					</Wrapper>
					{filterable && (
						<Wrapper
							className={styles.analytics__controls_group}
						>
							<label
								className={styles.analytics__controls_label}
							>
								Filters:
							</label>
							{/* Filter controls would go here */}
						</Wrapper>
					)}
				</Wrapper>
			);
		};

		const renderContent = () => {
			if (loading) {
				return (
					<Wrapper className={styles.analytics__loading}>
						<Wrapper
							className={styles.analytics__loading_spinner}
						/>
						<span
							className={styles.analytics__loading_text}
						>
							Loading analytics...
						</span>
					</Wrapper>
				);
			}

			if (error) {
				return (
					<Wrapper className={styles.analytics__error}>
						<Wrapper
							className={styles.analytics__error_icon}
						>
							⚠️
						</Wrapper>
						<Wrapper
							className={styles.analytics__error_message}
						>
							<strong>Error loading analytics:</strong>
							<br />
							{error}
						</Wrapper>
						{refreshable && onRefresh && (
							<Wrapper
								className={styles.analytics__error_actions}
							>
								<Button
									kind='secondary'
									onClick={handleRefresh}
									className={styles.analytics__error_retry}
								>
									Retry
								</Button>
							</Wrapper>
						)}
					</Wrapper>
				);
			}

			if (
				empty ||
				(!currentData.length && !metrics.length)
			) {
				return (
					<Wrapper className={styles.analytics__error}>
						<Wrapper
							className={styles.analytics__error_message}
						>
							{emptyMessage}
						</Wrapper>
					</Wrapper>
				);
			}

			// Custom renderer takes precedence
			if (customRenderer) {
				return customRenderer(currentData);
			}

			// If children are provided, render them
			if (children) {
				return children;
			}

			// Default renderers based on kind
			switch (kind) {
				case 'dashboard':
					return renderDashboard();
				case 'chart':
					return renderChart();
				case 'metric':
					return renderMetric();
				case 'heatmap':
					return renderHeatmap();
				case 'funnel':
					return renderFunnel();
				case 'cohort':
					return renderCohort();
				case 'report':
					return renderReport();
				case 'realtime':
					return renderRealtime();
				default:
					return renderChart();
			}
		};

		const renderDashboard = () => (
			<Wrapper
				kind='grid-container'
				className={styles.analytics__dashboard_grid}
			>
				{metrics.map((metric, index) => (
					<Wrapper
						key={metric.id || index}
						className={styles.analytics__metric_container}
						onClick={() => onMetricClick?.(metric)}
					>
						<Wrapper
							className={styles.analytics__metric_value}
						>
							{formatMetricValue(
								metric.value,
								metric.format
							)}
						</Wrapper>
						<Wrapper
							className={styles.analytics__metric_label}
						>
							{metric.name}
						</Wrapper>
						{metric.change !== undefined && (
							<Wrapper
								className={`${styles.analytics__metric_change} ${
									metric.trend ?
										styles[
											`analytics__metric_change--${metric.trend}`
										]
									:	''
								}`}
							>
								{metric.change > 0 ? '+' : ''}
								{metric.change}%
							</Wrapper>
						)}
					</Wrapper>
				))}
			</Wrapper>
		);

		const renderChart = () => (
			<Wrapper
				className={styles.analytics__chart_container}
				style={{ height }}
			>
				{/* Chart implementation would go here - using placeholder */}
				<Wrapper
					className={styles.analytics__chart_loading}
				>
					📊 Chart visualization ({chartType}) -{' '}
					{currentData.length} data points
				</Wrapper>
				{showLegend && renderLegend()}
			</Wrapper>
		);

		const renderMetric = () => {
			const metric = metrics[0] || {
				name: 'Metric',
				value: 0,
			};
			return (
				<Wrapper
					className={styles.analytics__metric_container}
				>
					<Wrapper
						className={styles.analytics__metric_value}
					>
						{formatMetricValue(metric.value, metric.format)}
					</Wrapper>
					<Wrapper
						className={styles.analytics__metric_label}
					>
						{metric.name}
					</Wrapper>
					{metric.change !== undefined && (
						<Wrapper
							className={`${styles.analytics__metric_change} ${
								metric.trend ?
									styles[
										`analytics__metric_change--${metric.trend}`
									]
								:	''
							}`}
						>
							{metric.change > 0 ? '+' : ''}
							{metric.change}%
						</Wrapper>
					)}
				</Wrapper>
			);
		};

		const renderHeatmap = () => (
			<Wrapper
				className={styles.analytics__heatmap_container}
				style={{ height }}
			>
				{/* Heatmap implementation would go here */}
				<Wrapper
					className={styles.analytics__chart_loading}
				>
					🔥 Heatmap visualization - {currentData.length}{' '}
					data points
				</Wrapper>
			</Wrapper>
		);

		const renderFunnel = () => (
			<Wrapper
				className={styles.analytics__funnel_container}
			>
				{currentData.map((step, index) => (
					<Wrapper
						key={index}
						className={styles.analytics__funnel_step}
					>
						<Wrapper
							className={
								styles.analytics__funnel_step_content
							}
						>
							<span
								className={
									styles.analytics__funnel_step_label
								}
							>
								{step.label || `Step ${index + 1}`}
							</span>
							<span
								className={
									styles.analytics__funnel_step_value
								}
							>
								{step.value || 0}
							</span>
						</Wrapper>
					</Wrapper>
				))}
			</Wrapper>
		);

		const renderCohort = () => (
			<Wrapper
				className={styles.analytics__chart_container}
				style={{ height }}
			>
				{/* Cohort table implementation would go here */}
				<Wrapper
					className={styles.analytics__chart_loading}
				>
					📋 Cohort analysis - {metrics.length} cohorts
				</Wrapper>
			</Wrapper>
		);

		const renderReport = () => (
			<Wrapper
				className={styles.analytics__chart_container}
			>
				{/* Report table implementation would go here */}
				<Wrapper
					className={styles.analytics__chart_loading}
				>
					📊 Report view - {currentData.length} rows
				</Wrapper>
			</Wrapper>
		);

		const renderRealtime = () => (
			<Wrapper
				kind='grid-container'
				className={styles.analytics__dashboard_grid}
			>
				{/* Real-time metrics grid */}
				{realtime && (
					<Wrapper
						className={styles.analytics__realtime_indicator}
					>
						<span
							className={styles.analytics__live_dot}
						></span>
						LIVE
					</Wrapper>
				)}
				{metrics.map((metric, index) => (
					<Wrapper
						key={metric.id || index}
						className={styles.analytics__metric_container}
					>
						<Wrapper
							className={styles.analytics__metric_value}
						>
							{formatMetricValue(
								metric.value,
								metric.format
							)}
						</Wrapper>
						<Wrapper
							className={styles.analytics__metric_label}
						>
							{metric.name}
						</Wrapper>
					</Wrapper>
				))}
			</Wrapper>
		);

		const renderLegend = () => (
			<Wrapper className={styles.analytics__chart_legend}>
				{colors.map((color, index) => (
					<Wrapper
						key={index}
						className={styles.analytics__chart_legend_item}
					>
						<Wrapper
							className={
								styles.analytics__chart_legend_item_color
							}
							style={{ backgroundColor: color }}
						/>
						<span>Series </span>
					</Wrapper>
				))}
			</Wrapper>
		);

		const renderFooter = () => {
			if (!showFooter) return null;

			return (
				<Wrapper className={styles.analytics__footer}>
					<Wrapper>
						{lastUpdated && (
							<span
								className={styles.analytics__last_updated}
							>
								Last updated:{' '}
								{lastUpdated.toLocaleTimeString()}
							</span>
						)}
					</Wrapper>
					<Wrapper>
						{autoRefresh && (
							<span
								className={styles.analytics__auto_refresh}
							>
								Auto-refresh: {refreshInterval / 1000}s
							</span>
						)}
					</Wrapper>
				</Wrapper>
			);
		};

		// Compute CSS classes
		const analyticsClasses = [
			styles.analytics__container,
			styles[`analytics--${variant}`],
			styles[`analytics--${size}`],
			loading && styles['analytics--loading'],
			error && styles['analytics--error'],
			refreshable && styles['analytics--refreshable'],
			exportable && styles['analytics--exportable'],
			className,
		]
			.filter(Boolean)
			.join(' ');

		return (
			<Wrapper
				ref={ref}
				className={analyticsClasses}
				style={style}
				aria-label={ariaLabel || `${variant} analytics`}
				data-analytics-kind={kind}
				data-analytics-type={configuration.type}
				{...props}
			>
				{renderHeader()}
				{renderControls()}
				<Wrapper className={styles.analytics__content}>
					{renderContent()}
				</Wrapper>
				{renderFooter()}
			</Wrapper>
		);
	}
);

Analytics.displayName = 'Analytics';

export default Analytics;
