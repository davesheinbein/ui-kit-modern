import React, { forwardRef } from 'react';
import { Wrapper } from '../Wrappers';
import { Button } from '../Button';
import styles from './Banner.module.scss';
import {
	BANNER_CONFIGURATIONS,
	BannerKind,
	BannerConfiguration,
} from './configurations';

export interface BannerProps {
	// General
	'kind'?: BannerKind;
	'message'?: string;
	'className'?: string;
	// Status bar specific props
	'player'?: {
		username: string;
		avatarUrl?: string;
		groupsSolved: number;
		mistakes: number;
		isYou?: boolean;
	};
	'opponent'?: {
		username: string;
		avatarUrl?: string;
		groupsSolved: number;
		mistakes: number;
	};
	'timer'?: string;
	'totalGroups'?: number;
	'showMistakes'?: boolean;
	'showTimer'?: boolean;
	'onEmoteClick'?: () => void;
	// Notification specific props
	'type'?:
		| 'burn'
		| 'achievement'
		| 'system'
		| 'taunt'
		| 'success'
		| 'error'
		| 'info'
		| 'warning';
	'index'?: number;
	// Toast specific props
	'icon'?: React.ReactNode;
	'duration'?: number;
	// Override any configuration
	'configuration'?: Partial<BannerConfiguration>;
	// Core banner props
	'variant'?:
		| 'feedback'
		| 'notification'
		| 'toast'
		| 'status'
		| 'global';
	'position'?:
		| 'top'
		| 'bottom'
		| 'fixed'
		| 'relative'
		| 'center';
	'onClose'?: () => void;
	'autoClose'?: boolean;
	'aria-live'?: 'polite' | 'assertive' | 'off';
	'children'?: React.ReactNode;
	[key: string]: any;
}

/**
 * Base Banner component - provides consistent styling and layout
 * Use this as the foundation for all banner types
 * Similar to the Modal and Forms base components
 */
const Banner = forwardRef<HTMLDivElement, BannerProps>(
	(
		{
			kind = 'notification',
			message,
			player,
			opponent,
			timer,
			totalGroups = 4,
			showMistakes = true,
			showTimer = true,
			onEmoteClick,
			type,
			index,
			icon,
			duration,
			'configuration': configOverride,
			className = '',
			variant,
			position,
			onClose,
			autoClose,
			'aria-live': ariaLive,
			children,
			...props
		},
		ref
	) => {
		// Get config for kind
		const config =
			BANNER_CONFIGURATIONS[
				kind as keyof typeof BANNER_CONFIGURATIONS
			] || {};
		// Merge configuration with overrides
		const finalConfig = { ...config, ...configOverride };

		// Determine effective props
		const effectiveVariant =
			variant || finalConfig.variant || 'notification';
		const effectiveType =
			type || finalConfig.type || 'info';
		const effectivePosition =
			position || finalConfig.position || 'relative';
		const effectiveIcon =
			icon !== undefined ? icon : finalConfig.icon;
		const effectiveDuration =
			duration || finalConfig.duration || 3200;
		const effectiveAutoClose =
			typeof autoClose === 'boolean' ? autoClose : (
				finalConfig.autoClose
			);
		const effectiveAriaLive =
			ariaLive ||
			(finalConfig.kind === 'feedback' ?
				'polite'
			:	'assertive');

		// Auto-close functionality
		React.useEffect(() => {
			if (
				effectiveAutoClose &&
				onClose &&
				effectiveDuration
			) {
				const timer = setTimeout(
					onClose,
					effectiveDuration
				);
				return () => clearTimeout(timer);
			}
		}, [effectiveAutoClose, onClose, effectiveDuration]);

		const bannerClasses = [
			styles.banner,
			styles[`banner--${effectiveVariant}`],
			styles[`banner--${effectiveType}`],
			styles[`banner--${effectivePosition}`],
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Render content based on kind
		let content: React.ReactNode = null;
		switch (finalConfig.kind) {
			case 'feedback':
				content = (
					<Wrapper
						className={styles['banner__content--feedback']}
					>
						<span
							className={
								styles['banner__message--feedback']
							}
						>
							{message}
						</span>
					</Wrapper>
				);
				break;
			case 'notification':
				content = (
					<Wrapper
						className={
							styles['banner__content--notification']
						}
					>
						<span
							className={
								styles['banner__message--notification']
							}
						>
							{message}
						</span>
					</Wrapper>
				);
				break;
			case 'toast':
				content = (
					<Wrapper
						className={styles['banner__content--toast']}
					>
						{effectiveIcon && <span>{effectiveIcon}</span>}
						<span
							className={styles['banner__message--toast']}
						>
							{message}
						</span>
					</Wrapper>
				);
				break;
			case 'status':
				content = (
					<Wrapper
						className={styles['banner__content--status']}
					>
						{/* Left: Player info */}
						<Wrapper
							className={styles['banner__status-row']}
						>
							{player?.avatarUrl && (
								<img
									src={player.avatarUrl}
									alt={player.username}
									className={
										styles['banner__status-avatar']
									}
								/>
							)}
							<span
								className={
									styles['banner__status-username']
								}
							>
								{player?.username}
								{player?.isYou && ' (You)'}
							</span>
							<span
								className={styles['banner__status-groups']}
							>
								{player?.groupsSolved || 0}/{totalGroups}
							</span>
							{showMistakes && (
								<span
									className={
										styles['banner__status-mistakes']
									}
								>
									{player?.mistakes || 0} mistakes
								</span>
							)}
						</Wrapper>
						{/* Center: Timer */}
						{showTimer && timer && (
							<Wrapper
								className={styles['banner__status-timer']}
							>
								{timer}
							</Wrapper>
						)}
						{/* Right: Opponent info */}
						{opponent && (
							<Wrapper
								className={styles['banner__status-row']}
							>
								{showMistakes && (
									<span
										className={
											styles['banner__status-mistakes']
										}
									>
										{opponent.mistakes} mistakes
									</span>
								)}
								<span
									className={
										styles['banner__status-groups']
									}
								>
									{opponent.groupsSolved}/{totalGroups}
								</span>
								<span
									className={
										styles['banner__status-username']
									}
								>
									{opponent.username}
								</span>
								{opponent.avatarUrl && (
									<img
										src={opponent.avatarUrl}
										alt={opponent.username}
										className={
											styles['banner__status-avatar']
										}
									/>
								)}
							</Wrapper>
						)}
						{/* Emote button */}
						{onEmoteClick && (
							<Button
								kind='vs-status-emote'
								className={
									styles['banner__status-emote-btn']
								}
								onClick={onEmoteClick}
								aria-label='Send emote'
							>
								<span
									className={
										styles['banner__status-emote-icon']
									}
								>
									😀
								</span>
							</Button>
						)}
					</Wrapper>
				);
				break;
			case 'global':
				content =
					message ?
						<Wrapper
							className={styles['banner__content--global']}
						>
							{effectiveIcon && (
								<span>{effectiveIcon}</span>
							)}
							<span
								className={
									styles['banner__message--global']
								}
							>
								{message}
							</span>
						</Wrapper>
					:	null;
				break;
			default:
				content = message || children || 'Banner content';
		}

		return (
			<Wrapper
				ref={ref}
				className={bannerClasses}
				aria-live={effectiveAriaLive}
				{...props}
			>
				{content}
				{onClose && (
					<Button
						kind='close'
						className={styles.bannerCloseButton}
						onClick={onClose}
						aria-label='Close banner'
					>
						×
					</Button>
				)}
			</Wrapper>
		);
	}
);

Banner.displayName = 'Banner';

export default Banner;
