import React from 'react';
// Try to import the dedicated SCSS module for RotatingSquareGridBoard, fallback to SquareGridBoard if not present
let styles: any = {};
try {
	styles = require('./RotatingSquareGridBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.scss');
	} catch {}
}

export interface RotatingSquareGridBoardProps {
	grid: any[][];
	rotation?: number;
	cellRenderer?: (
		cell: any,
		rowIdx: number,
		colIdx: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const RotatingSquareGridBoard: React.FC<
	RotatingSquareGridBoardProps
> = ({
	grid = [[]],
	rotation = 0,
	cellRenderer,
	className = '',
	style = {},
	...props
}) => {
	return (
		<div
			className={[styles['square-grid-board'], className]
				.filter(Boolean)
				.join(' ')}
			style={{
				...style,
				transform: `rotate(${rotation}deg)`,
				transition:
					'transform 0.4s cubic-bezier(.4,2,.3,1)',
			}}
			role='grid'
			aria-label='Rotating Square Grid Board'
			{...props}
		>
			<div className={styles['square-grid-board__grid']}>
				{grid.length === 0 ?
					<div
						className={styles['square-grid-board__cell']}
						aria-disabled
					>
						No grid data
					</div>
				:	grid.map((row, rowIdx) => (
						<div
							key={rowIdx}
							className={styles['square-grid-board__row']}
							role='row'
						>
							{Array.isArray(row) && row.length > 0 ?
								row.map((cell, colIdx) => (
									<div
										key={colIdx}
										className={
											styles['square-grid-board__cell']
										}
										role='gridcell'
										aria-label={`Cell ${rowIdx + 1},${colIdx + 1}`}
									>
										{cellRenderer ?
											cellRenderer(cell, rowIdx, colIdx)
										:	cell}
									</div>
								))
							:	<div
									className={
										styles['square-grid-board__cell']
									}
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

export default RotatingSquareGridBoard;
