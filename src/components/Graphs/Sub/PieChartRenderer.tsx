import React from 'react';
import {
	ResponsiveContainer,
	PieChart,
	Pie,
	Cell,
	Tooltip,
	Legend,
	Label,
} from 'recharts';

interface PieChartRendererProps {
	data: any[];
	dataKey: string;
	colorList: string[];
	height: number | string;
	minSize: number;
	showTooltip: boolean;
	showLegend: boolean;
	legendLabels?: string[] | Record<string, string>;
	animationEnabled: boolean;
	animationDuration: number;
	configuration?: Record<string, any>;
	labelKey: string;
	showLabels?: boolean;
	renderTooltip?: (props: any) => React.ReactNode;
	renderLegend?: (props: any) => React.ReactNode;
	renderEmpty?: () => React.ReactNode;
}

const PieChartRenderer: React.FC<PieChartRendererProps> = ({
	data,
	dataKey,
	colorList,
	height,
	minSize,
	showTooltip,
	showLegend,
	legendLabels,
	animationEnabled,
	animationDuration,
	configuration,
	labelKey,
	showLabels,
	renderTooltip,
	renderLegend,
	renderEmpty,
}) => {
	if (!data || data.length === 0) {
		if (renderEmpty) return renderEmpty();
		return <div style={{ color: 'gray', textAlign: 'center', padding: 24 }}>No data available</div>;
	}
	return (
		<ResponsiveContainer
			width='100%'
			height={height || 300}
			minHeight={minSize}
		>
			<PieChart>
				<Pie
					data={data}
					dataKey={dataKey}
					nameKey={labelKey}
					cx='50%'
					cy='50%'
					outerRadius={80}
					fill={
						colorList && colorList.length > 0 ?
							colorList[0]
						:	'#8884d8'
					}
					isAnimationActive={animationEnabled}
					animationDuration={animationDuration}
					label={showLabels}
					{...(configuration?.pieProps || {})}
				>
					{data.map((entry, idx) => (
						<Cell
							key={`cell-${idx}`}
							fill={
								colorList &&
								colorList[idx % colorList.length]
							}
						/>
					))}
				</Pie>
				{showTooltip && (renderTooltip ? <Tooltip content={renderTooltip} /> : <Tooltip />)}
				{showLegend && (renderLegend ? <Legend content={renderLegend} /> : <Legend />)}
			</PieChart>
		</ResponsiveContainer>
	);
};

export default PieChartRenderer;
