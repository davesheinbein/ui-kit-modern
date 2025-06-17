import React from 'react';
import { ToastBanner } from '../../components/ToastBanner';

export default {
	title: 'Banners/ToastBanner',
	component: ToastBanner,
};

const Template = (args) => <ToastBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'info',
	message: 'This is a toast!',
};
