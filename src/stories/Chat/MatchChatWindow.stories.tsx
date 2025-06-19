import type { Meta, StoryObj } from '@storybook/react';
import { ChatFactory } from '../../components/Chat';

const meta: Meta<typeof ChatFactory> = {
	title: 'Chat/MatchChatWindow (Chat)',
	component: ChatFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Match chat window using the DRY Chat system. Displays a chat interface for match communications between players.',
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

const matchMessages = [
	{
		id: '1',
		sender: 'player1',
		text: 'Good game!',
		time: '3:45 PM',
	},
	{
		id: '2',
		sender: 'player2',
		text: 'Thanks! You too!',
		time: '3:46 PM',
	},
	{
		id: '3',
		sender: 'player1',
		text: 'Want a rematch?',
		time: '3:47 PM',
	},
	{
		id: '4',
		sender: 'player2',
		text: "Sure, let's do it!",
		time: '3:48 PM',
	},
];

export const Default: Story = {
	args: {
		kind: 'match',
		messages: matchMessages,
		currentUser: 'player1',
	},
};

export const EmptyMatch: Story = {
	args: {
		kind: 'match',
		messages: [],
		currentUser: 'player1',
	},
};

export const PostGameChat: Story = {
	args: {
		kind: 'match',
		messages: [
			...matchMessages,
			{
				id: '5',
				sender: 'system',
				text: 'Match completed!',
				time: '3:50 PM',
				type: 'system',
			},
			{
				id: '6',
				sender: 'player1',
				text: 'Great strategy on that last round',
				time: '3:51 PM',
			},
			{
				id: '7',
				sender: 'player2',
				text: 'Thank you! I was nervous',
				time: '3:52 PM',
			},
		],
		currentUser: 'player1',
	},
};
