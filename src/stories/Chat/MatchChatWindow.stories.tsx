import React from 'react';
import { MatchChatWindow } from '../../components/MatchChatWindow';

export default {
	title: 'Chat/MatchChatWindow',
	component: MatchChatWindow,
};

const Template = (args) => <MatchChatWindow {...args} />;

export const Default = Template.bind({});
