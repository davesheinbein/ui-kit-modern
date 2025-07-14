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
	errorBarData,
	referenceLineData,
	referenceAreaData,
	brushZoomData,
	composedMultiData,
} from '../mocks/charts';
import { commonDecorators } from '../config/decorators';
import type {
	Props as TooltipProps,
	Payload as LegendPayload,
} from 'recharts/types/component/DefaultTooltipContent';

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
		labelKey='name'
		title='Bar Chart Example'
		subtitle='Scores by game (subtitle)'
		ariaLabel='Bar chart of scores by game'
		{...args}
	/>
);
Bar.args = {
	showGrid: true,
	showAxes: true,
	showXAxis: true,
	showYAxis: true,
	xAxisLabel: 'Game',
	yAxisLabel: 'Score',
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
	showLegend: false,
	colorScheme: 'teal',
};
Area.storyName = 'Area Chart';

// --- Pie Chart ---
export const Pie = (args: Partial<GraphProps>) => (
	<Graph
		kind='pie'
		data={pieChartData}
		dataKey='score'
		labelKey='name'
		title='Pie Chart Example'
		subtitle='Distribution of scores (subtitle)'
		ariaLabel='Pie chart of score distribution'
		{...args}
	/>
);
Pie.args = {
	showTooltip: true,
	showLegend: true,
	colorScheme: 'pastel',
};
Pie.storyName = 'Pie Chart';

// --- Radar Chart ---
export const Radar = (args: Partial<GraphProps>) => (
	<Graph
		kind='radar'
		data={multiSeriesData}
		dataKey='wins'
		labelKey='month'
		title='Radar Chart Example'
		subtitle='Wins by month (subtitle)'
		ariaLabel='Radar chart of wins by month'
		{...args}
	/>
);
Radar.args = {
	showGrid: true,
	showLegend: true,
	colorScheme: 'rainbow',
};
Radar.storyName = 'Radar Chart';

// --- Scatter Plot ---
export const Scatter = (args: Partial<GraphProps>) => (
	<Graph
		kind='scatter'
		data={scatterPlotData}
		dataKey='y'
		labelKey='x'
		title='Scatter Plot Example'
		subtitle='Scatter plot of X vs Y (subtitle)'
		ariaLabel='Scatter plot of X vs Y'
		{...args}
	/>
);
Scatter.args = {
	showGrid: true,
	showLegend: false,
	colorScheme: 'blue',
};
Scatter.storyName = 'Scatter Plot';

// --- Multi-Line Chart ---
export const MultiLine = (args: Partial<GraphProps>) => (
	<Graph
		kind='line'
		data={multiSeriesData}
		dataKey='wins'
		labelKey='month'
		title='Multi-Line Chart Example'
		subtitle='Wins, Losses, Draws by month'
		ariaLabel='Multi-line chart of results by month'
		configuration={{
			series: [
				{ dataKey: 'wins', name: 'Wins' },
				{ dataKey: 'losses', name: 'Losses' },
				{ dataKey: 'draws', name: 'Draws' },
			],
		}}
		{...args}
	/>
);
MultiLine.args = {
	showGrid: true,
	showLegend: true,
	colorScheme: 'rainbow',
};
MultiLine.storyName = 'Multi-Line Chart';

// --- Treemap Chart ---
export const Treemap = (args: Partial<GraphProps>) => (
	<Graph
		kind='treemap'
		data={treemapData}
		dataKey='size'
		labelKey='name'
		title='Treemap Chart Example'
		subtitle='Tech stack breakdown'
		ariaLabel='Treemap chart of tech stack'
		{...args}
	/>
);
Treemap.args = {
	colorScheme: 'teal',
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
		subtitle='Sales funnel'
		ariaLabel='Funnel chart of sales'
		{...args}
	/>
);
Funnel.args = {
	colorScheme: 'purple',
};
Funnel.storyName = 'Funnel Chart';

// --- Composed Chart ---
export const Composed = (args: Partial<GraphProps>) => (
	<Graph
		kind='composed'
		data={composedMultiData}
		dataKey='sales'
		labelKey='month'
		title='Composed Chart Example'
		subtitle='Sales, Line, and Area by month'
		ariaLabel='Composed chart of sales by month'
		configuration={{
			series: [
				{
					dataKey: 'sales',
					name: 'Sales',
					type: 'bar',
				},
				{
					dataKey: 'sales_line',
					name: 'Sales Line',
					type: 'line',
				},
				{
					dataKey: 'sales_area',
					name: 'Sales Area',
					type: 'area',
				},
			],
		}}
		{...args}
	/>
);
Composed.args = {
	showGrid: true,
	showLegend: true,
	colorScheme: 'rainbow',
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
		subtitle='Values with error bars'
		ariaLabel='Error bar chart'
		{...args}
	/>
);
ErrorBar.args = {
	showGrid: true,
	showLegend: false,
	colorScheme: 'red',
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
		subtitle='Sales with reference line'
		ariaLabel='Reference line chart'
		{...args}
	/>
);
ReferenceLine.args = {
	showGrid: true,
	showLegend: false,
	colorScheme: 'blue',
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
		subtitle='Values with reference area'
		ariaLabel='Reference area chart'
		{...args}
	/>
);
ReferenceArea.args = {
	showGrid: true,
	showLegend: false,
	colorScheme: 'green',
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
		subtitle='Visitors by day with zoom'
		ariaLabel='Brush zoom chart'
		{...args}
	/>
);
BrushZoom.args = {
	showGrid: true,
	showLegend: false,
	colorScheme: 'orange',
};
BrushZoom.storyName = 'Brush Zoom Chart';

