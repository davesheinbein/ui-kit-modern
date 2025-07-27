// Utility functions for island-hopping map logic

export function generateIslandPositions(
	count: number,
	radius: number = 160,
	center: { x: number; y: number } = { x: 200, y: 200 }
) {
	// Returns array of {x, y} positions in a circle
	return Array.from({ length: count }, (_, i) => {
		const angle = (2 * Math.PI * i) / count;
		return {
			x: center.x + Math.cos(angle) * radius,
			y: center.y + Math.sin(angle) * radius,
		};
	});
}

export function getConnectionLines(
	islands: any[],
	connections: any[]
) {
	// Returns array of {from: {x, y}, to: {x, y}}
	return connections
		.map((conn: any) => {
			const fromIdx =
				typeof conn.from === 'number' ?
					conn.from - 1
				:	islands.findIndex(
						(isl: any) => isl.id === conn.from
					);
			const toIdx =
				typeof conn.to === 'number' ?
					conn.to - 1
				:	islands.findIndex(
						(isl: any) => isl.id === conn.to
					);
			if (fromIdx === -1 || toIdx === -1) return null;
			return {
				from: islands[fromIdx],
				to: islands[toIdx],
			};
		})
		.filter(Boolean);
}
