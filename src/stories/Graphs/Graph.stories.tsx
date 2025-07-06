import React from 'react';
import { Graph } from '../../components/Graphs';
import type { GraphProps } from '../../components/Graphs';
import {
	sampleChartData,
	pieChartData,
	timeSeriesData,
	multiSeriesData,
	treemapData,
	funnelData,
	scatterPlotData,
	gaugeData,
	waterfallData,
	heatmapData,
	boxplotData,
	bubbleData,
	errorBarData,
	referenceLineData,
	referenceAreaData,
	brushZoomData,
	composedMultiData,
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
	showXAxis: true,
	showYAxis: true,
	xAxisLabel: 'Match',
	yAxisLabel: 'Score',
	showLegend: true,
	legendLabels: ['Wins', 'Losses'],
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
	showXAxis: true,
	showYAxis: true,
	xAxisLabel: 'Date',
	yAxisLabel: 'Value',
	showLegend: true,
	legendLabels: ['Value'],
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
	showXAxis: true,
	showYAxis: true,
	xAxisLabel: 'Date',
	yAxisLabel: 'Value',
	showLegend: true,
	legendLabels: ['Area'],
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
		legendLabels={[
			'Connections',
			'Red Herrings',
			'Speed Bonus',
			'Perfect Games',
		]}
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
		showLegend={true}
		legendLabels={[
			'Connections',
			'Red Herrings',
			'Speed Bonus',
			'Perfect Games',
		]}
		{...args}
	/>
);
Radar.args = {
	showLegend: true,
	showTooltip: true,
	colorScheme: 'default',
};
Radar.storyName = 'Radar Chart';

// --- Scatter Plot ---
export const Scatter = (args: Partial<GraphProps>) => (
	<Graph
		kind='scatter'
		data={scatterPlotData}
		title='Scatter Plot Example'
		subtitle='Scatter plot (subtitle)'
		label='Scatter Points'
		ariaLabel='Scatter plot of points'
		showXAxis={true}
		showYAxis={true}
		showZAxis={true}
		xAxisLabel='X Value'
		yAxisLabel='Y Value'
		zAxisLabel='Z Value'
		showLegend={true}
		legendLabels={['Points']}
		{...args}
	/>
);
Scatter.args = {
	colorScheme: 'default',
};
Scatter.storyName = 'Scatter Plot';

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

// --- Treemap Chart ---
export const Treemap = (args: Partial<GraphProps>) => (
	<Graph
		kind='treemap'
		data={treemapData}
		dataKey='size'
		labelKey='name'
		title='Treemap Chart Example'
		subtitle='Hierarchical data visualization (subtitle)'
		label='Project Areas'
		ariaLabel='Treemap chart of project areas'
		{...args}
	/>
);
Treemap.args = {
	showTooltip: true,
	colorScheme: 'rainbow',
};
Treemap.storyName = 'Treemap Chart';

// --- Funnel Chart ---
export const Funnel = (args: Partial<GraphProps>) => (
	<Graph
		kind='funnel'
		data={funnelData}
		dataKey='value'
		labelKey='name'
		title='Funnel Chart Example'
		subtitle='Conversion funnel visualization (subtitle)'
		label='Funnel Stages'
		ariaLabel='Funnel chart of conversion stages'
		{...args}
	/>
);
Funnel.args = {
	showLegend: true,
	showTooltip: true,
	colorScheme: 'primary',
};
Funnel.storyName = 'Funnel Chart';

// --- Composed Chart ---
export const Composed = (args: Partial<GraphProps>) => (
	<Graph
		kind='composed-bar-line'
		data={multiSeriesData}
		dataKey='wins'
		labelKey='month'
		title='Composed Chart Example'
		subtitle='Bar and line combination (subtitle)'
		label='Performance Data'
		ariaLabel='Composed chart showing wins as bars with trend line'
		{...args}
	/>
);
Composed.args = {
	showGrid: true,
	showAxes: true,
	showLegend: true,
	colorScheme: 'default',
};
Composed.storyName = 'Composed Chart';

// --- Error Bar Chart ---
export const ErrorBar = (args: Partial<GraphProps>) => (
	<Graph
		kind='error-bar'
		data={errorBarData}
		dataKey='value'
		labelKey='category'
		title='Error Bar Chart Example'
		subtitle='Quarterly results with error margins'
		label='Quarterly Performance'
		ariaLabel='Bar chart with error bars showing quarterly performance'
		{...args}
	/>
);
ErrorBar.args = {
	showGrid: true,
	showAxes: true,
	showTooltip: true,
	colorScheme: 'primary',
};
ErrorBar.storyName = 'Error Bar Chart';

