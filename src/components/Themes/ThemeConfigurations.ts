import { ReactNode } from 'react';
import styles from './Theme.module.scss';

// Theme variant types
export type ThemeVariant =
	| 'selector'
	| 'palette'
	| 'provider'
	| 'switcher'
	| 'custom';

// Theme display types
export type ThemeDisplay =
	| 'swatches'
	| 'dropdown'
	| 'cards'
	| 'grid'
	| 'list';

// Theme layout types
export type ThemeLayout =
	| 'horizontal'
	| 'vertical'
	| 'grid'
	| 'compact';

// VS mode color configuration
export interface VSModeColors {
	player: string;
	enemy: string;
	playerBg: string;
	enemyBg: string;
	boardBg: string;
	font: string;
	border: string;
}

// Theme definition interface
export interface ThemeDefinition {
	name: string;
	label: string;
	color: string;
	bg: string;
	font: string;
	swatchType: 'solid' | 'gradient';
	vsMode: VSModeColors;
}

// Enhanced theme configuration interface
export interface ThemeConfiguration {
	variant: ThemeVariant;
	display?: ThemeDisplay;
	layout?: ThemeLayout;
	showLabels?: boolean;
	showPreview?: boolean;
	allowCustom?: boolean;
	animated?: boolean;
	size?: 'small' | 'medium' | 'large';
	borderRadius?: string;
	gap?: number;

	// Content
	title?: string;
	subtitle?: string;
	placeholder?: string;

	// Styling
	className?: string;
	containerClassName?: string;
	itemClassName?: string;
	labelClassName?: string;

	// Behavior
	defaultTheme?: string;
	themes?: ThemeDefinition[] | string[];
	onChange?: (theme: string) => void;
	onCustomTheme?: (theme: ThemeDefinition) => void;

	// Visual
	colorScheme?: 'default' | 'neutral' | 'branded';
	showGlow?: boolean;
	showShadow?: boolean;
	hoverEffect?: boolean;
}

// VS mode defaults
export const vsModeDefaults: VSModeColors = {
	player: '#2563eb',
	enemy: '#ef4444',
	playerBg: '#e0e7ff',
	enemyBg: '#fee2e2',
	boardBg: '#fff',
	font: '#222',
	border: '#e0e7ef',
};

// Default themes collection
export const defaultThemes: ThemeDefinition[] = [
	{
		name: 'light',
		label: 'Light',
		color: '#f8f5ec',
		bg: '#f8f5ec',
		font: '#222',
		swatchType: 'solid',
		vsMode: {
			player: '#2563eb',
			enemy: '#ef4444',
			playerBg: '#e0e7ff',
			enemyBg: '#fee2e2',
			boardBg: '#fff',
			font: '#222',
			border: '#e0e7ef',
		},
	},
	{
		name: 'dark',
		label: 'Dark',
		color: '#181a1b',
		bg: '#23272a',
		font: '#f8f5ec',
		swatchType: 'solid',
		vsMode: {
			player: '#3b82f6',
			enemy: '#ef4444',
			playerBg: '#1e293b',
			enemyBg: '#3b1e1e',
			boardBg: '#23272a',
			font: '#f8f5ec',
			border: '#334155',
		},
	},
	{
		name: 'oceanic',
		label: 'Oceanic',
		color: '#174ea6',
		bg: '#0a2540',
		font: '#a7f3f7',
		swatchType: 'solid',
		vsMode: {
			player: '#3b82f6',
			enemy: '#ef4444',
			playerBg: '#1e293b',
			enemyBg: '#3b1e1e',
			boardBg: '#0a2540',
			font: '#a7f3f7',
			border: '#1e40af',
		},
	},
	{
		name: 'sunset',
		label: 'Sunset',
		color: '#ffb347',
		bg: 'linear-gradient(135deg, #ffb347 0%, #ff5e62 100%)',
		font: '#fff',
		swatchType: 'gradient',
		vsMode: {
			player: '#2563eb',
			enemy: '#ef4444',
			playerBg: '#e0e7ff',
			enemyBg: '#fee2e2',
			boardBg: '#fff',
			font: '#222',
			border: '#e0e7ef',
		},
	},
	{
		name: 'forest',
		label: 'Forest',
		color: '#22c55e',
		bg: '#0f172a',
		font: '#dcfce7',
		swatchType: 'solid',
		vsMode: {
			player: '#22c55e',
			enemy: '#ef4444',
			playerBg: '#052e16',
			enemyBg: '#3b1e1e',
			boardBg: '#0f172a',
			font: '#dcfce7',
			border: '#166534',
		},
	},
	{
		name: 'purple',
		label: 'Purple',
		color: '#8b5cf6',
		bg: '#1e1b4b',
		font: '#e5d5ff',
		swatchType: 'solid',
		vsMode: {
			player: '#8b5cf6',
			enemy: '#ef4444',
			playerBg: '#312e81',
			enemyBg: '#3b1e1e',
			boardBg: '#1e1b4b',
			font: '#e5d5ff',
			border: '#6d28d9',
		},
	},
	{
		name: 'cherry',
		label: 'Cherry',
		color: '#f97316',
		bg: 'linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ef4444 100%)',
		font: '#fff',
		swatchType: 'gradient',
		vsMode: {
			player: '#f97316',
			enemy: '#ef4444',
			playerBg: '#fed7aa',
			enemyBg: '#fee2e2',
			boardBg: '#fff',
			font: '#222',
			border: '#fb923c',
		},
	},
	{
		name: 'midnight',
		label: 'Midnight',
		color: '#0f172a',
		bg: '#0f172a',
		font: '#f1f5f9',
		swatchType: 'solid',
		vsMode: {
			player: '#3b82f6',
			enemy: '#ef4444',
			playerBg: '#1e293b',
			enemyBg: '#3b1e1e',
			boardBg: '#0f172a',
			font: '#f1f5f9',
			border: '#334155',
		},
	},
];

