import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedSettings,
	SettingsFactory,
	SettingsPresets,
	QuickSettings,
	defaultThemes,
} from '../../components/Settings';
import {
	UnifiedTheme,
	ThemeFactory,
	ThemeSelector,
	ThemeSwatches,
	ThemeDropdown,
	ThemeCards,
	CompactThemes,
	MobileThemes,
	DesktopThemes,
	ModalThemes,
} from '../../components/Themes';
import type { UnifiedSettingsProps } from '../../components/Settings/UnifiedSettings';

const meta: Meta<typeof UnifiedSettings> = {
	title: 'Settings/Settings',
	component: UnifiedSettings,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# Settings DRY System

The Settings DRY system provides a unified, configuration-driven approach to creating various settings interfaces:

## Components:
- **UnifiedSettings**: Main component that handles all settings types
- **SettingsFactory**: Configuration-driven factory for rapid settings creation
- **SettingsPresets**: Pre-configured settings for common use cases
- **QuickSettings**: Optimized shortcuts for frequent patterns

## Supported Settings Types:
- **settings-panel**: General settings panels with sections and fields
- **customization-category**: Grid-based customization items (themes, emotes, etc.)
- **user-settings**: User preference panels
- **theme-settings**: Theme selector interfaces
- **accessibility-settings**: Accessibility configuration panels
- **privacy-settings**: Privacy and security settings

## Usage Patterns:
\`\`\`tsx
// Direct usage
<UnifiedSettings kind="settings-panel" sections={sections} />

// Factory pattern
<SettingsFactory kind="customization-category" items={themes} />

// Ultra-short alias
<SettingsFactory kind="user-settings" sections={userPrefs} />

// Presets
<SettingsPresets.UserSettings sections={sections} />

// Quick patterns
<QuickSettings.Theme items={themes} />
\`\`\`
				`,
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'settings-panel',
				'customization-category',
				'user-settings',
				'theme-settings',
				'accessibility-settings',
				'privacy-settings',
			],
			description: 'Type of settings interface to render',
		},
		title: {
			control: 'text',
			description: 'Settings title',
		},
		sections: {
			control: 'object',
			description:
				'Array of settings sections (for panel types)',
		},
		items: {
			control: 'object',
			description:
				'Array of customization items (for category types)',
		},
		onSettingChange: {
			action: 'settingChanged',
			description: 'Callback for setting changes',
		},
		onEquip: {
			action: 'equipped',
			description: 'Callback for item equipping',
		},
		onClose: {
			action: 'closed',
			description: 'Callback for panel close',
		},
		showHeader: {
			control: 'boolean',
			description: 'Show settings header',
		},
		showFooter: {
			control: 'boolean',
			description: 'Show settings footer',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedSettings>;

// Mock data
const mockUserSections = [
	{
		id: 'general',
		title: 'General Settings',
		description: 'Basic application preferences',
		fields: [
			{
				id: 'notifications',
				label: 'Enable Notifications',
				type: 'checkbox' as const,
				value: true,
			},
			{
				id: 'language',
				label: 'Language',
				type: 'select' as const,
				value: 'en',
				options: [
					{ label: 'English', value: 'en' },
					{ label: 'Spanish', value: 'es' },
					{ label: 'French', value: 'fr' },
				],
			},
		],
	},
	{
		id: 'gameplay',
		title: 'Gameplay Settings',
		description: 'Game-specific configurations',
		fields: [
			{
				id: 'difficulty',
				label: 'Difficulty Level',
				type: 'range' as const,
				value: 3,
				min: 1,
				max: 5,
			},
			{
				id: 'autoSave',
				label: 'Auto Save',
				type: 'checkbox' as const,
				value: true,
			},
		],
	},
];

const mockThemeItems = [
	{
		id: 'classic',
		name: 'Classic',
		equipped: true,
		primaryColor: '#2563eb',
		accentColor: '#38bdf8',
		secondaryColor: '#a78bfa',
		borderColor: '#e0e7ef',
	},
	{
		id: 'dark',
		name: 'Dark Mode',
		equipped: false,
		primaryColor: '#1f2937',
		accentColor: '#6b7280',
		secondaryColor: '#374151',
		borderColor: '#4b5563',
	},
	{
		id: 'sunset',
		name: 'Sunset',
		equipped: false,
		primaryColor: '#f97316',
		accentColor: '#fbbf24',
		secondaryColor: '#ef4444',
		borderColor: '#f59e0b',
		price: 200,
		currency: 'coins',
		unlocked: false,
	},
];

const mockEmoteItems = [
	{
		id: 'smile',
		name: 'Smile',
		equipped: false,
		price: 100,
		currency: 'coins',
		unlocked: true,
		imageUrl: '😊',
	},
	{
		id: 'wink',
		name: 'Wink',
		equipped: true,
		unlocked: true,
		imageUrl: '😉',
	},
	{
		id: 'locked-emote',
		name: 'Premium Emote',
		equipped: false,
		price: 500,
		currency: 'gems',
		unlocked: false,
		imageUrl: '❤️',
	},
];

const mockFontItems = [
	{
		id: 'roboto',
		name: 'Roboto',
		equipped: true,
		fontFamily: 'Roboto, sans-serif',
		unlocked: true,
	},
	{
		id: 'inter',
		name: 'Inter',
		equipped: false,
		fontFamily: 'Inter, sans-serif',
		unlocked: true,
	},
	{
		id: 'premium-font',
		name: 'Premium Font',
		equipped: false,
		fontFamily: 'Georgia, serif',
		price: 500,
		currency: 'gems',
		unlocked: false,
	},
];

// Helper function to create theme items from defaultThemes
const createThemeItems = (equippedTheme = 'light') =>
	defaultThemes?.map((theme, index) => ({
		id: theme.name,
		name: theme.label,
		type: 'theme' as const,
		equipped: theme.name === equippedTheme,
		unlocked: true,
		icon: theme.color,
		preview: theme.bg,
		description: `${theme.label} theme appearance`,
		themeData: theme,
	})) || mockThemeItems;

const mockAccessibilitySections = [
	{
		id: 'visual',
		title: 'Visual Accessibility',
		fields: [
			{
				id: 'highContrast',
				label: 'High Contrast Mode',
				type: 'checkbox' as const,
				value: false,
			},
			{
				id: 'fontSize',
				label: 'Font Size',
				type: 'range' as const,
				value: 16,
				min: 12,
				max: 24,
			},
		],
	},
	{
		id: 'motor',
		title: 'Motor Accessibility',
		fields: [
			{
				id: 'reducedMotion',
				label: 'Reduce Motion',
				type: 'checkbox' as const,
				value: false,
			},
		],
	},
];

// Core DRY Stories
export const UnifiedSettingsShowcase: Story = {
	name: '🎯 UnifiedSettings - All Types',
	args: {
		kind: 'settings-panel',
		title: 'User Settings',
		sections: mockUserSections,
		showHeader: true,
		showFooter: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates UnifiedSettings component handling different settings types through the kind prop.',
			},
		},
	},
};

