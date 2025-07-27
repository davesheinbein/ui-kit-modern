import React from 'react';

export interface WindingSnakePathBoardProps {
	segments?: any[];
	points?: any[];
	count?: number;
	className?: string;
	style?: React.CSSProperties;
	segmentRenderer?: (
		seg: any,
		idx: number
	) => React.ReactNode;
	[key: string]: any;
}

// Try to import dedicated SCSS module, fallback to empty object
let styles: any = {};
try {
	styles = require('./WindingSnakePathBoard.module.scss');
} catch {}

const SVG_SIZE = 480;
const SNAKE_RADIUS = 18;

function getSnakePath(segments: any[]) {
	if (!segments || segments.length < 2) return '';
	return segments
		.map((seg, i) =>
			i === 0 ? `M${seg.x},${seg.y}` : `L${seg.x},${seg.y}`
		)
		.join(' ');
}

const WindingSnakePathBoard: React.FC<
	WindingSnakePathBoardProps
> = ({
	segments,
	points,
	count,
	className = '',
	style = {},
	segmentRenderer,
	...props
}) => {
	// Accept either 'segments' (advanced) or 'points' (simple)
	let segs: any[] = [];
	if (Array.isArray(segments) && segments.length > 0) {
		segs = segments;
	} else if (Array.isArray(points) && points.length > 0) {
		// Auto-generate segment objects from points (array of [x, y] or numbers)
		segs = points.map((pt, i) =>
			Array.isArray(pt) && pt.length === 2 ?
				{ x: pt[0], y: pt[1], label: (i + 1).toString() }
			: typeof pt === 'number' ?
				{
					x: 60 + i * 60,
					y: SVG_SIZE / 2,
					label: pt.toString(),
				}
			:	{ x: 60 + i * 60, y: SVG_SIZE / 2, ...pt }
		);
	} else if (typeof count === 'number' && count > 1) {
		// Auto-generate a wavy snake for demo
		segs = Array.from({ length: count }, (_, i) => ({
			x: 60 + i * 60,
			y: SVG_SIZE / 2 + Math.sin(i / 2) * 60,
			label: (i + 1).toString(),
		}));
	} else {
		// Default: 5 segments in a wavy line
		segs = Array.from({ length: 5 }, (_, i) => ({
			x: 60 + i * 60,
			y: SVG_SIZE / 2 + Math.sin(i / 2) * 60,
			label: (i + 1).toString(),
		}));
	}

	// Default segment rendering
	const renderSegment = (seg: any, idx: number) =>
		segmentRenderer ?
			segmentRenderer(seg, idx)
		:	<circle
				key={seg.id ?? idx}
				cx={seg.x}
				cy={seg.y}
				r={SNAKE_RADIUS}
				fill={seg.color ?? '#22d3ee'}
				stroke='#0e7490'
				strokeWidth={2}
				aria-label={seg.label}
			/>;

	return (
		<div
			className={`${styles['winding-snake-path-board'] ?? 'winding-snake-path-board'} ${className}`.trim()}
			style={style}
			role='region'
			aria-label='Winding Snake Path Board'
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				style={{ display: 'block', margin: '0 auto' }}
			>
				{/* Snake path */}
				{segs.length > 1 && (
					<path
						d={getSnakePath(segs)}
						fill='none'
						stroke='#0e7490'
						strokeWidth={6}
						strokeLinejoin='round'
						strokeLinecap='round'
						aria-label='Snake Path'
					/>
				)}
				{/* Segments */}
				{segs.map(renderSegment)}
				{/* Segment labels */}
				{segs.map((seg: any, idx: number) =>
					seg.label ?
						<text
							key={`label-${seg.id ?? idx}`}
							x={seg.x}
							y={seg.y + SNAKE_RADIUS + 16}
							textAnchor='middle'
							fontSize={14}
							fill='#0e7490'
							aria-label={seg.label}
						>
							{seg.label}
						</text>
					:	null
				)}
			</svg>
		</div>
	);
};

export default WindingSnakePathBoard;
