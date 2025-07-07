import React from 'react';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Icons } from '../../components/Icons';
import { cardArgTypes as baseCardArgTypes } from '../config/argTypes';
import {
	mockFriends,
	mockProfile,
	userStatusMock,
	leaderboardMock,
	mockGameStats,
	cardPuzzleData,
} from '../mocks';
import type { Meta, StoryObj } from '@storybook/react';
import type { ExtendedCardKind } from '../../components/Card/configurations';
import type { CardProps } from '../../components/Card/Card';

const { children, className, variant, ...cardArgTypes } =
	baseCardArgTypes;

const meta: Meta<typeof Card> = {
	title: 'Cards/Card',
	component: Card,
	tags: ['autodocs'],
	argTypes: {
		// Remove problematic argTypes for now
		title: { control: 'text' },
		subtitle: { control: 'text' },
		content: { control: 'text' },
		variant: {
			control: 'select',
			options: [
				'default',
				'elevated',
				'outlined',
				'filled',
			],
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		hover: { control: 'boolean' },
		clickable: { control: 'boolean' },
	},
	parameters: {
		docs: {
			description: {
				component: `\
**Card** is a flexible, prop-driven component for grouping content, actions, or media.\n\n
**Key Features:**
- **Fully Prop-Driven**: All functionality exposed via clean, declarative props
- **No Hardcoded Logic**: All behaviors configurable via props
- **API-First Design**: Consistent, predictable interface
- **Flexible Layout**: Supports icons, avatars, status indicators, and custom content
- **Accessibility**: Built-in keyboard navigation and ARIA support
- **Generic Data Display**: Use the \`items\` prop for flexible data visualization

**Migration from Legacy:**
- Legacy \`kind\`-based props are deprecated but supported for backward compatibility
- Use new generic props like \`items\`, \`icon\`, \`avatar\`, \`statusColor\` for maximum flexibility
- The \`itemRenderer\` prop allows complete customization of how data is displayed

**Best Practices:**
- Use \`items\` prop for any list-like data (friends, leaderboards, stats, etc.)
- Use \`icon\`, \`avatar\`, and layout props instead of hardcoded \`kind\` layouts
- Leverage \`itemRenderer\` for complex custom display logic
        `,
			},
			story: { inline: false, lazy: true },
		},
	},
};
export default meta;

type Story = StoryObj<typeof Card>;

// === NEW PROP-DRIVEN EXAMPLES ===

export const BasicCard: Story = {
	args: {
		title: 'Basic Card',
		subtitle: 'A simple card with title and content',
		content:
			'This demonstrates the new prop-driven Card API. All functionality is exposed via clean, declarative props.',
		variant: 'default',
		size: 'medium',
		padding: 'medium',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Basic card using the new prop-driven API with title, subtitle, and content.',
			},
		},
	},
};

export const DataList: Story = {
	args: {
		title: 'Team Members',
		subtitle: '3 members online',
		items: mockFriends.map((friend) => ({
			id: friend.id,
			label: friend.name,
			avatar: friend.avatar,
			subtitle: friend.status,
			value: friend.lastSeen,
		})),
		showItemNumbers: false,
		maxItems: 5,
		variant: 'outlined',
		contentLayout: 'vertical',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Generic data list using the items prop - works for friends, leaderboards, stats, etc.',
			},
		},
	},
};

export const DismissibleCard: Story = {
	args: {
		title: 'Dismissible Card',
		subtitle: 'This card can be closed',
		content:
			'Click the X button in the top right corner to dismiss this card. Perfect for notifications, alerts, or any temporary content.',
		variant: 'outlined',
		size: 'medium',
		padding: 'medium',
		dismissible: true,
		onDismiss: () => console.log('Card dismissed'),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Card with dismissible functionality - shows a close button (X) in the top right corner when dismissible=true is set.',
			},
		},
	},
};

export const StatisticsCard: Story = {
	args: {
		title: 'Game Statistics',
		items: [
			{ id: 'games', label: 'Total Games', value: 142 },
			{ id: 'wins', label: 'Wins', value: 89 },
			{ id: 'losses', label: 'Losses', value: 53 },
			{ id: 'winrate', label: 'Win Rate', value: '62.7%' },
			{ id: 'streak', label: 'Current Streak', value: 5 },
		],
		variant: 'filled',
		backgroundColor: '#f8fafc',
		borderRadius: 12,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Statistics display using items prop instead of hardcoded stats layout.',
			},
		},
	},
};

