import React from 'react';
import { Chart, ChartProps } from '../../components/Chart';
import { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../store';

const meta: Meta<ChartProps> = {
	title: 'Charts/Chart',
	component: Chart,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<Story />
			</Provider>
		),
	],
	args: {
		kind: 'chart-legend',
		chartId: 'demo-chart',
		dataSeries: [
			{
				id: 'series-1',
				label: 'Series 1',
				color: '#3b82f6',
				visible: true,
				data: [1, 2, 3, 4, 5],
			},
			{
				id: 'series-2',
				label: 'Series 2',
				color: '#f59e42',
				visible: true,
				data: [2, 4, 6, 8, 10],
			},
			{
				id: 'series-3',
				label: 'Series 3',
				color: '#10b981',
				visible: false,
				data: [5, 4, 3, 2, 1],
			},
		],
		spacing: 'normal',
		size: 'medium',
	},
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<ChartProps>;

export const Default: Story = {
	args: {},
};

export const VerticalLegend: Story = {
	args: {
		kind: 'legend-vertical',
		chartId: 'vertical-legend',
		size: 'large',
	},
};

export const WithFilterControls: Story = {
	args: {
		kind: 'filter-checkboxes',
		chartId: 'filter-controls',
		showSelectAll: true,
		searchable: true,
	},
};

export const Tooltip: Story = {
	args: {
		kind: 'chart-tooltip',
		chartId: 'tooltip-demo',
		children: 'This is a tooltip for a chart data point.',
	},
};

export const ChartControls: Story = {
	args: {
		kind: 'chart-controls',
		chartId: 'controls-demo',
	},
};
