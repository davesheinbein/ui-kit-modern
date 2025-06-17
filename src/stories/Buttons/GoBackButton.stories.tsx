import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GoBackButton } from '../../components/GoBackButton';
import type { GoBackButtonProps } from '../../components/GoBackButton/GoBackButton';

const meta: Meta<typeof GoBackButton> = {
	title: 'Buttons/GoBackButton',
	component: GoBackButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A navigation button with back arrow icon for returning to previous pages.',
			},
		},
	},
	argTypes: {
		onClick: {
			action: 'clicked',
			description: 'Function called when button is clicked',
		},
		label: {
			control: 'text',
			description:
				'Optional text label to display next to the icon',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes to apply',
		},
		style: {
			control: 'object',
			description: 'Inline styles to apply',
		},
	},
};

export default meta;
type Story = StoryObj<typeof GoBackButton>;

export const Default: Story = {
	args: {
		onClick: () => {},
	},
};

export const WithLabel: Story = {
	args: {
		onClick: () => {},
		label: 'Back',
	},
};

export const WithCustomLabel: Story = {
	args: {
		onClick: () => {},
		label: 'Return to Home',
	},
};
