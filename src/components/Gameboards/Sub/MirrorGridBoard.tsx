import React from 'react';

export interface MirrorGridBoardProps {
	rows: number;
	columns: number;
	mirrorCells?: number[];
	cells?: any[];
	cellRenderer?: (
		cell: any,
		idx: number,
		mirrored: boolean
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	grid: any[][];
	mirrorAxis?: 'horizontal' | 'vertical';
	className?: string;
	style?: React.CSSProperties;
}

/**
 * Props for MirrorGridBoard component.
 * @property grid - 2D array representing the grid
 * @property mirrorAxis - Axis to mirror ('horizontal' | 'vertical')
 * @property className - Optional className for styling
 * @property style - Optional style for wrapper
 */
export interface MirrorGridBoardProps {
	grid: any[][];
	mirrorAxis?: 'horizontal' | 'vertical';
	className?: string;
	style?: React.CSSProperties;
}

/**
 * Renders a grid with mirror tiles that reflect beams or movement
 */
const MirrorGridBoard: React.FC<MirrorGridBoardProps> = ({
	rows,
	columns,
	mirrorCells = [],
	cells = [],
	cellRenderer = (cell, idx, mirrored) => cell,
	className = '',
	style = {},
	...props
}) => {
	const grid = [];
	for (let row = 0; row < rows; row++) {
		const rowCells = [];
		for (let col = 0; col < columns; col++) {
			const idx = row * columns + col;
			const mirrored = mirrorCells.includes(idx);
			rowCells.push(
				<div
					key={col}
					className={`mirror-grid-board__cell${mirrored ? ' mirror-grid-board__cell--mirrored' : ''}`}
				>
					{cellRenderer(cells[idx] ?? null, idx, mirrored)}
				</div>
			);
		}
		grid.push(
			<div key={row} className='mirror-grid-board__row'>
				{rowCells}
			</div>
		);
	}
	return (
		<div
			className={`mirror-grid-board ${className}`}
			style={style}
			{...props}
		>
			<div className='mirror-grid-board__grid'>{grid}</div>
		</div>
	);
};

export default MirrorGridBoard;
