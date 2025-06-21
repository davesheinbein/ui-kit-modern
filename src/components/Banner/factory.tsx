import React, { forwardRef } from 'react';
import Banner from './Banner';
import BannerBodyFactory from './BannerBodyFactory';
import {
	BANNER_CONFIGURATIONS,
	BannerKind,
	BannerConfiguration,
} from './configurations';

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

/**
 * BannerFactory - Ultra-DRY banner creation using configurations
 *
 * Usage examples:
 * <BannerFactory kind="feedback" message="Game completed!" />
 * <BannerFactory kind="burn-notification" message="Player burned!" />
 * <BannerFactory kind="achievement-notification" message="Achievement unlocked!" />
 * <BannerFactory kind="success-toast" message="Saved successfully!" />
 * <BannerFactory kind="vs-status" player={playerData} opponent={opponentData} />
 */
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
 * Ultra-DRY Banner shortcuts - for maximum convenience
 */
export const Ban = BannerFactoryClass; // Ultra-short alias

/**
 * Banner presets with common patterns
 */
export const BannerPresets = {
	// Feedback banners
	gameComplete: (message: string) => Ban.feedback(message),
	gameFeedback: (message: string) => Ban.feedback(message),

	// Notifications
	burnPlayer: (message: string) =>
		Ban.notification(message, 'burn'),
	achievement: (message: string) =>
		Ban.notification(message, 'achievement'),
	systemAlert: (message: string) =>
		Ban.notification(message, 'system'),
	taunt: (message: string) =>
		Ban.notification(message, 'taunt'),

	// Toasts
	success: (message: string) =>
		Ban.toast(message, 'success'),
	error: (message: string) => Ban.toast(message, 'error'),
	warning: (message: string) =>
		Ban.toast(message, 'warning'),
	info: (message: string) => Ban.toast(message, 'info'),

	// VS Game
	vsStatus: (
		player: BannerFactoryProps['player'],
		opponent?: BannerFactoryProps['opponent'],
		timer?: string
	) => Ban.status(player, { opponent, timer }),

	// Global toasts
	globalToast: (message: string) => Ban.global(message),
};

export default BannerFactory;
