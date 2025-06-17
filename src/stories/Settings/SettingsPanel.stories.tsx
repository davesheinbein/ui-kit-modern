import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SettingsPanel } from '../../components/SettingsPanel';

const meta: Meta<typeof SettingsPanel> = {
	title: 'Settings/SettingsPanel',
	component: SettingsPanel,
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
type Story = StoryObj<typeof SettingsPanel>;

const Template = (args) => <SettingsPanel {...args} />;

export const Default: Story = {
	args: {},
};
