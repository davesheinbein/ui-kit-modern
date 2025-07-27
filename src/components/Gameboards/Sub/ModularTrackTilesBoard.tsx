import React from 'react';
import clsx from 'clsx';
import styles from './ModularTrackTilesBoard.module.scss';

export interface ModularTrackTilesBoardProps {
	tiles: Array<{
		id: string;
		x: number;
		y: number;
		label?: string;
		color?: string;
		active?: boolean;
		[key: string]: any;
	}>;
	rows?: number;
	columns?: number;
	gridSize?: number;
	showGrid?: boolean;
	className?: string;
	style?: React.CSSProperties;
	renderTile?: (tile: any, idx: number) => React.ReactNode;
	onTileClick?: (tile: any, idx: number) => void;
	[key: string]: any;
}

const DEFAULT_GRID_SIZE = 48;

const ModularTrackTilesBoard: React.FC<
	ModularTrackTilesBoardProps
> = ({
	tiles = [],
	rows,
	columns,
	gridSize = DEFAULT_GRID_SIZE,
	showGrid = true,
	className = '',
	style = {},
	renderTile,
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
		tiles.map((tile, idx) => {
			const tileStyle: React.CSSProperties = {
				left: (tile.x - minX) * gridSize,
				top: (tile.y - minY) * gridSize,
				width: gridSize,
				height: gridSize,
				background: tile.color || 'var(--tile-bg, #fbbf24)',
				zIndex: 2,
				border:
					tile.active ?
						'2px solid var(--tile-active, #6366f1)'
					:	'2px solid var(--tile-border, #e5e7eb)',
			};
			return (
				<div
					key={tile.id || idx}
					className={clsx(
						styles.tile,
						tile.active && styles.tileActive,
						tile.className
					)}
					style={tileStyle}
					tabIndex={0}
					aria-label={tile.label || `Tile ${idx + 1}`}
					onClick={() => onTileClick?.(tile, idx)}
				>
					{renderTile ?
						renderTile(tile, idx)
					:	<span>{tile.label || `Tile ${idx + 1}`}</span>}
				</div>
			);
		});

	return (
		<div
			className={clsx(
				styles.modularTrackTilesBoard,
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

export default ModularTrackTilesBoard;
