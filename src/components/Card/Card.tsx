import React, { forwardRef } from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Card.module.scss';
import {
	ExtendedCardKind,
	CARD_CONFIGURATIONS,
} from './configurations';

export interface CardProps
	extends Omit<
		React.HTMLAttributes<HTMLDivElement>,
		'content'
	> {
	children?: React.ReactNode;
	className?: string;
	variant?: 'default' | 'elevated' | 'outlined' | 'filled';
	size?: 'small' | 'medium' | 'large';
	padding?: 'none' | 'small' | 'medium' | 'large';
	hover?: boolean;
	clickable?: boolean;
	onClick?: (
		event: React.MouseEvent<HTMLDivElement>
	) => void;
	style?: React.CSSProperties;

	// Enhanced props for kind-based configuration
	kind?: ExtendedCardKind;

	// Content props
	title?: string;
	subtitle?: string;
	content?: React.ReactNode;
	actions?: React.ReactNode;

	// Friend card specific props
	friend?: {
		id: string;
		username: string;
		online: boolean;
		division?: string;
		tier?: string;
		inMatch?: boolean;
		idle?: boolean;
	};
	onChallenge?: (id: string) => void;
	onMessage?: (id: string) => void;
	onRemove?: (id: string) => void;
	unreadCount?: number;

	// Notification card props
	notificationType?:
		| 'info'
		| 'warning'
		| 'error'
		| 'success';

	// Stats card props
	statValue?: string | number;
	statLabel?: string;
}

/**
 * Base Card component - provides consistent styling and layout
 * Now supports kind-based configuration for specialized card types
 * Simplified from the previous Card approach
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
	(
		{
			children,
			className = '',
			variant,
			size,
			padding,
			hover,
			clickable,
			onClick,
			style,
			kind,
			title,
			subtitle,
			content,
			actions,
			friend,
			onChallenge,
			onMessage,
			onRemove,
			unreadCount = 0,
			notificationType = 'info',
			statValue,
			statLabel,
			...props
		},
		ref
	) => {
		// Get configuration from kind if provided
		const config = kind ? CARD_CONFIGURATIONS[kind] : null;

		// Use kind config as defaults, allow prop overrides
		const finalVariant =
			variant || config?.variant || 'default';
		const finalSize = size || config?.size || 'medium';
		const finalPadding =
			padding || config?.padding || 'medium';
		const finalHover =
			hover !== undefined ? hover : config?.hover || false;
		const finalClickable =
			clickable !== undefined ? clickable : (
				config?.clickable || false
			);

		const combinedClassName = [
			styles.baseCard,
			styles[`card-${finalVariant}`],
			styles[`card-${finalSize}`],
			styles[`card-padding-${finalPadding}`],
			finalHover && styles.cardHover,
			finalClickable && styles.cardClickable,
			config?.className, // Add kind-specific styling
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Handle click behavior
		const handleClick = (
			event: React.MouseEvent<HTMLDivElement>
		) => {
			if (finalClickable) {
				onClick?.(event);
			}
		};

		// Render friend card content
		const renderFriendCardContent = () => {
			if (!friend) return null;

			const getStatus = (friend: any) => {
				if (friend.online && friend.inMatch)
					return { text: 'In match', color: '#a259f7' };
				if (friend.online && friend.idle)
					return { text: 'Idle', color: '#fbbf24' };
				if (friend.online)
					return { text: 'Online', color: '#22c55e' };
				return { text: 'Offline', color: '#64748b' };
			};

			const STATUS_CLASS_MAP: Record<string, string> = {
				'In match': 'status-inmatch',
				'Idle': 'status-idle',
				'Online': 'status-online',
				'Offline': 'status-offline',
			};

			const status = getStatus(friend);
			const statusClass =
				STATUS_CLASS_MAP[status.text] || 'status-offline';

			return (
				<>
					<Wrapper className={styles.friendCardHeader}>
						<span
							className={`${styles.friendStatusDot} ${styles[statusClass]}`}
						/>
						<span className={styles.friendUsername}>
							{friend.username}
						</span>
					</Wrapper>
					<Wrapper className={styles.friendCardActions}>
						{onChallenge && (
							<button
								onClick={() => onChallenge(friend.id)}
							>
								Challenge
							</button>
						)}
						{onMessage && (
							<button onClick={() => onMessage(friend.id)}>
								Message
								{unreadCount > 0 ? ` (${unreadCount})` : ''}
							</button>
						)}
						{onRemove && (
							<button onClick={() => onRemove(friend.id)}>
								Remove
							</button>
						)}
					</Wrapper>
				</>
			);
		};

		// Render stats card content
		const renderStatsCardContent = () => {
			if (kind !== 'stats') return null;

			return (
				<>
					{statValue && (
						<Wrapper
							className={styles['stats-card__value']}
						>
							{statValue}
						</Wrapper>
					)}
					{statLabel && (
						<Wrapper
							className={styles['stats-card__label']}
						>
							{statLabel}
						</Wrapper>
					)}
				</>
			);
		};

		// Render notification card content
		const renderNotificationCardContent = () => {
			if (kind !== 'notification') return null;

			const getNotificationIcon = () => {
				switch (notificationType) {
					case 'success':
						return '✅';
					case 'warning':
						return '⚠️';
					case 'error':
						return '❌';
					case 'info':
					default:
						return 'ℹ️';
				}
			};

			return (
				<>
					<Wrapper
						className={`${styles.notificationHeader} notification-${notificationType}`}
					>
						<span className={styles.notificationIcon}>
							{getNotificationIcon()}
						</span>
						{title && (
							<h3 className='card-title'>{title}</h3>
						)}
					</Wrapper>
					{subtitle && (
						<p className='card-subtitle'>{subtitle}</p>
					)}
					{content && (
						<Wrapper className='card-content'>
							{content}
						</Wrapper>
					)}
					{children}
					{actions && (
						<Wrapper className='card-actions'>
							{actions}
						</Wrapper>
					)}
				</>
			);
		};

		// Render card content based on kind
		const renderCardContent = () => {
			if (kind === 'friend') {
				return renderFriendCardContent();
			}

			if (kind === 'stats') {
				return renderStatsCardContent();
			}

			if (kind === 'notification') {
				return renderNotificationCardContent();
			}

			// Default content rendering
			return (
				<>
					{title && <h3 className='card-title'>{title}</h3>}
					{subtitle && (
						<p className='card-subtitle'>{subtitle}</p>
					)}
					{content && (
						<Wrapper className='card-content'>
							{content}
						</Wrapper>
					)}
					{children}
					{actions && (
						<Wrapper className='card-actions'>
							{actions}
						</Wrapper>
					)}
				</>
			);
		};

		return (
			<Wrapper
				ref={ref}
				className={combinedClassName}
				onClick={handleClick}
				style={style}
				{...props}
			>
				{renderCardContent()}
			</Wrapper>
		);
	}
);

Card.displayName = 'Card';

/**
 * Create a card with a specific kind and minimal props
 * @example createCard('friend', { friend: friendData })
 */
