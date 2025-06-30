import React from 'react';
import { Notification } from '../../components/Notification';
import type { NotificationProps } from '../../components/Notification';

export default {
	title: 'Notifications/Notification',
	component: Notification,
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'toast',
				'toast-success',
				'toast-error',
				'toast-warning',
				'toast-info',
				'snackbar',
				'snackbar-action',
				'snackbar-persistent',
				'alert',
				'alert-success',
				'alert-error',
				'alert-warning',
				'alert-info',
				'banner',
				'banner-announcement',
				'banner-promotion',
				'banner-update',
				'confirm-dialog',
				'confirm-delete',
				'confirm-action',
				'confirm-navigation',
				'achievement-toast',
				'game-alert',
				'match-notification',
				'social-notification',
			],
		},
		visible: { control: 'boolean' },
		autoHide: { control: 'boolean' },
		dismissible: { control: 'boolean' },
		showIcon: { control: 'boolean' },
		showCloseButton: { control: 'boolean' },
		showProgress: { control: 'boolean' },
	},
};

type Story = {
	args: NotificationProps;
};

export const Toast: Story = {
	args: {
		kind: 'toast',
		title: 'Default Toast',
		message: 'This is a default toast notification.',
		autoHide: true,
		showIcon: true,
		showCloseButton: true,
	},
};

export const ToastSuccess: Story = {
	args: {
		kind: 'toast-success',
		title: 'Success!',
		message: 'Your action was successful.',
		autoHide: true,
		showIcon: true,
		showCloseButton: true,
	},
};

export const ToastError: Story = {
	args: {
		kind: 'toast-error',
		title: 'Error',
		message: 'Something went wrong.',
		autoHide: false,
		showIcon: true,
		showCloseButton: true,
	},
};

export const Snackbar: Story = {
	args: {
		kind: 'snackbar',
		message: 'This is a snackbar notification.',
		autoHide: true,
		showIcon: false,
		showCloseButton: false,
	},
};

export const Alert: Story = {
	args: {
		kind: 'alert',
		title: 'Alert',
		message: 'This is an alert notification.',
		showIcon: true,
		showCloseButton: true,
	},
};

export const Banner: Story = {
	args: {
		kind: 'banner',
		title: 'Banner',
		message: 'This is a banner notification.',
		showCloseButton: true,
	},
};

export const ConfirmDialog: Story = {
	args: {
		kind: 'confirm-dialog',
		title: 'Are you sure?',
		message: 'Do you want to proceed with this action?',
		confirmText: 'Yes',
		cancelText: 'No',
		showIcon: false,
		showCloseButton: false,
	},
};

export const AchievementToast: Story = {
	args: {
		kind: 'achievement-toast',
		title: 'Achievement Unlocked!',
		message: 'You completed your first task.',
		showIcon: true,
		autoHide: true,
	},
};

export const GameAlert: Story = {
	args: {
		kind: 'game-alert',
		title: 'Game Alert',
		message: 'You have a new challenge!',
		showIcon: true,
		autoHide: true,
	},
};

export const SocialNotification: Story = {
	args: {
		kind: 'social-notification',
		title: 'New Follower',
		message: 'Alex started following you.',
		showIcon: true,
		autoHide: true,
	},
};

export const PersistentPlacement: Story = {
	args: {
		kind: 'toast-info',
		title: 'Persistent Placement',
		message:
			'This notification uses the new placement prop.',
		placement: 'fixed',
		showIcon: true,
		showCloseButton: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates the new persistent placement prop (fixed, global, inline, center) for Notification.',
			},
		},
	},
};
