// Provider, theme, and socket mocks
export const mockUserSettings = {
	language: 'en',
	notifications: true,
	darkMode: false,
	privacy: 'public',
	timezone: 'America/New_York',
};
export const mockThemePalette = {
	primary: '#3b82f6',
	secondary: '#10b981',
	accent: '#f59e0b',
	background: '#f9fafb',
	surface: '#ffffff',
	error: '#ef4444',
	text: '#111827',
};
export const mockSocketSession = {
	id: 'session-123',
	user: 'user-001',
	connected: true,
	lastPing: Date.now(),
	messages: [
		{
			id: 1,
			text: 'Welcome!',
			timestamp: Date.now() - 10000,
		},
		{
			id: 2,
			text: 'Socket connected.',
			timestamp: Date.now() - 5000,
		},
	],
};
