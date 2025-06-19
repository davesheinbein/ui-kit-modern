import type { Meta, StoryObj } from '@storybook/react';
import { PageFactory } from '../../components/Pages';

const meta: Meta<typeof PageFactory> = {
	title: 'Pages/StartupPage (DRY System)',
	component: PageFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A startup page component built using the unified Pages system. Provides navigation options for different game modes with a centered, full-height layout.',
			},
		},
	},
	argTypes: {
		title: {
			control: 'text',
			description:
				'The main title displayed on the startup page',
		},
		subtitle: {
			control: 'text',
			description: 'Optional subtitle text',
		},
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		kind: 'startup',
		title: 'Game Title',
		onStartDaily: () => {},
		onStartCustom: () => {},
		onBrowseCustom: () => {},
		onShare: () => {},
	},
};

export const WithCustomTitle: Story = {
	args: {
		kind: 'startup',
		title: 'My Custom Game',
		subtitle: 'Choose your adventure and start playing',
		onStartDaily: () => {},
		onStartCustom: () => {},
		onBrowseCustom: () => {},
		onShare: () => {},
	},
};

export const WithoutShare: Story = {
	args: {
		kind: 'startup',
		title: 'Puzzle Challenge',
		subtitle: 'Test your skills with our daily puzzles',
		onStartDaily: () => {},
		onStartCustom: () => {},
		onBrowseCustom: () => {},
		// onShare not provided
	},
};

export const MinimalVersion: Story = {
	args: {
		kind: 'startup',
		title: 'Quick Start',
		onStartDaily: () => {},
		onStartCustom: () => {},
		onBrowseCustom: () => {},
	},
};

export const CustomStyling: Story = {
	args: {
		kind: 'startup',
		title: 'Premium Game Experience',
		subtitle: 'Enhanced with premium features',
		onStartDaily: () => {},
		onStartCustom: () => {},
		onBrowseCustom: () => {},
		onShare: () => {},
		configuration: {
			background:
				'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		},
		style: {
			color: '#fff',
		},
	},
};
