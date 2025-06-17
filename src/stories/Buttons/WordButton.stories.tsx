import React from 'react';
import { WordButton } from '../../components/WordButton';

export default {
	title: 'Buttons/WordButton',
	component: WordButton,
};

const Template = (args) => <WordButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	word: 'Example',
	isSelected: false,
	isLocked: false,
};
