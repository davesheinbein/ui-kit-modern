import React from 'react';
import {
	Tooltip as RechartsTooltip,
	TooltipProps as RechartsTooltipProps,
} from 'recharts';

interface ChartTooltipProps
	extends Partial<RechartsTooltipProps<any, any>> {
	showTooltip?: boolean;
}

const ChartTooltip: React.FC<ChartTooltipProps> = ({
	showTooltip,
	...rest
}) => (showTooltip ? <RechartsTooltip {...rest} /> : null);

export default ChartTooltip;
