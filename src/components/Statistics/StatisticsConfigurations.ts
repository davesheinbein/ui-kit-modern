import { ReactNode } from 'react';
import { format, parseISO } from 'date-fns';
import styles from './Statistics.module.scss';

// Statistics variant types
export type StatisticsVariant =
	| 'daily'
	| 'vs'
	| 'history'
	| 'summary'
	| 'detailed'
	| 'comparison'
	| 'leaderboard'
	| 'achievements'
	| 'trends'
	| 'custom';

// Statistics display types
export type StatisticsDisplay =
	| 'card'
	| 'table'
	| 'grid'
	| 'list'
	| 'chart';

// Statistics layout types
export type StatisticsLayout =
	| 'compact'
	| 'standard'
	| 'expanded'
	| 'minimal';

// Player statistics interface
export interface PlayerStats {
	total_matches_played: number;
	vs_bot_matches_played: number;
	vs_multiplayer_matches_played: number;
	win_count: number;
	loss_count: number;
	perfect_puzzles: number;
	longest_streak: number;
	current_streak: number;
	average_solve_time: number;
	mistake_rate: number;
	favorite_category: string;
	last_played_at: string;
	join_date: string;
}

// Global statistics interface
export interface GlobalStats {
	percentileRank?: number;
	leaderboardPosition?: number;
	totalPlayers?: number;
	averageScore?: number;
	bestTime?: number;
}

// Enhanced statistics configuration interface
export interface StatisticsConfiguration {
	variant: StatisticsVariant;
	display?: StatisticsDisplay;
	layout?: StatisticsLayout;
	showCountUp?: boolean;
	showPercentages?: boolean;
	showComparisons?: boolean;
	showTrends?: boolean;
	showAchievements?: boolean;
	highlightBest?: boolean;
	animationDuration?: number;
	title?: string;
	subtitle?: string;
	className?: string;
	headerClassName?: string;
	contentClassName?: string;
	footerClassName?: string;
	cardClassName?: string;
	labelClassName?: string;
	valueClassName?: string;
	// Behavior props
	sortBy?: string;
	sortOrder?: 'asc' | 'desc';
	groupBy?: string;
	filterBy?: string[];
	maxItems?: number;
	// Visual props
	colorScheme?:
		| 'default'
		| 'blue'
		| 'green'
		| 'red'
		| 'purple'
		| 'custom';
	size?: 'small' | 'medium' | 'large';
	borderRadius?: string;
	showBorders?: boolean;
	showShadows?: boolean;
}

// Extended statistics kinds for comprehensive configuration
export type ExtendedStatisticsKind =
	// Basic statistics
	| 'daily'
	| 'daily-summary'
	| 'daily-detailed'
	| 'vs'
	| 'vs-summary'
	| 'vs-detailed'
	| 'vs-comparison'
	| 'history'
	| 'history-summary'
	| 'history-detailed'
	| 'history-trends'

	// Display variants
	| 'daily-card'
	| 'daily-table'
	| 'daily-grid'
	| 'daily-list'
	| 'vs-card'
	| 'vs-table'
	| 'vs-grid'
	| 'vs-comparison-card'
	| 'history-card'
	| 'history-table'
	| 'history-grid'
	| 'history-chart'

	// Layout variants
	| 'daily-compact'
	| 'daily-standard'
	| 'daily-expanded'
	| 'daily-minimal'
	| 'vs-compact'
	| 'vs-standard'
	| 'vs-expanded'
	| 'history-compact'
	| 'history-standard'
	| 'history-expanded'

	// Special types
	| 'leaderboard'
	| 'leaderboard-top10'
	| 'leaderboard-personal'
	| 'achievements'
	| 'achievements-recent'
	| 'achievements-all'
	| 'trends'
	| 'trends-weekly'
	| 'trends-monthly'
	| 'trends-yearly'

	// Size variants
	| 'daily-small'
	| 'daily-medium'
	| 'daily-large'
	| 'vs-small'
	| 'vs-medium'
	| 'vs-large'
	| 'history-small'
	| 'history-medium'
	| 'history-large'

	// Color scheme variants
	| 'daily-blue'
	| 'daily-green'
	| 'daily-purple'
	| 'vs-red'
	| 'vs-orange'
	| 'vs-cyan'
	| 'history-indigo'
	| 'history-emerald'
	| 'history-rose'

	// Animation variants
	| 'daily-animated'
	| 'daily-no-animation'
	| 'vs-animated'
	| 'vs-no-animation'
	| 'history-animated'
	| 'history-no-animation'

	// Custom combinations
	| 'mobile-optimized'
	| 'desktop-optimized'
	| 'print-friendly'
	| 'accessibility-enhanced'
	| 'custom';

