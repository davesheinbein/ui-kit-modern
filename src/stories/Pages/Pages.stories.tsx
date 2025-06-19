import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedPage,
	PageFactory,
	P,
	PagePresets,
} from '../../components/Pages';
import type { UnifiedPageProps } from '../../components/Pages';

// Meta configuration for the DRY Page system
const meta: Meta<typeof UnifiedPage> = {
	title: 'Pages/Page (DRY System)',
	component: UnifiedPage,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `### Page (DRY System)

The new unified Page system provides a single component that can render any page type through configuration:

- **UnifiedPage**: Main component with kind prop
- **PageFactory**: Factory function for programmatic creation  
- **P**: Ultra-short alias for rapid development
- **PagePresets**: Pre-configured page patterns

### Usage Examples:

Using UnifiedPage with kind prop:
\`\`\`tsx
<UnifiedPage kind="startup" title="Welcome" />
<UnifiedPage kind="dashboard" layout="grid" />
<UnifiedPage kind="landing" />
\`\`\`

Using PageFactory:
\`\`\`tsx
{PageFactory({ kind: "settings", title: "Settings" })}
{PageFactory({ kind: "profile", layout: "sidebar" })}
\`\`\`

Using ultra-short alias:
\`\`\`tsx
{P({ kind: "game", title: "Game" })}
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
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedPage>;

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

// ===== FACTORY PATTERN EXAMPLES =====

export const FactoryPattern: Story = {
	name: '🏭 Factory Pattern Example',
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
				<h3>PageFactory Examples:</h3>
				<div
					style={{
						display: 'grid',
						gap: '1rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(300px, 1fr))',
					}}
				>
					{PageFactory({
						kind: 'startup',
						title: 'Factory Startup',
					})}
					{PageFactory({
						kind: 'dashboard',
						title: 'Factory Dashboard',
						layout: 'grid',
					})}
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates the PageFactory function for programmatic page creation.',
			},
		},
	},
};

export const UltraDRYAlias: Story = {
	name: '⚡ Ultra-DRY Alias (P)',
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3>Ultra-short "P" alias:</h3>
				<div
					style={{
						display: 'grid',
						gap: '1rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(300px, 1fr))',
					}}
				>
					{P({
						kind: 'landing',
						title: 'Ultra-DRY Landing',
					})}
					{P({
						kind: 'settings',
						title: 'Ultra-DRY Settings',
						layout: 'sidebar',
					})}
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'The ultra-short "P" alias for maximum development speed.',
			},
		},
	},
};

export const PresetPatterns: Story = {
	name: '🎯 Preset Patterns',
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3>PagePresets Examples:</h3>
				<div
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
				</div>
			</div>
		</div>
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
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<div>
				<h2>🎯 UnifiedPage with Kind Prop</h2>
				<p>Single component, different kinds:</p>
				<div
					style={{
						display: 'grid',
						gap: '1rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(300px, 1fr))',
					}}
				>
					<UnifiedPage
						kind='startup'
						title='DRY System Startup'
					/>
					<UnifiedPage
						kind='dashboard'
						title='DRY System Dashboard'
						layout='grid'
					/>
					<UnifiedPage
						kind='landing'
						title='DRY System Landing'
					/>
				</div>
			</div>

			<div>
				<h2>🏭 Factory Pattern</h2>
				<p>Programmatic page creation:</p>
				<div
					style={{
						display: 'grid',
						gap: '1rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(300px, 1fr))',
					}}
				>
					{PageFactory({
						kind: 'settings',
						title: 'Factory Settings',
					})}
					{PageFactory({
						kind: 'profile',
						title: 'Factory Profile',
						layout: 'centered',
					})}
				</div>
			</div>

			<div>
				<h2>⚡ Ultra-DRY Alias</h2>
				<p>Maximum convenience with "P":</p>
				<div
					style={{
						display: 'grid',
						gap: '1rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(300px, 1fr))',
					}}
				>
					{P({ kind: 'game', title: 'Ultra-DRY Game' })}
					{P({
						kind: 'browse',
						title: 'Ultra-DRY Browse',
						layout: 'grid',
					})}
				</div>
			</div>

			<div>
				<h2>🎯 Preset Patterns</h2>
				<p>
					Pre-configured page patterns for common use cases:
				</p>
				<div
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
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: `Complete showcase of the DRY Page system demonstrating all patterns:

1. **UnifiedPage**: Single component with kind prop
2. **PageFactory**: Factory function pattern  
3. **Ultra-DRY Aliases**: P for maximum convenience
4. **Preset Patterns**: Pre-configured common patterns

This system eliminates code duplication and provides a consistent API for all page variants.`,
			},
		},
	},
};
