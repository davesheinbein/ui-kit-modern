import React from 'react';

export type BannerAction = {
	label: string;
	onClick: () => void;
	variant?: 'primary' | 'secondary' | 'text';
	disabled?: boolean;
};

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
	icon?: React.ReactNode;
	[key: string]: any;
}

export const feedbackBanner: BannerConfiguration = {
	kind: 'feedback',
	variant: 'feedback',
	type: 'info',
	position: 'center',
	autoClose: false,
};

export const notificationBanner: BannerConfiguration = {
	kind: 'notification',
	variant: 'notification',
	type: 'info',
	position: 'fixed',
	autoClose: true,
	duration: 2500,
};

export const toastBanner: BannerConfiguration = {
	kind: 'toast',
	variant: 'toast',
	type: 'achievement',
	position: 'fixed',
	autoClose: true,
	duration: 3200,
	icon: '🎉',
};

export const statusBanner: BannerConfiguration = {
	kind: 'status',
	variant: 'status',
	type: 'info',
	position: 'relative',
	autoClose: false,
};

export const globalToastBanner: BannerConfiguration = {
	kind: 'global',
	variant: 'global',
	type: 'achievement',
	position: 'fixed',
	autoClose: true,
	duration: 3200,
};

export const burnNotification: BannerConfiguration = {
	...notificationBanner,
	type: 'burn',
	icon: 'danger',
};

export const achievementNotification: BannerConfiguration =
	{
		...notificationBanner,
		type: 'achievement',
		icon: 'success',
	};

export const systemNotification: BannerConfiguration = {
	...notificationBanner,
	type: 'system',
	icon: 'info',
};

export const tauntNotification: BannerConfiguration = {
	...notificationBanner,
	type: 'taunt',
	icon: 'warning',
};

export const successToast: BannerConfiguration = {
	...toastBanner,
	type: 'success',
	icon: 'success',
};

export const errorToast: BannerConfiguration = {
	...toastBanner,
	type: 'error',
	icon: 'danger',
	duration: 5000,
};

export const warningToast: BannerConfiguration = {
	...toastBanner,
	type: 'warning',
	icon: 'warning',
	duration: 4000,
};

export const infoToast: BannerConfiguration = {
	...toastBanner,
	type: 'info',
	icon: 'info',
};

export const vsStatusBar: BannerConfiguration = {
	...statusBanner,
	showMistakes: true,
	showTimer: true,
};

export const BANNER_CONFIGURATIONS = {
	'feedback': feedbackBanner,
	'notification': notificationBanner,
	'toast': toastBanner,
	'status': statusBanner,
	'global': globalToastBanner,

	'burn-notification': burnNotification,
	'achievement-notification': achievementNotification,
	'system-notification': systemNotification,
	'taunt-notification': tauntNotification,

	'success-toast': successToast,
	'error-toast': errorToast,
	'warning-toast': warningToast,
	'info-toast': infoToast,

	'vs-status': vsStatusBar,
};

export type ExtendedBannerKind =
	keyof typeof BANNER_CONFIGURATIONS;

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
