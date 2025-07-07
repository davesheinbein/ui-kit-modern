import React from 'react';
import styles from '../Card.module.scss';
import { Wrapper } from '../../Wrappers';

interface Friend {
	id: string;
	username: string;
	avatar?: string;
	online: boolean;
	division?: string;
	tier?: string;
	inMatch?: boolean;
	idle?: boolean;
}

interface FriendCardContentProps {
	friend: Friend;
	onChallenge?: (id: string) => void;
	onMessage?: (id: string) => void;
	onRemove?: (id: string) => void;
	unreadCount?: number;
}

const FriendCardContent: React.FC<
	FriendCardContentProps
> = ({
	friend,
	onChallenge,
	onMessage,
	onRemove,
	unreadCount = 0,
}) => {
	const getStatus = (friend: Friend) => {
		if (friend.online && friend.inMatch)
			return { text: 'In match', color: '#a259f7' };
		if (friend.online && friend.idle)
			return { text: 'Idle', color: '#fbbf24' };
		if (friend.online)
			return { text: 'Online', color: '#22c55e' };
		return { text: 'Offline', color: '#64748b' };
	};
	const STATUS_CLASS_MAP: Record<string, string> = {
		'In match': 'status-inmatch',
		'Idle': 'status-idle',
		'Online': 'status-online',
		'Offline': 'status-offline',
	};
	const status = getStatus(friend);
	const statusClass =
		STATUS_CLASS_MAP[status.text] || 'status-offline';
	return (
		<>
			<Wrapper className={styles.friendCardHeader}>
				<span
					className={`${styles.friendStatusDot} ${styles[statusClass]}`}
				/>
				<span className={styles.friendUsername}>
					{friend.username}
				</span>
				{friend.division && friend.tier && (
					<span
						style={{ color: '#888', fontSize: '0.95em' }}
					>
						{friend.division} {friend.tier}
					</span>
				)}
			</Wrapper>
			<Wrapper className={styles.friendCardActions}>
				{onChallenge && (
					<button
						onClick={() => onChallenge(friend.id)}
						style={{ marginRight: 8 }}
					>
						Challenge
					</button>
				)}
				{onMessage && (
					<button
						onClick={() => onMessage(friend.id)}
						style={{ marginRight: 8 }}
					>
						Message
						{unreadCount > 0 ? ` (${unreadCount})` : ''}
					</button>
				)}
				{onRemove && (
					<button
						onClick={() => onRemove(friend.id)}
						style={{ color: 'red' }}
					>
						Remove
					</button>
				)}
			</Wrapper>
		</>
	);
};

export default FriendCardContent;
