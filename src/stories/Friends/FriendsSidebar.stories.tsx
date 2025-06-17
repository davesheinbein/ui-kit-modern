import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FriendsSidebar } from '../../components/FriendsSidebar';

const meta: Meta<typeof FriendsSidebar> = {
	title: 'Friends/FriendsSidebar',
	component: FriendsSidebar,
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
type Story = StoryObj<typeof FriendsSidebar>;

const Template = (args) => <FriendsSidebar {...args} />;

export const Default: Story = {
	args: {},
};
Default.args = {
	open: true,
	onClose: () => {},
};
