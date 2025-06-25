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

const Statistics: React.FC<StatisticsProps> = ({
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

export const Daily = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='daily' {...props} />;
export const DailyCard = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='daily-card' {...props} />;
export const DailyGrid = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='daily-grid' {...props} />;
export const DailyCompact = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='daily-compact' {...props} />;
export const DailyDetailed = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='daily-detailed' {...props} />;
export const VS = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='vs' {...props} />;
export const VSCard = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='vs-card' {...props} />;
export const VSComparison = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='vs-comparison' {...props} />;
export const VSDetailed = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='vs-detailed' {...props} />;
export const History = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='history' {...props} />;
export const HistoryCard = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='history-card' {...props} />;
export const HistoryTrends = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='history-trends' {...props} />;
export const HistoryDetailed = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='history-detailed' {...props} />;
export const Leaderboard = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='leaderboard' {...props} />;
export const Achievements = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='achievements' {...props} />;
export const Trends = (
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind='trends' {...props} />;
// Layout shortcuts
export const CompactStats = (
	kind: ExtendedStatisticsKind,
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind={kind} layout='compact' {...props} />;
export const ExpandedStats = (
	kind: ExtendedStatisticsKind,
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => (
	<Statistics kind={kind} layout='expanded' {...props} />
);
export const MinimalStats = (
	kind: ExtendedStatisticsKind,
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind={kind} layout='minimal' {...props} />;
// Display shortcuts
export const CardStats = (
	kind: ExtendedStatisticsKind,
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind={kind} display='card' {...props} />;
export const GridStats = (
	kind: ExtendedStatisticsKind,
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind={kind} display='grid' {...props} />;
export const ListStats = (
	kind: ExtendedStatisticsKind,
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind={kind} display='list' {...props} />;
export const TableStats = (
	kind: ExtendedStatisticsKind,
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => <Statistics kind={kind} display='table' {...props} />;
// Color scheme shortcuts
export const BlueStats = (
	kind: ExtendedStatisticsKind,
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => (
	<Statistics kind={kind} colorScheme='blue' {...props} />
);
export const GreenStats = (
	kind: ExtendedStatisticsKind,
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => (
	<Statistics kind={kind} colorScheme='green' {...props} />
);
export const RedStats = (
	kind: ExtendedStatisticsKind,
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => (
	<Statistics kind={kind} colorScheme='red' {...props} />
);
export const PurpleStats = (
	kind: ExtendedStatisticsKind,
	props: Omit<StatisticsProps, 'stats'> & {
		stats: PlayerStats;
	}
) => (
	<Statistics kind={kind} colorScheme='purple' {...props} />
);
// Dashboard presets
export const DashboardDaily = (
	stats: PlayerStats,
	props: Partial<StatisticsProps> = {}
) =>
	Daily({
		stats,
		layout: 'compact',
		showCountUp: true,
		...props,
	});
export const DashboardVS = (
	stats: PlayerStats,
	props: Partial<StatisticsProps> = {}
) =>
	VS({
		stats,
		layout: 'compact',
		showComparisons: false,
		...props,
	});
export const DashboardHistory = (
	stats: PlayerStats,
	props: Partial<StatisticsProps> = {}
) =>
	History({
		stats,
		layout: 'compact',
		maxItems: 5,
		...props,
	});
// Modal presets
export const ModalDaily = (
	stats: PlayerStats,
	props: Partial<StatisticsProps> = {}
) =>
	Daily({
		stats,
		layout: 'expanded',
		showCountUp: true,
		showPercentages: true,
		...props,
	});
export const ModalVS = (
	stats: PlayerStats,
	props: Partial<StatisticsProps> = {}
) =>
	VS({
		stats,
		layout: 'expanded',
		showComparisons: true,
		showTrends: true,
		...props,
	});
export const ModalHistory = (
	stats: PlayerStats,
	props: Partial<StatisticsProps> = {}
) =>
	History({
		stats,
		layout: 'expanded',
		showTrends: true,
		showAchievements: true,
		...props,
	});
// Mobile presets
export const MobileDaily = (
	stats: PlayerStats,
	props: Partial<StatisticsProps> = {}
) =>
	Daily({
		stats,
		size: 'small',
		layout: 'compact',
		maxItems: 4,
		...props,
	});
export const MobileVS = (
	stats: PlayerStats,
	props: Partial<StatisticsProps> = {}
) =>
	VS({
		stats,
		size: 'small',
		layout: 'compact',
		showComparisons: false,
		...props,
	});
export const MobileHistory = (
	stats: PlayerStats,
	props: Partial<StatisticsProps> = {}
) =>
	History({
		stats,
		size: 'small',
		layout: 'compact',
		maxItems: 3,
		...props,
	});
// Utility functions
export const AnimatedStats = (
	kind: ExtendedStatisticsKind,
	stats: PlayerStats,
	props: Partial<StatisticsProps> = {}
) => (
	<Statistics
		kind={kind}
		stats={stats}
		showCountUp={true}
		animationDuration={1500}
		{...props}
	/>
);
export const StaticStats = (
	kind: ExtendedStatisticsKind,
	stats: PlayerStats,
	props: Partial<StatisticsProps> = {}
) => (
	<Statistics
		kind={kind}
		stats={stats}
		showCountUp={false}
		{...props}
	/>
);
export const HighlightedStats = (
	kind: ExtendedStatisticsKind,
	stats: PlayerStats,
	props: Partial<StatisticsProps> = {}
) => (
	<Statistics
		kind={kind}
		stats={stats}
		highlightBest={true}
		showShadows={true}
		{...props}
	/>
);

export default Statistics;
