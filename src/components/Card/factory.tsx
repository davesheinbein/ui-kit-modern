/**
 * CardFactory - DRY card factory system
 *
 * This factory provides a simplified API for creating cards using the configuration system,
 * similar to ButtonFactory but for cards.
 */

import React from 'react';
import UnifiedCard, {
	UnifiedCardProps,
} from './UnifiedCard';
import {
	CARD_CONFIGURATIONS,
	createCardConfig,
	ExtendedCardKind,
} from './configurations';

// Factory function for creating cards
export const CardFactory: React.FC<UnifiedCardProps> = ({
	kind,
	...props
}) => {
	return <UnifiedCard kind={kind} {...props} />;
};

CardFactory.displayName = 'CardFactory';

// Short alias for convenience
export const C = CardFactory;

// Preset card components for common use cases
export const CardPresets = {
	// User interface presets
	FriendCard: (props: Omit<UnifiedCardProps, 'kind'>) => (
		<CardFactory kind='friend' {...props} />
	),

	ProfileCard: (props: Omit<UnifiedCardProps, 'kind'>) => (
		<CardFactory kind='profile' {...props} />
	),

	NotificationCard: (
		props: Omit<UnifiedCardProps, 'kind'>
	) => <CardFactory kind='notification' {...props} />,

	StatsCard: (props: Omit<UnifiedCardProps, 'kind'>) => (
		<CardFactory kind='stats' {...props} />
	),

	// Game interface presets
	GameCard: (props: Omit<UnifiedCardProps, 'kind'>) => (
		<CardFactory kind='game' {...props} />
	),

	PuzzleCard: (props: Omit<UnifiedCardProps, 'kind'>) => (
		<CardFactory kind='puzzle' {...props} />
	),

	RoomCard: (props: Omit<UnifiedCardProps, 'kind'>) => (
		<CardFactory kind='room-info' {...props} />
	),

	MatchCard: (props: Omit<UnifiedCardProps, 'kind'>) => (
		<CardFactory kind='match-summary' {...props} />
	),

	// Layout presets
	InfoCard: (props: Omit<UnifiedCardProps, 'kind'>) => (
		<CardFactory kind='default' hover {...props} />
	),

	ActionCard: (props: Omit<UnifiedCardProps, 'kind'>) => (
		<CardFactory
			kind='elevated'
			clickable
			hover
			{...props}
		/>
	),

	ContentCard: (props: Omit<UnifiedCardProps, 'kind'>) => (
		<CardFactory kind='outlined' {...props} />
	),
};

/**
 * Card Factory Class - Advanced factory for programmatic card creation
 */
export class CardFactoryClass {
	/**
	 * Create a card with specific configuration
	 */
	static create(
		kind: ExtendedCardKind,
		props: Omit<UnifiedCardProps, 'kind'> = {}
	): React.ReactElement {
		return <CardFactory kind={kind} {...props} />;
	}

	/**
	 * Create a card with custom configuration override
	 */
	static createWithConfig(
		kind: ExtendedCardKind,
		configOverride: Partial<
			(typeof CARD_CONFIGURATIONS)[ExtendedCardKind]
		>,
		props: Omit<UnifiedCardProps, 'kind'> = {}
	): React.ReactElement {
		return (
			<CardFactory
				kind={kind}
				overrideConfig={configOverride}
				{...props}
			/>
		);
	}

	/**
	 * Quick card creators
	 */
	static friend = (props: Omit<UnifiedCardProps, 'kind'>) =>
		CardFactoryClass.create('friend', props);

	static game = (props: Omit<UnifiedCardProps, 'kind'>) =>
		CardFactoryClass.create('game', props);

	static profile = (
		props: Omit<UnifiedCardProps, 'kind'>
	) => CardFactoryClass.create('profile', props);

	static notification = (
		props: Omit<UnifiedCardProps, 'kind'>
	) => CardFactoryClass.create('notification', props);

	static stats = (props: Omit<UnifiedCardProps, 'kind'>) =>
		CardFactoryClass.create('stats', props);
}

/**
 * Ultra-short factory functions for rapid development
 */
export const QuickCards = {
	// Ultra-short aliases
	f: CardFactoryClass.friend,
	g: CardFactoryClass.game,
	p: CardFactoryClass.profile,
	n: CardFactoryClass.notification,
	s: CardFactoryClass.stats,

	// Common patterns
	info: (props: Omit<UnifiedCardProps, 'kind'>) =>
		CardFactoryClass.create('default', {
			hover: true,
			...props,
		}),

	action: (props: Omit<UnifiedCardProps, 'kind'>) =>
		CardFactoryClass.create('elevated', {
			clickable: true,
			hover: true,
			...props,
		}),

	display: (props: Omit<UnifiedCardProps, 'kind'>) =>
		CardFactoryClass.create('outlined', props),
};

export default CardFactory;
