import React, {
	forwardRef,
	useMemo,
	useState,
	useRef,
	useEffect,
	useCallback,
} from 'react';
import {
	DEFAULT_DATA,
	DEFAULT_METRICS,
	DEFAULT_FILTERS,
	DEFAULT_COLORS,
	DEFAULT_PLUGINS,
	analyticsConfigurations,
	AnalyticsMetric,
	AnalyticsFilter,
	AnalyticsDataPoint,
	AnalyticsQuery,
	AnalyticsConfiguration,
} from './configurations';
import styles from './analytics.module.scss';
import Wrapper from '../Wrappers/Wrapper';

export interface AnalyticsProps {
	/** Content to render inside the analytics component */
	'children'?: React.ReactNode;
	/** Additional CSS class names */
	'className'?: string;
	/** Inline style overrides */
	'style'?: React.CSSProperties;
	/** Accessible label for the analytics container */
	'aria-label'?: string;

	/** Analytics kind (dashboard, chart, metric, etc.) */
	'kind'?: AnalyticsConfiguration['kind'];
	/** Visual variant (dashboard, realtime, reports, etc.) */
	'variant'?:
		| 'dashboard'
		| 'realtime'
		| 'reports'
		| 'metrics'
		| 'performance';
	/** Analytics type (chart, table, card, etc.) */
	'type'?:
		| 'chart'
		| 'table'
		| 'card'
		| 'gauge'
		| 'counter'
		| 'graph';
	/** Size of the analytics widget */
	'size'?: 'sm' | 'md' | 'lg';

	/** Title for the analytics widget */
	'title'?: string;
	/** Subtitle for the analytics widget */
	'subtitle'?: string;
	/** Data points or metrics to display */
	'data'?: AnalyticsDataPoint[] | AnalyticsMetric[] | any[];
	/** Array of metric objects for metric displays */
	'metrics'?: AnalyticsMetric[];
	/** Query object for advanced analytics */
	'query'?: AnalyticsQuery;
	/** Array of filter objects for analytics filtering */
	'filters'?: AnalyticsFilter[];

	/** Additional configuration overrides */
	'config'?: Partial<AnalyticsConfiguration>;
	/** Time range for analytics data */
	'timeRange'?:
		| 'realtime'
		| 'hour'
		| 'day'
		| 'week'
		| 'month'
		| 'quarter'
		| 'year'
		| 'custom';
	/** Layout mode for analytics ('grid', 'list', etc.) */
	'layout'?:
		| 'grid'
		| 'list'
		| 'single'
		| 'split'
		| 'sidebar'
		| 'fullscreen';
	/** Enable/disable auto-refresh */
	'autoRefresh'?: boolean;
	/** Interval for auto-refresh (ms) */
	'refreshInterval'?: number;

	/** Show loading state */
	'loading'?: boolean;
	/** Error message (if any) */
	'error'?: string | null;
	/** Show empty state */
	'empty'?: boolean;
	/** Message for empty state */
	'emptyMessage'?: string;

	/** Enable/disable interactivity */
	'interactive'?: boolean;
	/** Enable/disable drilldown */
	'drilldown'?: boolean;
	/** Enable/disable export actions */
	'exportable'?: boolean;
	/** Enable/disable filters */
	'filterable'?: boolean;
	/** Enable/disable search */
	'searchable'?: boolean;
	/** Enable/disable refresh actions */
	'refreshable'?: boolean;

	/** Callback for data point click */
	'onDataPoint'?: (point: AnalyticsDataPoint) => void;
	/** Callback for metric click */
	'onMetricClick'?: (metric: AnalyticsMetric) => void;
	/** Callback for filter changes */
	'onFilter'?: (filters: AnalyticsFilter[]) => void;
	/** Callback for export actions */
	'onExport'?: (
		format: 'csv' | 'json' | 'pdf' | 'png'
	) => void;
	/** Callback for refresh actions */
	'onRefresh'?: () => void;
	/** Callback for drilldown actions */
	'onDrilldown'?: (dimension: string, value: any) => void;
	/** Callback for time range changes */
	'onTimeRangeChange'?: (timeRange: string) => void;

