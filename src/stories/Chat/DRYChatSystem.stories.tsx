import type { Meta, StoryObj } from '@storybook/react';
import { ChatFactory } from '../../components/Chat';

const meta: Meta<typeof ChatFactory> = {
	title: 'Chat/Playground (Chat)',
	component: ChatFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Comprehensive demonstration of the DRY Chat system. This factory-based approach allows creating any chat type with minimal configuration.',
			},
		},
	},
	argTypes: {
		kind: {
			control: { type: 'select' },
			options: [
				'friend',
				'in-match',
				'match',
				'general',
				'vs-quick-chat',
			],
			description: 'Chat type to render',
		},
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
			description:
				'Callback when chat is closed (friend chat only)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof ChatFactory>;

const sampleMessages = [
	{
		id: '1',
		text: 'Hello there!',
		sender: 'user1',
		time: '2:30 PM',
	},
	{
		id: '2',
		text: 'Hi! How are you?',
		sender: 'user2',
		time: '2:31 PM',
	},
	{
		id: '3',
		text: "I'm doing great, thanks!",
		sender: 'user1',
		time: '2:32 PM',
	},
];

export const AllChatTypes: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gap: '2rem',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(300px, 1fr))',
			}}
		>
			<div>
				<h3>Friend Chat</h3>
				<ChatFactory
					kind='friend'
					messages={sampleMessages}
					currentUser='user1'
					title='Friend'
					avatar='👤'
					onClose={() => console.log('Friend chat closed')}
				/>
			</div>
			<div>
				<h3>In-Match Chat</h3>
				<ChatFactory
					kind='in-match'
					messages={sampleMessages}
					currentUser='user1'
				/>
			</div>
			<div>
				<h3>Match Chat</h3>
				<ChatFactory
					kind='match'
					messages={sampleMessages}
					currentUser='user1'
				/>
			</div>
			<div>
				<h3>General Chat</h3>
				<ChatFactory
					kind='general'
					messages={sampleMessages}
					currentUser='user1'
				/>
			</div>
		</div>
	),
};

export const FriendChat: Story = {
	args: {
		kind: 'friend',
		messages: sampleMessages,
		currentUser: 'user1',
		title: 'Best Friend',
		avatar: '👫',
	},
};

export const InMatchChat: Story = {
	args: {
		kind: 'in-match',
		messages: [
			...sampleMessages,
			{
				id: '4',
				text: 'Nice move!',
				sender: 'user2',
				time: '2:33 PM',
			},
			{
				id: '5',
				text: 'Thanks! Your turn.',
				sender: 'user1',
				time: '2:34 PM',
			},
		],
		currentUser: 'user1',
	},
};

export const MatchChat: Story = {
	args: {
		kind: 'match',
		messages: [
			{
				id: '1',
				text: 'Good game!',
				sender: 'player1',
				time: '3:45 PM',
			},
			{
				id: '2',
				text: 'You too! Close one.',
				sender: 'player2',
				time: '3:46 PM',
			},
			{
				id: '3',
				text: 'Match completed! Winner: player1',
				sender: 'system',
				time: '3:47 PM',
				type: 'system',
			},
		],
		currentUser: 'player1',
	},
};

export const EmptyChat: Story = {
	args: {
		kind: 'general',
		messages: [],
		currentUser: 'user1',
		placeholder: 'Start a conversation...',
	},
};

export const SystemMessages: Story = {
	args: {
		kind: 'general',
		messages: [
			{
				id: '1',
				text: 'Welcome to the chat!',
				sender: 'system',
				time: '1:00 PM',
				type: 'system',
			},
			{
				id: '2',
				text: 'Thanks! Happy to be here.',
				sender: 'user1',
				time: '1:01 PM',
			},
			{
				id: '3',
				text: 'New user joined the room',
				sender: 'system',
				time: '1:02 PM',
				type: 'system',
			},
		],
		currentUser: 'user1',
	},
};

export const VSQuickChat: Story = {
	args: {
		kind: 'vs-quick-chat',
		onSend: (message: string) =>
			console.log('Quick chat sent:', message),
	},
	parameters: {
		docs: {
			description: {
				story:
					'VS Quick Chat for rapid communication during gaming sessions. Provides predefined message buttons for common phrases.',
			},
		},
	},
};
