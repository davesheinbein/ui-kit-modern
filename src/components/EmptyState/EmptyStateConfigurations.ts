/**
 * EmptyStateConfigurations.ts - DRY Empty State Configuration System
 */

import { ReactNode } from 'react';

export type EmptyStateKind =
	// Data Empty States
	| 'no-data'
	| 'no-results'
	| 'no-search-results'
	| 'empty-table'
	| 'empty-list'

	// User/Social Empty States
	| 'no-friends'
	| 'no-messages'
	| 'no-notifications'
	| 'no-activity'
	| 'empty-profile'

	// Game-specific Empty States
	| 'no-games'
	| 'no-matches'
	| 'no-achievements'
	| 'empty-leaderboard'
	| 'no-stats'

	// Content Empty States
	| 'no-content'
	| 'empty-folder'
	| 'no-files'
	| 'empty-cart'

	// Error Empty States
	| 'connection-error'
	| 'loading-error'
	| 'permission-denied'
	| 'not-found';

export type EmptyStateVariant =
	| 'default'
	| 'minimal'
	| 'illustrated'
	| 'card'
	| 'centered'
	| 'inline'
	| 'game-style';

export type EmptyStateAction = {
	label: string;
	onClick: () => void;
	variant?: 'primary' | 'secondary' | 'text';
	icon?: ReactNode;
};

export interface EmptyStateConfiguration {
	kind: EmptyStateKind;
	variant?: EmptyStateVariant;

	// Content
	title?: string;
	description?: string;
	icon?: ReactNode | string;
	illustration?: string;

	// Actions
	primaryAction?: EmptyStateAction;
	secondaryAction?: EmptyStateAction;
	actions?: EmptyStateAction[];

	// Styling
	size?: 'small' | 'medium' | 'large';
	centered?: boolean;
	fullHeight?: boolean;

	// Custom content
	showIcon?: boolean;
	showIllustration?: boolean;
	allowCustomContent?: boolean;
}

export const EMPTY_STATE_CONFIGURATIONS: Record<
	EmptyStateKind,
	EmptyStateConfiguration
