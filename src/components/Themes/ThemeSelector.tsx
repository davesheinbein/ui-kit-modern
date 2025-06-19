import React from 'react';
import UnifiedTheme from './UnifiedTheme';
import {
	defaultThemes,
	vsModeDefaults,
} from './ThemeConfigurations';

// Re-export the original exports for backward compatibility
export { defaultThemes as themes, vsModeDefaults };

// Original ThemeSelector interface for backward compatibility
export interface ThemeSelectorProps {
	value?: string;
	onChange?: (theme: string) => void;
	themes?: string[];
	className?: string;
}

/**
 * ThemeSelector - Legacy wrapper using the unified theme system
 * This maintains backward compatibility while using the new DRY system under the hood
 */
const ThemeSelector: React.FC<ThemeSelectorProps> = ({
	value,
	onChange,
	themes: themeNames,
	className = '',
}) => {
	// If simple string array provided, use dropdown mode
	if (themeNames) {
		return (
			<UnifiedTheme
				kind='selector-dropdown'
				value={value}
				onChange={onChange}
				themes={themeNames}
				className={className}
				showLabels={true}
			/>
		);
	}

	// Use the default swatches theme selector
	return (
		<UnifiedTheme
			kind='selector'
			value={value}
			onChange={onChange}
			themes={defaultThemes}
			className={className}
		/>
	);
};

export default ThemeSelector;
