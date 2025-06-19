import React, { forwardRef } from 'react';
import ChatFactory from './ChatFactoryDRY';
import { ChatKind } from './ChatConfigurations';

export interface UnifiedChatProps {
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
	[key: string]: any;
}

/**
 * UnifiedChat - High-level chat interface using the DRY system
 * Maintains backward compatibility while leveraging the factory pattern
 */
const UnifiedChat = forwardRef<
	HTMLDivElement,
	UnifiedChatProps
>(
	(
		{
			kind,
			messages = [],
			currentUser = '',
			onSend,
			onClose,
			className = '',
			...props
		},
		ref
	) => {
		return (
			<ChatFactory
				ref={ref}
				kind={kind}
				messages={messages}
				currentUser={currentUser}
				onSend={onSend}
				onClose={onClose}
				className={className}
				{...props}
			/>
		);
	}
);

UnifiedChat.displayName = 'UnifiedChat';

export default UnifiedChat;
