import React from 'react';
import clsx from 'clsx';
import styles from './MazeBoard.module.scss';

export interface MazePathBoardProps {
	maze: Array<Array<'wall' | 'path' | string>>;
	cellRenderer?: (
		cell: string,
		rowIdx: number,
		colIdx: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	highlightPath?: Array<[number, number]>; // Optional: highlight solution/path
	[key: string]: any;
}

const MazePathBoard: React.FC<MazePathBoardProps> = ({
	maze = [],
	cellRenderer,
	className = '',
	style = {},
	highlightPath = [],
	...props
}) => {
	// Defensive: handle empty maze
	if (!Array.isArray(maze) || maze.length === 0) {
		return (
			<div
				className={clsx(styles['maze-board'], className)}
				style={style}
			>
				No maze data
			</div>
		);
	}

	// Build a Set for highlightPath for fast lookup
	const highlightSet = new Set(
		highlightPath.map(([r, c]) => `${r},${c}`)
	);

	return (
		<div
			className={clsx(styles['maze-board'], className)}
			style={style}
			role='grid'
			aria-label='Maze Board'
			{...props}
		>
			<div className={styles['maze-board__grid']}>
				{maze.map((row, rowIdx) => (
					<div
						key={rowIdx}
						className={styles['maze-board__row']}
						role='row'
					>
						{row.map((cell, colIdx) => {
							const isWall = cell === 'wall';
							const isPath = cell === 'path';
							const isHighlight = highlightSet.has(
								`${rowIdx},${colIdx}`
							);
							const cellClass = clsx(
								styles['maze-board__cell'],
								isWall && styles['maze-board__cell--wall'],
								isPath && styles['maze-board__cell--path'],
								isHighlight &&
									styles['maze-board__cell--highlight']
							);
							return (
								<div
									key={colIdx}
									className={cellClass}
									role='gridcell'
									aria-label={
										isWall ? 'Wall'
										: isPath ?
											'Path'
										:	cell
									}
									tabIndex={isPath ? 0 : -1}
								>
									{cellRenderer ?
										cellRenderer(cell, rowIdx, colIdx)
									: isWall ?
										''
									: isPath ?
										''
									:	cell}
								</div>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
};

export default MazePathBoard;
