import React from 'react';

export interface ConstellationMapBoardProps {
	stars: any[];
	connections: any[];
	[key: string]: any;
}

const ConstellationMapBoard: React.FC<
	ConstellationMapBoardProps
> = ({
	stars = [],
	connections = [],
	starRadius = 10,
	className = '',
	style = {},
	...props
}) => {
	// Each star: { x, y, label? }
	// Each connection: { from: number, to: number }
	const width = 400;
	const height = 300;
	return (
		<div
			className={`constellation-map-board ${className}`.trim()}
			style={style}
			{...props}
		>
			<svg
				width={width}
				height={height}
				style={{ width: '100%', height: 'auto' }}
			>
				{/* Draw connections as lines */}
				{connections.map(
					(
						conn: { from: number; to: number },
						idx: number
					) => {
						const fromStar = stars[conn.from];
						const toStar = stars[conn.to];
						if (!fromStar || !toStar) return null;
						return (
							<line
								key={idx}
								x1={fromStar.x}
								y1={fromStar.y}
								x2={toStar.x}
								y2={toStar.y}
								stroke='#457b9d'
								strokeWidth={2}
								opacity={0.7}
							/>
						);
					}
				)}
				{/* Draw stars as circles */}
				{stars.map(
					(
						star: { x: number; y: number; label?: string },
						idx: number
					) => (
						<g key={idx}>
							<circle
								cx={star.x}
								cy={star.y}
								r={starRadius}
								fill='#f1faee'
								stroke='#e63946'
								strokeWidth={2}
							/>
							{star.label && (
								<text
									x={star.x}
									y={star.y - starRadius - 4}
									textAnchor='middle'
									fontSize={12}
									fill='#222'
								>
									{star.label}
								</text>
							)}
						</g>
					)
				)}
			</svg>
		</div>
	);
};

export default ConstellationMapBoard;
