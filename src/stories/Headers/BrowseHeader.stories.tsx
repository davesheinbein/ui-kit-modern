import React from 'react';
import {
	BrowseHeader,
	BrowseHeaderProps,
} from '../../components/BrowseHeader';

export default {
	title: 'Headers/BrowseHeader',
	component: BrowseHeader,
};

const Template = (args: BrowseHeaderProps) => (
	<BrowseHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
	title: 'Browse Puzzles',
	tabs: [
		{ label: 'All', value: 'all' },
		{ label: 'Favorites', value: 'favorites' },
	],
	currentTab: 'all',
	setTab: () => {},
	onBack: () => {},
};
