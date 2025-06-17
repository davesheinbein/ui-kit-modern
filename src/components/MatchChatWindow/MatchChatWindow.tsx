// MatchChatWindow.tsx - migrated from VibeGrid
import React from 'react';
import styles from './MatchChatWindow.module.scss';

export interface MatchChatWindowProps {
	messages: Array<{
		id: string;
		text: string;
		sender: string;
		time: string;
	}>;
	onSend: (msg: string) => void;
	currentUser: string;
}

const MatchChatWindow: React.FC<MatchChatWindowProps> = ({
	messages,
	onSend,
	currentUser,
}) => (
	<div className={styles.matchChatWindow}>
		<div className={styles.matchChatHeader}>Match Chat</div>
		<div className={styles.matchChatMessages}>
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

export default MatchChatWindow;
