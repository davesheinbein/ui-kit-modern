import React from 'react';
import {
	ResponsiveContainer,
	BarChart,
	XAxis,
	YAxis,
} from 'recharts';
import ChartGrid from './ChartGrid';
import ChartTooltip from './ChartTooltip';
import ChartLegend from './ChartLegend';

interface WaterfallChartRendererProps {
	data: any[];
	labelKey: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
	showAxes: boolean;
	showXAxis?: boolean;
	showYAxis?: boolean;
	showGrid: boolean;
	showTooltip: boolean;
	showLegend: boolean;
	legendLabels?: string[] | Record<string, string>;
	height: number | string;
	minSize: number;
	margin?: object;
	defaultMargin: object;
	styles: any;
}

const WaterfallChartRenderer: React.FC<
	WaterfallChartRendererProps
> = ({
	data,
	labelKey,
	xAxisLabel,
	yAxisLabel,
	showAxes,
	showXAxis,
	showYAxis,
	showGrid,
	showTooltip,
	showLegend,
	legendLabels,
	height,
	minSize,
	margin,
	defaultMargin,
	styles,
}) => (
	<ResponsiveContainer
		width='100%'
		height={height}
		minHeight={minSize}
		minWidth={minSize}
	>
		<BarChart data={data} margin={margin || defaultMargin}>
			<ChartGrid showGrid={showGrid} />
			{showAxes !== false && showXAxis !== false ?
				<XAxis
					dataKey={labelKey}
					type='category'
					label={{
						value: xAxisLabel,
						position: 'insideBottom',
						offset: -5,
						className: styles.graphsAxisLabel,
					}}
				/>
			:	null}
			{showAxes !== false && showYAxis !== false ?
				<YAxis
					type='number'
					label={{
						value: yAxisLabel,
						angle: -90,
						position: 'insideLeft',
						offset: 10,
						className: styles.graphsAxisLabel,
					}}
				/>
			:	null}
			<ChartTooltip showTooltip={showTooltip} />
			<ChartLegend
				showLegend={showLegend}
				legendLabels={legendLabels}
			/>
		</BarChart>
	</ResponsiveContainer>
);

export default WaterfallChartRenderer;
