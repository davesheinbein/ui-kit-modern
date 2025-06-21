import React from 'react';
import CountUp from 'react-countup';
import { format, parseISO } from 'date-fns';
import {
	StatisticsConfiguration,
	StatisticsVariant,
	StatisticsDisplay,
	StatisticsLayout,
	PlayerStats,
	GlobalStats,
	ExtendedStatisticsKind,
	STATISTICS_CONFIGURATIONS,
	getStatisticsClassName,
	formatStatValue,
	calculateWinRate,
	calculateAverageTime,
	getPerformanceRating,
	getTrendDirection,
} from './configurations';
import styles from './Statistics.module.scss';

// Extended props interface for UnifiedStatistics
export interface UnifiedStatisticsProps
	extends Partial<StatisticsConfiguration> {
	// Core data
	'stats': PlayerStats;
	'globalStats'?: GlobalStats;
	'opponentStats'?: PlayerStats;

	// DRY system
	'kind'?: ExtendedStatisticsKind;

	// Component overrides
	'children'?: React.ReactNode;
	'onClick'?: () => void;
	'onStatsUpdate'?: (stats: PlayerStats) => void;

	// Additional styling
	'style'?: React.CSSProperties;
	'id'?: string;
	'data-testid'?: string;
}

export type StatisticsKind = ExtendedStatisticsKind;
export type {
	StatisticsVariant,
	StatisticsDisplay,
	StatisticsLayout,
};

/**
 * UnifiedStatistics - A comprehensive, DRY statistics component
 *
 * This component serves as the single source of truth for all statistics display needs.
 * It supports:
 * - All statistics variants (daily, vs, history, etc.)
 * - Multiple display modes (card, table, grid, list, chart)
 * - Various layouts (compact, standard, expanded, minimal)
 * - Ultra-short configuration via the 'kind' prop
 * - Full customization via individual props
 * - Animation and styling options
 */
const UnifiedStatistics: React.FC<
	UnifiedStatisticsProps
