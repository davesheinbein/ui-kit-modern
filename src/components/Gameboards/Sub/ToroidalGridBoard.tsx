import React from 'react';

export interface ToroidalGridBoardProps {
	[key: string]: any;
}

/**
 * Props for ToroidalGridBoard component.
 * @property grid - 2D array representing the toroidal grid
 * @property wrapRows - Whether rows wrap around
 * @property wrapCols - Whether columns wrap around
 * @property className - Optional className for styling
 * @property style - Optional style for wrapper
 */
export interface ToroidalGridBoardProps {
	grid: any[][];
	wrapRows?: boolean;
	wrapCols?: boolean;
	className?: string;
	style?: React.CSSProperties;
	// Removed extra closing brace
}

/**
 * Renders a toroidal grid (edges wrap around horizontally and vertically)
 */

const ToroidalGridBoard: React.FC<
	ToroidalGridBoardProps
> = ({
	grid = [[]],
	wrapRows = true,
	wrapCols = true,
	className = '',
	style = {},
	...props
}) => {
	const numRows = grid.length;
	const numCols = grid[0]?.length || 0;
	return (
		<div
			className={['toroidal-grid-board', className]
				.join(' ')
				.trim()}
			style={style}
			{...props}
		>
			<table
				style={{
					borderCollapse: 'collapse',
					width: '100%',
				}}
			>
				<tbody>
					{grid.map((row, rowIdx) => (
						<tr key={rowIdx}>
							{row.map((cell, colIdx) => (
								<td
									key={colIdx}
									style={{
										border: '1px solid #ccc',
										width: 40,
										height: 40,
										textAlign: 'center',
										background: '#f8fafc',
									}}
								>
									{(
										typeof cell === 'object' &&
										cell !== null
									) ?
										JSON.stringify(cell)
									:	String(cell)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<div
				style={{
					marginTop: 8,
					fontSize: 12,
					color: '#888',
				}}
			>
				{wrapRows && <span>Rows wrap</span>}
				{wrapRows && wrapCols && <span> | </span>}
				{wrapCols && <span>Columns wrap</span>}
			</div>
		</div>
	);
};

export default ToroidalGridBoard;
