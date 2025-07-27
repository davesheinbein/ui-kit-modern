import React from 'react';

export interface DotConnectionBoardProps {
	dots: any[];
	connections: any[];
	[key: string]: any;
}

const DotConnectionBoard: React.FC<
	DotConnectionBoardProps
> = ({
	dots = [],
	connections = [],
	className = '',
	style = {},
	dotRadius = 10,
	onDotClick,
	onConnectionClick,
	...props
}) => {
	// Each dot: { id, x, y, color }
	// Each connection: { id, from, to, color }
	// SVG layout, scalable
	const width = 400;
	const height = 400;
	return (
		<div
			className={`dot-connection-board ${className}`}
			style={style}
			{...props}
		>
			<svg
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
			>
				{/* Render connections as lines */}
				{connections.map((conn: any, idx: number) => {
					const fromDot = dots.find(
						(d: any) => d.id === conn.from
					);
					const toDot = dots.find(
						(d: any) => d.id === conn.to
					);
					if (!fromDot || !toDot) return null;
					return (
						<line
							key={conn.id || idx}
							x1={fromDot.x}
							y1={fromDot.y}
							x2={toDot.x}
							y2={toDot.y}
							stroke={conn.color || '#2196f3'}
							strokeWidth={4}
							opacity={0.8}
							style={{
								cursor:
									onConnectionClick ? 'pointer' : 'default',
							}}
							onClick={() =>
								onConnectionClick && onConnectionClick(conn)
							}
						/>
					);
				})}
				{/* Render dots as circles */}
				{dots.map((dot: any, idx: number) => (
					<circle
						key={dot.id || idx}
						cx={dot.x}
						cy={dot.y}
						r={dotRadius}
						fill={dot.color || '#fff'}
						stroke='#333'
						strokeWidth={2}
						opacity={0.95}
						style={{
							cursor: onDotClick ? 'pointer' : 'default',
						}}
						onClick={() => onDotClick && onDotClick(dot)}
					/>
				))}
			</svg>
		</div>
	);
};

export default DotConnectionBoard;
