import React, {
	createContext,
	useContext,
	useEffect,
	forwardRef,
} from 'react';
import styles from './Providers.module.scss';
import { Wrapper } from '../Wrappers';
import {
	PROVIDER_CONFIGURATIONS,
	ProviderKind,
	ProviderConfiguration,
} from './configurations';

// ===== CONTEXTS AND INTERFACES =====

export type { ProviderKind };

export interface SocketContextType {
	socket: any;
	isConnected: boolean;
	emit: (event: string, data?: any) => void;
	on: (event: string, handler: (data: any) => void) => void;
	off: (
		event: string,
		handler?: (data: any) => void
	) => void;
}
export const SocketContext =
	createContext<SocketContextType | null>(null);
export const useSocket = () => useContext(SocketContext);

export interface ThemePaletteContextType {
	palette: any;
	setPalette: (palette: any) => void;
	currentTheme: string;
	setTheme: (theme: string) => void;
}
export const ThemePaletteContext =
	createContext<ThemePaletteContextType | null>(null);
export const useThemePalette = () =>
	useContext(ThemePaletteContext);

export interface UserSettingsContextType {
	settings: any;
	setSettings: (settings: any) => void;
	updateSetting: (key: string, value: any) => void;
}
export const UserSettingsContext =
	createContext<UserSettingsContextType | null>(null);
export const useUserSettings = () =>
	useContext(UserSettingsContext);

// ===== MAIN COMPONENT INTERFACE =====

export interface ProviderProps
	extends React.HTMLAttributes<HTMLDivElement> {
	kind: ProviderKind;
	children?: React.ReactNode;
	session?: any;
	autoConnect?: boolean;
	url?: string;
	initialSettings?: any;
	initialTheme?: string;
	initialPalette?: any;
	onAchievement?: (achievement: any) => void;
	configuration?: Partial<ProviderConfiguration>;
	[key: string]: any;
}

const Providers = forwardRef<HTMLDivElement, ProviderProps>(
	(
		{
			kind,
			children,
			session,
			autoConnect = true,
			url = '/socket',
			initialSettings = {},
			initialTheme = 'default',
			initialPalette = {},
			onAchievement,
			configuration: configOverride,
			className,
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
			return <>{children}</>;
		}
		const finalConfig = { ...config, ...configOverride };
		switch (kind) {
			case 'socket-provider':
				return (
					<SocketProviderComponent
						session={session}
						autoConnect={autoConnect}
						url={url}
						ref={ref}
						className={className}
						{...props}
					>
						{children}
					</SocketProviderComponent>
				);
			case 'user-settings-provider':
				return (
					<UserSettingsProviderComponent
						initialSettings={initialSettings}
						ref={ref}
						className={className}
						{...props}
					>
						{children}
					</UserSettingsProviderComponent>
				);
			case 'theme-palette-provider':
				return (
					<ThemePaletteProviderComponent
						initialTheme={initialTheme}
						initialPalette={initialPalette}
						ref={ref}
						className={className}
						{...props}
					>
						{children}
					</ThemePaletteProviderComponent>
				);
			case 'achievement-socket-listener':
				return (
					<AchievementSocketListenerComponent
						onAchievement={onAchievement}
						ref={ref}
						className={className}
						{...props}
					>
						{children}
					</AchievementSocketListenerComponent>
				);
			default:
				return <>{children}</>;
		}
	}
);

// ===== INDIVIDUAL PROVIDER COMPONENTS =====

const SocketProviderComponent = forwardRef<
	HTMLDivElement,
	{
		session?: any;
		autoConnect?: boolean;
		url?: string;
		children: React.ReactNode;
		className?: string;
	} & React.HTMLAttributes<HTMLDivElement>
>(
	(
		{
			session,
			autoConnect,
			url,
			children,
			className,
			...props
		},
		ref
	) => {
		// Stubbed logic for consolidation
		const contextValue: SocketContextType = {
			socket: null,
			isConnected: !!autoConnect,
			emit: (event: string, data?: any) => {},
			on: (
				event: string,
				handler: (data: any) => void
			) => {},
			off: (
				event: string,
				handler?: (data: any) => void
			) => {},
		};
		return (
			<SocketContext.Provider value={contextValue}>
				<Wrapper
					ref={ref}
					className={`${styles.provider} ${styles['provider-socket']} ${className || ''}`}
					{...props}
				>
					{children}
				</Wrapper>
			</SocketContext.Provider>
		);
	}
);

const UserSettingsProviderComponent = forwardRef<
	HTMLDivElement,
	{
		initialSettings?: any;
		children: React.ReactNode;
		className?: string;
	} & React.HTMLAttributes<HTMLDivElement>
>(
	(
		{ initialSettings, children, className, ...props },
		ref
	) => {
		// Stubbed logic for consolidation
		const contextValue: UserSettingsContextType = {
			settings: initialSettings || {},
			setSettings: () => {},
			updateSetting: () => {},
		};
		return (
			<UserSettingsContext.Provider value={contextValue}>
				<Wrapper
					ref={ref}
					className={`${styles.provider} ${styles['provider-settings']} ${className || ''}`}
					{...props}
				>
					{children}
				</Wrapper>
			</UserSettingsContext.Provider>
		);
	}
);

const ThemePaletteProviderComponent = forwardRef<
	HTMLDivElement,
	{
		initialTheme?: string;
		initialPalette?: any;
		children: React.ReactNode;
		className?: string;
	} & React.HTMLAttributes<HTMLDivElement>
>(
	(
		{
			initialTheme,
			initialPalette,
			children,
			className,
			...props
		},
		ref
	) => {
		// Stubbed logic for consolidation
		const contextValue: ThemePaletteContextType = {
			palette: initialPalette || {},
			setPalette: () => {},
			currentTheme: initialTheme || 'default',
			setTheme: () => {},
		};
		return (
			<ThemePaletteContext.Provider value={contextValue}>
				<Wrapper
					ref={ref}
					className={`${styles.provider} ${styles['provider-theme']} ${className || ''}`}
					{...props}
				>
					{children}
				</Wrapper>
			</ThemePaletteContext.Provider>
		);
	}
);

const AchievementSocketListenerComponent = forwardRef<
	HTMLDivElement,
	{
		onAchievement?: (achievement: any) => void;
		children: React.ReactNode;
		className?: string;
	} & React.HTMLAttributes<HTMLDivElement>
>(
	(
		{ onAchievement, children, className, ...props },
		ref
	) => {
		// Stubbed logic for consolidation
		return (
			<Wrapper
				ref={ref}
				className={`${styles.provider} ${styles['provider-listener']} ${className || ''}`}
				{...props}
			>
				{children}
			</Wrapper>
		);
	}
);

Providers.displayName = 'Providers';
export default Providers;
