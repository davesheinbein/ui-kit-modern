import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BrowseHeader from '../../components/BrowseHeader';
import type { BrowseHeaderProps } from '../../components/BrowseHeader/BrowseHeader';

const meta: Meta<typeof BrowseHeader> = {
	title: 'Headers/BrowseHeader',
	component: BrowseHeader,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A header component for browsing pages with title, tabs, and navigation.',
			},
		},
	},
	argTypes: {
		title: {
			control: 'text',
			description: 'Title to display in the header',
		},
		tabs: {
			control: false,
			description:
				'Array of tab objects with label and value',
		},
		currentTab: {
			control: 'text',
			description: 'Currently active tab value',
		},
		setTab: {
			action: 'tabChanged',
			description: 'Function called when tab is changed',
		},
		onBack: {
			action: 'backClicked',
			description:
				'Function called when back button is clicked',
		},
	},
};

export default meta;
type Story = StoryObj<typeof BrowseHeader>;

export const Default: Story = {
	args: {
		title: 'Browse Puzzles',
		tabs: [
			{ label: 'All', value: 'all' },
			{ label: 'Favorites', value: 'favorites' },
			{ label: 'Recent', value: 'recent' },
		],
		currentTab: 'all',
		setTab: () => {},
		onBack: () => {},
	},
};

export const WithFavoritesSelected: Story = {
	args: {
		title: 'Browse Puzzles',
		tabs: [
			{ label: 'All', value: 'all' },
			{ label: 'Favorites', value: 'favorites' },
			{ label: 'Recent', value: 'recent' },
		],
		currentTab: 'favorites',
		setTab: () => {},
		onBack: () => {},
	},
};
