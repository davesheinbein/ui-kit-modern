import React, { 
	forwardRef, 
	useMemo, 
	useState, 
	useEffect, 
	useCallback,
	useRef 
} from 'react';
import { 
	AnalyticsConfiguration, 
	AnalyticsDataPoint, 
	AnalyticsMetric, 
	AnalyticsQuery,
	AnalyticsFilter,
	analyticsConfigurations 
} from './configurations';
import styles from './Analytics.module.scss';

export interface BaseAnalyticsProps {
	className?: string;
	style?: React.CSSProperties;
}

export interface UnifiedAnalyticsProps extends BaseAnalyticsProps {
	kind: 
		| 'dashboard'
		| 'chart'
		| 'metric'
		| 'heatmap'
		| 'funnel'
		| 'cohort'
		| 'report'
		| 'realtime';

	// Content and data
	title?: string;
	subtitle?: string;
	data?: AnalyticsDataPoint[] | AnalyticsMetric[] | any[];
	metrics?: AnalyticsMetric[];
	query?: AnalyticsQuery;
	filters?: AnalyticsFilter[];

	// Configuration
	config?: Partial<AnalyticsConfiguration>;
	timeRange?: 'realtime' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year' | 'custom';
	layout?: 'grid' | 'list' | 'single' | 'split' | 'sidebar' | 'fullscreen';
	autoRefresh?: boolean;
	refreshInterval?: number;
	
	// Interactivity
	interactive?: boolean;
	drilldown?: boolean;
	exportable?: boolean;
	filterable?: boolean;
	searchable?: boolean;

	// Event handlers
	onDataPoint?: (point: AnalyticsDataPoint) => void;
	onMetricClick?: (metric: AnalyticsMetric) => void;
	onFilter?: (filters: AnalyticsFilter[]) => void;
	onExport?: (format: 'csv' | 'pdf' | 'png') => void;
	onRefresh?: () => void;
	onDrilldown?: (dimension: string, value: any) => void;
	onTimeRangeChange?: (timeRange: string) => void;

	// Loading and error states
	loading?: boolean;
	error?: string | null;
	empty?: boolean;
	emptyMessage?: string;

	// Customization
	colors?: string[];
	theme?: 'light' | 'dark' | 'auto';
	height?: number | string;
	showHeader?: boolean;
	showFooter?: boolean;
	showLegend?: boolean;
	showControls?: boolean;

	// Analytics-specific props
	chartType?: 'line' | 'bar' | 'pie' | 'area' | 'scatter' | 'heatmap';
	aggregation?: 'sum' | 'avg' | 'count' | 'min' | 'max';
	granularity?: 'minute' | 'hour' | 'day' | 'week' | 'month';
	
	// Real-time
	realtime?: boolean;
	realtimeEndpoint?: string;
	
	// Advanced
	customRenderer?: (data: any) => React.ReactNode;
	plugins?: any[];
}