// Statistics configuration presets
export const STATISTICS_CONFIGURATIONS: Record<
	ExtendedStatisticsKind,
	StatisticsConfiguration
> = {
	// Basic statistics
	'daily': {
		variant: 'daily',
		display: 'card',
		layout: 'standard',
		showCountUp: true,
		showPercentages: true,
		showComparisons: false,
		showTrends: false,
		showAchievements: false,
		highlightBest: true,
		animationDuration: 1000,
		title: 'Daily Puzzle Stats',
		className: styles.dailyStats,
		colorScheme: 'blue',
		size: 'medium',
		showBorders: true,
		showShadows: true,
	},

	'daily-summary': {
		variant: 'daily',
		display: 'card',
		layout: 'compact',
		showCountUp: false,
		showPercentages: true,
		showComparisons: false,
		showTrends: false,
		showAchievements: false,
		highlightBest: false,
		animationDuration: 0,
		title: 'Daily Summary',
		className: styles.dailySummaryStats,
		colorScheme: 'blue',
		size: 'small',
		showBorders: true,
		showShadows: false,
	},

	'daily-detailed': {
		variant: 'daily',
		display: 'grid',
		layout: 'expanded',
		showCountUp: true,
		showPercentages: true,
		showComparisons: true,
		showTrends: true,
		showAchievements: true,
		highlightBest: true,
		animationDuration: 1200,
		title: 'Daily Detailed Stats',
		className: styles.dailyDetailedStats,
		colorScheme: 'blue',
		size: 'large',
		showBorders: true,
		showShadows: true,
	},

	'vs': {
		variant: 'vs',
		display: 'card',
		layout: 'standard',
		showCountUp: true,
		showPercentages: true,
		showComparisons: true,
		showTrends: false,
		showAchievements: false,
		highlightBest: true,
		animationDuration: 1000,
		title: 'VS Match Summary',
		className: styles.vsStats,
		colorScheme: 'red',
		size: 'medium',
		showBorders: true,
		showShadows: true,
	},

	'vs-summary': {
		variant: 'vs',
		display: 'card',
		layout: 'compact',
		showCountUp: false,
		showPercentages: false,
		showComparisons: true,
		showTrends: false,
		showAchievements: false,
		highlightBest: false,
		animationDuration: 0,
		title: 'VS Summary',
		className: styles.vsSummaryStats,
		colorScheme: 'red',
		size: 'small',
		showBorders: true,
		showShadows: false,
	},

	'vs-detailed': {
		variant: 'vs',
		display: 'grid',
		layout: 'expanded',
		showCountUp: true,
		showPercentages: true,
		showComparisons: true,
		showTrends: true,
		showAchievements: false,
		highlightBest: true,
		animationDuration: 1200,
		title: 'VS Detailed Stats',
		className: styles.vsDetailedStats,
		colorScheme: 'red',
		size: 'large',
		showBorders: true,
		showShadows: true,
	},

	'vs-comparison': {
		variant: 'vs',
		display: 'table',
		layout: 'standard',
		showCountUp: false,
		showPercentages: true,
		showComparisons: true,
		showTrends: false,
		showAchievements: false,
		highlightBest: true,
		animationDuration: 500,
		title: 'Player Comparison',
		className: styles.vsComparisonStats,
		colorScheme: 'default',
		size: 'medium',
		showBorders: true,
		showShadows: false,
	},

	'history': {
		variant: 'history',
		display: 'grid',
		layout: 'standard',
		showCountUp: true,
		showPercentages: true,
		showComparisons: false,
		showTrends: true,
		showAchievements: true,
		highlightBest: true,
		animationDuration: 1500,
		title: 'Lifetime Stats',
		className: styles.historyStats,
		colorScheme: 'purple',
		size: 'large',
		showBorders: true,
		showShadows: true,
	},

	'history-summary': {
		variant: 'history',
		display: 'card',
		layout: 'compact',
		showCountUp: false,
		showPercentages: false,
		showComparisons: false,
		showTrends: false,
		showAchievements: false,
		highlightBest: false,
		animationDuration: 0,
		title: 'Quick Stats',
		className: styles.historySummaryStats,
		colorScheme: 'purple',
		size: 'small',
		showBorders: true,
		showShadows: false,
	},

	'history-detailed': {
		variant: 'history',
		display: 'grid',
		layout: 'expanded',
		showCountUp: true,
		showPercentages: true,
		showComparisons: true,
		showTrends: true,
		showAchievements: true,
		highlightBest: true,
		animationDuration: 2000,
		title: 'Complete Player History',
		className: styles.historyDetailedStats,
		colorScheme: 'purple',
		size: 'large',
		showBorders: true,
		showShadows: true,
	},

	'history-trends': {
		variant: 'history',
		display: 'chart',
		layout: 'expanded',
		showCountUp: false,
		showPercentages: true,
		showComparisons: false,
		showTrends: true,
		showAchievements: false,
		highlightBest: false,
		animationDuration: 1000,
		title: 'Performance Trends',
		className: styles.historyTrendsStats,
		colorScheme: 'green',
		size: 'large',
		showBorders: true,
		showShadows: true,
	},

	// Display variants
	'daily-card': {
		variant: 'daily',
		display: 'card',
		layout: 'standard',
		showCountUp: true,
		showPercentages: true,
		className: styles.dailyCardStats,
		colorScheme: 'blue',
		size: 'medium',
	},

	'daily-table': {
		variant: 'daily',
		display: 'table',
		layout: 'standard',
		showCountUp: false,
		showPercentages: true,
		className: styles.dailyTableStats,
		colorScheme: 'blue',
		size: 'medium',
	},

	'daily-grid': {
		variant: 'daily',
		display: 'grid',
		layout: 'standard',
		showCountUp: true,
		showPercentages: true,
		className: styles.dailyGridStats,
		colorScheme: 'blue',
		size: 'medium',
	},

	'daily-list': {
		variant: 'daily',
		display: 'list',
		layout: 'standard',
		showCountUp: false,
		showPercentages: true,
		className: styles.dailyListStats,
		colorScheme: 'blue',
		size: 'medium',
	},

	'vs-card': {
		variant: 'vs',
		display: 'card',
		layout: 'standard',
		showCountUp: true,
		showComparisons: true,
		className: styles.vsCardStats,
		colorScheme: 'red',
		size: 'medium',
	},

	'vs-table': {
		variant: 'vs',
		display: 'table',
		layout: 'standard',
		showCountUp: false,
		showComparisons: true,
		className: styles.vsTableStats,
		colorScheme: 'red',
		size: 'medium',
	},

	'vs-grid': {
		variant: 'vs',
		display: 'grid',
		layout: 'standard',
		showCountUp: true,
		showComparisons: true,
		className: styles.vsGridStats,
		colorScheme: 'red',
		size: 'medium',
	},

	'vs-comparison-card': {
		variant: 'vs',
		display: 'card',
		layout: 'standard',
		showCountUp: true,
		showComparisons: true,
		showTrends: false,
		className: styles.vsComparisonCardStats,
		colorScheme: 'default',
		size: 'medium',
	},

	'history-card': {
		variant: 'history',
		display: 'card',
		layout: 'standard',
		showCountUp: true,
		showTrends: true,
		className: styles.historyCardStats,
		colorScheme: 'purple',
		size: 'medium',
	},

	'history-table': {
		variant: 'history',
		display: 'table',
		layout: 'standard',
		showCountUp: false,
		showTrends: false,
		className: styles.historyTableStats,
		colorScheme: 'purple',
		size: 'medium',
	},

	'history-grid': {
		variant: 'history',
		display: 'grid',
		layout: 'standard',
		showCountUp: true,
		showTrends: true,
		className: styles.historyGridStats,
		colorScheme: 'purple',
		size: 'medium',
	},

	'history-chart': {
		variant: 'history',
		display: 'chart',
		layout: 'expanded',
		showCountUp: false,
		showTrends: true,
		className: styles.historyChartStats,
		colorScheme: 'green',
		size: 'large',
	},

	// Layout variants
	'daily-compact': {
		variant: 'daily',
		layout: 'compact',
		showCountUp: false,
		animationDuration: 0,
		className: styles.dailyCompactStats,
		size: 'small',
	},

	'daily-standard': {
		variant: 'daily',
		layout: 'standard',
		showCountUp: true,
		animationDuration: 1000,
		className: styles.dailyStandardStats,
		size: 'medium',
	},

	'daily-expanded': {
		variant: 'daily',
		layout: 'expanded',
		showCountUp: true,
		showTrends: true,
		showAchievements: true,
		animationDuration: 1500,
		className: styles.dailyExpandedStats,
		size: 'large',
	},

	'daily-minimal': {
		variant: 'daily',
		layout: 'minimal',
		showCountUp: false,
		showPercentages: false,
		showBorders: false,
		showShadows: false,
		animationDuration: 0,
		className: styles.dailyMinimalStats,
		size: 'small',
	},

	'vs-compact': {
		variant: 'vs',
		layout: 'compact',
		showCountUp: false,
		animationDuration: 0,
		className: styles.vsCompactStats,
		size: 'small',
	},

	'vs-standard': {
		variant: 'vs',
		layout: 'standard',
		showCountUp: true,
		showComparisons: true,
		animationDuration: 1000,
		className: styles.vsStandardStats,
		size: 'medium',
	},

	'vs-expanded': {
		variant: 'vs',
		layout: 'expanded',
		showCountUp: true,
		showComparisons: true,
		showTrends: true,
		animationDuration: 1500,
		className: styles.vsExpandedStats,
		size: 'large',
	},

	'history-compact': {
		variant: 'history',
		layout: 'compact',
		showCountUp: false,
		showTrends: false,
		showAchievements: false,
		animationDuration: 0,
		className: styles.historyCompactStats,
		size: 'small',
	},

	'history-standard': {
		variant: 'history',
		layout: 'standard',
		showCountUp: true,
		showTrends: true,
		animationDuration: 1000,
		className: styles.historyStandardStats,
		size: 'medium',
	},

	'history-expanded': {
		variant: 'history',
		layout: 'expanded',
		showCountUp: true,
		showTrends: true,
		showAchievements: true,
		animationDuration: 2000,
		className: styles.historyExpandedStats,
		size: 'large',
	},

	// Special types
	'leaderboard': {
		variant: 'leaderboard',
		display: 'table',
		layout: 'standard',
		showCountUp: false,
		showComparisons: true,
		sortBy: 'score',
		sortOrder: 'desc',
		maxItems: 10,
		title: 'Leaderboard',
		className: styles.leaderboardStats,
		colorScheme: 'green',
		size: 'medium',
	},

	'leaderboard-top10': {
		variant: 'leaderboard',
		display: 'list',
		layout: 'compact',
		showCountUp: false,
		maxItems: 10,
		title: 'Top 10 Players',
		className: styles.leaderboardTop10Stats,
		colorScheme: 'green',
		size: 'medium',
	},

	'leaderboard-personal': {
		variant: 'leaderboard',
		display: 'card',
		layout: 'compact',
		showCountUp: false,
		showComparisons: true,
		maxItems: 5,
		title: 'Your Ranking',
		className: styles.leaderboardPersonalStats,
		colorScheme: 'blue',
		size: 'small',
	},

	'achievements': {
		variant: 'achievements',
		display: 'grid',
		layout: 'standard',
		showCountUp: false,
		showAchievements: true,
		title: 'Achievements',
		className: styles.achievementsStats,
		colorScheme: 'default',
		size: 'medium',
	},

	'achievements-recent': {
		variant: 'achievements',
		display: 'list',
		layout: 'compact',
		showCountUp: false,
		showAchievements: true,
		maxItems: 5,
		title: 'Recent Achievements',
		className: styles.achievementsRecentStats,
		colorScheme: 'default',
		size: 'small',
	},

	'achievements-all': {
		variant: 'achievements',
		display: 'grid',
		layout: 'expanded',
		showCountUp: false,
		showAchievements: true,
		title: 'All Achievements',
		className: styles.achievementsAllStats,
		colorScheme: 'default',
		size: 'large',
	},

	'trends': {
		variant: 'trends',
		display: 'chart',
		layout: 'expanded',
		showCountUp: false,
		showTrends: true,
		title: 'Performance Trends',
		className: styles.trendsStats,
		colorScheme: 'green',
		size: 'large',
	},

	'trends-weekly': {
		variant: 'trends',
		display: 'chart',
		layout: 'standard',
		showTrends: true,
		title: 'Weekly Trends',
		className: styles.trendsWeeklyStats,
		colorScheme: 'green',
		size: 'medium',
	},

	'trends-monthly': {
		variant: 'trends',
		display: 'chart',
		layout: 'standard',
		showTrends: true,
		title: 'Monthly Trends',
		className: styles.trendsMonthlyStats,
		colorScheme: 'green',
		size: 'medium',
	},

	'trends-yearly': {
		variant: 'trends',
		display: 'chart',
		layout: 'expanded',
		showTrends: true,
		title: 'Yearly Trends',
		className: styles.trendsYearlyStats,
		colorScheme: 'green',
		size: 'large',
	},

	// Size variants
	'daily-small': {
		variant: 'daily',
		size: 'small',
		layout: 'compact',
		showCountUp: false,
		className: styles.dailySmallStats,
	},

	'daily-medium': {
		variant: 'daily',
		size: 'medium',
		layout: 'standard',
		showCountUp: true,
		className: styles.dailyMediumStats,
	},

	'daily-large': {
		variant: 'daily',
		size: 'large',
		layout: 'expanded',
		showCountUp: true,
		showTrends: true,
		className: styles.dailyLargeStats,
	},

	'vs-small': {
		variant: 'vs',
		size: 'small',
		layout: 'compact',
		showCountUp: false,
		className: styles.vsSmallStats,
	},

	'vs-medium': {
		variant: 'vs',
		size: 'medium',
		layout: 'standard',
		showCountUp: true,
		showComparisons: true,
		className: styles.vsMediumStats,
	},

	'vs-large': {
		variant: 'vs',
		size: 'large',
		layout: 'expanded',
		showCountUp: true,
		showComparisons: true,
		showTrends: true,
		className: styles.vsLargeStats,
	},

	'history-small': {
		variant: 'history',
		size: 'small',
		layout: 'compact',
		showCountUp: false,
		showTrends: false,
		className: styles.historySmallStats,
	},

	'history-medium': {
		variant: 'history',
		size: 'medium',
		layout: 'standard',
		showCountUp: true,
		showTrends: true,
		className: styles.historyMediumStats,
	},

	'history-large': {
		variant: 'history',
		size: 'large',
		layout: 'expanded',
		showCountUp: true,
		showTrends: true,
		showAchievements: true,
		className: styles.historyLargeStats,
	},

	// Color scheme variants
	'daily-blue': {
		variant: 'daily',
		colorScheme: 'blue',
		className: styles.dailyBlueStats,
	},

	'daily-green': {
		variant: 'daily',
		colorScheme: 'green',
		className: styles.dailyGreenStats,
	},

	'daily-purple': {
		variant: 'daily',
		colorScheme: 'purple',
		className: styles.dailyPurpleStats,
	},

	'vs-red': {
		variant: 'vs',
		colorScheme: 'red',
		className: styles.vsRedStats,
	},

	'vs-orange': {
		variant: 'vs',
		colorScheme: 'default', // Orange would be custom
		className: styles.vsOrangeStats,
	},

	'vs-cyan': {
		variant: 'vs',
		colorScheme: 'blue', // Closest to cyan
		className: styles.vsCyanStats,
	},

	'history-indigo': {
		variant: 'history',
		colorScheme: 'purple', // Closest to indigo
		className: styles.historyIndigoStats,
	},

	'history-emerald': {
		variant: 'history',
		colorScheme: 'green', // Closest to emerald
		className: styles.historyEmeraldStats,
	},

	'history-rose': {
		variant: 'history',
		colorScheme: 'red', // Closest to rose
		className: styles.historyRoseStats,
	},

	// Animation variants
	'daily-animated': {
		variant: 'daily',
		showCountUp: true,
		animationDuration: 2000,
		className: styles.dailyAnimatedStats,
	},

	'daily-no-animation': {
		variant: 'daily',
		showCountUp: false,
		animationDuration: 0,
		className: styles.dailyNoAnimationStats,
	},

	'vs-animated': {
		variant: 'vs',
		showCountUp: true,
		animationDuration: 2000,
		className: styles.vsAnimatedStats,
	},

	'vs-no-animation': {
		variant: 'vs',
		showCountUp: false,
		animationDuration: 0,
		className: styles.vsNoAnimationStats,
	},

	'history-animated': {
		variant: 'history',
		showCountUp: true,
		animationDuration: 3000,
		className: styles.historyAnimatedStats,
	},

	'history-no-animation': {
		variant: 'history',
		showCountUp: false,
		animationDuration: 0,
		className: styles.historyNoAnimationStats,
	},

	// Custom combinations
	'mobile-optimized': {
		variant: 'daily',
		display: 'card',
		layout: 'compact',
		size: 'small',
		showCountUp: false,
		showBorders: false,
		className: styles.mobileOptimizedStats,
	},

	'desktop-optimized': {
		variant: 'history',
		display: 'grid',
		layout: 'expanded',
		size: 'large',
		showCountUp: true,
		showTrends: true,
		showAchievements: true,
		className: styles.desktopOptimizedStats,
	},

	'print-friendly': {
		variant: 'history',
		display: 'table',
		layout: 'standard',
		showCountUp: false,
		showBorders: true,
		showShadows: false,
		colorScheme: 'default',
		className: styles.printFriendlyStats,
	},

	'accessibility-enhanced': {
		variant: 'daily',
		display: 'list',
		layout: 'standard',
		showCountUp: false,
		showBorders: true,
		className: styles.accessibilityEnhancedStats,
	},

	'custom': {
		variant: 'custom',
		display: 'card',
		layout: 'standard',
		showCountUp: false,
		className: '',
		colorScheme: 'default',
		size: 'medium',
	},
};

