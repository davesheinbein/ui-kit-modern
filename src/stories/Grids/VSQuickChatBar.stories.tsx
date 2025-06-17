import React from 'react';
import { VSQuickChatBar } from '../../components/VSQuickChatBar';

export default {
	title: 'Grids/VSQuickChatBar',
	component: VSQuickChatBar,
};

const Template = (args) => <VSQuickChatBar {...args} />;

export const Default = Template.bind({});
Default.args = {
	options: ['Hello', 'Good luck!'],
	onSend: () => {},
};