export const FactoryPattern: Story = {
	name: '🏭 SettingsFactory Pattern',
	render: (args) => (
		<div className='space-y-4'>
			<h3>Factory Pattern Examples</h3>
			<div className='grid gap-4'>
				<SettingsFactory
					kind='settings-panel'
					title='User Preferences'
					sections={mockUserSections}
					{...args}
				/>
			</div>
		</div>
	),
	args: {
		showHeader: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Shows SettingsFactory creating different settings interfaces through configuration.',
			},
		},
	},
};

export const UltraShortAlias: Story = {
	name: '⚡ SettingsFactory Rapid',
	render: (args) => (
		<div className='space-y-4'>
			<h3>SettingsFactory Examples</h3>
			<div className='grid gap-4'>
				<SettingsFactory
					kind='customization-category'
					title='Themes'
					items={mockThemeItems}
					{...args}
				/>
				<SettingsFactory
					kind='user-settings'
					sections={mockUserSections}
					{...args}
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates SettingsFactory for rapid development.',
			},
		},
	},
};

export const PresetsShowcase: Story = {
	name: '🎨 SettingsPresets',
	render: (args) => (
		<div className='space-y-4'>
			<h3>Settings Presets Examples</h3>
			<div className='grid gap-4'>
				{SettingsPresets.USER_PREFERENCES()}
				{SettingsPresets.THEME_CUSTOMIZATION(
					mockThemeItems
				)}
				{SettingsPresets.ACCESSIBILITY(
					mockAccessibilitySections
				)}
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Shows pre-configured SettingsPresets for common settings scenarios.',
			},
		},
	},
};

