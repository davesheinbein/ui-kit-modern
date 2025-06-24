import React from 'react';
import {
	Chart,
	ChartProps,
	LegendChart,
	LegendHorizontal,
	LegendVertical,
	LegendGrid,
	LegendMinimal,
	TooltipChart,
	TooltipSimple,
	TooltipDetailed,
	TooltipCustom,
	FilterControls,
	FilterCheckboxes,
	FilterButtons,
	FilterDropdown,
	FilterMultiSelect,
	ChartControls,
	ZoomControls,
	TimeRangeSelector,
	DataSeriesToggle,
	DashboardLegend,
	GameStatsFilter,
} from '../../components/Chart';
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
	render: (args) => (
		<LegendVertical
			{...args}
			chartId='vertical-legend'
			size='large'
		/>
	),
	args: {},
};

export const WithFilterControls: Story = {
	render: (args) => (
		<FilterCheckboxes
			{...args}
			chartId='filter-controls'
			showSelectAll
			searchable
		/>
	),
	args: {},
};

export const Tooltip: Story = {
	render: (args) => (
		<TooltipChart {...args} chartId='tooltip-demo'>
			This is a tooltip for a chart data point.
		</TooltipChart>
	),
	args: {},
};

export const ChartControlsStory: Story = {
	render: (args) => (
		<ChartControls {...args} chartId='controls-demo' />
	),
	args: {},
};
