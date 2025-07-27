import React from 'react';
let styles: any = {};
try {
	styles = require('./SquareGridBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.scss');
	} catch {}
}

export interface SquareGridBoardProps {
	size: number;
	cells: string[];
	cellRenderer?: (
		cell: string,
		idx: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

const SquareGridBoard: React.FC<SquareGridBoardProps> = ({
	size,
	cells,
	cellRenderer = (cell) => cell,
	className = '',
	style = {},
	...props
}) => {
	const grid = [];
	for (let row = 0; row < size; row++) {
		const rowCells = [];
		for (let col = 0; col < size; col++) {
			const idx = row * size + col;
			rowCells.push(
				<div
					key={col}
					className={
						styles.squareGridBoard__cell ||
						'square-grid-board__cell'
					}
				>
					{cellRenderer(cells[idx] ?? null, idx)}
				</div>
			);
		}
		grid.push(
			<div
				key={row}
				className={
					styles.squareGridBoard__row ||
					'square-grid-board__row'
				}
			>
				{rowCells}
			</div>
		);
	}
	return (
		<div
			className={`${styles.squareGridBoard || 'square-grid-board'} ${className}`.trim()}
			style={style}
			{...props}
		>
			<div
				className={
					styles.squareGridBoard__grid ||
					'square-grid-board__grid'
				}
			>
				{grid}
			</div>
		</div>
	);
};

export default SquareGridBoard;
