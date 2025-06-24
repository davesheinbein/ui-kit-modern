export type SettingsVariant =
	| 'panel'
	| 'customization'
	| 'user-preferences'
	| 'theme-selector'
	| 'theme-customization'
	| 'theme-builder'
	| 'accessibility'
	| 'privacy'
	| 'custom';

export type SettingsPosition =
	| 'modal'
	| 'sidebar'
	| 'inline'
	| 'floating';

export interface SettingsConfiguration {
	kind:
		| 'settings-panel'
		| 'customization-category'
		| 'user-settings'
		| 'theme-settings'
		| 'theme-customization'
		| 'theme-selector'
		| 'theme-builder'
		| 'accessibility-settings'
		| 'privacy-settings';
	variant?: SettingsVariant;
	position?: SettingsPosition;
	title?: string;
	description?: string;
	showHeader?: boolean;
	showFooter?: boolean;
	sections?: string[];
	customizationType?:
		| 'themes'
		| 'emotes'
		| 'fonts'
		| 'borders'
		| 'backgrounds'
		| 'general';
	gridLayout?: boolean;
	columns?: number;
	allowMultiSelect?: boolean;
	showPrices?: boolean;
	showLocked?: boolean;
	enableSearch?: boolean;
	// Theme-specific settings
	themeSettings?: ThemeCustomizationSettings;
	[key: string]: any;
}

// Settings Panel Configuration
export const settingsPanel: SettingsConfiguration = {
	kind: 'settings-panel',
	variant: 'panel',
	position: 'modal',
	title: 'Settings',
	showHeader: true,
	showFooter: false,
	sections: ['general', 'privacy', 'accessibility'],
};

// Customization Category Configuration
export const customizationCategory: SettingsConfiguration =
	{
		kind: 'customization-category',
		variant: 'customization',
		position: 'inline',
		title: 'Customization',
		showHeader: true,
		showFooter: false,
		gridLayout: true,
		columns: 4,
		allowMultiSelect: false,
		showPrices: true,
		showLocked: true,
		enableSearch: false,
	};

// User Settings Configuration
export const userSettings: SettingsConfiguration = {
	kind: 'user-settings',
	variant: 'user-preferences',
	position: 'sidebar',
	title: 'User Preferences',
	showHeader: true,
	showFooter: true,
	sections: ['chat', 'notifications', 'privacy'],
};

// Theme Settings Configuration
export const themeSettings: SettingsConfiguration = {
	kind: 'theme-settings',
	variant: 'theme-selector',
	position: 'modal',
	title: 'Theme Settings',
	customizationType: 'themes',
	gridLayout: true,
	columns: 3,
	showHeader: true,
	showFooter: false,
};

// Accessibility Settings Configuration
export const accessibilitySettings: SettingsConfiguration =
	{
		kind: 'accessibility-settings',
		variant: 'accessibility',
		position: 'modal',
		title: 'Accessibility',
		showHeader: true,
		showFooter: true,
		sections: ['display', 'audio', 'input'],
	};

// Privacy Settings Configuration
export const privacySettings: SettingsConfiguration = {
	kind: 'privacy-settings',
	variant: 'privacy',
	position: 'modal',
	title: 'Privacy & Security',
	showHeader: true,
	showFooter: true,
	sections: ['data', 'sharing', 'security'],
};

// Moved to end of file after all configurations are defined

// Type exports - moved to end of file
export type CustomizationType =
	| 'themes'
	| 'emotes'
	| 'fonts'
	| 'borders'
	| 'backgrounds'
	| 'general';

// Settings item interface for customization categories
export interface SettingsItem {
	id: string;
	name: string;
	description?: string;
	primaryColor?: string;
	accentColor?: string;
	secondaryColor?: string;
	borderColor?: string;
	swatchGradient?: string;
	imageUrl?: string;
	previewBorder?: string;
	previewImage?: string;
	backgroundColor?: string;
	style?: string;
	equipped?: boolean;
	price?: number;
	currency?: string;
	shop?: boolean;
	unlocked?: boolean;
	[key: string]: any;
}

