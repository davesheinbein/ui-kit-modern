import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	forwardRef,
} from 'react';
import { useDispatch } from 'react-redux';
import {
	ProviderConfiguration,
	UserSettings,
	SocketContextType,
	UserSettingsContextType,
} from './ProviderConfigurations';

// Theme Palette Context Interface
export interface ThemePaletteContextType {
	darkMode: boolean;
	setDarkMode: (dark: boolean) => void;
	palette: Record<string, string>;
	setPalette: (palette: Record<string, string>) => void;
}

export interface ProviderBodyFactoryProps {
	kind:
		| 'socket-provider'
		| 'user-settings-provider'
		| 'achievement-socket-listener'
		| 'theme-palette-provider';
	configuration?: ProviderConfiguration;
	children?: React.ReactNode;
	session?: any;
	autoConnect?: boolean;
	url?: string;
	initialSettings?: any;
	[key: string]: any;
}

// Create contexts
export const SocketContext =
	createContext<SocketContextType>({
		socket: null,
		isConnected: false,
		error: null,
		connect: () => {},
		disconnect: () => {},
	});

export const UserSettingsContext =
	createContext<UserSettingsContextType>({
		settings: null,
		setSettings: () => {},
	});

export const ThemePaletteContext =
	createContext<ThemePaletteContextType>({
		darkMode: false,
		setDarkMode: () => {},
		palette: {},
		setPalette: () => {},
	});

// Hooks
export const useSocket = () => {
	const context = useContext(SocketContext);
	if (!context) {
		throw new Error(
			'useSocket must be used within a SocketProvider'
		);
	}
	return context;
};

export const useUserSettings = () =>
	useContext(UserSettingsContext);

export const useThemePalette = () =>
	useContext(ThemePaletteContext);

/**
 * ProviderBodyFactory - Creates the provider content based on provider kind
 * This is the DRY equivalent of individual provider components
 */
const ProviderBodyFactory = forwardRef<
	any,
	ProviderBodyFactoryProps
>(
	(
		{
			kind,
			configuration,
			children,
			session,
			autoConnect = false,
			url = '/api/socket',
			initialSettings,
			...props
		},
		ref
	) => {
		// Socket Provider Logic
		const SocketProviderComponent: React.FC<{
			children: React.ReactNode;
		}> = ({ children }) => {
			const [socket, setSocket] = useState<any>(null);
			const [isConnected, setIsConnected] = useState(false);
			const [error, setError] = useState<string | null>(
				null
			);

			const connect = (connectUrl?: string) => {
				try {
					const targetUrl = connectUrl || url;

					// Try to use Socket.IO if available (for enhanced features)
					if (
						typeof window !== 'undefined' &&
						(window as any).io
					) {
						const io = (window as any).io;
						const newSocket = io(targetUrl, {
							transports: ['websocket', 'polling'],
						});

						newSocket.on('connect', () => {
							setIsConnected(true);
							setError(null);
						});

						newSocket.on('disconnect', () => {
							setIsConnected(false);
						});

						newSocket.on('error', (err: any) => {
							setError(
								err.message || 'Socket connection error'
							);
						});

						setSocket(newSocket);
					} else {
						// Fallback to basic WebSocket
						const wsUrl = targetUrl.replace(
							'/api/socket',
							'/api/ws'
						);
						const newSocket = new WebSocket(wsUrl);

						newSocket.onopen = () => {
							setIsConnected(true);
							setError(null);
						};

						newSocket.onclose = () => {
							setIsConnected(false);
						};

						newSocket.onerror = () => {
							setError('WebSocket connection error');
						};

						setSocket(newSocket);
					}
				} catch (err: any) {
					setError(err.message || 'Failed to connect');
				}
			};

			const disconnect = () => {
				if (socket) {
					if (typeof socket.disconnect === 'function') {
						socket.disconnect(); // Socket.IO
					} else if (typeof socket.close === 'function') {
						socket.close(); // WebSocket
					}
					setSocket(null);
					setIsConnected(false);
				}
			};

			const emit = (event: string, data?: any) => {
				if (socket && isConnected) {
					if (typeof socket.emit === 'function') {
						socket.emit(event, data); // Socket.IO
					} else if (socket.send) {
						socket.send(JSON.stringify({ event, data })); // WebSocket
					}
				}
			};

			useEffect(() => {
				if (autoConnect && session) {
					connect();
				}

				return () => {
					disconnect();
				};
			}, [session, autoConnect]);

			return (
				<SocketContext.Provider
					value={{
						socket,
						isConnected,
						error,
						connect,
						disconnect,
						emit,
					}}
				>
					{children}
				</SocketContext.Provider>
			);
		};

		// User Settings Provider Logic
		const UserSettingsProviderComponent: React.FC<{
			children: React.ReactNode;
		}> = ({ children }) => {
			const [settings, setSettings] =
				useState<UserSettings | null>(
					initialSettings || {
						chatEnabled: true,
						profanityFilter: true,
						notificationsEnabled: true,
					}
				);

			return (
				<UserSettingsContext.Provider
					value={{ settings, setSettings }}
				>
					{children}
				</UserSettingsContext.Provider>
			);
		};

		// Achievement Socket Listener Logic
		const AchievementSocketListenerComponent: React.FC =
			() => {
				const dispatch = useDispatch();
				const { socket } = useSocket();

				useEffect(() => {
					if (!socket) return;
					// Example: socket.on('achievement', (data) => dispatch(...))
					// Add your socket event listeners here
					return () => {
						// Clean up listeners
					};
				}, [socket, dispatch]);

				return null;
			};

		// Theme Palette Provider Logic
		const ThemePaletteProviderComponent: React.FC<{
			children: React.ReactNode;
		}> = ({ children }) => {
			const [darkMode, setDarkMode] = useState(false);
			const [palette, setPalette] = useState<
				Record<string, string>
			>({});

			return (
				<ThemePaletteContext.Provider
					value={{
						darkMode,
						setDarkMode,
						palette,
						setPalette,
					}}
				>
					{children}
				</ThemePaletteContext.Provider>
			);
		};

		// Render based on kind
		switch (kind) {
			case 'socket-provider':
				return (
					<SocketProviderComponent>
						{children}
					</SocketProviderComponent>
				);

			case 'user-settings-provider':
				return (
					<UserSettingsProviderComponent>
						{children}
					</UserSettingsProviderComponent>
				);

			case 'achievement-socket-listener':
				return <AchievementSocketListenerComponent />;

			case 'theme-palette-provider':
				return (
					<ThemePaletteProviderComponent>
						{children}
					</ThemePaletteProviderComponent>
				);

			default:
				console.warn(`Unknown provider kind: ${kind}`);
				return <>{children}</>;
		}
	}
);

ProviderBodyFactory.displayName = 'ProviderBodyFactory';

export default ProviderBodyFactory;
