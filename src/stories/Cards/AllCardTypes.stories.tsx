import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedCard,
	CardFactory,
	CardPresets,
	QuickCards,
} from '../../components/Card';

const meta: Meta<typeof UnifiedCard> = {
	title: 'Cards/All Card Types',
	component: UnifiedCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Comprehensive showcase of all available card types in the DRY Card system. ' +
					'Demonstrates the flexibility and consistency of the unified card architecture.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'default',
				'elevated',
				'outlined',
				'filled',
				'friend',
				'game',
				'profile',
				'notification',
				'stats',
				'settings',
				'achievement',
				'puzzle',
				'leaderboard',
				'chat-preview',
				'room-info',
				'match-summary',
				'user-status',
			],
			description: 'The type/style of card to display',
		},
		title: {
			control: 'text',
			description: 'Card title',
		},
		subtitle: {
			control: 'text',
			description: 'Card subtitle',
		},
		content: {
			control: 'text',
			description: 'Card content',
		},
		onClick: {
			action: 'cardClicked',
			description: 'Function called when card is clicked',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Size variant of the card',
		},
		padding: {
			control: 'select',
			options: ['none', 'small', 'medium', 'large'],
			description: 'Internal padding size',
		},
		hover: {
			control: 'boolean',
			description: 'Whether the card responds to hover',
		},
		clickable: {
			control: 'boolean',
			description: 'Whether the card is clickable',
		},
		// Friend-specific props
		friend: {
			control: 'object',
			description: 'Friend data object (for friend cards)',
			if: { arg: 'kind', eq: 'friend' },
		},
		onMessage: {
			action: 'messageClicked',
			description:
				'Function called when message button is clicked',
			if: { arg: 'kind', eq: 'friend' },
		},
		onChallenge: {
			action: 'challengeClicked',
			description:
				'Function called when challenge button is clicked',
			if: { arg: 'kind', eq: 'friend' },
		},
		onRemove: {
			action: 'removeClicked',
			description:
				'Function called when remove button is clicked',
			if: { arg: 'kind', eq: 'friend' },
		},
		unreadCount: {
			control: {
				type: 'range',
				min: 0,
				max: 99,
				step: 1,
			},
			description: 'Number of unread messages',
			if: { arg: 'kind', eq: 'friend' },
		},
		// Notification-specific props
		notificationType: {
			control: 'select',
			options: ['info', 'warning', 'error', 'success'],
			description: 'Type of notification',
			if: { arg: 'kind', eq: 'notification' },
		},
		// Stats-specific props
		statValue: {
			control: 'text',
			description: 'Main statistic value to display',
			if: { arg: 'kind', eq: 'stats' },
		},
		statLabel: {
			control: 'text',
			description: 'Label for the statistic',
			if: { arg: 'kind', eq: 'stats' },
		},
		// Common props
		customClassName: {
			control: 'text',
			description: 'Custom CSS class names',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
		overrideConfig: {
			control: 'object',
			description: 'Override configuration object',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedCard>;

// Basic Card Types
export const DefaultCard: Story = {
	args: {
		kind: 'default',
		title: 'Default Card',
		subtitle: 'A basic card with default styling',
		content:
			'This is the default card style with standard padding and no elevation.',
	},
};

export const ElevatedCard: Story = {
	args: {
		kind: 'elevated',
		title: 'Elevated Card',
		subtitle: 'A card with shadow elevation',
		content:
			'This card has a shadow to create depth and visual hierarchy.',
	},
};

export const OutlinedCard: Story = {
	args: {
		kind: 'outlined',
		title: 'Outlined Card',
		subtitle: 'A card with border outline',
		content:
			'This card uses a border instead of shadow for a clean, minimal look.',
	},
};

export const FilledCard: Story = {
	args: {
		kind: 'filled',
		title: 'Filled Card',
		subtitle: 'A card with background fill',
		content:
			'This card has a filled background color for emphasis.',
	},
};

// User Interface Cards
export const FriendCard: Story = {
	args: {
		kind: 'friend',
		friend: {
			id: '1',
			username: 'AliceGamer',
			online: true,
			division: 'Diamond',
			tier: 'II',
			inMatch: false,
			idle: false,
		},
		onChallenge: (id: string) =>
			console.log('Challenge friend:', id),
		onMessage: (id: string) =>
			console.log('Message friend:', id),
		onRemove: (id: string) =>
			console.log('Remove friend:', id),
		unreadCount: 3,
	},
};

export const ProfileCard: Story = {
	args: {
		kind: 'profile',
		title: 'John Doe',
		subtitle: 'Diamond Tier - Level 42',
		content: (
			<div style={{ textAlign: 'center' }}>
				<div
					style={{ fontSize: '3rem', marginBottom: '1rem' }}
				>
					👤
				</div>
				<p>Joined: January 2024</p>
				<p>Games Won: 156</p>
				<p>Current Streak: 12</p>
			</div>
		),
	},
};

export const NotificationCard: Story = {
	args: {
		kind: 'notification',
		notificationType: 'info',
		title: 'New Achievement Unlocked!',
		subtitle: 'Congratulations on reaching a new milestone',
		content:
			'You have successfully completed 100 puzzles in a row. Keep up the great work!',
	},
};

export const StatsCard: Story = {
	args: {
		kind: 'stats',
		title: 'Win Rate',
		statValue: '87%',
		statLabel: 'Overall Performance',
		content:
			'Your win rate has improved by 15% this month.',
	},
};

// Game Interface Cards
export const GameCard: Story = {
	args: {
		kind: 'game',
		title: 'Daily Challenge',
		subtitle: 'Word Connections',
		content: (
			<div>
				<p>🎯 Find 4 groups of connected words</p>
				<p>⏰ Time limit: 5 minutes</p>
				<p>🏆 Reward: 50 XP</p>
			</div>
		),
		actions: (
			<button
				style={{
					padding: '0.5rem 1rem',
					backgroundColor: '#007bff',
					color: 'white',
					border: 'none',
					borderRadius: '0.25rem',
					cursor: 'pointer',
				}}
			>
				Start Challenge
			</button>
		),
	},
};

export const PuzzleCard: Story = {
	args: {
		kind: 'puzzle',
		title: 'Puzzle #247',
		subtitle: 'Difficulty: Hard',
		content: (
			<div>
				<p>🧩 Category: Science & Nature</p>
				<p>📊 Success Rate: 32%</p>
				<p>⭐ Best Time: 2:45</p>
			</div>
		),
	},
};

export const AchievementCard: Story = {
	args: {
		kind: 'achievement',
		title: '🏆 Speed Demon',
		subtitle: 'Complete 10 puzzles under 1 minute',
		content: 'Progress: 7/10',
	},
};

export const LeaderboardCard: Story = {
	args: {
		kind: 'leaderboard',
		title: '#3 Weekly Ranking',
		subtitle: 'Sarah_Puzzler',
		content: (
			<div>
				<p>Score: 2,847 points</p>
				<p>Games: 34 played</p>
				<p>Avg Time: 1:23</p>
			</div>
		),
	},
};

// Communication Cards
export const ChatPreviewCard: Story = {
	args: {
		kind: 'chat-preview',
		title: 'Team Chat',
		subtitle: '3 new messages',
		content: (
			<div>
				<p>
					<strong>Alex:</strong> Great game everyone!
				</p>
				<p>
					<strong>Morgan:</strong> Ready for the next round?
				</p>
				<p style={{ color: '#666', fontSize: '0.9rem' }}>
					2 minutes ago
				</p>
			</div>
		),
	},
};

export const RoomInfoCard: Story = {
	args: {
		kind: 'room-info',
		title: 'Game Room: ALPHA-7',
		subtitle: 'Multiplayer Battle',
		content: (
			<div>
				<p>👥 Players: 4/4</p>
				<p>🎮 Mode: Competitive</p>
				<p>⏱️ Round Time: 3 minutes</p>
				<p>🏆 Prize Pool: 500 XP</p>
			</div>
		),
		actions: (
			<div style={{ display: 'flex', gap: '0.5rem' }}>
				<button
					style={{
						padding: '0.25rem 0.75rem',
						backgroundColor: '#28a745',
						color: 'white',
						border: 'none',
						borderRadius: '0.25rem',
						cursor: 'pointer',
					}}
				>
					Join
				</button>
				<button
					style={{
						padding: '0.25rem 0.75rem',
						backgroundColor: '#6c757d',
						color: 'white',
						border: 'none',
						borderRadius: '0.25rem',
						cursor: 'pointer',
					}}
				>
					Spectate
				</button>
			</div>
		),
	},
};

export const MatchSummaryCard: Story = {
	args: {
		kind: 'match-summary',
		title: 'Match Complete!',
		subtitle: 'Victory - 3rd Place',
		content: (
			<div>
				<p>🎯 Score: 1,250 points</p>
				<p>⏱️ Time: 4:32</p>
				<p>🎪 Bonus: Speed completion</p>
				<p>💰 Reward: +75 XP</p>
			</div>
		),
	},
};

export const UserStatusCard: Story = {
	args: {
		kind: 'user-status',
		title: 'Currently Online',
		subtitle: 'Available to play',
		content: (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '0.5rem',
				}}
			>
				<span
					style={{
						width: '12px',
						height: '12px',
						backgroundColor: '#22c55e',
						borderRadius: '50%',
					}}
				></span>
				<span>Ready for challenges</span>
			</div>
		),
	},
};

