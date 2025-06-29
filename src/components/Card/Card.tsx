import React, { forwardRef } from 'react';
import { Wrapper } from '../Wrappers';
import styles from './card.module.scss';
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
	}>;

	// Puzzle card props
	puzzle?: {
		id: string;
		title: string;
		img?: string;
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
			additionalStats,
			profile,
			roomInfo,
			leaderboard,
			puzzle,
			matchSummary,
			userStatus,
			shape = 'horizontal-rect', // default shape
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
						{friend.avatar && (
							<img
								src={friend.avatar}
								alt={friend.username}
								className={styles.friendAvatar}
								width={40}
								height={40}
								style={{
									borderRadius: '50%',
									marginRight: 8,
								}}
							/>
						)}
						<span
							className={`${styles.friendStatusDot} ${styles[statusClass]}`}
						/>
						<span className={styles.friendUsername}>
							{friend.username}
						</span>
						{friend.division && friend.tier && (
							<span
								style={{
									marginLeft: 8,
									color: '#888',
									fontSize: '0.95em',
								}}
							>
								{friend.division} {friend.tier}
							</span>
						)}
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

		// Render profile card content
		const renderProfileCardContent = () => {
			if (!profile) return null;
			return (
				<Wrapper
					className={styles['profile-card']}
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 24,
						textAlign: 'left',
					}}
				>
					{profile.avatar && (
						<img
							src={profile.avatar}
							alt={profile.name}
							className={styles.profileAvatar}
							width={80}
							height={80}
							style={{
								borderRadius: '50%',
								marginRight: 16,
							}}
						/>
					)}
					<div>
						<h3>{profile.name}</h3>
						{profile.bio && <p>{profile.bio}</p>}
						<div className={styles.profileStats}>
							{profile.level !== undefined && (
								<span>Level: {profile.level}</span>
							)}
							{profile.points !== undefined && (
								<span>Points: {profile.points}</span>
							)}
							{profile.achievements !== undefined && (
								<span>
									Achievements: {profile.achievements}
								</span>
							)}
							{profile.gamesPlayed !== undefined && (
								<span>Games: {profile.gamesPlayed}</span>
							)}
							{profile.winRate !== undefined && (
								<span>
									Win Rate:{' '}
									{Math.round(profile.winRate * 100)}%
								</span>
							)}
						</div>
					</div>
				</Wrapper>
			);
		};

		// Render stats card content
		const renderStatsCardContent = () => {
			if (kind !== 'stats') return null;
			return (
				<Wrapper
					className={styles['stats-card']}
					style={{
						minHeight: 180,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
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
					{additionalStats &&
						additionalStats.length > 0 && (
							<ul
								className={styles['stats-card__additional']}
								style={{ marginTop: 16, width: '100%' }}
							>
								{additionalStats.map((stat, i) => (
									<li
										key={i}
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											padding: '2px 0',
										}}
									>
										<span style={{ opacity: 0.7 }}>
											{stat.label}
										</span>
										<span style={{ fontWeight: 500 }}>
											{stat.value}
										</span>
									</li>
								))}
							</ul>
						)}
				</Wrapper>
			);
		};

		// Render room info card content
		const renderRoomInfoCardContent = () => {
			if (!roomInfo) return null;
			return (
				<Wrapper
					className={styles['room-info-card']}
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 12,
					}}
				>
					{roomInfo.showIcon &&
						roomInfo.icon &&
						roomInfo.iconPosition !== 'right' && (
							<span className={styles.roomInfoIcon}>
								{roomInfo.icon}
							</span>
						)}
					<h3 style={{ flex: 1 }}>{roomInfo.title}</h3>
					{roomInfo.showIcon &&
						roomInfo.icon &&
						roomInfo.iconPosition === 'right' && (
							<span className={styles.roomInfoIcon}>
								{roomInfo.icon}
							</span>
						)}
					{roomInfo.players !== undefined &&
						roomInfo.maxPlayers !== undefined && (
							<p
								style={{
									margin: 0,
									color: '#888',
									fontSize: '0.95em',
								}}
							>
								Players: {roomInfo.players} /{' '}
								{roomInfo.maxPlayers}
							</p>
						)}
					{roomInfo.status && (
						<span
							style={{ color: '#555', fontSize: '0.95em' }}
						>
							{roomInfo.status}
						</span>
					)}
				</Wrapper>
			);
		};

		// Render leaderboard card content
		const renderLeaderboardCardContent = () => {
			if (!leaderboard) return null;
			return (
				<Wrapper
					className={styles['leaderboard-card']}
					style={{
						maxHeight: 260,
						overflowY: 'auto',
						width: '100%',
					}}
				>
					<h3 style={{ marginBottom: 12 }}>Leaderboard</h3>
					<ul
						style={{
							listStyle: 'none',
							padding: 0,
							margin: 0,
						}}
					>
						{leaderboard.map((entry, idx) => (
							<li
								key={entry.id}
								className={styles.leaderboardEntry}
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: 12,
									marginBottom: 8,
								}}
							>
								<span
									style={{
										fontWeight: 600,
										width: 24,
										textAlign: 'right',
									}}
								>
									{idx + 1}.
								</span>
								{entry.avatar && (
									<img
										src={entry.avatar}
										alt={entry.name}
										width={32}
										height={32}
										style={{ borderRadius: '50%' }}
									/>
								)}
								<span style={{ flex: 1 }}>
									{entry.name}
								</span>
								<strong
									style={{
										minWidth: 40,
										textAlign: 'right',
									}}
								>
									{entry.score}
								</strong>
							</li>
						))}
					</ul>
				</Wrapper>
			);
		};

		// Render puzzle card content
		const renderPuzzleCardContent = () => {
			if (!puzzle) return null;
			return (
				<Wrapper
					className={styles['puzzle-card']}
					style={{ width: '100%', alignItems: 'center' }}
				>
					{puzzle.img && (
						<img
							src={puzzle.img}
							alt={puzzle.title}
							width={240}
							height={240}
							style={{
								borderRadius: 12,
								marginBottom: 12,
								objectFit: 'cover',
							}}
						/>
					)}
					<h3>{puzzle.title}</h3>
					{puzzle.dateCreated && (
						<span
							style={{ color: '#888', fontSize: '0.95em' }}
						>
							{puzzle.dateCreated}
						</span>
					)}
					{puzzle.creator && (
						<span
							style={{ color: '#555', fontSize: '0.95em' }}
						>
							By {puzzle.creator}
						</span>
					)}
				</Wrapper>
			);
		};

		// Render match summary card content
		const renderMatchSummaryCardContent = () => {
			if (!matchSummary) return null;
			return (
				<Wrapper
					className={styles['match-summary-card']}
					style={{
						width: '100%',
						padding: 16,
						background: '#f8fafc',
						borderRadius: 12,
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							marginBottom: 8,
						}}
					>
						<span style={{ fontWeight: 600 }}>
							{matchSummary.teamA}
						</span>
						<span style={{ fontSize: 22, fontWeight: 700 }}>
							{matchSummary.scoreA} - {matchSummary.scoreB}
						</span>
						<span style={{ fontWeight: 600 }}>
							{matchSummary.teamB}
						</span>
					</div>
					{matchSummary.mvp && (
						<div
							style={{ color: '#a259f7', fontWeight: 500 }}
						>
							MVP: {matchSummary.mvp}
						</div>
					)}
					{matchSummary.summary && (
						<div style={{ color: '#555', marginTop: 8 }}>
							{matchSummary.summary}
						</div>
					)}
				</Wrapper>
			);
		};

		// Render user status card content
		const renderUserStatusCardContent = () => {
			if (!userStatus) return null;
			const statusColor =
				userStatus.status === 'online' ?
					'#22c55e'
				:	'#64748b';
			return (
				<Wrapper
					className={styles['user-status-card']}
					style={{
						flexDirection: 'column',
						alignItems: 'flex-start',
						gap: 8,
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: 12,
						}}
					>
						{userStatus.avatar && (
							<img
								src={userStatus.avatar}
								alt={userStatus.name}
								width={40}
								height={40}
								style={{ borderRadius: '50%' }}
							/>
						)}
						<span style={{ fontWeight: 600 }}>
							{userStatus.name}
						</span>
						<span
							style={{
								width: 10,
								height: 10,
								borderRadius: '50%',
								background: statusColor,
								display: 'inline-block',
							}}
						/>
					</div>
					{userStatus.statusMessage && (
						<span
							style={{ color: '#888', fontSize: '0.95em' }}
						>
							{userStatus.statusMessage}
						</span>
					)}
				</Wrapper>
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
			const notificationClass = [
				styles['notification-card'],
				`notification-${notificationType}`,
			].join(' ');
			return (
				<Wrapper className={notificationClass}>
					<Wrapper className={styles.notificationHeader}>
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
				</Wrapper>
			);
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
					return renderFriendCardContent();
				case 'profile':
					return renderProfileCardContent();
				case 'notification':
					return renderNotificationCardContent();
				case 'stats':
					return renderStatsCardContent();
				case 'room-info':
					return renderRoomInfoCardContent();
				case 'leaderboard':
					return renderLeaderboardCardContent();
				case 'puzzle':
					return renderPuzzleCardContent();
				case 'match-summary':
					return renderMatchSummaryCardContent();
				case 'user-status':
					return renderUserStatusCardContent();
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
