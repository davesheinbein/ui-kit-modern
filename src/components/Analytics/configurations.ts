import React from 'react';

export interface AnalyticsConfiguration {
	kind:
		| 'dashboard'
		| 'chart'
		| 'metric'
		| 'heatmap'
		| 'funnel'
		| 'cohort'
		| 'report'
		| 'realtime';
	variant?:
		| 'dashboard'
		| 'chart'
		| 'metric'
		| 'heatmap'
		| 'funnel'
		| 'cohort'
		| 'report'
		| 'realtime';
	type?:
		| 'performance'
		| 'user-behavior'
		| 'conversion'
		| 'engagement'
		| 'revenue'
		| 'traffic'
		| 'errors'
		| 'custom';
	layout?:
		| 'grid'
		| 'list'
		| 'single'
		| 'split'
		| 'sidebar'
		| 'fullscreen';
	timeRange?:
		| 'realtime'
		| 'hour'
		| 'day'
		| 'week'
		| 'month'
		| 'quarter'
		| 'year'
		| 'custom';
	refreshInterval?: number; // in milliseconds
	autoRefresh?: boolean;
	exportable?: boolean;
	interactive?: boolean;
	drilldown?: boolean;
	[key: string]: any;
}

// Dashboard analytics configurations
export const performanceDashboard: AnalyticsConfiguration =
	{
		kind: 'dashboard',
		variant: 'dashboard',
		type: 'performance',
		layout: 'grid',
		timeRange: 'day',
		autoRefresh: true,
		refreshInterval: 30000,
		exportable: true,
		interactive: true,
		drilldown: true,
	};

export const userBehaviorDashboard: AnalyticsConfiguration =
	{
		kind: 'dashboard',
		variant: 'dashboard',
		type: 'user-behavior',
		layout: 'grid',
		timeRange: 'week',
		autoRefresh: false,
		exportable: true,
		interactive: true,
		drilldown: true,
	};

export const conversionDashboard: AnalyticsConfiguration = {
	kind: 'dashboard',
	variant: 'dashboard',
	type: 'conversion',
	layout: 'grid',
	timeRange: 'month',
	autoRefresh: false,
	exportable: true,
	interactive: true,
	drilldown: true,
};

// Chart analytics configurations
export const lineChart: AnalyticsConfiguration = {
	kind: 'chart',
	variant: 'chart',
	type: 'performance',
	layout: 'single',
	timeRange: 'week',
	autoRefresh: false,
	exportable: true,
	interactive: true,
	drilldown: false,
};

export const barChart: AnalyticsConfiguration = {
	kind: 'chart',
	variant: 'chart',
	type: 'conversion',
	layout: 'single',
	timeRange: 'month',
	autoRefresh: false,
	exportable: true,
	interactive: true,
	drilldown: true,
};

export const pieChart: AnalyticsConfiguration = {
	kind: 'chart',
	variant: 'chart',
	type: 'traffic',
	layout: 'single',
	timeRange: 'week',
	autoRefresh: false,
	exportable: true,
	interactive: true,
	drilldown: true,
};

// Metric configurations
export const kpiMetric: AnalyticsConfiguration = {
	kind: 'metric',
	variant: 'metric',
	type: 'performance',
	layout: 'single',
	timeRange: 'day',
	autoRefresh: true,
	refreshInterval: 60000,
	exportable: false,
	interactive: false,
	drilldown: false,
};

export const revenueMetric: AnalyticsConfiguration = {
	kind: 'metric',
	variant: 'metric',
	type: 'revenue',
	layout: 'single',
	timeRange: 'month',
	autoRefresh: false,
	exportable: true,
	interactive: true,
	drilldown: true,
};

// Heatmap configurations
export const userHeatmap: AnalyticsConfiguration = {
	kind: 'heatmap',
	variant: 'heatmap',
	type: 'user-behavior',
	layout: 'fullscreen',
	timeRange: 'week',
	autoRefresh: false,
	exportable: true,
	interactive: true,
	drilldown: true,
};

export const conversionHeatmap: AnalyticsConfiguration = {
	kind: 'heatmap',
	variant: 'heatmap',
	type: 'conversion',
	layout: 'single',
	timeRange: 'month',
	autoRefresh: false,
	exportable: true,
	interactive: true,
	drilldown: true,
};

// Funnel configurations
export const conversionFunnel: AnalyticsConfiguration = {
	kind: 'funnel',
	variant: 'funnel',
	type: 'conversion',
	layout: 'single',
	timeRange: 'month',
	autoRefresh: false,
	exportable: true,
	interactive: true,
	drilldown: true,
};

export const userJourneyFunnel: AnalyticsConfiguration = {
	kind: 'funnel',
	variant: 'funnel',
	type: 'user-behavior',
	layout: 'single',
	timeRange: 'week',
	autoRefresh: false,
	exportable: true,
	interactive: true,
	drilldown: true,
};

