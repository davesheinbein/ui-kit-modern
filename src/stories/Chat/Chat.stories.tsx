import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChatFactory } from '../../components/Chat';

const meta: Meta<typeof ChatFactory> = {
	title: 'Chat/Chat',
	component: ChatFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'The ultimate DRY chat component. Single component handles ALL chat types through the "kind" prop. ' +
					'Supports friend chat, in-match chat, match chat, general chat, and VS quick chat with configuration-driven approach.',
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
			description: 'Callback when chat is closed (friend chat only)',
		},
		title: {
			control: 'text',
			description: 'Chat window title',
		},
		placeholder: {
			control: 'text',
			description: 'Input placeholder text',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether chat input is disabled',
		},
		maxLength: {
			control: {
				type: 'range',
				min: 50,
				max: 500,
				step: 10,
			},
			description: 'Maximum message length',
		},
		showTimestamps: {
			control: 'boolean',
			description: 'Whether to show message timestamps',
		},
		showOnlineStatus: {
			control: 'boolean',
			description: 'Whether to show user online status',
		},
		allowEmojis: {
			control: 'boolean',
			description: 'Whether to allow emoji input',
		},
		autoFocus: {
			control: 'boolean',
			description: 'Whether to auto-focus input on mount',
		},
		height: {
			control: {
				type: 'range',
				min: 200,
				max: 600,
				step: 20,
			},
			description: 'Chat window height in pixels',
		},
		variant: {
			control: 'select',
			options: ['default', 'compact', 'expanded', 'floating'],
			description: 'Visual variant of chat window',
		},
		theme: {
			control: 'select',
			options: ['light', 'dark', 'auto'],
			description: 'Color theme for chat',
		},
		avatar: {
			control: 'text',
			description: 'Avatar for chat (friend chat only)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof ChatFactory>;

// Sample message data
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

const friendMessages = [
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

const gameMessages = [
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

// Basic Chat Types
export const AllChatTypes: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gap: '2rem',
				gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
				padding: '1rem',
			}}
		>
			<div>
				<h3 style={{ marginBottom: '1rem' }}>Friend Chat</h3>
				<ChatFactory
					kind='friend'
					messages={friendMessages}
					currentUser='user123'
					title='Gaming Buddy'
					avatar='👤'
					onClose={() => console.log('Friend chat closed')}
				/>
			</div>
			<div>
				<h3 style={{ marginBottom: '1rem' }}>In-Match Chat</h3>
				<ChatFactory
					kind='in-match'
					messages={gameMessages}
					currentUser='alice'
				/>
			</div>
			<div>
				<h3 style={{ marginBottom: '1rem' }}>Match Chat</h3>
				<ChatFactory
					kind='match'
					messages={matchMessages}
					currentUser='player1'
				/>
			</div>
			<div>
				<h3 style={{ marginBottom: '1rem' }}>General Chat</h3>
				<ChatFactory
					kind='general'
					messages={sampleMessages}
					currentUser='user1'
				/>
			</div>
		</div>
	),
};

// Friend Chat Stories
export const FriendChat: Story = {
	args: {
		kind: 'friend',
		messages: friendMessages,
		currentUser: 'user123',
		title: 'John Doe',
		avatar: '👤',
	},
};

export const FriendChatEmpty: Story = {
	args: {
		kind: 'friend',
		messages: [],
		currentUser: 'user123',
		title: 'Jane Smith',
		avatar: '👩',
	},
};

export const FriendChatLongConversation: Story = {
	args: {
		kind: 'friend',
		messages: [
			...friendMessages,
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

// In-Match Chat Stories
export const InMatchChat: Story = {
	args: {
		kind: 'in-match',
		messages: gameMessages,
		currentUser: 'alice',
	},
};

export const InMatchChatEmpty: Story = {
	args: {
		kind: 'in-match',
		messages: [],
		currentUser: 'alice',
	},
};

export const InMatchChatWithGameplay: Story = {
	args: {
		kind: 'in-match',
		messages: [
			...gameMessages,
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

// Match Chat Stories
export const MatchChat: Story = {
	args: {
		kind: 'match',
		messages: matchMessages,
		currentUser: 'player1',
	},
};

export const MatchChatEmpty: Story = {
	args: {
		kind: 'match',
		messages: [],
		currentUser: 'player1',
	},
};

export const MatchChatPostGame: Story = {
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

// General Chat Stories
export const GeneralChat: Story = {
	args: {
		kind: 'general',
		messages: sampleMessages,
		currentUser: 'user1',
	},
};

export const GeneralChatEmpty: Story = {
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

// VS Quick Chat Stories
export const VSQuickChat: Story = {
	args: {
		kind: 'vs-quick-chat',
		onSend: (message: string) => console.log('Quick chat sent:', message),
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

// Chat Variants and Interactive Demos
export const ChatVariantsShowcase: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gap: '1.5rem',
				gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
				padding: '1rem',
			}}
		>
			<div>
				<h4 style={{ marginBottom: '0.5rem' }}>Friend Chat - Online</h4>
				<ChatFactory
					kind='friend'
					messages={friendMessages.slice(0, 2)}
					currentUser='user123'
					title='Alice (Online)'
					avatar='🟢'
				/>
			</div>
			<div>
				<h4 style={{ marginBottom: '0.5rem' }}>In-Match - Active Game</h4>
				<ChatFactory
					kind='in-match'
					messages={[
						...gameMessages.slice(0, 2),
						{
							id: '99',
							sender: 'system',
							text: 'Round 3 started!',
							time: '10:05',
							type: 'system',
						},
					]}
					currentUser='alice'
				/>
			</div>
			<div>
				<h4 style={{ marginBottom: '0.5rem' }}>Match Chat - Completed</h4>
				<ChatFactory
					kind='match'
					messages={[
						...matchMessages.slice(0, 2),
						{
							id: '98',
							sender: 'system',
							text: 'Player1 wins!',
							time: '3:49 PM',
							type: 'system',
						},
					]}
					currentUser='player1'
				/>
			</div>
			<div>
				<h4 style={{ marginBottom: '0.5rem' }}>General - Community Chat</h4>
				<ChatFactory
					kind='general'
					messages={[
						{
							id: '97',
							text: 'Welcome to the community!',
							sender: 'moderator',
							time: '4:00 PM',
						},
						{
							id: '96',
							text: 'Thanks! Happy to be here.',
							sender: 'user1',
							time: '4:01 PM',
						},
					]}
					currentUser='user1'
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Showcase of different chat variants and their typical use cases.',
			},
		},
	},
};
