import React from 'react';

export interface IntersectingLinesBoardProps {
	intersections: any[];
	lines: any[];
	[key: string]: any;
}

import './IntersectingLinesBoard.module.scss';

const BOARD_SIZE = 300;
const PADDING = 32;

const IntersectingLinesBoard: React.FC<
	IntersectingLinesBoardProps
> = ({
	intersections = [],
	lines = [],
	className = '',
	style = {},
	...props
}) => {
	// Defensive: handle missing intersections/lines
	const hasIntersections =
		Array.isArray(intersections) &&
		intersections.length > 0;
	const hasLines = Array.isArray(lines) && lines.length > 0;

	return (
		<div
			className={`intersecting-lines-board ${className}`.trim()}
			style={style}
			{...props}
		>
			<svg
				viewBox={`0 0 ${BOARD_SIZE} ${BOARD_SIZE}`}
				width={BOARD_SIZE}
				height={BOARD_SIZE}
				className='intersecting-lines-board__svg'
			>
				{/* Render lines */}
				{hasLines &&
					lines.map((line: any, idx: number) => (
						<line
							key={idx}
							x1={line.x1}
							y1={line.y1}
							x2={line.x2}
							y2={line.y2}
							stroke='#64748b'
							strokeWidth={4}
							strokeDasharray={
								line.dashed ? '8 6' : undefined
							}
						/>
					))}
				{/* Render intersections */}
				{hasIntersections &&
					intersections.map((pt: any, idx: number) => (
						<circle
							key={idx}
							cx={pt.x}
							cy={pt.y}
							r={14}
							fill={pt.color || '#fbbf24'}
							stroke='#334155'
							strokeWidth={2}
						/>
					))}
				{/* Render intersection labels */}
				{hasIntersections &&
					intersections.map((pt: any, idx: number) => (
						<text
							key={'label-' + idx}
							x={pt.x}
							y={pt.y + 5}
							textAnchor='middle'
							fontSize={14}
							fill='#334155'
						>
							{pt.label}
						</text>
					))}
			</svg>
			<div className='intersecting-lines-board__info'>
				<span className='intersecting-lines-board__label'>
					Intersecting Lines Board
				</span>
				{!hasIntersections && (
					<span className='intersecting-lines-board__empty'>
						No intersections
					</span>
				)}
				{!hasLines && (
					<span className='intersecting-lines-board__empty'>
						No lines
					</span>
				)}
			</div>
		</div>
	);
};

export default IntersectingLinesBoard;
