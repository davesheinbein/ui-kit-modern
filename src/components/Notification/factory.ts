/**
 * NotificationFactory.ts - Ultra DRY Notification Factory
 */

import React from 'react';
import UnifiedNotification, {
	UnifiedNotificationProps,
} from './UnifiedNotification';
import {
	NotificationKind,
	getNotificationConfig,
} from './configurations';

export interface NotificationFactoryConfig {
	kind: NotificationKind;
	[key: string]: any;
}

export const NotificationFactory = (
	config: NotificationFactoryConfig | NotificationKind
) => {
	const finalConfig =
		typeof config === 'string' ? { kind: config } : config;

	return (
		props: Partial<UnifiedNotificationProps> = {}
	) => {
		const mergedProps = { ...finalConfig, ...props };
		return React.createElement(
			UnifiedNotification,
			mergedProps
		);
	};
};

export const NF = NotificationFactory;

export const NotificationPresets = {
	// Toasts
	toast: NotificationFactory('toast'),
	toastSuccess: NotificationFactory('toast-success'),
	toastError: NotificationFactory('toast-error'),
	toastWarning: NotificationFactory('toast-warning'),
	toastInfo: NotificationFactory('toast-info'),

	// Snackbars
	snackbar: NotificationFactory('snackbar'),
	snackbarAction: NotificationFactory('snackbar-action'),
	snackbarPersistent: NotificationFactory(
		'snackbar-persistent'
	),

	// Alerts
	alert: NotificationFactory('alert'),
	alertSuccess: NotificationFactory('alert-success'),
	alertError: NotificationFactory('alert-error'),
	alertWarning: NotificationFactory('alert-warning'),
	alertInfo: NotificationFactory('alert-info'),

	// Banners
	banner: NotificationFactory('banner'),
	bannerAnnouncement: NotificationFactory(
		'banner-announcement'
	),
	bannerPromotion: NotificationFactory('banner-promotion'),
	bannerUpdate: NotificationFactory('banner-update'),

	// Confirmations
	confirmDialog: NotificationFactory('confirm-dialog'),
	confirmDelete: NotificationFactory('confirm-delete'),
	confirmAction: NotificationFactory('confirm-action'),
	confirmNavigation: NotificationFactory(
		'confirm-navigation'
	),

	// Game notifications
	achievementToast: NotificationFactory(
		'achievement-toast'
	),
	gameAlert: NotificationFactory('game-alert'),
	matchNotification: NotificationFactory(
		'match-notification'
	),
	socialNotification: NotificationFactory(
		'social-notification'
	),
};

export default NotificationFactory;
