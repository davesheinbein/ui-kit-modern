import React from 'react';

export interface PlanetMapBoardProps {
	planetData: any;
	regions: any[];
	[key: string]: any;
}

import './PlanetMapBoard.module.scss';

const SVG_SIZE = 420;
const PLANET_RADIUS = 160;
const REGION_COLORS = [
	'#a3e635',
	'#38bdf8',
	'#fbbf24',
	'#f472b6',
	'#60a5fa',
	'#f87171',
	'#34d399',
	'#c084fc',
	'#facc15',
	'#64748b',
];

function getRegionArc(index: number, total: number) {
	// Divide planet into pie slices
	const startAngle = (2 * Math.PI * index) / total;
	const endAngle = (2 * Math.PI * (index + 1)) / total;
	const x1 =
		SVG_SIZE / 2 + PLANET_RADIUS * Math.cos(startAngle);
	const y1 =
		SVG_SIZE / 2 + PLANET_RADIUS * Math.sin(startAngle);
	const x2 =
		SVG_SIZE / 2 + PLANET_RADIUS * Math.cos(endAngle);
	const y2 =
		SVG_SIZE / 2 + PLANET_RADIUS * Math.sin(endAngle);
	const largeArcFlag =
		endAngle - startAngle > Math.PI ? 1 : 0;
	return `M${SVG_SIZE / 2},${SVG_SIZE / 2} L${x1},${y1} A${PLANET_RADIUS},${PLANET_RADIUS} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
}

const PlanetMapBoard: React.FC<PlanetMapBoardProps> = ({
	planetData = { name: 'Terra', type: 'Earth-like' },
	regions = [
		{ name: 'North', label: 'N' },
		{ name: 'East', label: 'E' },
		{ name: 'South', label: 'S' },
		{ name: 'West', label: 'W' },
		{ name: 'Equator', label: 'EQ' },
	],
	className = '',
	style = {},
	...props
}) => {
	return (
		<div
			className={`planet-map-board ${className}`.trim()}
			style={style}
			role='img'
			aria-label={`Planet Map Board: ${planetData.name}`}
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
			>
				{/* Planet base */}
				<circle
					cx={SVG_SIZE / 2}
					cy={SVG_SIZE / 2}
					r={PLANET_RADIUS}
					fill='#e0f2fe'
					stroke='#64748b'
					strokeWidth={6}
					className='planet-map-board__planet'
				/>
				{/* Regions as pie slices */}
				{regions.map((region, idx) => (
					<path
						key={idx}
						d={getRegionArc(idx, regions.length)}
						fill={REGION_COLORS[idx % REGION_COLORS.length]}
						stroke='#fff'
						strokeWidth={3}
						className='planet-map-board__region'
					/>
				))}
				{/* Region labels */}
				{regions.map((region, idx) => {
					const angle =
						(2 * Math.PI * (idx + 0.5)) / regions.length;
					const x =
						SVG_SIZE / 2 +
						(PLANET_RADIUS - 40) * Math.cos(angle);
					const y =
						SVG_SIZE / 2 +
						(PLANET_RADIUS - 40) * Math.sin(angle);
					return (
						<text
							key={region.name}
							x={x}
							y={y}
							textAnchor='middle'
							fontSize={22}
							fill='#334155'
							fontWeight='bold'
							className='planet-map-board__region-label'
						>
							{region.label || region.name}
						</text>
					);
				})}
				{/* Planet name label */}
				<text
					x={SVG_SIZE / 2}
					y={SVG_SIZE / 2}
					textAnchor='middle'
					fontSize={28}
					fill='#64748b'
					fontWeight='bold'
					className='planet-map-board__planet-label'
					dy={10}
				>
					{planetData.name}
				</text>
			</svg>
		</div>
	);
};

export default PlanetMapBoard;
