export { default as UnifiedProvider } from './UnifiedProvider';
export type {
	ProviderKind,
	UnifiedProviderProps,
} from './UnifiedProvider';

// Export backward compatibility provider wrappers
export {
	SocketProvider,
	UserSettingsProvider,
	AchievementSocketListener,
	ThemePaletteProvider,
} from './BackwardCompatibilityWrappers';

// Export enhanced provider configuration system
export * from './ProviderConfigurations';

// Export enhanced provider factory and ultra-DRY system
export {
	default as ProviderFactory,
	P,
	ProviderPresets,
	QuickProviders,
} from './ProviderFactoryDRY';
export type { ProviderFactoryProps } from './ProviderFactoryDRY';

// Export base components
export { default as Provider } from './Provider';
export type { ProviderProps } from './Provider';

export { default as ProviderBodyFactory } from './ProviderBodyFactory';
export type { ProviderBodyFactoryProps } from './ProviderBodyFactory';

// Export hooks
export {
	useSocket,
	useUserSettings,
	useThemePalette,
	ThemePaletteContext,
	SocketContext,
	UserSettingsContext,
} from './ProviderBodyFactory';

// Default export for backward compatibility
export { default } from './UnifiedProvider';
