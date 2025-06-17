import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FriendsToggleButton } from '../../components/FriendsToggleButton';

const meta: Meta<typeof FriendsToggleButton> = {
	title: 'Friends/FriendsToggleButton',
	component: FriendsToggleButton,
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
type Story = StoryObj<typeof FriendsToggleButton>;

const Template = (args) => (
	<FriendsToggleButton {...args} />
);

export const Default: Story = {
	args: {},
};
Default.args = {
	onClick: () => {},
};
