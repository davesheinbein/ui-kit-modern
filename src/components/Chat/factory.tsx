import React, { forwardRef, useEffect } from 'react';
import { Wrapper } from '../Wrappers';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../Button';
import ChatWindow from './Chat';
import styles from './Chat.module.scss';
import {
	CHAT_CONFIGURATIONS,
	ChatKind,
	ChatConfiguration,
} from './configurations';
import {
	setChatState,
	selectChatState,
	cleanupComponent,
} from '../../store/slices/uiSlice';

export interface ChatBodyFactoryProps {
	kind:
		| 'friend'
		| 'in-match'
		| 'match'
		| 'general'
		| 'vs-quick-chat';
	componentId?: string; // For Redux state isolation
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
export const ChatBodyFactory = forwardRef<
	HTMLDivElement,
	ChatBodyFactoryProps
>(
	(
		{
			kind,
			componentId = `chat-${Date.now()}-${Math.random()}`, // Generate unique ID if not provided
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
		const dispatch = useDispatch();
		const chatState = useSelector(
			selectChatState(componentId)
		);
		const inputValue = chatState?.inputValue || '';

		// Initialize Redux state
		useEffect(() => {
			if (!chatState) {
				dispatch(
					setChatState({
						chatId: componentId,
						updates: { inputValue: '' },
					})
				);
			}

			return () => {
				dispatch(cleanupComponent(componentId));
			};
		}, [dispatch, componentId, chatState]);

		const handleSend = () => {
			if (inputValue.trim() && onSend) {
				onSend(inputValue.trim());
				dispatch(
					setChatState({
						chatId: componentId,
						updates: { inputValue: '' },
					})
				);
			}
		};

		const handleKeyPress = (e: React.KeyboardEvent) => {
			if (e.key === 'Enter' && !e.shiftKey) {
				e.preventDefault();
				handleSend();
			}
		};

		const handleInputChange = (
			e: React.ChangeEvent<HTMLInputElement>
		) => {
			dispatch(
				setChatState({
					chatId: componentId,
					updates: { inputValue: e.target.value },
				})
			);
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
				<Wrapper key={msg.id} className={messageClass}>
					<span className={styles.chatMessageText}>
						{msg.text}
					</span>
					{msg.time && (
						<span className={styles.chatMessageTime}>
							{msg.time}
						</span>
					)}
				</Wrapper>
			);
		};

		switch (kind) {
			case 'friend':
				return (
					<Wrapper ref={ref} {...props}>
						<Wrapper className={styles.chatMessages}>
							{messages.map(renderMessage)}
						</Wrapper>
						{showInput && (
							<Wrapper className={styles.chatInput}>
								<input
									type='text'
									value={inputValue}
									onChange={(e) => handleInputChange(e)}
									onKeyPress={handleKeyPress}
									placeholder={placeholder}
									className={styles.chatInputField}
								/>
								<Button
									kind='primary'
									onClick={handleSend}
									disabled={!inputValue.trim()}
									className={styles.chatSendBtn}
								>
									Send
								</Button>
							</Wrapper>
						)}
					</Wrapper>
				);

			case 'in-match':
				return (
					<Wrapper ref={ref} {...props}>
						<Wrapper className={styles.chatMessages}>
							{messages.map(renderMessage)}
						</Wrapper>
						{showInput && (
							<Wrapper className={styles.chatInput}>
								<input
									type='text'
									value={inputValue}
									onChange={(e) => handleInputChange(e)}
									onKeyPress={handleKeyPress}
									placeholder={placeholder}
									className={styles.chatInputField}
								/>
								<Button
									kind='primary'
									onClick={handleSend}
									disabled={!inputValue.trim()}
									className={styles.chatSendBtn}
								>
									Send
								</Button>
							</Wrapper>
						)}
					</Wrapper>
				);

			case 'match':
				return (
					<Wrapper ref={ref} {...props}>
						<Wrapper className={styles.chatMessages}>
							{messages.map(renderMessage)}
						</Wrapper>
						{showInput && (
							<Wrapper className={styles.chatInput}>
								<input
									type='text'
									value={inputValue}
									onChange={(e) => handleInputChange(e)}
									onKeyPress={handleKeyPress}
									placeholder={placeholder}
									className={styles.chatInputField}
								/>
								<Button
									kind='primary'
									onClick={handleSend}
									disabled={!inputValue.trim()}
									className={styles.chatSendBtn}
								>
									Send
								</Button>
							</Wrapper>
						)}
					</Wrapper>
				);

			case 'general':
			default:
				return (
					<Wrapper ref={ref} {...props}>
						<Wrapper className={styles.chatMessages}>
							{messages.map(renderMessage)}
						</Wrapper>
						{showInput && (
							<Wrapper className={styles.chatInput}>
								<input
									type='text'
									value={inputValue}
									onChange={(e) => handleInputChange(e)}
									onKeyPress={handleKeyPress}
									placeholder={placeholder}
									className={styles.chatInputField}
								/>
								<Button
									kind='primary'
									onClick={handleSend}
									disabled={!inputValue.trim()}
									className={styles.chatSendBtn}
								>
									Send
								</Button>
							</Wrapper>
						)}
					</Wrapper>
				);

			case 'vs-quick-chat':
				return (
					<Wrapper ref={ref} {...props}>
						<Wrapper className={styles.vsQuickChatBar}>
							{(
								configuration?.quickOptions ||
								quickOptions || [
									'Hello',
									'Good luck!',
									'Nice move!',
									'GG',
								]
							).map((opt: string) => (
								<Button
									key={opt}
									kind='vs-quick-chat'
									className={styles.vsQuickChatButton}
									onClick={() => onSend?.(opt)}
								>
									{opt}
								</Button>
							))}
						</Wrapper>
					</Wrapper>
				);
		}
	}
);

ChatBodyFactory.displayName = 'ChatBodyFactory';

export interface ChatFactoryProps {
	kind: ChatKind;
	messages?: Array<{
		id: string;
		text: string;
		sender: string;
		time: string;
		type?: 'self' | 'friend' | 'system';
	}>;
	currentUser?: string;
	onSend?: (message: string) => void;
	onClose?: () => void;
	className?: string;
	title?: string;
	avatar?: React.ReactNode;
	placeholder?: string;
	showInput?: boolean;
	showHeader?: boolean;
	showCloseButton?: boolean;
	// Override any configuration
	configuration?: Partial<ChatConfiguration>;
	[key: string]: any;
}

/**
 * ChatFactory - Ultra-DRY chat creation using configurations
 *
 * Usage examples:
 * <ChatFactory kind="friend" messages={friendMessages} currentUser="user1" />
 * <ChatFactory kind="in-match" messages={matchMessages} onSend={handleSend} />
 * <ChatFactory kind="match" messages={chatMessages} currentUser="player1" />
 * <ChatFactory kind="general" messages={generalMessages} />
 */
const ChatFactory = forwardRef<
	HTMLDivElement,
	ChatFactoryProps
>(
	(
		{
			kind,
			messages = [],
			currentUser = '',
			onSend,
			onClose,
			className = '',
			title,
			avatar,
			placeholder,
			showInput,
			showHeader,
			showCloseButton,
			configuration: configOverride,
			...props
		},
		ref
	) => {
		const config =
			CHAT_CONFIGURATIONS[
				kind as keyof typeof CHAT_CONFIGURATIONS
			];

		if (!config) {
			console.warn(`Unknown chat kind: ${kind}`);
			return null;
		}

		// Merge configuration with overrides
		const finalConfig = { ...config, ...configOverride };

		// Use props or config values
		const finalTitle = title ?? finalConfig.title;
		const finalShowInput =
			showInput ?? finalConfig.showInput;
		const finalShowHeader =
			showHeader ?? finalConfig.showHeader;
		const finalShowCloseButton =
			showCloseButton ?? finalConfig.showCloseButton;
		const finalPlaceholder =
			placeholder ?? finalConfig.placeholder;
		const finalAvatar = avatar ?? finalConfig.avatar;

		return (
			<ChatWindow
				ref={ref}
				variant={finalConfig.variant}
				position={finalConfig.position}
				title={finalTitle}
				onClose={onClose}
				showCloseButton={finalShowCloseButton}
				showHeader={finalShowHeader}
				avatar={finalAvatar}
				className={className}
			>
				<ChatBodyFactory
					kind={finalConfig.kind}
					configuration={finalConfig}
					messages={messages}
					currentUser={currentUser}
					onSend={onSend}
					showInput={finalShowInput}
					placeholder={finalPlaceholder}
					{...props}
				/>
			</ChatWindow>
		);
	}
);

ChatFactory.displayName = 'ChatFactory';

/**
 * Chat Factory - Creates chats with minimal configuration
 * This is the most DRY way to create chats in the entire system
 */
export class ChatFactoryClass {
	static create(
		kind: ChatKind,
		props: Omit<ChatFactoryProps, 'kind'> = {}
	) {
		return <ChatFactory kind={kind} {...props} />;
	}

