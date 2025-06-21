import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedCard,
	CardFactory,
	CardPresets,
	QuickCards,
} from '../../components/Card';

const meta: Meta<typeof UnifiedCard> = {
	title: 'Cards/Card',
	component: UnifiedCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'The ultimate DRY card component. Single component handles ALL card types through the "kind" prop. ' +
					'Supports 17+ card kinds with configuration-driven approach for layouts, user interfaces, games, and communication.',
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
			description: 'Card kind - determines styling and behavior',
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
			description: 'Card content (can be text or JSX)',
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
		friend: {
			control: 'object',
			description: 'Friend data object (for friend cards)',
			if: { arg: 'kind', eq: 'friend' },
		},
		onMessage: {
			action: 'messageClicked',
			description: 'Function called when message button is clicked',
			if: { arg: 'kind', eq: 'friend' },
		},
		onChallenge: {
			action: 'challengeClicked',
			description: 'Function called when challenge button is clicked',
			if: { arg: 'kind', eq: 'friend' },
		},
		onRemove: {
			action: 'removeClicked',
			description: 'Function called when remove button is clicked',
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
		notificationType: {
			control: 'select',
			options: ['info', 'warning', 'error', 'success'],
			description: 'Type of notification',
			if: { arg: 'kind', eq: 'notification' },
		},
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
		actions: {
			control: 'object',
			description: 'Action buttons/elements for the card footer',
		},
		overrideConfig: {
			control: 'object',
			description: 'Override configuration object',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedCard>;

// ===== LAYOUT CARDS =====
// Basic foundational cards for general content display

export const DefaultCard: Story = {
	args: {
		kind: 'default',
		title: 'Default Card',
		subtitle: 'A basic card with default styling',
		content:
			'This is the default card style with standard padding and no elevation. Perfect for general content display.',
	},
	parameters: {
		docs: {
			description: {
				story: 'Basic card with standard styling, no shadows or borders.',
			},
		},
	},
};

export const ElevatedCard: Story = {
	args: {
		kind: 'elevated',
		title: 'Elevated Card',
		subtitle: 'A card with shadow elevation',
		content:
			'This card has a shadow to create depth and visual hierarchy. Great for highlighting important content.',
	},
	parameters: {
		docs: {
			description: {
				story: 'Card with shadow elevation for depth and emphasis.',
			},
		},
	},
};

export const OutlinedCard: Story = {
	args: {
		kind: 'outlined',
		title: 'Outlined Card',
		subtitle: 'A card with border outline',
		content:
			'This card uses a border instead of shadow for a clean, minimal look. Ideal for secondary content.',
	},
	parameters: {
		docs: {
			description: {
				story: 'Card with border outline for clean, minimal appearance.',
			},
		},
	},
};

export const FilledCard: Story = {
	args: {
		kind: 'filled',
		title: 'Filled Card',
		subtitle: 'A card with background fill',
		content:
			'This card has a filled background color for emphasis and visual grouping.',
	},
	parameters: {
		docs: {
			description: {
				story: 'Card with background fill for visual grouping.',
			},
		},
	},
};

// ===== USER INTERFACE CARDS =====
// Cards for common UI patterns and user interactions

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
		onChallenge: (id: string) => console.log('Challenge friend:', id),
		onMessage: (id: string) => console.log('Message friend:', id),
		onRemove: (id: string) => console.log('Remove friend:', id),
		unreadCount: 3,
	},
	parameters: {
		docs: {
			description: {
				story: 'Friend card with status, actions, and unread message count.',
			},
		},
	},
};

export const FriendCardInMatch: Story = {
	args: {
		kind: 'friend',
		friend: {
			id: '2',
			username: 'BobPlayer',
			online: true,
			division: 'Gold',
			tier: 'I',
			inMatch: true,
			idle: false,
		},
		onChallenge: (id: string) => console.log('Challenge friend:', id),
		onMessage: (id: string) => console.log('Message friend:', id),
		onRemove: (id: string) => console.log('Remove friend:', id),
		unreadCount: 0,
	},
	parameters: {
		docs: {
			description: {
				story: 'Friend card showing "in match" status.',
			},
		},
	},
};

export const FriendCardOffline: Story = {
	args: {
		kind: 'friend',
		friend: {
			id: '3',
			username: 'CharlieAway',
			online: false,
			division: 'Silver',
			tier: 'III',
			inMatch: false,
			idle: false,
		},
		onChallenge: (id: string) => console.log('Challenge friend:', id),
		onMessage: (id: string) => console.log('Message friend:', id),
		onRemove: (id: string) => console.log('Remove friend:', id),
		unreadCount: 1,
	},
	parameters: {
		docs: {
			description: {
				story: 'Friend card for offline users.',
			},
		},
	},
};

export const ProfileCard: Story = {
	args: {
		kind: 'profile',
		title: 'John Doe',
		subtitle: 'Diamond Tier - Level 42',
		content: (
			<div style={{ textAlign: 'center' }}>
				<div style={{ marginBottom: '1rem' }}>
					<div
						style={{
							width: '80px',
							height: '80px',
							borderRadius: '50%',
							backgroundColor: '#007bff',
							color: 'white',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: '1.5rem',
							fontWeight: 'bold',
							margin: '0 auto',
						}}
					>
						JD
					</div>
				</div>
				<div style={{ fontSize: '0.9rem', color: '#666' }}>
					<div>🏆 453 wins • 87% win rate</div>
					<div>🔥 12 day streak</div>
				</div>
			</div>
		),
	},
	parameters: {
		docs: {
			description: {
				story: 'User profile card with avatar and stats.',
			},
		},
	},
};

export const NotificationInfo: Story = {
	args: {
		kind: 'notification',
		notificationType: 'info',
		title: 'New Feature Available',
		subtitle: 'Dark mode is now available',
		content:
			'Experience the app in a whole new way with our new dark mode theme. You can toggle it in your settings.',
	},
	parameters: {
		docs: {
			description: {
				story: 'Information notification card.',
			},
		},
	},
};

export const NotificationWarning: Story = {
	args: {
		kind: 'notification',
		notificationType: 'warning',
		title: 'Account Security Notice',
		subtitle: 'Unusual login activity detected',
		content:
			'We noticed a login from a new device. If this was not you, please change your password immediately.',
	},
	parameters: {
		docs: {
			description: {
				story: 'Warning notification card.',
			},
		},
	},
};

export const NotificationSuccess: Story = {
	args: {
		kind: 'notification',
		notificationType: 'success',
		title: 'Achievement Unlocked!',
		subtitle: 'Congratulations on your milestone',
		content:
			'You have successfully completed 100 puzzles in a row. You earned the "Century" badge and 500 bonus XP!',
	},
	parameters: {
		docs: {
			description: {
				story: 'Success notification card.',
			},
		},
	},
};

export const StatsCard: Story = {
	args: {
		kind: 'stats',
		title: 'Win Rate',
		statValue: '87%',
		statLabel: 'Overall Performance',
		content: 'Your win rate has improved by 15% this month.',
	},
	parameters: {
		docs: {
			description: {
				story: 'Statistics card with main value and performance data.',
			},
		},
	},
};

export const UserStatusOnline: Story = {
	args: {
		kind: 'user-status',
		title: 'Currently Online',
		subtitle: 'Available for challenges',
		content: (
			<div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
				<div
					style={{
						width: '12px',
						height: '12px',
						borderRadius: '50%',
						backgroundColor: '#28a745',
					}}
				/>
				<span>Ready to play</span>
			</div>
		),
	},
	parameters: {
		docs: {
			description: {
				story: 'User status card showing online availability.',
			},
		},
	},
};

// ===== GAME CARDS =====
// Cards for gaming interfaces and game-related content

export const GameCard: Story = {
	args: {
		kind: 'game',
		title: 'Daily Challenge',
		subtitle: 'Word Connections Pro',
		content: (
			<div>
				<p style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
					🎯 <span>Difficulty: Hard</span>
				</p>
				<p style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
					⏰ <span>Time Limit: 5 minutes</span>
				</p>
				<p style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
					🏆 <span>Reward: 250 XP</span>
				</p>
			</div>
		),
		actions: (
			<div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '0.375rem',
						cursor: 'pointer',
						fontWeight: '500',
					}}
				>
					Start Challenge
				</button>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: 'transparent',
						color: '#007bff',
						border: '1px solid #007bff',
						borderRadius: '0.375rem',
						cursor: 'pointer',
					}}
				>
					View Rules
				</button>
			</div>
		),
	},
	parameters: {
		docs: {
			description: {
				story: 'Game card with challenge details and action buttons.',
			},
		},
	},
};

