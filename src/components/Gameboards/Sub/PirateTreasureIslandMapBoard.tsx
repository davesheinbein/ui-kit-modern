import React from 'react';

export interface PirateTreasureIslandMapBoardProps {
	islands: any[];
	treasures: any[];
	[key: string]: any;
}

import './PirateTreasureIslandMapBoard.module.scss';

const SVG_SIZE = 480;
const ISLAND_RADIUS = 32;
const TREASURE_RADIUS = 12;

function getIslandPosition(
	index: number,
	total: number
): { x: number; y: number } {
	// Arrange islands in a loose circle
	const angle = (2 * Math.PI * index) / total;
	const cx =
		SVG_SIZE / 2 +
		Math.cos(angle) * (SVG_SIZE / 2 - ISLAND_RADIUS * 2);
	const cy =
		SVG_SIZE / 2 +
		Math.sin(angle) * (SVG_SIZE / 2 - ISLAND_RADIUS * 2);
	return { x: cx, y: cy };
}

const PirateTreasureIslandMapBoard: React.FC<
	PirateTreasureIslandMapBoardProps
> = ({
	islands = [
		{ name: 'Skull Island' },
		{ name: 'Parrot Cay' },
		{ name: 'Lost Cove' },
		{ name: 'Rum Reef' },
		{ name: 'Serpent Key' },
	],
	treasures = [
		{ island: 0, label: 'Gold' },
		{ island: 2, label: 'Emerald' },
		{ island: 4, label: 'Ruby' },
	],
	className = '',
	style = {},
	...props
}) => {
	return (
		<div
			className={`pirate-treasure-island-map-board ${className}`.trim()}
			style={style}
			role='img'
			aria-label='Pirate Treasure Island Map Board'
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
			>
				{/* Ocean background */}
				<rect
					x={0}
					y={0}
					width={SVG_SIZE}
					height={SVG_SIZE}
					fill='#b3e0ff'
				/>
				{/* Islands */}
				{islands.map((island, idx) => {
					const { x, y } = getIslandPosition(
						idx,
						islands.length
					);
					return (
						<g key={idx}>
							<circle
								cx={x}
								cy={y}
								r={ISLAND_RADIUS}
								fill='#ffe4b5'
								stroke='#a0522d'
								strokeWidth={3}
								className='pirate-treasure-island-map-board__island'
							/>
							<text
								x={x}
								y={y + ISLAND_RADIUS + 18}
								textAnchor='middle'
								fontSize={16}
								fill='#333'
								className='pirate-treasure-island-map-board__island-label'
							>
								{island.name}
							</text>
						</g>
					);
				})}
				{/* Treasures */}
				{treasures.map((treasure, idx) => {
					const { x, y } = getIslandPosition(
						treasure.island,
						islands.length
					);
					return (
						<g key={idx}>
							<circle
								cx={x}
								cy={y}
								r={TREASURE_RADIUS}
								fill='#ffd700'
								stroke='#b8860b'
								strokeWidth={2}
								className='pirate-treasure-island-map-board__treasure'
							/>
							<text
								x={x}
								y={y}
								textAnchor='middle'
								fontSize={14}
								fill='#b8860b'
								className='pirate-treasure-island-map-board__treasure-label'
								dy={5}
							>
								{treasure.label}
							</text>
						</g>
					);
				})}
				{/* Decorative compass rose */}
				<g>
					<circle
						cx={SVG_SIZE - 60}
						cy={SVG_SIZE - 60}
						r={28}
						fill='#fff'
						stroke='#333'
						strokeWidth={2}
					/>
					<text
						x={SVG_SIZE - 60}
						y={SVG_SIZE - 60}
						textAnchor='middle'
						fontSize={18}
						fill='#333'
						fontWeight='bold'
						dy={6}
					>
						N
					</text>
				</g>
			</svg>
		</div>
	);
};

export default PirateTreasureIslandMapBoard;
