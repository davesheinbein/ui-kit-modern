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
		type: {
			control: 'select',
			options: ['burn', 'achievement', 'system', 'taunt'],
			description:
				'The type of notification which determines the color scheme',
		},
		message: {
			control: 'text',
			description: 'The notification message to display',
		},
		onClose: {
			action: 'close clicked',
			description: 'Callback when notification is closed',
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
