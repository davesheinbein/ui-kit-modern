import type { Meta, StoryObj } from '@storybook/react';
import { AnalyticsFactory } from '../../components/Analytics';

const meta: Meta<typeof AnalyticsFactory> = {
	title: 'Analytics/Analytics',
	component: AnalyticsFactory,
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
				'realtime',
				'reports',
				'metrics',
				'performance',
			],
			description: 'Analytics kind/configuration to use',
		},
		title: {
			control: 'text',
			description: 'Analytics title',
		},
		variant: {
			control: 'select',
			options: [
				'default',
				'minimal',
				'detailed',
				'compact',
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
			options: ['1h', '24h', '7d', '30d', '90d', '1y'],
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
const sampleMetric = {
	value: 1234,
	label: 'Total Users',
	change: 12.5,
	trend: 'up' as const,
};

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
		metric: sampleMetric,
		data: sampleData,
	},
};

export const Dashboard: Story = {
	args: {
		kind: 'dashboard',
		title: 'Main Dashboard',
		metric: sampleMetric,
		data: sampleData,
		variant: 'default',
		size: 'lg',
	},
};

export const Realtime: Story = {
	args: {
		kind: 'realtime',
		title: 'Real-time Metrics',
		metric: {
			value: 42,
			label: 'Active Users',
			trend: 'up',
		},
		data: sampleData,
		variant: 'default',
		size: 'md',
	},
};

export const Reports: Story = {
	args: {
		kind: 'reports',
		title: 'Monthly Reports',
		data: sampleData,
		timeRange: '30d',
		variant: 'detailed',
		size: 'lg',
	},
};

export const Metrics: Story = {
	args: {
		kind: 'metrics',
		title: 'Key Metrics',
		metric: {
			value: '98.5%',
			label: 'Uptime',
			change: 0.2,
			trend: 'up',
		},
		variant: 'compact',
		size: 'md',
	},
};

export const Performance: Story = {
	args: {
		kind: 'performance',
		title: 'Performance Metrics',
		metric: {
			value: 85,
			label: 'Performance Score',
			trend: 'up',
		},
		variant: 'default',
		size: 'md',
	},
};

export const Loading: Story = {
	args: {
		kind: 'dashboard',
		title: 'Loading Dashboard',
		loading: true,
		variant: 'default',
		size: 'md',
	},
};

export const Error: Story = {
	args: {
		kind: 'dashboard',
		title: 'Error Dashboard',
		error: 'Failed to load analytics data. Please try again.',
		variant: 'default',
		size: 'md',
	},
};

export const Small: Story = {
	args: {
		kind: 'metrics',
		title: 'Small Metrics',
		metric: sampleMetric,
		variant: 'compact',
		size: 'sm',
	},
};

export const Large: Story = {
	args: {
		kind: 'dashboard',
		title: 'Large Dashboard',
		metric: sampleMetric,
		data: sampleData,
		variant: 'detailed',
		size: 'lg',
	},
};

export const Minimal: Story = {
	args: {
		kind: 'metrics',
		title: 'Minimal View',
		metric: sampleMetric,
		variant: 'minimal',
		size: 'md',
	},
};

export const Detailed: Story = {
	args: {
		kind: 'dashboard',
		title: 'Detailed Analytics',
		metric: sampleMetric,
		data: sampleData,
		variant: 'detailed',
		size: 'lg',
		timeRange: '7d',
	},
};

// Interactive stories
export const Interactive: Story = {
	args: {
		kind: 'dashboard',
		title: 'Interactive Dashboard',
		metric: sampleMetric,
		data: sampleData,
		variant: 'default',
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
		metric: sampleMetric,
		data: sampleData,
		variant: 'default',
		size: 'md',
		timeRange: '24h',
	},
	argTypes: {
		metric: {
			control: 'object',
			description: 'Metric data object',
		},
		data: {
			control: 'object',
			description: 'Chart data array',
		},
	},
};
