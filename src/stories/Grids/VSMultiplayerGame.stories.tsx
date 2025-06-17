import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VSMultiplayerGame } from '../../index';

const meta: Meta<typeof VSMultiplayerGame> = {
	title: 'Grids/VSMultiplayerGame',
	component: VSMultiplayerGame,
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
type Story = StoryObj<typeof VSMultiplayerGame>;

const Template = (args: any) => (
	<VSMultiplayerGame {...args} />
);

export const Default: Story = {
	args: {},
};
Default.args = {};
