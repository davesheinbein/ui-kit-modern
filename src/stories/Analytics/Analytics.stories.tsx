import type { Meta, StoryObj } from '@storybook/react';
import { Analytics } from '../../components/Analytics';
import { commonDecorators } from '../config/decorators';
import {
	sampleChartData,
	pieChartData,
	leaderboardMock,
	mockGameStats,
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
					'Comprehensive analytics system supporting dashboards, charts, metrics, and more. All chart rendering is delegated to the Graph component. Interactive legend supported for multi-series and pie/donut charts.',
			},
		},
	},
};
export default meta;
type Story = StoryObj<typeof Analytics>;

export const DashboardWithLineChart: Story = {
	args: {
		kind: 'dashboard',
		title: 'Dashboard – With Line Chart',
		metrics: [
			{
				id: '1',
				name: 'Users',
				value: 1200,
				change: 2.5,
				format: 'number',
			},
			{
				id: '2',
				name: 'Sessions',
				value: 3400,
				change: -1.2,
				format: 'number',
			},
		],
		data: sampleChartData,
		chartType: 'line',
		showLegend: true,
		interactive: true,
		dataKey: 'score',
		labelKey: 'name',
	},
	parameters: {
		docs: {
			description: {
				story: 'Dashboard with metrics and a line chart.',
			},
		},
	},
};

export const DashboardWithBarChart: Story = {
	args: {
		kind: 'dashboard',
		title: 'Dashboard – With Bar Chart',
		metrics: [
			{
				id: '1',
				name: 'Wins',
				value: 89,
				change: 3.1,
				format: 'number',
			},
			{
				id: '2',
				name: 'Losses',
				value: 38,
				change: -2.2,
				format: 'number',
			},
		],
		data: leaderboardMock.map((entry) => ({
			match: entry.name,
			score: entry.score,
		})),
		chartType: 'bar',
		showLegend: true,
		interactive: true,
		dataKey: 'score',
		labelKey: 'match',
	},
	parameters: {
		docs: {
			description: {
				story: 'Dashboard with metrics and a bar chart.',
			},
		},
	},
};

export const DashboardWithPieChart: Story = {
	args: {
		kind: 'dashboard',
		title: 'Dashboard – With Pie Chart',
		metrics: [
			{
				id: '1',
				name: 'Perfect Games',
				value: 23,
				change: 1.5,
				format: 'number',
			},
			{
				id: '2',
				name: 'Speed Bonus',
				value: 20,
				change: 0.8,
				format: 'number',
			},
		],
		data: pieChartData,
		chartType: 'pie',
		showLegend: true,
		interactive: true,
		dataKey: 'score',
		labelKey: 'name',
	},
	parameters: {
		docs: {
			description: {
				story: 'Dashboard with metrics and a pie chart.',
			},
		},
	},
};

export const DashboardWithDonutChart: Story = {
	args: {
		kind: 'dashboard',
		title: 'Dashboard – With Donut Chart',
		metrics: [
			{
				id: '1',
				name: 'Connections',
				value: 40,
				change: 2.0,
				format: 'number',
			},
			{
				id: '2',
				name: 'Red Herrings',
				value: 30,
				change: -1.1,
				format: 'number',
			},
		],
		data: pieChartData,
		chartType: 'doughnut', // changed from 'donut' to 'doughnut'
		showLegend: true,
		interactive: true,
		dataKey: 'score',
		labelKey: 'name',
	},
	parameters: {
		docs: {
			description: {
				story: 'Dashboard with metrics and a donut chart.',
			},
		},
	},
};

export const MetricSingle: Story = {
	args: {
		kind: 'metric',
		title: 'Single Metric',
		metrics: [
			{
				id: '1',
				name: 'Total Games',
				value: mockGameStats.totalGames,
				format: 'number',
			},
		],
	},
	parameters: {
		docs: {
			description: { story: 'Single metric (basic).' },
		},
	},
};

export const MetricMultiple: Story = {
	args: {
		kind: 'metric',
		title: 'Multiple Metrics',
		metrics: [
			{
				id: '1',
				name: 'Wins',
				value: mockGameStats.wins,
				change: 3.1,
				format: 'number',
			},
			{
				id: '2',
				name: 'Losses',
				value: mockGameStats.losses,
				change: -2.2,
				format: 'number',
			},
			{
				id: '3',
				name: 'Win Rate',
				value: mockGameStats.winRate * 100,
				change: 1.2,
				format: 'percentage',
			},
		],
	},
	parameters: {
		docs: {
			description: {
				story: 'Multiple metrics for comparison.',
			},
		},
	},
};

export const ChartLine: Story = {
	args: {
		kind: 'chart',
		title: 'Line Chart',
		data: sampleChartData,
		chartType: 'line',
		showLegend: true,
		interactive: true,
		dataKey: 'score',
		labelKey: 'name',
	},
	parameters: {
		docs: {
			description: { story: 'Line chart with legend.' },
		},
	},
};

export const ChartBar: Story = {
	args: {
		kind: 'chart',
		title: 'Bar Chart',
		data: leaderboardMock.map((entry) => ({
			match: entry.name,
			score: entry.score,
		})),
		chartType: 'bar',
		showLegend: true,
		interactive: true,
		dataKey: 'score',
		labelKey: 'match',
	},
	parameters: {
		docs: {
			description: { story: 'Bar chart with legend.' },
		},
	},
};

export const ChartPie: Story = {
	args: {
		kind: 'chart',
		title: 'Pie Chart',
		data: pieChartData,
		chartType: 'pie',
		showLegend: true,
		interactive: true,
		dataKey: 'score',
		labelKey: 'name',
	},
	parameters: {
		docs: {
			description: {
				story: 'Pie chart with interactive legend.',
			},
		},
	},
};

export const ChartDonut: Story = {
	args: {
		kind: 'chart',
		title: 'Donut Chart',
		data: pieChartData,
		chartType: 'doughnut',
		showLegend: true,
		interactive: true,
		dataKey: 'score',
		labelKey: 'name',
	},
	parameters: {
		docs: {
			description: {
				story: 'Donut chart with interactive legend.',
			},
		},
	},
};
