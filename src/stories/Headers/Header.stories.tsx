import React from 'react';
import {
	Header,
	HeaderKind,
	HeaderFactory,
	HeaderPresets,
	H,
} from '../../components/Header';
import { Wrapper } from '../../components/Wrappers';
import type { Meta, StoryObj } from '@storybook/react';

// Meta configuration for the DRY Header system
const meta: Meta<typeof Header> = {
	title: 'Headers/Header',
	component: Header,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
**DRY Header System** - A configuration-driven header component that can create any type of header.

This system replaces all individual header components with a single, flexible component that uses configuration objects to define behavior and styling.

### Usage Examples:
- **Simple**: \`<Header kind="simple" title="My Page" />\`
- **Browse**: \`<Header kind="browse-tabbed" title="Browse" tabs={tabs} />\`
- **Modal**: \`<Header kind="modal" title="Settings" onClose={closeModal} />\`
- **Factory**: \`HeaderFactory.modal("Settings", closeModal)\`
- **Ultra-short**: \`H.browse("Browse", goBack)\`

### Migration Guide:
- Replace \`<BrowseHeader />\` with \`<Header kind="browse-tabbed" />\`
- All existing props are supported with the same API
- New features: sticky headers, collapsible headers, custom actions, and more
				`,
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'browse',
				'browse-tabbed',
				'dashboard',
				'dashboard-simple',
				'modal',
				'modal-close-only',
				'page',
				'page-with-nav',
				'sidebar',
				'navigation',
				'simple',
				'simple-centered',
				'game-header',
				'settings-header',
				'profile-header',
				'custom',
			] satisfies HeaderKind[],
			description: 'The type of header to display',
		},
		title: {
			control: 'text',
			description: 'Title to display in the header',
		},
		subtitle: {
			control: 'text',
			description: 'Optional subtitle below the title',
		},
		tabs: {
			control: 'object',
			description: 'Array of tab configurations',
		},
		currentTab: {
			control: 'text',
			description: 'Currently active tab value',
		},
		onTabChange: {
			action: 'tabChanged',
			description: 'Function called when tab is changed',
		},
		actions: {
			control: 'object',
			description: 'Array of action configurations',
		},
		leftActions: {
			control: 'object',
			description: 'Actions to display on the left side',
		},
		rightActions: {
			control: 'object',
			description: 'Actions to display on the right side',
		},
		sticky: {
			control: 'boolean',
			description:
				'Whether the header should stick to the top',
		},
		borderBottom: {
			control: 'boolean',
			description: 'Whether to show a border at the bottom',
		},
		background: {
			control: 'select',
			options: [
				'transparent',
				'primary',
				'secondary',
				'custom',
			],
			description: 'Background style for the header',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Header>;

// Sample data for stories
const sampleTabs = [
	{ label: 'All', value: 'all' },
	{ label: 'Featured', value: 'featured' },
	{ label: 'Recent', value: 'recent' },
	{ label: 'Popular', value: 'popular' },
];

const sampleActions = [
	{
		type: 'back' as const,
		handler: () => console.log('Back clicked'),
	},
];

const sampleRightActions = [
	{
		type: 'menu' as const,
		handler: () => console.log('Menu clicked'),
		label: 'Menu',
	},
	{
		type: 'close' as const,
		handler: () => console.log('Close clicked'),
	},
];

// ===== BASIC HEADER TYPES =====

export const Simple: Story = {
	args: {
		kind: 'simple',
		title: 'Simple Header',
	},
};

export const SimpleCentered: Story = {
	args: {
		kind: 'simple-centered',
		title: 'Centered Header',
	},
};

export const Page: Story = {
	args: {
		kind: 'page',
		title: 'Page Title',
		subtitle:
			'This is a page subtitle with additional information',
	},
};

export const PageWithNavigation: Story = {
	args: {
		kind: 'page-with-nav',
		title: 'Page with Navigation',
		leftActions: sampleActions,
		rightActions: [
			{
				type: 'menu' as const,
				handler: () => console.log('Menu clicked'),
				label: 'Menu',
			},
		],
	},
};

// ===== BROWSE HEADERS =====

export const Browse: Story = {
	args: {
		kind: 'browse',
		title: 'Browse Items',
		actions: sampleActions,
	},
};

export const BrowseWithTabs: Story = {
	args: {
		kind: 'browse-tabbed',
		title: 'Browse Puzzles',
		tabs: sampleTabs,
		currentTab: 'featured',
		onTabChange: (tab: string) =>
			console.log('Tab changed to:', tab),
		actions: sampleActions,
	},
};

// ===== DASHBOARD HEADERS =====

export const Dashboard: Story = {
	args: {
		kind: 'dashboard',
		title: 'Dashboard',
		rightActions: [
			{
				type: 'menu' as const,
				handler: () => console.log('Menu clicked'),
				label: 'Settings',
			},
		],
		sticky: true,
		borderBottom: true,
	},
};

export const DashboardSimple: Story = {
	args: {
		kind: 'dashboard-simple',
		title: 'Simple Dashboard',
	},
};

// ===== MODAL HEADERS =====

export const Modal: Story = {
	args: {
		kind: 'modal',
		title: 'Modal Title',
		actions: [
			{
				type: 'close' as const,
				handler: () => console.log('Close clicked'),
			},
		],
		borderBottom: true,
	},
};

export const ModalCloseOnly: Story = {
	args: {
		kind: 'modal-close-only',
		actions: [
			{
				type: 'close' as const,
				handler: () => console.log('Close clicked'),
			},
		],
	},
};

// ===== SPECIALIZED HEADERS =====

export const GameHeader: Story = {
	args: {
		kind: 'game-header',
		title: 'Connections Game',
		leftActions: [
			{
				type: 'back' as const,
				handler: () => console.log('Back clicked'),
			},
		],
		rightActions: [
			{
				type: 'menu' as const,
				handler: () => console.log('Menu clicked'),
				label: 'Menu',
			},
		],
	},
};

export const SettingsHeader: Story = {
	args: {
		kind: 'settings-header',
		title: 'Settings',
		tabs: [
			{ label: 'General', value: 'general' },
			{ label: 'Account', value: 'account' },
			{ label: 'Privacy', value: 'privacy' },
		],
		currentTab: 'general',
		onTabChange: (tab: string) =>
			console.log('Settings tab changed to:', tab),
		leftActions: sampleActions,
		borderBottom: true,
	},
};

export const ProfileHeader: Story = {
	args: {
		kind: 'profile-header',
		title: 'User Profile',
		subtitle: 'Manage your account settings',
		rightActions: [
			{
				type: 'menu' as const,
				handler: () => console.log('Edit clicked'),
				label: 'Edit',
			},
		],
		borderBottom: true,
	},
};

// ===== LAYOUT VARIATIONS =====

export const NavigationHeader: Story = {
	args: {
		kind: 'navigation',
		title: 'Main Navigation',
		tabs: sampleTabs,
		currentTab: 'all',
		onTabChange: (tab: string) =>
			console.log('Nav tab changed to:', tab),
		leftActions: [
			{
				type: 'menu' as const,
				handler: () => console.log('Menu clicked'),
				label: 'Menu',
			},
		],
		rightActions: [
			{
				type: 'custom' as const,
				handler: () => console.log('Profile clicked'),
				label: 'Profile',
			},
		],
		sticky: true,
		borderBottom: true,
	},
};

export const SidebarHeader: Story = {
	args: {
		kind: 'sidebar',
		title: 'Sidebar',
		actions: [
			{
				type: 'close' as const,
				handler: () => console.log('Close sidebar'),
			},
		],
		borderBottom: true,
	},
};

// ===== FACTORY USAGE EXAMPLES =====

export const FactoryExamples: Story = {
	name: 'Factory Usage Examples',
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
			}}
		>
			<Wrapper>
				{HeaderFactory.modal('Modal Title', () =>
					alert('Closed!')
				)}
			</Wrapper>

			<Wrapper>
				{HeaderFactory.browse('Browse Title', () =>
					alert('Back!')
				)}
			</Wrapper>

			<Wrapper>{HeaderFactory.page('Page Title')}</Wrapper>

			<Wrapper>
				{HeaderFactory.dashboard('Dashboard Title', [
					{
						type: 'menu',
						handler: () => alert('Menu!'),
						label: 'Menu',
					},
				])}
			</Wrapper>
		</Wrapper>
	),
};

