import React from 'react';
import {
	ResponsiveContainer,
	FunnelChart,
	Funnel,
	Tooltip,
	LabelList,
	Legend,
} from 'recharts';

interface FunnelChartRendererProps {
	data: any[];
	dataKey: string;
	colorList: string[];
	height: number | string;
	minSize: number;
	showTooltip: boolean;
	showLegend: boolean;
	legendLabels?: string[] | Record<string, string>;
	animationEnabled?: boolean;
	animationDuration?: number;
	configuration?: any;
	labelKey?: string;
	showLabels?: boolean;
}

const FunnelChartRenderer: React.FC<
	FunnelChartRendererProps
> = ({
	data,
	dataKey,
	colorList,
	height,
	minSize,
	showTooltip,
	showLegend,
	legendLabels,
	animationEnabled = true,
	animationDuration = 800,
	configuration = {},
	labelKey = 'name',
	showLabels = true,
}) => {
	if (!data || data.length === 0) return null;
	return (
		<ResponsiveContainer
			width='100%'
			height={height}
			minHeight={minSize}
		>
			<FunnelChart>
				<Funnel
					dataKey={dataKey}
					data={data}
					isAnimationActive={animationEnabled}
					animationDuration={animationDuration}
					{...(configuration.funnelProps || {})}
				>
					{showLabels && (
						<LabelList
							dataKey={labelKey}
							position='right'
						/>
					)}
				</Funnel>
				{showTooltip && <Tooltip />}
				{showLegend && <Legend />}
			</FunnelChart>
		</ResponsiveContainer>
	);
};

export default FunnelChartRenderer;
