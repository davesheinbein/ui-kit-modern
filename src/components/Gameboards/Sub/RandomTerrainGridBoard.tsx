import React from 'react';

export interface RandomTerrainGridBoardProps {
	grid: any[];
	terrainTypes: string[];
	[key: string]: any;
}

import styles from './RandomTerrainGridBoard.module.scss';

const getRandomTerrain = (terrainTypes: string[]) => {
	return terrainTypes[
		Math.floor(Math.random() * terrainTypes.length)
	];
};

const RandomTerrainGridBoard: React.FC<
	RandomTerrainGridBoardProps
> = ({
	grid = [[]],
	terrainTypes = ['grass', 'water', 'mountain', 'forest'],
	cellRenderer,
	className = '',
	style = {},
	...props
}) => {
	// Fallback: assign random terrain to each cell if not provided
	const renderedGrid = grid.map(
		(row: any[], rowIdx: number) =>
			row.map((cell: any, colIdx: number) => {
				const terrain =
					cell?.terrain || getRandomTerrain(terrainTypes);
				return {
					...cell,
					terrain,
					row: rowIdx,
					col: colIdx,
				};
			})
	);

	return (
		<div
			className={`${styles.randomTerrainGridBoard} ${className}`.trim()}
			style={style}
			role='grid'
			aria-label='Random Terrain Grid Board'
			{...props}
		>
			{renderedGrid.map((row: any[], rowIdx: number) => (
				<div
					key={rowIdx}
					className={styles.gridRow}
					role='row'
				>
					{row.map((cell: any, colIdx: number) => (
						<div
							key={colIdx}
							className={`${styles.gridCell} ${styles[cell.terrain] || ''}`.trim()}
							role='gridcell'
							aria-label={`Row ${rowIdx + 1}, Col ${colIdx + 1}, Terrain: ${cell.terrain}`}
							tabIndex={0}
						>
							{cellRenderer ?
								cellRenderer(cell)
							:	cell.terrain}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default RandomTerrainGridBoard;