> = {
	// Data Empty States
	'no-data': {
		kind: 'no-data',
		variant: 'default',
		title: 'No data available',
		description: 'There is currently no data to display.',
		icon: '📊',
		size: 'medium',
		centered: true,
		showIcon: true,
	},

	'no-results': {
		kind: 'no-results',
		variant: 'default',
		title: 'No results found',
		description:
			'Try adjusting your search or filter criteria.',
		icon: '🔍',
		size: 'medium',
		centered: true,
		showIcon: true,
	},

	'no-search-results': {
		kind: 'no-search-results',
		variant: 'minimal',
		title: 'No search results',
		description:
			"We couldn't find anything matching your search.",
		icon: '🔍',
		size: 'medium',
		centered: true,
		showIcon: true,
		primaryAction: {
			label: 'Clear search',
			onClick: () => {},
			variant: 'secondary',
		},
	},

	'empty-table': {
		kind: 'empty-table',
		variant: 'inline',
		title: 'No items',
		description: 'No items to display in this table.',
		icon: '📋',
		size: 'small',
		centered: true,
		showIcon: false,
	},

	'empty-list': {
		kind: 'empty-list',
		variant: 'minimal',
		title: 'Empty list',
		description: 'No items in this list yet.',
		icon: '📝',
		size: 'small',
		centered: true,
		showIcon: true,
	},

	// User/Social Empty States
	'no-friends': {
		kind: 'no-friends',
		variant: 'illustrated',
		title: 'No friends yet',
		description:
			'Start connecting with other players to build your network.',
		icon: '👥',
		size: 'large',
		centered: true,
		showIcon: true,
		primaryAction: {
			label: 'Find friends',
			onClick: () => {},
			variant: 'primary',
		},
	},

	'no-messages': {
		kind: 'no-messages',
		variant: 'centered',
		title: 'No messages',
		description:
			'Your inbox is empty. Start a conversation!',
		icon: '💬',
		size: 'medium',
		centered: true,
		showIcon: true,
		primaryAction: {
			label: 'Send message',
			onClick: () => {},
			variant: 'primary',
		},
	},

	'no-notifications': {
		kind: 'no-notifications',
		variant: 'minimal',
		title: 'No notifications',
		description: "You're all caught up!",
		icon: '🔔',
		size: 'medium',
		centered: true,
		showIcon: true,
	},

	'no-activity': {
		kind: 'no-activity',
		variant: 'default',
		title: 'No recent activity',
		description: "There hasn't been any activity recently.",
		icon: '📈',
		size: 'medium',
		centered: true,
		showIcon: true,
	},

	'empty-profile': {
		kind: 'empty-profile',
		variant: 'card',
		title: 'Complete your profile',
		description: 'Add some information to get started.',
		icon: '👤',
		size: 'large',
		centered: true,
		showIcon: true,
		primaryAction: {
			label: 'Edit profile',
			onClick: () => {},
			variant: 'primary',
		},
	},

	// Game-specific Empty States
	'no-games': {
		kind: 'no-games',
		variant: 'game-style',
		title: 'No games played',
		description:
			'Start your first game to see your stats here.',
		icon: '🎮',
		size: 'large',
		centered: true,
		showIcon: true,
		primaryAction: {
			label: 'Start playing',
			onClick: () => {},
			variant: 'primary',
		},
	},

	'no-matches': {
		kind: 'no-matches',
		variant: 'game-style',
		title: 'No matches found',
		description: 'No active matches at the moment.',
		icon: '⚔️',
		size: 'medium',
		centered: true,
		showIcon: true,
		primaryAction: {
			label: 'Create match',
			onClick: () => {},
			variant: 'primary',
		},
	},

	'no-achievements': {
		kind: 'no-achievements',
		variant: 'game-style',
		title: 'No achievements yet',
		description: 'Play more games to unlock achievements.',
		icon: '🏆',
		size: 'large',
		centered: true,
		showIcon: true,
	},

	'empty-leaderboard': {
		kind: 'empty-leaderboard',
		variant: 'game-style',
		title: 'Leaderboard empty',
		description:
			'Be the first to appear on the leaderboard!',
		icon: '👑',
		size: 'large',
		centered: true,
		showIcon: true,
		primaryAction: {
			label: 'Play now',
			onClick: () => {},
			variant: 'primary',
		},
	},

	'no-stats': {
		kind: 'no-stats',
		variant: 'game-style',
		title: 'No statistics',
		description: 'Play some games to see your statistics.',
		icon: '📊',
		size: 'medium',
		centered: true,
		showIcon: true,
	},

	// Content Empty States
	'no-content': {
		kind: 'no-content',
		variant: 'default',
		title: 'No content',
		description:
			'There is no content available at this time.',
		icon: '📄',
		size: 'medium',
		centered: true,
		showIcon: true,
	},

	'empty-folder': {
		kind: 'empty-folder',
		variant: 'minimal',
		title: 'Empty folder',
		description: 'This folder is empty.',
		icon: '📁',
		size: 'medium',
		centered: true,
		showIcon: true,
		primaryAction: {
			label: 'Add files',
			onClick: () => {},
			variant: 'primary',
		},
	},

	'no-files': {
		kind: 'no-files',
		variant: 'default',
		title: 'No files',
		description: 'No files have been uploaded yet.',
		icon: '📎',
		size: 'medium',
		centered: true,
		showIcon: true,
	},

	'empty-cart': {
		kind: 'empty-cart',
		variant: 'illustrated',
		title: 'Your cart is empty',
		description: 'Add some items to get started.',
		icon: '🛒',
		size: 'large',
		centered: true,
		showIcon: true,
		primaryAction: {
			label: 'Browse products',
			onClick: () => {},
			variant: 'primary',
		},
	},

	// Error Empty States
	'connection-error': {
		kind: 'connection-error',
		variant: 'card',
		title: 'Connection error',
		description:
			'Unable to connect to the server. Please try again.',
		icon: '🌐',
		size: 'medium',
		centered: true,
		showIcon: true,
		primaryAction: {
			label: 'Retry',
			onClick: () => {},
			variant: 'primary',
		},
	},

	'loading-error': {
		kind: 'loading-error',
		variant: 'card',
		title: 'Loading error',
		description:
			'Something went wrong while loading the data.',
		icon: '⚠️',
		size: 'medium',
		centered: true,
		showIcon: true,
		primaryAction: {
			label: 'Try again',
			onClick: () => {},
			variant: 'primary',
		},
	},

	'permission-denied': {
		kind: 'permission-denied',
		variant: 'card',
		title: 'Access denied',
		description:
			"You don't have permission to view this content.",
		icon: '🔒',
		size: 'medium',
		centered: true,
		showIcon: true,
	},

	'not-found': {
		kind: 'not-found',
		variant: 'illustrated',
		title: 'Page not found',
		description:
			"The page you're looking for doesn't exist.",
		icon: '🔍',
		size: 'large',
		centered: true,
		showIcon: true,
		primaryAction: {
			label: 'Go home',
			onClick: () => {},
			variant: 'primary',
		},
	},
};

export const getEmptyStateConfig = (
	kind: EmptyStateKind
): EmptyStateConfiguration => {
	return (
		EMPTY_STATE_CONFIGURATIONS[kind] ||
		EMPTY_STATE_CONFIGURATIONS['no-data']
	);
};
