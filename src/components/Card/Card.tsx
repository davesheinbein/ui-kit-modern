import React, { forwardRef, useState } from 'react';
import { Wrapper } from '../Wrappers';
import { Button } from '../Button';
import { Icons } from '../Icons';
import styles from './card.module.scss';
import {
	ExtendedCardKind,
	CARD_CONFIGURATIONS,
} from './configurations';
import LeaderboardCardContent from './Sub/Leaderboard';
import FriendCardContent from './Sub/Friend';
import ProfileCardContent from './Sub/Profile';
import StatsCardContent from './Sub/Stats';
import PuzzleCardContent from './Sub/Puzzle';
import MatchSummaryCardContent from './Sub/MatchSummary';
import UserStatusCardContent from './Sub/UserStatus';
import NotificationCardContent from './Sub/Notification';

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
		avatar?: string; // NEW: avatar support
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
	dismissible?: boolean;
	onDismiss?: () => void;

	// Stats card props
	statValue?: string | number;
	statLabel?: string;
	additionalStats?: Array<{
		label: string;
		value: string | number;
	}>; // NEW: for richer stats

	// Profile card props
	profile?: {
		id: string;
		name: string;
		avatar?: string;
		bio?: string;
		level?: number;
		points?: number;
		achievements?: number;
		gamesPlayed?: number;
		winRate?: number;
	};

	// Room info card props
	roomInfo?: {
		id: string;
		title: string;
		icon?: React.ReactNode;
		showIcon?: boolean; // NEW: toggling icon
		iconPosition?: 'left' | 'right'; // NEW: icon position
		players?: number;
		maxPlayers?: number;
		status?: string;
	};

	// Leaderboard card props
	leaderboard?: Array<{
		id: string;
		name: string;
		score: number;
		avatar?: string;
		rank?: number;
		level?: number;
		streak?: number;
		winRate?: number;
		country?: string;
		gamesPlayed?: number;
	}>;

	// Puzzle card props
	puzzle?: {
		id: string;
		title: string;
		img?: string;
		description?: string;
		difficulty?: string;
		category?: string;
		completionRate?: number;
		averageTime?: number;
		dateCreated?: string;
		creator?: string;
	};

	// Match summary card props
	matchSummary?: {
		teamA: string;
		teamB: string;
		scoreA: number;
		scoreB: number;
		mvp?: string;
		summary?: string;
	};

	// User status card props
	userStatus?: {
		name: string;
		avatar?: string;
		status: string;
		statusMessage?: string;
	};

	// NEW: shape prop for card geometry
	shape?:
		| 'horizontal-rect'
		| 'vertical-rect'
		| 'square'
		| 'circle';

	/** Width of the card (CSS value, e.g. '100%', '300px') */
	w?: string | number;
	/** Height of the card (CSS value, e.g. '100%', '200px') */
	h?: string | number;
	/** Minimum width of the card */
	minW?: string | number;
	/** Minimum height of the card */
	minH?: string | number;
	/** Maximum width of the card */
	maxW?: string | number;
	/** Maximum height of the card */
	maxH?: string | number;
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
			friend,
			onChallenge,
			onMessage,
			onRemove,
			unreadCount,
			profile,
			statValue,
			statLabel,
			additionalStats,
			leaderboard,
			puzzle,
			matchSummary,
			userStatus,
			notificationType,
			title,
			subtitle,
			content,
			actions,
			dismissible = false,
			onDismiss,
			shape = 'horizontal-rect',
			w,
			h,
			minW,
			minH,
			maxW,
			maxH,
			...props
		},
		ref
	) => {
		// State for controlling card visibility when dismissible
		const [isVisible, setIsVisible] = useState(true);

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
			dismissible && styles.dismissible,
			config?.className, // Add kind-specific styling
			shape && styles[`card-shape-${shape}`], // Add shape class
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

		// --- Kind-specific layouts ---
		// Accessibility & keyboard navigation helpers
		const isInteractive =
			finalClickable ||
			finalHover ||
			kind === 'friend' ||
			kind === 'game' ||
			kind === 'settings' ||
			kind === 'chat-preview';
		const ariaLabel = title || kind || 'Card';
		const [pressed, setPressed] = React.useState(false);

		const handleKeyDown = (
			event: React.KeyboardEvent<HTMLDivElement>
		) => {
			if (!isInteractive) return;
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				setPressed(true);
				onClick?.(event as any);
			}
		};
		const handleKeyUp = (
			event: React.KeyboardEvent<HTMLDivElement>
		) => {
			if (!isInteractive) return;
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				setPressed(false);
			}
		};

		const renderCardContent = () => {
			switch (kind) {
				case 'friend':
					return friend ?
							<FriendCardContent
								friend={friend}
								onChallenge={onChallenge}
								onMessage={onMessage}
								onRemove={onRemove}
								unreadCount={unreadCount}
							/>
						:	null;
				case 'profile':
					return profile ?
							<ProfileCardContent profile={profile} />
						:	null;
				case 'stats':
					return (
						<StatsCardContent
							statValue={statValue}
							statLabel={statLabel}
							additionalStats={additionalStats}
						/>
					);
				case 'leaderboard':
					return leaderboard ?
							<LeaderboardCardContent
								leaderboard={leaderboard}
								size={size}
								title={title}
								subtitle={subtitle}
							/>
						:	null;
				case 'puzzle':
					return puzzle ?
							<PuzzleCardContent puzzle={puzzle} />
						:	null;
				case 'match-summary':
					return matchSummary ?
							<MatchSummaryCardContent
								matchSummary={matchSummary}
							/>
						:	null;
				case 'user-status':
					return userStatus ?
							<UserStatusCardContent
								userStatus={userStatus}
							/>
						:	null;
				case 'notification':
					return (
						<NotificationCardContent
							notificationType={notificationType}
							title={title}
							subtitle={subtitle}
							content={content}
							actions={actions}
						/>
					);
				// --- Consolidated: only data changes, layout is shared ---
				case 'chat-preview':
					return (
						<Wrapper className={styles['shared-list-card']}>
							{title && <h3>{title}</h3>}
							{subtitle && <p>{subtitle}</p>}
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
						</Wrapper>
					);
				case 'custom':
					return (
						<Wrapper className={styles['custom-card']}>
							{children}
						</Wrapper>
					);
				// --- Variants: only style changes ---
				case 'default':
				case 'elevated':
				case 'outlined':
				case 'filled':
				default:
					return (
						<>
							{title && (
								<h3 className='card-title'>{title}</h3>
							)}
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
			}
		};

		// Don't render the card if it's been dismissed
		if (!isVisible) {
			return null;
		}

		return (
			<Wrapper
				ref={ref}
				className={combinedClassName}
				onClick={handleClick}
				style={style}
				w={w}
				h={h}
				minW={minW}
				minH={minH}
				maxW={maxW}
				maxH={maxH}
				role={isInteractive ? 'button' : undefined}
				aria-label={isInteractive ? ariaLabel : undefined}
				aria-pressed={isInteractive ? pressed : undefined}
				tabIndex={isInteractive ? 0 : undefined}
				onKeyDown={
					isInteractive ? handleKeyDown : undefined
				}
				onKeyUp={isInteractive ? handleKeyUp : undefined}
				{...props}
			>
				{dismissible && (
					<Button
						kind='close-icon-only'
						size='small'
						className={styles.closeButton}
						onClick={(e: React.MouseEvent) => {
							e.stopPropagation();
							setIsVisible(false);
							onDismiss?.();
						}}
						aria-label='Close card'
					/>
				)}
				{renderCardContent()}
			</Wrapper>
		);
	}
);

Card.displayName = 'Card';

/**
 * Usage: <Card kind="notification" notificationType="info" {...props} />
 * All variations are handled via props. Only Card is exported.
 */

export default Card;
