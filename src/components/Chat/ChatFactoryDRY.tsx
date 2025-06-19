import React, { forwardRef } from 'react';
import ChatWindow from './Chat';
import ChatBodyFactory from './ChatBodyFactory';
import {
	CHAT_CONFIGURATIONS,
	ChatKind,
	ChatConfiguration,
} from './ChatConfigurations';

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
 * Ultra-DRY Chat shortcuts - for maximum convenience
 */
export const ChatFactoryShortcut = ChatFactoryClass; // Chat alias

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
