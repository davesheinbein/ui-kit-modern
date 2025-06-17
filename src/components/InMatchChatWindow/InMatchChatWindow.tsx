// InMatchChatWindow.tsx - migrated from VibeGrid
import React from 'react';
import styles from './InMatchChatWindow.module.scss';

export interface InMatchChatWindowProps {
	messages: Array<{
		id: string;
		text: string;
		sender: string;
		time: string;
	}>;
	onSend: (msg: string) => void;
	currentUser: string;
}

const InMatchChatWindow: React.FC<
	InMatchChatWindowProps
> = ({ messages, onSend, currentUser }) => (
	<div className={styles.inMatchChatWindow}>
		<div className={styles.inMatchChatHeader}>
			In-Match Chat
		</div>
		<div className={styles.inMatchChatMessages}>
			{messages.map((msg) => (
				<div
					key={msg.id}
					className={
						msg.sender === currentUser ?
							styles.chatMessageSelf
						:	styles.chatMessageFriend
					}
				>
					<span className={styles.chatMessageText}>
						{msg.text}
					</span>
					<span className={styles.chatMessageTime}>
						{msg.time}
					</span>
				</div>
			))}
		</div>
		{/* Add input/send logic as needed */}
	</div>
);

export default InMatchChatWindow;