// Extended theme kinds for comprehensive configuration
export type ExtendedThemeKind =
	// Basic theme selectors
	| 'selector'
	| 'selector-swatches'
	| 'selector-dropdown'
	| 'selector-cards'
	| 'selector-grid'

	// Layout variants
	| 'selector-horizontal'
	| 'selector-vertical'
	| 'selector-compact'
	| 'selector-expanded'

	// Size variants
	| 'selector-small'
	| 'selector-medium'
	| 'selector-large'

	// Feature variants
	| 'selector-with-labels'
	| 'selector-no-labels'
	| 'selector-with-preview'
	| 'selector-no-preview'
	| 'selector-animated'
	| 'selector-static'

	// Specialized selectors
	| 'palette-provider'
	| 'theme-switcher'
	| 'custom-theme-builder'
	| 'vs-mode-selector'

	// Responsive variants
	| 'mobile-optimized'
	| 'desktop-optimized'
	| 'tablet-optimized'

	// Context-specific variants
	| 'modal-theme-selector'
	| 'sidebar-theme-selector'
	| 'header-theme-selector'
	| 'footer-theme-selector'

	// Custom
	| 'custom';

// Theme configuration presets
export const THEME_CONFIGURATIONS: Record<
	ExtendedThemeKind,
	ThemeConfiguration
