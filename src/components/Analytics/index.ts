// Factory system for backward compatibility
export {
	AnalyticsFactory,
	AnalyticsFactoryClass,
	Ana,
	AnalyticsPresets,
	AnalyticsBodyFactory,
} from './factory';
export type {
	AnalyticsFactoryProps,
	AnalyticsBodyFactoryProps,
} from './factory';

// Configuration system
export * from './configurations';

// Legacy component compatibility (for gradual migration)
// These now point to the consolidated Analytics component
export type { AnalyticsProps } from './Analytics';
export { default as Analytics } from './Analytics';
export { default as Dashboard } from './Analytics';
export { default as MetricsDashboard } from './Analytics';
export { default as RealtimeAnalytics } from './Analytics';
export { default as PerformanceMetrics } from './Analytics';
export { default as AnalyticsReports } from './Analytics';
