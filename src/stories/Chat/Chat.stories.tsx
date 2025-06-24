import React from 'react';
import { Wrapper } from '../../components/Wrappers';
import type { Meta, StoryObj } from '@storybook/react';
import { Chat } from '../../components/Chat';

const meta: Meta<typeof Chat> = {
	title: 'Chat/Chat',
	component: Chat,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Unified <Chat> component: Render any chat variant (friend, in-match, match, general, vs-quick-chat) by passing the appropriate kind prop.\n\n' +
					'Example usage:' +
					'\n\n' +
					'<Chat kind="friend" messages={friendMessages} currentUser="user123" />\n' +
					'<Chat kind="in-match" messages={gameMessages} currentUser="alice" />\n' +
					'<Chat kind="vs-quick-chat" onSend={handleQuickSend} />\n\n' +
					'All configuration and UI is handled automatically based on the kind you provide.',
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
			options: [
				'default',
				'compact',
				'expanded',
				'floating',
			],
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
type Story = StoryObj<typeof Chat>;

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
		text: 'Oh Naur',
		time: '10:01',
	},
	{
		id: '3',
		sender: 'alice',
		text: "Oh, no, no, no, no, no, no, no, no, Cleo, no, please, Cleo, no, no, no, no. Well, I just thought I\'\d let you know. Go. Bye, Louis. No, no",
		time: '10:02',
	},
	{
		id: '4',
		sender: 'bob',
		text: "Let's doo this!",
		time: '10:03',
	},
	{
		id: '5',
		sender: 'bob',
		text: "Do this!",
		time: '10:04',
	},
	{
		id: '6',
		sender: 'alice',
		text: "Let's do this!",
		time: '10:05',
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

// Modernized grid wrapper for all chat stories
const StoryGrid: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => (
	<div
		className='wrapper wrapper--elevated'
		style={{
			background:
				'linear-gradient(135deg, var(--bg-surface) 60%, var(--accent-blue-50) 100%)',
			padding: '2rem',
			minHeight: '100vh',
			display: 'grid',
			gap: '2rem',
			gridTemplateColumns:
				'repeat(auto-fit, minmax(340px, 1fr))',
			alignItems: 'start',
		}}
	>
		{children}
	</div>
);

// Basic Chat Types
export const AllChatTypes: Story = {
	render: () => (
		<StoryGrid>
			<div className='wrapper wrapper--elevated'>
				<Chat
					kind='friend'
					messages={friendMessages}
					currentUser='user123'
					title='Gaming Buddy'
					avatar='👤'
					onClose={() => console.log('Friend chat closed')}
				/>
			</div>
			<div className='wrapper wrapper--elevated'>
				<Chat
					kind='in-match'
					messages={gameMessages}
					currentUser='alice'
				/>
			</div>
			<div className='wrapper wrapper--elevated'>
				<Chat
					kind='match'
					messages={matchMessages}
					currentUser='player1'
				/>
			</div>
			<div className='wrapper wrapper--elevated'>
				<Chat
					kind='general'
					messages={sampleMessages}
					currentUser='user1'
				/>
			</div>
		</StoryGrid>
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

// Chat Variants and Interactive Demos
export const ChatVariantsShowcase: Story = {
	render: () => (
		<StoryGrid>
			<div className='wrapper wrapper--elevated'>
				<Chat
					kind='friend'
					messages={friendMessages.slice(0, 2)}
					currentUser='user123'
					title='Alice (Online)'
					avatar='🟢'
				/>
			</div>
			<div className='wrapper wrapper--elevated'>
				<Chat
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
			<div className='wrapper wrapper--elevated'>
				<Chat
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
		</StoryGrid>
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

// Add a dynamic story to demonstrate switching chat kinds
export const DynamicChatKind: Story = {
	render: (args) => {
		const [kind, setKind] =
			React.useState<keyof typeof messagesMap>('friend');
		const kinds = [
			{ label: 'Friend', value: 'friend' },
			{ label: 'In-Match', value: 'in-match' },
			{ label: 'Match', value: 'match' },
			{ label: 'General', value: 'general' },
			{ label: 'VS Quick Chat', value: 'vs-quick-chat' },
		];
		const messagesMap = {
			'friend': friendMessages,
			'in-match': gameMessages,
			'match': matchMessages,
			'general': sampleMessages,
			'vs-quick-chat': [],
		};
		return (
			<div style={{ maxWidth: 400 }}>
				<div style={{ marginBottom: 16 }}>
					{kinds.map((k) => (
						<button
							key={k.value}
							onClick={() =>
								setKind(k.value as keyof typeof messagesMap)
							}
							style={{
								marginRight: 8,
								padding: '6px 12px',
								borderRadius: 6,
								border:
									kind === k.value ?
										'2px solid #2563eb'
									:	'1px solid #ccc',
								background:
									kind === k.value ? '#e0e7ff' : '#fff',
								cursor: 'pointer',
							}}
						>
							{k.label}
						</button>
					))}
				</div>
				<Chat
					{...args}
					kind={kind}
					messages={messagesMap[kind]}
					currentUser={
						kind === 'friend' ? 'user123'
						: kind === 'in-match' ?
							'alice'
						: kind === 'match' ?
							'player1'
						:	'user1'
					}
					title={
						kind === 'friend' ? 'Friend Chat'
						: kind === 'in-match' ?
							'In-Match Chat'
						: kind === 'match' ?
							'Match Chat'
						: kind === 'general' ?
							'General Chat'
						:	'VS Quick Chat'
					}
					avatar={kind === 'friend' ? '👤' : undefined}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Switch between any chat kind using the same <Chat> component. This demonstrates the unified, configuration-driven API.',
			},
		},
	},
};