export const QuickSettingsPatterns: Story = {
	name: '🚀 QuickSettings',
	render: (args) => (
		<div className='space-y-4'>
			<h3>Quick Settings Patterns</h3>
			<div className='grid gap-4'>
				{QuickSettings.themes(mockThemeItems)}
				{QuickSettings.customization(mockEmoteItems)}
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates QuickSettings for rapid creation of common settings patterns.',
			},
		},
	},
};

// Settings Type Stories
export const SettingsPanel: Story = {
	name: '📋 Settings Panel',
	args: {
		kind: 'settings-panel',
		title: 'Application Settings',
		sections: mockUserSections,
		showHeader: true,
		showFooter: true,
	},
};

export const CustomizationCategory: Story = {
	name: '🎨 Customization Category',
	args: {
		kind: 'customization-category',
		title: 'Themes',
		items: mockThemeItems,
	},
};

export const UserSettings: Story = {
	name: '👤 User Settings',
	args: {
		kind: 'user-settings',
		title: 'User Preferences',
		sections: mockUserSections,
	},
};

export const ThemeSettings: Story = {
	name: '🌈 Theme Settings',
	args: {
		kind: 'theme-settings',
		title: 'Theme Selection',
		items: mockThemeItems,
	},
};

export const AccessibilitySettings: Story = {
	name: '♿ Accessibility Settings',
	args: {
		kind: 'accessibility-settings',
		title: 'Accessibility Options',
		sections: mockAccessibilitySections,
	},
};

export const PrivacySettings: Story = {
	name: '🔒 Privacy Settings',
	args: {
		kind: 'privacy-settings',
		title: 'Privacy & Security',
		sections: [
			{
				id: 'privacy',
				title: 'Privacy Settings',
				fields: [
					{
						id: 'shareData',
						label: 'Share Analytics Data',
						type: 'checkbox' as const,
						value: false,
					},
					{
						id: 'cookieConsent',
						label: 'Cookie Consent',
						type: 'select' as const,
						value: 'essential',
						options: [
							{
								label: 'Essential Only',
								value: 'essential',
							},
							{ label: 'Functional', value: 'functional' },
							{ label: 'All Cookies', value: 'all' },
						],
					},
				],
			},
		],
	},
};

// Interactive Examples
export const InteractiveSettingsPanel: Story = {
	name: '🎮 Interactive Settings Panel',
	args: {
		kind: 'settings-panel',
		title: 'Interactive Settings',
		sections: mockUserSections,
		showHeader: true,
		showFooter: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Fully interactive settings panel with working controls and callbacks.',
			},
		},
	},
};

export const InteractiveCustomization: Story = {
	name: '🎮 Interactive Customization',
	args: {
		kind: 'customization-category',
		title: 'Interactive Themes',
		items: mockThemeItems,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Interactive customization category with equip/unequip functionality.',
			},
		},
	},
};

// Edge Cases
export const EmptySettings: Story = {
	name: '📭 Empty Settings',
	args: {
		kind: 'settings-panel',
		title: 'Empty Settings Panel',
		sections: [],
	},
};

export const SingleSection: Story = {
	name: '📄 Single Section',
	args: {
		kind: 'settings-panel',
		title: 'Single Section Settings',
		sections: [mockUserSections[0]],
	},
};

export const LargeItemGrid: Story = {
	name: '📊 Large Item Grid',
	args: {
		kind: 'customization-category',
		title: 'Large Theme Collection',
		items: [
			...mockThemeItems,
			...Array.from({ length: 20 }, (_, i) => ({
				id: `theme-${i + 4}`,
				name: `Theme ${i + 4}`,
				equipped: false,
				primaryColor: `hsl(${(i * 30) % 360}, 70%, 50%)`,
				accentColor: `hsl(${((i + 1) * 30) % 360}, 70%, 60%)`,
			})),
		],
	},
};

// Configuration Override Examples
export const CustomConfiguration: Story = {
	name: '⚙️ Custom Configuration',
	render: (args) => (
		<SettingsFactory
			kind='customization-category'
			title='Custom Grid Layout'
			items={mockThemeItems}
			configuration={{
				gridLayout: true,
				columns: 2,
				showPrices: true,
				enableSearch: true,
			}}
			{...args}
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates custom configuration overrides for specialized layouts.',
			},
		},
	},
};

// ===== DETAILED CUSTOMIZATION CATEGORY STORIES =====

