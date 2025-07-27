import styles from './MazeBoard.module.scss';

export interface MazeBoardProps {
	maze: number[][]; // 0 = path, 1 = wall
	cellRenderer?: (
		cell: number,
		row: number,
		col: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

/**
 * Renders a maze board (2D array of walls and paths)
 */
const MazeBoard: React.FC<MazeBoardProps> = ({
	maze = [],
	cellRenderer = (cell, row, col) => cell,
	className = '',
	style = {},
	...props
}) => {
	// Optionally, highlight start/finish cells if cellRenderer returns a string/emoji
	const isStart = (row: number, col: number) =>
		row === 1 && col === 1;
	const isFinish = (row: number, col: number) =>
		row === maze.length - 2 && col === maze[0].length - 2;

	return (
		<div
			className={`${styles['maze-board'] || 'maze-board'} ${className}`}
			style={style}
			{...props}
		>
			<div
				className={
					styles['maze-board__grid'] || 'maze-board__grid'
				}
			>
				{maze.map((rowArr, rowIdx) => (
					<div
						key={rowIdx}
						className={
							styles['maze-board__row'] || 'maze-board__row'
						}
					>
						{rowArr.map((cell, colIdx) => {
							let cellClass =
								styles['maze-board__cell'] ||
								'maze-board__cell';
							if (cell === 1) {
								cellClass +=
									' ' +
									(styles['maze-board__cell--wall'] ||
										'maze-board__cell--wall');
							} else {
								cellClass +=
									' ' +
									(styles['maze-board__cell--path'] ||
										'maze-board__cell--path');
								if (isStart(rowIdx, colIdx))
									cellClass +=
										' ' +
										(styles['maze-board__cell--start'] ||
											'maze-board__cell--start');
								if (isFinish(rowIdx, colIdx))
									cellClass +=
										' ' +
										(styles['maze-board__cell--finish'] ||
											'maze-board__cell--finish');
							}
							return (
								<div
									key={colIdx}
									className={cellClass}
									tabIndex={cell === 0 ? 0 : -1}
								>
									{cellRenderer(cell, rowIdx, colIdx)}
								</div>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
};

export default MazeBoard;
