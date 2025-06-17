import React, { useState } from 'react';
import styles from './FriendCard.module.scss';

export interface FriendCardProps {
	friend: {
		id: string;
		username: string;
		online: boolean;
		division?: string;
		tier?: string;
		inMatch?: boolean;
		idle?: boolean;
	};
	onChallenge: (id: string) => void;
	onMessage: (id: string) => void;
	onRemove: (id: string) => void;
	unreadCount?: number;
}

const getStatus = (friend: any) => {
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

const FriendCard: React.FC<FriendCardProps> = ({
	friend,
	onChallenge,
	onMessage,
	onRemove,
	unreadCount = 0,
}) => {
	const [hover, setHover] = useState(false);
	const status = getStatus(friend);
	const statusClass =
		STATUS_CLASS_MAP[status.text] || 'status-offline';

	return (
		<div
			className={
				styles.friendCard +
				(hover ? ' ' + styles.friendCardHover : '')
			}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className={styles.friendCardHeader}>
				<span
					className={
						styles.friendStatusDot +
						' ' +
						styles[statusClass]
					}
				/>
				<span className={styles.friendUsername}>
					{friend.username}
				</span>
				{/* Add more friend info as needed */}
			</div>
			<div className={styles.friendCardActions}>
				<button onClick={() => onChallenge(friend.id)}>
					Challenge
				</button>
				<button onClick={() => onMessage(friend.id)}>
					Message
					{unreadCount > 0 ? ` (${unreadCount})` : ''}
				</button>
				<button onClick={() => onRemove(friend.id)}>
					Remove
				</button>
			</div>
		</div>
	);
};

export default FriendCard;
