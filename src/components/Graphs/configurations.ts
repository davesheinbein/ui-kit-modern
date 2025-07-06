import { ReactNode } from 'react';
import styles from './Graphs.module.scss';

// Graph variant types
export type GraphVariant =
	| 'chart'
	| 'analytics'
	| 'dashboard'
	| 'comparison'
	| 'trend'
	| 'distribution'
	| 'custom';

// Graph shape types - the actual chart types
export type GraphShape =
	| 'bar'
	| 'pie'
	| 'doughnut'
	| 'line'
	| 'area'
	| 'radar'
	| 'scatter'
	| 'composed'
	| 'treemap'
	| 'funnel'
	| 'custom';

// Data point configuration
export interface DataPointConfiguration {
	key: string;
	label?: string;
	color?: string;
	type?: 'number' | 'category' | 'date' | 'percentage';
	format?:
		| 'currency'
		| 'percentage'
		| 'decimal'
		| 'integer'
		| 'date'
		| 'custom';
	formatter?: (value: any) => string;
}

// Axis configuration
export interface AxisConfiguration {
	show?: boolean;
	label?: string;
	type?: 'category' | 'number' | 'date';
	format?:
		| 'currency'
		| 'percentage'
		| 'decimal'
		| 'integer'
		| 'date'
		| 'custom';
	fontSize?: number;
	tickLine?: boolean;
	axisLine?: boolean;
	grid?: boolean;
	domain?: [number, number] | ['auto', 'auto'];
}

// Legend configuration
export interface LegendConfiguration {
	show?: boolean;
	position?: 'top' | 'bottom' | 'left' | 'right';
	align?: 'left' | 'center' | 'right';
	verticalAlign?: 'top' | 'middle' | 'bottom';
	layout?: 'horizontal' | 'vertical';
}

// Tooltip configuration
export interface TooltipConfiguration {
	show?: boolean;
	format?: 'default' | 'currency' | 'percentage' | 'custom';
	formatter?: (
		value: any,
		name: string,
		props: any
	) => ReactNode;
	labelFormatter?: (label: string) => ReactNode;
	separator?: string;
}

// Animation configuration
export interface AnimationConfiguration {
	enabled?: boolean;
	duration?: number;
	easing?:
		| 'ease'
		| 'ease-in'
		| 'ease-out'
		| 'ease-in-out'
		| 'linear';
	delay?: number;
}

// Enhanced graph configuration interface
export interface GraphConfiguration {
	variant: GraphVariant;
	shape: GraphShape;

	// Styling
	colors?: string[];
	colorScheme?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'rainbow'
		| 'monochrome'
		| 'custom';
	className?: string;
	containerClassName?: string;

	// Data configuration
	dataKeys?: string[];
	labelKey?: string;
	valueKey?: string;

	// Layout
	width?: number | string;
	height?: number;
	margin?: {
		top?: number;
		right?: number;
		bottom?: number;
		left?: number;
	};
	padding?: number;

	// Chart elements
	xAxis?: AxisConfiguration;
	yAxis?: AxisConfiguration;
	legend?: LegendConfiguration;
	tooltip?: TooltipConfiguration;

	// Styling options
	showGrid?: boolean;
	showAxes?: boolean;
	showLabels?: boolean;
	showValues?: boolean;

	// Animation
	animation?: AnimationConfiguration;

	// Responsive behavior
	responsive?: boolean;
	minHeight?: number;
	maxHeight?: number;

	// Specific shape options
	barRadius?: number | [number, number, number, number];
	lineWidth?: number;
	lineSmooth?: boolean;
	pieInnerRadius?: number;
	pieOuterRadius?: number;
	areaOpacity?: number;

	// Interaction
	clickable?: boolean;
	hoverable?: boolean;
	zoomable?: boolean;
	brushable?: boolean;
}

