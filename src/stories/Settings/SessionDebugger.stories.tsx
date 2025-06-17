import React from 'react';
import { SessionDebugger } from '../../components/SessionDebugger';

export default {
	title: 'Settings/SessionDebugger',
	component: SessionDebugger,
};

const Template = (args) => <SessionDebugger {...args} />;

export const Default = Template.bind({});
Default.args = {
	enabled: true,
};
