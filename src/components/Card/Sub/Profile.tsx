import React from 'react';
import styles from '../Card.module.scss';
import { Wrapper } from '../../Wrappers';

interface Profile {
	id: string;
	name: string;
	avatar?: string;
	bio?: string;
	level?: number;
	points?: number;
	achievements?: number;
	gamesPlayed?: number;
	winRate?: number;
}

interface ProfileCardContentProps {
	profile: Profile;
}

const ProfileCardContent: React.FC<
	ProfileCardContentProps
> = ({ profile }) => {
	return (
		<Wrapper
			className={styles['profile-card']}
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: 24,
				textAlign: 'left',
			}}
		>
			{profile.avatar && (
				<img
					src={profile.avatar}
					alt={profile.name}
					className={styles.profileAvatar}
					width={80}
					height={80}
					style={{ borderRadius: '50%', marginRight: 16 }}
				/>
			)}
			<div>
				<h3>{profile.name}</h3>
				{profile.bio && <p>{profile.bio}</p>}
				<div className={styles.profileStats}>
					{profile.level !== undefined && (
						<span>Level: {profile.level}</span>
					)}
					{profile.points !== undefined && (
						<span>Points: {profile.points}</span>
					)}
					{profile.achievements !== undefined && (
						<span>
							Achievements: {profile.achievements}
						</span>
					)}
					{profile.gamesPlayed !== undefined && (
						<span>Games Played: {profile.gamesPlayed}</span>
					)}
					{profile.winRate !== undefined && (
						<span>Win Rate: {profile.winRate}%</span>
					)}
				</div>
			</div>
		</Wrapper>
	);
};

export default ProfileCardContent;
