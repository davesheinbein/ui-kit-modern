import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedGraph,
	GraphFactory,
	G,
	GraphPresets,
	QuickGraphs,
	GraphKind,
	UnifiedGraphProps,
} from '../../components/Graphs';
import Graphs from '../../components/Graphs'; // Legacy component
import {
	sampleChartData,
	pieChartData,
	timeSeriesData,
	multiSeriesData,
	radarChartData,
} from '../mocks';

const meta: Meta<typeof UnifiedGraph> = {
	title: 'Graphs/Graphs',
	component: UnifiedGraph,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
## Graph DRY System

The new Graph system provides a unified, configuration-driven approach to creating charts with maximum reusability and minimal code duplication.

### Key Features:
- **Unified Component**: One component handles all chart types
- **Configuration-Driven**: Pre-configured chart types for common use cases  
- **Factory Pattern**: Ultra-convenient creation methods
- **Type Safety**: Full TypeScript support with intelligent autocomplete
- **Responsive**: Built-in responsive behavior and mobile optimization
- **Accessible**: ARIA labels and screen reader support
- **Extensible**: Easy to add new chart types and configurations

### Usage Examples:

\`\`\`tsx
// Basic usage
<UnifiedGraph kind="bar" data={data} />

// Factory method
{G.bar(data)}

// Quick presets
{GraphPresets.TREND(data)}

// Ultra-short
{QuickGraphs.trend(data)}
\`\`\`
				`,
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'bar',
				'bar-stacked',
				'bar-grouped',
				'bar-horizontal',
				'bar-horizontal-stacked',
				'line',
				'line-smooth',
				'line-multi',
				'line-stepped',
				'area',
				'area-stacked',
				'area-smooth',
				'pie',
				'doughnut',
				'pie-with-labels',
				'radar',
				'scatter',
				'composed-bar-line',
				'analytics-trend',
				'analytics-comparison',
				'analytics-distribution',
				'analytics-performance',
				'dashboard-summary',
				'dashboard-kpi',
				'dashboard-trend',
				'dashboard-mini',
				'stats-score-progression',
				'stats-performance-radar',
				'stats-match-history',
				'stats-category-breakdown',
				'stats-time-series',
			],
			description: 'The type of chart to render',
		},
		data: {
			control: 'object',
			description: 'Chart data array',
		},
		dataKey: {
			control: 'text',
			description: 'Key for data values',
		},
		labelKey: {
			control: 'text',
			description: 'Key for data labels',
		},
		title: {
			control: 'text',
			description: 'Chart title',
		},
		colorScheme: {
			control: 'select',
			options: [
				'default',
				'primary',
				'secondary',
				'rainbow',
				'monochrome',
				'custom',
			],
			description: 'Pre-defined color scheme',
		},
		height: {
			control: {
				type: 'range',
				min: 80,
				max: 400,
				step: 20,
			},
			description: 'Chart height in pixels',
		},
		width: {
			control: {
				type: 'range',
				min: 200,
				max: 800,
				step: 20,
			},
			description: 'Chart width in pixels',
		},
		showGrid: {
			control: 'boolean',
			description: 'Show/hide grid lines',
		},
		showLegend: {
			control: 'boolean',
			description: 'Show/hide legend',
		},
		showTooltip: {
			control: 'boolean',
			description: 'Show/hide tooltips',
		},
		showLabels: {
			control: 'boolean',
			description: 'Show/hide data labels',
		},
		animationEnabled: {
			control: 'boolean',
			description: 'Enable/disable animations',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedGraph>;

// === BASIC CHARTS ===

export const BarChart: Story = {
	args: {
		kind: 'bar',
		data: sampleChartData,
		dataKey: 'score',
		labelKey: 'match',
		title: 'Basic Bar Chart',
		height: 160,
	},
};

export const HorizontalBarChart: Story = {
	args: {
		kind: 'bar-horizontal',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Horizontal Bar Chart',
		height: 180,
	},
};

export const StackedBarChart: Story = {
	args: {
		kind: 'bar-stacked',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Stacked Bar Chart',
		height: 180,
		showLegend: true,
	},
};

export const LineChart: Story = {
	args: {
		kind: 'line',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Line Chart',
		height: 160,
	},
};

export const SmoothLineChart: Story = {
	args: {
		kind: 'line-smooth',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Smooth Line Chart',
		height: 160,
	},
};

export const AreaChart: Story = {
	args: {
		kind: 'area',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Area Chart',
		height: 160,
	},
};

export const PieChart: Story = {
	args: {
		kind: 'pie',
		data: pieChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Pie Chart',
		height: 200,
		showLegend: true,
	},
};

export const DoughnutChart: Story = {
	args: {
		kind: 'doughnut',
		data: pieChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Doughnut Chart',
		height: 200,
		showLegend: true,
	},
};

export const RadarChart: Story = {
	args: {
		kind: 'radar',
		data: radarChartData,
		dataKey: 'score',
		labelKey: 'category',
		title: 'Radar Chart',
		height: 200,
		showLegend: true,
	},
};

export const ComposedChart: Story = {
	args: {
		kind: 'composed-bar-line',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Composed Chart (Bar + Line)',
		height: 200,
		showLegend: true,
	},
};

// === COLOR SCHEMES ===

export const PrimaryColors: Story = {
	args: {
		kind: 'bar',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Primary Color Scheme',
		colorScheme: 'primary',
		height: 160,
	},
};

export const RainbowColors: Story = {
	args: {
		kind: 'pie',
		data: pieChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Rainbow Color Scheme',
		colorScheme: 'rainbow',
		height: 200,
		showLegend: true,
	},
};

export const MonochromeColors: Story = {
	args: {
		kind: 'area',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Monochrome Color Scheme',
		colorScheme: 'monochrome',
		height: 160,
	},
};

// === ANALYTICS CHARTS ===

export const AnalyticsTrend: Story = {
	args: {
		kind: 'analytics-trend',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Analytics Trend Chart',
		height: 120,
	},
};

export const AnalyticsComparison: Story = {
	args: {
		kind: 'analytics-comparison',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Analytics Comparison Chart',
		height: 100,
	},
};

export const AnalyticsDistribution: Story = {
	args: {
		kind: 'analytics-distribution',
		data: pieChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Analytics Distribution Chart',
		height: 120,
	},
};

export const AnalyticsPerformance: Story = {
	args: {
		kind: 'analytics-performance',
		data: radarChartData,
		dataKey: 'score',
		labelKey: 'category',
		title: 'Analytics Performance Chart',
		height: 140,
	},
};

// === DASHBOARD CHARTS ===

export const DashboardSummary: Story = {
	args: {
		kind: 'dashboard-summary',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Dashboard Summary Widget',
		height: 80,
	},
};

export const DashboardKPI: Story = {
	args: {
		kind: 'dashboard-kpi',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Dashboard KPI Widget',
		height: 60,
	},
};

export const DashboardTrend: Story = {
	args: {
		kind: 'dashboard-trend',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Dashboard Trend Widget',
		height: 100,
	},
};

export const DashboardMini: Story = {
	args: {
		kind: 'dashboard-mini',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Dashboard Mini Widget',
		height: 40,
	},
};

// === STATS CHARTS ===

export const StatsScoreProgression: Story = {
	args: {
		kind: 'stats-score-progression',
		data: sampleChartData.map((item, index) => ({
			match: `Game ${index + 1}`,
			score: item.score,
		})),
		dataKey: 'score',
		labelKey: 'match',
		title: 'Score Progression',
		height: 160,
	},
};

export const StatsPerformanceRadar: Story = {
	args: {
		kind: 'stats-performance-radar',
		data: radarChartData,
		dataKey: 'score',
		labelKey: 'category',
		title: 'Performance Radar',
		height: 200,
		showLegend: true,
	},
};

export const StatsMatchHistory: Story = {
	args: {
		kind: 'stats-match-history',
		data: sampleChartData.map((item, index) => ({
			match: `Match ${index + 1}`,
			score: item.score,
		})),
		dataKey: 'score',
		labelKey: 'match',
		title: 'Match History',
		height: 140,
	},
};

export const StatsCategoryBreakdown: Story = {
	args: {
		kind: 'stats-category-breakdown',
		data: [
			{ category: 'Connections', score: 85 },
			{ category: 'Red Herrings', score: 65 },
			{ category: 'Speed', score: 92 },
			{ category: 'Accuracy', score: 78 },
		],
		dataKey: 'score',
		labelKey: 'category',
		title: 'Category Performance',
		height: 180,
		showLegend: true,
	},
};

// === FACTORY EXAMPLES ===

export const FactoryExample: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(300px, 1fr))',
				gap: '20px',
			}}
		>
			{G.bar(sampleChartData, {
				title: 'Factory Bar Chart',
				height: 140,
			})}
			{G.pie(pieChartData, {
				title: 'Factory Pie Chart',
				height: 160,
			})}
			{G.line(sampleChartData, {
				title: 'Factory Line Chart',
				height: 140,
			})}
			{G.radar(radarChartData, {
				title: 'Factory Radar Chart',
				height: 160,
			})}
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Examples of using the GraphFactory (G) for quick chart creation.',
			},
		},
	},
};

