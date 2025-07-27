import React from 'react';
let styles: any = {};
try {
	styles = require('./TileLayingTerrainBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.scss');
	} catch {
		styles = {};
	}
}

export interface TileLayingTerrainBoardProps {
	tiles: any[];
	rows?: number;
	columns?: number;
	cellRenderer?: (
		tile: any,
		idx: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const TileLayingTerrainBoard: React.FC<
	TileLayingTerrainBoardProps
> = ({
	tiles,
	rows = 5,
	columns = 5,
	cellRenderer = (tile, idx) => tile,
	className = '',
	style = {},
	...props
}) => {
	// Render tile-laying terrain board as a grid
	const grid = Array.from(
		{ length: rows * columns },
		(_, idx) => tiles[idx] ?? null
	);
	return (
		<div
			className={`${styles?.tileLayingTerrainBoard || 'tile-laying-terrain-board'} ${className}`.trim()}
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: 4,
				maxWidth: columns * 64,
				margin: '0 auto',
				...style,
			}}
			role='grid'
			aria-label='Tile-laying terrain board'
			{...props}
		>
			{grid.map((tile, idx) => (
				<div
					key={idx}
					className={
						styles?.tileLayingTerrainCell ||
						'tile-laying-terrain-board__cell'
					}
					role='gridcell'
					aria-label={`Tile ${idx + 1}: ${tile ? tile.type || 'placed' : 'empty'}`}
					tabIndex={0}
					style={{
						width: 56,
						height: 56,
						background: tile?.color || '#f3f4f6',
						border: '1px solid #d1d5db',
						borderRadius: 4,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontWeight: 500,
						fontSize: 14,
						userSelect: 'none',
						cursor: tile ? 'pointer' : 'default',
					}}
				>
					{cellRenderer(tile, idx)}
				</div>
			))}
		</div>
	);
};

export default TileLayingTerrainBoard;
