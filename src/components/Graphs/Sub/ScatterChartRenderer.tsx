import React from 'react';
import {
	ResponsiveContainer,
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

interface ScatterChartRendererProps {
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
}

const ScatterChartRenderer: React.FC<
	ScatterChartRendererProps
> = ({
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
}) => {
	if (!data || data.length === 0) return null;
	return (
		<ResponsiveContainer
			width='100%'
			height={height || 300}
			minHeight={minSize}
		>
			<ScatterChart
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
				{showGrid && <CartesianGrid />}
				<XAxis dataKey={labelKey} name={labelKey} />
				<YAxis dataKey={dataKey} name={dataKey} />
				{showTooltip && <Tooltip />}
				{showLegend && <Legend />}
				<Scatter
					name={dataKey}
					data={data}
					fill={
						colorList && colorList.length > 0 ?
							colorList[0]
						:	'#8884d8'
					}
					isAnimationActive={animationEnabled}
					animationDuration={animationDuration}
					{...(configuration?.scatterProps || {})}
				/>
			</ScatterChart>
		</ResponsiveContainer>
	);
};

export default ScatterChartRenderer;
