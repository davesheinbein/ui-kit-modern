export { default as UnifiedNotification } from './UnifiedNotification';
export type { UnifiedNotificationProps } from './UnifiedNotification';

// Keep the original Notification component for backward compatibility
export { default as Notification } from './Notification';
export type { NotificationProps } from './Notification';

export * from './configurations';

export {
	default as NotificationFactory,
	NF,
	NotificationPresets,
} from './factory';
