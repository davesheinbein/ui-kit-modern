import React from 'react';

export interface PoliticalMapBoardProps {
	regions: any[];
	factions: any[];
	[key: string]: any;
}

import './PoliticalMapBoard.module.scss';

const SVG_SIZE = 420;
const REGION_RADIUS = 140;
const FACTION_COLORS = [
	'#f87171',
	'#38bdf8',
	'#a3e635',
	'#c084fc',
	'#fbbf24',
	'#34d399',
	'#f472b6',
	'#64748b',
	'#facc15',
	'#60a5fa',
];

function getRegionArc(index: number, total: number) {
	// Divide map into pie slices
	const startAngle = (2 * Math.PI * index) / total;
	const endAngle = (2 * Math.PI * (index + 1)) / total;
	const x1 =
		SVG_SIZE / 2 + REGION_RADIUS * Math.cos(startAngle);
	const y1 =
		SVG_SIZE / 2 + REGION_RADIUS * Math.sin(startAngle);
	const x2 =
		SVG_SIZE / 2 + REGION_RADIUS * Math.cos(endAngle);
	const y2 =
		SVG_SIZE / 2 + REGION_RADIUS * Math.sin(endAngle);
	const largeArcFlag =
		endAngle - startAngle > Math.PI ? 1 : 0;
	return `M${SVG_SIZE / 2},${SVG_SIZE / 2} L${x1},${y1} A${REGION_RADIUS},${REGION_RADIUS} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
}

const PoliticalMapBoard: React.FC<
	PoliticalMapBoardProps
> = ({
	regions = [
		{ name: 'North', faction: 0 },
		{ name: 'East', faction: 1 },
		{ name: 'South', faction: 2 },
		{ name: 'West', faction: 3 },
		{ name: 'Central', faction: 4 },
	],
	factions = [
		{ name: 'Red', color: FACTION_COLORS[0] },
		{ name: 'Blue', color: FACTION_COLORS[1] },
		{ name: 'Green', color: FACTION_COLORS[2] },
		{ name: 'Purple', color: FACTION_COLORS[3] },
		{ name: 'Yellow', color: FACTION_COLORS[4] },
	],
	className = '',
	style = {},
	...props
}) => {
	return (
		<div
			className={`political-map-board ${className}`.trim()}
			style={style}
			role='img'
			aria-label='Political Map Board'
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
			>
				{/* Map base */}
				<circle
					cx={SVG_SIZE / 2}
					cy={SVG_SIZE / 2}
					r={REGION_RADIUS + 24}
					fill='#e0e7ef'
					stroke='#64748b'
					strokeWidth={6}
					className='political-map-board__base'
				/>
				{/* Regions as pie slices with faction colors */}
				{regions.map((region, idx) => (
					<path
						key={idx}
						d={getRegionArc(idx, regions.length)}
						fill={factions[region.faction]?.color || '#bbb'}
						stroke='#fff'
						strokeWidth={3}
						className='political-map-board__region'
					/>
				))}
				{/* Region labels */}
				{regions.map((region, idx) => {
					const angle =
						(2 * Math.PI * (idx + 0.5)) / regions.length;
					const x =
						SVG_SIZE / 2 +
						(REGION_RADIUS - 32) * Math.cos(angle);
					const y =
						SVG_SIZE / 2 +
						(REGION_RADIUS - 32) * Math.sin(angle);
					return (
						<text
							key={region.name}
							x={x}
							y={y}
							textAnchor='middle'
							fontSize={20}
							fill='#334155'
							fontWeight='bold'
							className='political-map-board__region-label'
						>
							{region.name}
						</text>
					);
				})}
				{/* Faction legend */}
				<g className='political-map-board__legend'>
					{factions.map((faction, idx) => (
						<g key={faction.name}>
							<rect
								x={32}
								y={SVG_SIZE - 40 - idx * 32}
								width={24}
								height={24}
								fill={faction.color}
								stroke='#64748b'
								strokeWidth={2}
							/>
							<text
								x={64}
								y={SVG_SIZE - 24 - idx * 32}
								fontSize={16}
								fill='#334155'
								alignmentBaseline='middle'
							>
								{faction.name}
							</text>
						</g>
					))}
				</g>
			</svg>
		</div>
	);
};

export default PoliticalMapBoard;
