import React from 'react';

export interface ChainReactionGridBoardProps {
	rows: number;
	columns: number;
	chainStates: number[][];
	onTrigger?: (row: number, col: number) => void;
	className?: string;
	style?: React.CSSProperties;
}

const ChainReactionGridBoard: React.FC<
	ChainReactionGridBoardProps
> = ({
	rows,
	columns,
	chainStates,
	onTrigger,
	className = '',
	style = {},
}) => {
	return (
		<div
			className={`chainReactionGridBoard ${className}`.trim()}
			style={style}
		>
			<div
				style={{
					display: 'grid',
					gridTemplateRows: `repeat(${rows}, 1fr)`,
					gridTemplateColumns: `repeat(${columns}, 1fr)`,
				}}
			>
				{chainStates.map((row, rowIdx) =>
					row.map((state, colIdx) => (
						<div
							key={`${rowIdx}-${colIdx}`}
							className='chainReactionGridBoard__cell'
							onClick={() => onTrigger?.(rowIdx, colIdx)}
							style={{
								border: '1px solid #e5e7eb',
								minHeight: 32,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{state > 0 ? state : ''}
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default ChainReactionGridBoard;
