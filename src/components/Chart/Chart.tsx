import React, { forwardRef } from 'react';
import UnifiedChart, {
	UnifiedChartProps,
} from './UnifiedChart';

export interface ChartProps
	extends Omit<UnifiedChartProps, 'kind'> {
	kind?: UnifiedChartProps['kind'];
}

const Chart = forwardRef<HTMLDivElement, ChartProps>(
	(props, ref) => {
		const { kind = 'chart-legend', ...restProps } = props;
		return (
			<UnifiedChart {...restProps} kind={kind} ref={ref} />
		);
	}
);

Chart.displayName = 'Chart';
export default Chart;