export const CustomizationCategoryThemes: Story = {
	name: '🌈 Customization - Themes',
	args: {
		kind: 'customization-category',
		title: 'Themes',
		items: mockThemeItems,
		ariaLabelPrefix: 'theme',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Customization category specifically for theme selection and management.',
			},
		},
	},
};

export const CustomizationCategoryEmotes: Story = {
	name: '😊 Customization - Emotes',
	args: {
		kind: 'customization-category',
		title: 'Emotes',
		items: mockEmoteItems,
		ariaLabelPrefix: 'emote',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Customization category for emote selection with shop integration.',
			},
		},
	},
};

export const CustomizationCategoryFonts: Story = {
	name: '🔤 Customization - Fonts',
	args: {
		kind: 'customization-category',
		title: 'Fonts',
		items: mockFontItems,
		ariaLabelPrefix: 'font',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Font customization category with premium options.',
			},
		},
	},
};

export const CustomizationInteractiveThemes: Story = {
	name: '🎮 Interactive Theme Customization',
	args: {
		kind: 'customization-category',
		title: 'Interactive Theme Selection',
		items: mockThemeItems,
		ariaLabelPrefix: 'theme',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Fully interactive theme customization with equip/unequip functionality.',
			},
		},
	},
};

export const CustomizationWithLockedItems: Story = {
	name: '🔒 Customization - With Locked Items',
	args: {
		kind: 'customization-category',
		title: 'Mixed Availability',
		items: [
			...mockThemeItems,
			{
				id: 'premium',
				name: 'Premium Theme',
				equipped: false,
				primaryColor: '#8b5cf6',
				accentColor: '#a78bfa',
				price: 1000,
				currency: 'gems',
				unlocked: false,
			},
		],
		lockedIndices: [3],
		ariaLabelPrefix: 'theme',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Customization category with locked premium items.',
			},
		},
	},
};

export const CustomizationShopIntegration: Story = {
	name: '🛒 Customization - Shop Integration',
	args: {
		kind: 'customization-category',
		title: 'Shop Items',
		items: [
			{
				id: 'free-theme',
				name: 'Free Theme',
				equipped: true,
				primaryColor: '#10b981',
				unlocked: true,
			},
			{
				id: 'coin-theme',
				name: 'Coin Theme',
				equipped: false,
				primaryColor: '#f59e0b',
				price: 200,
				currency: 'coins',
				unlocked: false,
				shop: true,
			},
			{
				id: 'gem-theme',
				name: 'Gem Theme',
				equipped: false,
				primaryColor: '#8b5cf6',
				price: 50,
				currency: 'gems',
				unlocked: false,
				shop: true,
			},
		],
		ariaLabelPrefix: 'theme',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Customization category with integrated shop functionality.',
			},
		},
	},
};

export const CustomizationLargeGrid: Story = {
	name: '📊 Customization - Large Grid',
	args: {
		kind: 'customization-category',
		title: 'Large Theme Collection',
		items: [
			...mockThemeItems,
			...Array.from({ length: 15 }, (_, i) => ({
				id: `theme-${i + 4}`,
				name: `Theme ${i + 4}`,
				equipped: false,
				primaryColor: `hsl(${(i * 30) % 360}, 70%, 50%)`,
				accentColor: `hsl(${((i + 1) * 30) % 360}, 70%, 60%)`,
				unlocked: true,
			})),
		],
		ariaLabelPrefix: 'theme',
	},
	parameters: {
		docs: {
			description: {
				story: 'Large grid customization with many items.',
			},
		},
	},
};

export const CustomizationEmptyCategory: Story = {
	name: '📭 Customization - Empty Category',
	args: {
		kind: 'customization-category',
		title: 'Empty Category',
		items: [],
		ariaLabelPrefix: 'item',
	},
	parameters: {
		docs: {
			description: {
				story: 'Empty customization category handling.',
			},
		},
	},
};

export const CustomizationSingleItem: Story = {
	name: '📄 Customization - Single Item',
	args: {
		kind: 'customization-category',
		title: 'Single Theme',
		items: [mockThemeItems[0]],
		ariaLabelPrefix: 'theme',
	},
	parameters: {
		docs: {
			description: {
				story: 'Customization category with only one item.',
			},
		},
	},
};

