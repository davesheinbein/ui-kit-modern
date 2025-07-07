import React from 'react';
import styles from '../Card.module.scss';
import { Wrapper } from '../../Wrappers';

interface LeaderboardEntry {
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
}

interface LeaderboardCardContentProps {
	leaderboard: LeaderboardEntry[];
	size?: 'small' | 'medium' | 'large';
	title?: React.ReactNode;
	subtitle?: React.ReactNode;
}

const LeaderboardCardContent: React.FC<
	LeaderboardCardContentProps
> = ({ leaderboard, size = 'medium', title, subtitle }) => {
	const getRankStyle = (
		rank: number,
		isTopFive: boolean
	) => {
		// Adjust sizes based on card size
		const sizeMultiplier = size === 'small' ? 0.8 : 1;
		const rankSize =
			isTopFive ? 36 * sizeMultiplier : 28 * sizeMultiplier;
		const fontSize =
			isTopFive ? 14 * sizeMultiplier : 11 * sizeMultiplier;

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
		} as React.CSSProperties;

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
		<Wrapper className={styles['leaderboard']}>
			{title && (
				<div
					className={styles['card-title']}
					style={{ marginBottom: 8 }}
				>
					<div
						className={styles['card-title-text']}
						style={{ marginBottom: 8 }}
					>
						{title}
					</div>
				</div>
			)}
			{subtitle && (
				<div
					className={styles['card-subtitle']}
					style={{
						marginBottom: 12,
						color: '#888',
						fontSize: '0.95em',
					}}
				>
					<div
						className={styles['card-subtitle-text']}
						style={{
							marginBottom: 12,
							color: '#888',
							fontSize: '0.95em',
						}}
					>
						{subtitle}
					</div>
				</div>
			)}
			<div className={styles['leaderboard-card']}>
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
								<div style={getRankStyle(rank, isTopFive)}>
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
											<span>🔥 {entry.streak} streak</span>
										)}
										{entry.winRate && (
											<span>
												📊 {Math.round(entry.winRate * 100)}
												% win rate
											</span>
										)}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</Wrapper>
	);
};

export default LeaderboardCardContent;
