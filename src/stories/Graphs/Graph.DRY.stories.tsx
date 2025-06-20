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

const meta: Meta<typeof UnifiedGraph> = {
	title: 'Graphs/Graph (DRY System)',
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
		subtitle: {
			control: 'text',
			description: 'Chart subtitle',
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
		responsive: {
			control: 'boolean',
			description: 'Enable responsive behavior',
		},
		smooth: {
			control: 'boolean',
			description: 'Smooth curves (for line/area charts)',
		},
		stacked: {
			control: 'boolean',
			description: 'Stack data series',
		},
		fillArea: {
			control: 'boolean',
			description: 'Fill area under line',
		},
		showDots: {
			control: 'boolean',
			description: 'Show dots on line charts',
		},
		strokeWidth: {
			control: { type: 'range', min: 1, max: 5, step: 1 },
			description: 'Line stroke width',
		},
		opacity: {
			control: {
				type: 'range',
				min: 0.1,
				max: 1,
				step: 0.1,
			},
			description: 'Chart opacity',
		},
		legendPosition: {
			control: 'select',
			options: ['top', 'bottom', 'left', 'right'],
			description: 'Legend position',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedGraph>;

// Sample data for different chart types
const sampleData = [
	{ name: 'Jan', value: 400, sales: 240, revenue: 2400 },
	{ name: 'Feb', value: 300, sales: 139, revenue: 2210 },
	{ name: 'Mar', value: 200, sales: 980, revenue: 2290 },
	{ name: 'Apr', value: 278, sales: 390, revenue: 2000 },
	{ name: 'May', value: 189, sales: 480, revenue: 2181 },
	{ name: 'Jun', value: 239, sales: 380, revenue: 2500 },
];

const pieData = [
	{ name: 'Desktop', value: 400 },
	{ name: 'Mobile', value: 300 },
	{ name: 'Tablet', value: 300 },
	{ name: 'Other', value: 200 },
];

const radarData = [
	{ category: 'Speed', score: 120 },
	{ category: 'Accuracy', score: 98 },
	{ category: 'Strategy', score: 86 },
	{ category: 'Knowledge', score: 99 },
	{ category: 'Focus', score: 85 },
	{ category: 'Consistency', score: 65 },
];

// === BASIC CHARTS ===

export const BarChart: Story = {
	args: {
		kind: 'bar',
		data: sampleData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Basic Bar Chart',
		height: 160,
	},
};

export const HorizontalBarChart: Story = {
	args: {
		kind: 'bar-horizontal',
		data: sampleData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Horizontal Bar Chart',
		height: 180,
	},
};

export const StackedBarChart: Story = {
	args: {
		kind: 'bar-stacked',
		data: sampleData,
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
		data: sampleData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Line Chart',
		height: 160,
	},
};

export const SmoothLineChart: Story = {
	args: {
		kind: 'line-smooth',
		data: sampleData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Smooth Line Chart',
		height: 160,
	},
};

export const AreaChart: Story = {
	args: {
		kind: 'area',
		data: sampleData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Area Chart',
		height: 160,
	},
};

export const PieChart: Story = {
	args: {
		kind: 'pie',
		data: pieData,
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
		data: pieData,
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
		data: radarData,
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
		data: sampleData,
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
		data: sampleData,
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
		data: pieData,
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
		data: sampleData,
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
		data: sampleData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Analytics Trend Chart',
		height: 120,
	},
};

export const AnalyticsComparison: Story = {
	args: {
		kind: 'analytics-comparison',
		data: sampleData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Analytics Comparison Chart',
		height: 100,
	},
};

export const AnalyticsDistribution: Story = {
	args: {
		kind: 'analytics-distribution',
		data: pieData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Analytics Distribution Chart',
		height: 120,
	},
};

export const AnalyticsPerformance: Story = {
	args: {
		kind: 'analytics-performance',
		data: radarData,
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
		data: sampleData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Dashboard Summary Widget',
		height: 80,
	},
};

export const DashboardKPI: Story = {
	args: {
		kind: 'dashboard-kpi',
		data: sampleData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Dashboard KPI Widget',
		height: 60,
	},
};

export const DashboardTrend: Story = {
	args: {
		kind: 'dashboard-trend',
		data: sampleData,
		dataKey: 'value',
		labelKey: 'name',
		title: 'Dashboard Trend Widget',
		height: 100,
	},
};

export const DashboardMini: Story = {
	args: {
		kind: 'dashboard-mini',
		data: sampleData,
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
		data: sampleData.map((item, index) => ({
			match: `Game ${index + 1}`,
			score: item.value,
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
		data: radarData,
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
		data: sampleData.map((item, index) => ({
			match: `Match ${index + 1}`,
			score: item.value,
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
			{G.bar(sampleData, {
				title: 'Factory Bar Chart',
				height: 140,
			})}
			{G.pie(pieData, {
				title: 'Factory Pie Chart',
				height: 160,
			})}
			{G.line(sampleData, {
				title: 'Factory Line Chart',
				height: 140,
			})}
			{G.radar(radarData, {
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
			{GraphPresets.TREND(sampleData)}
			{GraphPresets.COMPARISON(sampleData)}
			{GraphPresets.DISTRIBUTION(pieData)}
			{GraphPresets.PERFORMANCE(radarData)}
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
			{QuickGraphs.trend(sampleData)}
			{QuickGraphs.comparison(sampleData)}
			{QuickGraphs.distribution(pieData)}
			{QuickGraphs.kpi(sampleData)}
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
				{GraphPresets.MOBILE('bar', sampleData)}
				{GraphPresets.MOBILE('line', sampleData)}
				{GraphPresets.MOBILE('pie', pieData)}
			</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(150px, 1fr))',
					gap: '10px',
				}}
			>
				{GraphPresets.COMPACT('dashboard-kpi', sampleData)}
				{GraphPresets.COMPACT('dashboard-mini', sampleData)}
				{GraphPresets.COMPACT(
					'analytics-trend',
					sampleData
				)}
			</div>
			<div>
				{GraphPresets.FULL('composed-bar-line', sampleData)}
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
		data: sampleData,
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
		data: sampleData,
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
