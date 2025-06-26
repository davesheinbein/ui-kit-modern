import React from 'react';
import {
	Card,
	ActionCard,
	ContentCard,
	NotificationCard,
	FriendCard,
} from '../../components/Card';
import { commonDecorators } from '../config/decorators';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
	title: 'Cards/Card',
	component: Card,
	decorators: commonDecorators,
	tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Card>;

// Alphabetized stories
export const Action: Story = {
	render: () => (
		<ActionCard
			title='Action Card'
			content='This card is clickable and has hover.'
			onClick={() => alert('Clicked!')}
		/>
	),
};

export const Content: Story = {
	render: () => (
		<ContentCard
			title='Content Card'
			content='This card uses the outlined style.'
		/>
	),
};

// Example of using the createCard helper directly
export const CustomHelper: Story = {
	render: () =>
		createCard('profile', {
			title: 'Profile (helper)',
			content: 'Created with createCard.',
		}),
};

export const Default: Story = {
	args: {
		title: 'Default Card',
		content: 'This is a default card.',
		kind: 'default',
	},
};

export const Elevated: Story = {
	args: {
		title: 'Elevated Card',
		content: 'This card uses the elevated variant.',
		kind: 'elevated',
	},
};

export const Filled: Story = {
	args: {
		title: 'Filled Card',
		content: 'This card uses the filled variant.',
		kind: 'filled',
	},
};

export const Friend: Story = {
	render: () => (
		<FriendCard
			friend={{
				id: '1',
				username: 'Jane Doe',
				online: true,
				division: 'Gold',
				tier: 'II',
				inMatch: false,
				idle: false,
			}}
			onChallenge={() => alert('Challenge!')}
			onMessage={() => alert('Message!')}
			onRemove={() => alert('Remove!')}
			unreadCount={2}
		/>
	),
};

export const Notification: Story = {
	render: () => (
		<NotificationCard
			title='System Alert'
			subtitle='This is a notification card.'
			content='Something important happened.'
			notificationType='warning'
			actions={[]}
		/>
	),
};

export const Stats: Story = {
	render: () => (
		<StatsCard statValue={42} statLabel='Wins' />
	),
};

export const Game: Story = {
	render: () => (
		<GameCard title='Chess' content='Classic board game.' />
	),
};

export const Info: Story = {
	render: () => (
		<InfoCard
			title='Info Card'
			content='This is an info card with hover.'
		/>
	),
};

export const Outlined: Story = {
	args: {
		title: 'Outlined Card',
		content: 'This card uses the outlined variant.',
		kind: 'outlined',
	},
};
