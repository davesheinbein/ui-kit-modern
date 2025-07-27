import React from 'react';

export interface ForkedPathBoardProps {
	forks: any[];
	[key: string]: any;
}

import './ForkedPathBoard.module.scss'; // Example: swap for dedicated SCSS later

const ForkedPathBoard: React.FC<ForkedPathBoardProps> = ({
	forks = [],
	className = '',
	style = {},
	...props
}) => {
	// Each fork: [{ points: [{x, y}], color, label }]
	// Example: forks = [ { points: [{x:10,y:10},{x:100,y:50}], color:'#e63946', label:'A' }, ... ]
	const width = 400;
	const height = 200;
	return (
		<div
			className={`forked-path-board ${className}`.trim()}
			style={{ width, height, ...style }}
			{...props}
		>
			<svg
				viewBox={`0 0 ${width} ${height}`}
				width={width}
				height={height}
			>
				{forks.map((fork, idx) => (
					<g key={idx}>
						{fork.points && fork.points.length > 1 && (
							<polyline
								points={fork.points
									.map((p: any) => `${p.x},${p.y}`)
									.join(' ')}
								fill='none'
								stroke={fork.color || '#457b9d'}
								strokeWidth={4}
								className='forked-path-board__path'
								opacity={0.85}
							/>
						)}
						{/* Draw nodes */}
						{fork.points &&
							fork.points.map((p: any, i: number) => (
								<circle
									key={i}
									cx={p.x}
									cy={p.y}
									r={10}
									fill={fork.color || '#a8dadc'}
									stroke='#333'
									strokeWidth={2}
									className='forked-path-board__node'
									opacity={0.95}
								/>
							))}
						{/* Label for fork */}
						{fork.label &&
							fork.points &&
							fork.points.length > 0 && (
								<text
									x={fork.points[0].x}
									y={fork.points[0].y - 16}
									fontSize={16}
									fill='#222'
									className='forked-path-board__label'
									textAnchor='middle'
									dominantBaseline='middle'
								>
									{fork.label}
								</text>
							)}
					</g>
				))}
			</svg>
			{forks.length === 0 && (
				<div className='forked-path-board__empty'>
					No forks to display.
				</div>
			)}
		</div>
	);
};

export default ForkedPathBoard;
