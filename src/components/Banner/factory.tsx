import React, { forwardRef } from 'react';
import { Wrapper } from '../Wrappers';
import Banner from './Banner';
import { Button } from '../Button';
import styles from './Banner.module.scss';
import {
	BANNER_CONFIGURATIONS,
	BannerKind,
	BannerConfiguration,
} from './configurations';

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

export const BannerBodyFactory = forwardRef<
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
					<Wrapper
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
					</Wrapper>
				);

			case 'notification':
				return (
					<Wrapper ref={ref} {...props}>
						{message}
					</Wrapper>
				);

			case 'toast':
				return (
					<Wrapper
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
					</Wrapper>
				);

			case 'status':
				return (
					<Wrapper
						ref={ref}
						className={styles.vsStatusBar}
						{...props}
					>
						{/* Left: Player info */}
						<Wrapper
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
						</Wrapper>

						{/* Center: Timer */}
						{showTimer && timer && (
							<Wrapper className={styles.vsStatusTimer}>
								{timer}
							</Wrapper>
						)}

						{/* Right: Opponent info */}
						{opponent && (
							<Wrapper
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
							</Wrapper>
						)}

						{/* Emote button */}
						{onEmoteClick && (
							<Button
								kind='vs-status-emote'
								className={styles.vsStatusEmoteBtn}
								onClick={onEmoteClick}
								aria-label='Send emote'
							>
								😀
							</Button>
						)}
					</Wrapper>
				);

			case 'global':
				// This would render multiple toast banners from a global state
				return (
					<Wrapper ref={ref} {...props}>
						{/* This should be connected to your global notification state */}
						{message && (
							<Wrapper
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '8px',
								}}
							>
								{icon && <span>{icon}</span>}
								<span>{message}</span>
							</Wrapper>
						)}
					</Wrapper>
				);

			default:
				return (
					<Wrapper ref={ref} {...props}>
						{message || 'Banner content'}
					</Wrapper>
				);
		}
	}
);

BannerBodyFactory.displayName = 'BannerBodyFactory';

export interface BannerFactoryProps {
	kind: BannerKind;
	message?: string;
	onClose?: () => void;
	className?: string;
	// Status bar specific props
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
	// Notification specific props
	type?:
		| 'burn'
		| 'achievement'
		| 'system'
		| 'taunt'
		| 'success'
		| 'error'
		| 'info'
		| 'warning';
	index?: number;
	// Toast specific props
	icon?: React.ReactNode;
	duration?: number;
	// Override any configuration
	configuration?: Partial<BannerConfiguration>;
	[key: string]: any;
}

const BannerFactory = forwardRef<
	HTMLDivElement,
	BannerFactoryProps
>(
	(
		{
			kind,
			message,
			onClose,
			className = '',
			configuration: configOverride,
			...props
		},
		ref
	) => {
		const config =
			BANNER_CONFIGURATIONS[
				kind as keyof typeof BANNER_CONFIGURATIONS
			];

		if (!config) {
			console.warn(`Unknown banner kind: ${kind}`);
			return null;
		}

		// Merge configuration with overrides
		const finalConfig = { ...config, ...configOverride };

		// Handle auto-close
		const shouldAutoClose =
			finalConfig.autoClose && onClose;
		const handleClose =
			shouldAutoClose ? onClose
			: finalConfig.showCloseButton ? onClose
			: undefined;

		return (
			<Banner
				ref={ref}
				variant={finalConfig.variant}
				type={props.type || finalConfig.type}
				position={finalConfig.position}
				onClose={handleClose}
				autoClose={finalConfig.autoClose}
				duration={props.duration || finalConfig.duration}
				className={className}
				aria-live={
					finalConfig.kind === 'feedback' ?
						'polite'
					:	'assertive'
				}
			>
				<BannerBodyFactory
					kind={finalConfig.kind}
					configuration={finalConfig}
					message={message}
					icon={props.icon || finalConfig.icon}
					{...props}
				/>
			</Banner>
		);
	}
);

BannerFactory.displayName = 'BannerFactory';

/**
 * Banner Factory - Creates banners with minimal configuration
 * This is the most DRY way to create banners in the entire system
 */
export class BannerFactoryClass {
	static create(
		kind: BannerKind,
		props: Omit<BannerFactoryProps, 'kind'> = {}
	) {
		return <BannerFactory kind={kind} {...props} />;
	}

	// Quick banner creation methods
	static feedback(
		message: string,
		props: Partial<BannerFactoryProps> = {}
	) {
		return this.create('feedback', { message, ...props });
	}

	static notification(
		message: string,
		type:
			| 'burn'
			| 'achievement'
			| 'system'
			| 'taunt' = 'system',
		props: Partial<BannerFactoryProps> = {}
	) {
		return this.create(
			`${type}-notification` as BannerKind,
			{ message, type, ...props }
		);
	}

	static toast(
		message: string,
		type:
			| 'success'
			| 'error'
			| 'warning'
			| 'info' = 'success',
		props: Partial<BannerFactoryProps> = {}
	) {
		return this.create(`${type}-toast` as BannerKind, {
			message,
			type,
			...props,
		});
	}

	static status(
		player: BannerFactoryProps['player'],
		props: Partial<BannerFactoryProps> = {}
	) {
		return this.create('vs-status', { player, ...props });
	}

	static global(
		message: string,
		props: Partial<BannerFactoryProps> = {}
	) {
		return this.create('global', { message, ...props });
	}
}

/**
 * Banner presets with common patterns
 */
export const BannerPresets = {
	// Feedback banners
	gameComplete: (message: string) =>
		BannerFactoryClass.feedback(message),
	gameFeedback: (message: string) =>
		BannerFactoryClass.feedback(message),

	// Notifications
	burnPlayer: (message: string) =>
		BannerFactoryClass.notification(message, 'burn'),
	achievement: (message: string) =>
		BannerFactoryClass.notification(message, 'achievement'),
	systemAlert: (message: string) =>
		BannerFactoryClass.notification(message, 'system'),
	taunt: (message: string) =>
		BannerFactoryClass.notification(message, 'taunt'),

	// Toasts
	success: (message: string) =>
		BannerFactoryClass.toast(message, 'success'),
	error: (message: string) =>
		BannerFactoryClass.toast(message, 'error'),
	warning: (message: string) =>
		BannerFactoryClass.toast(message, 'warning'),
	info: (message: string) =>
		BannerFactoryClass.toast(message, 'info'),

	// VS Game
	vsStatus: (
		player: BannerFactoryProps['player'],
		opponent?: BannerFactoryProps['opponent'],
		timer?: string
	) =>
		BannerFactoryClass.status(player, { opponent, timer }),

	// Global toasts
	globalToast: (message: string) =>
		BannerFactoryClass.global(message),
};

export default BannerFactory;