export const CustomizationCustomGridLayout: Story = {
	name: '⚙️ Customization - Custom Grid Layout',
	render: (args) => (
		<SettingsFactory
			kind='customization-category'
			title='Custom Layout'
			items={mockThemeItems}
			configuration={{
				gridLayout: true,
				columns: 2,
				showPrices: true,
				enableSearch: true,
			}}
			{...args}
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Customization with custom configuration overrides for specialized grid layouts.',
			},
		},
	},
};

// =============================================================================
// THEME SELECTOR STORIES (Merged from ThemeSelector.stories.tsx)
// =============================================================================

export const ThemeSwatchesSelector: Story = {
	name: '🎨 Theme Swatches Selector',
	args: {
		kind: 'theme-settings',
		configuration: {
			kind: 'theme-settings',
			display: 'swatches',
			layout: 'horizontal',
			size: 'medium',
			showLabels: true,
			animated: true,
			themes: defaultThemes,
		},
		items: createThemeItems('dark'),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Theme selector using color swatches in horizontal layout.',
			},
		},
	},
};

export const ThemeDropdownSelector: Story = {
	name: '📋 Theme Dropdown Selector',
	args: {
		kind: 'theme-settings',
		configuration: {
			kind: 'theme-settings',
			display: 'dropdown',
			layout: 'compact',
			size: 'small',
			showLabels: true,
			themes: defaultThemes,
		},
		items: createThemeItems('oceanic'),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Compact dropdown theme selector for limited space.',
			},
		},
	},
};

export const ThemeCardsSelector: Story = {
	name: '🃏 Theme Cards Selector',
	args: {
		kind: 'customization-category',
		configuration: {
			kind: 'customization-category',
			title: 'Choose Your Theme',
			description: 'Select from available theme cards',
			customizationType: 'themes',
			gridLayout: true,
			columns: 3,
			showHeader: true,
			themeSettings: {
				display: 'cards',
				layout: 'grid',
				showLabels: true,
				showPreview: true,
				size: 'large',
				themes: defaultThemes,
			},
		},
		items: createThemeItems('sunset'),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Theme selector using card-based interface with previews.',
			},
		},
	},
};

export const MobileOptimizedThemeSelector: Story = {
	name: '📱 Mobile Theme Selector',
	args: {
		kind: 'theme-settings',
		configuration: {
			kind: 'theme-settings',
			display: 'list',
			layout: 'vertical',
			size: 'large',
			showLabels: true,
			mobileOptimized: true,
			touchFriendly: true,
			themes: defaultThemes,
		},
		items: createThemeItems('forest'),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Mobile-optimized theme selector with touch-friendly interface.',
			},
		},
		viewport: {
			defaultViewport: 'mobile1',
		},
	},
};

export const DesktopThemeSelector: Story = {
	name: '🖥️ Desktop Theme Selector',
	args: {
		kind: 'customization-category',
		configuration: {
			kind: 'customization-category',
			title: 'Desktop Themes',
			description: 'Advanced theme selection for desktop',
			customizationType: 'themes',
			gridLayout: true,
			columns: 4,
			showHeader: true,
			showFooter: true,
			themeSettings: {
				display: 'cards',
				layout: 'grid',
				showLabels: true,
				showPreview: true,
				animated: true,
				size: 'medium',
				themes: defaultThemes,
				showAdvancedOptions: true,
				allowCustomization: true,
			},
		},
		items: createThemeItems('purple'),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Desktop-optimized theme selector with advanced features.',
			},
		},
	},
};

export const ModalThemeSelector: Story = {
	name: '🗂️ Modal Theme Selector',
	args: {
		kind: 'theme-settings',
		configuration: {
			kind: 'theme-settings',
			display: 'grid',
			layout: 'compact',
			size: 'small',
			showLabels: false,
			modalMode: true,
			themes: defaultThemes.slice(0, 6), // Limit for modal
		},
		items: createThemeItems('cherry').slice(0, 6),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Compact theme selector designed for modal dialogs.',
			},
		},
	},
};

// =============================================================================
// ADVANCED THEME CUSTOMIZATION STORIES (Merged from ThemeCustomization.stories.tsx)
// =============================================================================

