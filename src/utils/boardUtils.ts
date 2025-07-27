// --- Maze Generation ---
export function generateMaze(
	rows: number,
	cols: number
): number[][] {
	// Simple randomized DFS maze generator
	const maze = Array.from({ length: rows }, () =>
		Array(cols).fill(1)
	); // 1 = wall, 0 = path
	function carve(x: number, y: number) {
		maze[x][y] = 0;
		const dirs = [
			[0, -2],
			[0, 2],
			[-2, 0],
			[2, 0],
		].sort(() => Math.random() - 0.5);
		for (const [dx, dy] of dirs) {
			const nx = x + dx,
				ny = y + dy;
			if (
				nx > 0 &&
				nx < rows &&
				ny > 0 &&
				ny < cols &&
				maze[nx][ny] === 1
			) {
				maze[x + dx / 2][y + dy / 2] = 0;
				carve(nx, ny);
			}
		}
	}
	carve(1, 1);
	return maze;
}

// --- Pathfinding (A*) ---
export function aStar(
	grid: number[][],
	start: [number, number],
	end: [number, number]
): [number, number][] {
	// Basic A* for grid (0 = walkable, 1 = wall)
	const rows = grid.length,
		cols = grid[0].length;
	const open: any[] = [
		{ pos: start, g: 0, h: 0, f: 0, parent: null },
	];
	const closed: Set<string> = new Set();
	function heuristic([x, y]: [number, number]) {
		return Math.abs(x - end[0]) + Math.abs(y - end[1]);
	}
	while (open.length) {
		open.sort((a, b) => a.f - b.f);
		const current = open.shift();
		const [x, y] = current.pos;
		if (x === end[0] && y === end[1]) {
			// Reconstruct path
			const path = [];
			let node = current;
			while (node) {
				path.unshift(node.pos);
				node = node.parent;
			}
			return path;
		}
		closed.add(`${x},${y}`);
		for (const [dx, dy] of [
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0],
		]) {
			const nx = x + dx,
				ny = y + dy;
			if (
				nx >= 0 &&
				nx < rows &&
				ny >= 0 &&
				ny < cols &&
				grid[nx][ny] === 0 &&
				!closed.has(`${nx},${ny}`)
			) {
				const g = current.g + 1;
				const h = heuristic([nx, ny]);
				const f = g + h;
				const existing = open.find(
					(n) => n.pos[0] === nx && n.pos[1] === ny
				);
				if (!existing || g < existing.g) {
					open.push({
						pos: [nx, ny],
						g,
						h,
						f,
						parent: current,
					});
				}
			}
		}
	}
	return [];
}

// --- Modular Tile Placement ---
export function placeModularTiles(
	grid: any[][],
	tiles: any[]
): any[][] {
	// Naive placement: fill grid left-to-right, top-to-bottom
	const placed = grid.map((row) => [...row]);
	let idx = 0;
	for (let i = 0; i < placed.length; i++) {
		for (let j = 0; j < placed[i].length; j++) {
			if (idx < tiles.length) {
				placed[i][j] = tiles[idx++];
			}
		}
	}
	return placed;
}

// --- Spiral Grid Generation ---
export function generateSpiralGrid(
	size: number
): [number, number][] {
	// Returns array of [row, col] in spiral order
	const spiral: [number, number][] = [];
	let top = 0,
		left = 0,
		bottom = size - 1,
		right = size - 1;
	while (top <= bottom && left <= right) {
		for (let col = left; col <= right; col++)
			spiral.push([top, col]);
		top++;
		for (let row = top; row <= bottom; row++)
			spiral.push([row, right]);
		right--;
		if (top <= bottom) {
			for (let col = right; col >= left; col--)
				spiral.push([bottom, col]);
			bottom--;
		}
		if (left <= right) {
			for (let row = bottom; row >= top; row--)
				spiral.push([row, left]);
			left++;
		}
	}
	return spiral;
}

// --- Territory Assignment ---
export function assignTerritories(
	grid: any[][],
	players: string[]
): Record<string, [number, number][]> {
	// Assigns grid cells to players in round-robin
	const territories: Record<string, [number, number][]> =
		{};
	players.forEach((p) => (territories[p] = []));
	let idx = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			const player = players[idx % players.length];
			territories[player].push([i, j]);
			idx++;
		}
	}
	return territories;
}
/**
 * Generates mock stars and connections for ConstellationMapBoard
 */
export function generateConstellation(
	numStars: number,
	width: number,
	height: number
): {
	stars: { x: number; y: number; label: string }[];
	connections: { from: number; to: number }[];
} {
	const stars = Array.from(
		{ length: numStars },
		(_, i) => ({
			x: Math.round(Math.random() * width),
			y: Math.round(Math.random() * height),
			label: String.fromCharCode(65 + i),
		})
	);
	const connections = [];
	for (let i = 0; i < numStars; i++) {
		connections.push({ from: i, to: (i + 1) % numStars });
		if (i % 2 === 0 && i + 2 < numStars) {
			connections.push({ from: i, to: i + 2 });
		}
	}
	return { stars, connections };
}
/**
 * Generates a mock color grid for ColoredMatchGridBoard
 */
export function generateColorGrid(
	rows: number,
	columns: number
): string[][] {
	const palette = [
		'#e63946',
		'#f1faee',
		'#a8dadc',
		'#457b9d',
		'#ffb703',
		'#fb8500',
		'#2a9d8f',
	];
	return Array.from({ length: rows }, (_, r) =>
		Array.from(
			{ length: columns },
			(_, c) => palette[(r * columns + c) % palette.length]
		)
	);
}
/**
 * Generates mock color-coded paths for visual variety in Storybook
 */
