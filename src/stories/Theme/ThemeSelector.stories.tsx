import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSelector } from '../../components/ThemeSelector';

interface ThemeSelectorProps {
	value?: string;
	onChange?: (theme: string) => void;
	themes?: string[];
	className?: string;
}

const meta: Meta<ThemeSelectorProps> = {
	title: 'Theme/ThemeSelector',
	component: ThemeSelector,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A theme selector component for switching between different visual themes. Can render as a simple select dropdown or as visual theme swatches.',
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
			description:
				'Array of theme names for simple dropdown mode',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
	},
};

export default meta;
type Story = StoryObj<ThemeSelectorProps>;

export const Default: Story = {
	args: {
		value: 'light',
		onChange: () => {},
	},
};

export const SimpleDropdown: Story = {
	args: {
		themes: ['light', 'dark', 'oceanic', 'sunset'],
		value: 'light',
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
