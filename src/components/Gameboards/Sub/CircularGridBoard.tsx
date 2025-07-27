import React from 'react';
// Optional: import styles if available
let styles: any = {};
try {
	styles = require('./CircularGridBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.scss');
	} catch {
		styles = {};
	}
}

export interface CircularGridCell {
	value?: any;
	ring: number;
	slice: number;
	label?: string;
}

export interface CircularGridBoardProps {
	rings: number;
	slices: number;
	cells?: CircularGridCell[][];
	cellRenderer?: (
		cell: CircularGridCell,
		ringIdx: number,
		sliceIdx: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const CircularGridBoard: React.FC<
	CircularGridBoardProps
> = ({
	rings,
	slices,
	cells = Array.from({ length: rings }, (_, ring) =>
		Array.from({ length: slices }, (_, slice) => ({
			ring,
			slice,
		}))
	),
	cellRenderer = (cell) => cell.value,
	className = '',
	style = {},
	...props
}) => {
	const radius = 100;
	const ringWidth = radius / rings;
	const sliceAngle = (2 * Math.PI) / slices;
	return (
		<svg
			className={
				styles?.circularGridBoard ||
				`circular-grid-board ${className}`.trim()
			}
			style={style}
			width={2 * radius}
			height={2 * radius}
			viewBox={`0 0 ${2 * radius} ${2 * radius}`}
			{...props}
		>
			{cells.map((ringArr, ringIdx) =>
				ringArr.map((cell, sliceIdx) => {
					const r1 = ringIdx * ringWidth;
					const r2 = (ringIdx + 1) * ringWidth;
					const a1 = sliceIdx * sliceAngle;
					const a2 = (sliceIdx + 1) * sliceAngle;
					const x1 = radius + r1 * Math.cos(a1);
					const y1 = radius + r1 * Math.sin(a1);
					const x2 = radius + r2 * Math.cos(a1);
					const y2 = radius + r2 * Math.sin(a1);
					const x3 = radius + r2 * Math.cos(a2);
					const y3 = radius + r2 * Math.sin(a2);
					const x4 = radius + r1 * Math.cos(a2);
					const y4 = radius + r1 * Math.sin(a2);
					return (
						<g key={`ring${ringIdx}-slice${sliceIdx}`}>
							<polygon
								points={`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`}
								fill='#f3f4f6'
								stroke='#d1d5db'
							/>
							<text
								x={
									radius +
									((r1 + r2) / 2) * Math.cos((a1 + a2) / 2)
								}
								y={
									radius +
									((r1 + r2) / 2) * Math.sin((a1 + a2) / 2)
								}
								fontSize='10'
								textAnchor='middle'
								alignmentBaseline='middle'
								fill='#6b7280'
							>
								{cellRenderer(cell, ringIdx, sliceIdx)}
							</text>
						</g>
					);
				})
			)}
		</svg>
	);
};

export default CircularGridBoard;
