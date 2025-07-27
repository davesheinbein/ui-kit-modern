// Utility functions for hex grid logic and sample data

/**
 * Generates a 2D array representing a hex grid of given rows and columns
 */
export function createHexGrid(
	rows: number,
	columns: number,
	fill: any = {}
): any[][] {
	return Array.from({ length: rows }, () =>
		Array.from({ length: columns }, () => ({ ...fill }))
	);
}

/**
 * Returns the axial coordinates of all hexes in a grid
 */
export function getHexAxialCoordinates(
	rows: number,
	columns: number
): [number, number][] {
	const coords: [number, number][] = [];
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < columns; c++) {
			coords.push([r, c - Math.floor(r / 2)]); // Offset for even-q layout
		}
	}
	return coords;
}

/**
 * Returns the 6 adjacent axial coordinates for a given hex
 */
export function getHexAdjacency(
	q: number,
	r: number
): [number, number][] {
	const directions = [
		[+1, 0],
		[0, +1],
		[-1, +1],
		[-1, 0],
		[0, -1],
		[+1, -1],
	];
	return directions.map(([dq, dr]) => [q + dq, r + dr]);
}
