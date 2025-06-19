import React from 'react';

export interface BannerConfiguration {
	kind:
		| 'feedback'
		| 'notification'
		| 'toast'
		| 'status'
		| 'global';
	variant?:
		| 'feedback'
		| 'notification'
		| 'toast'
		| 'status'
		| 'global';
	type?:
		| 'burn'
		| 'achievement'
		| 'system'
		| 'taunt'
		| 'success'
		| 'error'
		| 'info'
		| 'warning';
	position?:
		| 'top'
		| 'bottom'
		| 'fixed'
		| 'relative'
		| 'center';
	autoClose?: boolean;
	duration?: number;
	showCloseButton?: boolean;
	icon?: React.ReactNode;
	[key: string]: any;
}

// Basic banner kinds
export const feedbackBanner: BannerConfiguration = {
	kind: 'feedback',
	variant: 'feedback',
	type: 'info',
	position: 'center',
	autoClose: false,
	showCloseButton: false,
};

export const notificationBanner: BannerConfiguration = {
	kind: 'notification',
	variant: 'notification',
	type: 'info',
	position: 'fixed',
	autoClose: true,
	duration: 2500,
	showCloseButton: true,
};

export const toastBanner: BannerConfiguration = {
	kind: 'toast',
	variant: 'toast',
	type: 'achievement',
	position: 'fixed',
	autoClose: true,
	duration: 3200,
	showCloseButton: true,
	icon: '🎉',
};

export const statusBanner: BannerConfiguration = {
	kind: 'status',
	variant: 'status',
	type: 'info',
	position: 'relative',
	autoClose: false,
	showCloseButton: false,
};

export const globalToastBanner: BannerConfiguration = {
	kind: 'global',
	variant: 'global',
	type: 'achievement',
	position: 'fixed',
	autoClose: true,
	duration: 3200,
	showCloseButton: true,
};

// Extended banner kinds with specific configurations
export const burnNotification: BannerConfiguration = {
	...notificationBanner,
	type: 'burn',
	icon: '🔥',
};

export const achievementNotification: BannerConfiguration =
	{
		...notificationBanner,
		type: 'achievement',
		icon: '🏆',
	};

export const systemNotification: BannerConfiguration = {
	...notificationBanner,
	type: 'system',
	icon: 'ℹ️',
};

export const tauntNotification: BannerConfiguration = {
	...notificationBanner,
	type: 'taunt',
	icon: '😈',
};

export const successToast: BannerConfiguration = {
	...toastBanner,
	type: 'success',
	icon: '✅',
};

export const errorToast: BannerConfiguration = {
	...toastBanner,
	type: 'error',
	icon: '❌',
	duration: 5000,
};

export const warningToast: BannerConfiguration = {
	...toastBanner,
	type: 'warning',
	icon: '⚠️',
	duration: 4000,
};

export const infoToast: BannerConfiguration = {
	...toastBanner,
	type: 'info',
	icon: 'ℹ️',
};

// VS Game specific configurations
export const vsStatusBar: BannerConfiguration = {
	...statusBanner,
	showMistakes: true,
	showTimer: true,
};

// Export all configurations
export const BANNER_CONFIGURATIONS = {
	// Basic kinds
	'feedback': feedbackBanner,
	'notification': notificationBanner,
	'toast': toastBanner,
	'status': statusBanner,
	'global': globalToastBanner,

	// Notification types
	'burn-notification': burnNotification,
	'achievement-notification': achievementNotification,
	'system-notification': systemNotification,
	'taunt-notification': tauntNotification,

	// Toast types
	'success-toast': successToast,
	'error-toast': errorToast,
	'warning-toast': warningToast,
	'info-toast': infoToast,

	// VS Game
	'vs-status': vsStatusBar,
};

export type ExtendedBannerKind =
	keyof typeof BANNER_CONFIGURATIONS;

// Type exports
export type BannerKind = ExtendedBannerKind;
export type BannerType =
	| 'burn'
	| 'achievement'
	| 'system'
	| 'taunt'
	| 'success'
	| 'error'
	| 'info'
	| 'warning';
export type BannerVariant =
	| 'feedback'
	| 'notification'
	| 'toast'
	| 'status'
	| 'global';
export type BannerPosition =
	| 'top'
	| 'bottom'
	| 'fixed'
	| 'relative'
	| 'center';