// Factory Method Examples
export const FactoryMethodDemo: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gap: '1rem',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(300px, 1fr))',
			}}
		>
			<div>
				<h3>Using CardFactory</h3>
				<CardFactory
					kind='game'
					title='Factory Card'
					content='Created using CardFactory function'
				/>
			</div>

			<div>
				<h3>Using CardPresets</h3>
				<CardPresets.GameCard
					title='Preset Card'
					content='Created using CardPresets.GameCard'
				/>
			</div>

			<div>
				<h3>Using QuickCards</h3>
				{QuickCards.g({
					title: 'Quick Card',
					content: 'Created using QuickCards.g (game)',
				})}
			</div>
		</div>
	),
};

// Interactive Card Grid
export const CardShowcase: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gap: '1rem',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(280px, 1fr))',
				padding: '1rem',
			}}
		>
			<UnifiedCard
				kind='friend'
				friend={{
					id: '1',
					username: 'Player1',
					online: true,
					division: 'Gold',
					tier: 'III',
				}}
				onMessage={() => {}}
				onChallenge={() => {}}
			/>

			<UnifiedCard
				kind='game'
				title='Quick Match'
				content='Join a random game'
			/>

			<UnifiedCard
				kind='stats'
				title='Games Won'
				statValue='42'
				statLabel='This week'
			/>

			<UnifiedCard
				kind='achievement'
				title='🎯 Sharpshooter'
				content='Hit 50 perfect scores'
			/>

			<UnifiedCard
				kind='notification'
				notificationType='success'
				title='Level Up!'
				content='Welcome to Gold Tier'
			/>

			<UnifiedCard
				kind='puzzle'
				title='Brain Teaser'
				subtitle='Logic Challenge'
				content='Can you solve this?'
			/>
		</div>
	),
};
