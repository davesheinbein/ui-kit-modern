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

export const mockUserData = {
	id: '1',
	name: 'John Doe',
	email: 'john.doe@example.com',
	avatar: '/api/placeholder/40/40',
	status: 'online',
	level: 15,
	points: 2840,
	achievements: 12,
	gamesPlayed: 156,
	winRate: 0.68,
};

export const mockFriends = [
	{
		id: '2',
		name: 'Alice Smith',
		avatar: '/api/placeholder/40/40',
		status: 'online',
		lastSeen: 'Now',
	},
	{
		id: '3',
		name: 'Bob Johnson',
		avatar: '/api/placeholder/40/40',
		status: 'away',
		lastSeen: '5 minutes ago',
	},
	{
		id: '4',
		name: 'Carol Williams',
		avatar: '/api/placeholder/40/40',
		status: 'offline',
		lastSeen: '2 hours ago',
	},
];

export const mockChatMessages = [
	{
		id: '1',
		user: 'Alice',
		message: 'Good luck everyone!',
		timestamp: new Date(Date.now() - 300000),
		type: 'message',
	},
	{
		id: '2',
		user: 'Bob',
		message: 'Thanks! This puzzle looks tricky',
		timestamp: new Date(Date.now() - 240000),
		type: 'message',
	},
	{
		id: '3',
		user: 'System',
		message: 'Alice found a connection!',
		timestamp: new Date(Date.now() - 180000),
		type: 'system',
	},
];

export const mockGameStats = {
	totalGames: 156,
	wins: 106,
	losses: 50,
	winRate: 0.68,
	averageTime: 145,
	bestTime: 42,
	currentStreak: 8,
	longestStreak: 15,
	perfectGames: 23,
	achievements: [
		{
			id: 'speed_demon',
			name: 'Speed Demon',
			unlocked: true,
		},
		{
			id: 'perfectionist',
			name: 'Perfectionist',
			unlocked: true,
		},
		{
			id: 'streak_master',
			name: 'Streak Master',
			unlocked: false,
		},
	],
};

export const radarChartData = [
	{ category: 'Speed', score: 120 },
	{ category: 'Accuracy', score: 98 },
	{ category: 'Strategy', score: 86 },
	{ category: 'Knowledge', score: 99 },
	{ category: 'Focus', score: 85 },
	{ category: 'Consistency', score: 65 },
];

// === GRID MOCK DATA ===
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
	'Lion',
	'Tiger',
	'Bear',
	'Wolf',
	'Fox',
	'Eagle',
	'Shark',
	'Whale',
	'Frog',
	'Snake',
	'Lizard',
	'Turtle',
	'Crab',
	'Octopus',
	'Seal',
	'Penguin',
];

export const gridWords5x5 = [
	'Paris',
	'London',
	'Berlin',
	'Rome',
	'Madrid',
	'Vienna',
	'Prague',
	'Budapest',
	'Warsaw',
	'Dublin',
	'Oslo',
	'Stockholm',
	'Copenhagen',
	'Helsinki',
	'Reykjavik',
	'Athens',
	'Lisbon',
	'Brussels',
	'Amsterdam',
	'Zurich',
	'Moscow',
	'Istanbul',
	'Kiev',
	'Belgrade',
	'Bucharest',
];

export const gridWords = [
	'Alpha',
	'Beta',
	'Gamma',
	'Delta',
	'Epsilon',
	'Zeta',
	'Eta',
	'Theta',
	'Iota',
	'Kappa',
	'Lambda',
	'Mu',
	'Nu',
	'Xi',
	'Omicron',
	'Pi',
	'Rho',
	'Sigma',
	'Tau',
	'Upsilon',
	'Phi',
	'Chi',
	'Psi',
	'Omega',
	'Andromeda',
	'Centaurus',
	'Draco',
	'Orion',
	'Phoenix',
	'Cygnus',
	'Cassiopeia',
	'Ursa Major',
	'Ursa Minor',
	'Leo',
	'Virgo',
	'Libra',
	'Aquila',
	'Scorpius',
	'Capricornus',
	'Aquarius',
	'Pisces',
	'Aries',
	'Taurus',
	'Gemini',
	'Cancer',
	'Leo Minor',
	'Monoceros',
];

// =====================
// Header Stories Mocks
// =====================

