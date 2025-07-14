import React from 'react';
import {
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	LabelList,
} from 'recharts';

interface AreaChartRendererProps {
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

const AreaChartRenderer: React.FC<
	AreaChartRendererProps
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
			<AreaChart
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
				{showTooltip && <Tooltip />}
				{showLegend && <Legend />}
				<Area
					type='monotone'
					dataKey={dataKey}
					stroke={
						colorList && colorList.length > 0 ?
							colorList[0]
						:	'#8884d8'
					}
					fill={
						colorList && colorList.length > 0 ?
							colorList[0]
						:	'#8884d8'
					}
					isAnimationActive={animationEnabled}
					animationDuration={animationDuration}
					{...(configuration?.areaProps || {})}
				>
					{showLabels && (
						<LabelList dataKey={dataKey} position='top' />
					)}
				</Area>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default AreaChartRenderer;
