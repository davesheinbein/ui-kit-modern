import React from 'react';

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
	SimpleProviderFactory,
	ExtendedProviderPresets,
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

// Backward compatibility wrappers - inline for DRY consolidation
import UnifiedProvider, {
	UnifiedProviderProps,
} from './UnifiedProvider';

// Interface for providers without the 'kind' prop (backward compatibility)
type ProviderProps = Omit<UnifiedProviderProps, 'kind'>;

/**
 * SocketProvider - Backward compatibility wrapper
 * For new development, use UnifiedProvider with kind="socket-provider"
 */
export const SocketProvider: React.FC<ProviderProps> = (
	props
) => <UnifiedProvider kind='socket-provider' {...props} />;

/**
 * UserSettingsProvider - Backward compatibility wrapper
 * For new development, use UnifiedProvider with kind="user-settings-provider"
 */
export const UserSettingsProvider: React.FC<
	ProviderProps
> = (props) => (
	<UnifiedProvider
		kind='user-settings-provider'
		{...props}
	/>
);

/**
 * AchievementSocketListener - Backward compatibility wrapper
 * For new development, use UnifiedProvider with kind="achievement-socket-listener"
 */
export const AchievementSocketListener: React.FC<
	ProviderProps
> = (props) => (
	<UnifiedProvider
		kind='achievement-socket-listener'
		{...props}
	/>
);

/**
 * ThemePaletteProvider - Backward compatibility wrapper
 * For new development, use UnifiedProvider with kind="theme-palette-provider"
 */
export const ThemePaletteProvider: React.FC<
	ProviderProps
> = (props) => (
	<UnifiedProvider
		kind='theme-palette-provider'
		{...props}
	/>
);

// Default export
export { default } from './UnifiedProvider';
