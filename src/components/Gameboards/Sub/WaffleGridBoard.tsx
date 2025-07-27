import React from 'react';
import styles from './WaffleGridBoard.module.scss';

export interface WaffleGridBoardProps {
	rows: number;
	columns: number;
	blockedCells?: number[];
	cells?: any[];
	cellRenderer?: (
		row: number,
		column: number,
		cellData?: any
	) => React.ReactNode;
}

const WaffleGridBoard: React.FC<WaffleGridBoardProps> = ({
	rows = 5,
	columns = 5,
	blockedCells = [],
	cells = [],
	cellRenderer,
}) => {
	// Build grid data
	const totalCells = rows * columns;
	// If cells is not provided or too short, fill with nulls
	const gridCells = Array.from(
		{ length: totalCells },
		(_, i) => cells[i] ?? null
	);

	// Default cellRenderer: show index or cellData
	const renderCell = (
		row: number,
		col: number,
		cellData: any
	) => {
		if (typeof cellRenderer === 'function') {
			return cellRenderer(row, col, cellData);
		}
		if (cellData == null) return row * columns + col + 1;
		if (typeof cellData === 'object') {
			if (Array.isArray(cellData))
				return cellData.join(', ');
			if (React.isValidElement(cellData)) return cellData;
			return (
				<span style={{ fontSize: '0.8em', color: '#888' }}>
					{JSON.stringify(cellData)}
				</span>
			);
		}
		return String(cellData);
	};

	return (
		<div
			className={
				styles.waffleGridBoard || 'waffle-grid-board'
			}
			style={{
				display: 'grid',
				gridTemplateRows: `repeat(${rows}, 1fr)`,
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: 4,
				maxWidth: columns * 48,
				margin: '0 auto',
				background: '#f8fafc',
				borderRadius: 8,
				padding: 8,
			}}
			role='grid'
			aria-label='Waffle grid board'
		>
			{Array.from({ length: rows }).map((_, rowIdx) =>
				Array.from({ length: columns }).map((_, colIdx) => {
					const idx = rowIdx * columns + colIdx;
					const isBlocked = blockedCells.includes(idx);
					return (
						<div
							key={`${rowIdx}-${colIdx}`}
							className={
								(styles.waffleGridCell ||
									'waffle-grid-board__cell') +
								(isBlocked ? ' blocked' : '')
							}
							role='gridcell'
							aria-label={`Cell ${idx + 1}${isBlocked ? ' (blocked)' : ''}`}
							tabIndex={0}
							style={{
								width: 40,
								height: 40,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								background: isBlocked ? '#d1d5db' : '#fff',
								border: '1px solid #d1d5db',
								borderRadius: 4,
								color: isBlocked ? '#888' : '#111',
								opacity: isBlocked ? 0.5 : 1,
								fontWeight: 500,
								fontSize: 16,
								userSelect: 'none',
							}}
						>
							{renderCell(rowIdx, colIdx, gridCells[idx])}
						</div>
					);
				})
			)}
		</div>
	);
};

export default WaffleGridBoard;
