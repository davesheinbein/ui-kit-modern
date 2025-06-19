import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedSettings,
	SettingsFactory,
	SettingsPresets,
	QuickSettings,
} from '../../components/Settings';
import type { UnifiedSettingsProps } from '../../components/Settings/UnifiedSettings';

const meta: Meta<typeof UnifiedSettings> = {
	title: 'Settings/Settings (DRY System)',
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
	},
	{
		id: 'dark',
		name: 'Dark Mode',
		equipped: false,
		primaryColor: '#1f2937',
		accentColor: '#6b7280',
	},
	{
		id: 'sunset',
		name: 'Sunset',
		equipped: false,
		primaryColor: '#f97316',
		accentColor: '#fbbf24',
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
	},
	{
		id: 'wink',
		name: 'Wink',
		equipped: true,
		unlocked: true,
	},
	{
		id: 'locked-emote',
		name: 'Premium Emote',
		equipped: false,
		price: 500,
		currency: 'gems',
		unlocked: false,
	},
];

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
