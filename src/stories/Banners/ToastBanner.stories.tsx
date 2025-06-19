import type { Meta, StoryObj } from '@storybook/react';
import { BannerFactory } from '../../components/Banner';

const meta: Meta<typeof BannerFactory> = {
	title: 'Banners/Toast (Banners)',
	component: BannerFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Toast banners for displaying temporary notifications and messages.',
			},
		},
	},
	argTypes: {
		message: {
			control: 'text',
			description: 'The toast message content',
		},
		isVisible: {
			control: 'boolean',
			description: 'Whether the toast is visible',
		},
		autoHide: {
			control: 'boolean',
			description:
				'Whether the toast should auto-hide after a duration',
		},
		duration: {
			control: 'number',
			description:
				'Duration in milliseconds before auto-hide',
		},
		position: {
			control: 'select',
			options: ['top', 'bottom', 'center'],
			description: 'Position of the toast on screen',
		},
		onClose: {
			action: 'toast closed',
			description: 'Callback when toast is closed',
		},
	},
};

export default meta;
type Story = StoryObj<typeof BannerFactory>;

export const Default: Story = {
	args: {
		kind: 'toast',
		message: 'This is a toast notification',
		isVisible: true,
		autoHide: false,
		position: 'top',
	},
};

export const Success: Story = {
	args: {
		kind: 'toast',
		variant: 'success',
		message: 'Action completed successfully!',
		isVisible: true,
		autoHide: true,
		duration: 3000,
		position: 'top',
	},
};

export const Error: Story = {
	args: {
		kind: 'toast',
		variant: 'error',
		message: 'An error occurred. Please try again.',
		isVisible: true,
		autoHide: false,
		position: 'top',
	},
};

export const Warning: Story = {
	args: {
		kind: 'toast',
		variant: 'warning',
		message: 'This action cannot be undone.',
		isVisible: true,
		autoHide: false,
		position: 'center',
	},
};

export const Info: Story = {
	args: {
		kind: 'toast',
		variant: 'info',
		message: 'New feature available! Check it out.',
		isVisible: true,
		autoHide: true,
		duration: 5000,
		position: 'bottom',
	},
};

export const AutoHiding: Story = {
	args: {
		kind: 'toast',
		message: 'This toast will disappear in 3 seconds',
		isVisible: true,
		autoHide: true,
		duration: 3000,
		position: 'top',
	},
};
