import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VSStatusBar } from '../../index';

const meta: Meta<typeof VSStatusBar> = {
	title: 'Banners/VSStatusBar',
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

const Template = (args: any) => <VSStatusBar {...args} />;

export const Default: Story = {
	args: {},
};
Default.args = {
	player: {
		username: 'You',
		groupsSolved: 2,
		mistakes: 1,
		isYou: true,
	},
	opponent: {
		username: 'Opponent',
		groupsSolved: 1,
		mistakes: 2,
	},
	timer: '01:23',
	totalGroups: 4,
	showMistakes: true,
	showTimer: true,
};
