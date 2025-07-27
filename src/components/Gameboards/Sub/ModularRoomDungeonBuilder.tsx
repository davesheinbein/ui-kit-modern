import React from 'react';
import clsx from 'clsx';
import styles from './ModularRoomDungeonBuilder.module.scss';

export interface ModularRoomDungeonBuilderProps {
	rooms: Array<{
		id: string;
		name?: string;
		x: number;
		y: number;
		width?: number;
		height?: number;
		color?: string;
		tiles?: string[];
		[key: string]: any;
	}>;
	tiles: Array<{
		id: string;
		type?: string;
		x: number;
		y: number;
		roomId?: string;
		color?: string;
		[key: string]: any;
	}>;
	gridSize?: number;
	showGrid?: boolean;
	className?: string;
	style?: React.CSSProperties;
	roomRenderer?: (room: any) => React.ReactNode;
	tileRenderer?: (tile: any) => React.ReactNode;
	onRoomClick?: (room: any) => void;
	onTileClick?: (tile: any) => void;
	[key: string]: any;
}

const DEFAULT_GRID_SIZE = 48;

const ModularRoomDungeonBuilder: React.FC<
	ModularRoomDungeonBuilderProps
> = ({
	rooms = [],
	tiles = [],
	gridSize = DEFAULT_GRID_SIZE,
	showGrid = true,
	className = '',
	style = {},
	roomRenderer,
	tileRenderer,
	onRoomClick,
	onTileClick,
	...props
}) => {
	// Calculate board bounds
	const minX = Math.min(
		...rooms.map((r) => r.x),
		...tiles.map((t) => t.x),
		0
	);
	const minY = Math.min(
		...rooms.map((r) => r.y),
		...tiles.map((t) => t.y),
		0
	);
	const maxX = Math.max(
		...rooms.map((r) => r.x + (r.width || 1)),
		...tiles.map((t) => t.x + 1),
		10
	);
	const maxY = Math.max(
		...rooms.map((r) => r.y + (r.height || 1)),
		...tiles.map((t) => t.y + 1),
		10
	);
	const width = (maxX - minX) * gridSize + gridSize;
	const height = (maxY - minY) * gridSize + gridSize;

	// Helper: render grid
	const renderGrid = () => {
		const rows = [];
		for (let y = minY; y < maxY; y++) {
			const cells = [];
			for (let x = minX; x < maxX; x++) {
				cells.push(
					<div
						key={`cell-${x}-${y}`}
						className={styles.gridCell}
						style={{ width: gridSize, height: gridSize }}
					/>
				);
			}
			rows.push(
				<div key={`row-${y}`} className={styles.gridRow}>
					{cells}
				</div>
			);
		}
		return <div className={styles.grid}>{rows}</div>;
	};

	// Helper: render rooms
	const renderRooms = () =>
		rooms.map((room) => {
			const roomStyle: React.CSSProperties = {
				left: (room.x - minX) * gridSize,
				top: (room.y - minY) * gridSize,
				width: (room.width || 1) * gridSize,
				height: (room.height || 1) * gridSize,
				background: room.color || 'var(--room-bg, #e0e7ef)',
			};
			return (
				<div
					key={room.id}
					className={clsx(styles.room, room.className)}
					style={roomStyle}
					tabIndex={0}
					aria-label={room.name || `Room ${room.id}`}
					onClick={() => onRoomClick?.(room)}
				>
					{roomRenderer ?
						roomRenderer(room)
					:	<span>{room.name || room.id}</span>}
				</div>
			);
		});

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
					aria-label={tile.type || `Tile ${tile.id}`}
					onClick={() => onTileClick?.(tile)}
				>
					{tileRenderer ?
						tileRenderer(tile)
					:	<span>{tile.type || tile.id}</span>}
				</div>
			);
		});

	return (
		<div
			className={clsx(styles.dungeonBoard, className)}
			style={{
				position: 'relative',
				width,
				height,
				...style,
			}}
			{...props}
		>
			{showGrid && renderGrid()}
			{renderRooms()}
			{renderTiles()}
		</div>
	);
};

export default ModularRoomDungeonBuilder;
