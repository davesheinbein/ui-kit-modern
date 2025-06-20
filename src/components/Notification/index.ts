export { default as UnifiedNotification } from './UnifiedNotification';
export type { UnifiedNotificationProps } from './UnifiedNotification';

// Keep the original Notification component for backward compatibility
export { default as Notification } from './Notification';
export type { NotificationProps } from './Notification';

// Export enhanced notification configuration system
export * from './NotificationConfigurations';

// Export enhanced notification factory and ultra-DRY system
export {
	default as NotificationFactory,
	NF,
	NotificationPresets,
} from './NotificationFactoryDRY';
