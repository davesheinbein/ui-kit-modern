/**
 * NotificationConfigurations.ts - DRY Notification Configuration System
 *
 * This file provides comprehensive configuration for all notification component types
 * including toasts, snackbars, alerts, banners, and confirmation dialogs.
 */

import { ReactNode } from 'react';

// ========================================
// Core Types and Interfaces
// ========================================

export type NotificationKind =
	// Toast Notifications
	| 'toast'
	| 'toast-success'
	| 'toast-error'
	| 'toast-warning'
	| 'toast-info'

	// Snackbar Notifications
	| 'snackbar'
	| 'snackbar-action'
	| 'snackbar-persistent'

	// Alert Notifications
	| 'alert'
	| 'alert-success'
	| 'alert-error'
	| 'alert-warning'
	| 'alert-info'

	// Banner Notifications
	| 'banner'
	| 'banner-announcement'
	| 'banner-promotion'
	| 'banner-update'

	// Confirmation Dialogs
	| 'confirm-dialog'
	| 'confirm-delete'
	| 'confirm-action'
	| 'confirm-navigation'

	// Game-specific Notifications
	| 'achievement-toast'
	| 'game-alert'
	| 'match-notification'
	| 'social-notification';

export type NotificationVariant =
	| 'default'
	| 'minimal'
	| 'filled'
	| 'outlined'
	| 'glass'
	| 'modern'
	| 'game-style';

export type NotificationPosition =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right'
	| 'center'
	| 'fixed'
	| 'global'
	| 'inline';

export type NotificationSeverity =
	| 'success'
	| 'error'
	| 'warning'
	| 'info'
	| 'neutral';

export type NotificationAction = {
	label: string;
	onClick: () => void;
	variant?: 'primary' | 'secondary' | 'text';
	disabled?: boolean;
};

// ========================================
// Configuration Interface
// ========================================

export interface NotificationConfiguration {
	kind: NotificationKind;
	variant?: NotificationVariant;
	severity?: NotificationSeverity;
	position?: NotificationPosition;

	// Content
	title?: string;
	message?: string | ReactNode;
	icon?: ReactNode | string;
	image?: string;

	// Behavior
	autoHide?: boolean;
	duration?: number;
	persistent?: boolean;
	dismissible?: boolean;
	pauseOnHover?: boolean;

	// Actions
	actions?: NotificationAction[];
	confirmText?: string;
	cancelText?: string;

	// Styling
	showIcon?: boolean;
	showCloseButton?: boolean;
	showProgress?: boolean;
	allowHtml?: boolean;

	// Animation
	enterAnimation?:
		| 'slide'
		| 'fade'
		| 'scale'
		| 'bounce'
		| 'shake';
	exitAnimation?: 'slide' | 'fade' | 'scale' | 'shrink';
	animationDuration?: number;

	// Callbacks
	onShow?: () => void;
	onHide?: () => void;
	onClick?: () => void;
	onConfirm?: () => void;
	onCancel?: () => void;
	onAction?: (action: NotificationAction) => void;

	// Custom styling
	className?: string;
	style?: React.CSSProperties;
}

// ========================================
// Configuration Registry
// ========================================

export const NOTIFICATION_CONFIGURATIONS: Record<
	NotificationKind,
	NotificationConfiguration
