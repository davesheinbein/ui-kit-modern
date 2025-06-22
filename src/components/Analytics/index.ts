// DRY Analytics System exports
export {
	default as AnalyticsFactory,
	AnalyticsFactoryClass,
	Ana,
	AnalyticsPresets,
	AnalyticsBodyFactory,
} from './factory';
export type {
	AnalyticsFactoryProps,
	AnalyticsBodyFactoryProps,
} from './factory';

export * from './configurations';

export { default as UnifiedAnalytics } from './UnifiedAnalytics';
export type { UnifiedAnalyticsProps } from './UnifiedAnalytics';

export { default as Analytics } from './Analytics';
export type { AnalyticsProps } from './Analytics';

// Legacy component compatibility (for gradual migration)
// These will be removed in a future version
export { default as Dashboard } from './UnifiedAnalytics';
export { default as MetricsDashboard } from './UnifiedAnalytics';
export { default as RealtimeAnalytics } from './UnifiedAnalytics';
export { default as PerformanceMetrics } from './UnifiedAnalytics';
export { default as AnalyticsReports } from './UnifiedAnalytics';