	// Quick chat creation methods
	static friend(
		messages: ChatFactoryProps['messages'] = [],
		props: Partial<ChatFactoryProps> = {}
	) {
		return this.create('friend', { messages, ...props });
	}

	static inMatch(
		messages: ChatFactoryProps['messages'] = [],
		props: Partial<ChatFactoryProps> = {}
	) {
		return this.create('in-match', { messages, ...props });
	}

	static match(
		messages: ChatFactoryProps['messages'] = [],
		props: Partial<ChatFactoryProps> = {}
	) {
		return this.create('match', { messages, ...props });
	}

	static general(
		messages: ChatFactoryProps['messages'] = [],
		props: Partial<ChatFactoryProps> = {}
	) {
		return this.create('general', { messages, ...props });
	}
}

/**
 * Chat presets with common patterns
 */
export const ChatPresets = {
	// Friend chat with typical setup
	friendChat: (props: Partial<ChatFactoryProps> = {}) =>
		ChatFactoryClass.friend([], {
			showCloseButton: true,
			...props,
		}),

	// In-match chat for games
	inMatchChat: (props: Partial<ChatFactoryProps> = {}) =>
		ChatFactoryClass.inMatch([], {
			showCloseButton: false,
			...props,
		}),

	// Match chat window
	matchChat: (props: Partial<ChatFactoryProps> = {}) =>
		ChatFactoryClass.match([], {
			showCloseButton: false,
			...props,
		}),

	// General purpose chat
	generalChat: (props: Partial<ChatFactoryProps> = {}) =>
		ChatFactoryClass.general([], props),
};

export default ChatFactory;
