import React from 'react';
import { Charts } from '../../components/Chart';
import { chartArgTypes as baseChartArgTypes } from '../config/argTypes';
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

export const LegendDefault: Story = {
	args: {
		kind: 'chart-legend',
		chartId: 'default-demo',
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
		spacing: 'normal',
		size: 'medium',
	},
};

export const KPIWidgetEdgeCases: Story = {
	render: (args) => (
		<Charts
			{...args}
			chartId='kpi-edge-cases'
			chartType='kpi'
			kind='chart-legend'
			dataSeries={[
				{
					id: 'kpi-1',
					label: 'Zero',
					color: '#f87171',
					visible: true,
					data: [{ name: 'Value', value: 0 }],
				},
				{
					id: 'kpi-2',
					label: 'Negative',
					color: '#fbbf24',
					visible: true,
					data: [{ name: 'Value', value: -42 }],
				},
				{
					id: 'kpi-3',
					label: 'Large',
					color: '#34d399',
					visible: true,
					data: [{ name: 'Value', value: 1234567 }],
				},
				{
					id: 'kpi-4',
					label: 'Null',
					color: '#6366f1',
					visible: true,
					data: [{ name: 'Value', value: null }],
				},
				{
					id: 'kpi-5',
					label: 'NaN',
					color: '#10b981',
					visible: true,
					data: [{ name: 'Value', value: NaN }],
				},
			]}
		/>
	),
	args: {},
};

export const ProgressWidget: Story = {
	render: (args) => (
		<Charts
			{...args}
			chartId='progress-widget'
			chartType='progress'
			kind='chart-legend'
			dataSeries={[
				{
					id: 'progress-1',
					label: 'Goal Completion',
					color: '#f59e42',
					visible: true,
					data: [{ name: 'Goal', value: 68 }],
				},
			]}
		/>
	),
	args: {},
};

export const GaugeWidget: Story = {
	render: (args) => (
		<Charts
			{...args}
			chartId='gauge-widget'
			chartType='gauge'
			kind='chart-legend'
			dataSeries={[
				{
					id: 'gauge-1',
					label: 'Satisfaction',
					color: '#6366f1',
					visible: true,
					data: [{ name: 'Satisfaction', value: 92 }],
				},
			]}
		/>
	),
	args: {},
};

export const DeltaWidget: Story = {
	render: (args) => (
		<Charts
			{...args}
			chartId='delta-widget'
			chartType='delta'
			kind='chart-legend'
			dataSeries={[
				{
					id: 'delta-1',
					label: 'Change',
					color: '#10b981',
					visible: true,
					data: [{ value: 120, delta: 8 }],
				},
			]}
		/>
	),
	args: {},
};

export const CircularProgressWidget: Story = {
	render: (args) => (
		<Charts
			{...args}
			chartId='circular-progress-widget'
			chartType='circularProgress'
			kind='chart-legend'
			dataSeries={[
				{
					id: 'circular-1',
					label: 'Completion',
					color: '#f59e42',
					visible: true,
					data: [{ value: 76 }],
				},
			]}
		/>
	),
	args: {},
};

export const StatusWidget: Story = {
	render: (args) => (
		<Charts
			{...args}
			chartId='status-widget'
			chartType='status'
			kind='chart-legend'
			dataSeries={[
				{
					id: 'status-1',
					label: 'Server',
					color: '#3b82f6',
					visible: true,
					data: [{ status: 'ok' }],
				},
			]}
		/>
	),
	args: {},
};

export const LeaderboardWidget: Story = {
	render: (args) => (
		<Charts
			{...args}
			chartId='leaderboard-widget'
			chartType='leaderboard'
			kind='chart-legend'
			dataSeries={[
				{
					id: 'leaderboard-1',
					label: 'Top Players',
					color: '#10b981',
					visible: true,
					data: [
						{ name: 'Alice', value: 120 },
						{ name: 'Bob', value: 110 },
						{ name: 'Carol', value: 105 },
					],
				},
			]}
		/>
	),
	args: {},
};

export const EmptyData: Story = {
	render: (args) => (
		<Charts
			{...args}
			chartId='empty-data'
			chartType='kpi'
			kind='chart-legend'
			dataSeries={[]}
		/>
	),
	args: {},
};

