import React from 'react';

export interface GridWithBombsTrapsBoardProps {
	rows: number;
	columns: number;
	bombs: boolean[][];
	revealed: boolean[][];
	onCellClick?: (row: number, col: number) => void;
	className?: string;
	style?: React.CSSProperties;
}

const GridWithBombsTrapsBoard: React.FC<
	GridWithBombsTrapsBoardProps
> = ({
	rows,
	columns,
	bombs,
	revealed,
	onCellClick,
	className = '',
	style = {},
}) => {
	return (
		<div
			className={`gridWithBombsTrapsBoard ${className}`.trim()}
			style={style}
		>
			<div
				style={{
					display: 'grid',
					gridTemplateRows: `repeat(${rows}, 1fr)`,
					gridTemplateColumns: `repeat(${columns}, 1fr)`,
				}}
			>
				{bombs.map((row, rowIdx) =>
					row.map((hasBomb, colIdx) => (
						<div
							key={`${rowIdx}-${colIdx}`}
							className={`gridWithBombsTrapsBoard__cell${revealed[rowIdx][colIdx] ? ' gridWithBombsTrapsBoard__cell--revealed' : ''}`}
							onClick={() => onCellClick?.(rowIdx, colIdx)}
							style={{
								border: '1px solid #e5e7eb',
								minHeight: 32,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{revealed[rowIdx][colIdx] ?
								hasBomb ?
									'💣'
								:	''
							:	''}
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default GridWithBombsTrapsBoard;
