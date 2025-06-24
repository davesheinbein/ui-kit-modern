import React from 'react';

export interface ChatConfiguration {
	kind:
		| 'friend'
		| 'in-match'
		| 'match'
		| 'general'
		| 'vs-quick-chat';
	variant?:
		| 'friend'
		| 'in-match'
		| 'match'
		| 'general'
		| 'vs-quick-chat';
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
export const friendChat: ChatConfiguration = {
	kind: 'friend',
	variant: 'friend',
	position: 'fixed',
	showHeader: true,
	showCloseButton: true,
	showInput: true,
	title: 'Friend Chat',
	placeholder: 'Type a message...',
};

export const inMatchChat: ChatConfiguration = {
	kind: 'in-match',
	variant: 'in-match',
	position: 'relative',
	showHeader: true,
	showCloseButton: false,
	showInput: true,
	title: 'In-Match Chat',
	placeholder: 'Type a message...',
};

export const matchChat: ChatConfiguration = {
	kind: 'match',
	variant: 'match',
	position: 'relative',
	showHeader: true,
	showCloseButton: false,
	showInput: true,
	title: 'Match Chat',
	placeholder: 'Type a message...',
};

export const generalChat: ChatConfiguration = {
	kind: 'general',
	variant: 'general',
	position: 'relative',
	showHeader: true,
	showCloseButton: false,
	showInput: true,
	title: 'Chat',
	placeholder: 'Type a message...',
};

export const vsQuickChat: ChatConfiguration = {
	kind: 'vs-quick-chat',
	variant: 'vs-quick-chat',
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
	'friend': friendChat,
	'in-match': inMatchChat,
	'match': matchChat,
	'general': generalChat,
	'vs-quick-chat': vsQuickChat,
};

export type ExtendedChatKind =
	keyof typeof CHAT_CONFIGURATIONS;

// Type exports
export type ChatKind = ExtendedChatKind;
export type ChatVariant =
	| 'friend'
	| 'in-match'
	| 'match'
	| 'general'
	| 'vs-quick-chat';
export type ChatPosition =
	| 'fixed'
	| 'relative'
	| 'absolute';
