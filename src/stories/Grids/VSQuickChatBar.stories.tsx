import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VSQuickChatBar } from '../../components/VSQuickChatBar';

const meta: Meta<typeof VSQuickChatBar> = {
	title: 'Grids/VSQuickChatBar',
	component: VSQuickChatBar,
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
type Story = StoryObj<typeof VSQuickChatBar>;

const Template = (args) => <VSQuickChatBar {...args} />;

export const Default: Story = {
	args: {},
};
Default.args = {
	options: ['Hello', 'Good luck!'],
	onSend: () => {},
};
