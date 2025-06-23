import type { Meta, StoryObj } from '@storybook/react';
import { Analytics } from '../../components/Analytics';

const meta: Meta<typeof Analytics> = {
	title: 'Analytics/Analytics',
	component: Analytics,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Unified analytics system that can create any analytics type through configuration. Supports dashboards, real-time metrics, reports, performance monitoring, and data visualization.',
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

// Sample data for stories
const sampleMetrics = [
	{
		id: '1',
		name: 'Total Users',
		value: 1234,
		change: 12.5,
		trend: 'up' as const,
	},
];

const sampleData = [
	{ date: '2024-01-01', value: 100 },
	{ date: '2024-01-02', value: 150 },
	{ date: '2024-01-03', value: 120 },
	{ date: '2024-01-04', value: 180 },
	{ date: '2024-01-05', value: 200 },
];

export const Default: Story = {
	args: {
		kind: 'dashboard',
		title: 'Analytics Dashboard',
		metrics: sampleMetrics,
		data: sampleData,
	},
};

export const Dashboard: Story = {
	args: {
		kind: 'dashboard',
		title: 'Main Dashboard',
		metrics: sampleMetrics,
		data: sampleData,
		variant: 'dashboard',
		size: 'lg',
	},
};

export const Realtime: Story = {
	args: {
		kind: 'realtime',
		title: 'Real-time Metrics',
		metrics: [
			{
				id: '1',
				name: 'Active Users',
				value: 42,
				trend: 'up',
			},
		],
		data: sampleData,
		variant: 'realtime',
		size: 'md',
	},
};

export const Reports: Story = {
	args: {
		kind: 'report',
		title: 'Monthly Reports',
		data: sampleData,
		timeRange: 'month',
		variant: 'reports',
		size: 'lg',
	},
};

export const Metrics: Story = {
	args: {
		kind: 'metric',
		title: 'Key Metrics',
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
};

export const Performance: Story = {
	args: {
		kind: 'dashboard',
		title: 'Performance Metrics',
		metrics: [
			{
				id: '1',
				name: 'Performance Score',
				value: 85,
				trend: 'up',
			},
		],
		variant: 'performance',
		size: 'md',
	},
};

export const Loading: Story = {
	args: {
		kind: 'dashboard',
		title: 'Loading Dashboard',
		loading: true,
		variant: 'dashboard',
		size: 'md',
	},
};

export const Error: Story = {
	args: {
		kind: 'dashboard',
		title: 'Error Dashboard',
		error:
			'Failed to load analytics data. Please try again.',
		variant: 'dashboard',
		size: 'md',
	},
};

export const Small: Story = {
	args: {
		kind: 'metric',
		title: 'Small Metrics',
		metrics: sampleMetrics,
		variant: 'metrics',
		size: 'sm',
	},
};

export const Large: Story = {
	args: {
		kind: 'dashboard',
		title: 'Large Dashboard',
		metrics: sampleMetrics,
		data: sampleData,
		variant: 'dashboard',
		size: 'lg',
	},
};

export const Minimal: Story = {
	args: {
		kind: 'metric',
		title: 'Minimal View',
		metrics: sampleMetrics,
		variant: 'metrics',
		size: 'md',
	},
};

export const Detailed: Story = {
	args: {
		kind: 'dashboard',
		title: 'Detailed Analytics',
		metrics: sampleMetrics,
		data: sampleData,
		variant: 'dashboard',
		size: 'lg',
		timeRange: 'week',
	},
};

// Interactive stories
export const Interactive: Story = {
	args: {
		kind: 'dashboard',
		title: 'Interactive Dashboard',
		metrics: sampleMetrics,
		data: sampleData,
		variant: 'dashboard',
		size: 'lg',
	},
	play: async ({ canvasElement }) => {
		// Add interaction testing if needed
	},
};

// Playground story for testing all combinations
export const Playground: Story = {
	args: {
		kind: 'dashboard',
		title: 'Analytics Playground',
		metrics: sampleMetrics,
		data: sampleData,
		variant: 'dashboard',
		size: 'md',
		timeRange: 'day',
	},
	argTypes: {
		metrics: {
			control: 'object',
			description: 'Metrics data array',
		},
		data: {
			control: 'object',
			description: 'Chart data array',
		},
	},
};
