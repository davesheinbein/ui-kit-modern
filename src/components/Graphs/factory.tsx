import React from 'react';
import { Wrapper } from '../Wrappers';
import Graph, { GraphProps } from './Graphs';
import {
	ExtendedGraphKind,
	GRAPH_CONFIGURATIONS,
	GRAPH_GROUPS,
	QUICK_GRAPHS,
	createGraphConfig,
} from './configurations';

/**
 * Graph Factory - Creates graphs with minimal configuration
 * This is the most DRY way to create graphs in the entire system
 *
 * @example
 * // Ultra-simple usage
 * <GraphFactory kind="bar" data={data} />
 * <GraphFactory kind="analytics-trend" data={data} />
 * <GraphFactory kind="dashboard-kpi" data={data} />
 *
 * // With configuration override
 * <GraphFactory
 *   kind="pie"
 *   data={data}
 *   configuration={{ colors: ['#ff0000', '#00ff00'] }}
 * />
 */
export class GraphFactory {
	/**
	 * Create any graph with just kind and data
	 */
	static create(
		kind: ExtendedGraphKind,
		data: any[],
		overrides: Partial<GraphProps> = {}
	): React.ReactElement {
		return <Graph kind={kind} data={data} {...overrides} />;
	}

	/**
	 * Create a graph with configuration override
	 */
	static withConfig(
		kind: ExtendedGraphKind,
		data: any[],
		configuration: any = {},
		overrides: Partial<GraphProps> = {}
	): React.ReactElement {
		return (
			<Graph
				kind={kind}
				data={data}
				configuration={configuration}
				{...overrides}
			/>
		);
	}

	/**
	 * Create multiple graphs at once
	 */
	static createMultiple(
		configs: Array<{
			kind: ExtendedGraphKind;
			data: any[];
			props?: Partial<GraphProps>;
		}>
	): React.ReactElement[] {
		return configs.map((config, index) => (
			<Graph
				key={index}
				kind={config.kind}
				data={config.data}
				{...config.props}
			/>
		));
	}

	// === CHART TYPE SHORTCUTS ===

	/**
	 * Bar chart shortcuts
	 */
	static bar(data: any[], props: Partial<GraphProps> = {}) {
		return GraphFactory.create('bar', data, props);
	}

	static horizontalBar(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'bar-horizontal',
			data,
			props
		);
	}

	static stackedBar(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create('bar-stacked', data, props);
	}

	/**
	 * Line chart shortcuts
	 */
	static line(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create('line', data, props);
	}

	static smoothLine(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create('line-smooth', data, props);
	}

	static multiLine(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create('line-multi', data, props);
	}

	/**
	 * Area chart shortcuts
	 */
	static area(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create('area', data, props);
	}

	static stackedArea(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create('area-stacked', data, props);
	}

	/**
	 * Pie chart shortcuts
	 */
	static pie(data: any[], props: Partial<GraphProps> = {}) {
		return GraphFactory.create('pie', data, props);
	}

	static doughnut(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create('doughnut', data, props);
	}

	/**
	 * Specialized chart shortcuts
	 */
	static radar(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create('radar', data, props);
	}

	static scatter(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create('scatter', data, props);
	}

	static composed(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'composed-bar-line',
			data,
			props
		);
	}

	// === ANALYTICS SHORTCUTS ===

	/**
	 * Analytics chart shortcuts
	 */
	static analyticsTrend(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'analytics-trend',
			data,
			props
		);
	}

	static analyticsComparison(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'analytics-comparison',
			data,
			props
		);
	}

	static analyticsDistribution(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'analytics-distribution',
			data,
			props
		);
	}

	static analyticsPerformance(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'analytics-performance',
			data,
			props
		);
	}

	// === DASHBOARD SHORTCUTS ===

	/**
	 * Dashboard chart shortcuts
	 */
	static dashboardSummary(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'dashboard-summary',
			data,
			props
		);
	}

	static dashboardKpi(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'dashboard-kpi',
			data,
			props
		);
	}

	static dashboardTrend(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'dashboard-trend',
			data,
			props
		);
	}

	static dashboardMini(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'dashboard-mini',
			data,
			props
		);
	}

	// === STATS SHORTCUTS ===

	/**
	 * Statistics chart shortcuts
	 */
	static statsScoreProgression(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'stats-score-progression',
			data,
			props
		);
	}

	static statsPerformanceRadar(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'stats-performance-radar',
			data,
			props
		);
	}

	static statsMatchHistory(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'stats-match-history',
			data,
			props
		);
	}

	static statsCategoryBreakdown(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'stats-category-breakdown',
			data,
			props
		);
	}

	static statsTimeSeries(
		data: any[],
		props: Partial<GraphProps> = {}
	) {
		return GraphFactory.create(
			'stats-time-series',
			data,
			props
		);
	}
}

/**
 * Graph presets with common patterns
 * These provide even more convenient shortcuts for common use cases
 */
