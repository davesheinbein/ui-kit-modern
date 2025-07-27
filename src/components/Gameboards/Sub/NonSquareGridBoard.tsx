import React from 'react';

export interface NonSquareGridBoardProps {
	shape?: 'diamond' | 'L' | 'T' | 'trapezoid' | 'rhombus';
	cells?: any[];
	className?: string;
	style?: React.CSSProperties;
	cellRenderer?: (
		cell: any,
		idx: number
	) => React.ReactNode;
}

import './NonSquareGridBoard.module.scss';

function getGridTemplate(
	shape: string,
	cells: any[]
): string {
	switch (shape) {
		case 'diamond':
			return 'repeat(5, 1fr) / repeat(5, 1fr)';
		case 'L':
			return 'repeat(4, 1fr) / repeat(3, 1fr)';
		case 'T':
			return 'repeat(3, 1fr) / repeat(5, 1fr)';
		case 'trapezoid':
			return 'repeat(4, 1fr) / repeat(6, 1fr)';
		case 'rhombus':
			return 'repeat(6, 1fr) / repeat(6, 1fr)';
		default:
			return 'repeat(4, 1fr) / repeat(4, 1fr)';
	}
}

const NonSquareGridBoard: React.FC<
	NonSquareGridBoardProps
> = ({
	shape = 'diamond',
	cells = [],
	className = '',
	style = {},
	cellRenderer,
}) => {
	const gridTemplate = getGridTemplate(shape, cells);
	return (
		<div
			className={`nonSquareGridBoard nonSquareGridBoard--${shape} ${className}`.trim()}
			style={style}
		>
			<div
				className='nonSquareGridBoard__grid'
				style={{
					display: 'grid',
					gridTemplate: gridTemplate,
					gap: 8,
				}}
			>
				{cells.map((cell, idx) => (
					<div
						key={idx}
						className={`nonSquareGridBoard__cell${cell.blocked ? ' nonSquareGridBoard__cell--blocked' : ''}`}
						style={{
							width: 40,
							height: 40,
							background: cell.color || '#f3f8ff',
							border: '1px solid #b3b3b3',
							borderRadius: 4,
							opacity: cell.blocked ? 0.4 : 1,
						}}
					>
						{cellRenderer ?
							cellRenderer(cell, idx)
						:	cell.label || idx}
					</div>
				))}
			</div>
		</div>
	);
};

export default NonSquareGridBoard;