// ===== PRESET EXAMPLES =====

export const PresetExamples: Story = {
	name: 'Preset Usage Examples',
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
			}}
		>
			<Wrapper>
				{HeaderPresets.MODAL_WITH_CLOSE(
					'Preset Modal',
					() => alert('Closed!')
				)}
			</Wrapper>

			<Wrapper>
				{HeaderPresets.BROWSE_SIMPLE('Preset Browse', () =>
					alert('Back!')
				)}
			</Wrapper>

			<Wrapper>
				{HeaderPresets.PAGE_TITLE('Preset Page')}
			</Wrapper>

			<Wrapper>
				{HeaderPresets.DASHBOARD_BASIC('Preset Dashboard')}
			</Wrapper>
		</Wrapper>
	),
};

// ===== LEGACY COMPATIBILITY =====

export const LegacyBrowseHeader: Story = {
	name: 'Legacy BrowseHeader (Compatibility)',
	render: () => {
		const [currentTab, setCurrentTab] =
			React.useState('featured');

		return (
			<Wrapper>
				<p
					style={{
						marginBottom: '1rem',
						padding: '0.5rem',
						backgroundColor: '#f0f0f0',
						borderRadius: '4px',
					}}
				>
					<strong>Legacy Compatibility:</strong> This shows
					how the old BrowseHeader API still works with the
					new DRY system underneath.
				</p>
				<Header
					kind='browse-tabbed'
					title='Browse Puzzles (Legacy API)'
					tabs={sampleTabs}
					currentTab={currentTab}
					onTabChange={setCurrentTab}
					actions={[
						{
							type: 'back' as const,
							handler: () => console.log('Back clicked'),
						},
					]}
				/>
			</Wrapper>
		);
	},
};

