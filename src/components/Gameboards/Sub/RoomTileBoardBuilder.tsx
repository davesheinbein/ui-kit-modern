import React from 'react';
import styles from './RoomTileBoardBuilder.module.scss';

export interface RoomTileBoardBuilderProps {
	rooms: Array<{
		id: string | number;
		name?: string;
		tiles?: Array<{
			id: string | number;
			type?: string;
			state?: any;
		}>;
		[key: string]: any;
	}>;
	roomRenderer?: (
		room: any,
		idx: number
	) => React.ReactNode;
	tileRenderer?: (
		tile: any,
		roomIdx: number,
		tileIdx: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const RoomTileBoardBuilder: React.FC<
	RoomTileBoardBuilderProps
> = ({
	rooms = [],
	roomRenderer,
	tileRenderer,
	className = '',
	style = {},
	...props
}) => {
	return (
		<div
			className={[styles.dungeonBoard, className]
				.filter(Boolean)
				.join(' ')}
			style={style}
			role='grid'
			aria-label='Room Tile Board Builder'
			{...props}
		>
			<div className={styles.grid}>
				{rooms.length === 0 ?
					<div className={styles.gridRow}>
						<div className={styles.gridCell} aria-disabled>
							No rooms available
						</div>
					</div>
				:	rooms.map((room, roomIdx) => (
						<div
							key={room.id || roomIdx}
							className={styles.gridRow}
							role='row'
							aria-label={
								room.name || `Room ${roomIdx + 1}`
							}
						>
							{roomRenderer ?
								roomRenderer(room, roomIdx)
							:	<div className={styles.gridCell}>
									<strong>
										{room.name || `Room ${roomIdx + 1}`}
									</strong>
									<div className={styles.grid}>
										{(
											Array.isArray(room.tiles) &&
											room.tiles.length === 0
										) ?
											<div
												className={styles.gridCell}
												aria-disabled
											>
												No tiles
											</div>
										:	(Array.isArray(room.tiles) ?
												room.tiles
											:	[]
											).map((tile, tileIdx) =>
												tileRenderer ?
													tileRenderer(
														tile,
														roomIdx,
														tileIdx
													)
												:	<div
														key={tile.id || tileIdx}
														className={styles.gridCell}
														role='gridcell'
														aria-label={
															tile.type ||
															`Tile ${tileIdx + 1}`
														}
													>
														{tile.type || 'Tile'}
													</div>
											)
										}
									</div>
								</div>
							}
						</div>
					))
				}
			</div>
		</div>
	);
};

export default RoomTileBoardBuilder;
