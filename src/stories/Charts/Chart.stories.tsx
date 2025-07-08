import React from 'react';
import { Charts } from '../../components/Chart';
import { commonDecorators } from '../config/decorators';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<any> = {
	title: 'Charts/Chart',
	component: Charts,
	decorators: commonDecorators,
	tags: ['autodocs'],
	args: {
		kind: 'chart-legend',
		chartId: 'demo-chart',
		dataSeries: [
			{
				id: 'series-1',
				label: 'Series 1',
				color: '#3b82f6',
				visible: true,
				data: [{ name: 'Value', value: 75 }],
			},
		],
		spacing: 'normal',
		size: 'medium',
	},
	parameters: {
		layout: 'centered',
		docs: {
			autodocs: true,
		},
	},
};
export default meta;
type Story = StoryObj<any>;

export const LegendHorizontal: Story = {
	args: {
		kind: 'chart-legend',
		chartId: 'legend-horizontal',
		legendOrientation: 'horizontal',
		dataSeries: [
			{
				id: 'apples',
				label: 'Apples',
				color: '#f87171',
				visible: true,
				data: [{ name: 'Q1', value: 120 }],
			},
			{
				id: 'bananas',
				label: 'Bananas',
				color: '#fbbf24',
				visible: true,
				data: [{ name: 'Q1', value: 80 }],
			},
			{
				id: 'oranges',
				label: 'Oranges',
				color: '#34d399',
				visible: true,
				data: [{ name: 'Q1', value: 95 }],
			},
		],
	},
};

export const Scorecard: Story = {
	args: {
		chartType: 'scorecard',
		kind: 'chart-legend',
		chartId: 'scorecard',
		dataSeries: [
			{
				id: 'score',
				label: 'Score',
				color: '#3b82f6',
				visible: true,
				data: [{ value: 12345 }],
			},
		],
	},
};

export const ErrorState: Story = {
	args: {
		chartType: 'kpi',
		kind: 'chart-legend',
		chartId: 'error-state',
		dataSeries: [
			{ id: 'err', label: 'Error', data: undefined },
		],
	},
};

export const AccessibilityEdgeCase: Story = {
	args: {
		chartType: 'status',
		kind: 'chart-legend',
		chartId: 'a11y-edge',
		dataSeries: [
			{
				id: 'a11y',
				label: 'Screen Reader Only',
				color: '#10b981',
				visible: true,
				data: [{ status: 'ok' }],
			},
		],
	},
};
