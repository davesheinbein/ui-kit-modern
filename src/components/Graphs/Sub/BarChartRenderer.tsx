import React from 'react';
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	LabelList,
} from 'recharts';

interface BarChartRendererProps {
	data: any[];
	dataKey: string;
	colorList: string[];
	height: number | string;
	minSize: number;
	showGrid: boolean;
	showTooltip: boolean;
	showLegend: boolean;
	legendLabels?: string[] | Record<string, string>;
	animationEnabled: boolean;
	animationDuration: number;
	margin?: object;
	defaultMargin: object;
	configuration?: Record<string, any>;
	labelKey: string;
	showLabels?: boolean;
	renderTooltip?: (props: any) => React.ReactNode;
	renderLegend?: (props: any) => React.ReactNode;
}

const BarChartRenderer: React.FC<BarChartRendererProps> = ({
	data,
	dataKey,
	colorList,
	height,
	minSize,
	showGrid,
	showTooltip,
	showLegend,
	legendLabels,
	animationEnabled,
	animationDuration,
	margin,
	defaultMargin,
	configuration,
	labelKey,
	showLabels,
	renderTooltip,
	renderLegend,
}) => {
	if (!data || data.length === 0) return null;
	return (
		<ResponsiveContainer
			width='100%'
			height={height || 300}
			minHeight={minSize}
		>
			<BarChart
				data={data}
				margin={
					margin ||
					defaultMargin || {
						top: 16,
						right: 16,
						left: 16,
						bottom: 16,
					}
				}
			>
				{showGrid && (
					<CartesianGrid strokeDasharray='3 3' />
				)}
				<XAxis dataKey={labelKey} />
				<YAxis />
				{showTooltip &&
					(renderTooltip ?
						<Tooltip content={renderTooltip} />
					:	<Tooltip />)}
				{showLegend &&
					(renderLegend ?
						<Legend content={renderLegend} />
					:	<Legend />)}
				<Bar
					dataKey={dataKey}
					fill={
						colorList && colorList.length > 0 ?
							colorList[0]
						:	'#8884d8'
					}
					isAnimationActive={animationEnabled}
					animationDuration={animationDuration}
					{...(configuration?.barProps || {})}
				>
					{showLabels && (
						<LabelList dataKey={dataKey} position='top' />
					)}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default BarChartRenderer;