export const PresetsExample: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(300px, 1fr))',
				gap: '20px',
			}}
		>
			{GraphPresets.TREND(sampleChartData)}
			{GraphPresets.COMPARISON(sampleChartData)}
			{GraphPresets.DISTRIBUTION(pieChartData)}
			{GraphPresets.PERFORMANCE(radarChartData)}
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Examples of using GraphPresets for common chart patterns.',
			},
		},
	},
};

export const QuickGraphsExample: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(300px, 1fr))',
				gap: '20px',
			}}
		>
			{QuickGraphs.trend(sampleChartData)}
			{QuickGraphs.comparison(sampleChartData)}
			{QuickGraphs.distribution(pieChartData)}
			{QuickGraphs.kpi(sampleChartData)}
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Examples of using QuickGraphs for ultra-fast chart creation.',
			},
		},
	},
};

// === RESPONSIVE EXAMPLES ===

export const ResponsiveCharts: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
			}}
		>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(200px, 1fr))',
					gap: '10px',
				}}
			>
				{GraphPresets.MOBILE('bar', sampleChartData)}
				{GraphPresets.MOBILE('line', sampleChartData)}
				{GraphPresets.MOBILE('pie', pieChartData)}
			</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(150px, 1fr))',
					gap: '10px',
				}}
			>
				{GraphPresets.COMPACT(
					'dashboard-kpi',
					sampleChartData
				)}
				{GraphPresets.COMPACT(
					'dashboard-mini',
					sampleChartData
				)}
				{GraphPresets.COMPACT(
					'analytics-trend',
					sampleChartData
				)}
			</div>
			<div>
				{GraphPresets.FULL(
					'composed-bar-line',
					sampleChartData
				)}
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Examples of responsive chart patterns for different screen sizes.',
			},
		},
	},
};

// === CONFIGURATION EXAMPLES ===

export const CustomConfiguration: Story = {
	args: {
		kind: 'bar',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Custom Configuration Example',
		height: 180,
		configuration: {
			colors: [
				'#ff6b6b',
				'#4ecdc4',
				'#45b7d1',
				'#f9ca24',
				'#f0932b',
			],
			barRadius: [8, 8, 0, 0],
			showGrid: true,
			animation: { enabled: true, duration: 1000 },
			xAxis: { fontSize: 14, label: 'Months' },
			yAxis: { fontSize: 14, label: 'Values' },
		},
		showLegend: true,
	},
};

export const InteractiveExample: Story = {
	args: {
		kind: 'bar',
		data: sampleChartData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Interactive Chart Example',
		height: 160,
		onClick: (data: any, index: number) => {
			alert(`Clicked on ${data.name}: ${data.value}`);
		},
		onHover: (data: any, index: number) => {
			console.log('Hovered:', data);
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Example with click and hover event handlers.',
			},
		},
	},
};
