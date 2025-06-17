import React from 'react';
import { ThemePaletteProvider } from '../../components/ThemePaletteProvider';

export default {
	title: 'Theme/ThemePaletteProvider',
	component: ThemePaletteProvider,
};

const Template = (args) => (
	<ThemePaletteProvider {...args}>
		Theme Context
	</ThemePaletteProvider>
);

export const Default = Template.bind({});
