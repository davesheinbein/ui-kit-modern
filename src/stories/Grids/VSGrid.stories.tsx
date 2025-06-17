import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VSGrid } from '../../components/VSGrid';
import type { VSGridProps } from '../../components/VSGrid/VSGrid';

const meta: Meta<typeof VSGrid> = {
	title: 'Grids/VSGrid',
	component: VSGrid,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A versus mode grid component for multiplayer word puzzle games.',
			},
		},
	},
	argTypes: {
		words: {
			control: false,
			description: 'Array of words to display in the grid',
		},
		selected: {
			control: false,
			description: 'Array of currently selected words',
		},
		locked: {
			control: false,
			description: 'Array of locked words',
		},
		wildcards: {
			control: false,
			description: 'Array of wildcard words',
		},
		onSelect: {
			action: 'wordSelected',
			description:
				'Function called when a word is selected',
		},
		opponentSelected: {
			control: false,
			description: 'Array of words selected by opponent',
		},
		playerColor: {
			control: 'color',
			description: 'Color for player selections',
		},
		opponentColor: {
			control: 'color',
			description: 'Color for opponent selections',
		},
		playerId: {
			control: 'text',
			description: 'ID of the current player',
		},
		opponentId: {
			control: 'text',
			description: 'ID of the opponent',
		},
		preview: {
			control: 'boolean',
			description: 'Whether in preview mode',
		},
	},
};

export default meta;
type Story = StoryObj<typeof VSGrid>;

export const Default: Story = {
	args: {
		words: ['APPLE', 'ORANGE', 'BANANA', 'GRAPE'],
		selected: ['APPLE'],
		locked: ['ORANGE'],
		wildcards: ['BANANA'],
		onSelect: () => {},
		opponentSelected: ['GRAPE'],
		playerColor: '#2563eb',
		opponentColor: '#ef4444',
		solvedBy: { user1: ['APPLE'], user2: ['GRAPE'] },
		playerId: 'user1',
		opponentId: 'user2',
		gridSize: { rows: 2, cols: 2 },
		preview: false,
	},
};

export const Preview: Story = {
	args: {
		words: ['WORD1', 'WORD2', 'WORD3', 'WORD4'],
		selected: [],
		locked: [],
		wildcards: [],
		onSelect: () => {},
		opponentSelected: [],
		playerColor: '#2563eb',
		opponentColor: '#ef4444',
		solvedBy: {},
		playerId: 'user1',
		opponentId: 'user2',
		gridSize: { rows: 2, cols: 2 },
		preview: true,
	},
};