// --- Composed Multi Chart ---
export const ComposedMulti = (
	args: Partial<GraphProps>
) => (
	<Graph
		kind='composed'
		data={composedMultiData}
		dataKey='sales'
		labelKey='month'
		title='Composed Multi Chart Example'
		subtitle='Multiple series composed chart'
		ariaLabel='Composed multi chart'
		configuration={{
			series: [
				{
					dataKey: 'sales',
					name: 'Sales',
					type: 'bar',
				},
				{
					dataKey: 'sales_line',
					name: 'Sales Line',
					type: 'line',
				},
				{
					dataKey: 'sales_area',
					name: 'Sales Area',
					type: 'area',
				},
			],
		}}
		{...args}
	/>
);
ComposedMulti.args = {
	showGrid: true,
	showLegend: true,
	colorScheme: 'rainbow',
};
ComposedMulti.storyName = 'Composed Multi Chart';

// --- All Variants Gallery ---
export const AllVariantsGallery = () => (
	<div style={{ display: 'grid', gap: 32 }}>
		<Bar />
		<Line />
		<Area />
		<Pie />
		<Radar />
		<Scatter />
		<MultiLine />
		<Treemap />
		<Funnel />
		<Composed />
		<ErrorBar />
		<ReferenceLine />
		<ReferenceArea />
		<BrushZoom />
		<ComposedMulti />
	</div>
);
AllVariantsGallery.storyName = 'All Variants Gallery';

// --- Empty State ---
export const EmptyState = (args: Partial<GraphProps>) => (
	<Graph
		kind='bar'
		data={[]}
		dataKey='score'
		labelKey='name'
		title='Empty State Example'
		subtitle='No data available'
		ariaLabel='Empty state bar chart'
		{...args}
	/>
);
EmptyState.storyName = 'Empty State';

// --- Custom Colors ---
export const CustomColors = (args: Partial<GraphProps>) => (
	<Graph
		kind='pie'
		data={pieChartData}
		dataKey='score'
		labelKey='name'
		title='Custom Colors Example'
		ariaLabel='Pie chart with custom colors'
		colors={['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']}
		{...args}
	/>
);
CustomColors.storyName = 'Custom Colors';

// --- Bar (Custom Tooltip) ---
export const CustomTooltip = (args: GraphProps) => (
	<Graph
		{...args}
		kind='bar'
		data={sampleChartData}
		dataKey='score'
		labelKey='name'
		title='Bar (Custom Tooltip)'
		subtitle='Bar chart with custom tooltip'
		showGrid
		showAxes
		showLegend={false}
		colorScheme='primary'
		tooltipRenderer={(
			props: import('recharts/types/component/Tooltip').TooltipProps<
				any,
				any
			>
		) => {
			const { active, payload, label } = props;
			if (active && payload && payload.length) {
				return (
					<div
						style={{
							background: '#222',
							color: '#fff',
							padding: 8,
							borderRadius: 4,
						}}
					>
						<b>Custom Tooltip</b>
						<div>Label: {label}</div>
						<div>Value: {payload[0].value}</div>
					</div>
				);
			}
			return null;
		}}
	/>
);
CustomTooltip.storyName = 'Bar (Custom Tooltip)';

// --- Line (Custom Legend) ---
export const CustomLegend = (args: GraphProps) => (
	<Graph
		{...args}
		kind='line'
		data={multiSeriesData}
		dataKey='wins'
		labelKey='month'
		title='Line (Custom Legend)'
		subtitle='Line chart with custom legend'
		showGrid
		showAxes
		showLegend
		colorScheme='rainbow'
		legendRenderer={({
			payload,
		}: {
			payload?: LegendPayload<any, any>[];
		}) => (
			<div style={{ display: 'flex', gap: 12 }}>
				{payload &&
					payload.map((entry, i) => (
						<span
							key={entry.value || i}
							style={{ color: entry.color }}
						>
							● {entry.value}
						</span>
					))}
			</div>
		)}
	/>
);
CustomLegend.storyName = 'Line (Custom Legend)';

// --- Pie (Custom Empty State) ---
export const CustomEmpty = (args: GraphProps) => (
	<Graph
		{...args}
		kind='pie'
		data={[]}
		title='Pie (Custom Empty State)'
		subtitle='Pie chart with custom empty state'
		colorScheme='pastel'
		emptyRenderer={() => (
			<div style={{ color: 'red', fontWeight: 'bold' }}>
				No chart data! (Custom Empty State)
			</div>
		)}
	/>
);
CustomEmpty.storyName = 'Pie (Custom Empty State)';
