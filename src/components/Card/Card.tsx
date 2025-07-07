import React, { forwardRef, useState } from 'react';
import { Wrapper } from '../Wrappers';
import { Button } from '../Button';
import { Icons } from '../Icons';
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
			dismissible = false,
			onDismiss,
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
								<span>
									<strong>Level:</strong> {profile.level}
								</span>
							)}
							{profile.points !== undefined && (
								<span>
									<strong>Points:</strong> {profile.points}
								</span>
							)}
							{profile.achievements !== undefined && (
								<span>
									<strong>Achievements:</strong>{' '}
									{profile.achievements}
								</span>
							)}
							{profile.gamesPlayed !== undefined && (
								<span>
									<strong>Games:</strong>{' '}
									{profile.gamesPlayed}
								</span>
							)}
							{profile.winRate !== undefined && (
								<span>
									<strong>Win Rate:</strong>{' '}
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

			const getRankStyle = (
				rank: number,
				isTopFive: boolean
			) => {
				// Adjust sizes based on card size
				const sizeMultiplier = size === 'small' ? 0.8 : 1;
				const rankSize =
					isTopFive ?
						36 * sizeMultiplier
					:	28 * sizeMultiplier;
				const fontSize =
					isTopFive ?
						14 * sizeMultiplier
					:	11 * sizeMultiplier;

				const baseStyle = {
					width: `${rankSize}px`,
					height: `${rankSize}px`,
					borderRadius: '50%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontWeight: 'bold',
					fontSize: `${fontSize}px`,
					color: '#FFFFFF',
					boxShadow:
						isTopFive ?
							'0 4px 8px rgba(0, 0, 0, 0.25)'
						:	'0 2px 4px rgba(0, 0, 0, 0.15)',
					border: `${isTopFive ? 3 : 2}px solid #FFFFFF`,
					flexShrink: 0,
				};

				if (rank === 1)
					return {
						...baseStyle,
						backgroundColor: '#FFD700',
					}; // Gold
				if (rank === 2)
					return {
						...baseStyle,
						backgroundColor: '#C0C0C0',
					}; // Silver
				if (rank === 3)
					return {
						...baseStyle,
						backgroundColor: '#CD7F32',
					}; // Bronze
				if (isTopFive)
					return {
						...baseStyle,
						backgroundColor: '#3B82F6',
					}; // Blue for top 5
				return { ...baseStyle, backgroundColor: '#6B7280' }; // Gray for others
			};

			return (
				<Wrapper className={styles['leaderboard-card']}>
					{leaderboard.map((entry, idx) => {
						const rank = entry.rank || idx + 1;
						const isTopFive = rank <= 5;

						return (
							<div
								key={entry.id}
								style={{
									display: 'flex',
									flexDirection: 'column',
									padding: isTopFive ? '24px' : '16px 20px',
									borderRadius: isTopFive ? '16px' : '12px',
									marginBottom: isTopFive ? '12px' : '8px',
									backgroundColor:
										isTopFive ?
											'rgba(59, 130, 246, 0.08)'
										:	'rgba(0, 0, 0, 0.015)',
									border:
										isTopFive ?
											'2px solid rgba(59, 130, 246, 0.25)'
										:	'1px solid rgba(0, 0, 0, 0.06)',
									position: 'relative',
									transition:
										'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
									boxShadow:
										isTopFive ?
											'0 4px 16px rgba(59, 130, 246, 0.12)'
										:	'0 2px 8px rgba(0, 0, 0, 0.04)',
									cursor: 'pointer',
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor =
										isTopFive ?
											'rgba(59, 130, 246, 0.12)'
										:	'rgba(0, 0, 0, 0.04)';
									e.currentTarget.style.transform =
										'translateY(-3px) scale(1.01)';
									e.currentTarget.style.boxShadow =
										isTopFive ?
											'0 8px 24px rgba(59, 130, 246, 0.2)'
										:	'0 4px 16px rgba(0, 0, 0, 0.08)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor =
										isTopFive ?
											'rgba(59, 130, 246, 0.08)'
										:	'rgba(0, 0, 0, 0.015)';
									e.currentTarget.style.transform =
										'translateY(0) scale(1)';
									e.currentTarget.style.boxShadow =
										isTopFive ?
											'0 4px 16px rgba(59, 130, 246, 0.12)'
										:	'0 2px 8px rgba(0, 0, 0, 0.04)';
								}}
							>
								{/* Top section with rank and name/score */}
								<div
									style={{
										display: 'flex',
										alignItems: 'flex-start',
										gap: '12px',
										marginBottom: '8px',
									}}
								>
									<div
										style={getRankStyle(rank, isTopFive)}
									>
										#{rank}
									</div>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '4px',
											flex: 1,
										}}
									>
										<div
											style={{
												fontWeight: '600',
												fontSize: '16px',
												color: '#1F2937',
												lineHeight: 1.3,
												marginBottom: '4px',
											}}
										>
											{entry.name}
										</div>
										<div
											style={{
												fontWeight: 'bold',
												fontSize: '16px',
												color: '#3B82F6',
												textAlign: 'left',
											}}
										>
											{entry.score?.toLocaleString()}
										</div>
									</div>
								</div>

								{/* Bottom section with avatar and meta info */}
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										gap: '16px',
									}}
								>
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											flexShrink: 0,
										}}
									>
										{entry.avatar && (
											<img
												src={entry.avatar}
												alt={entry.name}
												style={{
													width:
														size === 'small' ?
															isTopFive ? '44px'
															:	'36px'
														: isTopFive ? '56px'
														: '44px',
													height:
														size === 'small' ?
															isTopFive ? '44px'
															:	'36px'
														: isTopFive ? '56px'
														: '44px',
													borderRadius: '50%',
													border: `${isTopFive ? 4 : 3}px solid ${isTopFive ? '#3B82F6' : '#E5E7EB'}`,
													objectFit: 'cover',
													boxShadow:
														isTopFive ?
															'0 4px 12px rgba(59, 130, 246, 0.3)'
														:	'0 2px 6px rgba(0, 0, 0, 0.1)',
												}}
											/>
										)}
									</div>
									<div
										style={{
											flex: 1,
											display: 'flex',
											flexDirection: 'column',
											gap: '4px',
										}}
									>
										<div
											style={{
												fontSize:
													size === 'small' ?
														isTopFive ? '11px'
														:	'10px'
													: isTopFive ? '13px'
													: '12px',
												color: '#6B7280',
												display: 'flex',
												gap: isTopFive ? '12px' : '8px',
												flexWrap: 'wrap',
											}}
										>
											{entry.level && (
												<span>🏆 Level {entry.level}</span>
											)}
											{entry.streak !== undefined && (
												<span>
													🔥 {entry.streak} streak
												</span>
											)}
											{entry.winRate && (
												<span>
													📊{' '}
													{Math.round(entry.winRate * 100)}%
													win rate
												</span>
											)}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</Wrapper>
			);
		};

		// Render puzzle card content
		const renderPuzzleCardContent = () => {
			if (!puzzle) return null;
			return (
				<Wrapper
					className={styles['puzzle-card']}
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						textAlign: 'center',
					}}
				>
					{/* Image */}
					{puzzle.img && (
						<img
							src={puzzle.img}
							alt={puzzle.title}
							style={{
								width: '100%',
								height: '180px',
								objectFit: 'cover',
								borderRadius: '8px',
								marginBottom: '16px',
							}}
						/>
					)}

					{/* Title */}
					<h3
						style={{
							margin: '0 0 8px 0',
							fontSize: '1.5rem',
							fontWeight: '600',
							color: 'var(--blue-800)',
						}}
					>
						{puzzle.title}
					</h3>

					{/* Subtitle (Description) */}
					{puzzle.description && (
						<p
							style={{
								margin: '0 0 12px 0',
								fontSize: '0.95rem',
								color: 'var(--gray-600)',
								lineHeight: '1.4',
							}}
						>
							{puzzle.description}
						</p>
					)}

					{/* Labels (Difficulty and Category) */}
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							gap: '8px',
							marginBottom: '16px',
						}}
					>
						{puzzle.difficulty && (
							<span
								style={{
									padding: '4px 12px',
									backgroundColor: 'var(--blue-100)',
									color: 'var(--blue-700)',
									borderRadius: '12px',
									fontSize: '0.85rem',
									fontWeight: '500',
								}}
							>
								{puzzle.difficulty}
							</span>
						)}
						{puzzle.category && (
							<span
								style={{
									padding: '4px 12px',
									backgroundColor: 'var(--gray-100)',
									color: 'var(--gray-700)',
									borderRadius: '12px',
									fontSize: '0.85rem',
									fontWeight: '500',
								}}
							>
								{puzzle.category}
							</span>
						)}
					</div>

					{/* Play Button */}
					<Button
						kind='primary'
						contentType='textIcon'
						icon={<Icons name='play' size={16} />}
						iconPosition='left'
						fullWidth
						onClick={() =>
							console.log(
								`Starting puzzle: ${puzzle.title}`
							)
						}
						style={{
							padding: '12px 24px',
							fontSize: '1rem',
							fontWeight: '600',
						}}
					>
						Play
					</Button>
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
					return (
						<>
							{title && (
								<div
									style={{
										padding: '20px 20px 16px 20px',
										borderBottom: '1px solid #E5E7EB',
									}}
								>
									<h3
										style={{
											margin: 0,
											fontSize: '1.5rem',
											fontWeight: '700',
											color: '#1F2937',
											lineHeight: '1.3',
										}}
									>
										{title}
									</h3>
									{subtitle && (
										<p
											style={{
												margin: '4px 0 0 0',
												fontSize: '0.95rem',
												color: '#6B7280',
												lineHeight: '1.4',
											}}
										>
											{subtitle}
										</p>
									)}
								</div>
							)}
							{renderLeaderboardCardContent()}
						</>
					);
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
