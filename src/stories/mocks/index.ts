// Shared mock data for Storybook stories
export const sampleChartData = [
	{ match: 'Game 1', score: 85 },
	{ match: 'Game 2', score: 92 },
	{ match: 'Game 3', score: 78 },
	{ match: 'Game 4', score: 96 },
	{ match: 'Game 5', score: 89 },
];

export const pieChartData = [
	{ category: 'Connections', score: 40 },
	{ category: 'Red Herrings', score: 30 },
	{ category: 'Speed Bonus', score: 20 },
	{ category: 'Perfect Games', score: 10 },
];

export const timeSeriesData = [
	{ date: '2024-01', value: 120 },
	{ date: '2024-02', value: 132 },
	{ date: '2024-03', value: 101 },
	{ date: '2024-04', value: 134 },
	{ date: '2024-05', value: 90 },
	{ date: '2024-06', value: 230 },
];

export const multiSeriesData = [
	{ month: 'Jan', wins: 12, losses: 8, draws: 3 },
	{ month: 'Feb', wins: 15, losses: 5, draws: 2 },
	{ month: 'Mar', wins: 10, losses: 12, draws: 5 },
	{ month: 'Apr', wins: 18, losses: 3, draws: 1 },
	{ month: 'May', wins: 14, losses: 7, draws: 4 },
];

export const scatterPlotData = [
	{ x: 10, y: 20, name: 'Point A' },
	{ x: 15, y: 35, name: 'Point B' },
	{ x: 20, y: 15, name: 'Point C' },
	{ x: 25, y: 40, name: 'Point D' },
	{ x: 30, y: 25, name: 'Point E' },
	{ x: 35, y: 50, name: 'Point F' },
	{ x: 40, y: 30, name: 'Point G' },
	{ x: 45, y: 45, name: 'Point H' },
];

export const gaugeData = [{ name: 'Progress', value: 75 }];

export const waterfallData = [
	{ name: 'Start', value: 100 },
	{ name: 'Increase', value: 20 },
	{ name: 'Decrease', value: -15 },
	{ name: 'Another Increase', value: 10 },
	{ name: 'Final', value: 115 },
];

export const heatmapData = [
	{ x: 1, y: 1, value: 10 },
	{ x: 1, y: 2, value: 20 },
	{ x: 1, y: 3, value: 15 },
	{ x: 2, y: 1, value: 25 },
	{ x: 2, y: 2, value: 30 },
	{ x: 2, y: 3, value: 35 },
	{ x: 3, y: 1, value: 12 },
	{ x: 3, y: 2, value: 18 },
	{ x: 3, y: 3, value: 22 },
];

export const boxplotData = [
	{
		category: 'A',
		min: 10,
		q1: 15,
		median: 20,
		q3: 25,
		max: 30,
	},
	{
		category: 'B',
		min: 12,
		q1: 18,
		median: 22,
		q3: 28,
		max: 35,
	},
	{
		category: 'C',
		min: 8,
		q1: 12,
		median: 18,
		q3: 22,
		max: 28,
	},
	{
		category: 'D',
		min: 15,
		q1: 20,
		median: 25,
		q3: 30,
		max: 38,
	},
];

// Additional chart type mock data
export const errorBarData = [
	{ category: 'Q1', value: 100, error: 10 },
	{ category: 'Q2', value: 120, error: 15 },
	{ category: 'Q3', value: 110, error: 8 },
	{ category: 'Q4', value: 140, error: 12 },
];

export const referenceLineData = [
	{ month: 'Jan', sales: 45 },
	{ month: 'Feb', sales: 52 },
	{ month: 'Mar', sales: 48 },
	{ month: 'Apr', sales: 61 },
	{ month: 'May', sales: 55 },
	{ month: 'Jun', sales: 67 },
];

