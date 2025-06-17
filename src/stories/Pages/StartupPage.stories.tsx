import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StartupPage } from '../../components/StartupPage';
import type { StartupPageProps } from '../../components/StartupPage/StartupPage';

const meta: Meta<typeof StartupPage> = {
	title: 'Pages/StartupPage',
	component: StartupPage,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'The main startup page component with navigation options for different game modes.',
			},
		},
	},
	argTypes: {
		onStartDaily: {
			action: 'startDaily',
			description:
				'Function called when starting daily mode',
		},
		onStartCustom: {
			action: 'startCustom',
			description:
				'Function called when starting custom mode',
		},
		onBrowseCustom: {
			action: 'browseCustom',
			description:
				'Function called when browsing custom puzzles',
		},
		onShare: {
			action: 'share',
			description: 'Function called when sharing',
		},
	},
};

export default meta;
type Story = StoryObj<typeof StartupPage>;

export const Default: Story = {
	args: {
		onStartDaily: () => {},
		onStartCustom: () => {},
		onBrowseCustom: () => {},
		onShare: () => {},
	},
};
