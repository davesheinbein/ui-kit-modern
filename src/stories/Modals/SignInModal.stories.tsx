import React from 'react';
import { SignInModal } from '../../components/SignInModal';

export default {
	title: 'Modals/SignInModal',
	component: SignInModal,
};

const Template = (args) => <SignInModal {...args} />;

export const Default = Template.bind({});
Default.args = {
	open: true,
	onClose: () => {},
	onSignIn: () => {},
};
