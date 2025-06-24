import React from 'react';
import { Wrapper } from '../Wrappers';
import CountUp from 'react-countup';
import { format, parseISO } from 'date-fns';
import type {
	StatisticsConfiguration,
	ExtendedStatisticsKind,
	PlayerStats,
	GlobalStats,
} from './configurations';
import styles from './Statistics.module.scss';

export interface StatisticsProps {
	stats: PlayerStats;
	mode?: 'daily' | 'vs' | 'history';
	kind?: ExtendedStatisticsKind;
	globalStats?: GlobalStats;
	opponentStats?: PlayerStats;
	className?: string;
	style?: React.CSSProperties;
	// Statistics props
	display?: string;
	layout?: string;
	title?: string;
	subtitle?: string;
	showCountUp?: boolean;
	showPercentages?: boolean;
	showComparisons?: boolean;
	showTrends?: boolean;
	showAchievements?: boolean;
	highlightBest?: boolean;
	animationDuration?: number;
	colorScheme?: string;
	size?: string;
	borderRadius?: string | number;
	showBorders?: boolean;
	showShadows?: boolean;
	[key: string]: any;
}

const Statistics: React.FC<
	StatisticsProps
> = ({
	stats,
	mode = 'daily',
	kind,
	globalStats,
	opponentStats,
	className = '',
	style,
	display = 'card',
	layout = 'standard',
	title,
	subtitle,
	showCountUp = true,
	showPercentages = false,
	showComparisons = false,
	showTrends = false,
	showAchievements = false,
	highlightBest = false,
	animationDuration = 1000,
	colorScheme = 'default',
	size = 'medium',
	borderRadius,
	showBorders = true,
	showShadows = true,
	...rest
}) => {
	// Derived stats helpers
	const winRate =
		stats.total_matches_played > 0 ?
			(stats.win_count / stats.total_matches_played) * 100
		:	0;
	const avgTime = stats.average_solve_time;
	const totalGames =
		stats.vs_bot_matches_played +
		stats.vs_multiplayer_matches_played;
	const perfectRate =
		stats.total_matches_played > 0 ?
			(stats.perfect_puzzles / stats.total_matches_played) *
			100
		:	0;

	const getStatsToShow = () => {
		switch (mode) {
			case 'daily':
				return [
					{
						label: 'Games Today',
						value: stats.total_matches_played,
						format: 'number',
					},
					{
						label: 'Win Rate',
						value: winRate,
						format: 'percentage',
					},
					{
						label: 'Current Streak',
						value: stats.current_streak,
						format: 'number',
					},
					{
						label: 'Perfect Games',
						value: stats.perfect_puzzles,
						format: 'number',
					},
				];
			case 'vs':
				return [
					{
						label: 'Total Games',
						value: totalGames,
						format: 'number',
					},
					{
						label: 'Wins',
						value: stats.win_count,
						format: 'number',
					},
					{
						label: 'Losses',
						value: stats.loss_count,
						format: 'number',
					},
					{
						label: 'Win Rate',
						value: winRate,
						format: 'percentage',
					},
					{
						label: 'Avg. Time',
						value: avgTime,
						format: 'time',
					},
				];
			case 'history':
				return [
					{
						label: 'Total Matches',
						value: stats.total_matches_played,
						format: 'number',
					},
					{
						label: 'Longest Streak',
						value: stats.longest_streak,
						format: 'number',
					},
					{
						label: 'Perfect Rate',
						value: perfectRate,
						format: 'percentage',
					},
					{
						label: 'Favorite Category',
						value: stats.favorite_category,
						format: 'text',
					},
					{
						label: 'Member Since',
						value: stats.join_date,
						format: 'date',
					},
				];
			default:
				return [
					{
						label: 'Total Games',
						value: stats.total_matches_played,
						format: 'number',
					},
					{
						label: 'Win Rate',
						value: winRate,
						format: 'percentage',
					},
					{
						label: 'Current Streak',
						value: stats.current_streak,
						format: 'number',
					},
					{
						label: 'Best Streak',
						value: stats.longest_streak,
						format: 'number',
					},
				];
		}
	};

	const formatValue = (value: any, format: string) => {
		if (format === 'number') return value;
		if (format === 'percentage')
			return `${value.toFixed(1)}%`;
		if (format === 'time') return `${value}s`;
		if (format === 'date')
			return format ? formatDate(value) : value;
		return value;
	};

	const formatDate = (date: string) => {
		try {
			return format(parseISO(date), 'MMM d, yyyy');
		} catch {
			return date;
		}
	};

	const renderStatValue = (value: any, format: string) => {
		if (
			showCountUp &&
			format === 'number' &&
			typeof value === 'number'
		) {
			return (
				<CountUp
					end={value}
					duration={animationDuration / 1000}
					separator=','
				/>
			);
		}
		if (
			showCountUp &&
			format === 'percentage' &&
			typeof value === 'number'
		) {
			return (
				<>
					<CountUp
						end={value}
						duration={animationDuration / 1000}
						decimals={1}
					/>
					%
				</>
			);
		}
		return formatValue(value, format);
	};

	const statsToShow = getStatsToShow();

	return (
		<Wrapper
			className={`statistics-summary ${className}`.trim()}
			style={{ ...style, borderRadius }}
		>
			{/* Header */}
			{(title || subtitle) && (
				<Wrapper className={styles.statisticsHeader}>
					{title && (
						<h3 className={styles.statisticsTitle}>
							{title}
						</h3>
					)}
					{subtitle && (
						<div className={styles.statisticsSubtitle}>
							{subtitle}
						</div>
					)}
				</Wrapper>
			)}

			{/* Content */}
			<Wrapper className={styles.statisticsContent}>
				{statsToShow.map((stat, idx) => (
					<Wrapper
						key={idx}
						className={styles.statisticsItem}
					>
						<span className={styles.statisticsLabel}>
							{stat.label}
						</span>
						<span className={styles.statisticsValue}>
							{renderStatValue(stat.value, stat.format)}
						</span>
					</Wrapper>
				))}
			</Wrapper>

			{/* Footer (optional) */}
			{(globalStats?.leaderboardPosition || showTrends) && (
				<Wrapper className={styles.statisticsFooter}>
					{globalStats?.leaderboardPosition && (
						<span className={styles.footerText}>
							Leaderboard: #
							{globalStats.leaderboardPosition}
						</span>
					)}
					{showTrends && (
						<span className={styles.footerText}>
							Trends enabled
						</span>
					)}
				</Wrapper>
			)}
		</Wrapper>
	);
};

export default Statistics;
