import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedSettings,
	SettingsFactory,
	S,
	SettingsPresets,
} from '../../components/Settings';
import type { UnifiedSettingsProps } from '../../components/Settings/UnifiedSettings';

const meta: Meta<typeof UnifiedSettings> = {
	title: 'Settings/CustomizationCategory (DRY System)',
	component: UnifiedSettings,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A DRY customization category component that displays a grid of customizable items like themes, emotes, fonts, etc. Built using the unified Settings system.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: ['customization-category', 'settings-panel'],
			description: 'Type of settings component to render',
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
	},
];

const mockEmoteItems = [
	{
		id: 'smile',
		name: 'Smile',
		equipped: true,
		imageUrl: '😊',
	},
	{
		id: 'wink',
		name: 'Wink',
		equipped: false,
		imageUrl: '😉',
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

export const Themes: Story = {
	args: {
		kind: 'customization-category',
		title: 'Themes',
		items: mockThemeItems,
		onEquip: () => {},
		ariaLabelPrefix: 'theme',
	},
};

export const Emotes: Story = {
	args: {
		kind: 'customization-category',
		title: 'Emotes',
		items: mockEmoteItems,
		onEquip: () => {},
		ariaLabelPrefix: 'emote',
	},
};

export const EmptyCategory: Story = {
	args: {
		kind: 'customization-category',
		title: 'Fonts',
		items: [],
		onEquip: () => {},
		ariaLabelPrefix: 'font',
	},
};

export const WithLockedItems: Story = {
	args: {
		kind: 'customization-category',
		title: 'Themes',
		items: mockThemeItems,
		onEquip: () => {},
		ariaLabelPrefix: 'theme',
		lockedIndices: [1, 2],
		onLockedClick: () => {},
	},
};

// DRY System Examples using factory patterns
export const ThemesUsingFactory: Story = {
	render: () => (
		<S
			kind='customization-category'
			title='Themes (Factory)'
			items={mockThemeItems}
			onEquip={() => {}}
			ariaLabelPrefix='theme'
		/>
	),
};

export const EmotesUsingPresets: Story = {
	render: () =>
		SettingsPresets.CUSTOMIZATION(mockEmoteItems, () => {}),
};
