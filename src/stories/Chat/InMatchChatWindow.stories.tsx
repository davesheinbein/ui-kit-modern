import type { Meta, StoryObj } from '@storybook/react';
import { ChatFactory } from '../../components/Chat';

const meta: Meta<typeof ChatFactory> = {
	title: 'Chat/InMatchChatWindow (Chat)',
	component: ChatFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'In-match chat window using the DRY Chat system. Displays a chat interface for in-game communication between players.',
			},
		},
	},
	argTypes: {
		messages: {
			control: 'object',
			description: 'Array of chat messages to display',
		},
		currentUser: {
			control: 'text',
			description: 'Current user ID for message styling',
		},
		onSend: {
			action: 'messageSent',
			description: 'Callback when a message is sent',
		},
	},
};

export default meta;
type Story = StoryObj<typeof ChatFactory>;

const baseMessages = [
	{
		id: '1',
		sender: 'alice',
		text: 'Hello!',
		time: '10:00',
	},
	{
		id: '2',
		sender: 'bob',
		text: 'Hi Alice!',
		time: '10:01',
	},
	{
		id: '3',
		sender: 'alice',
		text: 'Ready to play?',
		time: '10:02',
	},
	{
		id: '4',
		sender: 'bob',
		text: "Let's do this!",
		time: '10:03',
	},
];

export const Default: Story = {
	args: {
		kind: 'in-match',
		messages: baseMessages,
		currentUser: 'alice',
	},
};

export const EmptyChat: Story = {
	args: {
		kind: 'in-match',
		messages: [],
		currentUser: 'alice',
	},
};

export const GameChat: Story = {
	args: {
		kind: 'in-match',
		messages: [
			...baseMessages,
			{
				id: '5',
				sender: 'alice',
				text: 'Nice move!',
				time: '10:05',
			},
			{
				id: '6',
				sender: 'bob',
				text: 'Thanks! Your turn.',
				time: '10:06',
			},
			{
				id: '7',
				sender: 'system',
				text: 'Alice found a word!',
				time: '10:07',
				type: 'system',
			},
		],
		currentUser: 'alice',
	},
};
