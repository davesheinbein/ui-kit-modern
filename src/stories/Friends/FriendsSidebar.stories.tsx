import React from 'react';
import { FriendsSidebar } from '../../components/FriendsSidebar';

export default {
	title: 'Friends/FriendsSidebar',
	component: FriendsSidebar,
};

const Template = (args) => <FriendsSidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
	open: true,
	onClose: () => {},
};
