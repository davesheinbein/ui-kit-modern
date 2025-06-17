import React from 'react';
import { VSMultiplayerGame } from '../../index';

export default {
	title: 'Grids/VSMultiplayerGame',
	component: VSMultiplayerGame,
};

const Template = (args: any) => (
	<VSMultiplayerGame {...args} />
);

export const Default = Template.bind({});
Default.args = {};