> = {
	// Toast Notifications
	'toast': {
		kind: 'toast',
		variant: 'default',
		severity: 'neutral',
		position: 'top-right',
		autoHide: true,
		duration: 4000,
		dismissible: true,
		pauseOnHover: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'slide',
		exitAnimation: 'slide',
	},

	'toast-success': {
		kind: 'toast-success',
		variant: 'filled',
		severity: 'success',
		position: 'top-right',
		autoHide: true,
		duration: 3000,
		dismissible: true,
		pauseOnHover: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'slide',
		exitAnimation: 'slide',
	},

	'toast-error': {
		kind: 'toast-error',
		variant: 'filled',
		severity: 'error',
		position: 'top-right',
		autoHide: false,
		persistent: true,
		dismissible: true,
		pauseOnHover: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'bounce',
		exitAnimation: 'slide',
	},

	'toast-warning': {
		kind: 'toast-warning',
		variant: 'filled',
		severity: 'warning',
		position: 'top-right',
		autoHide: true,
		duration: 5000,
		dismissible: true,
		pauseOnHover: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'slide',
		exitAnimation: 'slide',
	},

	'toast-info': {
		kind: 'toast-info',
		variant: 'outlined',
		severity: 'info',
		position: 'top-right',
		autoHide: true,
		duration: 4000,
		dismissible: true,
		pauseOnHover: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'slide',
		exitAnimation: 'slide',
	},

	// Snackbar Notifications
	'snackbar': {
		kind: 'snackbar',
		variant: 'filled',
		severity: 'neutral',
		position: 'bottom-center',
		autoHide: true,
		duration: 4000,
		dismissible: true,
		showIcon: false,
		showCloseButton: false,
		enterAnimation: 'slide',
		exitAnimation: 'slide',
	},

	'snackbar-action': {
		kind: 'snackbar-action',
		variant: 'filled',
		severity: 'neutral',
		position: 'bottom-left',
		autoHide: true,
		duration: 6000,
		dismissible: true,
		showIcon: false,
		showCloseButton: false,
		enterAnimation: 'slide',
		exitAnimation: 'slide',
	},

	'snackbar-persistent': {
		kind: 'snackbar-persistent',
		variant: 'filled',
		severity: 'neutral',
		position: 'bottom-center',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: false,
		showCloseButton: true,
		enterAnimation: 'slide',
		exitAnimation: 'slide',
	},

	// Alert Notifications
	'alert': {
		kind: 'alert',
		variant: 'outlined',
		severity: 'neutral',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'fade',
		exitAnimation: 'fade',
	},

	'alert-success': {
		kind: 'alert-success',
		variant: 'filled',
		severity: 'success',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'fade',
		exitAnimation: 'fade',
	},

	'alert-error': {
		kind: 'alert-error',
		variant: 'filled',
		severity: 'error',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'shake',
		exitAnimation: 'fade',
	},

	'alert-warning': {
		kind: 'alert-warning',
		variant: 'filled',
		severity: 'warning',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'fade',
		exitAnimation: 'fade',
	},

	'alert-info': {
		kind: 'alert-info',
		variant: 'outlined',
		severity: 'info',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'fade',
		exitAnimation: 'fade',
	},

	// Banner Notifications
	'banner': {
		kind: 'banner',
		variant: 'filled',
		severity: 'neutral',
		position: 'top-center',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: false,
		showCloseButton: true,
		enterAnimation: 'slide',
		exitAnimation: 'slide',
	},

	'banner-announcement': {
		kind: 'banner-announcement',
		variant: 'filled',
		severity: 'info',
		position: 'top-center',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'slide',
		exitAnimation: 'slide',
	},

	'banner-promotion': {
		kind: 'banner-promotion',
		variant: 'filled',
		severity: 'success',
		position: 'top-center',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'slide',
		exitAnimation: 'slide',
	},

	'banner-update': {
		kind: 'banner-update',
		variant: 'outlined',
		severity: 'warning',
		position: 'top-center',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'slide',
		exitAnimation: 'slide',
	},

	// Confirmation Dialogs
	'confirm-dialog': {
		kind: 'confirm-dialog',
		variant: 'modern',
		severity: 'neutral',
		position: 'center',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: false,
		showCloseButton: false,
		confirmText: 'Confirm',
		cancelText: 'Cancel',
		enterAnimation: 'scale',
		exitAnimation: 'scale',
	},

	'confirm-delete': {
		kind: 'confirm-delete',
		variant: 'modern',
		severity: 'error',
		position: 'center',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: true,
		showCloseButton: false,
		confirmText: 'Delete',
		cancelText: 'Cancel',
		enterAnimation: 'scale',
		exitAnimation: 'scale',
	},

	'confirm-action': {
		kind: 'confirm-action',
		variant: 'modern',
		severity: 'warning',
		position: 'center',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: true,
		showCloseButton: false,
		confirmText: 'Proceed',
		cancelText: 'Cancel',
		enterAnimation: 'scale',
		exitAnimation: 'scale',
	},

	'confirm-navigation': {
		kind: 'confirm-navigation',
		variant: 'modern',
		severity: 'info',
		position: 'center',
		autoHide: false,
		persistent: true,
		dismissible: true,
		showIcon: true,
		showCloseButton: false,
		confirmText: 'Leave',
		cancelText: 'Stay',
		enterAnimation: 'scale',
		exitAnimation: 'scale',
	},

	// Game-specific Notifications
	'achievement-toast': {
		kind: 'achievement-toast',
		variant: 'game-style',
		severity: 'success',
		position: 'top-center',
		autoHide: true,
		duration: 5000,
		dismissible: true,
		pauseOnHover: true,
		showIcon: true,
		showCloseButton: false,
		enterAnimation: 'bounce',
		exitAnimation: 'fade',
	},

	'game-alert': {
		kind: 'game-alert',
		variant: 'game-style',
		severity: 'warning',
		position: 'center',
		autoHide: true,
		duration: 3000,
		dismissible: false,
		showIcon: true,
		showCloseButton: false,
		enterAnimation: 'scale',
		exitAnimation: 'fade',
	},

	'match-notification': {
		kind: 'match-notification',
		variant: 'game-style',
		severity: 'info',
		position: 'top-right',
		autoHide: true,
		duration: 4000,
		dismissible: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'slide',
		exitAnimation: 'slide',
	},

	'social-notification': {
		kind: 'social-notification',
		variant: 'modern',
		severity: 'info',
		position: 'bottom-right',
		autoHide: true,
		duration: 6000,
		dismissible: true,
		pauseOnHover: true,
		showIcon: true,
		showCloseButton: true,
		enterAnimation: 'slide',
		exitAnimation: 'slide',
	},
};

