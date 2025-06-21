import { ReactNode } from 'react';
import styles from './Card.module.scss';

// Card variant types
export type CardVariant =
	| 'default'
	| 'elevated'
	| 'outlined'
	| 'filled';

// Enhanced card configuration interface
export interface CardConfiguration {
	variant: CardVariant;
	size?: 'small' | 'medium' | 'large';
	padding?: 'none' | 'small' | 'medium' | 'large';
	hover?: boolean;
	clickable?: boolean;
	className?: string;
	defaultContent?: ReactNode;
	behavior?:
		| 'static'
		| 'clickable'
		| 'hoverable'
		| 'interactive';
}

// Comprehensive card kind definitions
export type ExtendedCardKind =
	| 'default'
	| 'elevated'
	| 'outlined'
	| 'filled'
	| 'friend'
	| 'game'
	| 'profile'
	| 'notification'
	| 'stats'
	| 'settings'
	| 'achievement'
	| 'puzzle'
	| 'leaderboard'
	| 'chat-preview'
	| 'room-info'
	| 'match-summary'
	| 'user-status'
	| 'custom';

// Predefined configurations for maximum DRYness
export const CARD_CONFIGURATIONS: Record<
	ExtendedCardKind,
	CardConfiguration
> = {
	// Basic variants
	'default': {
		variant: 'default',
		size: 'medium',
		padding: 'medium',
		behavior: 'static',
	},
	'elevated': {
		variant: 'elevated',
		size: 'medium',
		padding: 'medium',
		behavior: 'static',
		hover: true,
	},
	'outlined': {
		variant: 'outlined',
		size: 'medium',
		padding: 'medium',
		behavior: 'static',
	},
	'filled': {
		variant: 'filled',
		size: 'medium',
		padding: 'medium',
		behavior: 'static',
	},

	// Specialized UI cards
	'friend': {
		variant: 'default',
		size: 'medium',
		padding: 'medium',
		hover: true,
		behavior: 'interactive',
		className: styles['friend-card'],
	},
	'game': {
		variant: 'elevated',
		size: 'medium',
		padding: 'medium',
		hover: true,
		clickable: true,
		behavior: 'clickable',
		className: styles['game-card'],
	},
	'profile': {
		variant: 'elevated',
		size: 'large',
		padding: 'large',
		hover: true,
		behavior: 'hoverable',
		className: styles['profile-card'],
	},
	'notification': {
		variant: 'outlined',
		size: 'medium',
		padding: 'medium',
		behavior: 'static',
		className: styles['notification-card'],
	},
	'stats': {
		variant: 'filled',
		size: 'medium',
		padding: 'medium',
		hover: true,
		behavior: 'hoverable',
		className: styles['stats-card'],
	},

	// App-specific cards
	'settings': {
		variant: 'default',
		size: 'medium',
		padding: 'medium',
		hover: true,
		clickable: true,
		behavior: 'clickable',
	},
	'achievement': {
		variant: 'elevated',
		size: 'small',
		padding: 'small',
		hover: true,
		behavior: 'hoverable',
	},
	'puzzle': {
		variant: 'outlined',
		size: 'medium',
		padding: 'medium',
		hover: true,
		clickable: true,
		behavior: 'clickable',
	},
	'leaderboard': {
		variant: 'default',
		size: 'medium',
		padding: 'small',
		behavior: 'static',
	},

	// Game-specific cards
	'chat-preview': {
		variant: 'outlined',
		size: 'small',
		padding: 'small',
		hover: true,
		clickable: true,
		behavior: 'clickable',
	},
	'room-info': {
		variant: 'elevated',
		size: 'large',
		padding: 'large',
		behavior: 'static',
	},
	'match-summary': {
		variant: 'elevated',
		size: 'large',
		padding: 'medium',
		behavior: 'static',
	},
	'user-status': {
		variant: 'default',
		size: 'small',
		padding: 'small',
		hover: true,
		behavior: 'hoverable',
	},

	// Custom fallback
	'custom': {
		variant: 'default',
		size: 'medium',
		padding: 'medium',
		behavior: 'static',
	},
};

// Helper functions for creating common card configurations
export const createCardConfig = (
	baseKind: ExtendedCardKind,
	overrides: Partial<CardConfiguration>
): CardConfiguration => ({
	...CARD_CONFIGURATIONS[baseKind],
	...overrides,
});

// Common card groups for UI patterns
export const CARD_GROUPS = {
	// User interface cards
	userInterface: {
		friend: 'friend' as ExtendedCardKind,
		profile: 'profile' as ExtendedCardKind,
		settings: 'settings' as ExtendedCardKind,
		notification: 'notification' as ExtendedCardKind,
	},

	// Game cards
	gameInterface: {
		puzzle: 'puzzle' as ExtendedCardKind,
		game: 'game' as ExtendedCardKind,
		room: 'room-info' as ExtendedCardKind,
		match: 'match-summary' as ExtendedCardKind,
		chat: 'chat-preview' as ExtendedCardKind,
	},

	// Information cards
	informationDisplay: {
		stats: 'stats' as ExtendedCardKind,
		achievement: 'achievement' as ExtendedCardKind,
		leaderboard: 'leaderboard' as ExtendedCardKind,
		userStatus: 'user-status' as ExtendedCardKind,
	},

	// Layout cards
	layoutElements: {
		default: 'default' as ExtendedCardKind,
		elevated: 'elevated' as ExtendedCardKind,
		outlined: 'outlined' as ExtendedCardKind,
		filled: 'filled' as ExtendedCardKind,
	},
};

// Quick access to commonly used card configurations
export const QUICK_CARDS = {
	infoCard: () =>
		createCardConfig('default', {
			padding: 'large',
			hover: true,
		}),
	actionCard: () =>
		createCardConfig('elevated', {
			clickable: true,
			hover: true,
		}),
	contentCard: () =>
		createCardConfig('outlined', {
			padding: 'large',
		}),
	headerCard: () =>
		createCardConfig('filled', {
			padding: 'medium',
			size: 'large',
		}),
	compactCard: () =>
		createCardConfig('default', {
			size: 'small',
			padding: 'small',
		}),
	interactiveCard: () =>
		createCardConfig('elevated', {
			clickable: true,
			hover: true,
			behavior: 'interactive',
		}),
	displayCard: () =>
		createCardConfig('default', {
			behavior: 'static',
			padding: 'medium',
		}),
};

export default CARD_CONFIGURATIONS;