// Settings section interface
export interface SettingsSection {
	id: string;
	title: string;
	description?: string;
	fields: Array<{
		id: string;
		type:
			| 'checkbox'
			| 'radio'
			| 'select'
			| 'range'
			| 'text';
		label: string;
		value: any;
		options?: Array<{ label: string; value: any }>;
		min?: number;
		max?: number;
		step?: number;
	}>;
}

// Theme-related interfaces for Settings
export interface ThemeDefinition {
	name: string;
	label: string;
	color: string;
	bg: string;
	font: string;
	swatchType: 'solid' | 'gradient';
	vsMode: {
		player: string;
		enemy: string;
		playerBg: string;
		enemyBg: string;
		boardBg: string;
		font: string;
		border: string;
	};
}

export interface ThemeCustomizationSettings {
	display?:
		| 'swatches'
		| 'dropdown'
		| 'cards'
		| 'grid'
		| 'list';
	layout?: 'horizontal' | 'vertical' | 'grid' | 'compact';
	showLabels?: boolean;
	showPreview?: boolean;
	animated?: boolean;
	size?: 'small' | 'medium' | 'large';
	themes?: ThemeDefinition[] | string[];
	allowCustomThemes?: boolean;
	showVSModeOptions?: boolean;
}

// Enhanced theme variant types for appearance customization
export type ThemeVariant =
	| 'selector'
	| 'palette'
	| 'provider'
	| 'switcher'
	| 'custom'
	| 'builder';

// Enhanced theme display types for appearance customization
export type ThemeDisplay =
	| 'swatches'
	| 'dropdown'
	| 'cards'
	| 'grid'
	| 'list';

// Enhanced theme layout types for appearance customization
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

// Enhanced theme configuration interface for appearance customization
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

// Theme definitions for customization
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

// Theme customization configurations
export const themeCustomization: SettingsConfiguration = {
	kind: 'theme-customization',
	variant: 'theme-customization',
	position: 'modal',
	title: 'Theme Customization',
	description: 'Choose your preferred visual theme',
	customizationType: 'themes',
	gridLayout: true,
	columns: 4,
	showHeader: true,
	showFooter: false,
	themeSettings: {
		display: 'swatches',
		layout: 'grid',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'medium',
		themes: defaultThemes,
		allowCustomThemes: false,
		showVSModeOptions: true,
	},
};

export const themeSelector: SettingsConfiguration = {
	kind: 'theme-selector',
	variant: 'theme-selector',
	position: 'inline',
	title: 'Theme Selector',
	description: 'Quick theme switching',
	customizationType: 'themes',
	gridLayout: false,
	showHeader: false,
	showFooter: false,
	themeSettings: {
		display: 'swatches',
		layout: 'horizontal',
		showLabels: false,
		showPreview: true,
		animated: true,
		size: 'small',
		themes: defaultThemes,
		allowCustomThemes: false,
		showVSModeOptions: false,
	},
};

export const themeBuilder: SettingsConfiguration = {
	kind: 'theme-builder',
	variant: 'theme-builder',
	position: 'modal',
	title: 'Theme Builder',
	description: 'Create your own custom themes',
	customizationType: 'themes',
	gridLayout: true,
	columns: 3,
	showHeader: true,
	showFooter: true,
	themeSettings: {
		display: 'cards',
		layout: 'grid',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'large',
		themes: defaultThemes,
		allowCustomThemes: true,
		showVSModeOptions: true,
	},
};

// VS mode defaults
export const vsModeDefaults = {
	player: '#2563eb',
	enemy: '#ef4444',
	playerBg: '#e0e7ff',
	enemyBg: '#fee2e2',
	boardBg: '#fff',
	font: '#222',
	border: '#e0e7ef',
};

