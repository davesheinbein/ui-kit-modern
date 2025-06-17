import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MatchChatWindow } from '../../components/MatchChatWindow';
import type { MatchChatWindowProps } from '../../components/MatchChatWindow/MatchChatWindow';

const meta: Meta<typeof MatchChatWindow> = {
	title: 'Chat/MatchChatWindow',
	component: MatchChatWindow,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A chat window component for match communications between players.',
			},
		},
	},
	argTypes: {
		messages: {
			control: false,
			description: 'Array of chat messages to display',
		},
		onSend: {
			action: 'messageSent',
			description: 'Function called when a message is sent',
		},
		currentUser: {
			control: 'text',
			description: 'ID of the current user',
		},
	},
};

export default meta;
type Story = StoryObj<typeof MatchChatWindow>;

const mockMessages = [
	{
		id: '1',
		text: 'Hello!',
		sender: 'user1',
		time: '10:30 AM',
	},
	{
		id: '2',
		text: 'Good luck!',
		sender: 'user2',
		time: '10:31 AM',
	},
	{
		id: '3',
		text: 'Thanks, you too!',
		sender: 'user1',
		time: '10:32 AM',
	},
];

export const Default: Story = {
	args: {
		messages: mockMessages,
		onSend: () => {},
		currentUser: 'user1',
	},
};

export const EmptyChat: Story = {
	args: {
		messages: [],
		onSend: () => {},
		currentUser: 'user1',
	},
};
