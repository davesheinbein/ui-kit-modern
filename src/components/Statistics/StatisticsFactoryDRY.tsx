import React from 'react';
import UnifiedStatistics, {
	UnifiedStatisticsProps,
	StatisticsKind,
} from './UnifiedStatistics';
import {
	STATISTICS_CONFIGURATIONS,
	STATISTICS_GROUPS,
	QUICK_STATISTICS,
	StatisticsConfiguration,
	ExtendedStatisticsKind,
	PlayerStats,
} from './StatisticsConfigurations';

/**
 * Statistics Factory - Creates statistics components with minimal configuration
 * This is the most DRY way to create statistics in the entire system
 */
export class StatisticsFactory {
	/**
	 * Create a statistics component with a specific kind and minimal props
	 */
	static create(
		kind: StatisticsKind,
		props: Partial<UnifiedStatisticsProps> = {}
	): React.ReactElement<UnifiedStatisticsProps> {
		return React.createElement(UnifiedStatistics, {
			kind,
			...props,
		});
	}

	/**
	 * Create multiple statistics components from a group
	 */
	static createGroup(
		groupName: keyof typeof STATISTICS_GROUPS,
		sharedProps: Partial<UnifiedStatisticsProps> = {}
	): React.ReactElement<UnifiedStatisticsProps>[] {
		const group = STATISTICS_GROUPS[groupName];
		if (!group) return [];

		return group.map((kind, index) =>
			React.createElement(UnifiedStatistics, {
				key: `${groupName}-${index}`,
				kind,
				...sharedProps,
			})
		);
	}

	/**
	 * Create a statistics component with a preset configuration
	 */
	static createQuick(
		quickName: keyof typeof QUICK_STATISTICS,
		props: Partial<UnifiedStatisticsProps> = {}
	): React.ReactElement<UnifiedStatisticsProps> {
		const quickConfig = QUICK_STATISTICS[quickName];
		if (!quickConfig) {
			throw new Error(
				`Quick statistics "${quickName}" not found`
			);
		}

		return React.createElement(UnifiedStatistics, {
			kind: quickConfig,
			...props,
		});
	}
}

/**
 * Ultra-short component creation functions
 * These provide the most concise way to create statistics components
 */

// Daily statistics shortcuts
export const Daily = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('daily', props);

export const DailyCard = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('daily-card', props);

export const DailyGrid = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('daily-grid', props);

export const DailyCompact = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('daily-compact', props);

export const DailyDetailed = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('daily-detailed', props);

// VS statistics shortcuts
export const VS = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('vs', props);

export const VSCard = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('vs-card', props);

export const VSComparison = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('vs-comparison', props);

export const VSDetailed = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('vs-detailed', props);

// History statistics shortcuts
export const History = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('history', props);

export const HistoryCard = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('history-card', props);

export const HistoryTrends = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('history-trends', props);

export const HistoryDetailed = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('history-detailed', props);

// Summary statistics shortcuts
export const Summary = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('summary', props);

export const SummaryCard = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('summary-card', props);

export const SummaryGrid = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('summary-grid', props);

// Specialized shortcuts
export const Leaderboard = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('leaderboard', props);

export const Achievements = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('achievements', props);

export const Trends = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('trends', props);

export const Comparison = (
	props: Partial<UnifiedStatisticsProps> = {}
) => StatisticsFactory.create('comparison', props);

// Layout shortcuts
export const CompactStats = (
	kind: StatisticsKind,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		layout: 'compact',
		...props,
	});

export const ExpandedStats = (
	kind: StatisticsKind,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		layout: 'expanded',
		...props,
	});

export const MinimalStats = (
	kind: StatisticsKind,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		layout: 'minimal',
		...props,
	});

// Display shortcuts
export const CardStats = (
	kind: StatisticsKind,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		display: 'card',
		...props,
	});

export const GridStats = (
	kind: StatisticsKind,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		display: 'grid',
		...props,
	});

export const ListStats = (
	kind: StatisticsKind,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		display: 'list',
		...props,
	});

export const TableStats = (
	kind: StatisticsKind,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		display: 'table',
		...props,
	});

// Color scheme shortcuts
export const BlueStats = (
	kind: StatisticsKind,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		colorScheme: 'blue',
		...props,
	});

export const GreenStats = (
	kind: StatisticsKind,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		colorScheme: 'green',
		...props,
	});

export const RedStats = (
	kind: StatisticsKind,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		colorScheme: 'red',
		...props,
	});

export const PurpleStats = (
	kind: StatisticsKind,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		colorScheme: 'purple',
		...props,
	});

/**
 * Preset component functions with common configurations
 */

// Dashboard presets
export const DashboardDaily = (
	stats: PlayerStats,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	Daily({
		stats,
		layout: 'compact',
		showCountUp: true,
		...props,
	});

export const DashboardVS = (
	stats: PlayerStats,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	VS({
		stats,
		layout: 'compact',
		showComparisons: false,
		...props,
	});

export const DashboardHistory = (
	stats: PlayerStats,
	props: Partial<UnifiedStatisticsProps> = {}
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
	props: Partial<UnifiedStatisticsProps> = {}
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
	props: Partial<UnifiedStatisticsProps> = {}
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
	props: Partial<UnifiedStatisticsProps> = {}
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
	props: Partial<UnifiedStatisticsProps> = {}
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
	props: Partial<UnifiedStatisticsProps> = {}
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
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	History({
		stats,
		size: 'small',
		layout: 'compact',
		maxItems: 3,
		...props,
	});

/**
 * Utility functions for creating statistics with common patterns
 */

// Create statistics with animation
export const AnimatedStats = (
	kind: StatisticsKind,
	stats: PlayerStats,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		stats,
		showCountUp: true,
		animationDuration: 1500,
		...props,
	});

// Create statistics without animation (for performance)
export const StaticStats = (
	kind: StatisticsKind,
	stats: PlayerStats,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		stats,
		showCountUp: false,
		...props,
	});

// Create highlighted statistics
export const HighlightedStats = (
	kind: StatisticsKind,
	stats: PlayerStats,
	props: Partial<UnifiedStatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		stats,
		highlightBest: true,
		showShadows: true,
		...props,
	});

// Export the factory class and all utility functions
export default StatisticsFactory;