export function generateColorCodedPaths(
	numPaths: number,
	numNodes: number,
	width: number,
	height: number
): {
	paths: { x: number; y: number }[][];
	colors: string[];
} {
	const colors = [
		'#e63946',
		'#457b9d',
		'#f1faee',
		'#a8dadc',
		'#2a9d8f',
		'#ffb703',
		'#fb8500',
	];
	const paths = Array.from(
		{ length: numPaths },
		(_, pIdx) =>
			Array.from({ length: numNodes }, (_, nIdx) => ({
				x: Math.round(Math.random() * width),
				y: Math.round(Math.random() * height),
			}))
	);
	return { paths, colors: colors.slice(0, numPaths) };
}
// boardUtils.ts - Utility functions for game board logic

/**
 * Generates a 2D array for a square grid of given rows and columns.
 */
export function generateSquareGrid(
	rows: number,
	cols: number
): string[][] {
	return Array.from({ length: rows }, (_, r) =>
		Array.from({ length: cols }, (_, c) => `${r},${c}`)
	);
}

/**
 * Returns a new collapsed state array after collapsing a tile at index
 */
export function collapseTile(
	collapsed: boolean[],
	idx: number
): boolean[] {
	return collapsed.map((c, i) => (i === idx ? true : c));
}

/**
 * Returns true if all tiles are collapsed
 */
export function areAllCollapsed(
	collapsed: boolean[]
): boolean {
	return collapsed.every((c) => c);
}

/**
 * Returns indices of non-collapsed tiles
 */
export function getActiveTileIndices(
	collapsed: boolean[]
): number[] {
	return collapsed
		.map((c, i) => (!c ? i : -1))
		.filter((i) => i !== -1);
}

/**
 * Calculates the next position in a hex grid given a current position and direction.
 * Directions: 'N', 'NE', 'SE', 'S', 'SW', 'NW'
 */
export function calculateHexMovement(
	current: { q: number; r: number },
	direction: 'N' | 'NE' | 'SE' | 'S' | 'SW' | 'NW'
): { q: number; r: number } {
	const directions = {
		N: { q: 0, r: -1 },
		NE: { q: 1, r: -1 },
		SE: { q: 1, r: 0 },
		S: { q: 0, r: 1 },
		SW: { q: -1, r: 1 },
		NW: { q: -1, r: 0 },
	};
	const move = directions[direction];
	return { q: current.q + move.q, r: current.r + move.r };
}

/**
 * Orders overlays/controls by their 'order' property.
 */
export function orderOverlays<T extends { order?: number }>(
	items: T[]
): T[] {
	return items
		.slice()
		.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

/**
 * Example: Get all cells in a circular grid (radial layout)
 */
export function generateCircularGrid(
	cellCount: number
): number[] {
	return Array.from({ length: cellCount }, (_, i) => i);
}

/**
 * Maze generation using recursive backtracking (returns a 2D maze array)
 */

/**
 * Simple A* pathfinding for grid boards
 */
export function findPath(
	grid: number[][],
	start: [number, number],
	end: [number, number]
): [number, number][] {
	const rows = grid.length;
	const cols = grid[0].length;
	const open: any[] = [
		{ pos: start, g: 0, h: 0, f: 0, parent: null },
	];
	const closed: Set<string> = new Set();
	function heuristic([x, y]: [number, number]) {
		return Math.abs(x - end[0]) + Math.abs(y - end[1]);
	}
	while (open.length) {
		open.sort((a, b) => a.f - b.f);
		const current = open.shift();
		const [x, y] = current.pos;
		if (x === end[0] && y === end[1]) {
			const path = [];
			let node = current;
			while (node) {
				path.unshift(node.pos);
				node = node.parent;
			}
			return path;
		}
		closed.add(`${x},${y}`);
		[
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0],
		].forEach(([dx, dy]) => {
			const nx = x + dx;
			const ny = y + dy;
			if (
				nx >= 0 &&
				nx < rows &&
				ny >= 0 &&
				ny < cols &&
				grid[nx][ny] === 1 &&
				!closed.has(`${nx},${ny}`)
			) {
				const g = current.g + 1;
				const h = heuristic([nx, ny]);
				const f = g + h;
				open.push({
					pos: [nx, ny],
					g,
					h,
					f,
					parent: current,
				});
			}
		});
	}
	return [];
}

/**
 * Modular tile placement for sandbox boards
 */
export function placeTile(
	grid: any[][],
	x: number,
	y: number,
	tile: any
): any[][] {
	const newGrid = grid.map((row) => row.slice());
	if (newGrid[x] && newGrid[x][y] === null) {
		newGrid[x][y] = tile;
	}
	return newGrid;
}

/**
 * Utility to shuffle tiles for modular/random boards
 */
export function shuffleTiles<T>(tiles: T[]): T[] {
	const arr = tiles.slice();
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

/**
 * Generates a spiral grid (returns array of positions in spiral order)
 */

/**
 * Assigns territories to a grid (returns grid with territory ids)
 */

/**
 * Generates an abstract board with random values
 */
export function generateAbstractBoard(
	rows: number,
	cols: number
): string[][] {
	const values = ['A', 'B', 'C', 'D', 'E', 'F'];
	return Array.from({ length: rows }, () =>
		Array.from(
			{ length: cols },
			() =>
				values[Math.floor(Math.random() * values.length)]
		)
	);
}
