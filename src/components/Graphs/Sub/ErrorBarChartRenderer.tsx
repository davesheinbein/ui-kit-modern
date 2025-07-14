import React from 'react';
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	ErrorBar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from 'recharts';

interface ErrorBarChartRendererProps {
	data: any[];
	dataKey: string;
	colorList: string[];
	height: number | string;
	showGrid: boolean;
	showTooltip: boolean;
	margin?: object;
	labelKey: string;
}

const ErrorBarChartRenderer: React.FC<
	ErrorBarChartRendererProps
> = ({
	data,
	dataKey,
	colorList,
	height,
	showGrid,
	showTooltip,
	margin,
	labelKey,
}) => {
	if (!data || data.length === 0) return null;
	return (
		<ResponsiveContainer width='100%' height={height}>
			<BarChart
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
				<Bar
					dataKey={dataKey}
					fill={colorList[0] || '#8884d8'}
				>
					<ErrorBar
						dataKey='error'
						width={4}
						stroke={colorList[1] || '#ff7300'}
						direction='y'
					/>
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default ErrorBarChartRenderer;
