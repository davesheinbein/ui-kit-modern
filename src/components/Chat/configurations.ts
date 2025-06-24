import React from 'react';

export interface ChatConfiguration {
	kind: 'chat' | 'quick-chat';
	variant?: 'chat' | 'quick-chat';
	position?: 'fixed' | 'relative' | 'absolute';
	showHeader?: boolean;
	showCloseButton?: boolean;
	showInput?: boolean;
	showQuickOptions?: boolean;
	quickOptions?: string[];
	title?: string;
	placeholder?: string;
	avatar?: React.ReactNode;
	[key: string]: any;
}

// Basic chat kinds
export const chat: ChatConfiguration = {
	kind: 'chat',
	variant: 'chat',
	position: 'fixed',
	showHeader: true,
	showCloseButton: true,
	showInput: true,
	title: 'Chat',
	placeholder: 'Type a message...',
};

export const quickChat: ChatConfiguration = {
	kind: 'quick-chat',
	variant: 'quick-chat',
	position: 'relative',
	showHeader: false,
	showCloseButton: false,
	showInput: false,
	showQuickOptions: true,
	quickOptions: ['Hello', 'Good luck!', 'Nice move!', 'GG'],
	title: 'Quick Chat',
	placeholder: '',
};

// Export all configurations
export const CHAT_CONFIGURATIONS = {
	// Basic kinds
	'chat': chat,
	'quick-chat': quickChat,
};

export type ExtendedChatKind =
	keyof typeof CHAT_CONFIGURATIONS;

// Type exports
export type ChatKind = ExtendedChatKind;
export type ChatVariant = 'chat' | 'quick-chat';
export type ChatPosition =
	| 'fixed'
	| 'relative'
	| 'absolute';
