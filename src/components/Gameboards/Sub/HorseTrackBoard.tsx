import React, { useMemo } from 'react';
import '../../Gameboards/gameboards.module.scss';

/**
 * Props for HorseTrackBoard component.
 * @property lanes Number of lanes on the track.
 * @property width SVG width in px.
 * @property height SVG height in px.
 * @property laneWidth Width of each lane in px.
 * @property trackPadding Padding from edge in px.
 * @property laneColors Array of lane fill colors.
 * @property showLaneNumbers Show lane numbers overlay.
 * @property showFinishLine Show finish line marker.
 * @property showStartLine Show start line marker.
 * @property horses Array of horse positions (0-1, per lane).
 * @property horseIcons Optional custom horse SVG/icon per lane.
 * @property onLaneClick Callback when a lane is clicked.
 * @property onHorseClick Callback when a horse is clicked.
 * @property theme 'light' | 'dark' | 'auto'.
 * @property className Optional wrapper class.
 * @property style Optional wrapper style.
 */
export interface HorseTrackBoardProps {
	lanes?: number;
	width?: number;
	height?: number;
	laneWidth?: number;
	trackPadding?: number;
	laneColors?: string[];
	showLaneNumbers?: boolean;
	showFinishLine?: boolean;
	showStartLine?: boolean;
	horses?: number[]; // 0-1, per lane
	horseIcons?: React.ReactNode[];
	onLaneClick?: (lane: number) => void;
	onHorseClick?: (lane: number) => void;
	theme?: 'light' | 'dark' | 'auto';
	className?: string;
	style?: React.CSSProperties;
}

const DEFAULT_LANES = 4;
const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 400;
const DEFAULT_LANE_WIDTH = 15;
const DEFAULT_TRACK_PADDING = 20;
const DEFAULT_COLORS = [
	'#e0c68b',
	'#f5e6c8',
	'#d1b280',
	'#f8f3e1',
];

/**
 * HorseTrackBoard displays a dynamic, interactive horse race track with animated horses and lane features.
 * Supports gradients, shadows, dark mode, responsive scaling, and custom SVG decorations.
 */
const HorseTrackBoard: React.FC<HorseTrackBoardProps> = ({
	lanes = DEFAULT_LANES,
	width = DEFAULT_WIDTH,
	height = DEFAULT_HEIGHT,
	laneWidth = DEFAULT_LANE_WIDTH,
	trackPadding = DEFAULT_TRACK_PADDING,
	laneColors = DEFAULT_COLORS,
	showLaneNumbers = true,
	showFinishLine = true,
	showStartLine = true,
	horses = [],
	horseIcons = [],
	onLaneClick,
	onHorseClick,
	theme = 'auto',
	className = '',
	style = {},
}) => {
	const fallbackColors = [
		'#e0c68b',
		'#f5e6c8',
		'#d1b280',
		'#f8f3e1',
	];
	const safeLaneColors =
		(
			Array.isArray(laneColors) &&
			laneColors.length >= lanes
		) ?
			laneColors
		:	fallbackColors.slice(0, lanes);
	const safeHorses =
		Array.isArray(horses) && horses.length === lanes ?
			horses
		:	[0.2, 0.5, 0.7, 0.9].slice(0, lanes);

	const trackLength = width - 2 * trackPadding;
	const trackHeight = height - 2 * trackPadding;
	const laneSpacing = trackHeight / lanes;

	return (
		<div
			className={`horse-track-wrapper${theme === 'dark' ? ' horse-track-dark' : ''} ${className}`}
			style={style}
		>
			<svg
				className='horse-track-svg'
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
			>
				{/* Track background */}
				<rect
					x={trackPadding}
					y={trackPadding}
					width={trackLength}
					height={trackHeight}
					rx={30}
					fill='#f4f4f4'
					stroke='#d1b280'
					strokeWidth={4}
				/>

				{/* Lanes */}
				{Array.from({ length: lanes }).map((_, i) => {
					const laneY = trackPadding + i * laneSpacing;
					return (
						<g key={`lane-${i}`}>
							<rect
								className='horse-track-lane'
								x={trackPadding}
								y={laneY}
								width={trackLength}
								height={laneSpacing - 4}
								fill={
									safeLaneColors[i % safeLaneColors.length]
								}
								onClick={() => onLaneClick?.(i)}
							/>
							{showLaneNumbers && (
								<text
									className='horse-track-lane-label'
									x={trackPadding + 10}
									y={laneY + laneSpacing / 2}
									fontSize={24}
									fill='#8a6d3b'
									dominantBaseline='middle'
								>
									{`Lane ${i + 1}`}
								</text>
							)}
						</g>
					);
				})}

				{/* Start line */}
				{showStartLine && (
					<rect
						className='horse-track-start-line'
						x={trackPadding + 10}
						y={trackPadding}
						width={6}
						height={trackHeight}
						fill='#38bdf8'
						opacity={0.7}
					/>
				)}
				{/* Finish line */}
				{showFinishLine && (
					<rect
						className='horse-track-finish-line'
						x={width - trackPadding - 16}
						y={trackPadding}
						width={6}
						height={trackHeight}
						fill='#ef4444'
						opacity={0.7}
					/>
				)}

				{/* Horses */}
				{safeHorses.map((pos, i) => {
					const laneY =
						trackPadding +
						i * laneSpacing +
						laneSpacing / 2;
					const horseX =
						trackPadding + 20 + pos * (trackLength - 40);
					return (
						<g key={`horse-${i}`}>
							<circle
								className='horse-track-horse'
								cx={horseX}
								cy={laneY}
								r={18}
								fill='#2563eb'
								stroke='#fff'
								strokeWidth={3}
								onClick={() => onHorseClick?.(i)}
							/>
							{horseIcons && horseIcons[i] && (
								<g
									className='horse-track-horse-icon'
									transform={`translate(${horseX - 12},${laneY - 12})`}
								>
									{horseIcons[i]}
								</g>
							)}
						</g>
					);
				})}
			</svg>
		</div>
	);
};

export default HorseTrackBoard;
