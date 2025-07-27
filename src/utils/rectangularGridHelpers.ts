// Utility functions for rectangular grid logic and sample data

/**
 * Generates a 2D array representing a rectangular grid of given rows and columns
 */
export function createRectangularGrid<T = null>(
	rows: number,
	columns: number,
	fill: T = null as any
): T[][] {
	return Array.from({ length: rows }, () =>
		Array(columns).fill(fill)
	);
}

/**
 * Returns the adjacent cell indices (up, down, left, right) for a given cell in a rectangular grid
 */
export function getRectangularGridAdjacency(
	rows: number,
	columns: number,
	rowIdx: number,
	colIdx: number
): [number, number][] {
	const adj: [number, number][] = [];
	if (rowIdx > 0) adj.push([rowIdx - 1, colIdx]); // up
	if (rowIdx < rows - 1) adj.push([rowIdx + 1, colIdx]); // down
	if (colIdx > 0) adj.push([rowIdx, colIdx - 1]); // left
	if (colIdx < columns - 1) adj.push([rowIdx, colIdx + 1]); // right
	return adj;
}

/**
 * Returns all [row, col] indices in a rectangular grid
 */
export function getAllRectangularGridIndices(
	rows: number,
	columns: number
): [number, number][] {
	const indices: [number, number][] = [];
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < columns; c++) {
			indices.push([r, c]);
		}
	}
	return indices;
}
