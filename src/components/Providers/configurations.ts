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

export type ProviderKind =
	| 'socket-provider'
	| 'user-settings-provider'
	| 'theme-palette-provider'
	| 'achievement-socket-listener'
	| 'custom-provider';

export interface ProviderConfiguration {
	kind: ProviderKind;
	variant: ProviderVariant;
	position: ProviderPosition;
	className?: string;
	description?: string;
}

// DRY configurations for all provider types
export const PROVIDER_CONFIGURATIONS: Record<
	ProviderKind,
	ProviderConfiguration
> = {
	'socket-provider': {
		kind: 'socket-provider',
		variant: 'socket',
		position: 'root',
		className: 'provider-socket',
		description:
			'Provides socket connection and communication',
	},
	'user-settings-provider': {
		kind: 'user-settings-provider',
		variant: 'settings',
		position: 'app',
		className: 'provider-settings',
		description: 'Manages user settings and preferences',
	},
	'theme-palette-provider': {
		kind: 'theme-palette-provider',
		variant: 'theme',
		position: 'app',
		className: 'provider-theme',
		description: 'Provides theme and palette management',
	},
	'achievement-socket-listener': {
		kind: 'achievement-socket-listener',
		variant: 'listener',
		position: 'component',
		className: 'provider-listener',
		description: 'Listens for achievement events',
	},
	'custom-provider': {
		kind: 'custom-provider',
		variant: 'custom',
		position: 'inline',
		className: 'provider-custom',
		description: 'Custom provider implementation',
	},
};

// Socket context interface
export interface SocketContextType {
	socket: any | null;
	isConnected: boolean;
	error: string | null;
	connect: (url?: string) => void;
	disconnect: () => void;
	emit?: (event: string, data?: any) => void;
}

// User settings interface
export interface UserSettings {
	chatEnabled?: boolean;
	profanityFilter?: boolean;
	notificationsEnabled?: boolean;
	theme?: string;
	[key: string]: any;
}

// User settings context interface
export interface UserSettingsContextType {
	settings: UserSettings | null;
	setSettings: (settings: UserSettings) => void;
}
