// DRY Banner System exports
export {
	default as BannerFactory,
	BannerFactoryClass,
	Ban,
	BannerPresets,
	BannerBodyFactory,
} from './factory';
export type {
	BannerFactoryProps,
	BannerBodyFactoryProps,
} from './factory';

export * from './configurations';

export { default as UnifiedBanner } from './UnifiedBanner';
export type { UnifiedBannerProps } from './UnifiedBanner';

export { default as Banner } from './Banner';
export type { BannerProps } from './Banner';

// Legacy component compatibility (for gradual migration)
// These will be removed in a future version
export { default as FeedbackBanner } from './UnifiedBanner';
export { default as NotificationBanner } from './UnifiedBanner';
export { default as ToastBanner } from './UnifiedBanner';
export { default as GlobalToast } from './UnifiedBanner';
export { default as VSStatusBar } from './UnifiedBanner';
