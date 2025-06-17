import React from 'react';
import { ThemeSelector } from '../../components/ThemeSelector';

export default {
	title: 'Theme/ThemeSelector',
	component: ThemeSelector,
};

const Template = (args) => <ThemeSelector {...args} />;

export const Default = Template.bind({});