// Cohort configurations
export const userCohort: AnalyticsConfiguration = {
	kind: 'cohort',
	variant: 'cohort',
	type: 'engagement',
	layout: 'single',
	timeRange: 'quarter',
	autoRefresh: false,
	exportable: true,
	interactive: true,
	drilldown: true,
};

export const revenueCohort: AnalyticsConfiguration = {
	kind: 'cohort',
	variant: 'cohort',
	type: 'revenue',
	layout: 'single',
	timeRange: 'quarter',
	autoRefresh: false,
	exportable: true,
	interactive: true,
	drilldown: true,
};

// Report configurations
export const performanceReport: AnalyticsConfiguration = {
	kind: 'report',
	variant: 'report',
	type: 'performance',
	layout: 'list',
	timeRange: 'month',
	autoRefresh: false,
	exportable: true,
	interactive: false,
	drilldown: false,
};

export const customReport: AnalyticsConfiguration = {
	kind: 'report',
	variant: 'report',
	type: 'custom',
	layout: 'list',
	timeRange: 'custom',
	autoRefresh: false,
	exportable: true,
	interactive: true,
	drilldown: true,
};

// Realtime configurations
export const realtimeMetrics: AnalyticsConfiguration = {
	kind: 'realtime',
	variant: 'realtime',
	type: 'performance',
	layout: 'grid',
	timeRange: 'realtime',
	autoRefresh: true,
	refreshInterval: 5000,
	exportable: false,
	interactive: true,
	drilldown: false,
};

export const realtimeTraffic: AnalyticsConfiguration = {
	kind: 'realtime',
	variant: 'realtime',
	type: 'traffic',
	layout: 'grid',
	timeRange: 'realtime',
	autoRefresh: true,
	refreshInterval: 10000,
	exportable: false,
	interactive: true,
	drilldown: true,
};

// Configuration mappings
export const analyticsConfigurations: Record<
	string,
	AnalyticsConfiguration
> = {
	'performance-dashboard': performanceDashboard,
	'user-behavior-dashboard': userBehaviorDashboard,
	'conversion-dashboard': conversionDashboard,
	'line-chart': lineChart,
	'bar-chart': barChart,
	'pie-chart': pieChart,
	'kpi-metric': kpiMetric,
	'revenue-metric': revenueMetric,
	'user-heatmap': userHeatmap,
	'conversion-heatmap': conversionHeatmap,
	'conversion-funnel': conversionFunnel,
	'user-journey-funnel': userJourneyFunnel,
	'user-cohort': userCohort,
	'revenue-cohort': revenueCohort,
	'performance-report': performanceReport,
	'custom-report': customReport,
	'realtime-metrics': realtimeMetrics,
	'realtime-traffic': realtimeTraffic,
};

// Default arrays/constants for Analytics
export const DEFAULT_DATA: any[] = [];
export const DEFAULT_METRICS: AnalyticsMetric[] = [];
export const DEFAULT_FILTERS: AnalyticsFilter[] = [];
export const DEFAULT_COLORS = [
	'#3b82f6',
	'#10b981',
	'#f59e0b',
	'#ef4444',
	'#8b5cf6',
];
export const DEFAULT_PLUGINS: any[] = [];

// Type exports
export type AnalyticsKind = AnalyticsConfiguration['kind'];
export type AnalyticsVariant =
	AnalyticsConfiguration['variant'];
export type AnalyticsType = AnalyticsConfiguration['type'];
export type AnalyticsLayout =
	AnalyticsConfiguration['layout'];
export type AnalyticsTimeRange =
	AnalyticsConfiguration['timeRange'];

// Data interfaces
export interface AnalyticsDataPoint {
	timestamp: number;
	value: number;
	label?: string;
	category?: string;
	metadata?: Record<string, any>;
}

export interface AnalyticsMetric {
	id: string;
	name: string;
	value: number;
	previousValue?: number;
	change?: number;
	changePercent?: number;
	trend?: 'up' | 'down' | 'stable';
	format?:
		| 'number'
		| 'currency'
		| 'percentage'
		| 'duration';
	unit?: string;
}

export interface AnalyticsFilter {
	field: string;
	operator:
		| 'equals'
		| 'contains'
		| 'greater'
		| 'less'
		| 'between'
		| 'in';
	value: any;
	label?: string;
}

export interface AnalyticsQuery {
	metrics: string[];
	dimensions?: string[];
	filters?: AnalyticsFilter[];
	timeRange: {
		start: Date;
		end: Date;
	};
	granularity?:
		| 'minute'
		| 'hour'
		| 'day'
		| 'week'
		| 'month';
	limit?: number;
	sort?: {
		field: string;
		direction: 'asc' | 'desc';
	};
}

export interface AnalyticsEventTrackingConfig {
	trackPageViews?: boolean;
	trackClicks?: boolean;
	trackScrolling?: boolean;
	trackFormSubmissions?: boolean;
	trackErrors?: boolean;
	trackPerformance?: boolean;
	customEvents?: string[];
	sampling?: number; // 0-1
}
