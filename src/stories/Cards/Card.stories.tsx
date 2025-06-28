import React from 'react';
import { Card } from '../../components/Card';
import { cardArgTypes as baseCardArgTypes } from '../config/argTypes';
import {
	mockFriends,
	mockGameStats,
	mockProfile,
} from '../mocks';
import type { Meta, StoryObj } from '@storybook/react';

const { children, className, variant, ...cardArgTypes } =
	baseCardArgTypes;

const meta: Meta<typeof Card> = {
	title: 'Cards/Card',
	component: Card,
	tags: ['autodocs'],
	argTypes: cardArgTypes,
	parameters: {
		docs: {
			description: {
				component: `\
**Card** is a flexible, composable component for grouping content, actions, or media.\n\n- Use the \`kind\` prop to select a specialized layout (e.g., friend, profile, notification, etc).\n- Use the style-only variants (default, elevated, outlined, filled) for generic cards.\n- See the table below for differences between each kind.\n- Where only data changes, stories are consolidated.\n- For advanced use, use the \`custom\` kind.\n\n**Difference between Card and UI:**\n- Card is a building block for UI, not the whole UI itself.\n- Card kinds provide ready-to-use layouts for common dashboard, list, and preview scenarios.\n        `,
			},
			// Enable lazy rendering for docs blocks
			story: { inline: false, lazy: true },
		},
	},
};
export default meta;

type Story = StoryObj<typeof Card>;

// --- Style-only variants ---
export const Default: Story = {
	args: {
		kind: 'default',
		title: 'Default Card',
		content:
			'This is a default card. Use for generic grouping.',
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
	render: (args) => (
		<Card
			kind='leaderboard'
			leaderboard={[
				{
					id: '1',
					name: 'Alice',
					score: 3200,
					avatar: 'https://picsum.photos/40/40?1',
				},
				{
					id: '2',
					name: 'Bob',
					score: 2950,
					avatar: 'https://picsum.photos/40/40?2',
				},
				{
					id: '3',
					name: 'Carol',
					score: 2780,
					avatar: 'https://picsum.photos/40/40?3',
				},
				{
					id: '4',
					name: 'David',
					score: 2600,
					avatar: 'https://picsum.photos/40/40?4',
				},
				{
					id: '5',
					name: 'Eve',
					score: 2500,
					avatar: 'https://picsum.photos/40/40?5',
				},
			]}
			{...args}
		/>
	),
	args: {
		kind: 'leaderboard',
	},
	parameters: {
		docs: {
			disable: true, // Disable this heavy story from docs page
			description: {
				story:
					'Leaderboard card: shows a ranked list with avatars, names, and scores.',
			},
		},
	},
};

export const Puzzle: Story = {
	render: (args) => (
		<Card
			kind='puzzle'
			puzzle={{
				id: 'p1',
				title: 'Logic Grid',
				img: 'https://picsum.photos/40/40',
				dateCreated: '2025-06-27',
				creator: 'PuzzleMaster',
			}}
			{...args}
		/>
	),
	args: {
		kind: 'puzzle',
	},
	parameters: {
		docs: {
			disable: true, // Disable this heavy story from docs page
			description: {
				story:
					'Puzzle card: shows an image at the top, then title, date, and creator.',
			},
		},
	},
};

export const UserStatus: Story = {
	render: (args) => (
		<Card
			kind='user-status'
			userStatus={{
				name: 'John Doe',
				avatar: 'https://picsum.photos/40/40',
				status: 'online',
				statusMessage: 'Ready to play!',
			}}
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

// Custom card is already covered by default story