// === LEGACY COMPATIBILITY EXAMPLES (Deprecated) ===

export const LegacyFriendCard: Story = {
	args: {
		kind: 'friend',
		friend: {
			id: mockFriends[0].id,
			username: mockFriends[0].name,
			avatar: mockFriends[0].avatar,
			online: mockFriends[0].status === 'Online',
			division: 'Gold',
			tier: 'II',
			inMatch: false,
			idle: false,
		},
		onChallenge: (id: string) =>
			console.log('Challenge:', id),
		onMessage: (id: string) => console.log('Message:', id),
		onRemove: (id: string) => console.log('Remove:', id),
		unreadCount: 2,
	},
	parameters: {
		docs: {
			description: {
				story:
					'⚠️ Legacy friend card - use the new items prop approach instead.',
			},
		},
	},
};

export const LegacyProfileCard: Story = {
	args: {
		kind: 'profile',
		profile: mockProfile,
	},
	parameters: {
		docs: {
			description: {
				story:
					'⚠️ Legacy profile card - use the new flexible layout props instead.',
			},
		},
	},
};

export const Elevated: Story = {
	args: {
		kind: 'elevated',
		title: 'Elevated Card',
		content: 'This card has a shadow for emphasis.',
	},
};

export const Outlined: Story = {
	args: {
		kind: 'outlined',
		title: 'Outlined Card',
		content: 'This card uses a border for separation.',
		style: {
			background: '#f7fafc',
			border: '2px solid #cbd5e1',
		}, // Ensure border is visible
	},
};

export const Filled: Story = {
	args: {
		kind: 'filled',
		title: 'Filled Card',
		content: 'This card uses a filled background.',
		style: { background: '#e0e7ef' }, // Ensure background is visible
	},
};

// --- Specialized kinds ---
export const Friend: Story = {
	render: (args) => (
		<Card
			kind='friend'
			friend={{
				id: mockFriends[0].id,
				username: mockFriends[0].name,
				avatar: 'https://picsum.photos/40/40',
				online: mockFriends[0].status === 'online',
				division: 'Gold',
				tier: 'II',
				inMatch: false,
				idle: false,
			}}
			onChallenge={() => {}}
			onMessage={() => {}}
			onRemove={() => {}}
			unreadCount={2}
			{...args}
		/>
	),
	args: {
		kind: 'friend',
		title: mockFriends[0].name,
		content: 'Online now',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Friend card: shows avatar, user info, division/tier, status, and actions.',
			},
		},
	},
};

export const Game: Story = {
	render: (args) => (
		<Card
			kind='game'
			title='Chess'
			content='Ranked Match - Ongoing'
			{...args}
		/>
	),
	args: {
		kind: 'game',
		title: 'Chess',
		content: 'Ranked Match - Ongoing',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Game card: displays game details, status, and actions.',
			},
		},
	},
};

export const Profile: Story = {
	render: (args) => (
		<Card
			kind='profile'
			profile={{
				...mockProfile,
				avatar: 'https://picsum.photos/40/40',
			}}
			{...args}
		/>
	),
	args: {
		kind: 'profile',
	},
	parameters: {
		docs: {
			disable: true, // Disable this heavy story from docs page
			description: {
				story:
					'Profile card: shows user profile info, avatar, and stats.',
			},
		},
	},
};

export const NotificationInfo: Story = {
	render: (args) => (
		<Card
			kind='notification'
			notificationType='info'
			title='Info'
			content='This is an info notification.'
			{...args}
		/>
	),
	args: { kind: 'notification', notificationType: 'info' },
	parameters: {
		docs: {
			description: { story: 'Info notification card.' },
		},
	},
};
export const NotificationWarning: Story = {
	render: (args) => (
		<Card
			kind='notification'
			notificationType='warning'
			title='Warning'
			content='This is a warning notification.'
			{...args}
		/>
	),
	args: {
		kind: 'notification',
		notificationType: 'warning',
		style: { background: '#fef3c7' },
	},
	parameters: {
		docs: {
			description: {
				story: 'Warning notification card with background.',
			},
		},
	},
};
export const NotificationError: Story = {
	render: (args) => (
		<Card
			kind='notification'
			notificationType='error'
			title='Error'
			content='This is an error notification.'
			{...args}
		/>
	),
	args: {
		kind: 'notification',
		notificationType: 'error',
		style: { background: '#fee2e2' },
	},
	parameters: {
		docs: {
			description: {
				story: 'Error notification card with background.',
			},
		},
	},
};
export const NotificationSuccess: Story = {
	render: (args) => (
		<Card
			kind='notification'
			notificationType='success'
			title='Success'
			content='This is a success notification.'
			{...args}
		/>
	),
	args: {
		kind: 'notification',
		notificationType: 'success',
		style: { background: '#dcfce7' },
	},
	parameters: {
		docs: {
			description: {
				story: 'Success notification card with background.',
			},
		},
	},
};

