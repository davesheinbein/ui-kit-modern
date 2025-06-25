import React from 'react';
import { Wrapper } from '../Wrappers';

// Keep the original Providers component for backward compatibility
export { default as Providers } from './Providers';
export type { ProviderProps } from './Providers';

// Explicitly export contexts and types to avoid wildcard conflicts
export {
	ThemePaletteContext,
	SocketContext,
	UserSettingsContext,
	useThemePalette,
	useSocket,
	useUserSettings,
} from './Providers';

export type {
	ThemePaletteContextType,
	SocketContextType,
	UserSettingsContextType,
} from './Providers';

export * from './configurations';
