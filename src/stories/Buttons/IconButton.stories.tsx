import React from 'react';
import { IconButton } from '../../components/IconButton';

export default {
	title: 'Buttons/IconButton',
	component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	icon: <span>🔔</span>,
	label: 'Notify',
};
