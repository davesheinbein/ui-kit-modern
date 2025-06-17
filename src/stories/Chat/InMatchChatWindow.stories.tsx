import React from 'react';
import { InMatchChatWindow } from '../../components/InMatchChatWindow';

export default {
	title: 'Chat/InMatchChatWindow',
	component: InMatchChatWindow,
};

const Template = (args) => <InMatchChatWindow {...args} />;

export const Default = Template.bind({});
