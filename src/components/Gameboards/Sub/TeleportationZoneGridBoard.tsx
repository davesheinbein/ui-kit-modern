import React from 'react';
let styles: any = {};
try {
	styles = require('./TeleportationZoneGridBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.scss');
	} catch {
		styles = {};
	}
}

export interface TeleportationZoneGridBoardProps {
	grid: Array<Array<{ value?: any; teleport?: boolean }>>;
	teleportZones?: Array<{ row: number; col: number }>;
	cellSize?: number;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const DEFAULT_CELL_SIZE = 48;

const TeleportationZoneGridBoard: React.FC<
	TeleportationZoneGridBoardProps
> = ({
	grid = [],
	teleportZones = [],
	cellSize = DEFAULT_CELL_SIZE,
	className = '',
	style = {},
	...props
}) => {
	// Build a set for fast lookup
	const teleportSet = new Set(
		teleportZones.map((z) => `${z.row},${z.col}`)
	);

	return (
		<div
			className={`${styles.teleportationZoneGridBoard || ''} ${className}`.trim()}
			style={style}
			role='grid'
			aria-label='Teleportation Zone Grid Board'
			{...props}
		>
			<div
				className={
					styles.teleportationZoneGridBoard__grid || ''
				}
			>
				{grid.map((row, rowIdx) => (
					<div
						key={rowIdx}
						className={
							styles.teleportationZoneGridBoard__row || ''
						}
						role='row'
					>
						{row.map((cell, colIdx) => {
							const isTeleport =
								cell.teleport ||
								teleportSet.has(`${rowIdx},${colIdx}`);
							return (
								<div
									key={colIdx}
									className={`${styles.teleportationZoneGridBoard__cell || ''} ${isTeleport ? styles.teleportationZoneGridBoard__teleport || '' : ''}`.trim()}
									style={{
										width: cellSize,
										height: cellSize,
										background:
											isTeleport ? '#fbbf24' : '#e0e7ef',
										border:
											isTeleport ?
												'2px solid #f59e42'
											:	'1px solid #cbd5e1',
										borderRadius: '8px',
										margin: '4px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										fontWeight: isTeleport ? 700 : 400,
										color:
											isTeleport ? '#78350f' : '#111827',
										boxShadow:
											isTeleport ?
												'0 2px 8px rgba(251,191,36,0.12)'
											:	'0 1px 4px rgba(0,0,0,0.04)',
									}}
									role='gridcell'
									aria-label={
										isTeleport ?
											`Teleport Zone (${rowIdx},${colIdx})`
										:	`Cell (${rowIdx},${colIdx})`
									}
									tabIndex={0}
								>
									{cell.value !== undefined ?
										cell.value
									: isTeleport ?
										'⏩'
									:	''}
								</div>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
};

export default TeleportationZoneGridBoard;
