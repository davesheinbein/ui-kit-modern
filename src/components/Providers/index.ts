export { default as UnifiedProvider } from './UnifiedProvider';
export type {
	ProviderKind,
	UnifiedProviderProps,
} from './UnifiedProvider';

export {
	default as ProviderFactory,
	P,
	ProviderPresets,
	QuickProviders,
} from './factory';
export type { ProviderFactoryProps } from './factory';

export * from './configurations';

export {
	useSocket,
	useUserSettings,
	useThemePalette,
	SocketContext,
	ThemePaletteContext,
	UserSettingsContext,
} from './UnifiedProvider';

export {
	SocketProvider,
	UserSettingsProvider,
	AchievementSocketListener,
	ThemePaletteProvider,
} from './BackwardCompatibilityWrappers';

// Default export
export { default } from './UnifiedProvider';
