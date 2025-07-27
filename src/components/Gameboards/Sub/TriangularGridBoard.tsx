import React from 'react';
let styles: any = {};
try {
	styles = require('./TriangularGridBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.scss');
	} catch {
		styles = {};
	}
}

export interface TriangularGridBoardProps {
	rows?: number;
	columns?: number;
	triangles?: any[][] | any[];
	cellRenderer?: (
		triangle: any,
		rowIdx: number,
		colIdx: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const TriangularGridBoard: React.FC<
	TriangularGridBoardProps
> = (props) => {
	let {
		rows,
		columns,
		triangles,
		cellRenderer = (triangle, rowIdx, colIdx) => {
			if (triangle == null) return '';
			if (typeof triangle === 'object') {
				// If it's an array, join as string
				if (Array.isArray(triangle))
					return triangle.join(', ');
				// If it's a React element, return as is
				if (React.isValidElement(triangle)) return triangle;
				// Otherwise, render as JSON string
				return (
					<span
						style={{ fontSize: '0.8em', color: '#888' }}
					>
						{JSON.stringify(triangle)}
					</span>
				);
			}
			return String(triangle);
		},
		className = '',
		style = {},
		...rest
	} = props;

	// If triangles is a flat array, auto-convert to NxN grid
	if (
		Array.isArray(triangles) &&
		triangles.length > 0 &&
		!Array.isArray(triangles[0])
	) {
		const n = Math.round(Math.sqrt(triangles.length));
		rows = rows || n;
		columns = columns || n;
		const grid: any[][] = [];
		for (let i = 0; i < rows; i++) {
			grid.push(
				triangles.slice(i * columns, (i + 1) * columns)
			);
		}
		triangles = grid;
	} else if (!triangles) {
		rows = rows || 3;
		columns = columns || 3;
		triangles = Array.from({ length: rows }, () =>
			Array(columns).fill(null)
		);
	} else {
		rows =
			rows ||
			(Array.isArray(triangles) ? triangles.length : 3);
		columns =
			columns ||
			(Array.isArray(triangles) && triangles[0] ?
				triangles[0].length
			:	3);
	}
	return (
		<div
			className={`${styles?.triangularGridBoard || 'triangular-grid-board'} ${className}`.trim()}
			style={{
				display: 'grid',
				gridTemplateRows: `repeat(${rows}, 1fr)`,
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: 4,
				maxWidth: (columns ?? 3) * 48,
				margin: '0 auto',
				...style,
			}}
			role='grid'
			aria-label='Triangular grid board'
			{...rest}
		>
			{triangles.map((row: any[], rowIdx: number) =>
				row.map((triangle: any, colIdx: number) => (
					<div
						key={`${rowIdx}-${colIdx}`}
						className={
							styles?.triangularGridCell ||
							'triangular-grid-board__cell'
						}
						role='gridcell'
						aria-label={`Triangle cell ${rowIdx * (columns ?? 3) + colIdx + 1}`}
						tabIndex={0}
						style={{
							width: 40,
							height: 40,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							background: '#f3f4f6',
							border: '1px solid #d1d5db',
							borderRadius: 4,
							...style,
						}}
					>
						<svg width='32' height='32' viewBox='0 0 32 32'>
							<polygon
								points='16,0 32,32 0,32'
								fill='#f3f4f6'
								stroke='#d1d5db'
							/>
						</svg>
						{cellRenderer(triangle, rowIdx, colIdx)}
					</div>
				))
			)}
		</div>
	);
};

export default TriangularGridBoard;
