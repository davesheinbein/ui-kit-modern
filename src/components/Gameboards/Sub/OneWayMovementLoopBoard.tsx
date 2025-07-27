import React from 'react';

export interface OneWayMovementLoopBoardProps {
	positions: any[];
	[key: string]: any;
}

import './OneWayMovementLoopBoard.module.scss';

const RADIUS = 100;
const NODE_RADIUS = 18;
const ARROW_SIZE = 16;

function getNodePosition(
	index: number,
	total: number,
	radius: number
) {
	const angle = (2 * Math.PI * index) / total - Math.PI / 2;
	return {
		x: radius * Math.cos(angle) + radius + NODE_RADIUS,
		y: radius * Math.sin(angle) + radius + NODE_RADIUS,
		angle,
	};
}

const OneWayMovementLoopBoard: React.FC<
	OneWayMovementLoopBoardProps
> = ({
	positions = [],
	nodeRenderer,
	arrowRenderer,
	className = '',
	style = {},
	...props
}) => {
	const total = positions.length;
	const svgSize = 2 * RADIUS + 2 * NODE_RADIUS;
	return (
		<div
			className={`one-way-movement-loop-board ${className}`.trim()}
			style={style}
			{...props}
		>
			<svg
				width={svgSize}
				height={svgSize}
				viewBox={`0 0 ${svgSize} ${svgSize}`}
				className='one-way-movement-loop-board__svg'
			>
				{/* Draw loop path */}
				<circle
					cx={svgSize / 2}
					cy={svgSize / 2}
					r={RADIUS}
					fill='#f8fafc'
					stroke='#e0e0e0'
					strokeWidth={4}
				/>
				{/* Draw nodes and arrows */}
				{positions.map((pos, i) => {
					const { x, y, angle } = getNodePosition(
						i,
						total,
						RADIUS
					);
					// Arrow points from this node to the next
					const nextIdx = (i + 1) % total;
					const { x: nx, y: ny } = getNodePosition(
						nextIdx,
						total,
						RADIUS
					);
					const arrowAngle = Math.atan2(ny - y, nx - x);
					return (
						<g key={i}>
							{/* Node */}
							<circle
								cx={x}
								cy={y}
								r={NODE_RADIUS}
								fill='#90cdf4'
								stroke='#3182ce'
								strokeWidth={2}
							/>
							<text
								x={x}
								y={y + 5}
								textAnchor='middle'
								fontSize={16}
								fontWeight={600}
								fill='#2d3748'
							>
								{nodeRenderer ? nodeRenderer(pos, i) : pos}
							</text>
							{/* Arrow */}
							<g
								transform={`translate(${x},${y}) rotate(${(arrowAngle * 180) / Math.PI})`}
							>
								<polygon
									points={`0,-${ARROW_SIZE / 2} ${ARROW_SIZE},0 0,${ARROW_SIZE / 2}`}
									fill='#3182ce'
									opacity={0.8}
								/>
							</g>
						</g>
					);
				})}
			</svg>
		</div>
	);
};

export default OneWayMovementLoopBoard;
