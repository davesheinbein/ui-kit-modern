import React from 'react';
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ReferenceLine,
} from 'recharts';

interface ReferenceLineChartRendererProps {
	data: any[];
	dataKey: string;
	labelKey: string;
	colorList: string[];
	height: number | string;
	showGrid: boolean;
	showTooltip: boolean;
	margin?: object;
}

const ReferenceLineChartRenderer: React.FC<
	ReferenceLineChartRendererProps
> = ({
	data,
	dataKey,
	labelKey,
	colorList,
	height,
	showGrid,
	showTooltip,
	margin,
}) => {
	if (!data || data.length === 0) return null;

	return (
		<ResponsiveContainer width='100%' height={height}>
			<LineChart
				data={data}
				margin={
					margin || {
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
				<Line
					type='monotone'
					dataKey={dataKey}
					stroke={colorList[0] || '#8884d8'}
					strokeWidth={2}
					dot
				/>
				<ReferenceLine
					y={100}
					label='Target'
					stroke='#ff7300'
					strokeDasharray='3 3'
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default ReferenceLineChartRenderer;
