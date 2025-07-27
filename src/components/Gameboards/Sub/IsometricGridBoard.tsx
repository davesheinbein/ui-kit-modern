import React from 'react';
import clsx from 'clsx';
import styles from './IsometricCubeGridBoard.module.scss';

export interface IsometricGridBoardProps {
	rows?: number;
	columns?: number;
	cells?: any[][];
	cellRenderer?: (
		cell: any,
		x: number,
		y: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	cellSize?: number;
	colors?: string[];
	labels?: string[][];
	[key: string]: any;
}

const DEFAULT_SIZE = 40;

function getIsometricCellPosition(
	x: number,
	y: number,
	size: number
) {
	// Diamond-shaped isometric projection
	return {
		left: (x - y) * (size / 2),
		top: (x + y) * (size / 4),
	};
}

const IsometricGridBoard: React.FC<
	IsometricGridBoardProps
> = ({
	rows = 5,
	columns = 5,
	cells,
	cellRenderer = (cell) => cell?.label || '',
	className = '',
	style = {},
	cellSize = DEFAULT_SIZE,
	colors = [],
	labels = [],
	...props
}) => {
	// If cells not provided, generate empty grid
	const grid =
		cells ||
		Array.from({ length: rows }, (_, y) =>
			Array.from({ length: columns }, (_, x) => ({
				label: labels[y]?.[x] || '',
				color: colors[y]?.[x] || undefined,
			}))
		);

	// Calculate board size for container
	const boardWidth = (columns + rows) * (cellSize / 2);
	const boardHeight = (columns + rows) * (cellSize / 2);

	return (
		<div
			className={clsx(
				styles.isometricCubeGridBoard,
				className
			)}
			style={{
				position: 'relative',
				width: boardWidth,
				height: boardHeight,
				...style,
			}}
			{...props}
		>
			{grid.map((row, y) =>
				row.map((cell, x) => {
					const { left, top } = getIsometricCellPosition(
						x,
						y,
						cellSize
					);
					return (
						<div
							key={`cell-${x}-${y}`}
							className={
								styles.isometricCubeGridBoard__cell
							}
							style={{
								position: 'absolute',
								left,
								top,
								width: cellSize,
								height: cellSize,
								background:
									cell.color || 'var(--board-bg, #e0e7ef)',
								border: '1px solid #cbd5e1',
								borderRadius: 4,
								boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontWeight: 500,
								fontSize: 14,
								userSelect: 'none',
								cursor: 'pointer',
							}}
							tabIndex={0}
							aria-label={cell.label}
						>
							{cellRenderer(cell, x, y)}
						</div>
					);
				})
			)}
		</div>
	);
};

export default IsometricGridBoard;