	/** Array of colors for charts/metrics */
	'colors'?: string[];
	/** Theme mode ('light', 'dark', 'auto') */
	'theme'?: 'light' | 'dark' | 'auto';
	/** Height of the analytics widget */
	'height'?: number | string;
	/** Show/hide header */
	'showHeader'?: boolean;
	/** Show/hide footer */
	'showFooter'?: boolean;
	/** Show/hide legend */
	'showLegend'?: boolean;
	/** Show/hide controls */
	'showControls'?: boolean;

	/** Chart type for chart analytics */
	'chartType'?:
		| 'line'
		| 'bar'
		| 'pie'
		| 'area'
		| 'scatter'
		| 'heatmap';
	/** Aggregation method */
	'aggregation'?: 'sum' | 'avg' | 'count' | 'min' | 'max';
	/** Data granularity */
	'granularity'?:
		| 'minute'
		| 'hour'
		| 'day'
		| 'week'
		| 'month';

	/** Enable/disable real-time mode */
	'realtime'?: boolean;
	/** Endpoint for real-time data */
	'realtimeEndpoint'?: string;

	/** Custom render function for content */
	'customRenderer'?: (data: any) => React.ReactNode;
	/** Array of plugin objects */
	'plugins'?: any[];
}

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
		const refreshIntervalRef =
			useRef<NodeJS.Timeout | null>(null);
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
					return `$${value.toLocaleString()}`;
				case 'percentage':
					return `${value}%`;
				case 'duration':
					return `${value} ms`;
				default:
					return new Intl.NumberFormat().format(value);
			}
		};

		// Render methods
		const renderHeader = () => {
			if (!showHeader) return null;
			return (
				<Wrapper className={styles.analytics__header}>
					<div>
						{title && (
							<h3
								className={styles.analytics__header_title}
							>
								{title}
							</h3>
						)}
						{subtitle && (
							<div
								className={
									styles.analytics__header_subtitle
								}
							>
								{subtitle}
							</div>
						)}
					</div>
					<div className={styles.analytics__header_actions}>
						{refreshable && (
							<button
								onClick={handleRefresh}
								disabled={isRefreshing}
							>
								{isRefreshing ? 'Refreshing...' : 'Refresh'}
							</button>
						)}
						{exportable && (
							<button onClick={() => handleExport('csv')}>
								Export CSV
							</button>
						)}
					</div>
				</Wrapper>
			);
		};

		const renderControls = () => {
			if (!showControls) return null;
			return (
				<Wrapper className={styles.analytics__controls}>
					{filterable && (
						<div
							className={styles.analytics__controls_group}
						>
							<span
								className={styles.analytics__controls_label}
							>
								Filters:
							</span>
							{/* Render filter controls here */}
						</div>
					)}
				</Wrapper>
			);
		};

		const renderContent = () => {
			if (loading) {
				return (
					<Wrapper className={styles.analytics__loading}>
						<div
							className={styles.analytics__loading_spinner}
						/>
						<span
							className={styles.analytics__loading_text}
						>
							Loading...
						</span>
					</Wrapper>
				);
			}
			if (error) {
				return (
					<Wrapper className={styles.analytics__error}>
						<div className={styles.analytics__error_icon}>
							⚠️
						</div>
						<div
							className={styles.analytics__error_message}
						>
							{error}
						</div>
					</Wrapper>
				);
			}
			if (
				empty ||
				(!currentData.length && !metrics.length)
			) {
				return (
					<Wrapper className={styles.analytics__content}>
						{emptyMessage}
					</Wrapper>
				);
			}
			if (customRenderer) {
				return customRenderer(currentData);
			}
			if (children) {
				return children;
			}
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
			<Wrapper className={styles.analytics__dashboard_grid}>
				{metrics.map((metric, index) => (
					<Wrapper
						key={metric.id || index}
						className={styles.analytics__metric_container}
						onClick={() => onMetricClick?.(metric)}
					>
						<div className={styles.analytics__metric_value}>
							{formatMetricValue(
								metric.value,
								metric.format
							)}
						</div>
						<div className={styles.analytics__metric_label}>
							{metric.name}
						</div>
						{metric.change !== undefined && (
							<div
								className={
									styles.analytics__metric_change +
									' ' +
									(metric.change > 0 ?
										styles[
											'analytics__metric_change--positive'
										]
									: metric.change < 0 ?
										styles[
											'analytics__metric_change--negative'
										]
									:	styles[
											'analytics__metric_change--neutral'
										])
								}
							>
								{metric.change > 0 ? '+' : ''}
								{metric.change}%
							</div>
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
					<div className={styles.analytics__metric_value}>
						{formatMetricValue(metric.value, metric.format)}
					</div>
					<div className={styles.analytics__metric_label}>
						{metric.name}
					</div>
					{metric.change !== undefined && (
						<div
							className={
								styles.analytics__metric_change +
								' ' +
								(metric.change > 0 ?
									styles[
										'analytics__metric_change--positive'
									]
								: metric.change < 0 ?
									styles[
										'analytics__metric_change--negative'
									]
								:	styles[
										'analytics__metric_change--neutral'
									])
							}
						>
							{metric.change > 0 ? '+' : ''}
							{metric.change}%
						</div>
					)}
				</Wrapper>
			);
		};

		const renderHeatmap = () => (
			<Wrapper
				className={styles.analytics__heatmap_container}
				style={{ height }}
			>
				{/* Heatmap implementation placeholder */}
				Heatmap visualization
			</Wrapper>
		);

		const renderFunnel = () => (
			<Wrapper
				className={styles.analytics__funnel_container}
			>
				{currentData.map((step: any, index: number) => (
					<Wrapper
						key={index}
						className={styles.analytics__funnel_step}
					>
						<div
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
								{step.value}
							</span>
							{step.rate !== undefined && (
								<span
									className={
										styles.analytics__funnel_step_rate
									}
								>
									{step.rate}%
								</span>
							)}
						</div>
					</Wrapper>
				))}
			</Wrapper>
		);

		const renderCohort = () => (
			<Wrapper
				className={styles.analytics__chart_container}
				style={{ height }}
			>
				{/* Cohort implementation placeholder */}
				Cohort visualization
			</Wrapper>
		);

		const renderReport = () => (
			<Wrapper
				className={styles.analytics__chart_container}
			>
				{/* Report implementation placeholder */}
				Report visualization
			</Wrapper>
		);

		const renderRealtime = () => (
			<Wrapper className={styles.analytics__dashboard_grid}>
				{realtime && (
					<Wrapper
						className={styles.analytics__metric_container}
					>
						Realtime data streaming...
					</Wrapper>
				)}
				{metrics.map((metric, index) => (
					<Wrapper
						key={metric.id || index}
						className={styles.analytics__metric_container}
						onClick={() => onMetricClick?.(metric)}
					>
						<div className={styles.analytics__metric_value}>
							{formatMetricValue(
								metric.value,
								metric.format
							)}
						</div>
						<div className={styles.analytics__metric_label}>
							{metric.name}
						</div>
						{metric.change !== undefined && (
							<div
								className={
									styles.analytics__metric_change +
									' ' +
									(metric.change > 0 ?
										styles[
											'analytics__metric_change--positive'
										]
									: metric.change < 0 ?
										styles[
											'analytics__metric_change--negative'
										]
									:	styles[
											'analytics__metric_change--neutral'
										])
								}
							>
								{metric.change > 0 ? '+' : ''}
								{metric.change}%
							</div>
						)}
					</Wrapper>
				))}
			</Wrapper>
		);

		const renderLegend = () => (
			<Wrapper className={styles.analytics__chart_legend}>
				{colors.map((color, index) => (
					<div
						key={index}
						className={styles.analytics__chart_legend_item}
					>
						<span
							className={
								styles.analytics__chart_legend_item_color
							}
							style={{ backgroundColor: color }}
						/>
						Color {index + 1}
					</div>
				))}
			</Wrapper>
		);

		const renderFooter = () => {
			if (!showFooter) return null;
			return (
				<Wrapper className={styles.analytics__footer}>
					<div>
						Last updated:{' '}
						{lastUpdated ?
							lastUpdated.toLocaleString()
						:	'N/A'}
					</div>
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
			>
				{renderHeader()}
				{renderControls()}
				{renderContent()}
				{renderFooter()}
			</Wrapper>
		);
	}
);

Analytics.displayName = 'Analytics';

export default Analytics;
