export type ProviderVariant =
	| 'context'
	| 'socket'
	| 'listener'
	| 'settings'
	| 'theme'
	| 'custom';

export type ProviderPosition =
	| 'root'
	| 'app'
	| 'component'
	| 'inline';

export interface ProviderConfiguration {
	kind:
		| 'socket-provider'
		| 'user-settings-provider'
		| 'achievement-socket-listener'
		| 'theme-palette-provider';
	variant?: ProviderVariant;
	position?: ProviderPosition;
	title?: string;
	description?: string;
	autoConnect?: boolean;
	url?: string;
	session?: any;
	initialSettings?: any;
	contextName?: string;
	hookName?: string;
	[key: string]: any;
}

// Socket Provider Configuration
export const socketProvider: ProviderConfiguration = {
	kind: 'socket-provider',
	variant: 'socket',
	position: 'root',
	title: 'Socket Provider',
	description:
		'Provides socket connection context for the application',
	autoConnect: false,
	url: '/api/socket',
	contextName: 'SocketContext',
	hookName: 'useSocket',
};

// User Settings Provider Configuration
export const userSettingsProvider: ProviderConfiguration = {
	kind: 'user-settings-provider',
	variant: 'settings',
	position: 'app',
	title: 'User Settings Provider',
	description:
		'Provides user settings context for the application',
	contextName: 'UserSettingsContext',
	hookName: 'useUserSettings',
	initialSettings: {
		chatEnabled: true,
		profanityFilter: true,
		notificationsEnabled: true,
	},
};

// Achievement Socket Listener Configuration
export const achievementSocketListener: ProviderConfiguration =
	{
		kind: 'achievement-socket-listener',
		variant: 'listener',
		position: 'component',
		title: 'Achievement Socket Listener',
		description:
			'Listens for achievement-related socket events',
		contextName: undefined,
		hookName: undefined,
	};

// Theme Palette Provider Configuration (for existing ThemePaletteProvider)
export const themePaletteProvider: ProviderConfiguration = {
	kind: 'theme-palette-provider',
	variant: 'theme',
	position: 'root',
	title: 'Theme Palette Provider',
	description: 'Provides theme context for the application',
	contextName: 'ThemePaletteContext',
	hookName: 'useThemePalette',
};

// Export all configurations
export const PROVIDER_CONFIGURATIONS = {
	// Main kinds
	'socket-provider': socketProvider,
	'user-settings-provider': userSettingsProvider,
	'achievement-socket-listener': achievementSocketListener,
	'theme-palette-provider': themePaletteProvider,

	// Alias configurations for backward compatibility
	'socket': socketProvider,
	'user-settings': userSettingsProvider,
	'achievement-listener': achievementSocketListener,
	'theme-palette': themePaletteProvider,
	'settings': userSettingsProvider,
	'listener': achievementSocketListener,
};

export type ExtendedProviderKind =
	keyof typeof PROVIDER_CONFIGURATIONS;

// Type exports
export type ProviderKind = ExtendedProviderKind;

// User settings interface
export interface UserSettings {
	chatEnabled: boolean;
	profanityFilter: boolean;
	notificationsEnabled: boolean;
	[key: string]: any;
}

// Socket context interface
export interface SocketContextType {
	socket: any | null;
	isConnected: boolean;
	error: string | null;
	connect: (url?: string) => void;
	disconnect: () => void;
	emit?: (event: string, data?: any) => void;
}

// User settings context interface
export interface UserSettingsContextType {
	settings: UserSettings | null;
	setSettings: (settings: UserSettings) => void;
}
