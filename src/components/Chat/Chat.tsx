import React, { forwardRef } from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Chat.module.scss';
import { Button } from '../Button';
import ChatFactory from './factory';
import { ChatKind } from './configurations';

// Unified ChatProps interface
export interface ChatProps {
	// High-level (factory-driven) chat props
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
	// Presentational chat window props
	children?: React.ReactNode;
	variant?: 'friend' | 'in-match' | 'match' | 'general';
	position?: 'fixed' | 'relative' | 'absolute';
	title?: string;
	showCloseButton?: boolean;
	showHeader?: boolean;
	avatar?: React.ReactNode;
	// Shared props
	onClose?: () => void;
	className?: string;
	[key: string]: any;
}

/**
 * Unified Chat component - DRY, configuration-driven, and presentational
 * If 'kind' is provided, renders the high-level chat factory; otherwise, renders a styled chat window.
 */
const Chat = forwardRef<HTMLDivElement, ChatProps>(
	(props, ref) => {
		const {
			// Factory-driven props
			kind,
			messages = [],
			currentUser = '',
			onSend,
			// Presentational props
			children,
			variant = 'general',
			position = 'relative',
			title,
			showCloseButton = false,
			showHeader = true,
			avatar,
			// Shared
			onClose,
			className = '',
			...rest
		} = props;

		if (kind) {
			// Only pass valid props to ChatFactory
			return (
				<ChatFactory
					ref={ref}
					kind={kind}
					messages={messages}
					currentUser={currentUser}
					onSend={onSend}
					onClose={onClose}
					className={className}
					{...rest}
				/>
			);
		}

		// Presentational chat window
		const chatClasses = [
			styles.chat,
			'wrapper',
			styles[`chat--${variant}`],
			styles[`chat--${position}`],
			className,
		]
			.filter(Boolean)
			.join(' ');

		return (
			<Wrapper ref={ref} className={chatClasses} {...rest}>
				{showHeader &&
					(title || showCloseButton || avatar) && (
						<Wrapper className={styles.chatHeader}>
							{avatar && (
								<Wrapper className={styles.chatAvatar}>
									{avatar}
								</Wrapper>
							)}
							{title && (
								<Wrapper className={styles.chatTitle}>
									{title}
								</Wrapper>
							)}
							{showCloseButton && onClose && (
								<Button kind='close' onClick={onClose} />
							)}
						</Wrapper>
					)}
				<Wrapper className={styles.chatContent}>
					{children}
				</Wrapper>
			</Wrapper>
		);
	}
);

Chat.displayName = 'Chat';

export default Chat;
