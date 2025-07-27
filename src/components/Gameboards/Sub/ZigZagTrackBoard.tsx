import React from 'react';

// Try to import dedicated SCSS module, fallback to empty object
let styles: any = {};
try {
	styles = require('./ZigZagTrackBoard.module.scss');
} catch {}

export interface ZigZagTrackBoardProps {
	turns?: number;
	positions?: { label?: string; color?: string }[];
	nodeRenderer?: (
		node: any,
		idx: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const SVG_SIZE = 480;
const TRACK_LENGTH = 400;
const TRACK_HEIGHT = 220;
const NODE_RADIUS = 18;

function getZigZagPoints(
	turns: number,
	length: number,
	height: number
) {
	// Returns array of [x, y] points for the zig-zag path
	const points = [];
	for (let i = 0; i <= turns; i++) {
		const x =
			(length / turns) * i + (SVG_SIZE - length) / 2;
		const y =
			i % 2 === 0 ?
				(SVG_SIZE - height) / 2
			:	(SVG_SIZE + height) / 2;
		points.push([x, y]);
	}
	return points;
}

const ZigZagTrackBoard: React.FC<ZigZagTrackBoardProps> = ({
	turns = 5,
	positions = [],
	nodeRenderer,
	className = '',
	style = {},
	...props
}) => {
	const points = getZigZagPoints(
		turns,
		TRACK_LENGTH,
		TRACK_HEIGHT
	);
	// Place tokens/positions along the path
	const nodeCount = points.length;
	const ariaLabel = 'Zig-zag track board';

	return (
		<div
			className={`${styles?.zigZagTrackBoard ?? ''} ${className}`.trim()}
			style={style}
			role='img'
			aria-label={ariaLabel}
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				className={styles?.zigZagTrackBoard__svg}
			>
				{/* Draw zig-zag path */}
				<polyline
					points={points
						.map(([x, y]) => `${x},${y}`)
						.join(' ')}
					fill='none'
					stroke='#64748b'
					strokeWidth={8}
					strokeLinejoin='round'
				/>
				{/* Draw nodes/tokens */}
				{points.map(([x, y], idx) => {
					const node = positions[idx] || {};
					if (nodeRenderer) return nodeRenderer(node, idx);
					return (
						<g key={idx}>
							<circle
								cx={x}
								cy={y}
								r={NODE_RADIUS}
								fill={node.color || '#fbbf24'}
								stroke='#334155'
								strokeWidth={3}
								aria-label={node.label || `Node ${idx + 1}`}
							/>
							{node.label && (
								<text
									x={x}
									y={y + 5}
									textAnchor='middle'
									fontSize={16}
									fill='#22223b'
									fontWeight={600}
								>
									{node.label}
								</text>
							)}
						</g>
					);
				})}
			</svg>
		</div>
	);
};

export function generateZigZagPositions(
	turns: number
): { label: string; color: string }[] {
	// Utility: generate sample positions for visual variety
	const palette = [
		'#fbbf24',
		'#60a5fa',
		'#f472b6',
		'#a3e635',
		'#f87171',
		'#a78bfa',
	];
	return Array.from({ length: turns + 1 }, (_, i) => ({
		label: `N${i + 1}`,
		color: palette[i % palette.length],
	}));
}

export default ZigZagTrackBoard;