// Statistics groups for logical organization
export const STATISTICS_GROUPS = {
	DAILY: [
		'daily',
		'daily-summary',
		'daily-detailed',
		'daily-compact',
		'daily-standard',
		'daily-expanded',
	],
	VS: [
		'vs',
		'vs-summary',
		'vs-detailed',
		'vs-comparison',
		'vs-compact',
		'vs-standard',
		'vs-expanded',
	],
	HISTORY: [
		'history',
		'history-summary',
		'history-detailed',
		'history-trends',
		'history-compact',
		'history-standard',
		'history-expanded',
	],
	DISPLAYS: [
		'daily-card',
		'daily-table',
		'daily-grid',
		'daily-list',
		'vs-card',
		'vs-table',
		'vs-grid',
		'history-card',
		'history-table',
		'history-grid',
		'history-chart',
	],
	SIZES: [
		'daily-small',
		'daily-medium',
		'daily-large',
		'vs-small',
		'vs-medium',
		'vs-large',
		'history-small',
		'history-medium',
		'history-large',
	],
	COLORS: [
		'daily-blue',
		'daily-green',
		'daily-purple',
		'vs-red',
		'vs-orange',
		'vs-cyan',
		'history-indigo',
		'history-emerald',
		'history-rose',
	],
	ANIMATIONS: [
		'daily-animated',
		'daily-no-animation',
		'vs-animated',
		'vs-no-animation',
		'history-animated',
		'history-no-animation',
	],
	SPECIAL: [
		'leaderboard',
		'leaderboard-top10',
		'leaderboard-personal',
		'achievements',
		'achievements-recent',
		'achievements-all',
		'trends',
		'trends-weekly',
		'trends-monthly',
		'trends-yearly',
	],
	RESPONSIVE: [
		'mobile-optimized',
		'desktop-optimized',
		'print-friendly',
		'accessibility-enhanced',
	],
};

