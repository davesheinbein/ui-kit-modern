import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedPage,
	PageFactory,
	P,
	PagePresets,
} from '../../components/Pages';
import type { UnifiedPageProps } from '../../components/Pages';

const meta: Meta<typeof UnifiedPage> = {
	title: 'Pages/StartupPage (DRY System)',
	component: UnifiedPage,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `### StartupPage (DRY System)

A startup page component built using the unified Pages system. Provides navigation options for different game modes with a centered, full-height layout.

Uses the DRY Page system with \`kind="startup"\` to render a startup page layout with consistent styling and behavior.`,
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: ['startup'],
			description: 'Page kind - startup for this component',
		},
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
type Story = StoryObj<typeof UnifiedPage>;

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

export const DRYFactoryExample: Story = {
	name: '🏭 Factory Pattern',
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3>PageFactory Startup:</h3>
				{PageFactory({
					kind: 'startup',
					title: 'Factory Startup Page',
					subtitle: 'Created with PageFactory',
					onStartDaily: () => console.log('Daily mode'),
					onStartCustom: () => console.log('Custom mode'),
					onBrowseCustom: () => console.log('Browse'),
					onShare: () => console.log('Share'),
				})}
			</div>
		</div>
	),
};

export const UltraDRYExample: Story = {
	name: '⚡ Ultra-DRY (P)',
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3>Ultra-short "P" alias:</h3>
				{P({
					kind: 'startup',
					title: 'P Startup Page',
					subtitle: 'Ultra-DRY with P alias',
					onStartDaily: () => console.log('Daily mode'),
					onStartCustom: () => console.log('Custom mode'),
					onBrowseCustom: () => console.log('Browse'),
				})}
			</div>
		</div>
	),
};

export const PresetExample: Story = {
	name: '🎯 Preset Pattern',
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3>PagePresets.Startup:</h3>
				{PagePresets.Startup({
					title: 'Preset Startup Page',
					subtitle: 'Pre-configured startup pattern',
					onStartDaily: () => console.log('Daily mode'),
					onStartCustom: () => console.log('Custom mode'),
					onBrowseCustom: () => console.log('Browse'),
					onShare: () => console.log('Share'),
				})}
			</div>
		</div>
	),
};
