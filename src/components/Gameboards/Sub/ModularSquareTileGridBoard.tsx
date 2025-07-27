import React from 'react';
import clsx from 'clsx';
import styles from './ModularSquareTileGridBoard.module.scss';

export interface ModularSquareTileGridBoardProps {
	tiles: Array<{
		id: string;
		x: number;
		y: number;
		label?: string;
		color?: string;
		[key: string]: any;
	}>;
	rows?: number;
	columns?: number;
	gridSize?: number;
	showGrid?: boolean;
	className?: string;
	style?: React.CSSProperties;
	tileRenderer?: (tile: any) => React.ReactNode;
	onTileClick?: (tile: any) => void;
	[key: string]: any;
}

const DEFAULT_GRID_SIZE = 48;

const ModularSquareTileGridBoard: React.FC<
	ModularSquareTileGridBoardProps
> = ({
	tiles = [],
	rows,
	columns,
	gridSize = DEFAULT_GRID_SIZE,
	showGrid = true,
	className = '',
	style = {},
	tileRenderer,
	onTileClick,
	...props
}) => {
	// Calculate grid bounds
	const minX = Math.min(...tiles.map((t) => t.x), 0);
	const minY = Math.min(...tiles.map((t) => t.y), 0);
	const maxX =
		columns ?
			minX + columns
		:	Math.max(...tiles.map((t) => t.x + 1), 5);
	const maxY =
		rows ?
			minY + rows
		:	Math.max(...tiles.map((t) => t.y + 1), 5);
	const width = (maxX - minX) * gridSize;
	const height = (maxY - minY) * gridSize;

	// Helper: render grid
	const renderGrid = () => {
		const gridRows = [];
		for (let y = minY; y < maxY; y++) {
			const gridCells = [];
			for (let x = minX; x < maxX; x++) {
				gridCells.push(
					<div
						key={`cell-${x}-${y}`}
						className={styles.gridCell}
						style={{ width: gridSize, height: gridSize }}
					/>
				);
			}
			gridRows.push(
				<div key={`row-${y}`} className={styles.gridRow}>
					{gridCells}
				</div>
			);
		}
		return <div className={styles.grid}>{gridRows}</div>;
	};

	// Helper: render tiles
	const renderTiles = () =>
		tiles.map((tile) => {
			const tileStyle: React.CSSProperties = {
				left: (tile.x - minX) * gridSize,
				top: (tile.y - minY) * gridSize,
				width: gridSize,
				height: gridSize,
				background: tile.color || 'var(--tile-bg, #fbbf24)',
				zIndex: 2,
			};
			return (
				<div
					key={tile.id}
					className={clsx(styles.tile, tile.className)}
					style={tileStyle}
					tabIndex={0}
					aria-label={tile.label || `Tile ${tile.id}`}
					onClick={() => onTileClick?.(tile)}
				>
					{tileRenderer ?
						tileRenderer(tile)
					:	<span>{tile.label || tile.id}</span>}
				</div>
			);
		});

	return (
		<div
			className={clsx(
				styles.squareTileGridBoard,
				className
			)}
			style={{
				position: 'relative',
				width,
				height,
				...style,
			}}
			{...props}
		>
			{showGrid && renderGrid()}
			{renderTiles()}
		</div>
	);
};

export default ModularSquareTileGridBoard;
