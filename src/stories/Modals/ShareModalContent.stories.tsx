import React from 'react';
import { ShareModalContent } from '../../components/ShareModalContent';

export default {
	title: 'Modals/ShareModalContent',
	component: ShareModalContent,
};

const Template = (args) => (
	<ShareModalContent {...args}>
		Share something!
	</ShareModalContent>
);

export const Default = Template.bind({});
