import React from 'react';

export interface FractalPatternBoardProps {
	fractalData: any;
	[key: string]: any;
}

import './FractalPatternBoard.module.scss'; // Example: swap for dedicated SCSS later

function sierpinskiPoints(
	x: number,
	y: number,
	size: number
): string {
	const h = (size * Math.sqrt(3)) / 2;
	return `${x},${y + h} ${x + size / 2},${y} ${x + size},${y + h}`;
}

function renderSierpinski(
	x: number,
	y: number,
	size: number,
	depth: number,
	color: string
): JSX.Element[] {
	if (depth === 0) {
		return [
			<polygon
				key={`tri-${x}-${y}-${size}`}
				points={sierpinskiPoints(x, y, size)}
				fill={color}
				stroke='#333'
				strokeWidth={1}
				className='fractal-pattern-board__triangle'
				opacity={0.9}
			/>,
		];
	}
	const half = size / 2;
	return [
		...renderSierpinski(x, y, half, depth - 1, color),
		...renderSierpinski(
			x + half / 2,
			y,
			half,
			depth - 1,
			color
		),
		...renderSierpinski(
			x + half,
			y + (half * Math.sqrt(3)) / 2,
			half,
			depth - 1,
			color
		),
	];
}

const FractalPatternBoard: React.FC<
	FractalPatternBoardProps
> = ({
	fractalData = {},
	className = '',
	style = {},
	...props
}) => {
	// fractalData: { type: 'sierpinski', depth: number, color: string }
	const type = fractalData.type || 'sierpinski';
	const depth = fractalData.depth ?? 3;
	const color = fractalData.color || '#a8dadc';
	const size = fractalData.size || 320;
	const width = size;
	const height = (size * Math.sqrt(3)) / 2;

	let fractal: JSX.Element[] = [];
	if (type === 'sierpinski') {
		fractal = renderSierpinski(0, 0, size, depth, color);
	} else {
		fractal = [
			<text
				x={width / 2}
				y={height / 2}
				textAnchor='middle'
				fontSize={24}
				fill='#888'
			>
				Unknown fractal type
			</text>,
		];
	}

	return (
		<div
			className={`fractal-pattern-board ${className}`.trim()}
			style={{ width, height, ...style }}
			{...props}
		>
			<svg
				viewBox={`0 0 ${width} ${height}`}
				width={width}
				height={height}
			>
				{fractal}
			</svg>
			{depth === 0 && (
				<div className='fractal-pattern-board__empty'>
					No fractal (depth 0).
				</div>
			)}
		</div>
	);
};

export default FractalPatternBoard;
