import React from 'react';
import { PrimaryButton } from '../../components/PrimaryButton';

export default {
	title: 'Buttons/PrimaryButton',
	component: PrimaryButton,
};

const Template = (args) => (
	<PrimaryButton {...args}>Primary</PrimaryButton>
);

export const Default = Template.bind({});
