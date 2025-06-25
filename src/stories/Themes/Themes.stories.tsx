import React from 'react';
import {
	ThemeSelector,
	ThemeSwatches,
	ThemeDropdown,
	ThemeCards,
	ThemeGrid,
	HorizontalThemes,
	VerticalThemes,
	CompactThemes,
	ExpandedThemes,
	SmallThemes,
	MediumThemes,
	LargeThemes,
	LabeledThemes,
	UnlabeledThemes,
	PreviewThemes,
	NoPreviewThemes,
	AnimatedThemes,
	StaticThemes,
	ThemePalette,
	ThemeSwitcher,
	CustomThemeBuilder,
	VSModeThemes,
	MobileThemes,
	DesktopThemes,
	TabletThemes,
	ModalThemes,
	SidebarThemes,
	HeaderThemes,
	FooterThemes,
	DashboardThemeSelector,
	ModalThemeSelector,
	SidebarThemeSelector,
	HeaderThemeSelector,
	MobileThemeSelector,
	DesktopThemeSelector,
	CustomThemeSelector,
	AnimatedThemeSelector,
	StaticThemeSelector,
	StyledThemeSelector,
	ControlledThemeSelector,
	ThemesPresets,
} from '../../components/Themes';

// Add type for Storybook args
import type { ThemesProps } from '../../components/Themes';

export default {
	title: 'Themes/ThemeSelector',
	component: ThemeSelector,
};

export const Default = (args: ThemesProps) => (
	<ThemeSelector {...args} />
);
Default.args = {
	title: 'Select Theme',
};

export const Swatches = (args: ThemesProps) => (
	<ThemeSwatches {...args} />
);
Swatches.args = {
	display: 'swatches',
};

export const Dropdown = (args: ThemesProps) => (
	<ThemeDropdown {...args} />
);
Dropdown.args = {
	display: 'dropdown',
};

export const Cards = (args: ThemesProps) => (
	<ThemeCards {...args} />
);
Cards.args = {
	display: 'cards',
};

export const Grid = (args: ThemesProps) => (
	<ThemeGrid {...args} />
);
Grid.args = {
	display: 'grid',
};

export const Horizontal = (args: ThemesProps) => (
	<HorizontalThemes {...args} />
);
Horizontal.args = {
	layout: 'horizontal',
};

export const Vertical = (args: ThemesProps) => (
	<VerticalThemes {...args} />
);
Vertical.args = {
	layout: 'vertical',
};

export const Compact = (args: ThemesProps) => (
	<CompactThemes {...args} />
);
Compact.args = {
	layout: 'compact',
};

export const Animated = (args: ThemesProps) => (
	<AnimatedThemes {...args} />
);
Animated.args = {
	animated: true,
};

export const Static = (args: ThemesProps) => (
	<StaticThemes {...args} />
);
Static.args = {
	animated: false,
};

export const WithLabels = (args: ThemesProps) => (
	<LabeledThemes {...args} />
);
WithLabels.args = {
	showLabels: true,
};

export const NoLabels = (args: ThemesProps) => (
	<UnlabeledThemes {...args} />
);
NoLabels.args = {
	showLabels: false,
};

export const WithPreview = (args: ThemesProps) => (
	<PreviewThemes {...args} />
);
WithPreview.args = {
	showPreview: true,
};

export const NoPreview = (args: ThemesProps) => (
	<NoPreviewThemes {...args} />
);
NoPreview.args = {
	showPreview: false,
};

export const Palette = (args: ThemesProps) => (
	<ThemePalette {...args} />
);
Palette.args = {
	variant: 'palette',
};

export const Switcher = (args: ThemesProps) => (
	<ThemeSwitcher {...args} />
);
Switcher.args = {
	variant: 'switcher',
};

export const VSMode = (args: ThemesProps) => (
	<VSModeThemes {...args} />
);
VSMode.args = {
	kind: 'vs-mode-selector',
};

export const Custom = (args: ThemesProps) => (
	<CustomThemeBuilder {...args} />
);
Custom.args = {
	kind: 'custom-theme-builder',
};

export const ResponsiveMobile = (args: ThemesProps) => (
	<MobileThemes {...args} />
);
ResponsiveMobile.args = {
	kind: 'mobile-optimized',
};

export const ResponsiveDesktop = (args: ThemesProps) => (
	<DesktopThemes {...args} />
);
ResponsiveDesktop.args = {
	kind: 'desktop-optimized',
};

export const ResponsiveTablet = (args: ThemesProps) => (
	<TabletThemes {...args} />
);
ResponsiveTablet.args = {
	kind: 'tablet-optimized',
};

export const ContextModal = (args: ThemesProps) => (
	<ModalThemes {...args} />
);
ContextModal.args = {
	kind: 'modal-theme-selector',
};

export const ContextSidebar = (args: ThemesProps) => (
	<SidebarThemes {...args} />
);
ContextSidebar.args = {
	kind: 'sidebar-theme-selector',
};

export const ContextHeader = (args: ThemesProps) => (
	<HeaderThemes {...args} />
);
ContextHeader.args = {
	kind: 'header-theme-selector',
};

export const ContextFooter = (args: ThemesProps) => (
	<FooterThemes {...args} />
);
ContextFooter.args = {
	kind: 'footer-theme-selector',
};