export const referenceAreaData = [
	{ date: '2024-01', value: 120 },
	{ date: '2024-02', value: 132 },
	{ date: '2024-03', value: 145 },
	{ date: '2024-04', value: 155 },
	{ date: '2024-05', value: 140 },
	{ date: '2024-06', value: 130 },
];

export const brushZoomData = [
	{ day: 1, visitors: 120 },
	{ day: 2, visitors: 132 },
	{ day: 3, visitors: 101 },
	{ day: 4, visitors: 134 },
	{ day: 5, visitors: 90 },
	{ day: 6, visitors: 230 },
	{ day: 7, visitors: 210 },
	{ day: 8, visitors: 180 },
	{ day: 9, visitors: 195 },
	{ day: 10, visitors: 165 },
	{ day: 11, visitors: 220 },
	{ day: 12, visitors: 240 },
	{ day: 13, visitors: 200 },
	{ day: 14, visitors: 190 },
	{ day: 15, visitors: 175 },
];

export const composedMultiData = [
	{
		month: 'Jan',
		sales: 100,
		sales_line: 110,
		sales_area: 90,
	},
	{
		month: 'Feb',
		sales: 120,
		sales_line: 125,
		sales_area: 115,
	},
	{
		month: 'Mar',
		sales: 110,
		sales_line: 105,
		sales_area: 100,
	},
	{
		month: 'Apr',
		sales: 140,
		sales_line: 135,
		sales_area: 130,
	},
	{
		month: 'May',
		sales: 130,
		sales_line: 140,
		sales_area: 125,
	},
];

// Missing mock data for existing chart types
export const treemapData = [
	{
		name: 'Frontend',
		size: 300,
		children: [
			{ name: 'React', size: 120 },
			{ name: 'Vue', size: 80 },
			{ name: 'Angular', size: 100 },
		],
	},
	{
		name: 'Backend',
		size: 250,
		children: [
			{ name: 'Node.js', size: 100 },
			{ name: 'Python', size: 90 },
			{ name: 'Java', size: 60 },
		],
	},
	{
		name: 'Database',
		size: 150,
		children: [
			{ name: 'MongoDB', size: 70 },
			{ name: 'PostgreSQL', size: 80 },
		],
	},
];

export const funnelData = [
	{ name: 'Visitors', value: 1000, fill: '#8884d8' },
	{ name: 'Leads', value: 300, fill: '#83a6ed' },
	{ name: 'Prospects', value: 150, fill: '#8dd1e1' },
	{ name: 'Customers', value: 50, fill: '#82ca9d' },
];

// --- Card-specific mock data for Card.stories.tsx ---
export const userStatusMock = {
	name: 'John Doe',
	avatar: 'https://picsum.photos/40/40',
	status: 'online',
	statusMessage: 'Ready to play!',
};

// === Added for Grid stories ===
export const gridWords3x3 = [
	'Apple',
	'Banana',
	'Cherry',
	'Date',
	'Elderberry',
	'Fig',
	'Grape',
	'Honeydew',
	'Kiwi',
];

export const gridWords4x4 = [
	'Alpha',
	'Bravo',
	'Charlie',
	'Delta',
	'Echo',
	'Foxtrot',
	'Golf',
	'Hotel',
	'India',
	'Juliet',
	'Kilo',
	'Lima',
	'Mike',
	'November',
	'Oscar',
	'Papa',
];

export const gridWords5x5 = [
	'Ant',
	'Bee',
	'Cat',
	'Dog',
	'Eel',
	'Frog',
	'Goat',
	'Horse',
	'Iguana',
	'Jaguar',
	'Koala',
	'Lion',
	'Moose',
	'Newt',
	'Owl',
	'Pig',
	'Quail',
	'Rat',
	'Sheep',
	'Tiger',
	'Urial',
	'Vole',
	'Wolf',
	'Xerus',
	'Yak',
];

