import React from 'react';

export interface DropOffCliffsPathBoardProps {
	segments: any[];
	dropPoints: any[];
	[key: string]: any;
}

const DropOffCliffsPathBoard: React.FC<
	DropOffCliffsPathBoardProps
> = ({ segments, dropPoints, ...props }) => {
	// Render drop-off cliffs path
	// segments: array of {x, y} points; dropPoints: array of indices in segments
	const width = 400;
	const height = 200;
	return (
		<div
			className='dropoff-cliffs-path-board'
			style={{
				width,
				height,
				position: 'relative',
				padding: 8,
			}}
			{...props}
		>
			<svg width={width} height={height}>
				{/* Draw path segments */}
				{segments.length > 1 && (
					<polyline
						points={segments
							.map((pt: any) => `${pt.x},${pt.y}`)
							.join(' ')}
						fill='none'
						stroke='#374151'
						strokeWidth={4}
					/>
				)}
				{/* Draw drop points */}
				{dropPoints?.map((idx: number, i: number) => {
					const pt = segments[idx];
					if (!pt) return null;
					return (
						<circle
							key={i}
							cx={pt.x}
							cy={pt.y}
							r={12}
							fill='#f87171'
							stroke='#b91c1c'
							strokeWidth={3}
						/>
					);
				})}
				{/* Draw segment points */}
				{segments.map((pt: any, idx: number) => (
					<circle
						key={idx}
						cx={pt.x}
						cy={pt.y}
						r={7}
						fill='#e0e7ff'
						stroke='#6366f1'
						strokeWidth={2}
					/>
				))}
			</svg>
		</div>
	);
};

export default DropOffCliffsPathBoard;
