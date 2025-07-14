import React from 'react';
import type { WrapperProps } from '../Wrapper';

export function getLayoutStyles(
	props: WrapperProps
): React.CSSProperties {
	const {
		layout,
		direction,
		columns,
		rows,
		gap,
		center,
		display,
	} = props;
	let style: React.CSSProperties = {};
	const isFlex =
		layout === 'flex' ||
		display === 'flex' ||
		display === 'inline-flex';
	const isGrid =
		layout === 'grid' ||
		display === 'grid' ||
		display === 'inline-grid';
	if (isFlex) {
		style.display = display || 'flex';
		if (direction) style.flexDirection = direction;
		if (center) {
			style.justifyContent = 'center';
			style.alignItems = 'center';
		}
	} else if (isGrid) {
		style.display = display || 'grid';
		if (direction)
			style.gridAutoFlow =
				direction === 'row' ? 'row' : 'column';
		if (columns)
			style.gridTemplateColumns =
				typeof columns === 'number' ?
					`repeat(${columns}, 1fr)`
				:	columns;
		if (rows)
			style.gridTemplateRows =
				typeof rows === 'number' ?
					`repeat(${rows}, 1fr)`
				:	rows;
		if (center) {
			style.justifyItems = 'center';
			style.alignItems = 'center';
		}
	} else if (display) {
		style.display = display;
	}
	if (gap !== undefined) style.gap = gap;
	return style;
}
