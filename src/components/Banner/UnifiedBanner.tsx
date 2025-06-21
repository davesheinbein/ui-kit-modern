import React, { forwardRef } from 'react';
import Banner from './Banner';
import { BannerBodyFactory } from './factory';
import {
	BannerKind,
	BANNER_CONFIGURATIONS,
} from './configurations';

export interface UnifiedBannerProps {
	kind: BannerKind;
	message?: string;
	className?: string;
	onClose?: () => void;
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
	// Notification/Toast specific props
	type?:
		| 'burn'
		| 'achievement'
		| 'system'
		| 'taunt'
		| 'success'
		| 'error'
		| 'info'
		| 'warning';
	icon?: React.ReactNode;
	duration?: number;
	index?: number;
	[key: string]: any;
}

/**
 * UnifiedBanner - Refactored to use the new DRY system
 * Maintains backward compatibility while leveraging the factory pattern
 */
const UnifiedBanner = forwardRef<
	HTMLDivElement,
	UnifiedBannerProps
>(
	(
		{ kind, message, className = '', onClose, ...props },
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

		// Handle auto-close
		const shouldAutoClose = config.autoClose && onClose;
		const handleClose =
			shouldAutoClose ? onClose
			: config.showCloseButton ? onClose
			: undefined;

		return (
			<Banner
				ref={ref}
				variant={config.variant}
				type={props.type || config.type}
				position={config.position}
				onClose={handleClose}
				autoClose={config.autoClose}
				duration={props.duration || config.duration}
				className={className}
				aria-live={
					config.kind === 'feedback' ?
						'polite'
					:	'assertive'
				}
			>
				<BannerBodyFactory
					kind={config.kind}
					configuration={config}
					message={message}
					icon={props.icon || config.icon}
					{...props}
				/>
			</Banner>
		);
	}
);

UnifiedBanner.displayName = 'UnifiedBanner';

export default UnifiedBanner;
