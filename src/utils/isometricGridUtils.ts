export function getIsometricGridPositions(
	count: number,
	cols: number = 4,
	size: number = 40
) {
	// Returns array of {x, y} positions for isometric grid
	return Array.from({ length: count }, (_, idx) => {
		const col = idx % cols;
		const row = Math.floor(idx / cols);
		return {
			x: col * size + (row % 2) * (size * 0.5),
			y: row * size * 0.75,
		};
	});
}
