export type { NotificationProps } from './Notification';

// Keep the original Notification component for backward compatibility
export { default as Notification } from './Notification';

export * from './configurations';

export {
	default as NotificationFactory,
	NotificationPresets,
} from './factory';
