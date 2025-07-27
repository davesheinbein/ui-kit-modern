// Utility functions for modular square tile grid logic

export function getTileAdjacency(
	tiles: Array<{ x: number; y: number; id: string }>
): Record<string, string[]> {
	// Returns adjacency map: { tileId: [adjacentTileIds] }
	const adjacency: Record<string, string[]> = {};
	tiles.forEach((tile) => {
		adjacency[tile.id] = tiles
			.filter((t) => {
				if (t.id === tile.id) return false;
				// Adjacent if directly next to in grid
				return (
					(t.x === tile.x &&
						Math.abs(t.y - tile.y) === 1) ||
					(t.y === tile.y && Math.abs(t.x - tile.x) === 1)
				);
			})
			.map((t) => t.id);
	});
	return adjacency;
}

export function generateSampleTiles(
	rows: number,
	columns: number
): Array<{
	id: string;
	x: number;
	y: number;
	label: string;
	color: string;
}> {
	// Generates sample tile data for grid
	const tiles = [];
	for (let y = 0; y < rows; y++) {
		for (let x = 0; x < columns; x++) {
			tiles.push({
				id: `t${y * columns + x + 1}`,
				x,
				y,
				label: String.fromCharCode(65 + y * columns + x),
				color: `hsl(${(y * columns + x) * 22},80%,80%)`,
			});
		}
	}
	return tiles;
}
