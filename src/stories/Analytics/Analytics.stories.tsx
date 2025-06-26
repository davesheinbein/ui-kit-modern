import type { Meta, StoryObj } from '@storybook/react';
import { Analytics } from '../../components/Analytics';
import { Chart } from '../../components/Chart';
import { Graph } from '../../components/Graphs';
import { commonDecorators } from '../config/decorators';
import {
	sampleChartData,
	pieChartData,
	timeSeriesData,
	multiSeriesData,
} from '../mocks/index';

const meta: Meta<typeof Analytics> = {
	title: 'Analytics/Analytics',
	component: Analytics,
	decorators: commonDecorators,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Analytics system that can create any analytics type through configuration. Supports dashboards, real-time metrics, reports, performance monitoring, and data visualization.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'dashboard',
				'chart',
				'metric',
				'heatmap',
				'funnel',
				'cohort',
				'report',
				'realtime',
			],
			description: 'Analytics kind/type to use',
		},
		title: {
			control: 'text',
			description: 'Analytics title',
		},
		variant: {
			control: 'select',
			options: [
				'dashboard',
				'realtime',
				'reports',
				'metrics',
				'performance',
			],
			description: 'Analytics variant/style',
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'Analytics size',
		},
		timeRange: {
			control: 'select',
			options: [
				'realtime',
				'hour',
				'day',
				'week',
				'month',
				'quarter',
				'year',
				'custom',
			],
			description: 'Time range for data',
		},
		loading: {
			control: 'boolean',
			description: 'Show loading state',
		},
		error: {
			control: 'text',
			description: 'Error message to display',
		},
		onRefresh: {
			action: 'refresh',
			description: 'Refresh data callback',
		},
		onExport: {
			action: 'export',
			description: 'Export data callback',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
	args: {
		kind: 'dashboard',
		title: 'Performance Dashboard',
		metrics: [
			{
				id: '1',
				name: 'Total Users',
				value: 1234,
				change: 12.5,
				trend: 'up',
			},
			{
				id: '2',
				name: 'Active Sessions',
				value: 321,
				change: -3.2,
				trend: 'down',
			},
			{
				id: '3',
				name: 'Conversion Rate',
				value: 0.18,
				change: 0.01,
				trend: 'up',
				format: 'percentage',
			},
		],
		data: sampleChartData,
		variant: 'dashboard',
		size: 'lg',
	},
	parameters: {
		docs: {
			description: {
				story:
					'A dashboard with multiple metrics and a chart.',
			},
		},
	},
};

export const ChartWithCustomRenderer: Story = {
	args: {
		kind: 'chart',
		title: 'Custom Bar Chart',
		data: multiSeriesData,
		showLegend: true,
		chartType: 'bar',
		variant: 'dashboard',
		size: 'md',
		customRenderer: () => (
			<Chart
				kind='legend-horizontal'
				chartId='analytics-bar-demo'
				dataSeries={[
					{
						id: 'wins',
						label: 'Wins',
						color: '#3b82f6',
						visible: true,
						data: multiSeriesData.map((d) => ({
							x: d.month,
							y: d.wins,
						})),
					},
					{
						id: 'losses',
						label: 'Losses',
						color: '#ef4444',
						visible: true,
						data: multiSeriesData.map((d) => ({
							x: d.month,
							y: d.losses,
						})),
					},
					{
						id: 'draws',
						label: 'Draws',
						color: '#f59e0b',
						visible: true,
						data: multiSeriesData.map((d) => ({
							x: d.month,
							y: d.draws,
						})),
					},
				]}
				variant='modern'
				showIcons
			/>
		),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Analytics with a custom Chart (legend-horizontal) as its content.',
			},
		},
	},
};

export const PieChartWithCustomRenderer: Story = {
	args: {
		kind: 'chart',
		title: 'Custom Pie Chart',
		data: pieChartData,
		showLegend: true,
		chartType: 'pie',
		variant: 'dashboard',
		size: 'md',
		customRenderer: () => (
			<Chart
				kind='legend-grid'
				chartId='analytics-pie-demo'
				dataSeries={pieChartData.map((d, i) => ({
					id: d.category,
					label: d.category,
					color: [
						'#3b82f6',
						'#10b981',
						'#f59e0b',
						'#ef4444',
					][i],
					visible: true,
					data: [{ x: d.category, y: d.score }],
				}))}
				variant='modern'
				showIcons
			/>
		),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Analytics with a custom Chart (legend-grid) as its content.',
			},
		},
	},
};

export const GraphWithCustomRenderer: Story = {
	args: {
		kind: 'report',
		title: 'Custom Graph Report',
		data: timeSeriesData,
		variant: 'reports',
		size: 'lg',
		customRenderer: () => (
			<Graph
				kind='line'
				data={timeSeriesData}
				dataKey='date'
				title='Time Series Line Graph'
			/>
		),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Analytics with a custom Graph (line) as its content.',
			},
		},
	},
};

// Keep a few core stories for reference
export const Metric: Story = {
	args: {
		kind: 'metric',
		title: 'Uptime',
		metrics: [
			{
				id: '1',
				name: 'Uptime',
				value: 98.5,
				change: 0.2,
				trend: 'up',
				format: 'percentage',
			},
		],
		variant: 'metrics',
		size: 'md',
	},
	parameters: {
		docs: {
			description: {
				story: 'A single key metric with trend.',
			},
		},
	},
};

export const Loading: Story = {
	args: {
		kind: 'dashboard',
		title: 'Loading State',
		loading: true,
		variant: 'dashboard',
		size: 'md',
	},
	parameters: {
		docs: {
			description: { story: 'Shows the loading state.' },
		},
	},
};

export const Error: Story = {
	args: {
		kind: 'dashboard',
		title: 'Error State',
		error:
			'Failed to load analytics data. Please try again.',
		variant: 'dashboard',
		size: 'md',
	},
	parameters: {
		docs: {
			description: { story: 'Shows the error state.' },
		},
	},
};