// ===== INTERACTIVE DEMO =====

export const InteractiveDemo: Story = {
	name: 'Interactive Demo',
	render: () => {
		const [headerKind, setHeaderKind] =
			React.useState<HeaderKind>('browse-tabbed');
		const [currentTab, setCurrentTab] =
			React.useState('featured');
		const [title, setTitle] = React.useState(
			'Interactive Header'
		);

		return (
			<Wrapper>
				<Wrapper
					style={{
						marginBottom: '2rem',
						padding: '1rem',
						backgroundColor: '#f8f9fa',
						borderRadius: '8px',
					}}
				>
					<h3>Header Configuration</h3>
					<Wrapper
						style={{
							display: 'grid',
							gridTemplateColumns:
								'repeat(auto-fit, minmax(200px, 1fr))',
							gap: '1rem',
							marginTop: '1rem',
						}}
					>
						<label>
							Header Kind:
							<select
								value={headerKind}
								onChange={(e) =>
									setHeaderKind(
										e.target.value as HeaderKind
									)
								}
								style={{
									display: 'block',
									width: '100%',
									marginTop: '0.25rem',
									padding: '0.5rem',
								}}
							>
								<option value='browse'>Browse</option>
								<option value='browse-tabbed'>
									Browse with Tabs
								</option>
								<option value='dashboard'>Dashboard</option>
								<option value='modal'>Modal</option>
								<option value='page'>Page</option>
								<option value='simple'>Simple</option>
							</select>
						</label>

						<label>
							Title:
							<input
								type='text'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								style={{
									display: 'block',
									width: '100%',
									marginTop: '0.25rem',
									padding: '0.5rem',
								}}
							/>
						</label>
					</Wrapper>
				</Wrapper>

				<Header
					kind={headerKind}
					title={title}
					tabs={
						headerKind.includes('tab') ? sampleTabs : (
							undefined
						)
					}
					currentTab={currentTab}
					onTabChange={setCurrentTab}
					actions={
						headerKind === 'modal' ?
							[
								{
									type: 'close' as const,
									handler: () =>
										console.log('Close clicked'),
								},
							]
						:	[
								{
									type: 'back' as const,
									handler: () =>
										console.log('Back clicked'),
								},
							]
					}
					rightActions={
						headerKind === 'dashboard' ?
							[
								{
									type: 'menu' as const,
									handler: () =>
										console.log('Menu clicked'),
									label: 'Menu',
								},
							]
						:	undefined
					}
					borderBottom={[
						'dashboard',
						'modal',
						'settings-header',
					].includes(headerKind)}
					sticky={['dashboard', 'navigation'].includes(
						headerKind
					)}
				/>
			</Wrapper>
		);
	},
};
