import React from 'react';
import { InMatchChatWindow } from '../../components/InMatchChatWindow';
import type { InMatchChatWindowProps } from '../../components/InMatchChatWindow/InMatchChatWindow';

export default {
	title: 'Chat/InMatchChatWindow',
	component: InMatchChatWindow,
	parameters: {
		docs: {
			description: {
				component:
					'InMatchChatWindow displays a chat interface for in-match communication. It shows messages, allows sending, and highlights the current user.',
			},
			autodocs: true,
		},
	},
	tags: ['autodocs'],
	argTypes: {
		messages: {
			description:
				'Array of chat messages, each with id, text, sender, and time.',
			control: 'object',
		},
		onSend: {
			action: 'send',
			description: 'Callback when a message is sent.',
		},
		currentUser: { description: 'The current user ID.' },
	},
};

const baseMessages: InMatchChatWindowProps['messages'] = [
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
];

export const Empty = (args: InMatchChatWindowProps) => (
	<InMatchChatWindow {...args} />
);
Empty.args = {
	messages: [],
	onSend: () => {},
	currentUser: 'alice',
};
Empty.storyName = 'Empty Chat';

export const WithMessages = (
	args: InMatchChatWindowProps
) => <InMatchChatWindow {...args} />;
WithMessages.args = {
	messages: baseMessages,
	onSend: () => {},
	currentUser: 'alice',
};
WithMessages.storyName = 'With Messages';

export const AsOtherUser = (
	args: InMatchChatWindowProps
) => <InMatchChatWindow {...args} />;
AsOtherUser.args = {
	messages: baseMessages,
	onSend: () => {},
	currentUser: 'bob',
};
AsOtherUser.storyName = 'As Other User';

export const SystemMessage = (
	args: InMatchChatWindowProps
) => <InMatchChatWindow {...args} />;
SystemMessage.args = {
	messages: [
		...baseMessages,
		{
			id: '4',
			sender: 'system',
			text: 'Game will start soon.',
			time: '10:03',
		},
	],
	onSend: () => {},
	currentUser: 'alice',
};
SystemMessage.storyName = 'With System Message';
