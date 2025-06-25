import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Page, PagePresets } from '../../components/Pages';
import { Wrapper } from '../../components/Wrappers';
import type { PageProps } from '../../components/Pages';

// Meta configuration for the DRY Page system
const meta: Meta<typeof Page> = {
	title: 'Pages/Page',
	component: Page,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `### Page (DRY System)

The new  Page system provides a single component that can render any page type through configuration:

- **Page**: Main component with kind prop
- **Page**:  function for programmatic creation  
- **PagePresets**: Pre-configured page patterns

### Usage Examples:

Using Page with kind prop:
\`\`\`tsx
<Page kind="startup" title="Welcome" />
<Page kind="dashboard" layout="grid" />
<Page kind="landing" />
\`\`\`

Using Page:
\`\`\`tsx
{Page({ kind: "settings", title: "Settings" })}
{Page({ kind: "profile", layout: "sidebar" })}
\`\`\`


Using presets:
\`\`\`tsx
{PagePresets.Startup({ title: "Welcome" })}
{PagePresets.Dashboard({ title: "Dashboard" })}
\`\`\`

Available Page Kinds: startup, landing, dashboard, settings, profile, game, browse, results, about, help, custom`,
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'startup',
				'landing',
				'dashboard',
				'settings',
				'profile',
				'game',
				'browse',
				'results',
				'about',
				'help',
				'custom',
			],
			description: 'Page type/kind',
		},
		layout: {
			control: 'select',
			options: [
				'standard',
				'centered',
				'sidebar',
				'split',
				'grid',
				'custom',
			],
			description: 'Page layout type',
		},
		size: {
			control: 'select',
			options: [
				'compact',
				'medium',
				'large',
				'full',
				'custom',
			],
			description: 'Page size',
		},
		title: {
			control: 'text',
			description: 'Page title',
		},
		subtitle: {
			control: 'text',
			description: 'Page subtitle',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
		onStartDaily: {
			action: 'startDaily',
			description:
				'Function called when starting daily mode (startup pages)',
		},
		onStartCustom: {
			action: 'startCustom',
			description:
				'Function called when starting custom mode (startup pages)',
		},
		onBrowseCustom: {
			action: 'browseCustom',
			description:
				'Function called when browsing custom puzzles (startup pages)',
		},
		onShare: {
			action: 'share',
			description:
				'Function called when sharing (startup pages)',
		},
		configuration: {
			control: 'object',
			description: 'Page configuration object',
		},
		style: {
			control: 'object',
			description: 'Custom style object',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Page>;

// ===== BASIC PAGE VARIANTS =====

export const Startup: Story = {
	name: '🚀 Startup Page',
	args: {
		kind: 'startup',
		title: 'Welcome to UI Kit',
		subtitle:
			'Build beautiful interfaces with our DRY system',
	},
};

export const Landing: Story = {
	name: '🎯 Landing Page',
	args: {
		kind: 'landing',
		title: 'Modern UI Kit',
		subtitle: 'Reusable components for React',
	},
};

export const Dashboard: Story = {
	name: '📊 Dashboard Page',
	args: {
		kind: 'dashboard',
		layout: 'grid',
		title: 'Dashboard',
	},
};

export const Settings: Story = {
	name: '⚙️ Settings Page',
	args: {
		kind: 'settings',
		layout: 'sidebar',
		title: 'Settings',
	},
};

export const Profile: Story = {
	name: '👤 Profile Page',
	args: {
		kind: 'profile',
		layout: 'centered',
		title: 'User Profile',
	},
};

export const Game: Story = {
	name: '🎮 Game Page',
	args: {
		kind: 'game',
		title: 'Game Arena',
	},
};

export const Browse: Story = {
	name: '📂 Browse Page',
	args: {
		kind: 'browse',
		layout: 'grid',
		title: 'Browse Content',
	},
};

// ===== LAYOUT VARIANTS =====

export const CenteredLayout: Story = {
	name: '🎯 Centered Layout',
	args: {
		kind: 'custom',
		layout: 'centered',
		title: 'Centered Page',
		subtitle:
			'Content is centered both horizontally and vertically',
	},
};

export const SidebarLayout: Story = {
	name: '📑 Sidebar Layout',
	args: {
		kind: 'custom',
		layout: 'sidebar',
		title: 'Sidebar Page',
		subtitle: 'Page with sidebar navigation',
	},
};

export const GridLayout: Story = {
	name: '📐 Grid Layout',
	args: {
		kind: 'custom',
		layout: 'grid',
		title: 'Grid Page',
		subtitle: 'Content organized in a grid layout',
	},
};

export const SplitLayout: Story = {
	name: '⚡ Split Layout',
	args: {
		kind: 'custom',
		layout: 'split',
		title: 'Split Page',
		subtitle: 'Page divided into sections',
	},
};

// ===== SIZE VARIANTS =====

export const CompactSize: Story = {
	name: '📦 Compact Size',
	args: {
		kind: 'custom',
		size: 'compact',
		title: 'Compact Page',
		subtitle: 'Minimal spacing and compact layout',
	},
};

export const LargeSize: Story = {
	name: '🔍 Large Size',
	args: {
		kind: 'custom',
		size: 'large',
		title: 'Large Page',
		subtitle: 'Spacious layout with generous spacing',
	},
};

export const FullSize: Story = {
	name: '🖥️ Full Size',
	args: {
		kind: 'custom',
		size: 'full',
		title: 'Full Page',
		subtitle: 'Takes up the entire viewport',
	},
};

// =====  PATTERN EXAMPLES =====

export const Pattern: Story = {
	name: '🏭  Pattern Example',
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<Wrapper>
				<h3>Page Examples:</h3>
				<Wrapper
					style={{
						display: 'grid',
						gap: '1rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(300px, 1fr))',
					}}
				>
					{Page({
						kind: 'startup',
						title: ' Startup',
					})}
					{Page({
						kind: 'dashboard',
						title: ' Dashboard',
						layout: 'grid',
					})}
				</Wrapper>
			</Wrapper>
		</Wrapper>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates the Page function for programmatic page creation.',
			},
		},
	},
};

