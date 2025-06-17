import React from 'react';
import { PregameGridLockout } from '../../index';

export default {
	title: 'Grids/PregameGridLockout',
	component: PregameGridLockout,
};

const Template = (args: any) => (
	<PregameGridLockout {...args} />
);

export const Default = Template.bind({});
Default.args = {
	gridWords: Array(16).fill(''),
	gridCols: 4,
	gridRows: 4,
};