// Quick statistics presets for common use cases
export const QUICK_STATISTICS = {
	DAILY_DEFAULT: 'daily' as ExtendedStatisticsKind,
	DAILY_COMPACT: 'daily-compact' as ExtendedStatisticsKind,
	VS_DEFAULT: 'vs' as ExtendedStatisticsKind,
	VS_COMPARISON: 'vs-comparison' as ExtendedStatisticsKind,
	HISTORY_DEFAULT: 'history' as ExtendedStatisticsKind,
	HISTORY_TRENDS:
		'history-trends' as ExtendedStatisticsKind,
	LEADERBOARD_DEFAULT:
		'leaderboard' as ExtendedStatisticsKind,
	ACHIEVEMENTS_DEFAULT:
		'achievements' as ExtendedStatisticsKind,
	MOBILE_OPTIMIZED:
		'mobile-optimized' as ExtendedStatisticsKind,
	DESKTOP_OPTIMIZED:
		'desktop-optimized' as ExtendedStatisticsKind,
};

/**
 * Create a statistics configuration with custom overrides
 */
export function createStatisticsConfig(
	baseKind: ExtendedStatisticsKind,
	overrides: Partial<StatisticsConfiguration> = {}
): StatisticsConfiguration {
	const baseConfig = STATISTICS_CONFIGURATIONS[baseKind];
	return {
		...baseConfig,
		...overrides,
		// Merge className if both exist
		className:
			overrides.className ?
				`${baseConfig.className || ''} ${overrides.className}`.trim()
			:	baseConfig.className,
	};
}

