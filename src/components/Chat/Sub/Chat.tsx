import React, { forwardRef, useState } from 'react';
import ChatContainer from './ChatContainer';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ChatQuickOptions from './ChatQuickOptions';
import { ChatProps } from './types';
import { CHAT_CONFIGURATIONS } from '../configurations';

const Chat = forwardRef<HTMLDivElement, ChatProps>(
	(props, ref) => {
		const {
			kind = 'general',
			messages = [],
			currentUser = '',
			onSend,
			children,
			position,
			title,
			showCloseButton,
			showHeader,
			avatar,
			onClose,
			className = '',
			showInput,
			...rest
		} = props;

		const config =
			CHAT_CONFIGURATIONS[
				kind as keyof typeof CHAT_CONFIGURATIONS
			] ?? CHAT_CONFIGURATIONS['chat'];

		const mergedPosition =
			position ?? config.position ?? 'relative';
		const mergedTitle = title ?? config.title;
		const mergedShowCloseButton =
			showCloseButton ?? config.showCloseButton ?? false;
		const mergedShowHeader =
			showHeader ?? config.showHeader ?? true;
		const mergedAvatar = avatar ?? config.avatar;
		const mergedShowInput =
			showInput ?? config.showInput ?? true;

		const [input, setInput] = useState('');
		const [localMessages, setLocalMessages] =
			useState(messages);

		const handleSend = (msg?: string) => {
			const messageToSend = msg ?? input.trim();
			if (messageToSend && onSend) {
				onSend(messageToSend);
				setInput('');
			}
			if (messageToSend) {
				setLocalMessages([
					...localMessages,
					{
						id: `${Date.now()}`,
						text: messageToSend,
						sender: currentUser || 'You',
						time: new Date().toLocaleTimeString([], {
							hour: '2-digit',
							minute: '2-digit',
						}),
						type: 'self',
					},
				]);
			}
		};

		// Quick chat options
		const quickOptions =
			kind === 'quick-chat' && config.quickOptions ?
				config.quickOptions
			:	[];

		return (
			<ChatContainer
				ref={ref}
				className={`wrapper chat--${kind} chat--${mergedPosition} ${className}`}
				{...rest}
			>
				{mergedShowHeader &&
					(mergedTitle ||
						mergedShowCloseButton ||
						mergedAvatar) && (
						<ChatHeader
							title={mergedTitle}
							avatar={mergedAvatar}
							showCloseButton={mergedShowCloseButton}
							onClose={onClose}
						/>
					)}
				<div className='chatContent'>
					<ChatMessages
						messages={localMessages}
						currentUser={currentUser}
					/>
					{children}
				</div>
				{kind === 'quick-chat' &&
					quickOptions.length > 0 && (
						<ChatQuickOptions
							options={quickOptions}
							onSend={handleSend}
						/>
					)}
				{mergedShowInput !== false && (
					<ChatInput onSend={handleSend} />
				)}
			</ChatContainer>
		);
	}
);

Chat.displayName = 'Chat';
export default Chat;