export const PuzzleCard: Story = {
	args: {
		kind: 'puzzle',
		title: 'Puzzle #247',
		subtitle: 'Science & Nature Theme',
		content: (
			<div>
				<div style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
					<span><strong>Difficulty:</strong></span>
					<span>⭐⭐⭐⭐⭐</span>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
					<span><strong>Solved by:</strong></span>
					<span>1,247 players</span>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
					<span><strong>Average time:</strong></span>
					<span>3:24</span>
				</div>
			</div>
		),
	},
	parameters: {
		docs: {
			description: {
				story: 'Puzzle card with difficulty and completion stats.',
			},
		},
	},
};

export const AchievementCard: Story = {
	args: {
		kind: 'achievement',
		title: '🏆 Speed Demon',
		subtitle: 'Complete 10 puzzles under 1 minute',
		content: (
			<div>
				<div
					style={{
						background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
						color: 'white',
						padding: '1rem',
						borderRadius: '0.5rem',
						textAlign: 'center',
						marginBottom: '1rem',
					}}
				>
					<div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Progress: 7/10</div>
					<div style={{ fontSize: '0.9rem' }}>3 more to unlock!</div>
				</div>
				<div style={{ marginBottom: '1rem' }}>
					<div style={{ background: '#e9ecef', borderRadius: '1rem', height: '8px' }}>
						<div
							style={{
								background: 'linear-gradient(90deg, #667eea, #764ba2)',
								borderRadius: '1rem',
								height: '8px',
								width: '70%',
							}}
						/>
					</div>
				</div>
			</div>
		),
	},
	parameters: {
		docs: {
			description: {
				story: 'Achievement card with progress tracking.',
			},
		},
	},
};

