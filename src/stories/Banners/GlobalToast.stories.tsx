import type { Meta, StoryObj } from '@storybook/react';
import { BannerFactory } from '../../components/Banner';

const meta: Meta<typeof BannerFactory> = {
	title: 'Banners/Global Toast (Banners)',
	component: BannerFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Global toast system for displaying notifications from global state (e.g., Redux). Requires connection to your notification store.',
			},
		},
	},
	argTypes: {
		message: {
			control: 'text',
			description: 'Toast message to display',
		},
		onClose: {
			action: 'close clicked',
			description: 'Callback when toast is closed',
		},
	},
};

export default meta;
type Story = StoryObj<typeof BannerFactory>;

export const Default: Story = {
	args: {
		kind: 'global',
		message: 'Global notification message',
		onClose: () => console.log('Global toast closed'),
	},
};

export const Achievement: Story = {
	args: {
		kind: 'global',
		message: 'Achievement unlocked!',
		type: 'achievement',
		onClose: () => console.log('Achievement toast closed'),
	},
};

export const SystemAlert: Story = {
	args: {
		kind: 'global',
		message: 'System maintenance in progress',
		type: 'system',
		onClose: () => console.log('System toast closed'),
	},
};
