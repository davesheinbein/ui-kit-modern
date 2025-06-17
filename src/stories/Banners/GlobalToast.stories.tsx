import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GlobalToast } from '../../components/GlobalToast';

const meta: Meta<typeof GlobalToast> = {
	title: 'Banners/GlobalToast',
	component: GlobalToast,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: 'Component description to be updated.',
			},
		},
	},
	argTypes: {
		// Add argTypes here
	},
};

export default meta;
type Story = StoryObj<typeof GlobalToast>;

const Template = (args) => <GlobalToast {...args} />;

export const Default: Story = {
	args: {},
};
