import React, { forwardRef } from 'react';
import Providers, { ProviderProps } from './Providers';
import {
	PROVIDER_CONFIGURATIONS,
	ProviderKind,
	ProviderConfiguration,
} from './configurations';

export interface ProviderFactoryProps {
	kind: ProviderKind;
	children?: React.ReactNode;
	session?: any;
	autoConnect?: boolean;
	url?: string;
	initialSettings?: any;
	className?: string;
	// Override any configuration
	configuration?: Partial<ProviderConfiguration>;
	[key: string]: any;
}

/**
 * ProviderFactory - Ultra-DRY provider creation using configurations
 *
 * Usage examples:
 * <ProviderFactory kind="socket-provider" autoConnect session={session} />
 * <ProviderFactory kind="user-settings-provider" initialSettings={settings} />
 * <ProviderFactory kind="achievement-socket-listener" />
 */
const ProviderFactory = forwardRef<
	HTMLDivElement,
	ProviderFactoryProps
>(
	(
		{
			kind,
			children,
			session,
			autoConnect,
			url,
			initialSettings,
			className = '',
			configuration: configOverride,
			...props
		},
		ref
	) => {
		const config =
			PROVIDER_CONFIGURATIONS[
				kind as keyof typeof PROVIDER_CONFIGURATIONS
			];

		if (!config) {
			console.warn(`Unknown provider kind: ${kind}`);
			return null;
		}

		// Merge configuration with overrides
		const finalConfig = { ...config, ...configOverride };

		// Use props or config values
		const finalAutoConnect =
			autoConnect ?? finalConfig.autoConnect;
		const finalUrl = url ?? finalConfig.url;
		const finalInitialSettings =
			initialSettings ?? finalConfig.initialSettings;

		// Use Provider directly with all the props
		return (
			<Providers
				ref={ref}
				kind={kind}
				session={session}
				autoConnect={finalAutoConnect}
				url={finalUrl}
				initialSettings={finalInitialSettings}
				className={className}
				{...props}
			>
				{children}
			</Providers>
		);
	}
);

ProviderFactory.displayName = 'ProviderFactory';

/**
 * Provider presets with common patterns
 */
export const ProviderPresets = {
	// Socket connection preset
	SOCKET_CONNECTION: (
		session?: any,
		autoConnect = true,
		url?: string
	) => (
		<ProviderFactory
			kind='socket-provider'
			session={session}
			autoConnect={autoConnect}
			url={url}
		/>
	),

	// User settings preset
	USER_SETTINGS: (initialSettings?: any) => (
		<ProviderFactory
			kind='user-settings-provider'
			initialSettings={initialSettings}
		/>
	),

	// Achievement listener preset
	ACHIEVEMENT_LISTENER: () => (
		<ProviderFactory kind='achievement-socket-listener' />
	),

	// Theme palette preset
	THEME_PALETTE: () => (
		<ProviderFactory kind='theme-palette-provider' />
	),

	// Complete provider setup with socket and settings
	FULL_SETUP: (session?: any, initialSettings?: any) => (
		<>
			<ProviderFactory
				kind='socket-provider'
				session={session}
				autoConnect={true}
			/>
			<ProviderFactory
				kind='user-settings-provider'
				initialSettings={initialSettings}
			/>
			<ProviderFactory kind='achievement-socket-listener' />
		</>
	),
};

/**
 * Quick providers for ultra-rapid development
 */
export const QuickProviders = {
	socket: ProviderPresets.SOCKET_CONNECTION,
	settings: ProviderPresets.USER_SETTINGS,
	achievements: ProviderPresets.ACHIEVEMENT_LISTENER,
	theme: ProviderPresets.THEME_PALETTE,
	full: ProviderPresets.FULL_SETUP,
};

/**
 * Simple ProviderFactory Class - Class-based provider creation
 */
export class SimpleProviderFactory {
	/**
	 * Create any provider by kind with optional props override
	 */
	static create(
		kind: ProviderKind,
		props: Partial<ProviderProps> = {}
	) {
		return <Providers kind={kind} {...props} />;
	}

	// Convenience methods for common providers
	static socket(props: Partial<ProviderProps> = {}) {
		return this.create('socket-provider', props);
	}

	static userSettings(props: Partial<ProviderProps> = {}) {
		return this.create('user-settings-provider', props);
	}

	static themePalette(props: Partial<ProviderProps> = {}) {
		return this.create('theme-palette-provider', props);
	}

	static achievementListener(
		props: Partial<ProviderProps> = {}
	) {
		return this.create(
			'achievement-socket-listener',
			props
		);
	}
}

/**
 * Extended Provider Presets - Pre-configured providers for common scenarios
 */
export const ExtendedProviderPresets = {
	// Socket providers
	SOCKET_CONNECTED: (session: any) =>
		SimpleProviderFactory.socket({
			session,
			autoConnect: true,
		}),

	SOCKET_MANUAL: (session: any) =>
		SimpleProviderFactory.socket({
			session,
			autoConnect: false,
		}),

	// Settings providers
	USER_SETTINGS: (initialSettings?: any) =>
		SimpleProviderFactory.userSettings({ initialSettings }),

	EMPTY_SETTINGS: () =>
		SimpleProviderFactory.userSettings({
			initialSettings: {},
		}),

	// Theme providers
	THEME_LIGHT: () =>
		SimpleProviderFactory.themePalette({
			initialTheme: 'light',
		}),

	THEME_DARK: () =>
		SimpleProviderFactory.themePalette({
			initialTheme: 'dark',
		}),

	THEME_AUTO: () =>
		SimpleProviderFactory.themePalette({
			initialTheme: 'auto',
		}),

	// Achievement listeners
	ACHIEVEMENT_LISTENER: (
		onAchievement?: (achievement: any) => void
	) =>
		SimpleProviderFactory.achievementListener({
			onAchievement,
		}),
};

export default ProviderFactory;
