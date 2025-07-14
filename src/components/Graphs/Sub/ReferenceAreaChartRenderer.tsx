import React from 'react';
import {
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ReferenceArea,
} from 'recharts';

interface ReferenceAreaChartRendererProps {
	data: any[];
	dataKey: string;
	labelKey: string;
	colorList: string[];
	height: number | string;
	showGrid: boolean;
	showTooltip: boolean;
	margin?: object;
}

const ReferenceAreaChartRenderer: React.FC<
	ReferenceAreaChartRendererProps
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
			<AreaChart
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
				<Area
					type='monotone'
					dataKey={dataKey}
					stroke={colorList[0] || '#8884d8'}
					fill={colorList[0] || '#8884d8'}
					fillOpacity={0.3}
				/>
				<ReferenceArea
					x1='Feb'
					x2='Apr'
					stroke='#ff7300'
					fill='#ff7300'
					fillOpacity={0.1}
					label='Highlight'
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default ReferenceAreaChartRenderer;
