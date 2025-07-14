import React from 'react';
import CustomTooltip from './CustomTooltip';

export function getRenderTooltip(
	tooltipRenderer: any,
	labelKey: string
) {
	return tooltipRenderer ?
			(props: any) => tooltipRenderer(props)
		:	(props: any) => (
				<CustomTooltip {...props} labelKey={labelKey} />
			);
}