// Comprehensive graph kind definitions
export type ExtendedGraphKind =
	// Basic charts
	| 'bar'
	| 'bar-stacked'
	| 'bar-grouped'

	// Line charts
	| 'line'
	| 'line-smooth'
	| 'line-multi'
	| 'line-stepped'

	// Area charts
	| 'area'
	| 'area-stacked'
	| 'area-smooth'

	// Pie charts
	| 'pie'
	| 'doughnut'
	| 'pie-with-labels'

	// Specialized charts
	| 'radar'
	| 'scatter'
	| 'composed-bar-line'
	| 'composed-line-area'
	| 'composed-multi'
	| 'treemap'
	| 'funnel'
	| 'sunburst'
	| 'candlestick'
	| 'waterfall'
	| 'heatmap'
	| 'violin'
	| 'boxplot'
	| 'gauge'
	| 'error-bar'
	| 'reference-line'
	| 'reference-area'
	| 'brush-zoom'

	// Analytics specific
	| 'analytics-trend'
	| 'analytics-comparison'
	| 'analytics-distribution'
	| 'analytics-performance'

	// Dashboard specific
	| 'dashboard-summary'
	| 'dashboard-kpi'
	| 'dashboard-trend'
	| 'dashboard-mini'

	// Game/Statistics specific
	| 'stats-score-progression'
	| 'stats-performance-radar'
	| 'stats-match-history'
	| 'stats-category-breakdown'
	| 'stats-time-series'

	// Custom
	| 'custom';

// Color schemes
export const COLOR_SCHEMES = {
	default: [
		'#2563eb',
		'#38bdf8',
		'#a78bfa',
		'#fbbf24',
		'#ef4444',
		'#10b981',
		'#f472b6',
		'#6366f1',
		'#f59e42',
		'#0ea5e9',
		'#64748b',
		'#eab308',
		'#f43f5e',
		'#14b8a6',
		'#f87171',
		'#a3e635',
	],
	primary: [
		'#2563eb',
		'#3b82f6',
		'#1d4ed8',
		'#1e40af',
		'#1e3a8a',
	],
	secondary: [
		'#38bdf8',
		'#0ea5e9',
		'#0284c7',
		'#0369a1',
		'#075985',
	],
	rainbow: [
		'#ef4444',
		'#f97316',
		'#f59e0b',
		'#eab308',
		'#84cc16',
		'#22c55e',
		'#10b981',
		'#14b8a6',
		'#06b6d4',
		'#0ea5e9',
		'#3b82f6',
		'#6366f1',
		'#8b5cf6',
		'#a855f7',
		'#d946ef',
		'#ec4899',
	],
	monochrome: [
		'#1f2937',
		'#374151',
		'#4b5563',
		'#6b7280',
		'#9ca3af',
		'#d1d5db',
		'#e5e7eb',
		'#f3f4f6',
		'#f9fafb',
	],
	pastel: [
		'#fecaca', // soft red
		'#fed7a1', // soft orange
		'#fef3c7', // soft yellow
		'#d9f99d', // soft green
		'#a7f3d0', // soft teal
		'#bfdbfe', // soft blue
		'#ddd6fe', // soft purple
		'#fbcfe8', // soft pink
		'#f3e8ff', // soft lavender
		'#fde68a', // soft amber
	],
	custom: [
		'#2563eb',
		'#38bdf8',
		'#a78bfa',
		'#fbbf24',
		'#ef4444',
	],
} as const;

// Predefined configurations for maximum DRYness
export const GRAPH_CONFIGURATIONS: Record<
	ExtendedGraphKind,
	GraphConfiguration
