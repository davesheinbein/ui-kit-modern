import React from 'react';

export interface TeleportingGridTilesBoardProps {
	rows: number;
	columns: number;
	teleportMap: Record<string, string>; // key: from tile id, value: to tile id
	onTileTeleport?: (from: string, to: string) => void;
	className?: string;
	style?: React.CSSProperties;
}

const TeleportingGridTilesBoard: React.FC<
	TeleportingGridTilesBoardProps
> = ({
	rows,
	columns,
	teleportMap,
	onTileTeleport,
	className = '',
	style = {},
}) => {
	// Helper to get tile id as 'rXcY'
	const getTileId = (r: number, c: number) => `r${r}c${c}`;

	return (
		<div
			className={`teleporting-grid-tiles-board ${className}`.trim()}
			style={{
				display: 'grid',
				gridTemplateRows: `repeat(${rows}, 40px)`,
				gridTemplateColumns: `repeat(${columns}, 40px)`,
				gap: 6,
				...style,
			}}
		>
			{Array.from({ length: rows }).map((_, r) =>
				Array.from({ length: columns }).map((_, c) => {
					const id = getTileId(r, c);
					const teleportTo = teleportMap[id];
					return (
						<div
							key={id}
							style={{
								border: '1px solid #bbb',
								borderRadius: 6,
								background:
									teleportTo ? '#e0f7fa' : '#f3f4f6',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								cursor: teleportTo ? 'pointer' : 'default',
								position: 'relative',
								fontSize: 14,
								fontWeight: 500,
							}}
							onClick={() => {
								if (teleportTo && onTileTeleport) {
									onTileTeleport(id, teleportTo);
								}
							}}
							title={
								teleportTo ?
									`Teleports to ${teleportTo}`
								:	undefined
							}
						>
							{id}
							{teleportTo && (
								<span
									style={{
										position: 'absolute',
										bottom: 2,
										right: 4,
										fontSize: 10,
										color: '#00796b',
									}}
								>
									⬈
								</span>
							)}
						</div>
					);
				})
			)}
		</div>
	);
};

export default TeleportingGridTilesBoard;