export const GraphPresets = {
	// === COMMON ANALYTICS PATTERNS ===

	/**
	 * Quick trend analysis chart
	 */
	TREND: (data: any[], xKey = 'date', yKey = 'value') =>
		GraphFactory.analyticsTrend(data, {
			labelKey: xKey,
			valueKey: yKey,
		}),

	/**
	 * Quick comparison chart
	 */
	COMPARISON: (
		data: any[],
		xKey = 'category',
		yKey = 'value'
	) =>
		GraphFactory.analyticsComparison(data, {
			labelKey: xKey,
			valueKey: yKey,
		}),

	/**
	 * Quick distribution chart
	 */
	DISTRIBUTION: (
		data: any[],
		nameKey = 'name',
		valueKey = 'value'
	) =>
		GraphFactory.analyticsDistribution(data, {
			labelKey: nameKey,
			valueKey,
		}),

	/**
	 * Quick performance overview
	 */
	PERFORMANCE: (
		data: any[],
		categoryKey = 'category',
		valueKey = 'score'
	) =>
		GraphFactory.analyticsPerformance(data, {
			labelKey: categoryKey,
			valueKey,
		}),

	// === DASHBOARD WIDGETS ===

	/**
	 * Minimal KPI widget
	 */
	KPI: (data: any[], valueKey = 'value') =>
		GraphFactory.dashboardKpi(data, { valueKey }),

	/**
	 * Mini trend widget
	 */
	MINI_TREND: (data: any[], valueKey = 'value') =>
		GraphFactory.dashboardMini(data, { valueKey }),

	/**
	 * Summary widget
	 */
	SUMMARY: (data: any[], valueKey = 'value') =>
		GraphFactory.dashboardSummary(data, { valueKey }),

	// === GAME/STATS PATTERNS ===

	/**
	 * Score progression over time
	 */
	SCORE_HISTORY: (
		data: any[],
		matchKey = 'match',
		scoreKey = 'score'
	) =>
		GraphFactory.statsScoreProgression(data, {
			labelKey: matchKey,
			valueKey: scoreKey,
		}),

	/**
	 * Performance breakdown
	 */
	PERFORMANCE_BREAKDOWN: (
		data: any[],
		categoryKey = 'category',
		scoreKey = 'score'
	) =>
		GraphFactory.statsPerformanceRadar(data, {
			labelKey: categoryKey,
			valueKey: scoreKey,
		}),

	/**
	 * Recent match history
	 */
	MATCH_HISTORY: (
		data: any[],
		matchKey = 'match',
		scoreKey = 'score'
	) =>
		GraphFactory.statsMatchHistory(data, {
			labelKey: matchKey,
			valueKey: scoreKey,
		}),

	/**
	 * Category performance breakdown
	 */
	CATEGORY_STATS: (
		data: any[],
		categoryKey = 'category',
		scoreKey = 'score'
	) =>
		GraphFactory.statsCategoryBreakdown(data, {
			labelKey: categoryKey,
			valueKey: scoreKey,
		}),

	// === RESPONSIVE PATTERNS ===

	/**
	 * Mobile-friendly chart
	 */
	MOBILE: (kind: ExtendedGraphKind, data: any[]) =>
		GraphFactory.create(kind, data, {
			height: 120,
			className: 'mobile-chart',
		}),

	/**
	 * Compact chart for small spaces
	 */
	COMPACT: (kind: ExtendedGraphKind, data: any[]) =>
		GraphFactory.create(kind, data, {
			height: 80,
			showAxes: false,
			showGrid: false,
		}),

	/**
	 * Full-featured chart for large displays
	 */
	FULL: (kind: ExtendedGraphKind, data: any[]) =>
		GraphFactory.create(kind, data, {
			height: 300,
			showLegend: true,
			showLabels: true,
		}),
};

/**
 * Ultra-convenient graph creation functions
 */
export const QuickGraphs = {
	// Direct data visualization
	trend: (data: any[]) => GraphPresets.TREND(data),
	comparison: (data: any[]) =>
		GraphPresets.COMPARISON(data),
	distribution: (data: any[]) =>
		GraphPresets.DISTRIBUTION(data),
	performance: (data: any[]) =>
		GraphPresets.PERFORMANCE(data),

	// Dashboard widgets
	kpi: (data: any[]) => GraphPresets.KPI(data),
	miniTrend: (data: any[]) => GraphPresets.MINI_TREND(data),
	summary: (data: any[]) => GraphPresets.SUMMARY(data),

	// Stats visualizations
	scoreHistory: (data: any[]) =>
		GraphPresets.SCORE_HISTORY(data),
	performanceBreakdown: (data: any[]) =>
		GraphPresets.PERFORMANCE_BREAKDOWN(data),
	matchHistory: (data: any[]) =>
		GraphPresets.MATCH_HISTORY(data),
	categoryStats: (data: any[]) =>
		GraphPresets.CATEGORY_STATS(data),
};

export default GraphFactory;
