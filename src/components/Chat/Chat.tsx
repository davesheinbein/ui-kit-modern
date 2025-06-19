import React, { forwardRef } from 'react';
import styles from './Chat.module.scss';

export interface ChatProps {
	children: React.ReactNode;
	className?: string;
	variant?: 'friend' | 'in-match' | 'match' | 'general';
	position?: 'fixed' | 'relative' | 'absolute';
	title?: string;
	onClose?: () => void;
	showCloseButton?: boolean;
	showHeader?: boolean;
	avatar?: React.ReactNode;
}

/**
 * Base Chat component - provides consistent styling and layout
 * Use this as the foundation for all chat window types
 * Similar to the Modal and Button base components
 */
const Chat = forwardRef<HTMLDivElement, ChatProps>(
	(
		{
			children,
			className = '',
			variant = 'general',
			position = 'relative',
			title,
			onClose,
			showCloseButton = false,
			showHeader = true,
			avatar,
			...props
		},
		ref
	) => {
		const chatClasses = [
			styles.chat,
			styles[`chat--${variant}`],
			styles[`chat--${position}`],
			className,
		]
			.filter(Boolean)
			.join(' ');

		return (
			<div ref={ref} className={chatClasses} {...props}>
				{showHeader &&
					(title || showCloseButton || avatar) && (
						<div className={styles.chatHeader}>
							{avatar && (
								<div className={styles.chatAvatar}>
									{avatar}
								</div>
							)}
							{title && (
								<div className={styles.chatTitle}>
									{title}
								</div>
							)}
							{showCloseButton && onClose && (
								<button
									className={styles.chatCloseBtn}
									onClick={onClose}
									type='button'
									aria-label='Close chat'
								>
									×
								</button>
							)}
						</div>
					)}
				<div className={styles.chatContent}>{children}</div>
			</div>
		);
	}
);

Chat.displayName = 'Chat';

export default Chat;
