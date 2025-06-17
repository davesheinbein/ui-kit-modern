import React from 'react';
import { GoBackButton } from '../../components/GoBackButton';

export default {
	title: 'Buttons/GoBackButton',
	component: GoBackButton,
};

const Template = (args) => <GoBackButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	onClick: () => {},
	label: 'Back',
};
