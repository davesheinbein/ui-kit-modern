import React from 'react';
import { UserSettingsProvider } from '../../components/UserSettingsProvider';

export default {
	title: 'Settings/UserSettingsProvider',
	component: UserSettingsProvider,
};

const Template = (args) => (
	<UserSettingsProvider {...args}>
		User Settings Context
	</UserSettingsProvider>
);

export const Default = Template.bind({});