// Utility functions for theme management
export function getThemeByName(
	name: string,
	themes: ThemeDefinition[] = defaultThemes
): ThemeDefinition | undefined {
	return themes.find((theme) => theme.name === name);
}

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

	// Specialized themes
	| 'palette-provider'
	| 'theme-switcher'
	| 'custom-theme-builder'
	| 'vs-mode-selector'

	// Responsive variants
	| 'mobile-optimized'
	| 'desktop-optimized'
	| 'tablet-optimized'

	// Contextual theme selectors
	| 'modal-theme-selector'
	| 'sidebar-theme-selector'
	| 'header-theme-selector'
	| 'footer-theme-selector';

// Theme configuration mappings for appearance settings
export const THEME_CONFIGURATIONS: Record<
	ExtendedThemeKind,
	ThemeConfiguration
> = {
	// Basic configurations
	'selector': {
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
		showShadow: false,
		hoverEffect: true,
		themes: defaultThemes,
	},

	'selector-with-preview': {
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
	},

	'selector-no-preview': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: true,
		showPreview: false,
		animated: false,
		size: 'medium',
		gap: 12,
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: true,
		themes: defaultThemes,
	},

	// Specialized themes
	'palette-provider': {
		variant: 'palette',
		display: 'grid',
		layout: 'grid',
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
	},

	'theme-switcher': {
		variant: 'switcher',
		display: 'dropdown',
		layout: 'compact',
		showLabels: true,
		showPreview: false,
		animated: true,
		size: 'medium',
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: true,
		themes: defaultThemes,
	},

	'custom-theme-builder': {
		variant: 'custom',
		display: 'cards',
		layout: 'grid',
		showLabels: true,
		showPreview: true,
		animated: true,
		size: 'large',
		gap: 24,
		colorScheme: 'default',
		allowCustom: true,
		showGlow: true,
		showShadow: true,
		hoverEffect: true,
		themes: defaultThemes,
	},

	'vs-mode-selector': {
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
	},

	// Responsive variants
	'mobile-optimized': {
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
	},

	'desktop-optimized': {
		variant: 'selector',
		display: 'grid',
		layout: 'grid',
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
	},

	// Contextual theme selectors
	'modal-theme-selector': {
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
	},

	'sidebar-theme-selector': {
		variant: 'selector',
		display: 'list',
		layout: 'vertical',
		showLabels: true,
		showPreview: false,
		animated: true,
		size: 'small',
		gap: 8,
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: true,
		themes: defaultThemes,
	},

	'header-theme-selector': {
		variant: 'selector',
		display: 'swatches',
		layout: 'horizontal',
		showLabels: false,
		showPreview: true,
		animated: true,
		size: 'small',
		gap: 8,
		colorScheme: 'neutral',
		showGlow: false,
		showShadow: false,
		hoverEffect: true,
		themes: defaultThemes,
	},

	'footer-theme-selector': {
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
	},
};

// Theme groups for organized configuration
export const THEME_GROUPS = {
	BASIC: [
		'selector',
		'selector-swatches',
		'selector-dropdown',
		'selector-cards',
		'selector-grid',
	],
	LAYOUT: [
		'selector-horizontal',
		'selector-vertical',
		'selector-compact',
		'selector-expanded',
	],
	SIZE: [
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

// Export all configurations (placed at end to ensure all are defined)
export const SETTINGS_CONFIGURATIONS = {
	// Main kinds
	'settings-panel': settingsPanel,
	'customization-category': customizationCategory,
	'user-settings': userSettings,
	'theme-settings': themeSettings,
	'theme-customization': themeCustomization,
	'theme-selector': themeSelector,
	'theme-builder': themeBuilder,
	'accessibility-settings': accessibilitySettings,
	'privacy-settings': privacySettings,

	// Theme appearance configurations (migrated from Themes system)
	...Object.fromEntries(
		Object.keys(THEME_CONFIGURATIONS).map((key) => [
			key,
			{
				...themeSettings,
				kind: key as ExtendedThemeKind,
				variant: key as ExtendedThemeKind,
				themeSettings:
					THEME_CONFIGURATIONS[key as ExtendedThemeKind],
			},
		])
	),
};

export type SettingsKind =
	keyof typeof SETTINGS_CONFIGURATIONS;
