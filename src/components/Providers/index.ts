// ===== MAIN DRY PROVIDER SYSTEM =====

// Export the main unified provider component
export { default as UnifiedProvider } from './UnifiedProvider';
export type {
	ProviderKind,
	UnifiedProviderProps,
} from './UnifiedProvider';

// Export provider factory system
export {
	default as ProviderFactory,
	P,
	ProviderPresets,
	QuickProviders,
} from './ProviderFactoryDRY';
export type { ProviderFactoryProps } from './ProviderFactoryDRY';

// Export configuration system
export * from './ProviderConfigurations';

// Export hooks and contexts from UnifiedProvider
export {
	useSocket,
	useUserSettings,
	useThemePalette,
	SocketContext,
	ThemePaletteContext,
	UserSettingsContext,
} from './UnifiedProvider';

// Export backward compatibility provider wrappers
export {
	SocketProvider,
	UserSettingsProvider,
	AchievementSocketListener,
	ThemePaletteProvider,
} from './BackwardCompatibilityWrappers';

// Default export
export { default } from './UnifiedProvider';
