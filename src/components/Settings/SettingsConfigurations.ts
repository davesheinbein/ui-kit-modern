export type SettingsVariant =
	| 'panel'
	| 'customization'
	| 'user-preferences'
	| 'theme-selector'
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

// Export all configurations
export const SETTINGS_CONFIGURATIONS = {
	// Main kinds
	'settings-panel': settingsPanel,
	'customization-category': customizationCategory,
	'user-settings': userSettings,
	'theme-settings': themeSettings,
	'accessibility-settings': accessibilitySettings,
	'privacy-settings': privacySettings,

	// Alias configurations for backward compatibility
	'panel': settingsPanel,
	'customization': customizationCategory,
	'user-prefs': userSettings,
	'themes': themeSettings,
	'accessibility': accessibilitySettings,
	'privacy': privacySettings,
};

export type ExtendedSettingsKind =
	keyof typeof SETTINGS_CONFIGURATIONS;

// Type exports
export type SettingsKind = ExtendedSettingsKind;
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