> = ({
	// DRY system
	kind,

	// Core configuration
	variant = 'summary',
	display = 'card',
	layout = 'standard',
	stats,
	globalStats,
	opponentStats,

	// Display options
	showCountUp = true,
	showPercentages = false,
	showComparisons = false,
	showTrends = false,
	showAchievements = false,
	highlightBest = false,
	animationDuration = 1000,

	// Content
	title,
	subtitle,

	// Styling
	className = '',
	headerClassName = '',
	contentClassName = '',
	footerClassName = '',
	cardClassName = '',
	labelClassName = '',
	valueClassName = '',

	// Behavior
	sortBy,
	sortOrder = 'desc',
	groupBy,
	filterBy,
	maxItems = 10,

	// Visual
	colorScheme = 'default',
	size = 'medium',
	borderRadius,
	showBorders = true,
	showShadows = true,

	// Events
	children,
	onClick,
	onStatsUpdate,

	// HTML props
	style,
	id,
	'data-testid': testId,

	...restProps
}) => {
	// Apply DRY configuration if kind is provided
	const config = React.useMemo(() => {
		if (kind && STATISTICS_CONFIGURATIONS[kind]) {
			return {
				...STATISTICS_CONFIGURATIONS[kind],
				// Allow prop overrides
				variant: variant,
				display: display,
				layout: layout,
				showCountUp: showCountUp,
				showPercentages: showPercentages,
				showComparisons: showComparisons,
				showTrends: showTrends,
				showAchievements: showAchievements,
				highlightBest: highlightBest,
				colorScheme: colorScheme,
				size: size,
				...restProps,
			};
		}

		return {
			variant,
			display,
			layout,
			showCountUp,
			showPercentages,
			showComparisons,
			showTrends,
			showAchievements,
			highlightBest,
			colorScheme,
			size,
			...restProps,
		};
	}, [
		kind,
		variant,
		display,
		layout,
		showCountUp,
		showPercentages,
		showComparisons,
		showTrends,
		showAchievements,
		highlightBest,
		colorScheme,
		size,
		restProps,
	]);

	// Generate CSS classes
	const cssClasses = React.useMemo(() => {
		const baseClass = getStatisticsClassName(config);
		const sizeClass = styles[config.size || 'medium'];
		const layoutClass = styles[config.layout || 'standard'];
		const displayClass = styles[config.display || 'card'];
		const schemeClass =
			styles[`${config.colorScheme || 'default'}Scheme`];

		const conditionalClasses = [
			config.showBorders && showBorders ?
				styles.withBorders
			:	'',
			config.showShadows && showShadows ?
				styles.withShadows
			:	'',
			config.highlightBest && highlightBest ?
				styles.highlighted
			:	'',
			config.showCountUp && showCountUp ?
				styles.animating
			:	'',
		].filter(Boolean);

		return [
			styles.statisticsBase,
			baseClass,
			sizeClass,
			layoutClass,
			displayClass,
			schemeClass,
			...conditionalClasses,
			className,
		]
			.filter(Boolean)
			.join(' ');
	}, [
		config,
		className,
		showBorders,
		showShadows,
		highlightBest,
		showCountUp,
	]);

	// Calculate derived statistics
	const derivedStats = React.useMemo(() => {
		const winRate = calculateWinRate(stats);
		const avgTime = calculateAverageTime(stats);
		const performance = getPerformanceRating(stats);
		const trend = getTrendDirection(stats);

		return {
			winRate,
			avgTime,
			performance,
			trend,
			totalGames:
				stats.vs_bot_matches_played +
				stats.vs_multiplayer_matches_played,
			perfectRate:
				stats.total_matches_played > 0 ?
					(stats.perfect_puzzles /
						stats.total_matches_played) *
					100
				:	0,
		};
	}, [stats]);

	// Determine what statistics to show based on variant
	const getStatsToShow = () => {
		switch (config.variant) {
			case 'daily':
				return [
					{
						label: 'Games Today',
						value: stats.total_matches_played,
						format: 'number',
					},
					{
						label: 'Win Rate',
						value: derivedStats.winRate,
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
						value: derivedStats.totalGames,
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
						value: derivedStats.winRate,
						format: 'percentage',
					},
					{
						label: 'Avg. Time',
						value: derivedStats.avgTime,
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
						value: derivedStats.perfectRate,
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
						value: derivedStats.winRate,
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

	// Format individual stat values
	const formatValue = (value: any, format: string) => {
		return formatStatValue(value, format as any);
	};

	// Render stat value with optional CountUp animation
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

	// Render comparison stats (for vs mode)
	const renderComparison = () => {
		if (!showComparisons || !opponentStats) return null;

		const playerStats = getStatsToShow();

		return (
			<div className={styles.statisticsComparison}>
				<div className={styles.comparisonColumn}>
					<div className={styles.comparisonHeader}>You</div>
					{playerStats.map((stat, index) => (
						<div
							key={`player-${index}`}
							className={styles.statisticsItem}
						>
							<span
								className={`${styles.statisticsLabel} ${labelClassName}`}
							>
								{stat.label}
							</span>
							<span
								className={`${styles.statisticsValue} ${valueClassName}`}
							>
								{renderStatValue(stat.value, stat.format)}
							</span>
						</div>
					))}
				</div>

				<div className={styles.comparisonColumn}>
					<div className={styles.comparisonHeader}>
						Opponent
					</div>
					{playerStats.map((stat, index) => {
						let opponentValue;
						switch (stat.label) {
							case 'Total Games':
								opponentValue =
									opponentStats.total_matches_played;
								break;
							case 'Wins':
								opponentValue = opponentStats.win_count;
								break;
							case 'Losses':
								opponentValue = opponentStats.loss_count;
								break;
							case 'Win Rate':
								opponentValue =
									calculateWinRate(opponentStats);
								break;
							case 'Avg. Time':
								opponentValue =
									calculateAverageTime(opponentStats);
								break;
							default:
								opponentValue = 0;
						}

						return (
							<div
								key={`opponent-${index}`}
								className={styles.statisticsItem}
							>
								<span
									className={`${styles.statisticsLabel} ${labelClassName}`}
								>
									{stat.label}
								</span>
								<span
									className={`${styles.statisticsValue} ${valueClassName}`}
								>
									{renderStatValue(
										opponentValue,
										stat.format
									)}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	};

	// Render grid layout
	const renderGrid = () => {
		const statsToShow = getStatsToShow();

		return (
			<div className={styles.statisticsGrid}>
				{statsToShow
					.slice(0, maxItems)
					.map((stat, index) => (
						<div
							key={index}
							className={styles.statisticsGridItem}
						>
							<div
								className={`${styles.statisticsValue} ${valueClassName}`}
							>
								{renderStatValue(stat.value, stat.format)}
							</div>
							<div
								className={`${styles.statisticsLabel} ${labelClassName}`}
							>
								{stat.label}
							</div>
						</div>
					))}
			</div>
		);
	};

	// Render list layout
	const renderList = () => {
		const statsToShow = getStatsToShow();

		return (
			<div className={styles.list}>
				{statsToShow
					.slice(0, maxItems)
					.map((stat, index) => (
						<div
							key={index}
							className={styles.statisticsItem}
						>
							<span
								className={`${styles.statisticsLabel} ${labelClassName}`}
							>
								{stat.label}
							</span>
							<span
								className={`${styles.statisticsValue} ${valueClassName}`}
							>
								{renderStatValue(stat.value, stat.format)}
								{showPercentages &&
									stat.format === 'number' && (
										<span
											className={
												styles.statisticsPercentage
											}
										>
											(
											{(
												((stat.value as number) /
													stats.total_matches_played) *
												100
											).toFixed(1)}
											%)
										</span>
									)}
							</span>
						</div>
					))}
			</div>
		);
	};

	// Render content based on display type
	const renderContent = () => {
		if (showComparisons && opponentStats) {
			return renderComparison();
		}

		switch (config.display) {
			case 'grid':
				return renderGrid();
			case 'list':
				return renderList();
			case 'table':
				return renderList(); // Table and list are similar for now
			case 'chart':
				return (
					<div className={styles.chart}>
						{renderGrid()}
						{/* Chart implementation would go here */}
					</div>
				);
			default:
				return renderList();
		}
	};

	// Dynamic title generation
	const dynamicTitle =
		title ||
		config.title ||
		(() => {
			switch (config.variant) {
				case 'daily':
					return 'Daily Statistics';
				case 'vs':
					return 'VS Statistics';
				case 'history':
					return 'Historical Statistics';
				default:
					return 'Statistics';
			}
		})();

	// Dynamic subtitle generation
	const dynamicSubtitle =
		subtitle ||
		config.subtitle ||
		(() => {
			if (globalStats?.percentileRank) {
				return `${globalStats.percentileRank}th percentile`;
			}
			if (stats.last_played_at) {
				try {
					return `Last played ${format(parseISO(stats.last_played_at), 'MMM d, yyyy')}`;
				} catch {
					return undefined;
				}
			}
			return undefined;
		})();

	return (
		<div
			className={cssClasses}
			style={{
				borderRadius: borderRadius,
				...style,
			}}
			onClick={onClick}
			id={id}
			data-testid={testId}
		>
			{/* Header */}
			{(dynamicTitle || dynamicSubtitle) && (
				<div
					className={`${styles.statisticsHeader} ${headerClassName}`}
				>
					<div>
						{dynamicTitle && (
							<h3 className={styles.statisticsTitle}>
								{dynamicTitle}
							</h3>
						)}
						{dynamicSubtitle && (
							<p className={styles.statisticsSubtitle}>
								{dynamicSubtitle}
							</p>
						)}
					</div>
				</div>
			)}

			{/* Content */}
			<div
				className={`${styles.statisticsContent} ${contentClassName}`}
			>
				{renderContent()}
				{children}
			</div>

			{/* Footer */}
			{(globalStats?.leaderboardPosition || showTrends) && (
				<div
					className={`${styles.statisticsFooter} ${footerClassName}`}
				>
					{globalStats?.leaderboardPosition && (
						<div className={styles.footerText}>
							Rank #{globalStats.leaderboardPosition} of{' '}
							{globalStats.totalPlayers?.toLocaleString()}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default UnifiedStatistics;
