import React from 'react';

export interface ColoredMatchGridBoardProps {
	rows: number;
	columns: number;
	colors: string[][];
	onCellClick?: (row: number, col: number) => void;
	className?: string;
	style?: React.CSSProperties;
}

const ColoredMatchGridBoard: React.FC<
	ColoredMatchGridBoardProps
> = ({
	rows,
	columns,
	colors,
	onCellClick,
	className = '',
	style = {},
}) => {
	return (
		<div
			className={`coloredMatchGridBoard ${className}`.trim()}
			style={style}
		>
			<div
				style={{
					display: 'grid',
					gridTemplateRows: `repeat(${rows}, 1fr)`,
					gridTemplateColumns: `repeat(${columns}, 1fr)`,
				}}
			>
				{colors.map((row, rowIdx) =>
					row.map((color, colIdx) => (
						<div
							key={`${rowIdx}-${colIdx}`}
							className='coloredMatchGridBoard__cell'
							onClick={() => onCellClick?.(rowIdx, colIdx)}
							style={{
								background: color,
								border: '1px solid #e5e7eb',
								minHeight: 32,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{/* Color cell */}
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default ColoredMatchGridBoard;
