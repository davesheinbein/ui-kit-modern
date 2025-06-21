import React, {
	forwardRef,
	createContext,
	useContext,
	useState,
	useEffect,
	useRef,
} from 'react';
import styles from './Providers.module.scss';
import {
	PROVIDER_CONFIGURATIONS,
	ProviderKind,
	ProviderConfiguration,
} from './configurations';

// Use the extended provider kinds from configurations
export type { ProviderKind };

// ===== CONTEXTS AND INTERFACES =====

// Socket Context
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

// Theme Palette Context
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

// User Settings Context
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

export interface UnifiedProviderProps
	extends React.HTMLAttributes<HTMLDivElement> {
	kind: ProviderKind;
	children?: React.ReactNode;

	// Socket Provider props
	session?: any;
	autoConnect?: boolean;
	url?: string;

	// Settings Provider props
	initialSettings?: any;

	// Theme Provider props
	initialTheme?: string;
	initialPalette?: any;

	// Achievement Listener props
	onAchievement?: (achievement: any) => void;

	// Override any configuration
	configuration?: Partial<ProviderConfiguration>;
	[key: string]: any;
}

/**
 * UnifiedProvider - A single component that can render any provider type
 *
 * This is the main DRY provider component that handles all provider kinds
 * through configuration-driven rendering with all logic consolidated.
 *
 * @example
 * <UnifiedProvider kind="socket-provider" autoConnect session={session} />
 * <UnifiedProvider kind="user-settings-provider" initialSettings={settings} />
 * <UnifiedProvider kind="theme-palette-provider" initialTheme="dark" />
 * <UnifiedProvider kind="achievement-socket-listener" onAchievement={handler} />
 */
const UnifiedProvider = forwardRef<
	HTMLDivElement,
	UnifiedProviderProps
>(
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

		// Merge configuration with overrides
		const finalConfig = { ...config, ...configOverride };

		// Render based on provider type
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

// Socket Provider Component
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
		const [socket, setSocket] = useState<any>(null);
		const [isConnected, setIsConnected] = useState(false);

		useEffect(() => {
			if (autoConnect && session) {
				// Mock socket connection logic
				const mockSocket = {
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
				setSocket(mockSocket);
				setIsConnected(true);
			}
		}, [autoConnect, session]);

		const contextValue: SocketContextType = {
			socket,
			isConnected,
			emit: (event: string, data?: any) =>
				socket?.emit(event, data),
			on: (event: string, handler: (data: any) => void) =>
				socket?.on(event, handler),
			off: (event: string, handler?: (data: any) => void) =>
				socket?.off(event, handler),
		};

		return (
			<SocketContext.Provider value={contextValue}>
				<div
					ref={ref}
					className={`${styles.provider} ${styles['provider-socket']} ${className || ''}`}
					{...props}
				>
					{children}
				</div>
			</SocketContext.Provider>
		);
	}
);

// User Settings Provider Component
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
		const [settings, setSettings] = useState(
			initialSettings || {}
		);

		const updateSetting = (key: string, value: any) => {
			setSettings((prev: any) => ({
				...prev,
				[key]: value,
			}));
		};

		const contextValue: UserSettingsContextType = {
			settings,
			setSettings,
			updateSetting,
		};

		return (
			<UserSettingsContext.Provider value={contextValue}>
				<div
					ref={ref}
					className={`${styles.provider} ${styles['provider-settings']} ${className || ''}`}
					{...props}
				>
					{children}
				</div>
			</UserSettingsContext.Provider>
		);
	}
);

// Theme Palette Provider Component
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
		const [currentTheme, setTheme] = useState(
			initialTheme || 'default'
		);
		const [palette, setPalette] = useState(
			initialPalette || {}
		);

		const contextValue: ThemePaletteContextType = {
			palette,
			setPalette,
			currentTheme,
			setTheme,
		};

		return (
			<ThemePaletteContext.Provider value={contextValue}>
				<div
					ref={ref}
					className={`${styles.provider} ${styles['provider-theme']} ${className || ''}`}
					{...props}
				>
					{children}
				</div>
			</ThemePaletteContext.Provider>
		);
	}
);

// Achievement Socket Listener Component
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
		const socket = useSocket();

		useEffect(() => {
			if (socket?.isConnected && onAchievement) {
				const handleAchievement = (achievement: any) => {
					onAchievement(achievement);
				};

				socket.on('achievement', handleAchievement);

				return () => {
					socket.off('achievement', handleAchievement);
				};
			}
		}, [socket, onAchievement]);

		return (
			<div
				ref={ref}
				className={`${styles.provider} ${styles['provider-listener']} ${className || ''}`}
				{...props}
			>
				{children}
			</div>
		);
	}
);

UnifiedProvider.displayName = 'UnifiedProvider';

export default UnifiedProvider;
