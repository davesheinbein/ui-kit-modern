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
	title: 'Settings/CustomizationCategory (DRY System)',
	component: UnifiedSettings,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# CustomizationCategory DRY System

A specialized settings component for displaying customizable items like themes, emotes, fonts, and other visual elements in a grid layout.

## Features:
- Grid-based item display
- Equipment/selection state management
- Locked item handling
- Shop integration with pricing
- Accessibility support

## DRY Usage Patterns:
\`\`\`tsx
// Direct usage
<UnifiedSettings kind="customization-category" title="Themes" items={themes} />

// Factory pattern
<SettingsFactory kind="customization-category" items={emotes} />

// Presets
{SettingsPresets.THEME_CUSTOMIZATION(themes)}
{SettingsPresets.CUSTOMIZATION(items)}

// Quick patterns
{QuickSettings.themes(themeItems)}
{QuickSettings.customization(customItems)}
\`\`\`
				`,
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: ['customization-category', 'theme-settings'],
			description: 'Type of customization interface',
		},
		title: {
			control: 'text',
			description:
				'Category title (themes, emotes, fonts, etc.)',
		},
		items: {
			control: 'object',
			description: 'Array of customization items',
		},
		onEquip: {
			action: 'equipped',
			description:
				'Function called when an item is equipped',
		},
		ariaLabelPrefix: {
			control: 'text',
			description: 'Prefix for accessibility labels',
		},
		lockedIndices: {
			control: 'object',
			description: 'Indices of locked items',
		},
		onLockedClick: {
			action: 'lockedClicked',
			description:
				'Function called when a locked item is clicked',
		},
		onShopItemClick: {
			action: 'shopItemClicked',
			description:
				'Function called when a shop item is clicked',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedSettings>;

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
		equipped: true,
		imageUrl: '😊',
		unlocked: true,
	},
	{
		id: 'wink',
		name: 'Wink',
		equipped: false,
		imageUrl: '😉',
		unlocked: true,
	},
	{
		id: 'heart',
		name: 'Heart',
		equipped: false,
		imageUrl: '❤️',
		shop: true,
		unlocked: false,
		price: 100,
		currency: 'coins',
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

// Core DRY Stories
export const UnifiedCustomizationShowcase: Story = {
	name: '🎯 UnifiedSettings - Customization',
	args: {
		kind: 'customization-category',
		title: 'Theme Selection',
		items: mockThemeItems,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates UnifiedSettings component for customization categories.',
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
					kind='customization-category'
					title='Themes'
					items={mockThemeItems}
					{...args}
				/>
				<SettingsFactory
					kind='customization-category'
					title='Emotes'
					items={mockEmoteItems}
					{...args}
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Shows SettingsFactory creating different customization interfaces.',
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
					kind='customization-category'
					title='Fonts'
					items={mockFontItems}
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
			<h3>Customization Presets Examples</h3>
			<div className='grid gap-4'>
				{SettingsPresets.THEME_CUSTOMIZATION(
					mockThemeItems
				)}
				{SettingsPresets.CUSTOMIZATION(mockEmoteItems)}
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Shows pre-configured SettingsPresets for customization scenarios.',
			},
		},
	},
};

export const QuickSettingsPatterns: Story = {
	name: '🚀 QuickSettings',
	render: (args) => (
		<div className='space-y-4'>
			<h3>Quick Customization Patterns</h3>
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
					'Demonstrates QuickSettings for rapid creation of customization patterns.',
			},
		},
	},
};

// Category Type Stories
export const Themes: Story = {
	name: '🌈 Themes',
	args: {
		kind: 'customization-category',
		title: 'Themes',
		items: mockThemeItems,
		ariaLabelPrefix: 'theme',
	},
};

export const Emotes: Story = {
	name: '😊 Emotes',
	args: {
		kind: 'customization-category',
		title: 'Emotes',
		items: mockEmoteItems,
		ariaLabelPrefix: 'emote',
	},
};

export const Fonts: Story = {
	name: '🔤 Fonts',
	args: {
		kind: 'customization-category',
		title: 'Fonts',
		items: mockFontItems,
		ariaLabelPrefix: 'font',
	},
};

// Interactive Examples
export const InteractiveThemes: Story = {
	name: '🎮 Interactive Themes',
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

export const InteractiveEmotes: Story = {
	name: '🎮 Interactive Emotes',
	args: {
		kind: 'customization-category',
		title: 'Interactive Emote Collection',
		items: mockEmoteItems,
		ariaLabelPrefix: 'emote',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Interactive emote selection with shop and locked item handling.',
			},
		},
	},
};

// Edge Cases
export const EmptyCategory: Story = {
	name: '📭 Empty Category',
	args: {
		kind: 'customization-category',
		title: 'Empty Category',
		items: [],
		ariaLabelPrefix: 'item',
	},
};

export const SingleItem: Story = {
	name: '📄 Single Item',
	args: {
		kind: 'customization-category',
		title: 'Single Theme',
		items: [mockThemeItems[0]],
		ariaLabelPrefix: 'theme',
	},
};

export const WithLockedItems: Story = {
	name: '🔒 With Locked Items',
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
};

export const LargeGrid: Story = {
	name: '📊 Large Grid',
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
};

// Shop Integration Examples
export const ShopIntegration: Story = {
	name: '🛒 Shop Integration',
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
};

// Configuration Override Examples
export const CustomGridLayout: Story = {
	name: '⚙️ Custom Grid Layout',
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
					'Demonstrates custom configuration overrides for specialized grid layouts.',
			},
		},
	},
};
