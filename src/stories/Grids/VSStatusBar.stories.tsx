import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VSStatusBar } from '../../components/VSStatusBar';

const meta: Meta<typeof VSStatusBar> = {
	title: 'Grids/VSStatusBar',
	component: VSStatusBar,
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
type Story = StoryObj<typeof VSStatusBar>;

const Template = (args) => <VSStatusBar {...args} />;

export const Default: Story = {
	args: {},
};
Default.args = {
	player: { name: 'Player' },
	opponent: { name: 'Opponent' },
	timer: 60,
	totalGroups: 4,
};
