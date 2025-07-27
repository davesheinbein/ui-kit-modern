import React from 'react';

export interface KitchenRestaurantBoardProps {
	stations: Array<{
		id: string;
		label: string;
		type?: string;
		color?: string;
		x?: number;
		y?: number;
	}>;
	tables: Array<{
		id: string;
		label: string;
		seats?: number;
		color?: string;
		x?: number;
		y?: number;
	}>;
	layout?: 'kitchen' | 'restaurant' | 'hybrid';
	showLabels?: boolean;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const DEFAULT_SIZE = 48;
const BOARD_WIDTH = 480;
const BOARD_HEIGHT = 320;

function getStationPosition(
	index: number,
	total: number
): { x: number; y: number } {
	// Arrange stations in a row at the top
	const spacing = BOARD_WIDTH / (total + 1);
	return { x: spacing * (index + 1), y: 48 };
}
function getTablePosition(
	index: number,
	total: number
): { x: number; y: number } {
	// Arrange tables in a grid below stations
	const cols = Math.ceil(Math.sqrt(total));
	const rows = Math.ceil(total / cols);
	const col = index % cols;
	const row = Math.floor(index / cols);
	const x = 80 + col * (DEFAULT_SIZE + 24);
	const y = 120 + row * (DEFAULT_SIZE + 24);
	return { x, y };
}

const KitchenRestaurantBoard: React.FC<
	KitchenRestaurantBoardProps
> = ({
	stations = [],
	tables = [],
	layout = 'hybrid',
	showLabels = true,
	className = '',
	style = {},
	...props
}) => {
	// Calculate positions if not provided
	const stationNodes = stations.map((s, i) => ({
		...s,
		...(s.x !== undefined && s.y !== undefined ?
			{}
		:	getStationPosition(i, stations.length)),
	}));
	const tableNodes = tables.map((t, i) => ({
		...t,
		...(t.x !== undefined && t.y !== undefined ?
			{}
		:	getTablePosition(i, tables.length)),
	}));

	return (
		<div
			className={`kitchen-restaurant-board ${className}`}
			style={{
				position: 'relative',
				width: BOARD_WIDTH,
				height: BOARD_HEIGHT,
				background: '#f8fafc',
				borderRadius: 16,
				boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
				...style,
			}}
			{...props}
		>
			{/* Stations */}
			{stationNodes.map((station) => (
				<div
					key={station.id}
					className='kitchen-restaurant-board__station'
					style={{
						position: 'absolute',
						left: (station.x ?? 0) - DEFAULT_SIZE / 2,
						top: (station.y ?? 0) - DEFAULT_SIZE / 2,
						width: DEFAULT_SIZE,
						height: DEFAULT_SIZE,
						background: station.color || '#fde68a',
						borderRadius: 12,
						boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontWeight: 600,
						fontSize: 16,
						border: '2px solid #fbbf24',
						zIndex: 2,
					}}
					tabIndex={0}
					aria-label={station.label}
				>
					{showLabels && <span>{station.label}</span>}
				</div>
			))}
			{/* Tables */}
			{tableNodes.map((table) => (
				<div
					key={table.id}
					className='kitchen-restaurant-board__table'
					style={{
						position: 'absolute',
						left: (table.x ?? 0) - DEFAULT_SIZE / 2,
						top: (table.y ?? 0) - DEFAULT_SIZE / 2,
						width: DEFAULT_SIZE,
						height: DEFAULT_SIZE,
						background: table.color || '#bae6fd',
						borderRadius: 16,
						boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontWeight: 500,
						fontSize: 15,
						border: '2px solid #38bdf8',
						zIndex: 1,
					}}
					tabIndex={0}
					aria-label={table.label}
				>
					{showLabels && <span>{table.label}</span>}
				</div>
			))}
			{/* Optionally, draw connections or zones for hybrid layouts */}
			{/* ...future expansion... */}
		</div>
	);
};

export default KitchenRestaurantBoard;
