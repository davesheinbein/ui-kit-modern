import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SecondaryButton } from '../../components/SecondaryButton';
import type { SecondaryButtonProps } from '../../components/SecondaryButton/SecondaryButton';

const meta: Meta<typeof SecondaryButton> = {
	title: 'Buttons/SecondaryButton',
	component: SecondaryButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A secondary button component with outlined style and primary color border.',
			},
		},
	},
	argTypes: {
		children: {
			control: 'text',
			description:
				'The content to display inside the button',
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
type Story = StoryObj<typeof SecondaryButton>;

export const Default: Story = {
	args: {
		children: 'Secondary Button',
	},
};

export const Disabled: Story = {
	args: {
		children: 'Disabled Button',
		disabled: true,
	},
};

export const WithLongText: Story = {
	args: {
		children:
			'This is a very long button text to test wrapping',
	},
};

export const Submit: Story = {
	args: {
		children: 'Submit Form',
		type: 'submit',
	},
};