// === Added for Wrapper stories ===
export const mockProfile = {
	id: 'profile-001',
	name: 'Alex Johnson',
	bio: 'Full-stack developer passionate about clean code',
	avatar: 'https://picsum.photos/80/80?random=1',
	level: 15,
	points: 2850,
	achievements: 12,
};

export const mockFriends = [
	{
		id: '1',
		name: 'Sarah Chen',
		avatar: 'https://picsum.photos/32/32?random=2',
		status: 'Online',
		lastSeen: '2 min ago',
	},
	{
		id: '2',
		name: 'Mike Rodriguez',
		avatar: 'https://picsum.photos/32/32?random=3',
		status: 'Away',
		lastSeen: '1 hour ago',
	},
	{
		id: '3',
		name: 'Emma Williams',
		avatar: 'https://picsum.photos/32/32?random=4',
		status: 'Offline',
		lastSeen: '1 day ago',
	},
];

export const gridWords = [
	'React',
	'Vue',
	'Angular',
	'Svelte',
	'Next.js',
	'Nuxt.js',
	'TypeScript',
	'JavaScript',
	'HTML',
	'CSS',
	'SCSS',
	'Tailwind',
];

// === LEADERBOARD MOCK DATA ===
export const leaderboardMock = [
	{
		id: '1',
		rank: 1,
		name: 'Alice Johnson',
		score: 2450,
		avatar: 'https://picsum.photos/seed/alice/40/40',
		country: 'US',
		level: 25,
		streak: 15,
		gamesPlayed: 89,
		winRate: 0.92,
	},
	{
		id: '2',
		rank: 2,
		name: 'Bob Smith',
		score: 2380,
		avatar: 'https://picsum.photos/seed/bob/40/40',
		country: 'CA',
		level: 23,
		streak: 12,
		gamesPlayed: 76,
		winRate: 0.89,
	},
	{
		id: '3',
		rank: 3,
		name: 'Carol Davis',
		score: 2310,
		avatar: 'https://picsum.photos/seed/carol/40/40',
		country: 'UK',
		level: 22,
		streak: 8,
		gamesPlayed: 82,
		winRate: 0.85,
	},
	{
		id: '4',
		rank: 4,
		name: 'David Wilson',
		score: 2250,
		avatar: 'https://picsum.photos/seed/david/40/40',
		country: 'AU',
		level: 21,
		streak: 5,
		gamesPlayed: 71,
		winRate: 0.87,
	},
	{
		id: '5',
		rank: 5,
		name: 'Eva Brown',
		score: 2180,
		avatar: 'https://picsum.photos/seed/eva/40/40',
		country: 'DE',
		level: 20,
		streak: 10,
		gamesPlayed: 68,
		winRate: 0.84,
	},
	{
		id: '6',
		rank: 6,
		name: 'Frank Miller',
		score: 2120,
		avatar: 'https://picsum.photos/seed/frank/40/40',
		country: 'FR',
		level: 19,
		streak: 3,
		gamesPlayed: 65,
		winRate: 0.81,
	},
	{
		id: '7',
		rank: 7,
		name: 'Grace Lee',
		score: 2065,
		avatar: 'https://picsum.photos/seed/grace/40/40',
		country: 'KR',
		level: 18,
		streak: 7,
		gamesPlayed: 63,
		winRate: 0.83,
	},
	{
		id: '8',
		rank: 8,
		name: 'Henry Taylor',
		score: 2010,
		avatar: 'https://picsum.photos/seed/henry/40/40',
		country: 'JP',
		level: 18,
		streak: 2,
		gamesPlayed: 59,
		winRate: 0.79,
	},
	{
		id: '9',
		rank: 9,
		name: 'Iris Chen',
		score: 1955,
		avatar: 'https://picsum.photos/seed/iris/40/40',
		country: 'SG',
		level: 17,
		streak: 4,
		gamesPlayed: 57,
		winRate: 0.77,
	},
	{
		id: '10',
		rank: 10,
		name: 'Jack Rodriguez',
		score: 1900,
		avatar: 'https://picsum.photos/seed/jack/40/40',
		country: 'ES',
		level: 17,
		streak: 1,
		gamesPlayed: 54,
		winRate: 0.75,
	},
	{
		id: '11',
		rank: 11,
		name: 'Kate Anderson',
		score: 1845,
		avatar: 'https://picsum.photos/seed/kate/40/40',
		country: 'SE',
		level: 16,
		streak: 6,
		gamesPlayed: 52,
		winRate: 0.73,
	},
	{
		id: '12',
		rank: 12,
		name: 'Leo Nakamura',
		score: 1790,
		avatar: 'https://picsum.photos/seed/leo/40/40',
		country: 'JP',
		level: 16,
		streak: 0,
		gamesPlayed: 49,
		winRate: 0.71,
	},
	{
		id: '13',
		rank: 13,
		name: 'Maya Patel',
		score: 1735,
		avatar: 'https://picsum.photos/seed/maya/40/40',
		country: 'IN',
		level: 15,
		streak: 3,
		gamesPlayed: 47,
		winRate: 0.69,
	},
	{
		id: '14',
		rank: 14,
		name: 'Noah Kim',
		score: 1680,
		avatar: 'https://picsum.photos/seed/noah/40/40',
		country: 'KR',
		level: 15,
		streak: 2,
		gamesPlayed: 44,
		winRate: 0.68,
	},
	{
		id: '15',
		rank: 15,
		name: 'Olivia Thompson',
		score: 1625,
		avatar: 'https://picsum.photos/seed/olivia/40/40',
		country: 'NZ',
		level: 14,
		streak: 5,
		gamesPlayed: 42,
		winRate: 0.66,
	},
	{
		id: '16',
		rank: 16,
		name: 'Paulo Silva',
		score: 1570,
		avatar: 'https://picsum.photos/seed/paulo/40/40',
		country: 'BR',
		level: 14,
		streak: 1,
		gamesPlayed: 40,
		winRate: 0.64,
	},
	{
		id: '17',
		rank: 17,
		name: 'Quinn Foster',
		score: 1515,
		avatar: 'https://picsum.photos/seed/quinn/40/40',
		country: 'CA',
		level: 13,
		streak: 4,
		gamesPlayed: 38,
		winRate: 0.62,
	},
	{
		id: '18',
		rank: 18,
		name: 'Rachel Green',
		score: 1460,
		avatar: 'https://picsum.photos/seed/rachel/40/40',
		country: 'US',
		level: 13,
		streak: 0,
		gamesPlayed: 36,
		winRate: 0.61,
	},
	{
		id: '19',
		rank: 19,
		name: 'Sam Wilson',
		score: 1405,
		avatar: 'https://picsum.photos/seed/sam/40/40',
		country: 'UK',
		level: 12,
		streak: 2,
		gamesPlayed: 34,
		winRate: 0.59,
	},
	{
		id: '20',
		rank: 20,
		name: 'Tina Martinez',
		score: 1350,
		avatar: 'https://picsum.photos/seed/tina/40/40',
		country: 'MX',
		level: 12,
		streak: 3,
		gamesPlayed: 32,
		winRate: 0.57,
	},
];

// === ADDITIONAL MOCK DATA FOR CARDS ===
export const mockGameStats = {
	totalGames: 127,
	wins: 89,
	losses: 38,
	winRate: 0.701,
	bestTime: 45.2,
	currentStreak: 7,
	perfectGames: 23,
};

export const cardPuzzleData = {
	id: 'puzzle-001',
	title: 'Tech Giants',
	img: 'https://picsum.photos/seed/techpuzzle/300/200',
	difficulty: 'Medium',
	category: 'Technology',
	completionRate: 0.68,
	averageTime: 120,
	description:
		'Find the connections between major technology companies',
	dateCreated: '2024-12-15',
	creator: 'PuzzleMaster',
};
