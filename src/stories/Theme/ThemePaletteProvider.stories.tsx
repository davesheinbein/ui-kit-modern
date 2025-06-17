import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemePaletteProvider } from '../../components/ThemePaletteProvider';

const meta: Meta<typeof ThemePaletteProvider> = {
	title: 'Theme/ThemePaletteProvider',
	component: ThemePaletteProvider,
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
type Story = StoryObj<typeof ThemePaletteProvider>;

const Template = (args) => (
	<ThemePaletteProvider {...args}>
		Theme Context
	</ThemePaletteProvider>
);

export const Default: Story = {
	args: {},
};
