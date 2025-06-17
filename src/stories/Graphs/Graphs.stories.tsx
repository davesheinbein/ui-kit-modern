import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Graphs, {
	GraphsProps,
} from '../../components/Graphs';

const meta: Meta<typeof Graphs> = {
	title: 'Graphs/Graph',
	component: Graphs,
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
type Story = StoryObj<typeof Graphs>;

const Template = (args: GraphsProps) => (
	<Graphs {...args} />
);

export const Bar: Story = {
	args: {},
};
Bar.args = {
	data: [
		{ match: 'A', score: 10 },
		{ match: 'B', score: 20 },
		{ match: 'C', score: 15 },
	],
	shape: 'bar',
	dataKey: 'score',
	labelKey: 'match',
	title: 'Bar Chart',
};

export const Pie: Story = {
	args: {},
};
Pie.args = {
	data: [
		{ match: 'A', score: 10 },
		{ match: 'B', score: 20 },
		{ match: 'C', score: 15 },
	],
	shape: 'pie',
	dataKey: 'score',
	labelKey: 'match',
	title: 'Pie Chart',
};
