import type { Meta, StoryObj } from '@storybook/react';
import { BannerFactory } from '../../components/Banner';

const meta: Meta<typeof BannerFactory> = {
	title: 'Banners/Notification (Banners)',
	component: BannerFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A notification banner component that displays different types of messages with color-coded styling and auto-dismiss functionality.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'notification',
				'burn-notification',
				'achievement-notification',
				'system-notification',
				'taunt-notification',
			],
			description:
				'The type of notification banner to display',
		},
		message: {
			control: 'text',
			description: 'The notification message to display',
		},
		onClose: {
			action: 'close clicked',
			description: 'Callback when notification is closed',
		},
		autoHide: {
			control: 'boolean',
			description:
				'Whether banner auto-hides after a delay',
		},
		duration: {
			control: {
				type: 'range',
				min: 1000,
				max: 10000,
				step: 500,
			},
			description: 'Auto-hide duration in milliseconds',
		},
		position: {
			control: 'select',
			options: [
				'top',
				'bottom',
				'fixed-top',
				'fixed-bottom',
			],
			description: 'Banner position on screen',
		},
		showIcon: {
			control: 'boolean',
			description: 'Whether to show notification icon',
		},
		dismissible: {
			control: 'boolean',
			description:
				'Whether banner can be dismissed by user',
		},
		priority: {
			control: 'select',
			options: ['low', 'normal', 'high', 'urgent'],
			description: 'Banner priority level',
		},
		variant: {
			control: 'select',
			options: ['default', 'compact', 'expanded'],
			description: 'Visual variant of the banner',
		},
		theme: {
			control: 'select',
			options: ['light', 'dark', 'auto'],
			description: 'Color theme for the banner',
		},
	},
};

export default meta;
type Story = StoryObj<typeof BannerFactory>;

export const Default: Story = {
	args: {
		kind: 'notification',
		message: 'This is a default notification',
		onClose: () => console.log('Notification closed'),
	},
};

export const Burn: Story = {
	args: {
		kind: 'burn-notification',
		message: 'Player got burned!',
		onClose: () => console.log('Burn notification closed'),
	},
};

export const Achievement: Story = {
	args: {
		kind: 'achievement-notification',
		message: 'Achievement unlocked: Perfect Game!',
		onClose: () => console.log('Achievement closed'),
	},
};

export const System: Story = {
	args: {
		kind: 'system-notification',
		message: 'System maintenance scheduled for tonight',
		onClose: () =>
			console.log('System notification closed'),
	},
};

export const Taunt: Story = {
	args: {
		kind: 'taunt-notification',
		message: 'Player sent you a taunt!',
		onClose: () => console.log('Taunt closed'),
	},
};
