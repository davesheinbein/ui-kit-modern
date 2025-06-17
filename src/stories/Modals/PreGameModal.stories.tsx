import React from 'react';
import { PreGameModal } from '../../components/PreGameModal';

export default {
	title: 'Modals/PreGameModal',
	component: PreGameModal,
};

const Template = (args) => <PreGameModal {...args} />;

export const Default = Template.bind({});
Default.args = {
	open: true,
	onReady: () => {},
	onGoHome: () => {},
};
