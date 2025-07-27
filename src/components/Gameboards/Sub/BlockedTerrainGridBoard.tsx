import React from 'react';

export interface BlockedTerrainGridBoardProps {
	grid: any[];
	blockedCells: number[];
	[key: string]: any;
}

const BlockedTerrainGridBoard: React.FC<
	BlockedTerrainGridBoardProps
> = ({
	grid,
	blockedCells,
	className = '',
	style = {},
	...props
}) => {
	// Assume grid is a 2D array: grid[row][col]
	const numRows = grid.length;
	const numCols = grid[0]?.length || 0;

	return (
		<div
			className={`blocked-terrain-grid-board ${className}`}
			style={{
				display: 'grid',
				gridTemplateRows: `repeat(${numRows}, 1fr)`,
				gridTemplateColumns: `repeat(${numCols}, 1fr)`,
				gap: 2,
				...style,
			}}
			{...props}
		>
			{grid.map((row, rowIdx) =>
				row.map((cell, colIdx) => {
					const cellIndex = rowIdx * numCols + colIdx;
					const isBlocked =
						blockedCells.includes(cellIndex);
					return (
						<div
							key={`cell-${rowIdx}-${colIdx}`}
							className={`grid-cell${isBlocked ? ' blocked' : ''}`}
							style={{
								background: isBlocked ? '#888' : '#fff',
								border: '1px solid #ccc',
								minHeight: 32,
								minWidth: 32,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: isBlocked ? '#fff' : '#222',
								fontWeight: isBlocked ? 'bold' : 'normal',
								opacity: isBlocked ? 0.6 : 1,
								transition: 'opacity 0.2s',
							}}
						>
							{isBlocked ? 'X' : cell}
						</div>
					);
				})
			)}
		</div>
	);
};

export default BlockedTerrainGridBoard;
