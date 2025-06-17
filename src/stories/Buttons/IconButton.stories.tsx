import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../../components/IconButton';
import type { IconButtonProps } from '../../components/IconButton/IconButton';

const meta: Meta<typeof IconButton> = {
	title: 'Buttons/IconButton',
	component: IconButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'An icon button component that displays an icon with optional label for accessibility.',
			},
		},
	},
	argTypes: {
		icon: {
			control: false,
			description: 'The icon element to display',
		},
		label: {
			control: 'text',
			description: 'Accessibility label for the button',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the button is disabled',
		},
		onClick: {
			action: 'clicked',
			description: 'Function called when button is clicked',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes to apply',
		},
		type: {
			control: 'select',
			options: ['button', 'submit', 'reset'],
			description: 'Button type attribute',
		},
	},
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
	args: {
		icon: <span>🔔</span>,
		label: 'Notify',
	},
};

export const Disabled: Story = {
	args: {
		icon: <span>🔔</span>,
		label: 'Notify',
		disabled: true,
	},
};

export const WithoutLabel: Story = {
	args: {
		icon: <span>⚙️</span>,
	},
};

export const WithSVGIcon: Story = {
	args: {
		icon: (
			<svg
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='currentColor'
			>
				<path d='M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 6L7 10.5 4.5 8 5.91 6.59 7 7.68l3.59-3.59L12 5.5z' />
			</svg>
		),
		label: 'Success',
	},
};
