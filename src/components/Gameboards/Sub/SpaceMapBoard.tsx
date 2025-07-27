import React from 'react';
let styles: any = {};
try {
	styles = require('./SpaceMapBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.scss');
	} catch {
		styles = {};
	}
}

export interface SpaceMapBoardProps {
	planets: any[];
	connections: any[];
	[key: string]: any;
}

const SVG_SIZE = 480;
const PLANET_RADIUS = 24;
const CONNECTION_COLOR = '#b3c7e6';
const PLANET_COLOR = '#3b82f6';
const LABEL_COLOR = '#111827';

function getPlanetPosition(
	index: number,
	total: number
): { x: number; y: number } {
	// Arrange planets in a circle for visual clarity
	const angle = (2 * Math.PI * index) / total;
	const r = SVG_SIZE * 0.35;
	const cx = SVG_SIZE / 2 + r * Math.cos(angle);
	const cy = SVG_SIZE / 2 + r * Math.sin(angle);
	return { x: cx, y: cy };
}

const SpaceMapBoard: React.FC<SpaceMapBoardProps> = ({
	planets = [],
	connections = [],
	className = '',
	style = {},
	showLabels = true,
	...props
}) => {
	// Calculate positions for each planet
	const positions = planets.map(
		(planet: any, i: number) => ({
			...planet,
			...getPlanetPosition(i, planets.length),
		})
	);

	return (
		<div
			className={[styles.spaceMapBoard || '', className]
				.join(' ')
				.trim()}
			style={style}
			role='group'
			aria-label='Space Map Board'
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				className={styles.spaceMapBoard__svg || ''}
				aria-hidden='false'
			>
				{/* Render connections */}
				{connections.map((conn: any, idx: number) => {
					const fromIdx =
						typeof conn.from === 'number' ?
							conn.from
						:	planets.findIndex(
								(p: any) => p.id === conn.from
							);
					const toIdx =
						typeof conn.to === 'number' ?
							conn.to
						:	planets.findIndex(
								(p: any) => p.id === conn.to
							);
					if (fromIdx < 0 || toIdx < 0) return null;
					const from = positions[fromIdx];
					const to = positions[toIdx];
					return (
						<line
							key={idx}
							x1={from.x}
							y1={from.y}
							x2={to.x}
							y2={to.y}
							stroke={conn.color || CONNECTION_COLOR}
							strokeWidth={3}
							opacity={0.7}
							className={
								styles.spaceMapBoard__connection || ''
							}
						/>
					);
				})}

				{/* Render planets */}
				{positions.map((planet: any, i: number) => (
					<g key={planet.id || i}>
						<circle
							cx={planet.x}
							cy={planet.y}
							r={planet.radius || PLANET_RADIUS}
							fill={planet.color || PLANET_COLOR}
							stroke='#fff'
							strokeWidth={2}
							className={styles.spaceMapBoard__planet || ''}
							tabIndex={0}
							aria-label={planet.name || `Planet ${i + 1}`}
						/>
						{showLabels && (
							<text
								x={planet.x}
								y={
									planet.y +
									(planet.radius || PLANET_RADIUS) +
									18
								}
								textAnchor='middle'
								fontSize={16}
								fill={LABEL_COLOR}
								className={
									styles.spaceMapBoard__label || ''
								}
								aria-hidden='true'
							>
								{planet.name || `Planet ${i + 1}`}
							</text>
						)}
					</g>
				))}
			</svg>
		</div>
	);
};

export default SpaceMapBoard;
