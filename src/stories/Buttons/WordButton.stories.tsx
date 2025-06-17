import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WordButton } from '../../components/WordButton';
import type { WordButtonProps } from '../../components/WordButton/WordButton';

const meta: Meta<typeof WordButton> = {
	title: 'Buttons/WordButton',
	component: WordButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A specialized button for word-based games with selection, lock, and burn states.',
			},
		},
	},
	argTypes: {
		word: {
			control: 'text',
			description: 'The word to display on the button',
		},
		isSelected: {
			control: 'boolean',
			description: 'Whether the word is currently selected',
		},
		isLocked: {
			control: 'boolean',
			description:
				'Whether the word button is locked/disabled',
		},
		burnSuspect: {
			control: 'boolean',
			description:
				'Whether the word is suspected to be incorrect',
		},
		isBurned: {
			control: 'boolean',
			description:
				'Whether the word has been marked as incorrect',
		},
		onClick: {
			action: 'clicked',
			description: 'Function called when word is clicked',
		},
		onKeyDown: {
			action: 'keyDown',
			description: 'Function called when key is pressed',
		},
	},
};

export default meta;
type Story = StoryObj<typeof WordButton>;

export const Default: Story = {
	args: {
		word: 'Example',
		isSelected: false,
		isLocked: false,
	},
};

export const Selected: Story = {
	args: {
		word: 'Selected',
		isSelected: true,
		isLocked: false,
	},
};

export const Locked: Story = {
	args: {
		word: 'Locked',
		isSelected: false,
		isLocked: true,
	},
};

export const BurnSuspect: Story = {
	args: {
		word: 'Suspect',
		isSelected: false,
		isLocked: false,
		burnSuspect: true,
	},
};

export const Burned: Story = {
	args: {
		word: 'Burned',
		isSelected: false,
		isLocked: false,
		isBurned: true,
	},
};