export const Stats: Story = {
	render: (args) => (
		<Card
			kind='stats'
			statValue={mockGameStats.totalGames}
			statLabel='Total Games'
			additionalStats={[
				{ label: 'Wins', value: mockGameStats.wins },
				{ label: 'Losses', value: mockGameStats.losses },
				{
					label: 'Win Rate',
					value: `${Math.round(mockGameStats.winRate * 100)}%`,
				},
				{
					label: 'Best Time',
					value: `${mockGameStats.bestTime}s`,
				},
				{
					label: 'Current Streak',
					value: mockGameStats.currentStreak,
				},
				{
					label: 'Perfect Games',
					value: mockGameStats.perfectGames,
				},
			]}
			{...args}
		/>
	),
	args: {
		kind: 'stats',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Stats card: shows a main stat and a list of additional stats.',
			},
		},
	},
};

export const Leaderboard: Story = {
	render: (args) => {
		return (
			<div
				style={{
					padding: '20px',
					minHeight: '100vh',
					backgroundColor: '#F8FAFC',
				}}
			>
				{/* Three size comparison in flex row */}
				<div
					style={{
						display: 'flex',
						gap: '24px',
						marginBottom: '32px',
					}}
				>
					{/* Small Size */}
					<div style={{ flex: 1 }}>
						<h3
							style={{
								textAlign: 'center',
								marginBottom: '16px',
								color: '#1F2937',
								fontSize: '18px',
								fontWeight: '600',
							}}
						>
							Small Size
						</h3>
						<div>
							<Card
								{...args}
								kind='leaderboard'
								leaderboard={leaderboardMock}
								size='small'
								title='🏆 Leaderboard'
								subtitle='Top players'
								style={{
									minHeight: '500px',
									boxShadow:
										'0 8px 32px rgba(0, 0, 0, 0.12)',
									border: '1px solid #E5E7EB',
									borderRadius: '16px',
									overflow: 'hidden',
									backgroundColor: '#FFFFFF',
									...args.style,
								}}
							/>
						</div>
					</div>

					{/* Medium Size */}
					<div style={{ flex: 1 }}>
						<h3
							style={{
								textAlign: 'center',
								marginBottom: '16px',
								color: '#1F2937',
								fontSize: '18px',
								fontWeight: '600',
							}}
						>
							Medium Size
						</h3>
						<div>
							<Card
								{...args}
								kind='leaderboard'
								leaderboard={leaderboardMock}
								size='medium'
								title='🏆 Global Leaderboard'
								subtitle='Top players this season'
								style={{
									minHeight: '600px',
									boxShadow:
										'0 10px 40px rgba(0, 0, 0, 0.13)',
									border: '1px solid #E5E7EB',
									borderRadius: '18px',
									overflow: 'hidden',
									backgroundColor: '#FFFFFF',
									...args.style,
								}}
							/>
						</div>
					</div>

					{/* Large Size */}
					<div style={{ flex: 1 }}>
						<h3
							style={{
								textAlign: 'center',
								marginBottom: '16px',
								color: '#1F2937',
								fontSize: '18px',
								fontWeight: '600',
							}}
						>
							Large Size
						</h3>
						<div>
							<Card
								{...args}
								kind='leaderboard'
								leaderboard={leaderboardMock}
								size='large'
								title='🏆 Global Leaderboard'
								subtitle='Top players this season • Scroll to see all rankings'
								style={{
									minHeight: '700px',
									boxShadow:
										'0 12px 48px rgba(0, 0, 0, 0.15)',
									border: '2px solid #E5E7EB',
									borderRadius: '20px',
									overflow: 'hidden',
									backgroundColor: '#FFFFFF',
									background:
										'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)',
									...args.style,
								}}
							/>
						</div>
					</div>
				</div>

				{/* Full Width Version */}
				<div style={{ width: '100%', margin: '0 -20px' }}>
					<h3
						style={{
							textAlign: 'center',
							marginBottom: '16px',
							color: '#1F2937',
							fontSize: '20px',
							fontWeight: '600',
							margin: '0 20px 16px 20px',
						}}
					>
						Full Width Leaderboard
					</h3>
					<div style={{ width: '100%' }}>
						<Card
							{...args}
							kind='leaderboard'
							leaderboard={leaderboardMock}
							title='🏆 Global Championship Leaderboard'
							subtitle='Top players this season • Real-time rankings'
							style={{
								minHeight: '600px',
								maxWidth: '100%',
								width: '100%',
								boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
								border: '1px solid #E5E7EB',
								borderRadius: '16px',
								overflow: 'hidden',
								backgroundColor: '#FFFFFF',
								background:
									'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)',
								...args.style,
							}}
						/>
					</div>
				</div>
			</div>
		);
	},
	args: {
		variant: 'elevated',
	},
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				story:
					'Beautiful leaderboard cards with multiple sizes showing the rich design with rank badges, avatars, stats, and hover effects.',
			},
		},
	},
};

