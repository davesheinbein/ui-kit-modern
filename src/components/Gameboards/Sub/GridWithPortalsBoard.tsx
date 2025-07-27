import React from 'react';

export interface GridWithPortalsBoardProps {
	rows: number;
	columns: number;
	portals: {
		from: [number, number];
		to: [number, number];
	}[];
	cells?: any[];
	cellRenderer?: (
		cell: any,
		row: number,
		col: number,
		portal?: { to: [number, number] }
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

/**
 * Renders a grid with portal tiles connecting distant positions
 */
const GridWithPortalsBoard: React.FC<
	GridWithPortalsBoardProps
> = ({
	rows,
	columns,
	portals = [],
	cells = [],
	cellRenderer = (cell, row, col, portal) => cell,
	className = '',
	style = {},
	...props
}) => {
	// Create a lookup for portal positions
	const portalMap = new Map(
		portals.map((p) => [`${p.from[0]},${p.from[1]}`, p])
	);
	const grid = [];
	for (let row = 0; row < rows; row++) {
		const rowCells = [];
		for (let col = 0; col < columns; col++) {
			const key = `${row},${col}`;
			const portal = portalMap.get(key);
			const idx = row * columns + col;
			rowCells.push(
				<div
					key={col}
					className={`grid-with-portals-board__cell${portal ? ' grid-with-portals-board__cell--portal' : ''}`}
				>
					{cellRenderer(
						cells[idx] ?? null,
						row,
						col,
						portal
					)}
				</div>
			);
		}
		grid.push(
			<div
				key={row}
				className='grid-with-portals-board__row'
			>
				{rowCells}
			</div>
		);
	}
	return (
		<div
			className={`grid-with-portals-board ${className}`}
			style={style}
			{...props}
		>
			<div className='grid-with-portals-board__grid'>
				{grid}
			</div>
		</div>
	);
};

export default GridWithPortalsBoard;
