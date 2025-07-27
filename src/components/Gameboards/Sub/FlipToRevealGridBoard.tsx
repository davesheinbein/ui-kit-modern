import React from 'react';

export interface FlipToRevealGridBoardProps {
	rows: number;
	columns: number;
	flipped: boolean[][];
	onFlip?: (row: number, col: number) => void;
	className?: string;
	style?: React.CSSProperties;
}

const FlipToRevealGridBoard: React.FC<
	FlipToRevealGridBoardProps
> = ({
	rows,
	columns,
	flipped,
	onFlip,
	className = '',
	style = {},
}) => {
	return (
		<div
			className={`flipToRevealGridBoard ${className}`.trim()}
			style={style}
		>
			<div
				style={{
					display: 'grid',
					gridTemplateRows: `repeat(${rows}, 1fr)`,
					gridTemplateColumns: `repeat(${columns}, 1fr)`,
				}}
			>
				{flipped.map((row, rowIdx) =>
					row.map((isFlipped, colIdx) => (
						<div
							key={`${rowIdx}-${colIdx}`}
							className={`flipToRevealGridBoard__cell${isFlipped ? ' flipToRevealGridBoard__cell--flipped' : ''}`}
							onClick={() => onFlip?.(rowIdx, colIdx)}
							style={{
								border: '1px solid #e5e7eb',
								minHeight: 32,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{isFlipped ? '🔍' : ''}
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default FlipToRevealGridBoard;
