// Card, user profile, and game stats mocks
export const userStatusMock = {
	name: 'John Doe',
	avatar: 'https://picsum.photos/40/40',
	status: 'online',
	statusMessage: 'Ready to play!',
};
export const mockProfile = {
	id: 'profile-001',
	name: 'Alex Johnson',
	bio: 'Full-stack developer passionate about clean code',
	avatar: 'https://picsum.photos/80/80?random=1',
	level: 15,
	points: 2850,
	achievements: 12,
};
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
