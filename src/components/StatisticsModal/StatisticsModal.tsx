import React from 'react';
import styles from './StatisticsModal.module.scss';
import { Modal } from '../Modal';
import { CloseButton } from '../CloseButton';

export interface StatisticsModalProps {
	open: boolean;
	onClose: () => void;
	user: {
		name: string;
		email: string;
		photoUrl?: string;
	} | null;
	dailyCompleted: boolean;
	mode?: 'daily' | 'vs';
}

const STAT_CONFIG = [
	{ label: 'Completed', key: 'completed', suffix: '' },
	{ label: 'Win %', key: 'winPercentage', suffix: '%' },
	{
		label: 'Current Streak',
		key: 'currentStreak',
		suffix: '',
	},
	{ label: 'Max Streak', key: 'maxStreak', suffix: '' },
	{
		label: 'Perfect Puzzles',
		key: 'perfectPuzzles',
		suffix: '',
	},
];

const UserInfo: React.FC<{ user: any }> = ({ user }) => (
	<div className={styles.statisticsUserInfo}>
		<img
			src={user.photoUrl || '/default-avatar.png'}
			alt={user.name}
			className={styles.statisticsUserAvatar}
		/>
		<div>
			<div className={styles.statisticsUserName}>
				{user.name}
			</div>
			<div className={styles.statisticsUserEmail}>
				{user.email}
			</div>
		</div>
	</div>
);

const StatRows: React.FC<{ stats: any }> = ({ stats }) => (
	<div className={styles.statisticsStats}>
		{STAT_CONFIG.map(({ label, key, suffix }) => (
			<div key={key} className={styles.statisticsStatRow}>
				<span className={styles.statisticsStatLabel}>
					{label}:
				</span>{' '}
				{stats[key]}
				{suffix}
			</div>
		))}
	</div>
);

const StatisticsModal: React.FC<StatisticsModalProps> = ({
	open,
	onClose,
	user,
	dailyCompleted,
	mode = 'daily',
}) => {
	const mockStats = {
		completed: 58,
		winPercentage: 78,
		currentStreak: 0,
		maxStreak: 5,
		perfectPuzzles: 20,
		purpleFirst: 6,
		mistakeDistribution: [20, 11, 3, 11, 13],
	};

	const renderRules = () => {
		if (mode === 'vs') {
			return (
				<>
					<h3>VS Mode Rules</h3>
					<ul>
						<li>
							Compete head-to-head against a bot or another
							player.
						</li>
						<li>
							First to solve all groups wins, or whoever
							solves the most with fewest mistakes.
						</li>
						<li>
							Wildcards and mistakes affect your score and
							strategy.
						</li>
					</ul>
				</>
			);
		}
		return null;
	};

	return (
		<Modal open={open} onClose={onClose}>
			<div className={styles.statisticsModal}>
				<CloseButton onClick={onClose} />
				<div className={styles.statisticsHeader}>
					Statistics
				</div>
				{user && user.name ?
					<>
						<UserInfo user={user} />
						<StatRows stats={mockStats} />
						{renderRules()}
					</>
				:	<div className={styles.statisticsGuestMessage}>
						<p>
							Sign in to track your progress and unlock
							streaks, win rate, and daily scores.
						</p>
						<button className={styles.statisticsSignInBtn}>
							Sign In with Google
						</button>
					</div>
				}
			</div>
		</Modal>
	);
};

export default StatisticsModal;
