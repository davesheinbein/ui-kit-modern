import React from 'react';

export interface ElevationGridBoardProps {
	grid: any[];
	elevationMarkers: any[];
	[key: string]: any;
}

const ElevationGridBoard: React.FC<
	ElevationGridBoardProps
> = ({ grid, elevationMarkers, ...props }) => {
	// Render grid with elevation markers
	// Assume grid is 2D array, elevationMarkers is array of {row, col, value}
	const rows = grid.length;
	const cols = grid[0]?.length || 0;
	return (
		<div
			className='elevation-grid-board'
			style={{ display: 'inline-block', padding: 8 }}
			{...props}
		>
			<div
				className='elevation-grid-board__grid'
				style={{
					display: 'grid',
					gridTemplateColumns: `repeat(${cols}, 1fr)`,
					gap: 4,
				}}
			>
				{grid.map((row: any[], rowIdx: number) =>
					row.map((cell: any, colIdx: number) => {
						const marker = elevationMarkers?.find(
							(m: any) =>
								m.row === rowIdx && m.col === colIdx
						);
						return (
							<div
								key={`${rowIdx}-${colIdx}`}
								className='elevation-grid-board__cell'
								style={{
									position: 'relative',
									background: '#f8fafc',
									borderRadius: 6,
									minHeight: 40,
									border: '1px solid #e2e8f0',
								}}
							>
								{cell}
								{marker && (
									<span
										className='elevation-grid-board__marker'
										style={{
											position: 'absolute',
											top: 4,
											right: 6,
											background: '#e0e7ff',
											color: '#3730a3',
											borderRadius: 4,
											padding: '2px 6px',
											fontSize: 12,
										}}
									>
										{marker.value}
									</span>
								)}
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default ElevationGridBoard;
