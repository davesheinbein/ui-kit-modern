// Utility functions for modular dungeon logic

export function getRoomAdjacency(rooms) {
	// Returns adjacency map: { roomId: [adjacentRoomIds] }
	const adjacency = {};
	rooms.forEach((room) => {
		adjacency[room.id] = rooms
			.filter((r) => {
				if (r.id === room.id) return false;
				// Check for edge overlap
				const overlapX =
					r.x < room.x + (room.width || 1) &&
					r.x + (r.width || 1) > room.x;
				const overlapY =
					r.y < room.y + (room.height || 1) &&
					r.y + (r.height || 1) > room.y;
				// Adjacent if edges touch
				return (
					(overlapX &&
						(r.y === room.y + (room.height || 1) ||
							r.y + (r.height || 1) === room.y)) ||
					(overlapY &&
						(r.x === room.x + (room.width || 1) ||
							r.x + (r.width || 1) === room.x))
				);
			})
			.map((r) => r.id);
	});
	return adjacency;
}

export function getTilePlacement(tiles, rooms) {
	// Returns map: { roomId: [tileIds] }
	const placement = {};
	rooms.forEach((room) => {
		placement[room.id] = tiles
			.filter((t) => t.roomId === room.id)
			.map((t) => t.id);
	});
	return placement;
}

export function generateSampleDungeon(
	numRooms = 5,
	numTiles = 8
) {
	// Generates random sample dungeon data
	const rooms = Array.from(
		{ length: numRooms },
		(_, i) => ({
			id: `R${i + 1}`,
			name: `Room ${i + 1}`,
			x: Math.floor(Math.random() * 8),
			y: Math.floor(Math.random() * 8),
			width: 1 + Math.floor(Math.random() * 3),
			height: 1 + Math.floor(Math.random() * 2),
			color: `hsl(${Math.random() * 360},80%,85%)`,
		})
	);
	const tiles = Array.from(
		{ length: numTiles },
		(_, i) => ({
			id: `T${i + 1}`,
			type: ['Key', 'Trap', 'Treasure', 'Monster'][i % 4],
			x: Math.floor(Math.random() * 10),
			y: Math.floor(Math.random() * 10),
			roomId:
				rooms[Math.floor(Math.random() * rooms.length)].id,
			color: `hsl(${Math.random() * 360},70%,70%)`,
		})
	);
	return { rooms, tiles };
}
