import React, { forwardRef } from 'react';
import { Wrapper } from '../Wrappers';
import { Button } from '../Button';
import { Icons, IconName } from '../Icons';
import styles from './banner.module.scss';
import {
	BANNER_CONFIGURATIONS,
	BannerKind,
	BannerConfiguration,
	BannerAction,
} from './configurations';

export interface BannerAction {
	label: string;
	onClick: () => void;
	variant?: 'primary' | 'secondary' | 'text';
	disabled?: boolean;
}

export interface BannerProps {
	'kind'?: BannerKind;
	'message'?: string;
	'className'?: string;

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

	'icon'?: React.ReactNode;
	'duration'?: number;

	'configuration'?: Partial<BannerConfiguration>;

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
	'close'?: () => void;
	'autoClose'?: boolean;
	'aria-live'?: 'polite' | 'assertive' | 'off';
	'children'?: React.ReactNode;
	'actions'?: BannerAction[];
	[key: string]: any;
}

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
			close,
			autoClose,
			'aria-live': ariaLive,
			children,
			actions,
			...props
		},
		ref
	) => {
		const config =
			BANNER_CONFIGURATIONS[
				kind as keyof typeof BANNER_CONFIGURATIONS
			] || {};

		const finalConfig = { ...config, ...configOverride };

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

		React.useEffect(() => {
			if (
				effectiveAutoClose &&
				close &&
				effectiveDuration
			) {
				const timer = setTimeout(close, effectiveDuration);
				return () => clearTimeout(timer);
			}
		}, [effectiveAutoClose, close, effectiveDuration]);

		const bannerClasses = [
			styles.banner,
			styles[`banner--${effectiveVariant}`],
			styles[`banner--${effectiveType}`],
			styles[`banner--${effectivePosition}`],
			className,
		]
			.filter(Boolean)
			.join(' ');

		let content: React.ReactNode = null;
		const renderIcon = (icon: any) => {
			if (!icon) return null;
			if (typeof icon === 'string') {
				return (
					<Icons
						name={icon as IconName}
						size={20}
						className={styles.bannerIcon}
					/>
				);
			}
			return icon;
		};

		const SIMPLE_BANNER_KINDS = [
			'feedback',
			'notification',
			'toast',
			'global',
		];
		const contentClassMap: Record<string, string> = {
			feedback: styles['banner__content--feedback'],
			notification: styles['banner__content--notification'],
			toast: styles['banner__content--toast'],
			global: styles['banner__content--global'],
		};
		const messageClassMap: Record<string, string> = {
			feedback: styles['banner__message--feedback'],
			notification: styles['banner__message--notification'],
			toast: styles['banner__message--toast'],
			global: styles['banner__message--global'],
		};

		const renderActions = () => {
			if (!actions || !actions.length) return null;
			return (
				<div className={styles.bannerActions}>
					{actions.map(
						(action: BannerAction, idx: number) => (
							<button
								key={action.label + idx}
								type='button'
								className={
									styles[
										`bannerAction--${action.variant || 'primary'}`
									]
								}
								disabled={action.disabled}
								onClick={action.onClick}
							>
								{action.label}
							</button>
						)
					)}
				</div>
			);
		};

		if (SIMPLE_BANNER_KINDS.includes(finalConfig.kind)) {
			content = (
				<div className={contentClassMap[finalConfig.kind]}>
					{renderIcon(effectiveIcon)}
					<span
						className={messageClassMap[finalConfig.kind]}
					>
						{message}
					</span>
					{renderActions()}
					{children}
				</div>
			);
		} else if (finalConfig.kind === 'status') {
			content = (
				<Wrapper
					className={styles['banner__content--status']}
				>
					<Wrapper className={styles['banner__status-row']}>
						{renderIcon(effectiveIcon)}
						{player?.avatarUrl && (
							<img
								src={player.avatarUrl}
								alt={player.username}
								className={styles['banner__status-avatar']}
							/>
						)}
						<Wrapper
							className={styles['banner__status-username']}
						>
							{player?.username}
							{player?.isYou && ' (You)'}
						</Wrapper>
						<Wrapper
							className={styles['banner__status-groups']}
						>
							{player?.groupsSolved || 0}/{totalGroups}
						</Wrapper>
						{showMistakes && (
							<Wrapper
								className={
									styles['banner__status-mistakes']
								}
							>
								{player?.mistakes || 0} mistakes
							</Wrapper>
						)}
					</Wrapper>

					{showTimer && timer && (
						<Wrapper
							className={styles['banner__status-timer']}
						>
							{timer}
						</Wrapper>
					)}

					{opponent && (
						<Wrapper
							className={styles['banner__status-row']}
						>
							{showMistakes && (
								<Wrapper
									className={
										styles['banner__status-mistakes']
									}
								>
									{opponent.mistakes} mistakes
								</Wrapper>
							)}
							<Wrapper
								className={styles['banner__status-groups']}
							>
								{opponent.groupsSolved}/{totalGroups}
							</Wrapper>
							<Wrapper
								className={
									styles['banner__status-username']
								}
							>
								{opponent.username}
							</Wrapper>
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

					{onEmoteClick && (
						<Button
							kind='vs-status-emote'
							className={styles['banner__status-emote-btn']}
							onClick={onEmoteClick}
							aria-label='Send emote'
						>
							<Wrapper
								className={
									styles['banner__status-emote-icon']
								}
							>
								😀
							</Wrapper>
						</Button>
					)}
				</Wrapper>
			);
		} else {
			content = message || children || 'Banner content';
		}

		const [isOpen, setIsOpen] = React.useState(true);

		const handleClose = () => {
			if (typeof close === 'function') {
				close();
			}
			setIsOpen(false);
		};

		if (!isOpen) return null;

		return (
			<Wrapper
				ref={ref}
				className={bannerClasses}
				aria-live={effectiveAriaLive}
				{...props}
			>
				{finalConfig.kind === 'status' ?
					<Wrapper
						className={styles['banner__content--status']}
					>
						<Wrapper
							className={styles['banner__status-row']}
						>
							{renderIcon(effectiveIcon)}
							{player?.avatarUrl && (
								<img
									src={player.avatarUrl}
									alt={player.username}
									className={
										styles['banner__status-avatar']
									}
								/>
							)}
							<Wrapper
								className={
									styles['banner__status-username']
								}
							>
								{player?.username}
								{player?.isYou && ' (You)'}
							</Wrapper>
							<Wrapper
								className={styles['banner__status-groups']}
							>
								{player?.groupsSolved || 0}/{totalGroups}
							</Wrapper>
							{showMistakes && (
								<Wrapper
									className={
										styles['banner__status-mistakes']
									}
								>
									{player?.mistakes || 0} mistakes
								</Wrapper>
							)}
						</Wrapper>
						{showTimer && timer && (
							<Wrapper
								className={styles['banner__status-timer']}
							>
								{timer}
							</Wrapper>
						)}
						{opponent && (
							<Wrapper
								className={styles['banner__status-row']}
							>
								{showMistakes && (
									<Wrapper
										className={
											styles['banner__status-mistakes']
										}
									>
										{opponent.mistakes} mistakes
									</Wrapper>
								)}
								<Wrapper
									className={
										styles['banner__status-groups']
									}
								>
									{opponent.groupsSolved}/{totalGroups}
								</Wrapper>
								<Wrapper
									className={
										styles['banner__status-username']
									}
								>
									{opponent.username}
								</Wrapper>
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

						{onEmoteClick && (
							<Button
								kind='vs-status-emote'
								className={
									styles['banner__status-emote-btn']
								}
								onClick={onEmoteClick}
								aria-label='Send emote'
							>
								<Wrapper
									className={
										styles['banner__status-emote-icon']
									}
								>
									😀
								</Wrapper>
							</Button>
						)}
					</Wrapper>
				:	<div
						className={styles['banner__content--unified']}
					>
						{renderIcon(effectiveIcon)}
						<span
							className={styles['banner__message--unified']}
						>
							{message}
						</span>
						{renderActions()}
						{children}
					</div>
				}
				{close && (
					<Button
						kind='close'
						className={styles.bannerCloseButton}
						onClick={handleClose}
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
