import React from 'react';
import styles from '../Card.module.scss';
import { Wrapper } from '../../Wrappers';

interface UserStatus {
	name: string;
	avatar?: string;
	status: string;
	statusMessage?: string;
}

interface UserStatusCardContentProps {
	userStatus: UserStatus;
}

const UserStatusCardContent: React.FC<
	UserStatusCardContentProps
> = ({ userStatus }) => {
	const statusColor =
		userStatus.status === 'online' ? '#22c55e' : '#64748b';
	return (
		<Wrapper className={styles['user-status-card']}>
			{userStatus.avatar && (
				<img
					src={userStatus.avatar}
					alt={userStatus.name}
					style={{
						width: 36,
						height: 36,
						borderRadius: '50%',
						marginRight: 12,
					}}
				/>
			)}
			<div style={{ flex: 1 }}>
				<div style={{ fontWeight: 600 }}>
					{userStatus.name}
				</div>
				{userStatus.statusMessage && (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							color: '#888',
							fontSize: '0.95em',
						}}
					>
						<span
							style={{
								width: 12,
								height: 12,
								borderRadius: '50%',
								background: statusColor,
								display: 'inline-block',
								marginRight: 8,
							}}
						/>
						{userStatus.statusMessage}
					</div>
				)}
			</div>
		</Wrapper>
	);
};

export default UserStatusCardContent;
