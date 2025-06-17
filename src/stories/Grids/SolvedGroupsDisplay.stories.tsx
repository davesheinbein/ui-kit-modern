import React from 'react';
import { SolvedGroupsDisplay } from '../../components/Grids/SolvedGroupsDisplay';

export default {
	title: 'Grids/SolvedGroupsDisplay',
	component: SolvedGroupsDisplay,
};

const Template = (args: any) => (
	<SolvedGroupsDisplay {...args} />
);

export const Default = Template.bind({});
Default.args = {
	pendingSolvedGroups: [
		{ groupIdx: 0, words: ['Alpha', 'Beta', 'Gamma'] },
		{ groupIdx: 1, words: ['Delta', 'Epsilon', 'Zeta'] },
	],
	activePuzzle: { groupLabels: ['Greek 1', 'Greek 2'] },
};