export const Puzzle: Story = {
	render: (args) => (
		<Card
			kind='puzzle'
			puzzle={cardPuzzleData}
			{...args}
			style={{
				...args.style,
			}}
		/>
	),
	args: {
		kind: 'puzzle',
	},
	parameters: {
		docs: {
			disable: false, // Re-enable to show the updated puzzle card
			description: {
				story:
					'Puzzle card using the dedicated puzzle prop and built-in rendering.',
			},
		},
	},
};

export const UserStatus: Story = {
	render: (args) => (
		<Card
			kind='user-status'
			userStatus={userStatusMock}
			{...args}
		/>
	),
	args: {
		kind: 'user-status',
	},
	parameters: {
		docs: {
			disable: true, // Disable this heavy story from docs page
			description: {
				story:
					'User status card: shows avatar, name, online/offline status, and a status message.',
			},
		},
	},
};
// --- Size Variation Comparison Story ---
export const SizeComparison: Story = {
	render: (args) => (
		<div
			style={{
				display: 'flex',
				gap: 32,
				alignItems: 'flex-start',
			}}
		>
			<Card
				size='small'
				kind='default'
				title='Small Card'
				content='This is a small card.'
				{...args}
			/>
			<Card
				size='medium'
				kind='default'
				title='Medium Card'
				content='This is a medium card.'
				{...args}
			/>
			<Card
				size='large'
				kind='default'
				title='Large Card'
				content='This is a large card.'
				{...args}
			/>
		</div>
	),
	args: {
		// Default args for all
	},
	parameters: {
		docs: {
			description: {
				story:
					'All size variations (small, medium, large) are shown side by side for easy visual comparison.',
			},
		},
	},
};

// Custom card is already covered by default story

// Helper: convert mockFriends to correct shape for friend card
const friendMock = {
	id: '1',
	username: 'Alice Smith',
	avatar: 'https://picsum.photos/40/40',
	online: true,
	division: 'Gold',
	tier: 'III',
	inMatch: false,
	idle: false,
};

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
	'settings',
	'achievement',
	'puzzle',
	'leaderboard',
	'chat-preview',
	'room-info',
	'match-summary',
	'user-status',
	'custom',
] as ExtendedCardKind[];
const cardSizes = [
	'small',
	'medium',
	'large',
] as CardProps['size'][];

export const CardGallery = () => (
	<div
		style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}
	>
		{cardKinds.map((kind) =>
			cardSizes.map((size) => (
				<div
					key={`${kind}-${size}`}
					style={{ minWidth: 280 }}
				>
					<Card
						kind={kind}
						size={size}
						title={`${kind} (${size})`}
						content={`This is a ${kind} card.`}
						friend={
							kind === 'friend' ? friendMock : undefined
						}
						leaderboard={
							kind === 'leaderboard' ? leaderboardMock : (
								undefined
							)
						}
						// ...add more mock props as needed...
					/>
					<div
						style={{
							fontSize: 12,
							marginTop: 4,
							textAlign: 'center',
						}}
					>
						{kind} / {size}
					</div>
				</div>
			))
		)}
	</div>
);
CardGallery.storyName = 'All Variants Gallery';
