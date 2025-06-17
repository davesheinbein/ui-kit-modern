import React from 'react';
import { Modal } from '../../components/Modal';

export default {
	title: 'Modals/Modal',
	component: Modal,
};

const Template = (args) => (
	<Modal {...args}>Modal Content</Modal>
);

export const Default = Template.bind({});
Default.args = {
	open: true,
	onClose: () => {},
};
