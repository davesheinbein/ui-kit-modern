import React from 'react';
import {
	ResponsiveContainer,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Radar,
	Tooltip,
	Legend,
} from 'recharts';

interface RadarChartRendererProps {
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

const RadarChartRenderer: React.FC<
	RadarChartRendererProps
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
	// if (!data || data.length === 0) return null;
	return (
		<ResponsiveContainer
			width='100%'
			height={height || 300}
			minHeight={minSize}
		>
			<RadarChart data={data} outerRadius='80%'>
				{showGrid && <PolarGrid />}
				<PolarAngleAxis dataKey={labelKey} />
				<PolarRadiusAxis />
				<Radar
					name={dataKey}
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
					fillOpacity={0.6}
					isAnimationActive={animationEnabled}
					animationDuration={animationDuration}
					{...(configuration?.radarProps || {})}
				/>
				{showTooltip && <Tooltip />}
				{showLegend && <Legend />}
			</RadarChart>
		</ResponsiveContainer>
	);
};

export default RadarChartRenderer;
