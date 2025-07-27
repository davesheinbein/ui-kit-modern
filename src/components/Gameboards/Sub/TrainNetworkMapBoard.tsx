import React from 'react';
let styles: any = {};
try {
	styles = require('./TrainNetworkMapBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.module.scss');
	} catch {
		styles = {};
	}
}

const SVG_SIZE = 480;
const NODE_RADIUS = 18;

export interface TrainNetworkMapBoardProps {
	stations?: Array<{
		id?: string;
		name: string;
		x?: number;
		y?: number;
		color?: string;
		icon?: React.ReactNode;
		[key: string]: any;
	}>;
	routes?: Array<{
		from: string;
		to: string;
		color?: string;
		[key: string]: any;
	}>;
	lines?: Array<[string, string]>;
	className?: string;
	style?: React.CSSProperties;
	width?: number;
	height?: number;
	[key: string]: any;
}
const TrainNetworkMapBoard: React.FC<
	TrainNetworkMapBoardProps
> = (props) => {
	// Default props for Storybook/demo
	const {
		stations = [
			{ name: 'A' },
			{ name: 'B' },
			{ name: 'C' },
			{ name: 'D' },
		],
		lines,
		routes,
		width = SVG_SIZE,
		height = SVG_SIZE,
		className = '',
		style = {},
	} = props;

	// If stations have no x/y, auto-layout in a circle
	const autoLayout = !stations.some(
		(s: any) =>
			typeof s.x === 'number' && typeof s.y === 'number'
	);
	const n = stations.length;
	const centerX = width / 2;
	const centerY = height / 2;
	const radius =
		Math.min(width, height) / 2 - NODE_RADIUS * 2;
	const placedStations = stations.map(
		(s: any, i: number) => {
			if (
				typeof s.x === 'number' &&
				typeof s.y === 'number'
			)
				return s;
			const angle = (2 * Math.PI * i) / n;
			return {
				...s,
				x: centerX + radius * Math.cos(angle),
				y: centerY + radius * Math.sin(angle),
			};
		}
	);

	// Map station names to positions
	const stationMap = Object.fromEntries(
		placedStations.map((s: any) => [s.name, s])
	);

	// Support both 'lines' (array of [from, to]) and 'routes' (array of {from, to})
	const allLines: Array<{
		from: string;
		to: string;
		color?: string;
	}> =
		(routes as any) ||
		(lines &&
			lines.map((l: any) =>
				Array.isArray(l) ? { from: l[0], to: l[1] } : l
			)) ||
		[];

	return (
		<svg
			width={width}
			height={height}
			className={
				styles.trainNetworkMapBoard +
				(className ? ' ' + className : '')
			}
			style={style}
			viewBox={`0 0 ${width} ${height}`}
			role='img'
			aria-label='Train Network Map'
		>
			{/* Draw lines/routes */}
			{allLines.map((line, idx) => {
				const from = stationMap[line.from];
				const to = stationMap[line.to];
				if (!from || !to) return null;
				return (
					<line
						key={idx}
						x1={from.x}
						y1={from.y}
						x2={to.x}
						y2={to.y}
						stroke={line.color || '#374151'}
						strokeWidth={6}
						className={styles.routeLine}
						opacity={0.7}
					/>
				);
			})}
			{/* Draw stations */}
			{placedStations.map((station: any, idx: number) => (
				<g key={station.name || idx}>
					<circle
						cx={station.x}
						cy={station.y}
						r={NODE_RADIUS}
						fill='#fff'
						stroke='#374151'
						strokeWidth={3}
						className={styles.stationNode}
					/>
					<text
						x={station.x}
						y={station.y + 5}
						textAnchor='middle'
						fontSize={16}
						fill='#374151'
						style={{
							pointerEvents: 'none',
							userSelect: 'none',
						}}
					>
						{station.name}
					</text>
				</g>
			))}
		</svg>
	);
};

export default TrainNetworkMapBoard;