const UnifiedAnalytics = forwardRef<HTMLDivElement, UnifiedAnalyticsProps>(
	(
		{
			kind,
			title,
			subtitle,
			data = [],
			metrics = [],
			query,
			filters = [],
			config = {},
			timeRange = 'day',
			layout = 'single',
			autoRefresh = false,
			refreshInterval = 30000,
			interactive = true,
			drilldown = false,
			exportable = false,
			filterable = false,
			searchable = false,
			onDataPoint,
			onMetricClick,
			onFilter,
			onExport,
			onRefresh,
			onDrilldown,
			onTimeRangeChange,
			loading = false,
			error = null,
			empty = false,
			emptyMessage = 'No data available',
			colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
			theme = 'auto',
			height = 300,
			showHeader = true,
			showFooter = false,
			showLegend = true,
			showControls = false,
			chartType = 'line',
			aggregation = 'sum',
			granularity = 'day',
			realtime = false,
			realtimeEndpoint,
			customRenderer,
			plugins = [],
			className = '',
			style = {},
		},
		ref
	) => {
		// Get configuration for the kind
		const configuration = useMemo(() => {
			const baseConfig = analyticsConfigurations[`${kind}-default`] || analyticsConfigurations[kind] || {};
			return { ...baseConfig, ...config };
		}, [kind, config]);

		// State management
		const [currentData, setCurrentData] = useState(data);
		const [currentFilters, setCurrentFilters] = useState(filters);
		const [isRefreshing, setIsRefreshing] = useState(false);
		const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
		const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null);

		// Auto-refresh logic
		useEffect(() => {
			if (autoRefresh && refreshInterval > 0) {
				refreshIntervalRef.current = setInterval(() => {
					handleRefresh();
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

		// Event handlers
		const handleRefresh = useCallback(() => {
			setIsRefreshing(true);
			onRefresh?.();
			setTimeout(() => {
				setIsRefreshing(false);
				setLastUpdated(new Date());
			}, 1000);
		}, [onRefresh]);

		const handleFilter = useCallback((newFilters: AnalyticsFilter[]) => {
			setCurrentFilters(newFilters);
			onFilter?.(newFilters);
		}, [onFilter]);

		const handleExport = useCallback((format: 'csv' | 'pdf' | 'png') => {
			onExport?.(format);
		}, [onExport]);

		const handleTimeRangeChange = useCallback((newTimeRange: string) => {
			onTimeRangeChange?.(newTimeRange);
		}, [onTimeRangeChange]);

		// Render methods
		const renderHeader = () => {
			if (!showHeader) return null;

			return (
				<div className={styles.analytics__header}>
					<div>
						{title && (
							<h3 className={styles.analytics__header_title}>
								{title}
							</h3>
						)}
						{subtitle && (
							<p className={styles.analytics__header_subtitle}>
								{subtitle}
							</p>
						)}
					</div>
					<div className={styles.analytics__header_actions}>
						{exportable && (
							<div className={styles.analytics__actions}>
								<button
									className={styles.analytics__actions_button}
									onClick={() => handleExport('csv')}
									title="Export as CSV"
								>
									CSV
								</button>
								<button
									className={styles.analytics__actions_button}
									onClick={() => handleExport('pdf')}
									title="Export as PDF"
								>
									PDF
								</button>
							</div>
						)}
						{autoRefresh && (
							<button
								className={`${styles.analytics__actions_button} ${
									isRefreshing ? styles.analytics__actions_button__loading : ''
								}`}
								onClick={handleRefresh}
								disabled={isRefreshing}
								title="Refresh data"
							>
								{isRefreshing ? '⟳' : '↻'}
							</button>
						)}
					</div>
				</div>
			);
		};

		const renderControls = () => {
			if (!showControls) return null;

			return (
				<div className={styles.analytics__controls}>
					<div className={styles.analytics__controls_group}>
						<label className={styles.analytics__controls_label}>
							Time Range:
						</label>
						<select
							value={timeRange}
							onChange={(e) => handleTimeRangeChange(e.target.value)}
						>
							<option value="hour">Last Hour</option>
							<option value="day">Last Day</option>
							<option value="week">Last Week</option>
							<option value="month">Last Month</option>
							<option value="quarter">Last Quarter</option>
							<option value="year">Last Year</option>
							<option value="custom">Custom</option>
						</select>
					</div>
					{filterable && (
						<div className={styles.analytics__controls_group}>
							<label className={styles.analytics__controls_label}>
								Filters:
							</label>
							<button
								className={styles.analytics__actions_button}
								onClick={() => {/* Open filter modal */}}
							>
								Add Filter ({currentFilters.length})
							</button>
						</div>
					)}
				</div>
			);
		};

		const renderContent = () => {
			if (loading) {
				return (
					<div className={styles.analytics__loading}>
						<div className={styles.analytics__loading_spinner} />
						<span className={styles.analytics__loading_text}>
							Loading analytics...
						</span>
					</div>
				);
			}

			if (error) {
				return (
					<div className={styles.analytics__error}>
						<div className={styles.analytics__error_message}>
							Error loading analytics
						</div>
						<div className={styles.analytics__error_details}>
							{error}
						</div>
						<div className={styles.analytics__error_actions}>
							<button
								className={styles.analytics__actions_button}
								onClick={handleRefresh}
							>
								Retry
							</button>
						</div>
					</div>
				);
			}

			if (empty || (!currentData.length && !metrics.length)) {
				return (
					<div className={styles.analytics__error}>
						<div className={styles.analytics__error_message}>
							{emptyMessage}
						</div>
					</div>
				);
			}

			// Custom renderer takes precedence
			if (customRenderer) {
				return customRenderer(currentData);
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
			<div className={styles.analytics__dashboard_grid}>
				{metrics.map((metric, index) => (
					<div key={metric.id || index} className={styles.analytics__metric_container}>
						<div className={styles.analytics__metric_value}>
							{formatMetricValue(metric.value, metric.format)}
						</div>
						<div className={styles.analytics__metric_label}>
							{metric.name}
						</div>
						{metric.change !== undefined && (
							<div className={`${styles.analytics__metric_change} ${
								metric.change > 0 ? styles['analytics__metric_change--positive'] :
								metric.change < 0 ? styles['analytics__metric_change--negative'] :
								styles['analytics__metric_change--neutral']
							}`}>
								{metric.change > 0 ? '↗' : metric.change < 0 ? '↘' : '→'}
								{Math.abs(metric.changePercent || metric.change)}%
							</div>
						)}
					</div>
				))}
			</div>
		);

		const renderChart = () => (
			<div className={styles.analytics__chart_container} style={{ height }}>
				{/* Chart implementation would go here - using placeholder */}
				<div className={styles.analytics__chart_loading}>
					Chart visualization ({chartType}) - {currentData.length} data points
				</div>
				{showLegend && renderLegend()}
			</div>
		);

		const renderMetric = () => {
			const metric = metrics[0] || { name: 'Metric', value: 0 };
			return (
				<div className={styles.analytics__metric_container}>
					<div className={styles.analytics__metric_value}>
						{formatMetricValue(metric.value, metric.format)}
					</div>
					<div className={styles.analytics__metric_label}>
						{metric.name}
					</div>
					{metric.change !== undefined && (
						<div className={`${styles.analytics__metric_change} ${
							metric.change > 0 ? styles['analytics__metric_change--positive'] :
							metric.change < 0 ? styles['analytics__metric_change--negative'] :
							styles['analytics__metric_change--neutral']
						}`}>
							{metric.change > 0 ? '↗' : metric.change < 0 ? '↘' : '→'}
							{Math.abs(metric.changePercent || metric.change)}%
						</div>
					)}
				</div>
			);
		};

		const renderHeatmap = () => (
			<div className={styles.analytics__heatmap_container} style={{ height }}>
				{/* Heatmap implementation would go here */}
				<div className={styles.analytics__chart_loading}>
					Heatmap visualization - {currentData.length} data points
				</div>
			</div>
		);

		const renderFunnel = () => (
			<div className={styles.analytics__funnel_container}>
				{currentData.map((step, index) => (
					<div key={index} className={styles.analytics__funnel_step}>
						<div className={styles.analytics__funnel_step_content}>
							<div className={styles.analytics__funnel_step_label}>
								{step.label || `Step ${index + 1}`}
							</div>
							<div className={styles.analytics__funnel_step_value}>
								{formatMetricValue(step.value, 'number')}
							</div>
							{step.rate && (
								<div className={styles.analytics__funnel_step_rate}>
									{(step.rate * 100).toFixed(1)}%
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		);

		const renderCohort = () => (
			<div className={styles.analytics__chart_container} style={{ height }}>
				{/* Cohort table implementation would go here */}
				<div className={styles.analytics__chart_loading}>
					Cohort analysis - {currentData.length} cohorts
				</div>
			</div>
		);

		const renderReport = () => (
			<div className={styles.analytics__chart_container}>
				{/* Report table implementation would go here */}
				<div className={styles.analytics__chart_loading}>
					Report view - {currentData.length} rows
				</div>
			</div>
		);

		const renderRealtime = () => (
			<div className={styles.analytics__dashboard_grid}>
				{/* Real-time metrics grid */}
				{metrics.map((metric, index) => (
					<div key={metric.id || index} className={styles.analytics__metric_container}>
						<div className={styles.analytics__metric_value}>
							{formatMetricValue(metric.value, metric.format)}
						</div>
						<div className={styles.analytics__metric_label}>
							{metric.name} (Live)
						</div>
					</div>
				))}
			</div>
		);

		const renderLegend = () => (
			<div className={styles.analytics__chart_legend}>
				{colors.map((color, index) => (
					<div key={index} className={styles.analytics__chart_legend_item}>
						<div 
							className={styles.analytics__chart_legend_item_color}
							style={{ backgroundColor: color }}
						/>
						<span>Series {index + 1}</span>
					</div>
				))}
			</div>
		);

		const renderFooter = () => {
			if (!showFooter) return null;

			return (
				<div className={styles.analytics__footer}>
					<div>
						{lastUpdated && (
							<span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
						)}
					</div>
					<div>
						{currentData.length} data points
					</div>
				</div>
			);
		};

		// Helper functions
		const formatMetricValue = (value: number, format?: string) => {
			switch (format) {
				case 'currency':
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value);
				case 'percentage':
					return `${(value * 100).toFixed(1)}%`;
				case 'duration':
					return `${value}ms`;
				default:
					return new Intl.NumberFormat().format(value);
			}
		};

		// Compute CSS classes
		const analyticsClasses = [
			styles.analytics__container,
			layout && styles[`analytics__${layout}`],
			theme && styles[`analytics__theme_${theme}`],
			className,
		].filter(Boolean).join(' ');

		return (
			<div
				ref={ref}
				className={analyticsClasses}
				style={style}
				data-analytics-kind={kind}
				data-analytics-type={configuration.type}
			>
				{renderHeader()}
				{renderControls()}
				<div className={styles.analytics__content}>
					{renderContent()}
				</div>
				{renderFooter()}
			</div>
		);
	}
);

UnifiedAnalytics.displayName = 'UnifiedAnalytics';

export default UnifiedAnalytics;