export const PresetPatterns: Story = {
	name: '🎯 Preset Patterns',
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				padding: '1rem',
			}}
		>
			<Wrapper>
				<h3>PagePresets Examples:</h3>
				<Wrapper
					style={{
						display: 'grid',
						gap: '1rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(300px, 1fr))',
					}}
				>
					{PagePresets.Startup({ title: 'Preset Startup' })}
					{PagePresets.Dashboard({
						title: 'Preset Dashboard',
					})}
				</Wrapper>
			</Wrapper>
		</Wrapper>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Pre-configured page patterns for common use cases.',
			},
		},
	},
};

// ===== COMPREHENSIVE SHOWCASE =====

export const AllVariantsShowcase: Story = {
	name: '🎯 Complete DRY System Showcase',
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<Wrapper>
				<h2>🎯 Page with Kind Prop</h2>
				<p>Single component, different kinds:</p>
				<Wrapper
					style={{
						display: 'grid',
						gap: '1rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(300px, 1fr))',
					}}
				>
					<Page kind='startup' title='DRY System Startup' />
					<Page
						kind='dashboard'
						title='DRY System Dashboard'
						layout='grid'
					/>
					<Page kind='landing' title='DRY System Landing' />
				</Wrapper>
			</Wrapper>

			<Wrapper>
				<h2>🏭 Pattern</h2>
				<p>Programmatic page creation:</p>
				<Wrapper
					style={{
						display: 'grid',
						gap: '1rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(300px, 1fr))',
					}}
				>
					{Page({
						kind: 'settings',
						title: ' Settings',
					})}
					{Page({
						kind: 'profile',
						title: ' Profile',
						layout: 'centered',
					})}
				</Wrapper>
			</Wrapper>

			<Wrapper>
				<h2>🎯 Preset Patterns</h2>
				<p>
					Pre-configured page patterns for common use cases:
				</p>
				<Wrapper
					style={{
						display: 'grid',
						gap: '1rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(300px, 1fr))',
					}}
				>
					{PagePresets.Startup({ title: 'Preset Startup' })}
					{PagePresets.Dashboard({
						title: 'Preset Dashboard',
					})}
				</Wrapper>
			</Wrapper>
		</Wrapper>
	),
	parameters: {
		docs: {
			description: {
				story: `Complete showcase of the DRY Page system demonstrating all patterns:

1. **Page**: Single component with kind prop
2. **Page**:  function pattern  
4. **Preset Patterns**: Pre-configured common patterns

This system eliminates code duplication and provides a consistent API for all page variants.`,
			},
		},
	},
};