/**
 * Get statistics configuration by kind
 */
export function getStatisticsConfig(
	kind: ExtendedStatisticsKind
): StatisticsConfiguration {
	return STATISTICS_CONFIGURATIONS[kind];
}

/**
 * Check if a statistics kind exists
 */
export function isStatisticsKind(
	kind: string
): kind is ExtendedStatisticsKind {
	return kind in STATISTICS_CONFIGURATIONS;
}

/**
 * Calculate win rate percentage from player stats
 */
export function calculateWinRate(
	stats: PlayerStats
): number {
	const totalGames = stats.win_count + stats.loss_count;
	if (totalGames === 0) return 0;
	return (stats.win_count / totalGames) * 100;
}

/**
 * Calculate average time in a readable format
 */
export function calculateAverageTime(
	stats: PlayerStats
): string {
	const avgSeconds = stats.average_solve_time;
	if (avgSeconds < 60) {
		return `${avgSeconds.toFixed(1)}s`;
	}
	const minutes = Math.floor(avgSeconds / 60);
	const seconds = avgSeconds % 60;
	return `${minutes}:${seconds.toFixed(0).padStart(2, '0')}`;
}

/**
 * Get performance rating based on stats
 */
export function getPerformanceRating(
	stats: PlayerStats
): 'Excellent' | 'Good' | 'Average' | 'Needs Improvement' {
	const winRate = calculateWinRate(stats);
	const mistakeRate = stats.mistake_rate;

	if (winRate >= 80 && mistakeRate <= 10)
		return 'Excellent';
	if (winRate >= 60 && mistakeRate <= 20) return 'Good';
	if (winRate >= 40) return 'Average';
	return 'Needs Improvement';
}

