import React from 'react';
import { ChatMessage } from './types';

interface ChatMessagesProps {
	messages: ChatMessage[];
	currentUser?: string;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
	messages,
	currentUser,
}) => (
	<div className='chatMessages'>
		{messages.map((msg) => (
			<div
				key={msg.id}
				className={
					'chatMessage ' +
					((
						msg.type === 'self' ||
						msg.sender === currentUser
					) ?
						'chatMessageSelf'
					: msg.type === 'system' ? 'chatMessageSystem'
					: 'chatMessageFriend')
				}
			>
				<span className='chatMessageText'>{msg.text}</span>
				<span className='chatMessageTime'>{msg.time}</span>
			</div>
		))}
	</div>
);

export default ChatMessages;
