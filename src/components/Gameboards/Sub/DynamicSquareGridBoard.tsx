import React from 'react';

export interface DynamicSquareGridBoardProps {
	size: number;
	cells: number[][];
	onCellMerge?: (row: number, col: number) => void;
	className?: string;
	style?: React.CSSProperties;
}

const DynamicSquareGridBoard: React.FC<
	DynamicSquareGridBoardProps
> = ({
	size,
	cells,
	onCellMerge,
	className = '',
	style = {},
}) => {
	return (
		<div
			className={`dynamicSquareGridBoard ${className}`.trim()}
			style={style}
		>
			<div
				style={{
					display: 'grid',
					gridTemplateRows: `repeat(${size}, 1fr)`,
					gridTemplateColumns: `repeat(${size}, 1fr)`,
				}}
			>
				{cells.map((row, rowIdx) =>
					row.map((cell, colIdx) => (
						<div
							key={`${rowIdx}-${colIdx}`}
							className='dynamicSquareGridBoard__cell'
							onClick={() => onCellMerge?.(rowIdx, colIdx)}
							style={{
								border: '1px solid #e5e7eb',
								minHeight: 32,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{cell > 0 ? cell : ''}
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default DynamicSquareGridBoard;