/**
 * Get trend direction for statistics
 */
export function getTrendDirection(
	stats: PlayerStats
): 'positive' | 'negative' | 'neutral' {
	const currentStreak = stats.current_streak;
	const longestStreak = stats.longest_streak;

	if (currentStreak >= longestStreak * 0.8)
		return 'positive';
	if (currentStreak <= longestStreak * 0.3)
		return 'negative';
	return 'neutral';
}

/**
 * Format statistics values based on type
 */
export function formatStatValue(
	value: any,
	formatType:
		| 'number'
		| 'percentage'
		| 'time'
		| 'text'
		| 'date'
): string {
	switch (formatType) {
		case 'number':
			return typeof value === 'number' ?
					value.toLocaleString()
				:	String(value);
		case 'percentage':
			return typeof value === 'number' ?
					`${value.toFixed(1)}%`
				:	String(value);
		case 'time':
			return String(value);
		case 'date':
			try {
				if (typeof value === 'string') {
					// Import format function from date-fns when needed
					return value; // Placeholder - will format dates properly in component
				}
			} catch {
				// fallback
			}
			return String(value);
		case 'text':
		default:
			return String(value);
	}
}

/**
 * Get CSS class name for statistics configuration
 */
export function getStatisticsClassName(
	config: StatisticsConfiguration
): string {
	const baseClass = styles.statisticsBase;
	const variantClass =
		config.variant ? styles[config.variant] : '';
	const layoutClass =
		config.layout ? styles[config.layout] : '';
	const displayClass =
		config.display ? styles[config.display] : '';

	return [
		baseClass,
		variantClass,
		layoutClass,
		displayClass,
		config.className,
	]
		.filter(Boolean)
		.join(' ');
}