> = {
	// Basic bar charts
	'bar': {
		variant: 'chart',
		shape: 'bar',
		colorScheme: 'default',
		height: 140,
		className: styles.barChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		barRadius: [6, 6, 0, 0],
		xAxis: {
			show: true,
			fontSize: 12,
			tickLine: false,
			axisLine: false,
		},
		yAxis: {
			show: true,
			fontSize: 12,
			tickLine: false,
			axisLine: false,
		},
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 500 },
	},
	'bar-stacked': {
		variant: 'analytics',
		shape: 'bar',
		colorScheme: 'rainbow',
		height: 160,
		className: styles.stackedBarChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		barRadius: [4, 4, 0, 0],
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		legend: { show: true, position: 'top' },
		animation: { enabled: true, duration: 600 },
	},
	'bar-grouped': {
		variant: 'comparison',
		shape: 'bar',
		colorScheme: 'primary',
		height: 160,
		className: styles.groupedBarChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		barRadius: [4, 4, 0, 0],
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		legend: { show: true, position: 'top' },
		animation: { enabled: true, duration: 600 },
	},

	// Line charts
	'line': {
		variant: 'trend',
		shape: 'line',
		colorScheme: 'primary',
		height: 140,
		className: styles.lineChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		lineWidth: 2,
		lineSmooth: false,
		xAxis: {
			show: true,
			fontSize: 12,
			tickLine: false,
			axisLine: false,
		},
		yAxis: {
			show: true,
			fontSize: 12,
			tickLine: false,
			axisLine: false,
		},
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 800 },
	},
	'line-smooth': {
		variant: 'trend',
		shape: 'line',
		colorScheme: 'secondary',
		height: 140,
		className: styles.smoothLineChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		lineWidth: 3,
		lineSmooth: true,
		xAxis: {
			show: true,
			fontSize: 12,
			tickLine: false,
			axisLine: false,
		},
		yAxis: {
			show: true,
			fontSize: 12,
			tickLine: false,
			axisLine: false,
		},
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 1000 },
	},
	'line-multi': {
		variant: 'comparison',
		shape: 'line',
		colorScheme: 'rainbow',
		height: 160,
		className: styles.multiLineChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		lineWidth: 2,
		lineSmooth: true,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		legend: { show: true, position: 'top' },
		animation: { enabled: true, duration: 800 },
	},
	'line-stepped': {
		variant: 'analytics',
		shape: 'line',
		colorScheme: 'monochrome',
		height: 140,
		className: styles.steppedLineChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		lineWidth: 2,
		lineSmooth: false,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 600 },
	},

	// Area charts
	'area': {
		variant: 'trend',
		shape: 'area',
		colorScheme: 'primary',
		height: 140,
		className: styles.areaChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		lineWidth: 2,
		areaOpacity: 0.5,
		xAxis: {
			show: true,
			fontSize: 12,
			tickLine: false,
			axisLine: false,
		},
		yAxis: {
			show: true,
			fontSize: 12,
			tickLine: false,
			axisLine: false,
		},
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 800 },
	},
	'area-stacked': {
		variant: 'analytics',
		shape: 'area',
		colorScheme: 'rainbow',
		height: 160,
		className: styles.stackedAreaChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		lineWidth: 1,
		areaOpacity: 0.7,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		legend: { show: true, position: 'top' },
		animation: { enabled: true, duration: 1000 },
	},
	'area-smooth': {
		variant: 'trend',
		shape: 'area',
		colorScheme: 'secondary',
		height: 140,
		className: styles.smoothAreaChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		lineWidth: 2,
		lineSmooth: true,
		areaOpacity: 0.6,
		xAxis: {
			show: true,
			fontSize: 12,
			tickLine: false,
			axisLine: false,
		},
		yAxis: {
			show: true,
			fontSize: 12,
			tickLine: false,
			axisLine: false,
		},
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 1200 },
	},

	// Pie charts
	'pie': {
		variant: 'distribution',
		shape: 'pie',
		colorScheme: 'rainbow',
		height: 200,
		className: styles.pieChart,
		responsive: true,
		pieOuterRadius: 80,
		showLabels: true,
		tooltip: { show: true, format: 'percentage' },
		legend: { show: true, position: 'bottom' },
		animation: { enabled: true, duration: 800 },
	},
	'doughnut': {
		variant: 'distribution',
		shape: 'pie',
		colorScheme: 'primary',
		height: 200,
		className: styles.doughnutChart,
		responsive: true,
		pieInnerRadius: 40,
		pieOuterRadius: 80,
		showLabels: false,
		tooltip: { show: true, format: 'percentage' },
		legend: { show: true, position: 'right' },
		animation: { enabled: true, duration: 1000 },
	},
	'pie-with-labels': {
		variant: 'distribution',
		shape: 'pie',
		colorScheme: 'rainbow',
		height: 220,
		className: styles.labeledPieChart,
		responsive: true,
		pieOuterRadius: 85,
		showLabels: true,
		showValues: true,
		tooltip: { show: true, format: 'percentage' },
		legend: { show: true, position: 'bottom' },
		animation: { enabled: true, duration: 800 },
	},

	// Specialized charts
	'radar': {
		variant: 'comparison',
		shape: 'radar',
		colorScheme: 'primary',
		height: 180,
		className: styles.radarChart,
		responsive: true,
		areaOpacity: 0.6,
		tooltip: { show: true, format: 'default' },
		legend: { show: true, position: 'top' },
		animation: { enabled: true, duration: 1000 },
	},
	'scatter': {
		variant: 'analytics',
		shape: 'scatter',
		colorScheme: 'secondary',
		height: 160,
		className: styles.scatterChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 600 },
	},
	'composed-bar-line': {
		variant: 'analytics',
		shape: 'composed',
		colorScheme: 'rainbow',
		height: 180,
		className: styles.composedChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		barRadius: [6, 6, 0, 0],
		lineWidth: 2,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		legend: { show: true, position: 'top' },
		animation: { enabled: true, duration: 800 },
	},
	'treemap': {
		variant: 'distribution',
		shape: 'treemap',
		colorScheme: 'rainbow',
		height: 200,
		className: styles.treemapChart,
		responsive: true,
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 600 },
	},
	'funnel': {
		variant: 'analytics',
		shape: 'funnel',
		colorScheme: 'primary',
		height: 180,
		className: styles.funnelChart,
		responsive: true,
		tooltip: { show: true, format: 'percentage' },
		legend: { show: true, position: 'right' },
		animation: { enabled: true, duration: 800 },
	},

	// Analytics specific
	'analytics-trend': {
		variant: 'analytics',
		shape: 'line',
		colorScheme: 'primary',
		height: 120,
		className: styles.analyticsTrendChart,
		showGrid: false,
		showAxes: false,
		responsive: true,
		lineWidth: 3,
		lineSmooth: true,
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 1000 },
		margin: { top: 5, right: 5, bottom: 5, left: 5 },
	},
	'analytics-comparison': {
		variant: 'analytics',
		shape: 'bar',
		colorScheme: 'rainbow',
		height: 100,
		className: styles.analyticsComparisonChart,
		showGrid: false,
		showAxes: false,
		responsive: true,
		barRadius: [2, 2, 0, 0],
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 600 },
		margin: { top: 5, right: 5, bottom: 5, left: 5 },
	},
	'analytics-distribution': {
		variant: 'analytics',
		shape: 'pie',
		colorScheme: 'monochrome',
		height: 120,
		className: styles.analyticsDistributionChart,
		responsive: true,
		pieOuterRadius: 50,
		showLabels: false,
		tooltip: { show: true, format: 'percentage' },
		animation: { enabled: true, duration: 800 },
	},
	'analytics-performance': {
		variant: 'analytics',
		shape: 'radar',
		colorScheme: 'secondary',
		height: 140,
		className: styles.analyticsPerformanceChart,
		responsive: true,
		areaOpacity: 0.3,
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 1000 },
	},

	// Dashboard specific
	'dashboard-summary': {
		variant: 'dashboard',
		shape: 'area',
		colorScheme: 'primary',
		height: 80,
		className: styles.dashboardSummaryChart,
		showGrid: false,
		showAxes: false,
		responsive: true,
		lineWidth: 2,
		areaOpacity: 0.2,
		tooltip: { show: false },
		animation: { enabled: true, duration: 600 },
		margin: { top: 5, right: 5, bottom: 5, left: 5 },
	},
	'dashboard-kpi': {
		variant: 'dashboard',
		shape: 'bar',
		colorScheme: 'primary',
		height: 60,
		className: styles.dashboardKpiChart,
		showGrid: false,
		showAxes: false,
		responsive: true,
		barRadius: [2, 2, 0, 0],
		tooltip: { show: false },
		animation: { enabled: true, duration: 400 },
		margin: { top: 5, right: 5, bottom: 5, left: 5 },
	},
	'dashboard-trend': {
		variant: 'dashboard',
		shape: 'line',
		colorScheme: 'secondary',
		height: 100,
		className: styles.dashboardTrendChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		lineWidth: 2,
		lineSmooth: true,
		xAxis: { show: true, fontSize: 10 },
		yAxis: { show: true, fontSize: 10 },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 800 },
		margin: { top: 10, right: 10, bottom: 20, left: 20 },
	},
	'dashboard-mini': {
		variant: 'dashboard',
		shape: 'line',
		colorScheme: 'primary',
		height: 40,
		className: styles.dashboardMiniChart,
		showGrid: false,
		showAxes: false,
		responsive: true,
		lineWidth: 1,
		tooltip: { show: false },
		animation: { enabled: false },
		margin: { top: 2, right: 2, bottom: 2, left: 2 },
	},

	// Game/Statistics specific
	'stats-score-progression': {
		variant: 'trend',
		shape: 'area',
		colorScheme: 'primary',
		height: 160,
		className: styles.statsScoreChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		lineWidth: 3,
		areaOpacity: 0.3,
		xAxis: { show: true, fontSize: 12, label: 'Games' },
		yAxis: { show: true, fontSize: 12, label: 'Score' },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 1000 },
	},
	'stats-performance-radar': {
		variant: 'comparison',
		shape: 'radar',
		colorScheme: 'rainbow',
		height: 200,
		className: styles.statsPerformanceChart,
		responsive: true,
		areaOpacity: 0.4,
		tooltip: { show: true, format: 'default' },
		legend: { show: true, position: 'bottom' },
		animation: { enabled: true, duration: 1200 },
	},
	'stats-match-history': {
		variant: 'trend',
		shape: 'bar',
		colorScheme: 'secondary',
		height: 140,
		className: styles.statsMatchHistoryChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		barRadius: [4, 4, 0, 0],
		xAxis: {
			show: true,
			fontSize: 11,
			label: 'Recent Matches',
		},
		yAxis: { show: true, fontSize: 11, label: 'Score' },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 600 },
	},
	'stats-category-breakdown': {
		variant: 'distribution',
		shape: 'pie',
		colorScheme: 'rainbow',
		height: 180,
		className: styles.statsCategoryChart,
		responsive: true,
		pieOuterRadius: 70,
		showLabels: true,
		tooltip: { show: true, format: 'percentage' },
		legend: { show: true, position: 'right' },
		animation: { enabled: true, duration: 800 },
	},
	'stats-time-series': {
		variant: 'trend',
		shape: 'line',
		colorScheme: 'primary',
		height: 120,
		className: styles.statsTimeSeriesChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		lineWidth: 2,
		lineSmooth: true,
		xAxis: { show: true, fontSize: 10, type: 'date' },
		yAxis: { show: true, fontSize: 10 },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 800 },
	},

	// Advanced chart types
	'sunburst': {
		variant: 'chart',
		shape: 'custom',
		colorScheme: 'rainbow',
		height: 400,
		className: styles.sunburstChart,
		responsive: true,
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 1000 },
	},
	'candlestick': {
		variant: 'chart',
		shape: 'custom',
		colorScheme: 'default',
		height: 300,
		className: styles.candlestickChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		xAxis: { show: true, fontSize: 12, type: 'date' },
		yAxis: { show: true, fontSize: 12, type: 'number' },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 600 },
	},
	'waterfall': {
		variant: 'chart',
		shape: 'bar',
		colorScheme: 'default',
		height: 300,
		className: styles.waterfallChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 800 },
	},
	'heatmap': {
		variant: 'chart',
		shape: 'custom',
		colorScheme: 'default',
		height: 300,
		className: styles.heatmapChart,
		showAxes: true,
		responsive: true,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 600 },
	},
	'violin': {
		variant: 'chart',
		shape: 'custom',
		colorScheme: 'primary',
		height: 300,
		className: styles.violinChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 800 },
	},
	'boxplot': {
		variant: 'chart',
		shape: 'custom',
		colorScheme: 'secondary',
		height: 300,
		className: styles.boxplotChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 600 },
	},
	'gauge': {
		variant: 'chart',
		shape: 'custom',
		colorScheme: 'primary',
		height: 250,
		className: styles.gaugeChart,
		responsive: true,
		tooltip: { show: true, format: 'percentage' },
		animation: { enabled: true, duration: 1000 },
	},

	// Additional composed charts
	'composed-line-area': {
		variant: 'analytics',
		shape: 'composed',
		colorScheme: 'default',
		height: 180,
		className: styles.composedChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		legend: { show: true, position: 'top' },
		animation: { enabled: true, duration: 800 },
	},
	'composed-multi': {
		variant: 'dashboard',
		shape: 'composed',
		colorScheme: 'rainbow',
		height: 200,
		className: styles.composedChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		legend: { show: true, position: 'top' },
		animation: { enabled: true, duration: 800 },
	},

	// Error bar chart
	'error-bar': {
		variant: 'analytics',
		shape: 'bar',
		colorScheme: 'default',
		height: 160,
		className: styles.barChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 600 },
	},

	// Reference line chart
	'reference-line': {
		variant: 'analytics',
		shape: 'line',
		colorScheme: 'primary',
		height: 160,
		className: styles.lineChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 600 },
	},

	// Reference area chart
	'reference-area': {
		variant: 'analytics',
		shape: 'area',
		colorScheme: 'secondary',
		height: 160,
		className: styles.areaChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 600 },
	},

	// Brush zoom chart
	'brush-zoom': {
		variant: 'analytics',
		shape: 'line',
		colorScheme: 'primary',
		height: 200,
		className: styles.lineChart,
		showGrid: true,
		showAxes: true,
		responsive: true,
		brushable: true,
		xAxis: { show: true, fontSize: 12 },
		yAxis: { show: true, fontSize: 12 },
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 600 },
	},

	// Custom fallback
	'custom': {
		variant: 'custom',
		shape: 'custom',
		colorScheme: 'default',
		height: 140,
		className: '',
		responsive: true,
		tooltip: { show: true, format: 'default' },
		animation: { enabled: true, duration: 500 },
	},
};

