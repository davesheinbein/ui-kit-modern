import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ToastBanner } from '../../components/ToastBanner';
import type { ToastBannerProps } from '../../components/ToastBanner/ToastBanner';

const meta: Meta<typeof ToastBanner> = {
	title: 'Banners/ToastBanner',
	component: ToastBanner,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A toast notification component that displays temporary messages with different types and auto-dismiss functionality.',
			},
		},
	},
	argTypes: {
		message: {
			control: 'text',
			description: 'The message to display in the toast',
		},
		type: {
			control: 'select',
			options: [
				'achievement',
				'success',
				'error',
				'info',
				'warning',
				'system',
				'burn',
				'taunt',
			],
			description:
				'The type of toast which determines the color scheme',
		},
		icon: {
			control: false,
			description: 'Optional icon to display in the toast',
		},
		onClose: {
			action: 'closed',
			description:
				'Function called when the toast is closed',
		},
		duration: {
			control: 'number',
			description:
				'Duration in milliseconds before auto-dismiss',
		},
		style: {
			control: 'object',
			description: 'Additional inline styles',
		},
	},
};

export default meta;
type Story = StoryObj<typeof ToastBanner>;

export const Info: Story = {
	args: {
		type: 'info',
		message: 'This is an info toast message!',
	},
};

export const Success: Story = {
	args: {
		type: 'success',
		message: 'Operation completed successfully!',
	},
};

export const Error: Story = {
	args: {
		type: 'error',
		message: 'An error occurred. Please try again.',
	},
};

export const Warning: Story = {
	args: {
		type: 'warning',
		message: 'Warning: This action cannot be undone.',
	},
};

export const Achievement: Story = {
	args: {
		type: 'achievement',
		message: 'Achievement unlocked: First puzzle solved!',
	},
};

export const WithIcon: Story = {
	args: {
		type: 'success',
		message: 'Custom icon toast',
		icon: <span>✓</span>,
	},
};

export const LongMessage: Story = {
	args: {
		type: 'info',
		message:
			'This is a very long toast message that should wrap properly and display all the content without any layout issues.',
	},
};