export const BasicThemeCustomization: Story = {
	name: '🎨 Basic Theme Customization',
	args: {
		kind: 'theme-customization',
		configuration: {
			kind: 'theme-customization',
			title: 'Customize Theme',
			description: 'Adjust theme colors and appearance',
			customizationType: 'themes',
			allowCustomization: true,
			themeSettings: {
				showColorPickers: true,
				showPresets: true,
				allowSave: true,
			},
		},
		items: createThemeItems('light'),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Basic theme customization with color pickers and presets.',
			},
		},
	},
};

export const AdvancedThemeBuilder: Story = {
	name: '🔧 Advanced Theme Builder',
	args: {
		kind: 'theme-builder',
		configuration: {
			kind: 'theme-builder',
			title: 'Theme Builder Studio',
			description: 'Create and customize advanced themes',
			customizationType: 'themes',
			allowCustomization: true,
			showAdvancedOptions: true,
			themeSettings: {
				showColorPickers: true,
				showGradients: true,
				showAnimations: true,
				showPresets: true,
				allowSave: true,
				allowExport: true,
				allowImport: true,
			},
		},
		items: createThemeItems('dark'),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Advanced theme builder with full customization capabilities.',
			},
		},
	},
};

export const ThemeCustomizationPanel: Story = {
	name: '⚙️ Theme Customization Panel',
	args: {
		kind: 'customization-category',
		configuration: {
			kind: 'customization-category',
			title: 'Theme Customization',
			description: 'Create and customize your own themes',
			customizationType: 'themes',
			gridLayout: true,
			columns: 3,
			showHeader: true,
			showFooter: true,
			themeSettings: {
				display: 'cards',
				showPreview: true,
				allowCustomization: true,
				showAdvancedOptions: true,
			},
		},
		items: createThemeItems('oceanic'),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Full theme customization panel with grid layout.',
			},
		},
	},
};

// =============================================================================
// THEME APPEARANCE STORIES (Merged from ThemeAppearance.stories.tsx)
// =============================================================================

export const ThemeSettingsAdvanced: Story = {
	name: '⚙️ Theme Settings Advanced',
	args: {
		kind: 'theme-settings',
		configuration: {
			kind: 'theme-settings',
			title: 'Theme Settings',
			description:
				'Configure theme appearance and behavior',
			themeSettings: {
				display: 'list',
				layout: 'vertical',
				showLabels: true,
				showPreview: true,
				allowToggle: true,
				themes: defaultThemes,
			},
		},
		items: createThemeItems('dark'),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Advanced theme settings with appearance configuration.',
			},
		},
	},
};

export const ThemeAppearanceSelector: Story = {
	name: '🎭 Theme Appearance Selector',
	args: {
		kind: 'theme-selector',
		configuration: {
			kind: 'theme-selector',
			title: 'Theme Appearance',
			description: 'Select your preferred theme appearance',
			themeSettings: {
				display: 'swatches',
				layout: 'horizontal',
				showLabels: true,
				animated: true,
				themes: defaultThemes,
			},
		},
		items: createThemeItems('sunset'),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Theme appearance selector with visual swatches.',
			},
		},
	},
};

export const ThemeBuilderInterface: Story = {
	name: '🏗️ Theme Builder Interface',
	args: {
		kind: 'theme-builder',
		configuration: {
			kind: 'theme-builder',
			title: 'Theme Builder',
			description: 'Build custom themes from scratch',
			showAdvancedOptions: true,
			themeSettings: {
				showColorPickers: true,
				showGradients: true,
				showPresets: true,
				allowSave: true,
				allowExport: true,
			},
		},
		items: createThemeItems('forest'),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Theme builder interface for creating custom themes.',
			},
		},
	},
};

// =============================================================================
// CUSTOMIZATION CATEGORY STORIES (Merged from CustomizationCategory.stories.tsx)
// =============================================================================

