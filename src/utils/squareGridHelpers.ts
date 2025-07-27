// Utility functions for grid/path logic and sample data

/**
 * Generates a 2D array representing a square grid of given size
 */
export function createSquareGrid<T = null>(
	size: number,
	fill: T = null as any
): T[][] {
	return Array.from({ length: size }, () =>
		Array(size).fill(fill)
	);
}

/**
 * Returns the adjacent cell indices (up, down, left, right) for a given cell in a square grid
 */
export function getSquareGridAdjacency(
	size: number,
	idx: number
): number[] {
	const row = Math.floor(idx / size);
	const col = idx % size;
	const adj: number[] = [];
	if (row > 0) adj.push((row - 1) * size + col); // up
	if (row < size - 1) adj.push((row + 1) * size + col); // down
	if (col > 0) adj.push(row * size + (col - 1)); // left
	if (col < size - 1) adj.push(row * size + (col + 1)); // right
	return adj;
}

/**
 * Returns all indices in a square grid
 */
export function getAllSquareGridIndices(
	size: number
): number[] {
	return Array.from({ length: size * size }, (_, i) => i);
}