> = {
	// Basic selectors
	'selector': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'medium',
		gap: 18,
		colorScheme: 'default',
		showGlow: true,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.themeSelector,
	},

	'selector-swatches': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: false,
		showPreview: true,
		animated: true,
		size: 'medium',
		gap: 12,
		colorScheme: 'default',
		showGlow: true,
		showShadow: false,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.swatchSelector,
	},

	'selector-dropdown': {
		variant: 'selector',
		display: 'dropdown',
		layout: 'compact',
		showLabels: true,
		showPreview: false,
		animated: false,
		size: 'medium',
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: false,
		themes: defaultThemes,
		className: styles.dropdownSelector,
	},

	'selector-cards': {
		variant: 'selector',
		display: 'cards',
		layout: 'grid',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'large',
		gap: 20,
		colorScheme: 'default',
		showGlow: false,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.cardSelector,
	},

	'selector-grid': {
		variant: 'selector',
		display: 'grid',
		layout: 'grid',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'medium',
		gap: 16,
		colorScheme: 'default',
		showGlow: false,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.gridSelector,
	},

	// Layout variants
	'selector-horizontal': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: false,
		showPreview: true,
		animated: true,
		size: 'medium',
		gap: 12,
		colorScheme: 'default',
		showGlow: true,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.horizontalSelector,
	},

	'selector-vertical': {
		variant: 'selector',
		display: 'swatches',
		layout: 'vertical',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'medium',
		gap: 8,
		colorScheme: 'default',
		showGlow: true,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.verticalSelector,
	},

	'selector-compact': {
		variant: 'selector',
		display: 'swatches',
		layout: 'compact',
		showLabels: false,
		showPreview: false,
		animated: false,
		size: 'small',
		gap: 6,
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.compactSelector,
	},

	'selector-expanded': {
		variant: 'selector',
		display: 'cards',
		layout: 'grid',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'large',
		gap: 24,
		colorScheme: 'default',
		showGlow: true,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.expandedSelector,
	},

	// Size variants
	'selector-small': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: false,
		showPreview: true,
		animated: true,
		size: 'small',
		gap: 8,
		colorScheme: 'default',
		showGlow: false,
		showShadow: false,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.smallSelector,
	},

	'selector-medium': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'medium',
		gap: 12,
		colorScheme: 'default',
		showGlow: true,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.mediumSelector,
	},

	'selector-large': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'large',
		gap: 18,
		colorScheme: 'default',
		showGlow: true,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.largeSelector,
	},

	// Feature variants
	'selector-with-labels': {
		variant: 'selector',
		display: 'cards',
		layout: 'grid',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'medium',
		gap: 16,
		colorScheme: 'default',
		showGlow: false,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.labeledSelector,
	},

	'selector-no-labels': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: false,
		showPreview: true,
		animated: true,
		size: 'medium',
		gap: 12,
		colorScheme: 'default',
		showGlow: true,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.unlabeledSelector,
	},

	'selector-with-preview': {
		variant: 'selector',
		display: 'cards',
		layout: 'grid',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'large',
		gap: 20,
		colorScheme: 'default',
		showGlow: false,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.previewSelector,
	},

	'selector-no-preview': {
		variant: 'selector',
		display: 'list',
		layout: 'vertical',
		showLabels: true,
		showPreview: false,
		animated: false,
		size: 'medium',
		gap: 4,
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.noPreviewSelector,
	},

	'selector-animated': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: false,
		showPreview: true,
		animated: true,
		size: 'medium',
		gap: 15,
		colorScheme: 'default',
		showGlow: true,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.animatedSelector,
	},

	'selector-static': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: false,
		showPreview: true,
		animated: false,
		size: 'medium',
		gap: 12,
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: false,
		themes: defaultThemes,
		className: styles.staticSelector,
	},

	// Specialized selectors
	'palette-provider': {
		variant: 'palette',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: false,
		showPreview: false,
		animated: false,
		size: 'small',
		gap: 4,
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: false,
		themes: defaultThemes,
		className: styles.paletteProvider,
	},

	'theme-switcher': {
		variant: 'switcher',
		display: 'dropdown',
		layout: 'compact',
		showLabels: true,
		showPreview: false,
		animated: false,
		size: 'small',
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: false,
		themes: defaultThemes,
		className: styles.themeSwitcher,
	},

	'custom-theme-builder': {
		variant: 'custom',
		display: 'cards',
		layout: 'grid',
		showLabels: true,
		showPreview: true,
		allowCustom: true,
		animated: true,
		size: 'large',
		gap: 24,
		colorScheme: 'branded',
		showGlow: false,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.customBuilder,
	},

	'vs-mode-selector': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'medium',
		gap: 12,
		colorScheme: 'branded',
		showGlow: true,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.vsModeSelector,
	},

	// Responsive variants
	'mobile-optimized': {
		variant: 'selector',
		display: 'dropdown',
		layout: 'compact',
		showLabels: true,
		showPreview: false,
		animated: false,
		size: 'small',
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: false,
		themes: defaultThemes,
		className: styles.mobileOptimized,
	},

	'desktop-optimized': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'large',
		gap: 20,
		colorScheme: 'default',
		showGlow: true,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.desktopOptimized,
	},

	'tablet-optimized': {
		variant: 'selector',
		display: 'cards',
		layout: 'grid',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'medium',
		gap: 16,
		colorScheme: 'default',
		showGlow: false,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.tabletOptimized,
	},

	// Context-specific variants
	'modal-theme-selector': {
		variant: 'selector',
		display: 'cards',
		layout: 'grid',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'large',
		gap: 20,
		colorScheme: 'default',
		showGlow: false,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.modalSelector,
	},

	'sidebar-theme-selector': {
		variant: 'selector',
		display: 'list',
		layout: 'vertical',
		showLabels: true,
		showPreview: false,
		animated: false,
		size: 'small',
		gap: 8,
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.sidebarSelector,
	},

	'header-theme-selector': {
		variant: 'selector',
		display: 'dropdown',
		layout: 'compact',
		showLabels: false,
		showPreview: false,
		animated: false,
		size: 'small',
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: false,
		themes: defaultThemes,
		className: styles.headerSelector,
	},

	'footer-theme-selector': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: false,
		showPreview: false,
		animated: false,
		size: 'small',
		gap: 8,
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.footerSelector,
	},

	// Custom
	'custom': {
		variant: 'custom',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: true,
		showPreview: true,
		allowCustom: true,
		animated: true,
		size: 'medium',
		gap: 16,
		colorScheme: 'default',
		showGlow: true,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
		className: styles.customTheme,
	},
};

