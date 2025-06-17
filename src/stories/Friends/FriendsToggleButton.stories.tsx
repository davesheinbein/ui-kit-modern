import React from 'react';
import { FriendsToggleButton } from '../../components/FriendsToggleButton';

export default {
	title: 'Friends/FriendsToggleButton',
	component: FriendsToggleButton,
};

const Template = (args) => (
	<FriendsToggleButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
	onClick: () => {},
};
