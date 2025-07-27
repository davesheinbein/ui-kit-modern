import React from 'react';
let styles: any = {};
try {
	styles = require('./TriangleMovementWebBoard.module.scss');
} catch {
	styles = {};
}

export interface TriangleMovementWebBoardProps {
	triangles?: any[];
	connections?: any[];
	nodes?: Array<{ id: string | number; label?: string }>;
	edges?: Array<[string | number, string | number]>;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const SVG_SIZE = 480;
const TRIANGLE_SIZE = 64;
const NODE_RADIUS = 18;

function getTrianglePoints(
	center: { x: number; y: number },
	size: number
) {
	const points = [];
	for (let i = 0; i < 3; i++) {
		const angle = ((Math.PI * 2) / 3) * i - Math.PI / 2;
		points.push([
			center.x + Math.cos(angle) * size,
			center.y + Math.sin(angle) * size,
		]);
	}
	return points.map((p) => p.join(',')).join(' ');
}

const TriangleMovementWebBoard: React.FC<
	TriangleMovementWebBoardProps
> = (props) => {
	// Support both triangles/connections and nodes/edges
	let {
		triangles,
		connections,
		nodes,
		edges,
		className = '',
		style = {},
		...rest
	} = props;

	// If nodes/edges provided, convert to triangles/connections
	if ((!triangles || triangles.length === 0) && nodes) {
		triangles = nodes.map((n, i) => ({
			...n,
			label: n.label || String(n.id),
		}));
	}
	if ((!connections || connections.length === 0) && edges) {
		connections = edges.map(([from, to]) => ({
			from: nodes?.findIndex((n) => n.id === from),
			to: nodes?.findIndex((n) => n.id === to),
		}));
	}
	triangles = triangles || [];
	connections = connections || [];

	// Layout triangles in a circle for demo
	const center = { x: SVG_SIZE / 2, y: SVG_SIZE / 2 };
	const radius = SVG_SIZE / 2 - TRIANGLE_SIZE - 24;
	const trianglePositions = triangles.map((t, i) => {
		const angle = (2 * Math.PI * i) / triangles.length;
		return {
			...t,
			x: center.x + Math.cos(angle) * radius,
			y: center.y + Math.sin(angle) * radius,
		};
	});

	return (
		<div
			className={
				styles.triangleMovementWebBoard +
				(className ? ' ' + className : '')
			}
			style={style}
			role='group'
			aria-label='Triangle Movement Web Board'
			{...rest}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				className={styles.svg}
			>
				{/* Connections */}
				{connections.map((conn, idx) => {
					const from = trianglePositions[conn.from];
					const to = trianglePositions[conn.to];
					if (!from || !to) return null;
					return (
						<line
							key={idx}
							x1={from.x}
							y1={from.y}
							x2={to.x}
							y2={to.y}
							stroke={conn.color || '#888'}
							strokeWidth={4}
							opacity={0.7}
							className={styles.connectionLine}
						/>
					);
				})}
				{/* Triangles */}
				{trianglePositions.map((tri, idx) => (
					<g key={idx}>
						<polygon
							points={getTrianglePoints(
								{ x: tri.x, y: tri.y },
								TRIANGLE_SIZE / 2
							)}
							fill={tri.color || '#e0e7ef'}
							stroke='#111827'
							strokeWidth={2}
							className={styles.triangle}
						/>
						<circle
							cx={tri.x}
							cy={tri.y}
							r={NODE_RADIUS}
							fill={tri.nodeColor || '#fff'}
							stroke='#111827'
							strokeWidth={2}
							className={styles.node}
						/>
						<text
							x={tri.x}
							y={tri.y + 5}
							textAnchor='middle'
							fontSize={16}
							fill='#111827'
							className={styles.label}
						>
							{tri.label || idx + 1}
						</text>
					</g>
				))}
			</svg>
		</div>
	);
};

export default TriangleMovementWebBoard;
