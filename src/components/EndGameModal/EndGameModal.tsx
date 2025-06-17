import React from 'react';
import styles from './EndGameModal.module.scss';

export interface EndGameModalProps {
	message: string;
	score: number;
	attemptsLeft: number;
	burnBonus: number;
	win: boolean;
	onShare: () => void;
	finishTime?: string;
}

const EndGameModal: React.FC<EndGameModalProps> = ({
	message,
	score,
	attemptsLeft,
	burnBonus,
	win,
	onShare,
	finishTime,
}) => (
	<div className={styles.endgameModal}>
		<div className={styles.endgameModalContent}>
			<h2>{win ? 'You Win!' : 'Game Over'}</h2>
			<p>{message}</p>
			<div className={styles.endgameModalScore}>
				Score: {score}
			</div>
			<div className={styles.endgameModalAttempts}>
				Attempts Left: {attemptsLeft}
			</div>
			<div className={styles.endgameModalBurnBonus}>
				Burn Bonus: {burnBonus}
			</div>
			{finishTime && (
				<div className={styles.endgameModalFinishTime}>
					Finish Time: {finishTime}
				</div>
			)}
			<div className={styles.endgameModalActions}>
				<button onClick={onShare}>Share</button>
			</div>
		</div>
	</div>
);

export default EndGameModal;
