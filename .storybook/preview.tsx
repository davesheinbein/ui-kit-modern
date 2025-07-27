import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { reduxProviderDecorator } from '../src/stories/config/decorators';

// Replace with your actual ThemeProvider import if available
const ThemeProvider = ({ children }) => (
	<div data-theme='light'>{children}</div>
);

const preview: Preview = {
	decorators: [
		reduxProviderDecorator,
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
