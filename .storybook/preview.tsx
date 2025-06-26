import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { reduxProviderDecorator } from '../src/stories/config/decorators';

const preview: Preview = {
	decorators: [reduxProviderDecorator],
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