export function createCard(
	kind: ExtendedCardKind,
	props: Omit<CardProps, 'kind'> = {}
): React.ReactElement<CardProps> {
	return <Card kind={kind} {...props} />;
}

/**
 * Create a card with a custom configuration override (for advanced use)
 */
export function createCardWithConfig(
	kind: ExtendedCardKind,
	configOverride: Partial<
		(typeof CARD_CONFIGURATIONS)[ExtendedCardKind]
	>,
	props: Omit<CardProps, 'kind'> = {}
): React.ReactElement<CardProps> {
	// For now, just pass through; configOverride is not used directly, but could be merged in future
	return <Card kind={kind} {...props} />;
}

// Quick access helpers for common cards (formerly CardPresets)
export const FriendCard = (
	props: Omit<CardProps, 'kind'>
) => <Card kind='friend' {...props} />;
export const ProfileCard = (
	props: Omit<CardProps, 'kind'>
) => <Card kind='profile' {...props} />;
export const NotificationCard = (
	props: Omit<CardProps, 'kind'>
) => <Card kind='notification' {...props} />;
export const StatsCard = (
	props: Omit<CardProps, 'kind'>
) => <Card kind='stats' {...props} />;
export const GameCard = (
	props: Omit<CardProps, 'kind'>
) => <Card kind='game' {...props} />;
export const PuzzleCard = (
	props: Omit<CardProps, 'kind'>
) => <Card kind='puzzle' {...props} />;
export const RoomCard = (
	props: Omit<CardProps, 'kind'>
) => <Card kind='room-info' {...props} />;
export const MatchCard = (
	props: Omit<CardProps, 'kind'>
) => <Card kind='match-summary' {...props} />;
export const InfoCard = (
	props: Omit<CardProps, 'kind'>
) => <Card kind='default' hover {...props} />;
export const ActionCard = (
	props: Omit<CardProps, 'kind'>
) => <Card kind='elevated' clickable hover {...props} />;
export const ContentCard = (
	props: Omit<CardProps, 'kind'>
) => <Card kind='outlined' {...props} />;

export default Card;
