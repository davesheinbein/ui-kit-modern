import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FriendCard, FriendCardProps } from '../../components/FriendCard';

const meta: Meta<typeof FriendCard> = {
	title: 'Cards/FriendCard',
	component: FriendCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: 'Component description to be updated.',
			},
		},
	},
	argTypes: {
		// Add argTypes here
	},
};

export default meta;
type Story = StoryObj<typeof FriendCard>;

const Template = (args: FriendCardProps) => <FriendCard {...args} />;

export const Default: Story = {
	args: {},
};
Default.args = {
  friend: {
    id: '1',
    username: 'JaneDoe',
    online: true,
    division: 'Gold',
    tier: 'II',
    inMatch: false,
    idle: false,
  },
  onChallenge: () => alert('Challenge!'),
  onMessage: () => alert('Message!'),
  onRemove: () => alert('Remove!'),
  unreadCount: 2,
};