// Graph groups for common use cases
export const GRAPH_GROUPS = {
	BASIC_CHARTS: {
		bar: {
			kind: 'bar' as ExtendedGraphKind,
			props: {},
		},
		line: {
			kind: 'line' as ExtendedGraphKind,
			props: {},
		},
		pie: {
			kind: 'pie' as ExtendedGraphKind,
			props: {},
		},
		area: {
			kind: 'area' as ExtendedGraphKind,
			props: {},
		},
	},
	ANALYTICS_CHARTS: {
		trend: {
			kind: 'analytics-trend' as ExtendedGraphKind,
			props: {},
		},
		comparison: {
			kind: 'analytics-comparison' as ExtendedGraphKind,
			props: {},
		},
		distribution: {
			kind: 'analytics-distribution' as ExtendedGraphKind,
			props: {},
		},
		performance: {
			kind: 'analytics-performance' as ExtendedGraphKind,
			props: {},
		},
	},
	DASHBOARD_CHARTS: {
		summary: {
			kind: 'dashboard-summary' as ExtendedGraphKind,
			props: {},
		},
		kpi: {
			kind: 'dashboard-kpi' as ExtendedGraphKind,
			props: {},
		},
		trend: {
			kind: 'dashboard-trend' as ExtendedGraphKind,
			props: {},
		},
		mini: {
			kind: 'dashboard-mini' as ExtendedGraphKind,
			props: {},
		},
	},
	STATS_CHARTS: {
		'score-progression': {
			kind: 'stats-score-progression' as ExtendedGraphKind,
			props: {},
		},
		'performance-radar': {
			kind: 'stats-performance-radar' as ExtendedGraphKind,
			props: {},
		},
		'match-history': {
			kind: 'stats-match-history' as ExtendedGraphKind,
			props: {},
		},
		'category-breakdown': {
			kind: 'stats-category-breakdown' as ExtendedGraphKind,
			props: {},
		},
	},
} as const;

