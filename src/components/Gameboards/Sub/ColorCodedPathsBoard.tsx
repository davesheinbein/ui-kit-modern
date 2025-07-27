import React from 'react';

export interface ColorCodedPathsBoardProps {
	paths: any[];
	colors: string[];
	[key: string]: any;
}

const ColorCodedPathsBoard: React.FC<
	ColorCodedPathsBoardProps
> = ({
	paths = [],
	colors = [],
	nodeRadius = 12,
	className = '',
	style = {},
	...props
}) => {
	// Each path: array of {x, y} points
	// Each color: string for stroke
	const width = 400;
	const height = 300;
	return (
		<div
			className={`color-coded-paths-board ${className}`.trim()}
			style={style}
			{...props}
		>
			<svg
				width={width}
				height={height}
				style={{ width: '100%', height: 'auto' }}
			>
				{paths.map((path, idx) => (
					<g key={idx}>
						{/* Draw path as polyline */}
						<polyline
							points={path
								.map(
									(pt: { x: number; y: number }) =>
										`${pt.x},${pt.y}`
								)
								.join(' ')}
							fill='none'
							stroke={colors[idx % colors.length] || '#888'}
							strokeWidth={4}
						/>
						{/* Draw nodes as circles */}
						{path.map(
							(
								pt: { x: number; y: number },
								nIdx: number
							) => (
								<circle
									key={nIdx}
									cx={pt.x}
									cy={pt.y}
									r={nodeRadius}
									fill={
										colors[idx % colors.length] || '#888'
									}
									opacity={0.7}
								/>
							)
						)}
					</g>
				))}
			</svg>
		</div>
	);
};

export default ColorCodedPathsBoard;
