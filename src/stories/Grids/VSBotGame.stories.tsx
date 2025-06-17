import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VSBotGame } from '../../index';

const meta: Meta<typeof VSBotGame> = {
	title: 'Grids/VSBotGame',
	component: VSBotGame,
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
type Story = StoryObj<typeof VSBotGame>;

const Template = (args: any) => <VSBotGame {...args} />;

export const Default: Story = {
	args: {},
};
Default.args = {
	botDifficulty: 'medium',
	userId: 'user1',
	matchId: 'match1',
	roomCode: 'room1',
};
