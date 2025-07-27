import React from 'react';
let styles: any = {};
try {
	styles = require('./RectangularGridBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.scss');
	} catch {
		styles = {};
	}
}

export interface RectangularGridBoardProps {
	rows: number;
	columns: number;
	cells?: any[][];
	cellRenderer?: (
		cell: any,
		rowIdx: number,
		colIdx: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const RectangularGridBoard: React.FC<
	RectangularGridBoardProps
> = ({
	rows,
	columns,
	cells = Array.from({ length: rows }, () =>
		Array(columns).fill(null)
	),
	cellRenderer = (cell, rowIdx, colIdx) => cell,
	className = '',
	style = {},
	...props
}) => {
	return (
		<div
			className={`${styles?.rectangularGridBoard || 'rectangularGridBoard'} ${className}`.trim()}
			style={{
				display: 'grid',
				gridTemplateRows: `repeat(${rows}, 1fr)`,
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: 4,
				maxWidth: columns * 56,
				margin: '0 auto',
				...style,
			}}
			role='grid'
			aria-label='Rectangular grid board'
			{...props}
		>
			{cells.map((rowCells, rowIdx) =>
				rowCells.map((cell, colIdx) => (
					<div
						key={`${rowIdx}-${colIdx}`}
						className={
							styles?.rectangularGridBoard__cell ||
							'rectangularGridBoard__cell'
						}
						role='gridcell'
						aria-rowindex={rowIdx + 1}
						aria-colindex={colIdx + 1}
						tabIndex={0}
					>
						{cellRenderer(cell, rowIdx, colIdx)}
					</div>
				))
			)}
		</div>
	);
};

export default RectangularGridBoard;
