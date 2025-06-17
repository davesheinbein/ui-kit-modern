import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSelector } from '../../components/ThemeSelector';

// ThemeSelectorProps is not exported, so redefine it here for story typing
type ThemeSelectorProps = {
	value: string;
	onChange: (theme: string) => void;
	themes: string[];
};

const meta: Meta<ThemeSelectorProps> = {
	title: 'Theme/ThemeSelector',
	component: ThemeSelector,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A theme selector component for switching between different visual themes.',
			},
		},
	},
	argTypes: {
		value: {
			control: 'text',
			description: 'Currently selected theme value',
		},
		onChange: {
			action: 'themeChanged',
			description:
				'Function called when theme selection changes',
		},
		themes: {
			control: false,
			description: 'Array of available theme options',
		},
	},
};

export default meta;
type Story = StoryObj<ThemeSelectorProps>;

export const Default: Story = {
	args: {
		themes: ['Light', 'Dark', 'Blue', 'Green'],
		value: 'Light',
		onChange: () => {},
	},
};

export const DarkSelected: Story = {
	args: {
		themes: ['Light', 'Dark', 'Blue', 'Green'],
		value: 'Dark',
		onChange: () => {},
	},
};
