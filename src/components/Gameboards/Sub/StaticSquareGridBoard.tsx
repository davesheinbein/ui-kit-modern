import React from 'react';

export interface StaticSquareGridBoardProps {
	grid: (string | number)[][];
	className?: string;
	style?: React.CSSProperties;
}

const StaticSquareGridBoard: React.FC<
	StaticSquareGridBoardProps
> = ({ grid = [[]], className, style }) => {
	return (
		<table className={className} style={style}>
			<tbody>
				{grid.map((row, rowIdx) => (
					<tr key={rowIdx}>
						{row.map((cell, colIdx) => (
							<td key={colIdx}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default StaticSquareGridBoard;
