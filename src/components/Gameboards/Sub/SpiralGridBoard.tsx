import React from 'react';
let styles: any = {};
try {
	styles = require('./SpiralGridBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.scss');
	} catch {
		styles = {};
	}
}

export interface SpiralGridBoardProps {
	cells: any[];
	[key: string]: any;
}

const SVG_SIZE = 480;
const CELL_RADIUS = 24;
const SPIRAL_TURNS = 2.5;
const SPIRAL_SPACING = 32;
const CELL_COLOR = '#6366f1';
const LABEL_COLOR = '#111827';

function getSpiralPosition(
	index: number,
	total: number
): { x: number; y: number } {
	// Place cells along a spiral curve
	const theta =
		(2 * Math.PI * SPIRAL_TURNS * index) /
		Math.max(1, total - 1);
	const r = SPIRAL_SPACING * (1 + index);
	const cx = SVG_SIZE / 2 + r * Math.cos(theta);
	const cy = SVG_SIZE / 2 + r * Math.sin(theta);
	return { x: cx, y: cy };
}

const SpiralGridBoard: React.FC<SpiralGridBoardProps> = ({
	cells = [],
	className = '',
	style = {},
	showLabels = true,
	cellRenderer,
	...props
}) => {
	const positions = cells.map((cell: any, i: number) => ({
		...cell,
		...getSpiralPosition(i, cells.length),
	}));

	return (
		<div
			className={[styles.spiralGridBoard || '', className]
				.join(' ')
				.trim()}
			style={style}
			role='group'
			aria-label='Spiral Grid Board'
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				className={styles.spiralGridBoard__svg || ''}
				aria-hidden='false'
			>
				{/* Render spiral cells */}
				{positions.map((cell: any, i: number) => (
					<g key={cell.id || i}>
						<circle
							cx={cell.x}
							cy={cell.y}
							r={cell.radius || CELL_RADIUS}
							fill={cell.color || CELL_COLOR}
							stroke='#fff'
							strokeWidth={2}
							className={styles.spiralGridBoard__cell || ''}
							tabIndex={0}
							aria-label={cell.label || `Cell ${i + 1}`}
						/>
						{cellRenderer ?
							cellRenderer(cell, i, positions)
						:	showLabels && (
								<text
									x={cell.x}
									y={
										cell.y +
										(cell.radius || CELL_RADIUS) +
										18
									}
									textAnchor='middle'
									fontSize={16}
									fill={LABEL_COLOR}
									className={
										styles.spiralGridBoard__label || ''
									}
									aria-hidden='true'
								>
									{cell.label || `Cell ${i + 1}`}
								</text>
							)
						}
					</g>
				))}
			</svg>
		</div>
	);
};

export default SpiralGridBoard;
