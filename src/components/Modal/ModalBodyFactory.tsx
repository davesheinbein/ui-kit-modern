/**
 * ModalBodyFactory - Handles custom modal body rendering
 *
 * This file extracts the custom body rendering logic from UnifiedModal
 * to make it more DRY and maintainable.
 */

import React from 'react';
import { ExtendedModalKind } from './configurations';
import styles from './UnifiedModal.module.scss';

export interface ModalBodyProps {
	kind: ExtendedModalKind;
	children?: React.ReactNode;

	// Game-specific props
	score?: number;
	attemptsLeft?: number;
	burnBonus?: number;
	win?: boolean;
	finishTime?: string;
	user?: any;

	// VS mode props
	isSearching?: boolean;
	roomCode?: string;
	onSelect?: (mode: string, ...args: any[]) => void;
	onCreateRoom?: (code: string) => void;
	onJoinRoom?: (code: string) => void;

	// Purchase props
	item?: any;

	// Error/loading states
	error?: string;
	loading?: boolean;
	success?: boolean;
	setRoomCode?: (code: string) => void;
	setError?: (error: string) => void;
}

export const ModalBodyFactory: React.FC<ModalBodyProps> = ({
	kind,
	children,
	score,
	attemptsLeft,
	burnBonus,
	win,
	finishTime,
	user,
	isSearching,
	roomCode = '',
	onSelect,
	item,
	error,
	loading,
	success,
	setRoomCode,
	setError,
}) => {
	switch (kind) {
		case 'end-game':
			return renderEndGameBody();
		case 'statistics':
			return renderStatisticsBody();
		case 'purchase':
			return renderPurchaseBody();
		case 'vs-mode':
			return renderVSModeBody();
		case 'vs-room':
			return renderVSRoomBody();
		case 'share-content':
			return <>{children}</>;
		default:
			return <>{children}</>;
	}

	// End game modal body
	function renderEndGameBody() {
		return (
			<div className={styles.endGameContent}>
				<h2>{win ? 'You Win!' : 'Game Over'}</h2>
				{score !== undefined && (
					<div className={styles.statRow}>
						<span>Score:</span> <span>{score}</span>
					</div>
				)}
				{attemptsLeft !== undefined && (
					<div className={styles.statRow}>
						<span>Attempts Left:</span>{' '}
						<span>{attemptsLeft}</span>
					</div>
				)}
				{burnBonus !== undefined && (
					<div className={styles.statRow}>
						<span>Burn Bonus:</span>{' '}
						<span>{burnBonus}</span>
					</div>
				)}
				{finishTime && (
					<div className={styles.statRow}>
						<span>Finish Time:</span>{' '}
						<span>{finishTime}</span>
					</div>
				)}
				{children}
			</div>
		);
	}

	// Statistics modal body
	function renderStatisticsBody() {
		const mockStats = {
			completed: 58,
			winPercentage: 78,
			currentStreak: 0,
			maxStreak: 5,
			perfectPuzzles: 20,
		};

		return (
			<div className={styles.statisticsContent}>
				{user && (
					<div className={styles.userInfo}>
						<img
							src={user.photoUrl || '/default-avatar.png'}
							alt={user.name}
							className={styles.userAvatar}
						/>
						<div>
							<div className={styles.userName}>
								{user.name}
							</div>
							<div className={styles.userEmail}>
								{user.email}
							</div>
						</div>
					</div>
				)}

				<div className={styles.statsGrid}>
					{Object.entries(mockStats).map(([key, value]) => (
						<div key={key} className={styles.statRow}>
							<span className={styles.statLabel}>
								{key
									.replace(/([A-Z])/g, ' $1')
									.replace(/^./, (str) =>
										str.toUpperCase()
									)}
							</span>
							<span className={styles.statValue}>
								{value}
								{key.includes('Percentage') ? '%' : ''}
							</span>
						</div>
					))}
				</div>

				{!user && (
					<div className={styles.guestMessage}>
						Sign in to track your statistics across devices
					</div>
				)}

				{children}
			</div>
		);
	}

	// Purchase modal body
	function renderPurchaseBody() {
		return (
			<div className={styles.purchaseContent}>
				{item && (
					<>
						<div className={styles.itemPreview}>
							{item.previewUrl && (
								<img
									src={item.previewUrl}
									alt={item.name}
									className={styles.itemImage}
								/>
							)}
							<h3>{item.label || item.name}</h3>
							{item.description && (
								<p>{item.description}</p>
							)}
						</div>

						<div className={styles.priceSection}>
							<span className={styles.priceLabel}>
								Price:
							</span>
							<span className={styles.priceValue}>
								{item.price} {item.currency || 'coins'}
							</span>
						</div>
					</>
				)}

				{error && (
					<div className={styles.error}>{error}</div>
				)}
				{success && (
					<div className={styles.success}>
						Purchase successful!
					</div>
				)}

				{children}
			</div>
		);
	}

	// VS Mode modal body
	function renderVSModeBody() {
		return (
			<div className={styles.vsModeContent}>
				{isSearching ?
					<div className={styles.searchingState}>
						<div className={styles.spinner}></div>
						<p>Searching for opponent...</p>
					</div>
				:	<div className={styles.modeOptions}>
						<button
							onClick={() => onSelect?.('room')}
							className={styles.modeButton}
						>
							Private Room
						</button>
						<button
							onClick={() => onSelect?.('matchmaking')}
							className={styles.modeButton}
						>
							Quick Match
						</button>
						<button
							onClick={() => onSelect?.('bot')}
							className={styles.modeButton}
						>
							VS Bot
						</button>
					</div>
				}
				{children}
			</div>
		);
	}

	// VS Room modal body
	function renderVSRoomBody() {
		return (
			<div className={styles.vsRoomContent}>
				<div className={styles.roomSection}>
					<label htmlFor='room-code'>Room Code:</label>
					<input
						id='room-code'
						type='text'
						value={roomCode}
						onChange={(e) => setRoomCode?.(e.target.value)}
						placeholder='Enter room code'
						className={styles.roomInput}
					/>
					{error && (
						<div className={styles.error}>{error}</div>
					)}
				</div>
				{children}
			</div>
		);
	}
};

export default ModalBodyFactory;
