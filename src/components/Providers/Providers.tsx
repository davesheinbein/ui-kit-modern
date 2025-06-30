import React, {
	createContext,
	useContext,
	forwardRef,
} from 'react';
import styles from './Providers.module.scss';
import { Wrapper } from '../Wrappers';
import {
	PROVIDER_CONFIGURATIONS,
	ProviderKind,
	ProviderConfiguration,
} from './configurations';
import {
	useAppSelector,
	useAppDispatch,
} from '../../store/hooks';
import {
	selectSettings,
	updateNotificationSettings,
	updatePrivacySettings,
	updateAccessibilitySettings,
	updatePerformanceSettings,
	updateSecuritySettings,
} from '../../store/slices/settingsSlice';
import {
	selectCurrentTheme,
	selectCurrentPalette,
	setTheme,
	setPalette,
} from '../../store/slices/themeSlice';
import {
	selectSocket,
	selectIsConnected,
	registerEvent,
	unregisterEvent,
} from '../../store/slices/socketSlice';

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
	className?: string;
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
			className = '',
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

		const providerClassName = [
			styles.provider,
			styles[`provider--${finalConfig.variant}`],
			styles[`provider--${finalConfig.position}`],
			finalConfig.className,
			className,
		]
			.filter(Boolean)
			.join(' ');
		switch (kind) {
			case 'socket-provider':
				return (
					<SocketProviderComponent
						session={session}
						autoConnect={autoConnect}
						url={url}
						ref={ref}
						className={providerClassName}
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
						className={providerClassName}
						{...props}
					>
						{children}
					</UserSettingsProviderComponent>
				);
			case 'theme-palette-provider':
				return (
					<ThemeProvider
						initialTheme={initialTheme}
						initialPalette={initialPalette}
						ref={ref}
						className={providerClassName}
						{...props}
					>
						{children}
					</ThemeProvider>
				);
			case 'achievement-socket-listener':
				return (
					<AchievementSocketListenerComponent
						onAchievement={onAchievement}
						ref={ref}
						className={providerClassName}
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
			className = '',
			...props
		},
		ref
	) => {
		const socketState = useAppSelector(selectSocket);
		const isConnected = useAppSelector(selectIsConnected);
		const dispatch = useAppDispatch();

		const contextValue: SocketContextType = {
			socket: socketState.socketId || null,
			isConnected: isConnected,
			emit: (event: string, data?: any) => {},
			on: (event: string, handler: (data: any) => void) => {
				dispatch(
					registerEvent({
						type: event,
						handler: handler.name || 'anonymous',
					})
				);
			},
			off: (
				event: string,
				handler?: (data: any) => void
			) => {
				dispatch(unregisterEvent(event));
			},
		};
		return (
			<SocketContext.Provider value={contextValue}>
				<Wrapper ref={ref} className={className} {...props}>
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
		{ initialSettings, children, className = '', ...props },
		ref
	) => {
		const settings = useAppSelector(selectSettings);
		const dispatch = useAppDispatch();

		const contextValue: UserSettingsContextType = {
			settings: settings || initialSettings || {},
			setSettings: (newSettings: any) => {
				dispatch(
					updateNotificationSettings(
						newSettings.notifications || {}
					)
				);
				dispatch(
					updatePrivacySettings(newSettings.privacy || {})
				);
				dispatch(
					updateAccessibilitySettings(
						newSettings.accessibility || {}
					)
				);
				dispatch(
					updatePerformanceSettings(
						newSettings.performance || {}
					)
				);
				dispatch(
					updateSecuritySettings(newSettings.security || {})
				);
			},
			updateSetting: (key: string, value: any) => {
				if (key === 'notifications')
					dispatch(updateNotificationSettings(value));
				else if (key === 'privacy')
					dispatch(updatePrivacySettings(value));
				else if (key === 'accessibility')
					dispatch(updateAccessibilitySettings(value));
				else if (key === 'performance')
					dispatch(updatePerformanceSettings(value));
				else if (key === 'security')
					dispatch(updateSecuritySettings(value));
			},
		};
		return (
			<UserSettingsContext.Provider value={contextValue}>
				<Wrapper ref={ref} className={className} {...props}>
					{children}
				</Wrapper>
			</UserSettingsContext.Provider>
		);
	}
);

export const ThemeProvider = forwardRef<
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
			className = '',
			...props
		},
		ref
	) => {
		const currentTheme = useAppSelector(selectCurrentTheme);
		const palette = useAppSelector(selectCurrentPalette);
		const dispatch = useAppDispatch();

		const contextValue: ThemePaletteContextType = {
			palette: palette || initialPalette || {},
			setPalette: (newPalette: any) =>
				dispatch(setPalette(newPalette)),
			currentTheme:
				currentTheme || initialTheme || 'default',
			setTheme: (theme: string) =>
				dispatch(setTheme(theme)),
		};
		return (
			<ThemePaletteContext.Provider value={contextValue}>
				<Wrapper ref={ref} className={className} {...props}>
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
		{ onAchievement, children, className = '', ...props },
		ref
	) => {
		return (
			<Wrapper ref={ref} className={className} {...props}>
				{children}
			</Wrapper>
		);
	}
);

Providers.displayName = 'Providers';
export default Providers;
