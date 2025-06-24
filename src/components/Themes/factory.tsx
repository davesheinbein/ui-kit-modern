import React from 'react';
import { Wrapper } from '../Wrappers';
import Theme, {
	ThemeProps,
	ThemeKind,
} from './Theme';
import {
	THEME_CONFIGURATIONS,
	THEME_GROUPS,
	QUICK_THEMES,
	ThemeConfiguration,
	ExtendedThemeKind,
	ThemeDefinition,
	defaultThemes,
} from './configurations';

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
		props: Partial<ThemeProps> = {}
	): React.ReactElement<ThemeProps> {
		return React.createElement(Theme, {
			kind,
			...props,
		});
	}

	/**
	 * Create multiple theme components from a group
	 */
	static createGroup(
		groupName: keyof typeof THEME_GROUPS,
		sharedProps: Partial<ThemeProps> = {}
	): React.ReactElement<ThemeProps>[] {
		const group = THEME_GROUPS[groupName];
		if (!group) return [];

		return group.map((kind, index) =>
			React.createElement(Theme, {
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
		props: Partial<ThemeProps> = {}
	): React.ReactElement<ThemeProps> {
		const quickConfig = QUICK_THEMES[quickName];
		if (!quickConfig) {
			throw new Error(
				`Quick theme "${quickName}" not found`
			);
		}

		return React.createElement(Theme, {
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
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector', props);

export const ThemeSwatches = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-swatches', props);

export const ThemeDropdown = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-dropdown', props);

export const ThemeCards = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-cards', props);

export const ThemeGrid = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-grid', props);

// Layout shortcuts
export const HorizontalThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-horizontal', props);

export const VerticalThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-vertical', props);

export const CompactThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-compact', props);

export const ExpandedThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-expanded', props);

// Size shortcuts
export const SmallThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-small', props);

export const MediumThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-medium', props);

export const LargeThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-large', props);

// Feature shortcuts
export const LabeledThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-with-labels', props);

export const UnlabeledThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-no-labels', props);

export const PreviewThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-with-preview', props);

export const NoPreviewThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-no-preview', props);

export const AnimatedThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-animated', props);

export const StaticThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('selector-static', props);

// Specialized shortcuts
export const ThemePalette = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('palette-provider', props);

export const ThemeSwitcher = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('theme-switcher', props);

export const CustomThemeBuilder = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('custom-theme-builder', props);

export const VSModeThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('vs-mode-selector', props);

// Responsive shortcuts
export const MobileThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('mobile-optimized', props);

export const DesktopThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('desktop-optimized', props);

export const TabletThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('tablet-optimized', props);

// Context-specific shortcuts
export const ModalThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('modal-theme-selector', props);

export const SidebarThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('sidebar-theme-selector', props);

export const HeaderThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('header-theme-selector', props);

export const FooterThemes = (
	props: Partial<ThemeProps> = {}
) => ThemeFactory.create('footer-theme-selector', props);

/**
 * Preset component functions with common configurations
 */

// Dashboard presets
export const DashboardThemeSelector = (
	props: Partial<ThemeProps> = {}
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
	props: Partial<ThemeProps> = {}
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
	props: Partial<ThemeProps> = {}
) =>
	ThemeDropdown({
		size: 'small',
		showLabels: true,
		...props,
	});

// Header presets
export const HeaderThemeSelector = (
	props: Partial<ThemeProps> = {}
) =>
	ThemeDropdown({
		size: 'small',
		showLabels: false,
		...props,
	});

// Mobile presets
export const MobileThemeSelector = (
	props: Partial<ThemeProps> = {}
) =>
	ThemeDropdown({
		size: 'small',
		showLabels: true,
		...props,
	});

// Desktop presets
export const DesktopThemeSelector = (
	props: Partial<ThemeProps> = {}
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
	props: Partial<ThemeProps> = {}
) =>
	ThemeFactory.create('selector', {
		themes,
		...props,
	});

// Create theme selector with animation
export const AnimatedThemeSelector = (
	props: Partial<ThemeProps> = {}
) =>
	ThemeFactory.create('selector', {
		animated: true,
		showGlow: true,
		hoverEffect: true,
		...props,
	});

// Create theme selector without animation (for performance)
export const StaticThemeSelector = (
	props: Partial<ThemeProps> = {}
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
	props: Partial<ThemeProps> = {}
) =>
	ThemeFactory.create('selector', {
		className,
		...props,
	});

// Create theme selector with onChange handler
export const ControlledThemeSelector = (
	value: string,
	onChange: (theme: string) => void,
	props: Partial<ThemeProps> = {}
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

export default ThemeFactory;
