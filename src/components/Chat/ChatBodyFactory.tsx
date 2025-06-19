import React, { forwardRef, useState } from 'react';
import styles from './Chat.module.scss';
import VSQuickChatBar from './VSQuickChatBar';

export interface ChatBodyFactoryProps {
	kind:
		| 'friend'
		| 'in-match'
		| 'match'
		| 'general'
		| 'vs-quick-chat';
	configuration?: any;
	messages?: Array<{
		id: string;
		text: string;
		sender: string;
		time: string;
		type?: 'self' | 'friend' | 'system';
	}>;
	currentUser?: string;
	onSend?: (message: string) => void;
	showInput?: boolean;
	placeholder?: string;
	quickOptions?: string[];
	[key: string]: any;
}

/**
 * ChatBodyFactory - Creates the chat content based on chat kind
 * This is the DRY equivalent of the individual chat components
 */
const ChatBodyFactory = forwardRef<
	HTMLDivElement,
	ChatBodyFactoryProps
>(
	(
		{
			kind,
			configuration,
			messages = [],
			currentUser = '',
			onSend,
			showInput = true,
			placeholder = 'Type a message...',
			quickOptions,
			...props
		},
		ref
	) => {
		const [inputValue, setInputValue] = useState('');

		const handleSend = () => {
			if (inputValue.trim() && onSend) {
				onSend(inputValue.trim());
				setInputValue('');
			}
		};

		const handleKeyPress = (e: React.KeyboardEvent) => {
			if (e.key === 'Enter' && !e.shiftKey) {
				e.preventDefault();
				handleSend();
			}
		};

		const renderMessage = (msg: {
			id: string;
			text: string;
			sender: string;
			time: string;
			type?: 'self' | 'friend' | 'system';
		}) => {
			const messageType =
				msg.type ||
				(msg.sender === currentUser ? 'self'
				: msg.sender === 'system' ? 'system'
				: 'friend');

			const messageClass =
				messageType === 'self' ? styles.chatMessageSelf
				: messageType === 'system' ?
					styles.chatMessageSystem
				:	styles.chatMessageFriend;

			return (
				<div key={msg.id} className={messageClass}>
					<span className={styles.chatMessageText}>
						{msg.text}
					</span>
					{msg.time && (
						<span className={styles.chatMessageTime}>
							{msg.time}
						</span>
					)}
				</div>
			);
		};

		switch (kind) {
			case 'friend':
				return (
					<div ref={ref} {...props}>
						<div className={styles.chatMessages}>
							{messages.map(renderMessage)}
						</div>
						{showInput && (
							<div className={styles.chatInput}>
								<input
									type='text'
									value={inputValue}
									onChange={(e) =>
										setInputValue(e.target.value)
									}
									onKeyPress={handleKeyPress}
									placeholder={placeholder}
									className={styles.chatInputField}
								/>
								<button
									onClick={handleSend}
									disabled={!inputValue.trim()}
									className={styles.chatSendBtn}
								>
									Send
								</button>
							</div>
						)}
					</div>
				);

			case 'in-match':
				return (
					<div ref={ref} {...props}>
						<div className={styles.chatMessages}>
							{messages.map(renderMessage)}
						</div>
						{showInput && (
							<div className={styles.chatInput}>
								<input
									type='text'
									value={inputValue}
									onChange={(e) =>
										setInputValue(e.target.value)
									}
									onKeyPress={handleKeyPress}
									placeholder={placeholder}
									className={styles.chatInputField}
								/>
								<button
									onClick={handleSend}
									disabled={!inputValue.trim()}
									className={styles.chatSendBtn}
								>
									Send
								</button>
							</div>
						)}
					</div>
				);

			case 'match':
				return (
					<div ref={ref} {...props}>
						<div className={styles.chatMessages}>
							{messages.map(renderMessage)}
						</div>
						{showInput && (
							<div className={styles.chatInput}>
								<input
									type='text'
									value={inputValue}
									onChange={(e) =>
										setInputValue(e.target.value)
									}
									onKeyPress={handleKeyPress}
									placeholder={placeholder}
									className={styles.chatInputField}
								/>
								<button
									onClick={handleSend}
									disabled={!inputValue.trim()}
									className={styles.chatSendBtn}
								>
									Send
								</button>
							</div>
						)}
					</div>
				);

			case 'general':
			default:
				return (
					<div ref={ref} {...props}>
						<div className={styles.chatMessages}>
							{messages.map(renderMessage)}
						</div>
						{showInput && (
							<div className={styles.chatInput}>
								<input
									type='text'
									value={inputValue}
									onChange={(e) =>
										setInputValue(e.target.value)
									}
									onKeyPress={handleKeyPress}
									placeholder={placeholder}
									className={styles.chatInputField}
								/>
								<button
									onClick={handleSend}
									disabled={!inputValue.trim()}
									className={styles.chatSendBtn}
								>
									Send
								</button>
							</div>
						)}
					</div>
				);

			case 'vs-quick-chat':
				return (
					<div ref={ref} {...props}>
						<VSQuickChatBar
							options={
								configuration?.quickOptions || [
									'Hello',
									'Good luck!',
									'Nice move!',
									'GG',
								]
							}
							onSend={onSend || (() => {})}
						/>
					</div>
				);
		}
	}
);

ChatBodyFactory.displayName = 'ChatBodyFactory';

export default ChatBodyFactory;