const customizationThemeItems = [
	{
		id: 'classic',
		name: 'Classic',
		equipped: true,
		primaryColor: '#2563eb',
		accentColor: '#38bdf8',
		type: 'theme' as const,
		unlocked: true,
		icon: '🌟',
		preview: 'linear-gradient(135deg, #2563eb, #38bdf8)',
		description: 'The classic blue theme',
	},
	{
		id: 'sunset',
		name: 'Sunset',
		equipped: false,
		primaryColor: '#ea580c',
		accentColor: '#fb923c',
		type: 'theme' as const,
		unlocked: true,
		icon: '🌅',
		preview: 'linear-gradient(135deg, #ea580c, #fb923c)',
		description: 'Warm sunset colors',
	},
	{
		id: 'forest',
		name: 'Forest',
		equipped: false,
		primaryColor: '#16a34a',
		accentColor: '#4ade80',
		type: 'theme' as const,
		unlocked: true,
		icon: '🌲',
		preview: 'linear-gradient(135deg, #16a34a, #4ade80)',
		description: 'Natural forest green',
	},
	{
		id: 'ocean',
		name: 'Ocean',
		equipped: false,
		primaryColor: '#0891b2',
		accentColor: '#06b6d4',
		type: 'theme' as const,
		unlocked: false,
		icon: '🌊',
		preview: 'linear-gradient(135deg, #0891b2, #06b6d4)',
		description: 'Deep ocean blue',
		price: 500,
	},
	{
		id: 'royal',
		name: 'Royal',
		equipped: false,
		primaryColor: '#7c3aed',
		accentColor: '#a855f7',
		type: 'theme' as const,
		unlocked: false,
		icon: '👑',
		preview: 'linear-gradient(135deg, #7c3aed, #a855f7)',
		description: 'Royal purple theme',
		price: 750,
	},
	{
		id: 'cosmic',
		name: 'Cosmic',
		equipped: false,
		primaryColor: '#1e1b4b',
		accentColor: '#6366f1',
		type: 'theme' as const,
		unlocked: false,
		icon: '🌌',
		preview: 'linear-gradient(135deg, #1e1b4b, #6366f1)',
		description: 'Cosmic space theme',
		price: 1000,
	},
];

export const BasicCustomizationCategory: Story = {
	name: '📦 Basic Customization Category',
	args: {
		kind: 'customization-category',
		title: 'Themes',
		items: customizationThemeItems,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Basic customization category showing theme items in a grid.',
			},
		},
	},
};

export const ThemeCustomizationCategory: Story = {
	name: '🎨 Theme Customization Category',
	args: {
		kind: 'customization-category',
		title: 'Theme Collection',
		items: customizationThemeItems,
		ariaLabelPrefix: 'theme',
		lockedIndices: [3, 4, 5],
	},
	parameters: {
		docs: {
			description: {
				story:
					'Theme customization with locked premium items.',
			},
		},
	},
};

export const EmoteCustomizationCategory: Story = {
	name: '😀 Emote Customization Category',
	args: {
		kind: 'customization-category',
		title: 'Emotes',
		items: [
			{
				id: 'wave',
				name: 'Wave',
				equipped: true,
				type: 'emote' as const,
				unlocked: true,
				icon: '👋',
				description: 'Friendly wave emote',
			},
			{
				id: 'heart',
				name: 'Heart',
				equipped: false,
				type: 'emote' as const,
				unlocked: true,
				icon: '❤️',
				description: 'Love heart emote',
			},
			{
				id: 'star',
				name: 'Star',
				equipped: false,
				type: 'emote' as const,
				unlocked: false,
				icon: '⭐',
				description: 'Shining star emote',
				price: 100,
			},
		],
		ariaLabelPrefix: 'emote',
		lockedIndices: [2],
	},
	parameters: {
		docs: {
			description: {
				story:
					'Emote customization category with different item types.',
			},
		},
	},
};

export const FontCustomizationCategory: Story = {
	name: '🔤 Font Customization Category',
	args: {
		kind: 'customization-category',
		title: 'Fonts',
		items: [
			{
				id: 'roboto',
				name: 'Roboto',
				equipped: true,
				type: 'font' as const,
				unlocked: true,
				icon: 'Aa',
				description: 'Modern sans-serif font',
				fontFamily: 'Roboto, sans-serif',
			},
			{
				id: 'inter',
				name: 'Inter',
				equipped: false,
				type: 'font' as const,
				unlocked: true,
				icon: 'Aa',
				description: 'Clean interface font',
				fontFamily: 'Inter, sans-serif',
			},
			{
				id: 'playfair',
				name: 'Playfair',
				equipped: false,
				type: 'font' as const,
				unlocked: false,
				icon: 'Aa',
				description: 'Elegant serif font',
				fontFamily: 'Playfair Display, serif',
				price: 200,
			},
		],
		ariaLabelPrefix: 'font',
		lockedIndices: [2],
	},
	parameters: {
		docs: {
			description: {
				story:
					'Font customization category with typography options.',
			},
		},
	},
};

