import React from 'react';
import {
	ResponsiveContainer,
	ComposedChart,
	Bar,
	Line,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

interface ComposedChartRendererProps {
	data: any[];
	dataKey: string;
	colorList: string[];
	height: number | string;
	minSize: number;
	showGrid: boolean;
	showTooltip: boolean;
	showLegend: boolean;
	legendLabels?: string[] | Record<string, string>;
	animationEnabled?: boolean;
	animationDuration?: number;
	margin?: object;
	defaultMargin?: object;
	configuration?: any;
	labelKey?: string;
	showLabels?: boolean;
}

const ComposedChartRenderer: React.FC<
	ComposedChartRendererProps
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
	animationEnabled = true,
	animationDuration = 800,
	margin,
	defaultMargin,
	configuration = {},
	labelKey = 'name',
	showLabels = true,
}) => {
	if (!data || data.length === 0) return null;
	const series = configuration.series || [];
	return (
		<ResponsiveContainer
			width='100%'
			height={height}
			minHeight={minSize}
		>
			<ComposedChart
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
				<XAxis dataKey={labelKey} />
				<YAxis />
				{showGrid && (
					<CartesianGrid strokeDasharray='3 3' />
				)}
				{showTooltip && <Tooltip />}
				{showLegend && <Legend />}
				{series.map((s: any, idx: number) => {
					const key = s.dataKey;
					const color = colorList[idx % colorList.length];
					if (s.type === 'bar') {
						return (
							<Bar
								key={key}
								dataKey={key}
								fill={color}
								isAnimationActive={animationEnabled}
								animationDuration={animationDuration}
								{...(s.props || {})}
							/>
						);
					}
					if (s.type === 'line') {
						return (
							<Line
								key={key}
								dataKey={key}
								stroke={color}
								isAnimationActive={animationEnabled}
								animationDuration={animationDuration}
								dot={false}
								{...(s.props || {})}
							/>
						);
					}
					if (s.type === 'area') {
						return (
							<Area
								key={key}
								dataKey={key}
								stroke={color}
								fill={color}
								isAnimationActive={animationEnabled}
								animationDuration={animationDuration}
								{...(s.props || {})}
							/>
						);
					}
					return null;
				})}
			</ComposedChart>
		</ResponsiveContainer>
	);
};

export default ComposedChartRenderer;
