import React from 'react';

export interface TunnelAlternatePathBoardProps {
	// Accept either 'segments' (advanced) or 'paths' (simple)
	segments?: any[];
	paths?: [number, number][];
	tunnels?: any[] | [number, number][];
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

let styles: any = {};
try {
	styles = require('./TunnelAlternatePathBoard.module.scss');
} catch {
	styles = {};
}

const SVG_SIZE = 480;
const PATH_COLOR = '#374151';
const TUNNEL_COLOR = '#60a5fa';
const NODE_RADIUS = 16;

const TunnelAlternatePathBoard: React.FC<
	TunnelAlternatePathBoardProps
> = ({
	segments,
	paths,
	tunnels,
	className = '',
	style = {},
	...props
}) => {
	// Support both 'segments' (advanced) and 'paths' (simple)
	let nodeList: any[] = [];
	if (Array.isArray(segments) && segments.length > 0) {
		nodeList = segments;
	} else if (Array.isArray(paths) && paths.length > 0) {
		// Auto-generate nodes from paths (unique node indices)
		const nodeIndices = Array.from(new Set(paths.flat()));
		nodeList = nodeIndices.map((idx) => ({
			label: idx + 1,
		}));
	} else {
		// Default to 3 nodes for demo
		nodeList = [{}, {}, {}];
	}
	const nodeCount = nodeList.length;
	const nodeSpacing = SVG_SIZE / (nodeCount + 1);
	const nodes = nodeList.map((seg, i) => ({
		...seg,
		x: nodeSpacing * (i + 1),
		y: SVG_SIZE / 2,
	}));

	// Support both 'tunnels' as advanced (with from/to) or simple ([from, to])
	let tunnelList: any[] = [];
	if (Array.isArray(tunnels) && tunnels.length > 0) {
		if (typeof tunnels[0][0] === 'number') {
			// Simple array: [[from, to], ...]
			tunnelList = tunnels.map(
				([from, to]: [number, number]) => ({ from, to })
			);
		} else {
			tunnelList = tunnels;
		}
	} else if (
		Array.isArray(props.tunnels) &&
		props.tunnels.length > 0
	) {
		tunnelList = props.tunnels;
	} else if (Array.isArray(props.tunnels)) {
		tunnelList = [];
	}

	// Support 'paths' as main path (simple) or segments (advanced)
	let mainPath: number[] = [];
	if (Array.isArray(paths) && paths.length > 0) {
		// Flatten and dedupe
		mainPath = Array.from(new Set(paths.flat()));
	} else if (
		Array.isArray(segments) &&
		segments.length > 0
	) {
		mainPath = segments.map((_, i) => i);
	} else {
		mainPath = [0, 1, 2];
	}

	return (
		<div
			className={
				(styles.tunnelAlternatePathBoard ||
					'tunnel-alternate-path-board') +
				(className ? ' ' + className : '')
			}
			style={style}
			role='group'
			aria-label='Tunnel Alternate Path Board'
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				className={styles.svg}
			>
				{/* Main path */}
				{mainPath.length > 1 && (
					<polyline
						points={mainPath
							.map(
								(idx) => `${nodes[idx]?.x},${nodes[idx]?.y}`
							)
							.join(' ')}
						fill='none'
						stroke={PATH_COLOR}
						strokeWidth={6}
						className={styles.path}
					/>
				)}
				{/* Tunnels */}
				{tunnelList.map((tun, idx) => {
					const from = nodes[tun.from];
					const to = nodes[tun.to];
					if (!from || !to) return null;
					return (
						<path
							key={idx}
							d={`M${from.x},${from.y} Q${(from.x + to.x) / 2},${from.y - 60} ${to.x},${to.y}`}
							stroke={tun.color || TUNNEL_COLOR}
							strokeWidth={4}
							fill='none'
							strokeDasharray='8 6'
							opacity={0.8}
							className={styles.tunnel}
						/>
					);
				})}
				{/* Nodes */}
				{nodes.map((node, idx) => (
					<g key={idx}>
						<circle
							cx={node.x}
							cy={node.y}
							r={NODE_RADIUS}
							fill={node.color || '#fff'}
							stroke={PATH_COLOR}
							strokeWidth={2}
							className={styles.node}
						/>
						<text
							x={node.x}
							y={node.y + 5}
							textAnchor='middle'
							fontSize={15}
							fill={PATH_COLOR}
							className={styles.label}
						>
							{node.label || idx + 1}
						</text>
					</g>
				))}
			</svg>
		</div>
	);
};

export default TunnelAlternatePathBoard;
