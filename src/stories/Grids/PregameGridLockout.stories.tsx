import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PregameGridLockout } from '../../components/PregameGridLockout';
import type { PregameGridLockoutProps } from '../../components/PregameGridLockout/PregameGridLockout';

const meta: Meta<typeof PregameGridLockout> = {
	title: 'Grids/PregameGridLockout',
	component: PregameGridLockout,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A locked grid displayed before the game starts, showing a blurred preview of the puzzle.',
			},
		},
	},
	argTypes: {
		gridWords: {
			control: false,
			description: 'Array of words to display in the grid',
		},
		gridCols: {
			control: 'number',
			description: 'Number of columns in the grid',
		},
		gridRows: {
			control: 'number',
			description: 'Number of rows in the grid',
		},
	},
};

export default meta;
type Story = StoryObj<typeof PregameGridLockout>;

export const Default: Story = {
	args: {
		gridWords: Array(16)
			.fill('WORD')
			.map((word, i) => `${word}${i + 1}`),
		gridCols: 4,
		gridRows: 4,
	},
};

export const TwoByTwo: Story = {
	args: {
		gridWords: ['WORD1', 'WORD2', 'WORD3', 'WORD4'],
		gridCols: 2,
		gridRows: 2,
	},
};

export const ThreeByThree: Story = {
	args: {
		gridWords: Array(9)
			.fill('WORD')
			.map((word, i) => `${word}${i + 1}`),
		gridCols: 3,
		gridRows: 3,
	},
};