export const MatchSummaryCard: Story = {
	args: {
		kind: 'match-summary',
		title: 'Match Complete!',
		subtitle: 'Victory - 3rd Place 🥉',
		content: (
			<div>
				<div
					style={{
						background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
						padding: '1rem',
						borderRadius: '0.5rem',
						marginBottom: '1rem',
						textAlign: 'center',
					}}
				>
					<div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>+847 XP</div>
					<div style={{ fontSize: '0.9rem' }}>+125 bonus points</div>
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
					<div><strong>Duration:</strong> 4:23</div>
					<div><strong>Accuracy:</strong> 94%</div>
					<div><strong>Words found:</strong> 47/50</div>
					<div><strong>Rank:</strong> 3rd</div>
				</div>
			</div>
		),
		actions: (
			<div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '0.375rem',
						cursor: 'pointer',
						flex: 1,
					}}
				>
					Play Again
				</button>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: '#28a745',
						color: 'white',
						border: 'none',
						borderRadius: '0.375rem',
						cursor: 'pointer',
					}}
				>
					Share
				</button>
			</div>
		),
	},
	parameters: {
		docs: {
			description: {
				story: 'Match summary card with results and actions.',
			},
		},
	},
};

export const RoomInfoCard: Story = {
	args: {
		kind: 'room-info',
		title: 'Game Room: ALPHA-7',
		subtitle: 'Competitive Multiplayer',
		content: (
			<div>
				<div
					style={{
						background: '#f8f9fa',
						padding: '1rem',
						borderRadius: '0.5rem',
						marginBottom: '1rem',
					}}
				>
					<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
						<span><strong>Players:</strong></span>
						<span>3/4</span>
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
						<span><strong>Difficulty:</strong></span>
						<span>Expert</span>
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<span><strong>Time limit:</strong></span>
						<span>3 minutes</span>
					</div>
				</div>
			</div>
		),
		actions: (
			<div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: '#28a745',
						color: 'white',
						border: 'none',
						borderRadius: '0.375rem',
						cursor: 'pointer',
						fontWeight: '500',
						flex: 1,
					}}
				>
					Ready Up
				</button>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: '#dc3545',
						color: 'white',
						border: 'none',
						borderRadius: '0.375rem',
						cursor: 'pointer',
					}}
				>
					Leave
				</button>
			</div>
		),
	},
	parameters: {
		docs: {
			description: {
				story: 'Game room information card with player status.',
			},
		},
	},
};

// ===== COMMUNICATION CARDS =====
// Cards for chat, messaging, and social interactions

