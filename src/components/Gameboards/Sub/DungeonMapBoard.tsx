// Ensure DungeonMapBoard is the default export for Storybook compatibility
// (Assuming the component is defined as DungeonMapBoard)
// If not, define a minimal stub to prevent Storybook import errors

import React from 'react';

/**
 * Props for DungeonMapBoard
 * @property rooms - Array of room objects. Each room can have label, color, and optional x/y for custom layout.
 * @property connections - Array of connections, each with { from: number; to: number; color?: string; strokeWidth?: number }
 * @property width - SVG/canvas width (default: 400)
 * @property height - SVG/canvas height (default: 300)
 * @property roomRadius - Radius of each room node (default: 18)
 * @property roomStroke - Stroke color for room circles (default: '#333')
 * @property roomStrokeWidth - Stroke width for room circles (default: 2)
 * @property fontSize - Font size for room labels (default: 14)
 * @property labelColor - Color for room labels (default: '#222')
 * @property connectionColor - Default color for connections (default: '#888')
 * @property connectionStrokeWidth - Default stroke width for connections (default: 3)
 * @property layout - 'circle' (default) or 'custom' (use room.x/y)
 * @property className - Optional className for root div
 * @property style - Optional style for root div
 */
export interface DungeonMapBoardProps {
	/** Array of room objects. Each room can have label, color, and optional x/y for custom layout. */
	rooms?: Array<{
		label?: string;
		color?: string;
		x?: number;
		y?: number;
		[key: string]: any;
	}>;
	/** Array of connections, each with { from: number; to: number; color?: string; strokeWidth?: number } */
	connections?: Array<{
		from: number;
		to: number;
		color?: string;
		strokeWidth?: number;
		[key: string]: any;
	}>;
	/** SVG/canvas width (default: 400) */
	width?: number;
	/** SVG/canvas height (default: 300) */
	height?: number;
	/** Radius of each room node (default: 18) */
	roomRadius?: number;
	/** Stroke color for room circles (default: '#333') */
	roomStroke?: string;
	/** Stroke width for room circles (default: 2) */
	roomStrokeWidth?: number;
	/** Font size for room labels (default: 14) */
	fontSize?: number;
	/** Color for room labels (default: '#222') */
	labelColor?: string;
	/** Default color for connections (default: '#888') */
	connectionColor?: string;
	/** Default stroke width for connections (default: 3) */
	connectionStrokeWidth?: number;
	/** Layout: 'circle' (default) or 'custom' (use room.x/y) */
	layout?: 'circle' | 'custom';
	/** Optional className for root div */
	className?: string;
	/** Optional style for root div */
	style?: React.CSSProperties;
	[key: string]: any;
}

/**
 * DungeonMapBoard renders a configurable dungeon map as a set of rooms (nodes) and connections (edges).
 * All visuals and layout are controlled by props. No internal hardcoding or DOM hacks.
 */
const DungeonMapBoard: React.FC<DungeonMapBoardProps> = ({
	rooms = [],
	connections = [],
	width = 400,
	height = 300,
	roomRadius = 18,
	roomStroke = '#333',
	roomStrokeWidth = 2,
	fontSize = 14,
	labelColor = '#222',
	connectionColor = '#888',
	connectionStrokeWidth = 3,
	layout = 'circle',
	className = '',
	style = {},
	...props
}) => {
	// Compute room positions
	let roomPositions: Array<any> = [];
	if (layout === 'custom') {
		// Use provided x/y or fallback to center
		roomPositions = rooms.map((room) => ({
			...room,
			x: typeof room.x === 'number' ? room.x : width / 2,
			y: typeof room.y === 'number' ? room.y : height / 2,
		}));
	} else {
		// Circle layout
		roomPositions = rooms.map((room, idx) => {
			const angle = (2 * Math.PI * idx) / rooms.length;
			return {
				...room,
				x:
					width / 2 +
					Math.cos(angle) * (width / 2 - roomRadius - 10),
				y:
					height / 2 +
					Math.sin(angle) * (height / 2 - roomRadius - 10),
			};
		});
	}

	return (
		<div
			className={`dungeon-map-board ${className}`.trim()}
			style={{
				width,
				height,
				position: 'relative',
				...style,
			}}
			{...props}
		>
			<svg width={width} height={height}>
				{/* Draw connections */}
				{connections.map((conn, idx) => {
					const from = roomPositions[conn.from];
					const to = roomPositions[conn.to];
					if (!from || !to) return null;
					return (
						<line
							key={idx}
							x1={from.x}
							y1={from.y}
							x2={to.x}
							y2={to.y}
							stroke={conn.color || connectionColor}
							strokeWidth={
								conn.strokeWidth || connectionStrokeWidth
							}
						/>
					);
				})}
				{/* Draw rooms */}
				{roomPositions.map((room, idx) => (
					<g key={idx}>
						<circle
							cx={room.x}
							cy={room.y}
							r={roomRadius}
							fill={room.color || '#f5f5dc'}
							stroke={roomStroke}
							strokeWidth={roomStrokeWidth}
						/>
						<text
							x={room.x}
							y={room.y + 5}
							textAnchor='middle'
							fontSize={fontSize}
							fill={labelColor}
						>
							{room.label || `Room ${idx + 1}`}
						</text>
					</g>
				))}
			</svg>
		</div>
	);
};

export default DungeonMapBoard;
