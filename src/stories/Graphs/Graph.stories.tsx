import React from 'react';
import { Graph } from '../../components/Graphs';
import type { GraphProps } from '../../components/Graphs';
import {
	sampleChartData,
	pieChartData,
	timeSeriesData,
	multiSeriesData,
} from '../mocks';
import { commonDecorators } from '../config/decorators';

export default {
	title: 'Graphs/Graph',
	component: Graph,
	decorators: commonDecorators,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Unified <Graph /> component. Use the `kind` prop to select chart type. All configuration is via props. See each story for usage.',
			},
		},
	},
};

// --- Bar Chart ---
export const Bar = (args: Partial<GraphProps>) => (
	<Graph
		kind='bar'
		data={sampleChartData}
		dataKey='score'
		labelKey='match'
		title='Bar Chart Example'
		subtitle='Scores by match (subtitle)'
		label='Match Results'
		ariaLabel='Bar chart of scores by match'
		{...args}
	/>
);
Bar.args = {
	showGrid: true,
	showAxes: true,
	showLegend: false,
	colorScheme: 'primary',
};
Bar.storyName = 'Bar Chart';

// --- Line Chart ---
export const Line = (args: Partial<GraphProps>) => (
	<Graph
		kind='line'
		data={timeSeriesData}
		dataKey='value'
		labelKey='date'
		title='Line Chart Example'
		subtitle='Values over time (subtitle)'
		label='Value Series'
		ariaLabel='Line chart of values over time'
		{...args}
	/>
);
Line.args = {
	showGrid: true,
	showAxes: true,
	showLegend: false,
	colorScheme: 'rainbow',
};
Line.storyName = 'Line Chart';

// --- Area Chart ---
export const Area = (args: Partial<GraphProps>) => (
	<Graph
		kind='area'
		data={timeSeriesData}
		dataKey='value'
		labelKey='date'
		title='Area Chart Example'
		subtitle='Area under curve (subtitle)'
		label='Area Series'
		ariaLabel='Area chart of values over time'
		{...args}
	/>
);
Area.args = {
	showGrid: true,
	showAxes: true,
	showLegend: false,
	colorScheme: 'secondary',
};
Area.storyName = 'Area Chart';

// --- Pie Chart ---
export const Pie = (args: Partial<GraphProps>) => (
	<Graph
		kind='pie'
		data={pieChartData}
		dataKey='score'
		labelKey='category'
		title='Pie Chart Example'
		subtitle='Category breakdown (subtitle)'
		label='Category'
		ariaLabel='Pie chart of category breakdown'
		showLegend={true}
		showTooltip={true}
		{...args}
	/>
);
Pie.args = {
	colorScheme: 'rainbow',
};
Pie.storyName = 'Pie Chart';

// --- Radar Chart ---
export const Radar = (args: Partial<GraphProps>) => (
	<Graph
		kind='radar'
		data={pieChartData}
		dataKey='score'
		labelKey='category'
		title='Radar Chart Example'
		subtitle='Scores by category (subtitle)'
		label='Radar Categories'
		ariaLabel='Radar chart of scores by category'
		{...args}
	/>
);
Radar.args = {
	showLegend: true,
	showTooltip: true,
	colorScheme: 'default',
};
Radar.storyName = 'Radar Chart';

// --- Multi-Series Line Chart ---
export const MultiLine = (args: Partial<GraphProps>) => (
	<Graph
		kind='line-multi'
		data={multiSeriesData}
		dataKey='wins'
		labelKey='month'
		title='Multi-Line Chart Example'
		subtitle='Wins, losses, and draws by month (subtitle)'
		ariaLabel='Multi-line chart of wins, losses, and draws by month'
		{...args}
	/>
);
MultiLine.args = {
	showGrid: true,
	showAxes: true,
	showLegend: true,
	colorScheme: 'rainbow',
};
MultiLine.storyName = 'Multi-Line Chart';

// --- Accessibility/Edge Case Example ---
export const EmptyState = (args: Partial<GraphProps>) => (
	<Graph
		kind='bar'
		data={[]}
		dataKey='score'
		labelKey='match'
		title='Empty State Example'
		subtitle='No data available (subtitle)'
		ariaLabel='Empty bar chart (no data)'
		{...args}
	/>
);
EmptyState.args = {
	showGrid: true,
	showAxes: true,
	showLegend: false,
};
EmptyState.storyName = 'Empty State';

// --- Custom Colors Example ---
export const CustomColors = (args: Partial<GraphProps>) => (
	<Graph
		kind='pie'
		data={pieChartData}
		dataKey='score'
		labelKey='category'
		title='Custom Colors Example'
		ariaLabel='Pie chart with custom colors'
		colors={['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']}
		{...args}
	/>
);
CustomColors.args = {
	showLegend: true,
	showTooltip: true,
};
CustomColors.storyName = 'Custom Colors';

// --- All Variants Gallery ---
const graphKinds = [
	'bar',
	'horizontalBar',
	'pie',
	'doughnut',
	'line',
	'area',
	'radar',
	'scatter',
	'composed',
	'treemap',
	'funnel',
];
const colorSchemes = ['primary', 'rainbow', 'pastel'];

export const GraphGallery = () => (
	<div
		style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}
	>
		{graphKinds.map((kind) =>
			colorSchemes.map((colorScheme) => (
				<div
					key={`${kind}-${colorScheme}`}
					style={{ minWidth: 320 }}
				>
					<Graph
						kind={kind}
						data={
							kind === 'pie' ? pieChartData
							: kind === 'line' ?
								timeSeriesData
							:	sampleChartData
						}
						dataKey={
							kind === 'pie' ? 'score'
							: kind === 'line' ?
								'value'
							:	'score'
						}
						labelKey={
							kind === 'pie' ? 'category'
							: kind === 'line' ?
								'date'
							:	'match'
						}
						title={`${kind} (${colorScheme})`}
						colorScheme={colorScheme}
						showGrid
						showAxes
						showLegend
						ariaLabel={`${kind} chart`}
					/>
					<div
						style={{
							fontSize: 12,
							marginTop: 4,
							textAlign: 'center',
						}}
					>
						{kind} / {colorScheme}
					</div>
				</div>
			))
		)}
	</div>
);
GraphGallery.storyName = 'All Variants Gallery';

// --- Docs/Usage Note ---
/**
 * All stories use the <Graph {...props}> API. See args for customization.
 * For more advanced configuration, use the `configuration` prop.
 */
