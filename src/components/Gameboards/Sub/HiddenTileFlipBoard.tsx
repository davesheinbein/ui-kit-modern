import React from 'react';

export interface HiddenTileFlipBoardProps {
	grid: any[];
	hiddenTiles: number[];
	[key: string]: any;
}

const TILE_SIZE = 48;
const HiddenTileFlipBoard: React.FC<
	HiddenTileFlipBoardProps
> = ({
	grid = [],
	hiddenTiles = [],
	className = '',
	style = {},
	onTileFlip,
	...props
}) => {
	// grid: 2D array of tile values
	// hiddenTiles: array of indices (flattened) that are hidden
	const rows = grid.length;
	const cols = grid[0]?.length || 0;
	return (
		<div
			className={`hidden-tile-flip-board ${className}`.trim()}
			style={{
				display: 'grid',
				gridTemplateRows: `repeat(${rows}, ${TILE_SIZE}px)`,
				gridTemplateColumns: `repeat(${cols}, ${TILE_SIZE}px)`,
				gap: 8,
				...style,
			}}
			{...props}
		>
			{grid.flat().map((tile, idx) => {
				const isHidden = hiddenTiles.includes(idx);
				return (
					<div
						key={idx}
						className={`hidden-tile-flip-board__tile${isHidden ? ' hidden' : ''}`}
						style={{
							width: TILE_SIZE,
							height: TILE_SIZE,
							background: isHidden ? '#d1d5db' : '#fff',
							border: '2px solid #e5e7eb',
							borderRadius: 8,
							boxShadow:
								isHidden ? 'none' : (
									'0 2px 8px rgba(0,0,0,0.08)'
								),
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: isHidden ? 'pointer' : 'default',
							transition:
								'background 0.3s, box-shadow 0.3s',
							fontSize: 20,
							fontWeight: 600,
							color: isHidden ? '#9ca3af' : '#374151',
							position: 'relative',
							userSelect: 'none',
						}}
						onClick={() => isHidden && onTileFlip?.(idx)}
					>
						{isHidden ?
							<svg
								width={24}
								height={24}
								viewBox='0 0 24 24'
							>
								<rect
									x='4'
									y='4'
									width='16'
									height='16'
									rx='4'
									fill='#9ca3af'
								/>
								<text
									x='12'
									y='18'
									fontSize='12'
									textAnchor='middle'
									fill='#fff'
								>
									?
								</text>
							</svg>
						:	tile}
					</div>
				);
			})}
		</div>
	);
};

export default HiddenTileFlipBoard;
