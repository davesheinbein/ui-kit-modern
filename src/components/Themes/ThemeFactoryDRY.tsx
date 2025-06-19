import React from 'react';
import UnifiedTheme, {
	UnifiedThemeProps,
	ThemeKind,
} from './UnifiedTheme';
import {
	THEME_CONFIGURATIONS,
	THEME_GROUPS,
	QUICK_THEMES,
	ThemeConfiguration,
	ExtendedThemeKind,
	ThemeDefinition,
	defaultThemes,
} from './ThemeConfigurations';

/**
 * Theme Factory - Creates theme components with minimal configuration
 * This is the most DRY way to create theme selectors in the entire system
 */
export class ThemeFactory {
	/**
	 * Create a theme component with a specific kind and minimal props
	 */
	static create(
		kind: ThemeKind,
		props: Partial<UnifiedThemeProps> = {}
	): React.ReactElement<UnifiedThemeProps> {
		return React.createElement(UnifiedTheme, {
			kind,
			...props,
		});
	}

	/**
	 * Create multiple theme components from a group
	 */
	static createGroup(
		groupName: keyof typeof THEME_GROUPS,
		sharedProps: Partial<UnifiedThemeProps> = {}
	): React.ReactElement<UnifiedThemeProps>[] {
		const group = THEME_GROUPS[groupName];
		if (!group) return [];

		return group.map((kind, index) =>
			React.createElement(UnifiedTheme, {
				key: `${groupName}-${index}`,
				kind: kind as ExtendedThemeKind,
				...sharedProps,
			})
		);
	}

	/**
	 * Create a theme component with a preset configuration
	 */
	static createQuick(
		quickName: keyof typeof QUICK_THEMES,
		props: Partial<UnifiedThemeProps> = {}
	): React.ReactElement<UnifiedThemeProps> {
		const quickConfig = QUICK_THEMES[quickName];
		if (!quickConfig) {
			throw new Error(
				`Quick theme "${quickName}" not found`
			);
		}

		return React.createElement(UnifiedTheme, {
			kind: quickConfig,
			...props,
		});
	}
}

/**
 * Ultra-short component creation functions
 * These provide the most concise way to create theme components
 */

// Basic theme selectors
export const ThemeSelector = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector', props);

export const ThemeSwatches = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-swatches', props);

export const ThemeDropdown = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-dropdown', props);

export const ThemeCards = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-cards', props);

export const ThemeGrid = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-grid', props);

// Layout shortcuts
export const HorizontalThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-horizontal', props);

export const VerticalThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-vertical', props);

export const CompactThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-compact', props);

export const ExpandedThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-expanded', props);

// Size shortcuts
export const SmallThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-small', props);

export const MediumThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-medium', props);

export const LargeThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-large', props);

// Feature shortcuts
export const LabeledThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-with-labels', props);

export const UnlabeledThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-no-labels', props);

export const PreviewThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-with-preview', props);

export const NoPreviewThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-no-preview', props);

export const AnimatedThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-animated', props);

export const StaticThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('selector-static', props);

// Specialized shortcuts
export const ThemePalette = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('palette-provider', props);

export const ThemeSwitcher = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('theme-switcher', props);

export const CustomThemeBuilder = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('custom-theme-builder', props);

export const VSModeThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('vs-mode-selector', props);

// Responsive shortcuts
export const MobileThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('mobile-optimized', props);

export const DesktopThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('desktop-optimized', props);

export const TabletThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('tablet-optimized', props);

// Context-specific shortcuts
export const ModalThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('modal-theme-selector', props);

export const SidebarThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('sidebar-theme-selector', props);

export const HeaderThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('header-theme-selector', props);

export const FooterThemes = (
	props: Partial<UnifiedThemeProps> = {}
) => ThemeFactory.create('footer-theme-selector', props);

/**
 * Preset component functions with common configurations
 */

// Dashboard presets
export const DashboardThemeSelector = (
	props: Partial<UnifiedThemeProps> = {}
) =>
	ThemeSelector({
		size: 'small',
		layout: 'horizontal',
		showLabels: false,
		gap: 8,
		...props,
	});

// Modal presets
export const ModalThemeSelector = (
	props: Partial<UnifiedThemeProps> = {}
) =>
	ThemeCards({
		size: 'large',
		showLabels: true,
		showPreview: true,
		gap: 20,
		...props,
	});

// Sidebar presets
export const SidebarThemeSelector = (
	props: Partial<UnifiedThemeProps> = {}
) =>
	ThemeDropdown({
		size: 'small',
		showLabels: true,
		...props,
	});

// Header presets
export const HeaderThemeSelector = (
	props: Partial<UnifiedThemeProps> = {}
) =>
	ThemeDropdown({
		size: 'small',
		showLabels: false,
		...props,
	});

// Mobile presets
export const MobileThemeSelector = (
	props: Partial<UnifiedThemeProps> = {}
) =>
	ThemeDropdown({
		size: 'small',
		showLabels: true,
		...props,
	});

// Desktop presets
export const DesktopThemeSelector = (
	props: Partial<UnifiedThemeProps> = {}
) =>
	ThemeSwatches({
		size: 'large',
		showLabels: true,
		showPreview: true,
		animated: true,
		gap: 18,
		...props,
	});

/**
 * Utility functions for creating themes with common patterns
 */

// Create theme selector with specific themes
export const CustomThemeSelector = (
	themes: ThemeDefinition[] | string[],
	props: Partial<UnifiedThemeProps> = {}
) =>
	ThemeFactory.create('selector', {
		themes,
		...props,
	});

// Create theme selector with animation
export const AnimatedThemeSelector = (
	props: Partial<UnifiedThemeProps> = {}
) =>
	ThemeFactory.create('selector', {
		animated: true,
		showGlow: true,
		hoverEffect: true,
		...props,
	});

// Create theme selector without animation (for performance)
export const StaticThemeSelector = (
	props: Partial<UnifiedThemeProps> = {}
) =>
	ThemeFactory.create('selector', {
		animated: false,
		showGlow: false,
		hoverEffect: false,
		...props,
	});

// Create theme selector with custom styling
export const StyledThemeSelector = (
	className: string,
	props: Partial<UnifiedThemeProps> = {}
) =>
	ThemeFactory.create('selector', {
		className,
		...props,
	});

// Create theme selector with onChange handler
export const ControlledThemeSelector = (
	value: string,
	onChange: (theme: string) => void,
	props: Partial<UnifiedThemeProps> = {}
) =>
	ThemeFactory.create('selector', {
		value,
		onChange,
		...props,
	});

/**
 * Quick creation aliases for maximum DRY usage
 */

// Ultra-short aliases
export const T = ThemeFactory.create;
export const TG = ThemeFactory.createGroup;
export const TQ = ThemeFactory.createQuick;

// Common patterns
export const Themes = {
	// Basic
	Default: () => ThemeSelector(),
	Compact: () => CompactThemes(),
	Dropdown: () => ThemeDropdown(),
	Cards: () => ThemeCards(),

	// Responsive
	Mobile: () => MobileThemes(),
	Desktop: () => DesktopThemes(),
	Tablet: () => TabletThemes(),

	// Context
	Modal: () => ModalThemes(),
	Sidebar: () => SidebarThemes(),
	Header: () => HeaderThemes(),
	Footer: () => FooterThemes(),

	// Specialized
	VSMode: () => VSModeThemes(),
	Custom: () => CustomThemeBuilder(),
};

// Export the factory class and all utility functions
export default ThemeFactory;
