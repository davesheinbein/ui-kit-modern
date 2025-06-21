import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from '../../components/EmptyState';
import { EmptyStateKind } from '../../components/EmptyState/configurations';

const meta: Meta<typeof EmptyState> = {
	title: 'EmptyState/EmptyState',
	component: EmptyState,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A comprehensive empty state component system for handling various no-data scenarios with clear messaging and actionable guidance.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'no-data',
				'no-results',
				'no-search-results',
				'empty-table',
				'empty-list',
				'no-friends',
				'no-messages',
				'no-notifications',
				'no-activity',
				'empty-profile',
				'no-games',
				'no-matches',
				'no-achievements',
				'empty-leaderboard',
				'no-stats',
				'no-content',
				'empty-folder',
				'no-files',
				'empty-cart',
				'connection-error',
				'loading-error',
				'permission-denied',
				'not-found',
			] as EmptyStateKind[],
			description: 'Empty state kind/type',
		},
		variant: {
			control: 'select',
			options: [
				'default',
				'minimal',
				'illustrated',
				'card',
				'centered',
				'inline',
				'game-style',
			],
			description: 'Empty state variant/style',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Empty state size',
		},
		title: {
			control: 'text',
			description: 'Main title text',
		},
		description: {
			control: 'text',
			description: 'Description text',
		},
		icon: {
			control: 'text',
			description: 'Custom icon (emoji or text)',
		},
		illustration: {
			control: 'text',
			description: 'Custom illustration URL',
		},
		showIcon: {
			control: 'boolean',
			description: 'Show icon',
		},
		showIllustration: {
			control: 'boolean',
			description: 'Show illustration',
		},
		centered: {
			control: 'boolean',
			description: 'Center align content',
		},
		fullHeight: {
			control: 'boolean',
			description: 'Take full container height',
		},
		allowCustomContent: {
			control: 'boolean',
			description: 'Allow custom content in children',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// Data empty states
export const NoData: Story = {
	args: {
		kind: 'no-data',
		size: 'medium',
		title: 'No data available',
		description:
			'There is no data to display at the moment.',
		showIcon: true,
	},
};

export const NoResults: Story = {
	args: {
		kind: 'no-results',
		size: 'medium',
		title: 'No results found',
		description:
			"Try adjusting your search criteria to find what you're looking for.",
		showIcon: true,
	},
};

export const NoSearchResults: Story = {
	args: {
		kind: 'no-search-results',
		size: 'medium',
		title: 'No search results',
		description:
			"We couldn't find anything matching your search.",
		showIcon: true,
	},
};

export const EmptyTable: Story = {
	args: {
		kind: 'empty-table',
		size: 'large',
		title: 'No data in table',
		description:
			'This table will populate when data is available.',
		showIcon: true,
	},
};

export const EmptyList: Story = {
	args: {
		kind: 'empty-list',
		size: 'medium',
		title: 'Your list is empty',
		description: 'Add items to see them appear here.',
		showIcon: true,
	},
};

// User/Social empty states
export const NoFriends: Story = {
	args: {
		kind: 'no-friends',
		size: 'medium',
		title: 'No friends yet',
		description:
			'Connect with other players to see them here.',
		showIcon: true,
	},
};

export const NoMessages: Story = {
	args: {
		kind: 'no-messages',
		size: 'medium',
		title: 'No messages',
		description:
			'Start a conversation to see messages here.',
		showIcon: true,
	},
};

export const NoNotifications: Story = {
	args: {
		kind: 'no-notifications',
		size: 'medium',
		title: 'No notifications',
		description:
			"You're all caught up! No new notifications.",
		showIcon: true,
	},
};

export const NoActivity: Story = {
	args: {
		kind: 'no-activity',
		size: 'medium',
		title: 'No recent activity',
		description: 'Activity will appear here as it happens.',
		showIcon: true,
	},
};

export const EmptyProfile: Story = {
	args: {
		kind: 'empty-profile',
		size: 'large',
		title: 'Complete your profile',
		description:
			'Add information to your profile to get started.',
		showIcon: true,
	},
};

// Game-specific empty states
export const NoGames: Story = {
	args: {
		kind: 'no-games',
		size: 'medium',
		title: 'No games yet',
		description:
			'Start a new game to see your history here.',
		showIcon: true,
	},
};

export const NoMatches: Story = {
	args: {
		kind: 'no-matches',
		variant: 'game-style',
		size: 'medium',
		title: 'No matches found',
		description:
			'Try adjusting your search criteria or start a new game.',
		showIcon: true,
	},
};

export const NoAchievements: Story = {
	args: {
		kind: 'no-achievements',
		variant: 'game-style',
		size: 'medium',
		title: 'No achievements yet',
		description:
			'Keep playing to unlock your first achievement.',
		showIcon: true,
	},
};

export const EmptyLeaderboard: Story = {
	args: {
		kind: 'empty-leaderboard',
		variant: 'game-style',
		size: 'large',
		title: 'Leaderboard is empty',
		description:
			'Be the first to appear on the leaderboard!',
		showIcon: true,
	},
};

export const NoStats: Story = {
	args: {
		kind: 'no-stats',
		variant: 'game-style',
		size: 'medium',
		title: 'No statistics yet',
		description: 'Play a few games to see your stats here.',
		showIcon: true,
	},
};

// Content empty states
export const NoContent: Story = {
	args: {
		kind: 'no-content',
		size: 'medium',
		title: 'No content available',
		description:
			"Content will appear here when it's added.",
		showIcon: true,
	},
};

export const EmptyFolder: Story = {
	args: {
		kind: 'empty-folder',
		size: 'medium',
		title: 'Folder is empty',
		description:
			'Add files to this folder to see them here.',
		showIcon: true,
	},
};

export const NoFiles: Story = {
	args: {
		kind: 'no-files',
		size: 'medium',
		title: 'No files uploaded',
		description:
			'Drag and drop files here or click to upload.',
		showIcon: true,
	},
};

export const EmptyCart: Story = {
	args: {
		kind: 'empty-cart',
		size: 'medium',
		title: 'Your cart is empty',
		description: 'Add items to your cart to see them here.',
		showIcon: true,
	},
};

// Error empty states
export const ConnectionError: Story = {
	args: {
		kind: 'connection-error',
		variant: 'default',
		size: 'medium',
		title: 'Connection problem',
		description:
			'Please check your internet connection and try again.',
		showIcon: true,
	},
};

export const LoadingError: Story = {
	args: {
		kind: 'loading-error',
		variant: 'default',
		size: 'medium',
		title: 'Loading failed',
		description:
			'We encountered an error while loading your data.',
		showIcon: true,
	},
};

export const PermissionDenied: Story = {
	args: {
		kind: 'permission-denied',
		variant: 'default',
		size: 'medium',
		title: 'Access denied',
		description:
			"You don't have permission to view this content.",
		showIcon: true,
	},
};

export const NotFound: Story = {
	args: {
		kind: 'not-found',
		variant: 'default',
		size: 'large',
		title: 'Page not found',
		description:
			"The page you're looking for doesn't exist.",
		showIcon: true,
	},
};

// Size variants
export const SmallEmptyState: Story = {
	args: {
		kind: 'no-data',
		size: 'small',
		title: 'No data',
		description: 'Small empty state',
		showIcon: true,
	},
};

export const MediumEmptyState: Story = {
	args: {
		kind: 'no-data',
		size: 'medium',
		title: 'No data available',
		description:
			'Medium empty state with more description text',
		showIcon: true,
	},
};

export const LargeEmptyState: Story = {
	args: {
		kind: 'no-data',
		size: 'large',
		title: 'No data available',
		description:
			'Large empty state with detailed description and prominent display',
		showIcon: true,
	},
};

// Variant styles
export const DefaultVariant: Story = {
	args: {
		kind: 'no-data',
		variant: 'default',
		size: 'medium',
		title: 'Default variant',
		description: 'Standard appearance for most use cases',
		showIcon: true,
	},
};

export const MinimalVariant: Story = {
	args: {
		kind: 'no-data',
		variant: 'minimal',
		size: 'medium',
		title: 'Minimal variant',
		description: 'Clean, understated appearance',
		showIcon: true,
	},
};

export const IllustratedVariant: Story = {
	args: {
		kind: 'no-data',
		variant: 'illustrated',
		size: 'large',
		title: 'Illustrated variant',
		description:
			'Rich visual presentation with illustrations',
		showIcon: true,
	},
};

export const CardVariant: Story = {
	args: {
		kind: 'no-data',
		variant: 'card',
		size: 'medium',
		title: 'Card variant',
		description: 'Contained within a card layout',
		showIcon: true,
	},
};

export const CenteredVariant: Story = {
	args: {
		kind: 'no-data',
		variant: 'centered',
		size: 'large',
		title: 'Centered variant',
		description: 'Perfectly centered layout',
		showIcon: true,
	},
};

export const InlineVariant: Story = {
	args: {
		kind: 'no-data',
		variant: 'inline',
		size: 'small',
		title: 'Inline variant',
		description: 'Compact inline presentation',
		showIcon: true,
	},
};

export const GameStyleVariant: Story = {
	args: {
		kind: 'no-achievements',
		variant: 'game-style',
		size: 'medium',
		title: 'Game style variant',
		description: 'Gaming-themed presentation',
		showIcon: true,
	},
};

// State variations
export const WithoutIcon: Story = {
	args: {
		kind: 'no-data',
		size: 'medium',
		title: 'No icon version',
		description:
			'Empty state without icon for minimal design',
		showIcon: false,
	},
};

export const WithIcon: Story = {
	args: {
		kind: 'no-notifications',
		size: 'medium',
		title: 'With icon',
		description:
			'Empty state with icon for better visual hierarchy',
		showIcon: true,
	},
};