export const navItemsMain = [
	'Home',
	'About',
	'Features',
	'Contact',
];
export const navItemsLeft = ['Home', 'About'];
export const navItemsRight = ['Shop', 'Contact'];
export const navItemsMega = [
	'Products ▼',
	'Services ▼',
	'Resources ▼',
];
export const navItemsGallery = [
	'Gallery',
	'Portfolio',
	'Contact',
];
export const navItemsSidebar = [
	'Home',
	'About',
	'Contact',
	'Profile',
];
export const navItemsShop = ['Shop', 'Cart', 'Profile'];
export const navItemsHelp = ['Help', 'Sign In'];
export const navItemsBottom = [
	'Home',
	'Features',
	'Shop',
	'Contact',
];
export const navItemsBlog = ['Home', 'Blog', 'About'];
export const navItemsShopDeals = ['Shop', 'Deals'];
export const navItemsFeatures = ['Features', 'Pricing'];
export const navItemsIconOnly = ['🏠', '🛒', '❤️', '👤'];
export const navItemsCart = ['Shop', 'About', 'Cart'];
export const navItemsBottomNav = ['🏠', '🛒', '❤️', '☰'];
export const navItemsShopContact = [
	'Home',
	'About',
	'Shop',
	'Contact',
];

export const breadcrumbsCategory = [
	'Home',
	'Category',
	'Page',
];

export const notificationTextShipping =
	'Free Shipping Today Only!';

export const ctaSubscribe = 'Subscribe Now';
export const ctaSignUp = 'Sign Up';
export const ctaLogIn = 'Log In';
export const ctaBuyNow = 'Buy Now';

import type { ThemeDefinition } from '../../components/Themes/configurations';

export const mockThemes: ThemeDefinition[] = [
	{
		name: 'light',
		label: 'Light',
		color: '#f8f5ec',
		bg: '#f8f5ec',
		font: '#222',
		swatchType: 'solid',
		vsMode: {
			player: '#2563eb',
			enemy: '#ef4444',
			playerBg: '#e0e7ff',
			enemyBg: '#fee2e2',
			boardBg: '#fff',
			font: '#222',
			border: '#e0e7ef',
		},
	},
	{
		name: 'dark',
		label: 'Dark',
		color: '#181a1b',
		bg: '#23272a',
		font: '#f8f5ec',
		swatchType: 'solid',
		vsMode: {
			player: '#3b82f6',
			enemy: '#ef4444',
			playerBg: '#1e293b',
			enemyBg: '#3b1e1e',
			boardBg: '#23272a',
			font: '#f8f5ec',
			border: '#334155',
		},
	},
	{
		name: 'oceanic',
		label: 'Oceanic',
		color: '#174ea6',
		bg: '#0a2540',
		font: '#a7f3f7',
		swatchType: 'solid',
		vsMode: {
			player: '#3b82f6',
			enemy: '#ef4444',
			playerBg: '#1e293b',
			enemyBg: '#3b1e1e',
			boardBg: '#0a2540',
			font: '#a7f3f7',
			border: '#1e40af',
		},
	},
	{
		name: 'sunset',
		label: 'Sunset',
		color: '#ffb347',
		bg: 'linear-gradient(135deg, #ffb347 0%, #ff5e62 100%)',
		font: '#fff',
		swatchType: 'gradient',
		vsMode: {
			player: '#2563eb',
			enemy: '#ef4444',
			playerBg: '#e0e7ff',
			enemyBg: '#fee2e2',
			boardBg: '#fff',
			font: '#222',
			border: '#e0e7ef',
		},
	},
	{
		name: 'forest',
		label: 'Forest',
		color: '#22c55e',
		bg: '#0f172a',
		font: '#dcfce7',
		swatchType: 'solid',
		vsMode: {
			player: '#22c55e',
			enemy: '#ef4444',
			playerBg: '#052e16',
			enemyBg: '#3b1e1e',
			boardBg: '#0f172a',
			font: '#dcfce7',
			border: '#166534',
		},
	},
	{
		name: 'purple',
		label: 'Purple',
		color: '#8b5cf6',
		bg: '#1e1b4b',
		font: '#e5d5ff',
		swatchType: 'solid',
		vsMode: {
			player: '#8b5cf6',
			enemy: '#ef4444',
			playerBg: '#312e81',
			enemyBg: '#3b1e1e',
			boardBg: '#1e1b4b',
			font: '#e5d5ff',
			border: '#6d28d9',
		},
	},
	{
		name: 'cherry',
		label: 'Cherry',
		color: '#f97316',
		bg: 'linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ef4444 100%)',
		font: '#fff',
		swatchType: 'gradient',
		vsMode: {
			player: '#f97316',
			enemy: '#ef4444',
			playerBg: '#fed7aa',
			enemyBg: '#fee2e2',
			boardBg: '#fff',
			font: '#222',
			border: '#fb923c',
		},
	},
	{
		name: 'midnight',
		label: 'Midnight',
		color: '#0f172a',
		bg: '#0f172a',
		font: '#f1f5f9',
		swatchType: 'solid',
		vsMode: {
			player: '#3b82f6',
			enemy: '#ef4444',
			playerBg: '#1e293b',
			enemyBg: '#3b1e1e',
			boardBg: '#0f172a',
			font: '#f1f5f9',
			border: '#334155',
		},
	},
];