// Quick graph presets
export const QUICK_GRAPHS = {
	// Quick analytics graphs
	TREND_LINE: (
		data: any[],
		xKey: string,
		yKey: string
	) => ({
		kind: 'analytics-trend' as ExtendedGraphKind,
		data,
		labelKey: xKey,
		valueKey: yKey,
	}),
	COMPARISON_BAR: (
		data: any[],
		xKey: string,
		yKey: string
	) => ({
		kind: 'analytics-comparison' as ExtendedGraphKind,
		data,
		labelKey: xKey,
		valueKey: yKey,
	}),
	DISTRIBUTION_PIE: (
		data: any[],
		nameKey: string,
		valueKey: string
	) => ({
		kind: 'analytics-distribution' as ExtendedGraphKind,
		data,
		labelKey: nameKey,
		valueKey: valueKey,
	}),

	// Quick dashboard graphs
	KPI_CHART: (data: any[], valueKey: string) => ({
		kind: 'dashboard-kpi' as ExtendedGraphKind,
		data,
		valueKey,
	}),
	MINI_TREND: (data: any[], valueKey: string) => ({
		kind: 'dashboard-mini' as ExtendedGraphKind,
		data,
		valueKey,
	}),

	// Quick stats graphs
	SCORE_HISTORY: (
		data: any[],
		matchKey: string,
		scoreKey: string
	) => ({
		kind: 'stats-score-progression' as ExtendedGraphKind,
		data,
		labelKey: matchKey,
		valueKey: scoreKey,
	}),
	PERFORMANCE_RADAR: (
		data: any[],
		categoryKey: string,
		valueKey: string
	) => ({
		kind: 'stats-performance-radar' as ExtendedGraphKind,
		data,
		labelKey: categoryKey,
		valueKey: valueKey,
	}),
} as const;

