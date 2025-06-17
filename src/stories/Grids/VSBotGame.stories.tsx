import React from 'react';
import { VSBotGame } from '../../index';

export default {
	title: 'Grids/VSBotGame',
	component: VSBotGame,
};

const Template = (args: any) => <VSBotGame {...args} />;

export const Default = Template.bind({});
Default.args = {
	botDifficulty: 'medium',
	userId: 'user1',
	matchId: 'match1',
	roomCode: 'room1',
};
