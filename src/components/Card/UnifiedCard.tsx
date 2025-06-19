import React, { forwardRef, useState } from 'react';
import {
	CARD_CONFIGURATIONS,
	ExtendedCardKind,
	CardConfiguration,
	createCardConfig,
} from './CardConfigurations';
import styles from './Card.module.scss';
import cardStyles from './Card.module.scss';

// Base card props interface
export interface BaseCardProps
	extends React.HTMLAttributes<HTMLDivElement> {
	variant?: 'default' | 'elevated' | 'outlined' | 'filled';
	size?: 'small' | 'medium' | 'large';
	padding?: 'none' | 'small' | 'medium' | 'large';
	hover?: boolean;
	clickable?: boolean;
}

// Use the extended card kinds from configurations
export type CardKind = ExtendedCardKind;

export interface UnifiedCardProps
	extends Omit<
		BaseCardProps,
		'variant' | 'children' | 'content'
	> {
	kind: CardKind;

	// Content props
	children?: React.ReactNode;
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

	// Enhanced customization
	overrideConfig?: Partial<CardConfiguration>;
	customClassName?: string;
}

const UnifiedCard = forwardRef<
	HTMLDivElement,
	UnifiedCardProps
>(
	(
		{
			kind,
			children,
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
			className = '',
			onClick,
			overrideConfig = {},
			customClassName = '',
			...props
		},
		ref
	) => {
		const [isHovered, setIsHovered] = useState(false);

		// Get base configuration and apply overrides
		const config: CardConfiguration = {
			...CARD_CONFIGURATIONS[kind],
			...overrideConfig,
		};

		// Build comprehensive className
		const combinedClassName = [
			cardStyles.baseCard,
			cardStyles[`card-${config.variant}`],
			cardStyles[`card-${config.size}`],
			cardStyles[`card-padding-${config.padding}`],
			config.hover && cardStyles.cardHover,
			config.clickable && cardStyles.cardClickable,
			className,
			config.className,
			customClassName,
			// Notification type styling
			kind === 'notification' &&
				`notification-${notificationType}`,
		]
			.filter(Boolean)
			.join(' ');

		// Handle click behavior
		const handleClick = (
			event: React.MouseEvent<HTMLDivElement>
		) => {
			if (
				config.clickable ||
				config.behavior === 'clickable'
			) {
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
					<div className={styles.friendCardHeader}>
						<span
							className={`${styles.friendStatusDot} ${styles[statusClass]}`}
						/>
						<span className={styles.friendUsername}>
							{friend.username}
						</span>
					</div>
					<div className={styles.friendCardActions}>
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
					</div>
				</>
			);
		};

		// Render stats card content
		const renderStatsCardContent = () => {
			if (kind !== 'stats') return null;

			return (
				<>
					{statValue && (
						<div
							className='stat-value'
							style={{
								fontSize: '2rem',
								fontWeight: 'bold',
							}}
						>
							{statValue}
						</div>
					)}
					{statLabel && (
						<div
							className='stat-label'
							style={{ fontSize: '0.875rem', opacity: 0.8 }}
						>
							{statLabel}
						</div>
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
					<div
						className={`${styles.notificationHeader} notification-${notificationType}`}
					>
						<span className={styles.notificationIcon}>
							{getNotificationIcon()}
						</span>
						{title && (
							<h3 className='card-title'>{title}</h3>
						)}
					</div>
					{subtitle && (
						<p className='card-subtitle'>{subtitle}</p>
					)}
					{content && (
						<div className='card-content'>{content}</div>
					)}
					{children}
					{actions && (
						<div className='card-actions'>{actions}</div>
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
						<div className='card-content'>{content}</div>
					)}
					{children}
					{actions && (
						<div className='card-actions'>{actions}</div>
					)}
				</>
			);
		};

		return (
			<div
				ref={ref}
				className={combinedClassName}
				onClick={handleClick}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				{...props}
			>
				{renderCardContent()}
			</div>
		);
	}
);

UnifiedCard.displayName = 'UnifiedCard';

export default UnifiedCard;
