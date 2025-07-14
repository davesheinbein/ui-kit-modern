import React from 'react';
import { Legend as RechartsLegend } from 'recharts';

interface ChartLegendProps {
	showLegend?: boolean;
	legendLabels?: string[] | Record<string, string>;
}

const ChartLegend: React.FC<ChartLegendProps> = ({
	showLegend,
	legendLabels,
}) =>
	showLegend ?
		<RechartsLegend
			payload={
				legendLabels ?
					Array.isArray(legendLabels) ?
						legendLabels.map((label, i) => ({
							value: label,
							type: 'line',
							id: String(i),
						}))
					:	Object.entries(legendLabels).map(
							([key, value]) => ({
								value,
								id: String(key),
								type: 'line',
							})
						)

				:	undefined
			}
		/>
	:	null;

export default ChartLegend;