// ========================================
// Helper Functions
// ========================================

/**
 * Get notification configuration by kind
 */
export const getNotificationConfig = (
	kind: NotificationKind
): NotificationConfiguration => {
	return (
		NOTIFICATION_CONFIGURATIONS[kind] ||
		NOTIFICATION_CONFIGURATIONS['toast']
	);
};

/**
 * Merge notification configurations
 */
export const mergeNotificationConfig = (
	base: NotificationConfiguration,
	override: Partial<NotificationConfiguration>
): NotificationConfiguration => {
	return {
		...base,
		...override,
	};
};

/**
 * Create custom notification configuration
 */
export const createNotificationConfig = (
	kind: NotificationKind,
	overrides: Partial<NotificationConfiguration> = {}
): NotificationConfiguration => {
	const baseConfig = getNotificationConfig(kind);
	return mergeNotificationConfig(baseConfig, overrides);
};

/**
 * Validate notification configuration
 */
export const validateNotificationConfig = (
	config: NotificationConfiguration
): string[] => {
	const errors: string[] = [];

	if (!config.kind) {
		errors.push('Notification kind is required');
	}

	if (
		config.autoHide &&
		config.duration &&
		config.duration < 0
	) {
		errors.push(
			'Duration must be positive when autoHide is true'
		);
	}

	if (config.actions) {
		config.actions.forEach((action, index) => {
			if (!action.label) {
				errors.push(`Action ${index} label is required`);
			}
			if (!action.onClick) {
				errors.push(
					`Action ${index} onClick handler is required`
				);
			}
		});
	}

	return errors;
};

/**
 * Get default icon for notification severity
 */
export const getDefaultIcon = (
	severity: NotificationSeverity
): string => {
	const iconMap: Record<NotificationSeverity, string> = {
		success: '✓',
		error: '✗',
		warning: '⚠',
		info: 'ℹ',
		neutral: '•',
	};

	return iconMap[severity] || iconMap.neutral;
};
