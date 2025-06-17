import React from 'react';
import { SettingsPanel } from '../../components/SettingsPanel';

export default {
	title: 'Settings/SettingsPanel',
	component: SettingsPanel,
};

const Template = (args) => <SettingsPanel {...args} />;

export const Default = Template.bind({});
