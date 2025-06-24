import React from 'react';
import { Wrapper } from '../Wrappers';

export { default as Providers } from './Providers';
export type {
	ProviderProps,
	ProviderKind,
} from './Providers';

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
} from './Providers';

// Backward compatibility wrappers - inline for DRY consolidation
import Providers from './Providers';
import type { ProviderProps } from './Providers';
type ProviderProps = Omit<ProviderProps, 'kind'>;

/**
 * SocketProvider - Backward compatibility wrapper
 * For new development, use Providers with kind="socket-provider"
 */
export const SocketProvider: React.FC<ProviderProps> = (
	props
) => <Providers kind='socket-provider' {...props} />;

/**
 * UserSettingsProvider - Backward compatibility wrapper
 * For new development, use Providers with kind="user-settings-provider"
 */
export const UserSettingsProvider: React.FC<
	ProviderProps
> = (props) => (
	<Providers kind='user-settings-provider' {...props} />
);

/**
 * AchievementSocketListener - Backward compatibility wrapper
 * For new development, use Providers with kind="achievement-socket-listener"
 */
export const AchievementSocketListener: React.FC<
	ProviderProps
> = (props) => (
	<Providers
		kind='achievement-socket-listener'
		{...props}
	/>
);

/**
 * ThemePaletteProvider - Backward compatibility wrapper
 * For new development, use Providers with kind="theme-palette-provider"
 */
export const ThemePaletteProvider: React.FC<
	ProviderProps
> = (props) => (
	<Providers kind='theme-palette-provider' {...props} />
);
