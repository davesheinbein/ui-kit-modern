import React from 'react';

export interface IslandHoppingMapBoardProps {
	islands: any[];
	connections: any[];
	[key: string]: any;
}

import './IslandHoppingMapBoard.module.scss';

const SVG_SIZE = 400;
const ISLAND_RADIUS = 24;

function getIslandPosition(
	index: number,
	total: number
): { x: number; y: number } {
	// Arrange islands in a circle
	const angle = (2 * Math.PI * index) / total;
	const cx =
		SVG_SIZE / 2 + Math.cos(angle) * (SVG_SIZE / 2 - 60);
	const cy =
		SVG_SIZE / 2 + Math.sin(angle) * (SVG_SIZE / 2 - 60);
	return { x: cx, y: cy };
}

const IslandHoppingMapBoard: React.FC<
	IslandHoppingMapBoardProps
> = ({
	islands = [],
	connections = [],
	className = '',
	style = {},
	onIslandClick,
	...props
}) => {
	// Calculate positions for each island
	const positions = islands.map((island, i) =>
		getIslandPosition(i, islands.length)
	);

	return (
		<div
			className={`island-hopping-map-board ${className}`}
			style={style}
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				className='island-hopping-map-board__svg'
			>
				{/* Draw connections */}
				{connections.map((conn, idx) => {
					const fromIdx =
						typeof conn.from === 'number' ?
							conn.from
						:	islands.findIndex(
								(isl) => isl.id === conn.from
							);
					const toIdx =
						typeof conn.to === 'number' ?
							conn.to
						:	islands.findIndex((isl) => isl.id === conn.to);
					if (fromIdx === -1 || toIdx === -1) return null;
					const from = positions[fromIdx];
					const to = positions[toIdx];
					return (
						<line
							key={idx}
							x1={from.x}
							y1={from.y}
							x2={to.x}
							y2={to.y}
							stroke='#3b82f6'
							strokeWidth={4}
							opacity={0.7}
							className='island-hopping-map-board__connection'
						/>
					);
				})}
				{/* Draw islands */}
				{islands.map((island, i) => {
					const { x, y } = positions[i];
					return (
						<g key={island.id || i}>
							<circle
								cx={x}
								cy={y}
								r={ISLAND_RADIUS}
								fill={island.color || '#fbbf24'}
								stroke='#374151'
								strokeWidth={3}
								className='island-hopping-map-board__island'
								onClick={() =>
									onIslandClick && onIslandClick(island, i)
								}
								style={{
									cursor:
										onIslandClick ? 'pointer' : 'default',
								}}
							/>
							<text
								x={x}
								y={y + 6}
								textAnchor='middle'
								fontSize={16}
								fill='#1e293b'
								className='island-hopping-map-board__label'
							>
								{island.label || `Island ${i + 1}`}
							</text>
						</g>
					);
				})}
			</svg>
		</div>
	);
};

export default IslandHoppingMapBoard;