// Theme groups for logical organization
export const THEME_GROUPS = {
	BASIC: [
		'selector',
		'selector-swatches',
		'selector-dropdown',
		'selector-cards',
	],
	LAYOUTS: [
		'selector-horizontal',
		'selector-vertical',
		'selector-compact',
		'selector-expanded',
	],
	SIZES: [
		'selector-small',
		'selector-medium',
		'selector-large',
	],
	FEATURES: [
		'selector-with-labels',
		'selector-no-labels',
		'selector-with-preview',
		'selector-no-preview',
	],
	SPECIALIZED: [
		'palette-provider',
		'theme-switcher',
		'custom-theme-builder',
		'vs-mode-selector',
	],
	RESPONSIVE: [
		'mobile-optimized',
		'desktop-optimized',
		'tablet-optimized',
	],
	CONTEXTUAL: [
		'modal-theme-selector',
		'sidebar-theme-selector',
		'header-theme-selector',
		'footer-theme-selector',
	],
};

// Quick theme presets for common use cases
export const QUICK_THEMES = {
	DEFAULT: 'selector' as ExtendedThemeKind,
	COMPACT: 'selector-compact' as ExtendedThemeKind,
	DROPDOWN: 'selector-dropdown' as ExtendedThemeKind,
	CARDS: 'selector-cards' as ExtendedThemeKind,
	MOBILE: 'mobile-optimized' as ExtendedThemeKind,
	DESKTOP: 'desktop-optimized' as ExtendedThemeKind,
	MODAL: 'modal-theme-selector' as ExtendedThemeKind,
	SIDEBAR: 'sidebar-theme-selector' as ExtendedThemeKind,
	HEADER: 'header-theme-selector' as ExtendedThemeKind,
	VS_MODE: 'vs-mode-selector' as ExtendedThemeKind,
};

/**
 * Create a theme configuration with custom overrides
 */
export function createThemeConfig(
	baseKind: ExtendedThemeKind,
	overrides: Partial<ThemeConfiguration> = {}
): ThemeConfiguration {
	const baseConfig = THEME_CONFIGURATIONS[baseKind];
	return {
		...baseConfig,
		...overrides,
		// Merge className if both exist
		className:
			overrides.className ?
				`${baseConfig.className || ''} ${overrides.className}`.trim()
			:	baseConfig.className,
	};
}

/**
 * Get theme configuration by kind
 */
export function getThemeConfig(
	kind: ExtendedThemeKind
): ThemeConfiguration {
	return THEME_CONFIGURATIONS[kind];
}

/**
 * Check if a theme kind exists
 */
export function isThemeKind(
	kind: string
): kind is ExtendedThemeKind {
	return kind in THEME_CONFIGURATIONS;
}

/**
 * Get theme by name from a collection
 */
export function getThemeByName(
	name: string,
	themes: ThemeDefinition[] = defaultThemes
): ThemeDefinition | undefined {
	return themes.find((theme) => theme.name === name);
}

/**
 * Apply theme to document body
 */
export function applyTheme(
	themeName: string,
	themes: ThemeDefinition[] = defaultThemes
): void {
	const theme = getThemeByName(themeName, themes);
	if (!theme) return;

	document.body.className = '';
	document.body.classList.add(`theme-${themeName}`);
	document.body.style.transition =
		'background 0.25s ease-in-out, color 0.25s';
}

/**
 * Get CSS class name for theme configuration
 */
export function getThemeClassName(
	config: ThemeConfiguration
): string {
	const baseClass = styles.themeBase || '';
	const variantClass =
		config.variant ? styles[config.variant] : '';
	const layoutClass =
		config.layout ? styles[config.layout] : '';
	const displayClass =
		config.display ? styles[config.display] : '';
	const sizeClass = config.size ? styles[config.size] : '';

	return [
		baseClass,
		variantClass,
		layoutClass,
		displayClass,
		sizeClass,
		config.className,
	]
		.filter(Boolean)
		.join(' ');
}

/**
 * Validate theme definition
 */
export function validateTheme(
	theme: Partial<ThemeDefinition>
): boolean {
	return !!(
		theme.name &&
		theme.label &&
		theme.color &&
		theme.bg &&
		theme.font
	);
}

/**
 * Create VS mode theme variant
 */
export function createVSModeTheme(
	baseTheme: ThemeDefinition,
	vsColors: Partial<VSModeColors>
): ThemeDefinition {
	return {
		...baseTheme,
		vsMode: {
			...baseTheme.vsMode,
			...vsColors,
		},
	};
}
