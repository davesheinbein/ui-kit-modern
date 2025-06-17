import React from 'react';
import { VSGrid } from '../../index';

export default {
	title: 'Grids/VSGrid',
	component: VSGrid,
};

const Template = (args: any) => <VSGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
	words: ['A', 'B', 'C', 'D'],
	selected: ['A'],
	locked: ['B'],
	wildcards: ['C'],
	onSelect: () => {},
	opponentSelected: ['D'],
	playerColor: '#2563eb',
	opponentColor: '#ef4444',
	solvedBy: { user1: ['A'], user2: ['D'] },
	playerId: 'user1',
	opponentId: 'user2',
	gridSize: { rows: 2, cols: 2 },
	preview: false,
};