export const LoadingState: Story = {
	render: (args) => (
		<div
			style={{
				minHeight: 80,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<span role='status' aria-live='polite'>
				Loading...
			</span>
		</div>
	),
	args: {},
};

export const ErrorState: Story = {
	render: (args) => (
		<Charts
			{...args}
			chartId='error-state'
			chartType='kpi'
			kind='chart-legend'
			dataSeries={[
				{ id: 'err', label: 'Error', data: undefined },
			]}
		/>
	),
	args: {},
};

export const LongLabels: Story = {
	render: (args) => (
		<Charts
			{...args}
			chartId='long-labels'
			chartType='scorecard'
			kind='chart-legend'
			dataSeries={[
				{
					id: 'long',
					label:
						'This is a very long label for accessibility and overflow testing',
					color: '#3b82f6',
					visible: true,
					data: [{ value: 12345 }],
				},
			]}
		/>
	),
	args: {},
};

export const AccessibilityEdgeCase: Story = {
	render: (args) => (
		<Charts
			{...args}
			chartId='a11y-edge'
			chartType='status'
			kind='chart-legend'
			dataSeries={[
				{
					id: 'a11y',
					label: 'Screen Reader Only',
					color: '#10b981',
					visible: true,
					data: [{ status: 'ok' }],
				},
			]}
		/>
	),
	args: {},
};

export const AllPropVariations: Story = {
	render: (args) => {
		const sizes = ['small', 'medium', 'large'] as const;
		const variants = [
			'default',
			'minimal',
			'modern',
			'compact',
			'glass',
			'game-style',
		] as const;
		const legendOrientations = [
			'horizontal',
			'vertical',
			'grid',
		] as const;
		const spacings = ['tight', 'normal', 'loose'] as const;
		const showFiltersOptions = [false, true];
		const chartTypes = [
			'kpi',
			'scorecard',
			'progress',
			'gauge',
			'delta',
			'circularProgress',
			'status',
			'leaderboard',
		] as const;

		const baseData = [
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
		];

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 32,
				}}
			>
				{/* Size Variations */}
				<section>
					<h4>Size Variations</h4>
					<div style={{ display: 'flex', gap: 24 }}>
						{sizes.map((size) => (
							<Charts
								key={size}
								{...args}
								chartId={`size-${size}`}
								chartType={'kpi'}
								size={size}
								dataSeries={baseData}
							/>
						))}
					</div>
				</section>

				{/* Variant Variations */}
				<section>
					<h4>Variant Variations</h4>
					<div
						style={{
							display: 'flex',
							gap: 24,
							flexWrap: 'wrap',
						}}
					>
						{variants.map((variant) => (
							<Charts
								key={variant}
								{...args}
								chartId={`variant-${variant}`}
								chartType={'scorecard'}
								variant={variant}
								dataSeries={baseData}
							/>
						))}
					</div>
				</section>

				{/* Legend Orientation Variations */}
				<section>
					<h4>Legend Orientation Variations</h4>
					<div style={{ display: 'flex', gap: 24 }}>
						{(
							['horizontal', 'vertical', 'grid'] as const
						).map((legendOrientation) => (
							<Charts
								key={legendOrientation}
								{...args}
								chartId={`legend-${legendOrientation}`}
								chartType={'progress'}
								legendOrientation={
									legendOrientation === 'grid' ?
										'horizontal'
									:	legendOrientation
								}
								dataSeries={baseData}
							/>
						))}
					</div>
				</section>

				{/* Filters Variations */}
				<section>
					<h4>Filters</h4>
					<div style={{ display: 'flex', gap: 24 }}>
						{/* No filters */}
						<Charts
							{...args}
							chartId='filters-none'
							chartType={'gauge'}
							showFilter={false}
							showSearch={false}
							dataSeries={baseData}
						/>
						{/* Only filters */}
						<Charts
							{...args}
							chartId='filters-only'
							chartType={'gauge'}
							showFilter={true}
							showSearch={false}
							dataSeries={baseData}
						/>
						{/* Filters + Search */}
						<Charts
							{...args}
							chartId='filter-search-demo'
							kind='chart-legend'
							legendOrientation='horizontal'
							showFilter={true}
							showSearch={true}
							dataSeries={[
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
								{
									id: 'grapes',
									label: 'Grapes',
									color: '#a78bfa',
									visible: true,
									data: [{ name: 'Q1', value: 60 }],
								},
								{
									id: 'kiwi',
									label: 'Kiwi',
									color: '#10b981',
									visible: true,
									data: [{ name: 'Q1', value: 45 }],
								},
								{
									id: 'lemon',
									label: 'Lemon',
									color: '#fde047',
									visible: true,
									data: [{ name: 'Q1', value: 30 }],
								},
							]}
							spacing='normal'
							size='medium'
							variant='default'
						/>
					</div>
				</section>

				{/* Spacing Variations */}
				<section>
					<h4>Spacing Variations</h4>
					<div style={{ display: 'flex', gap: 24 }}>
						{spacings.map((spacing) => (
							<Charts
								key={spacing}
								{...args}
								chartId={`spacing-${spacing}`}
								chartType={'delta'}
								spacing={spacing}
								dataSeries={baseData}
							/>
						))}
					</div>
				</section>

				{/* All Chart Types (for completeness) */}
				<section>
					<h4>All Chart Types</h4>
					<div
						style={{
							display: 'flex',
							gap: 24,
							flexWrap: 'wrap',
						}}
					>
						{chartTypes.map((chartType) => (
							<Charts
								key={chartType}
								{...args}
								chartId={`type-${chartType}`}
								chartType={chartType}
								dataSeries={baseData}
							/>
						))}
					</div>
				</section>
			</div>
		);
	},
	args: {},
	parameters: {
		docs: {
			description: {
				story:
					'All key prop variations (size, variant, legendOrientation, showFilters, spacing, chartType) are shown side by side for easy visual comparison.',
			},
		},
	},
};

export const LegendWithFilterAndSearch: Story = {
	args: {
		kind: 'chart-legend',
		chartId: 'filter-search-demo',
		legendOrientation: 'horizontal',
		showFilter: true,
		showSearch: true,
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
			{
				id: 'grapes',
				label: 'Grapes',
				color: '#a78bfa',
				visible: true,
				data: [{ name: 'Q1', value: 60 }],
			},
			{
				id: 'kiwi',
				label: 'Kiwi',
				color: '#10b981',
				visible: true,
				data: [{ name: 'Q1', value: 45 }],
			},
			{
				id: 'lemon',
				label: 'Lemon',
				color: '#fde047',
				visible: true,
				data: [{ name: 'Q1', value: 30 }],
			},
		],
		spacing: 'normal',
		size: 'medium',
		variant: 'default',
	},
};