// --- Reference Line Chart ---
export const ReferenceLine = (
	args: Partial<GraphProps>
) => (
	<Graph
		kind='reference-line'
		data={referenceLineData}
		dataKey='sales'
		labelKey='month'
		title='Reference Line Chart Example'
		subtitle='Sales performance with target line'
		label='Sales Tracking'
		ariaLabel='Line chart with reference line showing sales tracking'
		{...args}
	/>
);
ReferenceLine.args = {
	showGrid: true,
	showAxes: true,
	showTooltip: true,
	colorScheme: 'secondary',
};
ReferenceLine.storyName = 'Reference Line Chart';

// --- Reference Area Chart ---
export const ReferenceArea = (
	args: Partial<GraphProps>
) => (
	<Graph
		kind='reference-area'
		data={referenceAreaData}
		dataKey='value'
		labelKey='date'
		title='Reference Area Chart Example'
		subtitle='Values over time with highlighted period'
		label='Time Series with Highlights'
		ariaLabel='Area chart with reference area highlighting peak period'
		{...args}
	/>
);
ReferenceArea.args = {
	showGrid: true,
	showAxes: true,
	showTooltip: true,
	colorScheme: 'rainbow',
};
ReferenceArea.storyName = 'Reference Area Chart';

// --- Brush Zoom Chart ---
export const BrushZoom = (args: Partial<GraphProps>) => (
	<Graph
		kind='brush-zoom'
		data={brushZoomData}
		dataKey='visitors'
		labelKey='day'
		title='Brush Zoom Chart Example'
		subtitle='Daily visitors with zoom brush'
		label='Visitor Analytics'
		ariaLabel='Line chart with brush control for zooming'
		{...args}
	/>
);
BrushZoom.args = {
	showGrid: true,
	showAxes: true,
	showTooltip: true,
	colorScheme: 'primary',
};
BrushZoom.storyName = 'Brush Zoom Chart';

// --- Composed Line Area Chart ---
export const ComposedLineArea = (
	args: Partial<GraphProps>
) => (
	<Graph
		kind='composed-line-area'
		data={composedMultiData}
		dataKey='sales'
		labelKey='month'
		title='Composed Line-Area Chart'
		subtitle='Multiple data series combined'
		label='Sales Analysis'
		ariaLabel='Composed chart with line and area series'
		{...args}
	/>
);
ComposedLineArea.args = {
	showGrid: true,
	showAxes: true,
	showLegend: true,
	showTooltip: true,
	colorScheme: 'default',
};
ComposedLineArea.storyName = 'Composed Line-Area Chart';

// --- Composed Multi Chart ---
export const ComposedMulti = (
	args: Partial<GraphProps>
) => (
	<Graph
		kind='composed-multi'
		data={composedMultiData}
		dataKey='sales'
		labelKey='month'
		title='Composed Multi Chart'
		subtitle='Bar, line, and area combined'
		label='Comprehensive Sales View'
		ariaLabel='Composed chart with multiple chart types'
		{...args}
	/>
);
ComposedMulti.args = {
	showGrid: true,
	showAxes: true,
	showLegend: true,
	showTooltip: true,
	colorScheme: 'rainbow',
};
ComposedMulti.storyName = 'Composed Multi Chart';

// --- All Variants Gallery ---
const graphKinds = [
	'bar',
	'pie',
	'doughnut',
	'line',
	'area',
	'radar',
	'scatter',
	'composed-bar-line',
	'composed-line-area',
	'composed-multi',
	'treemap',
	'funnel',
	'error-bar',
	'reference-line',
	'reference-area',
	'brush-zoom',
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
							kind === 'pie' || kind === 'doughnut' ?
								pieChartData
							: kind === 'line' || kind === 'area' ?
								timeSeriesData
							: kind === 'scatter' ?
								scatterPlotData
							: kind === 'treemap' ?
								treemapData
							: kind === 'funnel' ?
								funnelData
							: kind === 'composed-bar-line' ?
								multiSeriesData
							:	sampleChartData
						}
						dataKey={
							kind === 'pie' || kind === 'doughnut' ?
								'score'
							: kind === 'line' || kind === 'area' ?
								'value'
							: kind === 'scatter' ?
								'y'
							: kind === 'treemap' ?
								'size'
							: kind === 'funnel' ?
								'value'
							: kind === 'composed-bar-line' ?
								'wins'
							:	'score'
						}
						labelKey={
							kind === 'pie' || kind === 'doughnut' ?
								'category'
							: kind === 'line' || kind === 'area' ?
								'date'
							: kind === 'scatter' ?
								'name'
							: kind === 'treemap' ?
								'name'
							: kind === 'funnel' ?
								'name'
							: kind === 'composed-bar-line' ?
								'month'
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
