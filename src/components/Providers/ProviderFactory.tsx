import React from 'react';
import UnifiedProvider, {
	UnifiedProviderProps,
	ProviderKind,
} from './UnifiedProvider';
import { PROVIDER_CONFIGURATIONS } from './configurations';

/**
 * ProviderFactory - Creates providers with minimal configuration
 * This is the most DRY way to create providers in the entire system
 */
export class ProviderFactory {
	/**
	 * Create any provider by kind with optional props override
	 */
	static create(
		kind: ProviderKind,
		props: Partial<UnifiedProviderProps> = {}
	) {
		return <UnifiedProvider kind={kind} {...props} />;
	}

	// Convenience methods for common providers
	static socket(props: Partial<UnifiedProviderProps> = {}) {
		return this.create('socket-provider', props);
	}

	static userSettings(
		props: Partial<UnifiedProviderProps> = {}
	) {
		return this.create('user-settings-provider', props);
	}

	static themePalette(
		props: Partial<UnifiedProviderProps> = {}
	) {
		return this.create('theme-palette-provider', props);
	}

	static achievementListener(
		props: Partial<UnifiedProviderProps> = {}
	) {
		return this.create(
			'achievement-socket-listener',
			props
		);
	}
}

/**
 * Provider Presets - Pre-configured providers for common scenarios
 */
export class ProviderPresets {
	// Socket providers
	static SOCKET_CONNECTED = (session: any) =>
		ProviderFactory.socket({ session, autoConnect: true });

	static SOCKET_MANUAL = (session: any) =>
		ProviderFactory.socket({ session, autoConnect: false });

	// Settings providers
	static USER_SETTINGS = (initialSettings?: any) =>
		ProviderFactory.userSettings({ initialSettings });

	static EMPTY_SETTINGS = () =>
		ProviderFactory.userSettings({ initialSettings: {} });

	// Theme providers
	static THEME_LIGHT = () =>
		ProviderFactory.themePalette({ initialTheme: 'light' });

	static THEME_DARK = () =>
		ProviderFactory.themePalette({ initialTheme: 'dark' });

	static THEME_AUTO = () =>
		ProviderFactory.themePalette({ initialTheme: 'auto' });

	// Achievement listeners
	static ACHIEVEMENT_LISTENER = (
		onAchievement?: (achievement: any) => void
	) =>
		ProviderFactory.achievementListener({ onAchievement });
}

/**
 * Quick provider creation shortcuts
 */
export const QuickProviders = {
	// Socket shortcuts
	socket: (session: any, autoConnect = true) =>
		ProviderFactory.socket({ session, autoConnect }),

	// Settings shortcuts
	settings: (initialSettings = {}) =>
		ProviderFactory.userSettings({ initialSettings }),

	// Theme shortcuts
	theme: (initialTheme = 'default') =>
		ProviderFactory.themePalette({ initialTheme }),

	// Listener shortcuts
	achievements: (
		onAchievement?: (achievement: any) => void
	) =>
		ProviderFactory.achievementListener({ onAchievement }),
};

// Default export for the factory
export default ProviderFactory;

// Named exports for convenience
export {
	UnifiedProvider,
	type UnifiedProviderProps,
	type ProviderKind,
};
