import React from 'react';
import {
	ResponsiveContainer,
	Treemap,
	Cell,
} from 'recharts';
import ChartTooltip from './ChartTooltip';
import CustomTooltip from './CustomTooltip';

interface TreemapChartRendererProps {
	data: any[];
	dataKey: string;
	colorList: string[];
	height: number | string;
	minSize: number;
	wideMinWidth: number;
	usesXAxis: boolean;
	animationEnabled: boolean;
	animationDuration: number;
	configuration?: Record<string, any>;
	showTooltip: boolean;
	labelKey: string;
	showGrid?: boolean;
	margin?: object;
	defaultMargin: object;
}

const TreemapChartRenderer: React.FC<
	TreemapChartRendererProps
> = ({
	data,
	dataKey,
	colorList,
	height,
	minSize,
	wideMinWidth,
	usesXAxis,
	animationEnabled,
	animationDuration,
	configuration,
	showTooltip,
	labelKey,
}) => (
	<ResponsiveContainer
		width='100%'
		height={height || 320}
		minHeight={minSize}
		minWidth={usesXAxis ? wideMinWidth : minSize}
	>
		<Treemap
			data={data}
			dataKey={dataKey}
			aspectRatio={4 / 3}
			stroke='#fff'
			fill={colorList[0]}
			animationDuration={
				animationEnabled ? animationDuration : 0
			}
			{...(configuration?.treemapProps || {})}
		>
			{data.map((entry: any, idx: number) => (
				<Cell
					key={`cell-${idx}`}
					fill={colorList[idx % colorList.length]}
				/>
			))}
			{showTooltip && (
				<ChartTooltip
					showTooltip={true}
					content={(props: any) => (
						<CustomTooltip {...props} labelKey={labelKey} />
					)}
				/>
			)}
		</Treemap>
	</ResponsiveContainer>
);

export default TreemapChartRenderer;
