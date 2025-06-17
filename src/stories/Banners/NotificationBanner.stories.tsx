import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationBanner } from '../../components/NotificationBanner';
import type {
	NotificationBannerProps,
	NotificationType,
} from '../../components/NotificationBanner/NotificationBanner';

const meta: Meta<typeof NotificationBanner> = {
	title: 'Banners/NotificationBanner',
	component: NotificationBanner,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A notification banner component that displays different types of messages with color-coded styling.',
			},
		},
	},
	argTypes: {
		type: {
			control: 'select',
			options: ['burn', 'achievement', 'system', 'taunt'],
			description:
				'The type of notification which determines the color scheme',
		},
		message: {
			control: 'text',
			description:
				'The message to display in the notification',
		},
		onClose: {
			action: 'closed',
			description:
				'Function called when the notification is closed',
		},
		index: {
			control: 'number',
			description:
				'Index for stacking multiple notifications',
		},
	},
};

export default meta;
type Story = StoryObj<typeof NotificationBanner>;

export const Burn: Story = {
	args: {
		type: 'burn',
		message: 'Burn notification! Something went wrong.',
		onClose: () => {},
		index: 0,
	},
};

export const Achievement: Story = {
	args: {
		type: 'achievement',
		message:
			'Achievement unlocked! You completed the challenge.',
		onClose: () => {},
		index: 1,
	},
};

export const System: Story = {
	args: {
		type: 'system',
		message: 'System message: Update available.',
		onClose: () => {},
		index: 2,
	},
};

export const Taunt: Story = {
	args: {
		type: 'taunt',
		message: 'Taunt message: Your opponent is catching up!',
		onClose: () => {},
		index: 3,
	},
};

export const LongMessage: Story = {
	args: {
		type: 'achievement',
		message:
			'This is a very long notification message that should wrap properly and display all the content without any issues.',
		onClose: () => {},
		index: 0,
	},
};