export const LargeCustomizationCategory: Story = {
	name: '📚 Large Customization Category',
	args: {
		kind: 'customization-category',
		title: 'All Customizations',
		items: [
			...customizationThemeItems,
			{
				id: 'premium-theme-1',
				name: 'Aurora',
				equipped: false,
				primaryColor: '#ec4899',
				accentColor: '#f472b6',
				type: 'theme' as const,
				unlocked: false,
				icon: '🌈',
				preview:
					'linear-gradient(135deg, #ec4899, #f472b6)',
				description: 'Aurora borealis theme',
				price: 1500,
			},
			{
				id: 'premium-theme-2',
				name: 'Midnight',
				equipped: false,
				primaryColor: '#1f2937',
				accentColor: '#374151',
				type: 'theme' as const,
				unlocked: false,
				icon: '🌙',
				preview:
					'linear-gradient(135deg, #1f2937, #374151)',
				description: 'Dark midnight theme',
				price: 1200,
			},
		],
		ariaLabelPrefix: 'customization',
		lockedIndices: [3, 4, 5, 6, 7],
	},
	parameters: {
		docs: {
			description: {
				story:
					'Large customization category with many items and locked content.',
			},
		},
	},
};

// =============================================================================
// COMPREHENSIVE DEMO STORIES
// =============================================================================

export const AllSettingsShowcase: Story = {
	name: '🌟 All Settings Showcase',
	render: (args) => {
		const [currentSettings, setCurrentSettings] =
			React.useState({
				theme: 'light',
				language: 'en',
				notifications: true,
				privacy: 'friends',
			});

		const handleSettingChange = (
			key: string,
			value: any
		) => {
			setCurrentSettings((prev) => ({
				...prev,
				[key]: value,
			}));
		};

		return (
			<div className='space-y-8 p-6'>
				<div className='text-center'>
					<h2 className='text-2xl font-bold mb-2'>
						Settings DRY System Showcase
					</h2>
					<p className='text-gray-600 mb-4'>
						Comprehensive demonstration of all settings
						types and configurations
					</p>
					<div className='bg-blue-50 p-4 rounded-lg'>
						<h3 className='font-semibold mb-2'>
							Current Settings:
						</h3>
						<pre className='text-sm text-left'>
							{JSON.stringify(currentSettings, null, 2)}
						</pre>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div>
						<h3 className='text-lg font-semibold mb-4'>
							Theme Settings
						</h3>
						<SettingsFactory
							kind='theme-settings'
							items={createThemeItems(
								currentSettings.theme
							)}
							onEquip={(themeId: string) =>
								handleSettingChange('theme', themeId)
							}
						/>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-4'>
							User Preferences
						</h3>
						<SettingsFactory
							kind='user-settings'
							configuration={{
								title: 'User Preferences',
								sections: [
									{
										title: 'Language',
										fields: [
											{
												type: 'select',
												name: 'language',
												label: 'Interface Language',
												value: currentSettings.language,
												options: [
													{ value: 'en', label: 'English' },
													{ value: 'es', label: 'Spanish' },
													{ value: 'fr', label: 'French' },
												],
											},
										],
									},
									{
										title: 'Notifications',
										fields: [
											{
												type: 'toggle',
												name: 'notifications',
												label: 'Enable Notifications',
												value:
													currentSettings.notifications,
											},
										],
									},
								],
							}}
							onSettingChange={handleSettingChange}
						/>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-4'>
							Theme Customization
						</h3>
						<SettingsFactory
							kind='customization-category'
							title='Themes'
							items={customizationThemeItems.slice(0, 4)}
							onEquip={(themeId: string) =>
								handleSettingChange('theme', themeId)
							}
						/>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-4'>
							Privacy Settings
						</h3>
						<SettingsFactory
							kind='privacy-settings'
							configuration={{
								title: 'Privacy & Security',
								sections: [
									{
										title: 'Visibility',
										fields: [
											{
												type: 'select',
												name: 'privacy',
												label: 'Profile Visibility',
												value: currentSettings.privacy,
												options: [
													{
														value: 'public',
														label: 'Public',
													},
													{
														value: 'friends',
														label: 'Friends Only',
													},
													{
														value: 'private',
														label: 'Private',
													},
												],
											},
										],
									},
								],
							}}
							onSettingChange={handleSettingChange}
						/>
					</div>
				</div>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Comprehensive showcase of all settings types working together.',
			},
		},
	},
};
