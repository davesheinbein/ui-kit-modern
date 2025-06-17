import React from 'react';
import { VSStatusBar } from '../../index';

export default {
	title: 'Banners/VSStatusBar',
	component: VSStatusBar,
};

const Template = (args: any) => <VSStatusBar {...args} />;

export const Default = Template.bind({});
Default.args = {
	player: {
		username: 'You',
		groupsSolved: 2,
		mistakes: 1,
		isYou: true,
	},
	opponent: {
		username: 'Opponent',
		groupsSolved: 1,
		mistakes: 2,
	},
	timer: '01:23',
	totalGroups: 4,
	showMistakes: true,
	showTimer: true,
};
