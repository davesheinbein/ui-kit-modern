import React from 'react';
import { Chat } from '../../components/Chat';
import type { Meta, StoryObj } from '@storybook/react';

const demoMessages = [
	{
		id: '1',
		text: 'Hello!',
		sender: 'Alice',
		time: '10:00',
		type: 'friend',
	},
	{
		id: '2',
		text: 'Hi Alice!',
		sender: 'Bob',
		time: '10:01',
		type: 'self',
	},
	{
		id: '3',
		text: 'Welcome to the chat.',
		sender: 'system',
		time: '10:02',
		type: 'system',
	},
];

const meta: Meta<typeof Chat> = {
	title: 'Chat/Chat',
	component: Chat,
	tags: ['autodocs'],
	args: {
		messages: demoMessages,
		currentUser: 'Bob',
	},
	argTypes: {
		onSend: { action: 'send', control: false },
	},
};
export default meta;

type Story = StoryObj<typeof Chat>;

export const ChatStory: Story = {
	args: {
		kind: 'chat',
		title: 'Chat',
		showCloseButton: true,
	},
};

export const QuickChat: Story = {
	args: {
		kind: 'quick-chat',
		title: 'Quick Chat',
		showCloseButton: false,
	},
};
