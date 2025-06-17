import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SolvedGroupsDisplay } from '../../components/SolvedGroupsDisplay';

const meta: Meta<typeof SolvedGroupsDisplay> = {
	title: 'Grids/SolvedGroupsDisplay',
	component: SolvedGroupsDisplay,
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
type Story = StoryObj<typeof SolvedGroupsDisplay>;

const Template = (args: any) => (
	<SolvedGroupsDisplay {...args} />
);

export const Default: Story = {
	args: {},
};
Default.args = {
	pendingSolvedGroups: [
		{ groupIdx: 0, words: ['Alpha', 'Beta', 'Gamma'] },
		{ groupIdx: 1, words: ['Delta', 'Epsilon', 'Zeta'] },
	],
	activePuzzle: { groupLabels: ['Greek 1', 'Greek 2'] },
};