// ===== DETAILED STARTUP PAGE VARIANTS =====

export const StartupWithCallbacks: Story = {
	name: '🚀 Startup with Callbacks',
	args: {
		kind: 'startup',
		title: 'Game Title',
		onStartDaily: () => {},
		onStartCustom: () => {},
		onBrowseCustom: () => {},
		onShare: () => {},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Startup page with all callback functions for game mode navigation.',
			},
		},
	},
};

export const StartupWithCustomTitle: Story = {
	name: '🚀 Startup with Custom Title',
	args: {
		kind: 'startup',
		title: 'My Custom Game',
		subtitle: 'Choose your adventure and start playing',
		onStartDaily: () => {},
		onStartCustom: () => {},
		onBrowseCustom: () => {},
		onShare: () => {},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Startup page with custom title and subtitle text.',
			},
		},
	},
};

export const StartupWithoutShare: Story = {
	name: '🚀 Startup without Share',
	args: {
		kind: 'startup',
		title: 'Puzzle Challenge',
		subtitle: 'Test your skills with our daily puzzles',
		onStartDaily: () => {},
		onStartCustom: () => {},
		onBrowseCustom: () => {},
		// onShare not provided
	},
	parameters: {
		docs: {
			description: {
				story: 'Startup page without share functionality.',
			},
		},
	},
};

export const StartupMinimal: Story = {
	name: '🚀 Startup Minimal',
	args: {
		kind: 'startup',
		title: 'Quick Start',
		onStartDaily: () => {},
		onStartCustom: () => {},
		onBrowseCustom: () => {},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Minimal startup page with just essential navigation.',
			},
		},
	},
};

export const StartupCustomStyling: Story = {
	name: '🚀 Startup Custom Styling',
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
	parameters: {
		docs: {
			description: {
				story:
					'Startup page with custom gradient background and styling.',
			},
		},
	},
};

export const StartupDRYExample: Story = {
	name: '🚀 Startup  Pattern',
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<Wrapper>
				<h3>Page Startup:</h3>
				{Page({
					kind: 'startup',
					title: ' Startup Page',
					subtitle: 'Created with Page',
					onStartDaily: () => console.log('Daily mode'),
					onStartCustom: () => console.log('Custom mode'),
					onBrowseCustom: () => console.log('Browse'),
					onShare: () => console.log('Share'),
				})}
			</Wrapper>
		</Wrapper>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Startup page created using the Page pattern with callbacks.',
			},
		},
	},
};

export const StartupPresetExample: Story = {
	name: '🚀 Startup Preset Pattern',
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<Wrapper>
				<h3>PagePresets.Startup:</h3>
				{PagePresets.Startup({
					title: 'Preset Startup Page',
					subtitle: 'Pre-configured startup pattern',
					onStartDaily: () => console.log('Daily mode'),
					onStartCustom: () => console.log('Custom mode'),
					onBrowseCustom: () => console.log('Browse'),
					onShare: () => console.log('Share'),
				})}
			</Wrapper>
		</Wrapper>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Startup page using the preset pattern for common startup configurations.',
			},
		},
	},
};
