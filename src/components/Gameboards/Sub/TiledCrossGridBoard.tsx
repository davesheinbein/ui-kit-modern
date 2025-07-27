import React from 'react';

export interface TiledCrossGridBoardProps {
	grid?: (string | number)[][];
	className?: string;
	style?: React.CSSProperties;
}

const TiledCrossGridBoard: React.FC<
	TiledCrossGridBoardProps
> = ({
	grid = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	],
	className,
	style,
}) => {
	return (
		<div className={className} style={style}>
			<table>
				<tbody>
					{grid.map((row, i) => (
						<tr key={i}>
							{row.map((cell, j) => (
								<td
									key={j}
									style={{
										border: '1px solid #ccc',
										width: 32,
										height: 32,
										textAlign: 'center',
									}}
								>
									{cell !== null && cell !== undefined ?
										cell
									:	''}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TiledCrossGridBoard;
