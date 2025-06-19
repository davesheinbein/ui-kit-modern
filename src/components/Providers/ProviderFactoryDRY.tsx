import React, { forwardRef } from 'react';
import Provider from './Provider';
import ProviderBodyFactory from './ProviderBodyFactory';
import {
	PROVIDER_CONFIGURATIONS,
	ProviderKind,
	ProviderConfiguration,
} from './ProviderConfigurations';

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

		// For listeners, render the body factory directly without wrapper
		if (finalConfig.variant === 'listener') {
			return (
				<ProviderBodyFactory
					kind={finalConfig.kind}
					configuration={finalConfig}
					session={session}
					autoConnect={finalAutoConnect}
					url={finalUrl}
					initialSettings={finalInitialSettings}
					{...props}
				>
					{children}
				</ProviderBodyFactory>
			);
		}

		// For context providers, wrap with base Provider component
		return (
			<Provider
				ref={ref}
				variant={finalConfig.variant}
				position={finalConfig.position}
				className={className}
			>
				<ProviderBodyFactory
					kind={finalConfig.kind}
					configuration={finalConfig}
					session={session}
					autoConnect={finalAutoConnect}
					url={finalUrl}
					initialSettings={finalInitialSettings}
					{...props}
				>
					{children}
				</ProviderBodyFactory>
			</Provider>
		);
	}
);

ProviderFactory.displayName = 'ProviderFactory';

/**
 * Ultra-DRY Provider shortcuts - for maximum convenience
 * Similar to Button factory but for providers
 */
export const P = ProviderFactory; // Ultra-short alias

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

export default ProviderFactory;
