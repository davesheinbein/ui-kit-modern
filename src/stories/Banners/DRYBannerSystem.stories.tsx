import type { Meta, StoryObj } from '@storybook/react';
import { BannerFactory } from '../../components/Banner';

const meta: Meta<typeof BannerFactory> = {
	title: 'Banners/Playground (Banners)',
	component: BannerFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'DRY Banner system that can create any banner type through configuration. Supports feedback, notifications, toasts, status bars, and global toasts.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'feedback',
				'notification',
				'toast',
				'status',
				'global',
				'burn-notification',
				'achievement-notification',
				'system-notification',
				'taunt-notification',
				'success-toast',
				'error-toast',
				'warning-toast',
				'info-toast',
				'vs-status',
			],
			description: 'Banner kind/configuration to use',
		},
		message: {
			control: 'text',
			description: 'Message to display in the banner',
		},
		onClose: {
			action: 'close clicked',
			description: 'Callback when banner is closed',
		},
	},
};

export default meta;
type Story = StoryObj<typeof BannerFactory>;

// Basic Banner Types
export const FeedbackBanner: Story = {
	args: {
		kind: 'feedback',
		message: 'Game completed successfully!',
	},
};

export const NotificationBanner: Story = {
	args: {
		kind: 'notification',
		message: 'System notification message',
		onClose: () => console.log('Notification closed'),
	},
};

export const ToastBanner: Story = {
	args: {
		kind: 'toast',
		message: 'Achievement unlocked!',
		onClose: () => console.log('Toast closed'),
	},
};

export const GlobalToast: Story = {
	args: {
		kind: 'global',
		message: 'Global toast message',
		onClose: () => console.log('Global toast closed'),
	},
};

// Notification Types
export const BurnNotification: Story = {
	args: {
		kind: 'burn-notification',
		message: 'Player got burned!',
		onClose: () => console.log('Burn notification closed'),
	},
};

export const AchievementNotification: Story = {
	args: {
		kind: 'achievement-notification',
		message: 'Achievement unlocked: Perfect Game!',
		onClose: () => console.log('Achievement closed'),
	},
};

export const SystemNotification: Story = {
	args: {
		kind: 'system-notification',
		message: 'System maintenance scheduled',
		onClose: () =>
			console.log('System notification closed'),
	},
};

export const TauntNotification: Story = {
	args: {
		kind: 'taunt-notification',
		message: 'Player sent a taunt!',
		onClose: () => console.log('Taunt closed'),
	},
};

// Toast Types
export const SuccessToast: Story = {
	args: {
		kind: 'success-toast',
		message: 'Data saved successfully!',
		onClose: () => console.log('Success toast closed'),
	},
};

export const ErrorToast: Story = {
	args: {
		kind: 'error-toast',
		message: 'Failed to save data',
		onClose: () => console.log('Error toast closed'),
	},
};

export const WarningToast: Story = {
	args: {
		kind: 'warning-toast',
		message: 'Connection unstable',
		onClose: () => console.log('Warning toast closed'),
	},
};

export const InfoToast: Story = {
	args: {
		kind: 'info-toast',
		message: 'New update available',
		onClose: () => console.log('Info toast closed'),
	},
};

// VS Status Bar
export const VSStatusBar: Story = {
	args: {
		kind: 'vs-status',
		player: {
			username: 'Player1',
			avatarUrl: 'https://via.placeholder.com/32',
			groupsSolved: 2,
			mistakes: 1,
			isYou: true,
		},
		opponent: {
			username: 'Player2',
			avatarUrl: 'https://via.placeholder.com/32',
			groupsSolved: 1,
			mistakes: 0,
		},
		timer: '02:45',
		totalGroups: 4,
		onEmoteClick: () => console.log('Emote clicked'),
	},
};
