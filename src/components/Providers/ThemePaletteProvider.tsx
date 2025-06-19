import React from 'react';
import UnifiedProvider from './UnifiedProvider';

interface ThemePaletteProviderProps {
	children: React.ReactNode;
}

/**
 * ThemePaletteProvider - Backward compatibility wrapper
 *
 * This component maintains the same API as the original ThemePaletteProvider
 * but delegates to the new DRY UnifiedProvider system.
 */
const ThemePaletteProvider: React.FC<
	ThemePaletteProviderProps
> = ({ children, ...props }) => {
	return (
		<UnifiedProvider
			kind='theme-palette-provider'
			{...props}
		>
			{children}
		</UnifiedProvider>
	);
};

export default ThemePaletteProvider;
