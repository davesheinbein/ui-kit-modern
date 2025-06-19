import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UnifiedCard } from '../../components/Card';

const meta: Meta<typeof UnifiedCard> = {
	title: 'Cards/FriendCard (Cards)',
	component: UnifiedCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Friend card integrated into the unified card system. ' +
					'Displays friend information, status, and action buttons using the DRY card architecture.',
			},
		},
	},
	argTypes: {
		friend: {
			control: 'object',
			description:
				'Friend object containing user information',
		},
		onChallenge: {
			action: 'challenge',
			description:
				'Function called when challenge button is clicked',
		},
		onMessage: {
			action: 'message',
			description:
				'Function called when message button is clicked',
		},
		onRemove: {
			action: 'remove',
			description:
				'Function called when remove button is clicked',
		},
		unreadCount: {
			control: 'number',
			description: 'Number of unread messages',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedCard>;

export const Default: Story = {
	args: {
		kind: 'friend',
		friend: {
			id: '1',
			username: 'JaneDoe',
			online: true,
			division: 'Gold',
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
		unreadCount: 2,
	},
};

export const OnlineFriend: Story = {
	args: {
		kind: 'friend',
		friend: {
			id: '2',
			username: 'AliceGamer',
			online: true,
			division: 'Diamond',
			tier: 'I',
			inMatch: false,
			idle: false,
		},
		onChallenge: (id: string) =>
			console.log('Challenge friend:', id),
		onMessage: (id: string) =>
			console.log('Message friend:', id),
		onRemove: (id: string) =>
			console.log('Remove friend:', id),
		unreadCount: 0,
	},
};

export const InMatchFriend: Story = {
	args: {
		kind: 'friend',
		friend: {
			id: '3',
			username: 'BobPlayer',
			online: true,
			division: 'Silver',
			tier: 'III',
			inMatch: true,
			idle: false,
		},
		onChallenge: (id: string) =>
			console.log('Challenge friend:', id),
		onMessage: (id: string) =>
			console.log('Message friend:', id),
		onRemove: (id: string) =>
			console.log('Remove friend:', id),
		unreadCount: 0,
	},
};

export const IdleFriend: Story = {
	args: {
		kind: 'friend',
		friend: {
			id: '4',
			username: 'CharlieAFK',
			online: true,
			division: 'Bronze',
			tier: 'I',
			inMatch: false,
			idle: true,
		},
		onChallenge: (id: string) =>
			console.log('Challenge friend:', id),
		onMessage: (id: string) =>
			console.log('Message friend:', id),
		onRemove: (id: string) =>
			console.log('Remove friend:', id),
		unreadCount: 5,
	},
};

export const OfflineFriend: Story = {
	args: {
		kind: 'friend',
		friend: {
			id: '5',
			username: 'DaveOffline',
			online: false,
			division: 'Gold',
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
		unreadCount: 1,
	},
};
