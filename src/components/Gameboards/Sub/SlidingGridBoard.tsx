import React from 'react';
let styles: any = {};
try {
	styles = require('./SlidingGridBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.scss');
	} catch {}
}

export interface SlidingGridBoardProps {
	grid: any[][];
	slidingTiles?: Array<{
		row: number;
		col: number;
		value?: any;
		[key: string]: any;
	}>;
	cellRenderer?: (
		cell: any,
		rowIdx: number,
		colIdx: number
	) => React.ReactNode;
	tileRenderer?: (
		tile: any,
		idx: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const SlidingGridBoard: React.FC<SlidingGridBoardProps> = ({
	grid = [[]],
	slidingTiles = [],
	cellRenderer,
	tileRenderer,
	className = '',
	style = {},
	...props
}) => {
	// Helper to check if a cell is a sliding tile
	const isSlidingTile = (rowIdx: number, colIdx: number) =>
		slidingTiles.some(
			(tile) => tile.row === rowIdx && tile.col === colIdx
		);

	return (
		<div
			className={[styles.slidingGridBoard, className]
				.filter(Boolean)
				.join(' ')}
			style={style}
			role='grid'
			aria-label='Sliding Grid Board'
			{...props}
		>
			<div className={styles.slidingGridBoard__grid}>
				{grid.length === 0 ?
					<div
						className={styles.slidingGridBoard__cell}
						aria-disabled
					>
						No grid data
					</div>
				:	grid.map((row, rowIdx) => (
						<div
							key={rowIdx}
							className={styles.slidingGridBoard__row}
							role='row'
						>
							{Array.isArray(row) && row.length > 0 ?
								row.map((cell, colIdx) => {
									const tileIdx = slidingTiles.findIndex(
										(tile) =>
											tile.row === rowIdx &&
											tile.col === colIdx
									);
									return (
										<div
											key={colIdx}
											className={[
												styles.slidingGridBoard__cell,
												isSlidingTile(rowIdx, colIdx) ?
													styles.slidingGridBoard__slidingTile
												:	'',
											]
												.filter(Boolean)
												.join(' ')}
											role='gridcell'
											aria-label={`Cell ${rowIdx + 1},${colIdx + 1}`}
										>
											{(
												isSlidingTile(rowIdx, colIdx) &&
												tileRenderer &&
												tileIdx !== -1
											) ?
												tileRenderer(
													slidingTiles[tileIdx],
													tileIdx
												)
											: cellRenderer ?
												cellRenderer(cell, rowIdx, colIdx)
											:	cell}
										</div>
									);
								})
							:	<div
									className={styles.slidingGridBoard__cell}
									aria-disabled
								>
									Empty row
								</div>
							}
						</div>
					))
				}
			</div>
		</div>
	);
};

export default SlidingGridBoard;
