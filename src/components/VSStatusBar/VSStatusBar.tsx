import React from 'react';
import styles from './VSStatusBar.module.scss';

export interface VSStatusBarProps {
	player: {
		username: string;
		avatarUrl?: string;
		groupsSolved: number;
		mistakes: number;
		isYou?: boolean;
	};
	opponent?: {
		username: string;
		avatarUrl?: string;
		groupsSolved: number;
		mistakes: number;
	};
	timer?: string;
	totalGroups: number;
	showMistakes?: boolean;
	showTimer?: boolean;
	onEmoteClick?: () => void;
}

const VSStatusBar: React.FC<VSStatusBarProps> = ({
	player,
	opponent,
	timer,
	totalGroups,
	showMistakes = true,
	showTimer = true,
	onEmoteClick,
}) => (
	<div className={styles.vsStatusBar}>
		{/* Left: Player info */}
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: 8,
			}}
		>
			{player.avatarUrl && (
				<img
					src={player.avatarUrl}
					alt={player.username}
					className={styles.vsStatusAvatar}
				/>
			)}
			<span className={styles.vsStatusUsername}>
				{player.username}
				{player.isYou ? ' (You)' : ''}
			</span>
			<span className={styles.vsStatusGroups}>
				Groups: {player.groupsSolved}/{totalGroups}
			</span>
			{showMistakes && (
				<span className={styles.vsStatusMistakes}>
					Mistakes: {player.mistakes}
				</span>
			)}
		</div>
		{/* Center: Timer */}
		{showTimer && timer && (
			<div className={styles.vsStatusTimer}>⏱ {timer}</div>
		)}
		{/* Right: Opponent info */}
		{opponent && (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: 8,
				}}
			>
				{opponent.avatarUrl && (
					<img
						src={opponent.avatarUrl}
						alt={opponent.username}
						className={styles.vsStatusAvatar}
					/>
				)}
				<span className={styles.vsStatusUsername}>
					{opponent.username}
				</span>
				<span className={styles.vsStatusGroups}>
					Groups: {opponent.groupsSolved}/{totalGroups}
				</span>
				{showMistakes && (
					<span className={styles.vsStatusMistakes}>
						Mistakes: {opponent.mistakes}
					</span>
				)}
				{onEmoteClick && (
					<button
						className={styles.vsStatusEmoteBtn}
						onClick={onEmoteClick}
						aria-label='Send Emote'
					>
						😊
					</button>
				)}
			</div>
		)}
	</div>
);

export default VSStatusBar;
