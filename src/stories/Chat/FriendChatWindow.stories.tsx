import type { Meta, StoryObj } from '@storybook/react';
import { ChatFactory } from '../../components/Chat';

const meta: Meta<typeof ChatFactory> = {
	title: 'Chat/FriendChatWindow (Chat)',
	component: ChatFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Friend chat window using the DRY Chat system. Displays a fixed position chat window for friend conversations.',
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
		onClose: {
			action: 'chatClosed',
			description: 'Callback when chat is closed',
		},
	},
};

export default meta;
type Story = StoryObj<typeof ChatFactory>;

const mockMessages = [
	{
		id: '1',
		text: 'Hey! Want to play a game?',
		sender: 'friend123',
		time: '2:30 PM',
	},
	{
		id: '2',
		text: 'Sure! Let me finish this round first.',
		sender: 'user123',
		time: '2:31 PM',
	},
	{
		id: '3',
		text: 'No problem, take your time!',
		sender: 'friend123',
		time: '2:31 PM',
	},
];

export const Default: Story = {
	args: {
		kind: 'friend',
		messages: mockMessages,
		currentUser: 'user123',
		title: 'John Doe',
		avatar: '👤',
	},
};

export const EmptyChat: Story = {
	args: {
		kind: 'friend',
		messages: [],
		currentUser: 'user123',
		title: 'Jane Smith',
		avatar: '👩',
	},
};

export const LongConversation: Story = {
	args: {
		kind: 'friend',
		messages: [
			...mockMessages,
			{
				id: '4',
				text: 'I just beat my personal best!',
				sender: 'friend123',
				time: '2:32 PM',
			},
			{
				id: '5',
				text: "That's awesome! What was your score?",
				sender: 'user123',
				time: '2:32 PM',
			},
			{
				id: '6',
				text: '1250 points in under 3 minutes',
				sender: 'friend123',
				time: '2:33 PM',
			},
		],
		currentUser: 'user123',
		title: 'Gaming Buddy',
		avatar: '🎮',
	},
};