export const ChatPreviewCard: Story = {
	args: {
		kind: 'chat-preview',
		title: 'Team Chat',
		subtitle: '3 new messages',
		content: (
			<div>
				<div style={{ marginBottom: '0.75rem' }}>
					<div style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>
						<strong>Sarah:</strong> Anyone ready for the next challenge?
					</div>
					<div style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>
						<strong>Mike:</strong> Let's do this! 🔥
					</div>
					<div style={{ fontSize: '0.85rem', color: '#666' }}>
						<strong>Alex:</strong> I'm in!
					</div>
				</div>
				<div
					style={{
						fontSize: '0.75rem',
						color: '#666',
						textAlign: 'right',
						borderTop: '1px solid #e9ecef',
						paddingTop: '0.5rem',
					}}
				>
					Last message: 2 minutes ago
				</div>
			</div>
		),
		actions: (
			<div style={{ display: 'flex', gap: '0.5rem' }}>
				<button
					style={{
						padding: '0.375rem 0.75rem',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
						flex: 1,
					}}
				>
					Open Chat
				</button>
				<button
					style={{
						padding: '0.375rem 0.75rem',
						backgroundColor: 'transparent',
						color: '#6c757d',
						border: '1px solid #6c757d',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					Mute
				</button>
			</div>
		),
	},
	parameters: {
		docs: {
			description: {
				story: 'Chat preview card with recent messages and actions.',
			},
		},
	},
};

// ===== INTERACTIVE CARD VARIATIONS =====
// Showing different behaviors and states

export const ClickableCard: Story = {
	args: {
		kind: 'default',
		title: 'Clickable Card',
		subtitle: 'Interactive card with click handlers',
		content: 'This card responds to clicks and shows hover effects. Click me to see the interaction!',
		clickable: true,
		hover: true,
		onClick: () => alert('Card clicked!'),
	},
	parameters: {
		docs: {
			description: {
				story: 'Interactive card with click and hover effects.',
			},
		},
	},
};

export const ActionCard: Story = {
	args: {
		kind: 'elevated',
		title: 'Card with Actions',
		subtitle: 'Interactive card with action buttons',
		content: 'This card includes action buttons in the footer area for user interactions.',
		actions: (
			<div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: 'transparent',
						color: '#6c757d',
						border: '1px solid #6c757d',
						borderRadius: '0.375rem',
						cursor: 'pointer',
					}}
				>
					Cancel
				</button>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '0.375rem',
						cursor: 'pointer',
					}}
				>
					Confirm
				</button>
			</div>
		),
	},
	parameters: {
		docs: {
			description: {
				story: 'Card with action buttons in the footer.',
			},
		},
	},
};

// ===== CARD SIZE VARIATIONS =====

export const SmallCard: Story = {
	args: {
		kind: 'elevated',
		title: 'Small Card',
		subtitle: 'Compact size variant',
		content: 'This is a small card with reduced padding and border radius.',
		size: 'small',
		padding: 'small',
	},
	parameters: {
		docs: {
			description: {
				story: 'Small card with compact sizing.',
			},
		},
	},
};

export const LargeCard: Story = {
	args: {
		kind: 'elevated',
		title: 'Large Card',
		subtitle: 'Spacious size variant',
		content: 'This is a large card with increased padding and border radius. Perfect for featured content or when you need more space for complex layouts.',
		size: 'large',
		padding: 'large',
	},
	parameters: {
		docs: {
			description: {
				story: 'Large card with generous spacing.',
			},
		},
	},
};

// ===== FACTORY EXAMPLES =====
// Demonstrating the factory system

export const FactoryExample: Story = {
	render: () => (
		<div style={{ padding: '1rem' }}>
			<h3 style={{ marginBottom: '1.5rem' }}>CardFactory System</h3>
			<p style={{ marginBottom: '1.5rem', color: '#666' }}>
				Examples of creating cards using the factory system for rapid development.
			</p>
			
			<div
				style={{
					display: 'grid',
					gap: '1rem',
					gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
				}}
			>
				<CardFactory
					kind='friend'
					friend={{
						id: '1',
						username: 'FactoryFriend',
						online: true,
						division: 'Gold',
						tier: 'II',
					}}
					onMessage={() => {}}
					onChallenge={() => {}}
				/>

				<CardFactory
					kind='game'
					title='Factory Game'
					content='Created with CardFactory function'
				/>

				<CardFactory
					kind='stats'
					title='Factory Stats'
					statValue='95%'
					statLabel='Success rate'
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Examples using CardFactory for quick card creation.',
			},
		},
	},
};

