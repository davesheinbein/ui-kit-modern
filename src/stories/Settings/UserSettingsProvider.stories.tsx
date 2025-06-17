import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UserSettingsProvider } from '../../components/UserSettingsProvider';

const meta: Meta<typeof UserSettingsProvider> = {
	title: 'Settings/UserSettingsProvider',
	component: UserSettingsProvider,
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
type Story = StoryObj<typeof UserSettingsProvider>;

const Template = (args) => (
	<UserSettingsProvider {...args}>
		User Settings Context
	</UserSettingsProvider>
);

export const Default: Story = {
	args: {},
};
