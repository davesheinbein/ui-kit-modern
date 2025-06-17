import React from 'react';
import { VSStatusBar } from '../../components/VSStatusBar';

export default {
	title: 'Grids/VSStatusBar',
	component: VSStatusBar,
};

const Template = (args) => <VSStatusBar {...args} />;

export const Default = Template.bind({});
Default.args = {
	player: { name: 'Player' },
	opponent: { name: 'Opponent' },
	timer: 60,
	totalGroups: 4,
};
