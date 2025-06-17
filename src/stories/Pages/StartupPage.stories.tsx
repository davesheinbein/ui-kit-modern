import React from 'react';
import { StartupPage } from '../../components/StartupPage';

export default {
	title: 'Pages/StartupPage',
	component: StartupPage,
};

const Template = (args) => <StartupPage {...args} />;

export const Default = Template.bind({});
Default.args = {
	onStartDaily: () => {},
	onStartCustom: () => {},
	onBrowseCustom: () => {},
};
