import React from 'react';

export interface IsometricCubeGridBoardProps {
	cubes: any[];
	className?: string;
	style?: React.CSSProperties;
	onCubeClick?: (cube: any, idx: number) => void;
}

import './IsometricCubeGridBoard.module.scss';

function getIsometricCube(
	x: number,
	y: number,
	size: number,
	color: string = '#e0e7ef'
) {
	// Returns SVG path for isometric cube at (x, y)
	const dx = size * 0.5;
	const dy = size * 0.25;
	// Points for top, left, right faces
	const top = `${x},${y} ${x + dx},${y - dy} ${x + size},${y} ${x + dx},${y + dy}`;
	const left = `${x},${y} ${x + dx},${y + dy} ${x + dx},${y + size} ${x},${y + size - dy}`;
	const right = `${x + dx},${y + dy} ${x + size},${y} ${x + size},${y + size - dy} ${x + dx},${y + size}`;
	return (
		<g>
			<polygon points={top} fill={color} opacity={0.95} />
			<polygon points={left} fill={color} opacity={0.8} />
			<polygon points={right} fill={color} opacity={0.7} />
		</g>
	);
}

const CUBE_SIZE = 40;

const IsometricCubeGridBoard: React.FC<
	IsometricCubeGridBoardProps
> = ({
	cubes = [],
	className = '',
	style = {},
	onCubeClick,
}) => {
	// Arrange cubes in grid, offset for isometric effect
	const gridCols = Math.ceil(Math.sqrt(cubes.length));
	const gridRows = Math.ceil(cubes.length / gridCols);
	const svgWidth = gridCols * CUBE_SIZE + CUBE_SIZE;
	const svgHeight = gridRows * CUBE_SIZE * 0.75 + CUBE_SIZE;

	return (
		<div
			className={`isometricCubeGridBoard ${className}`.trim()}
			style={style}
		>
			<svg
				width={svgWidth}
				height={svgHeight}
				className='isometricCubeGridBoard__svg'
			>
				{cubes.map((cube, idx) => {
					const col = idx % gridCols;
					const row = Math.floor(idx / gridCols);
					const x =
						col * CUBE_SIZE + (row % 2) * (CUBE_SIZE * 0.5);
					const y = row * CUBE_SIZE * 0.75;
					return (
						<g
							key={idx}
							onClick={() =>
								onCubeClick && onCubeClick(cube, idx)
							}
							style={{
								cursor: onCubeClick ? 'pointer' : 'default',
							}}
						>
							{getIsometricCube(
								x,
								y,
								CUBE_SIZE,
								cube.color || '#e0e7ef'
							)}
							{cube.label && (
								<text
									x={x + CUBE_SIZE * 0.5}
									y={y + CUBE_SIZE * 0.7}
									textAnchor='middle'
									fontSize={14}
									fill='#374151'
									className='isometricCubeGridBoard__label'
								>
									{cube.label}
								</text>
							)}
						</g>
					);
				})}
			</svg>
		</div>
	);
};

export default IsometricCubeGridBoard;
