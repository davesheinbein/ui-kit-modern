import React from 'react';

export interface ChatMessage {
	id: string;
	text: string;
	sender: string;
	time: string;
	type?: 'self' | 'friend' | 'system';
}

export interface ChatProps {
	kind?: string;
	messages?: ChatMessage[];
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
