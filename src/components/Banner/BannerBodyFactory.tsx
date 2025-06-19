import React, { forwardRef } from 'react';
import styles from './Banner.module.scss';

export interface BannerBodyFactoryProps {
	kind:
		| 'feedback'
		| 'notification'
		| 'toast'
		| 'status'
		| 'global';
	configuration?: any;
	message?: string;
	icon?: React.ReactNode;
	player?: {
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
	totalGroups?: number;
	showMistakes?: boolean;
	showTimer?: boolean;
	onEmoteClick?: () => void;
	index?: number;
	[key: string]: any;
}

/**
 * BannerBodyFactory - Creates the banner content based on banner kind
 * This is the DRY equivalent of the individual banner components
 */
const BannerBodyFactory = forwardRef<
	HTMLDivElement,
	BannerBodyFactoryProps
>(
	(
		{
			kind,
			configuration,
			message,
			icon = '🎉',
			player,
			opponent,
			timer,
			totalGroups = 4,
			showMistakes = true,
			showTimer = true,
			onEmoteClick,
			index,
			...props
		},
		ref
	) => {
		switch (kind) {
			case 'feedback':
				return (
					<div
						ref={ref}
						style={{
							width: '100%',
							textAlign: 'center',
							color: 'inherit',
							fontSize: 'inherit',
							fontWeight: 'inherit',
						}}
						{...props}
					>
						{message}
					</div>
				);

			case 'notification':
				return (
					<div ref={ref} {...props}>
						{message}
					</div>
				);

			case 'toast':
				return (
					<div
						ref={ref}
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '8px',
						}}
						{...props}
					>
						{icon && <span>{icon}</span>}
						<span>{message}</span>
					</div>
				);

			case 'status':
				return (
					<div
						ref={ref}
						className={styles.vsStatusBar}
						{...props}
					>
						{/* Left: Player info */}
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: 8,
							}}
						>
							{player?.avatarUrl && (
								<img
									src={player.avatarUrl}
									alt={player.username}
									className={styles.vsStatusAvatar}
								/>
							)}
							<span className={styles.vsStatusUsername}>
								{player?.username}
								{player?.isYou && ' (You)'}
							</span>
							<span className={styles.vsStatusGroups}>
								{player?.groupsSolved || 0}/{totalGroups}
							</span>
							{showMistakes && (
								<span className={styles.vsStatusMistakes}>
									{player?.mistakes || 0} mistakes
								</span>
							)}
						</div>

						{/* Center: Timer */}
						{showTimer && timer && (
							<div className={styles.vsStatusTimer}>
								{timer}
							</div>
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
								{showMistakes && (
									<span className={styles.vsStatusMistakes}>
										{opponent.mistakes} mistakes
									</span>
								)}
								<span className={styles.vsStatusGroups}>
									{opponent.groupsSolved}/{totalGroups}
								</span>
								<span className={styles.vsStatusUsername}>
									{opponent.username}
								</span>
								{opponent.avatarUrl && (
									<img
										src={opponent.avatarUrl}
										alt={opponent.username}
										className={styles.vsStatusAvatar}
									/>
								)}
							</div>
						)}

						{/* Emote button */}
						{onEmoteClick && (
							<button
								className={styles.vsStatusEmoteBtn}
								onClick={onEmoteClick}
								type='button'
								aria-label='Send emote'
							>
								😀
							</button>
						)}
					</div>
				);

			case 'global':
				// This would render multiple toast banners from a global state
				return (
					<div ref={ref} {...props}>
						{/* This should be connected to your global notification state */}
						{message && (
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '8px',
								}}
							>
								{icon && <span>{icon}</span>}
								<span>{message}</span>
							</div>
						)}
					</div>
				);

			default:
				return (
					<div ref={ref} {...props}>
						{message || 'Banner content'}
					</div>
				);
		}
	}
);

BannerBodyFactory.displayName = 'BannerBodyFactory';

export default BannerBodyFactory;
