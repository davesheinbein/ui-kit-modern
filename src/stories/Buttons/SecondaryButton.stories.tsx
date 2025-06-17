import React from 'react';
import { SecondaryButton } from '../../components/SecondaryButton';

export default {
	title: 'Buttons/SecondaryButton',
	component: SecondaryButton,
};

const Template = (args) => (
	<SecondaryButton {...args}>Secondary</SecondaryButton>
);

export const Default = Template.bind({});