export const CardPresetsDemo: Story = {
	render: () => (
		<div style={{ padding: '1rem' }}>
			<h3 style={{ marginBottom: '1.5rem' }}>CardPresets - Pre-configured Cards</h3>
			<p style={{ marginBottom: '1.5rem', color: '#666' }}>
				Ready-to-use card components for common use cases.
			</p>

			<div
				style={{
					display: 'grid',
					gap: '1rem',
					gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
				}}
			>
				<div>
					<CardPresets.FriendCard
						friend={{
							id: '1',
							username: 'PresetFriend',
							online: true,
							division: 'Diamond',
							tier: 'I',
						}}
						onMessage={() => {}}
						onChallenge={() => {}}
					/>
				</div>

				<div>
					<CardPresets.GameCard
						title='Preset Game Card'
						content='Pre-configured game card with optimal settings'
					/>
				</div>

				<div>
					<CardPresets.StatsCard
						title='Performance'
						statValue='87%'
						statLabel='Win rate'
					/>
				</div>

				<div>
					<CardPresets.NotificationCard
						title='System Update'
						content='New features are available'
						notificationType='info'
					/>
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Pre-configured card presets for common patterns.',
			},
		},
	},
};

// ===== COMPREHENSIVE SHOWCASE =====

export const AllCardKinds: Story = {
	render: () => {
		const cardKinds = [
			'default',
			'elevated',
			'outlined',
			'filled',
			'friend',
			'game',
			'profile',
			'notification',
			'stats',
			'achievement',
			'puzzle',
			'chat-preview',
			'room-info',
			'user-status',
		];

		return (
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
					gap: '1rem',
					padding: '1rem',
				}}
			>
				{cardKinds.map((kind) => (
					<UnifiedCard
						key={kind}
						kind={kind as any}
						title={kind.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
						subtitle={`${kind} card example`}
						content={`This is a ${kind} card showing the unified system.`}
						{...(kind === 'friend' && {
							friend: {
								id: '1',
								username: 'SampleUser',
								online: true,
								division: 'Gold',
								tier: 'II',
							},
							onMessage: () => {},
							onChallenge: () => {},
						})}
						{...(kind === 'notification' && {
							notificationType: 'info',
						})}
						{...(kind === 'stats' && {
							statValue: '95%',
							statLabel: 'Performance',
						})}
					/>
				))}
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story: 'Showcase of all available card kinds in the UnifiedCard system.',
			},
		},
	},
};

export const CardGroupShowcase: Story = {
	render: () => (
		<div style={{ padding: '1rem' }}>
			<div style={{ marginBottom: '2rem' }}>
				<h3 style={{ marginBottom: '1rem' }}>Layout Cards</h3>
				<div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
					<UnifiedCard kind='default' title='Default' content='Basic card styling' />
					<UnifiedCard kind='elevated' title='Elevated' content='Card with shadow' />
					<UnifiedCard kind='outlined' title='Outlined' content='Card with border' />
					<UnifiedCard kind='filled' title='Filled' content='Card with background' />
				</div>
			</div>

			<div style={{ marginBottom: '2rem' }}>
				<h3 style={{ marginBottom: '1rem' }}>User Interface Cards</h3>
				<div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
					<UnifiedCard
						kind='friend'
						friend={{
							id: '1',
							username: 'UIFriend',
							online: true,
							division: 'Diamond',
							tier: 'I',
						}}
						onMessage={() => {}}
						onChallenge={() => {}}
					/>
					<UnifiedCard
						kind='notification'
						notificationType='success'
						title='Success!'
						content='Operation completed successfully'
					/>
					<UnifiedCard
						kind='stats'
						title='Performance'
						statValue='92%'
						statLabel='Accuracy'
					/>
				</div>
			</div>

			<div>
				<h3 style={{ marginBottom: '1rem' }}>Game Cards</h3>
				<div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
					<UnifiedCard kind='game' title='Daily Challenge' content='Complete today&apos;s puzzle' />
					<UnifiedCard kind='achievement' title='🏆 Champion' content='Win 10 matches in a row' />
					<UnifiedCard kind='puzzle' title='Puzzle #42' content='Medium difficulty challenge' />
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Organized showcase of card groups: Layout, UI, and Game cards.',
			},
		},
	},
};
