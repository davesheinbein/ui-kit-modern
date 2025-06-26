import React from 'react';
import {
	Chart,
	ChartControls,
	LegendVertical,
	FilterCheckboxes,
} from '../../components/Chart';
import { commonDecorators } from '../config/decorators';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<any> = {
	title: 'Charts/Chart',
	component: Chart,
	decorators: commonDecorators,
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
type Story = StoryObj<any>;

// Alphabetized stories
export const ChartControlsStory: Story = {
	render: (args) => (
		<ChartControls {...args} chartId='controls-demo' />
	),
	args: {},
};

export const Default: Story = { args: {} };

export const Tooltip: Story = {
	render: (args) => <div>Tooltip story placeholder</div>,
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
