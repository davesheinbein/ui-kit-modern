// Table and leaderboard mock data
export const leaderboardTableColumns = [
	{ key: 'rank', label: 'Rank', align: 'center' },
	{ key: 'player', label: 'Player', align: 'left' },
	{ key: 'score', label: 'Score', align: 'right' },
	{ key: 'country', label: 'Country', align: 'center' },
];
export const leaderboardTableData = [
	{
		id: 1,
		rank: 1,
		player: 'Alice',
		score: 3200,
		country: '🇺🇸',
	},
	{
		id: 2,
		rank: 2,
		player: 'Bob',
		score: 2950,
		country: '🇬🇧',
	},
	{
		id: 3,
		rank: 3,
		player: 'Carlos',
		score: 2875,
		country: '🇪🇸',
	},
	{
		id: 4,
		rank: 4,
		player: 'Diana',
		score: 2750,
		country: '🇩🇪',
	},
	{
		id: 5,
		rank: 5,
		player: 'Eva',
		score: 2600,
		country: '🇫🇷',
	},
];
export const leaderboardMock = [
	// ...full leaderboardMock array from index.ts...
];

// Sample table columns and data for Table.stories.tsx
export const sampleTableColumns = [
	{ key: 'name', label: 'Name', align: 'left' },
	{ key: 'score', label: 'Score', align: 'right' },
	{ key: 'country', label: 'Country', align: 'center' },
];

export const sampleTableData = [
	{ id: 1, name: 'Alice', score: 3200, country: '🇺🇸' },
	{ id: 2, name: 'Bob', score: 2950, country: '🇬🇧' },
	{ id: 3, name: 'Carlos', score: 2875, country: '🇪🇸' },
	{ id: 4, name: 'Diana', score: 2750, country: '🇩🇪' },
	{ id: 5, name: 'Eva', score: 2600, country: '🇫🇷' },
];
