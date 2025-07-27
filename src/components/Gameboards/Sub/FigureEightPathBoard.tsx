import React from 'react';

export interface FigureEightPathBoardProps {
	positions: any[];
	[key: string]: any;
}

const FigureEightPathBoard: React.FC<
	FigureEightPathBoardProps
> = ({
	positions = [],
	className = '',
	style = {},
	...props
}) => {
	// Render figure-eight path as SVG
	// Assume positions is an array of {x, y} objects
	// Draw circles for each position and a path connecting them in a figure-eight
	const pathData =
		positions.length > 1 ?
			positions
				.map(
					(pos, i) =>
						`${i === 0 ? 'M' : 'L'}${pos.x},${pos.y}`
				)
				.join(' ')
		:	'';
	return (
		<div
			className={`figure-eight-path-board ${className}`}
			style={style}
			{...props}
		>
			<svg width='100%' height='240' viewBox='0 0 400 240'>
				<path
					d={pathData}
					stroke='#0077ff'
					strokeWidth={4}
					fill='none'
					opacity={0.7}
				/>
				{positions.map((pos, idx) => (
					<circle
						key={idx}
						cx={pos.x}
						cy={pos.y}
						r={16}
						fill='#bada55'
						stroke='#333'
						strokeWidth={2}
					/>
				))}
			</svg>
		</div>
	);
};

export default FigureEightPathBoard;
