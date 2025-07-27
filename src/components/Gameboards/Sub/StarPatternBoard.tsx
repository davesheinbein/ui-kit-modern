import React from 'react';
let styles: any = {};
try {
	styles = require('./StarPatternBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.scss');
	} catch {
		styles = {};
	}
}

export interface StarPatternBoardProps {
	points: Array<{
		x: number;
		y: number;
		label?: string;
		color?: string;
	}>;
	connections: Array<{
		from: number;
		to: number;
		color?: string;
	}>;
	center?: {
		x: number;
		y: number;
		label?: string;
		color?: string;
	};
	radius?: number;
	nodeRadius?: number;
	showLabels?: boolean;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const SVG_SIZE = 480;
const DEFAULT_RADIUS = 180;
const DEFAULT_NODE_RADIUS = 18;

const StarPatternBoard: React.FC<StarPatternBoardProps> = ({
	points = [],
	connections = [],
	center = { x: SVG_SIZE / 2, y: SVG_SIZE / 2 },
	radius = DEFAULT_RADIUS,
	nodeRadius = DEFAULT_NODE_RADIUS,
	showLabels = true,
	className = '',
	style = {},
	...props
}) => {
	// Calculate positions if only angles are provided
	const getPointPos = (
		pt: any,
		i: number,
		total: number
	) => {
		if (
			typeof pt.x === 'number' &&
			typeof pt.y === 'number'
		)
			return pt;
		// Place points evenly around circle
		const angle = (2 * Math.PI * i) / total - Math.PI / 2;
		return {
			x: center.x + radius * Math.cos(angle),
			y: center.y + radius * Math.sin(angle),
			label: pt.label,
			color: pt.color,
		};
	};

	const renderedPoints = points.map((pt, i) =>
		getPointPos(pt, i, points.length)
	);

	return (
		<div
			className={`${styles.starPatternBoard || ''} ${className}`.trim()}
			style={style}
			role='group'
			aria-label='Star Pattern Board'
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				className={styles.starPatternBoard__svg || ''}
				aria-hidden='false'
			>
				{/* Connections */}
				{connections.map((conn, idx) => {
					const from = renderedPoints[conn.from];
					const to = renderedPoints[conn.to];
					if (!from || !to) return null;
					return (
						<line
							key={idx}
							x1={from.x}
							y1={from.y}
							x2={to.x}
							y2={to.y}
							stroke={conn.color || '#b3c7e6'}
							strokeWidth={4}
							className={
								styles.starPatternBoard__connection || ''
							}
							aria-label={`Connection from ${from.label || conn.from} to ${to.label || conn.to}`}
						/>
					);
				})}
				{/* Center node */}
				{center && (
					<circle
						cx={center.x}
						cy={center.y}
						r={nodeRadius}
						fill={center.color || '#fbbf24'}
						className={
							styles.starPatternBoard__center || ''
						}
						aria-label={center.label || 'Center'}
					/>
				)}
				{/* Points */}
				{renderedPoints.map((pt, i) => (
					<g key={i}>
						<circle
							cx={pt.x}
							cy={pt.y}
							r={nodeRadius}
							fill={pt.color || '#2563eb'}
							className={
								styles.starPatternBoard__node || ''
							}
							aria-label={pt.label || `Point ${i + 1}`}
							tabIndex={0}
						/>
						{showLabels && (
							<text
								x={pt.x}
								y={pt.y - nodeRadius - 8}
								textAnchor='middle'
								fontSize={16}
								fill='#111827'
								className={
									styles.starPatternBoard__label || ''
								}
								aria-hidden='true'
							>
								{pt.label || i + 1}
							</text>
						)}
					</g>
				))}
			</svg>
		</div>
	);
};

export default StarPatternBoard;
