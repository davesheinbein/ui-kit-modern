import React from 'react';
import { GlobalToast } from '../../components/GlobalToast';

export default {
	title: 'Banners/GlobalToast',
	component: GlobalToast,
};

const Template = (args) => <GlobalToast {...args} />;

export const Default = Template.bind({});
