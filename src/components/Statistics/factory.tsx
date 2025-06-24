import React from 'react';
import { Wrapper } from '../Wrappers';
import Statistics, {
	StatisticsProps,
	StatisticsKind,
} from './Statistics';
import {
	STATISTICS_CONFIGURATIONS,
	STATISTICS_GROUPS,
	QUICK_STATISTICS,
	StatisticsConfiguration,
	ExtendedStatisticsKind,
	PlayerStats,
} from './configurations';

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
		props: Partial<StatisticsProps> = {}
	): React.ReactElement<StatisticsProps> {
		return React.createElement(Statistics, {
			kind,
			...props,
		});
	}

	/**
	 * Create multiple statistics components from a group
	 */
	static createGroup(
		groupName: keyof typeof STATISTICS_GROUPS,
		sharedProps: Partial<StatisticsProps> = {}
	): React.ReactElement<StatisticsProps>[] {
		const group = STATISTICS_GROUPS[groupName];
		if (!group) return [];

		return group.map((kind, index) =>
			React.createElement(Statistics, {
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
		props: Partial<StatisticsProps> = {}
	): React.ReactElement<StatisticsProps> {
		const quickConfig = QUICK_STATISTICS[quickName];
		if (!quickConfig) {
			throw new Error(
				`Quick statistics "${quickName}" not found`
			);
		}

		return React.createElement(Statistics, {
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
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('daily', props);

export const DailyCard = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('daily-card', props);

export const DailyGrid = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('daily-grid', props);

export const DailyCompact = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('daily-compact', props);

export const DailyDetailed = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('daily-detailed', props);

// VS statistics shortcuts
export const VS = (props: Partial<StatisticsProps> = {}) =>
	StatisticsFactory.create('vs', props);

export const VSCard = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('vs-card', props);

export const VSComparison = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('vs-comparison', props);

export const VSDetailed = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('vs-detailed', props);

// History statistics shortcuts
export const History = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('history', props);

export const HistoryCard = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('history-card', props);

export const HistoryTrends = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('history-trends', props);

export const HistoryDetailed = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('history-detailed', props);

// Summary statistics shortcuts
export const Summary = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('summary', props);

export const SummaryCard = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('summary-card', props);

export const SummaryGrid = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('summary-grid', props);

// Specialized shortcuts
export const Leaderboard = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('leaderboard', props);

export const Achievements = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('achievements', props);

export const Trends = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('trends', props);

export const Comparison = (
	props: Partial<StatisticsProps> = {}
) => StatisticsFactory.create('comparison', props);

// Layout shortcuts
export const CompactStats = (
	kind: StatisticsKind,
	props: Partial<StatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		layout: 'compact',
		...props,
	});

export const ExpandedStats = (
	kind: StatisticsKind,
	props: Partial<StatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		layout: 'expanded',
		...props,
	});

export const MinimalStats = (
	kind: StatisticsKind,
	props: Partial<StatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		layout: 'minimal',
		...props,
	});

// Display shortcuts
export const CardStats = (
	kind: StatisticsKind,
	props: Partial<StatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		display: 'card',
		...props,
	});

export const GridStats = (
	kind: StatisticsKind,
	props: Partial<StatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		display: 'grid',
		...props,
	});

export const ListStats = (
	kind: StatisticsKind,
	props: Partial<StatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		display: 'list',
		...props,
	});

export const TableStats = (
	kind: StatisticsKind,
	props: Partial<StatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		display: 'table',
		...props,
	});

// Color scheme shortcuts
export const BlueStats = (
	kind: StatisticsKind,
	props: Partial<StatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		colorScheme: 'blue',
		...props,
	});

export const GreenStats = (
	kind: StatisticsKind,
	props: Partial<StatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		colorScheme: 'green',
		...props,
	});

export const RedStats = (
	kind: StatisticsKind,
	props: Partial<StatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		colorScheme: 'red',
		...props,
	});

export const PurpleStats = (
	kind: StatisticsKind,
	props: Partial<StatisticsProps> = {}
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

/**
 * Utility functions for creating statistics with common patterns
 */

// Create statistics with animation
export const AnimatedStats = (
	kind: StatisticsKind,
	stats: PlayerStats,
	props: Partial<StatisticsProps> = {}
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
	props: Partial<StatisticsProps> = {}
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
	props: Partial<StatisticsProps> = {}
) =>
	StatisticsFactory.create(kind, {
		stats,
		highlightBest: true,
		showShadows: true,
		...props,
	});

export default StatisticsFactory;
