import React from 'react';
import {
	ResponsiveContainer,
	PieChart,
	Pie,
	Cell,
} from 'recharts';
import ChartTooltip from './ChartTooltip';
import CustomTooltip from './CustomTooltip';

interface GaugeChartRendererProps {
	gaugeData: any[];
	colorList: string[];
	height: number | string;
	minSize: number;
	animationEnabled: boolean;
	animationDuration: number;
	showTooltip: boolean;
	labelKey: string;
}

const GaugeChartRenderer: React.FC<
	GaugeChartRendererProps
> = ({
	gaugeData,
	colorList,
	height,
	minSize,
	animationEnabled,
	animationDuration,
	showTooltip,
	labelKey,
}) => (
	<ResponsiveContainer
		width='100%'
		height={height}
		minHeight={minSize}
		minWidth={minSize}
	>
		<PieChart>
			<Pie
				data={gaugeData}
				dataKey='value'
				cx='50%'
				cy='50%'
				startAngle={180}
				endAngle={0}
				innerRadius='60%'
				outerRadius='80%'
				animationDuration={
					animationEnabled ? animationDuration : 0
				}
			>
				<Cell fill={colorList[0]} />
				<Cell fill='#f0f0f0' />
			</Pie>
			{showTooltip && (
				<ChartTooltip
					showTooltip={true}
					content={(props: any) => (
						<CustomTooltip {...props} labelKey={labelKey} />
					)}
				/>
			)}
		</PieChart>
	</ResponsiveContainer>
);

export default GaugeChartRenderer;
