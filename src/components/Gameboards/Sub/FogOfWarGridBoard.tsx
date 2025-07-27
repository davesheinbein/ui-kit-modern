import React from 'react';

export interface FogOfWarGridBoardProps {
	grid: any[];
	fogCells: number[];
	[key: string]: any;
}

const FogOfWarGridBoard: React.FC<
	FogOfWarGridBoardProps
> = ({
	grid = [],
	fogCells = [],
	className = '',
	style = {},
	...props
}) => {
	// Render grid with fog overlay on specified cells
	return (
		<div
			className={`fog-of-war-grid-board ${className}`}
			style={style}
			{...props}
		>
			<div className='fog-of-war-grid-board__grid'>
				{grid.map((row: any[], rowIdx: number) => (
					<div
						key={rowIdx}
						className='fog-of-war-grid-board__row'
					>
						{row.map((cell: any, colIdx: number) => {
							const cellIdx = rowIdx * row.length + colIdx;
							const isFogged = fogCells.includes(cellIdx);
							return (
								<div
									key={colIdx}
									className='fog-of-war-grid-board__cell'
									style={{ position: 'relative' }}
								>
									{cell}
									{isFogged && (
										<div
											className='fog-of-war-grid-board__fog'
											style={{
												position: 'absolute',
												inset: 0,
												background: 'rgba(44,44,44,0.7)',
												zIndex: 2,
												borderRadius: 4,
											}}
										/>
									)}
								</div>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
};

export default FogOfWarGridBoard;