/**
 * Utility function to create graph configurations with overrides
 */
export function createGraphConfig(
	kind: ExtendedGraphKind,
	overrides: Partial<GraphConfiguration> = {}
): GraphConfiguration {
	return {
		...GRAPH_CONFIGURATIONS[kind],
		...overrides,
		// Merge nested objects properly
		colors: overrides.colors ||
			GRAPH_CONFIGURATIONS[kind].colors || [
				...COLOR_SCHEMES[
					overrides.colorScheme ||
						GRAPH_CONFIGURATIONS[kind].colorScheme ||
						'default'
				],
			],
		xAxis: {
			...GRAPH_CONFIGURATIONS[kind].xAxis,
			...overrides.xAxis,
		},
		yAxis: {
			...GRAPH_CONFIGURATIONS[kind].yAxis,
			...overrides.yAxis,
		},
		legend: {
			...GRAPH_CONFIGURATIONS[kind].legend,
			...overrides.legend,
		},
		tooltip: {
			...GRAPH_CONFIGURATIONS[kind].tooltip,
			...overrides.tooltip,
		},
		animation: {
			...GRAPH_CONFIGURATIONS[kind].animation,
			...overrides.animation,
		},
		margin: {
			...GRAPH_CONFIGURATIONS[kind].margin,
			...overrides.margin,
		},
	};
}

/**
 * Utility function to get colors for a specific color scheme
 */
export function getColorScheme(
	scheme: keyof typeof COLOR_SCHEMES
): string[] {
	return [...COLOR_SCHEMES[scheme]];
}
