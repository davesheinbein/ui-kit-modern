import React, { forwardRef, useState } from 'react';
import { Wrapper } from '../Wrappers';
import styles from './chat.module.scss';
import { Button } from '../Button';
import {
	ChatKind,
	CHAT_CONFIGURATIONS,
} from './configurations';

export interface ChatProps {
	kind?: ChatKind;
	messages?: Array<{
		id: string;
		text: string;
		sender: string;
		time: string;
		type?: 'self' | 'friend' | 'system';
	}>;
	currentUser?: string;
	onSend?: (message: string) => void;

	children?: React.ReactNode;
	position?: 'fixed' | 'relative' | 'absolute';
	title?: string;
	showCloseButton?: boolean;
	showHeader?: boolean;
	avatar?: React.ReactNode;

	onClose?: () => void;
	className?: string;
	showInput?: boolean;
	[key: string]: any;
}

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
			] ?? CHAT_CONFIGURATIONS['general'];

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

		const chatClasses = [
			styles.chat,
			'wrapper',
			styles[`chat--${kind}`],
			styles[`chat--${mergedPosition}`],
			className,
		]
			.filter(Boolean)
			.join(' ');

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

		const handleInputKeyDown = (
			e: React.KeyboardEvent<HTMLInputElement>
		) => {
			if (e.key === 'Enter') {
				handleSend();
			}
		};

		// Quick chat options (emojis in pills)
		const quickOptions =
			kind === 'quick-chat' && config.quickOptions ?
				config.quickOptions
			:	[];

		return (
			<Wrapper ref={ref} className={chatClasses} {...rest}>
				{mergedShowHeader &&
					(mergedTitle ||
						mergedShowCloseButton ||
						mergedAvatar) && (
						<Wrapper className={styles.chatHeader}>
							{mergedAvatar && (
								<Wrapper className={styles.chatAvatar}>
									{mergedAvatar}
								</Wrapper>
							)}
							{mergedTitle && (
								<Wrapper className={styles.chatTitle}>
									{mergedTitle}
								</Wrapper>
							)}
							{mergedShowCloseButton && onClose && (
								<Button kind='close' onClick={onClose} />
							)}
						</Wrapper>
					)}
				<Wrapper className={styles.chatContent}>
					{/* Render messages */}
					{localMessages.length > 0 ?
						<Wrapper className={styles.chatMessages}>
							{localMessages.map(
								(msg: {
									id: string;
									text: string;
									sender: string;
									time: string;
									type?: 'self' | 'friend' | 'system';
								}) => {
									const isSelf =
										msg.sender === currentUser ||
										msg.type === 'self';
									const isSystem = msg.type === 'system';
									const msgClass =
										isSystem ? styles.chatMessageSystem
										: isSelf ? styles.chatMessageSelf
										: styles.chatMessageFriend;
									return (
										<Wrapper
											key={msg.id}
											className={`${styles.chatMessage} ${msgClass}`}
										>
											<span
												className={styles.chatMessageText}
											>
												{msg.text}
											</span>
											<span
												className={styles.chatMessageTime}
											>
												{msg.time}
											</span>
										</Wrapper>
									);
								}
							)}
						</Wrapper>
					:	<Wrapper
							style={{
								color: '#888',
								textAlign: 'center',
								marginTop: '2rem',
							}}
						>
							No messages yet.
						</Wrapper>
					}
					{children}
				</Wrapper>
				{/* Quick chat pills - moved above input, use primary button */}
				{kind === 'quick-chat' &&
					quickOptions.length > 0 && (
						<Wrapper
							className={
								styles.vsQuickChatBar +
								' ' +
								styles['vsQuickChatBar--spaced']
							}
						>
							{quickOptions.map((option, idx) => (
								<Button
									key={option}
									kind='primary'
									className={styles.vsQuickChatButton}
									onClick={() => handleSend(option)}
									type='button'
								>
									{option}
								</Button>
							))}
						</Wrapper>
					)}
				{mergedShowInput !== false && (
					<Wrapper className={styles.chatInput}>
						<input
							type='text'
							className={styles.chatInputField}
							placeholder='Type a message...'
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleInputKeyDown}
						/>
						<Button
							kind='primary'
							className={styles.chatSendBtn}
							onClick={() => handleSend()}
						>
							Send
						</Button>
					</Wrapper>
				)}
			</Wrapper>
		);
	}
);

Chat.displayName = 'Chat';

export default Chat;
