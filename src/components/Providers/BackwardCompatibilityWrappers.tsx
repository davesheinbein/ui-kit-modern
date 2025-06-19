import React from 'react';
import UnifiedProvider, {
	UnifiedProviderProps,
} from './UnifiedProvider';

// Interface for providers without the 'kind' prop (backward compatibility)
type ProviderProps = Omit<UnifiedProviderProps, 'kind'>;

/**
 * SocketProvider - Backward compatibility wrapper
 *
 * This component maintains the same API as the original SocketProvider
 * but delegates to the new DRY UnifiedProvider system.
 */
export const SocketProvider: React.FC<ProviderProps> = (
	props
) => <UnifiedProvider kind='socket-provider' {...props} />;

/**
 * UserSettingsProvider - Backward compatibility wrapper
 *
 * This component maintains the same API as the original UserSettingsProvider
 * but delegates to the new DRY UnifiedProvider system.
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
 *
 * This component maintains the same API as the original AchievementSocketListener
 * but delegates to the new DRY UnifiedProvider system.
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
 *
 * This component maintains the same API as the original ThemePaletteProvider
 * but delegates to the new DRY UnifiedProvider system.
 */
export const ThemePaletteProvider: React.FC<
	ProviderProps
> = (props) => (
	<UnifiedProvider
		kind='theme-palette-provider'
		{...props}
	/>
);
