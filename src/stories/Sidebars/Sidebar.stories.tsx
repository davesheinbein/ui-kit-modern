import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedSidebar,
	SidebarFactory,
	S,
	SidebarPresets,
	FriendsSidebar,
} from '../../components/Sidebar';

// Example content for sidebars
const SidebarDemo: React.FC<{ sidebarType: string }> = ({
	sidebarType,
}) => (
	<div style={{ padding: '20px', lineHeight: '1.6' }}>
		<h3>Welcome to {sidebarType}</h3>
		<p>
			This is demo content for the{' '}
			{sidebarType.toLowerCase()} sidebar.
		</p>
		<ul>
			<li>Option 1</li>
			<li>Option 2</li>
			<li>Option 3</li>
		</ul>
		<p>
			You can add any content here including forms, lists,
			buttons, and more.
		</p>
	</div>
);

// Meta configuration for the DRY Sidebar system
const meta: Meta<typeof UnifiedSidebar> = {
	title: 'Sidebars/Sidebar (DRY System)',
	component: UnifiedSidebar,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# DRY Sidebar System

This is the new DRY (Don't Repeat Yourself) sidebar system that replaces individual sidebar components.

## Features

- **Unified API**: Single component for all sidebar types
- **50+ Variants**: Comprehensive sidebar configurations
- **Factory Pattern**: Create sidebars with minimal code
- **Ultra-DRY**: Shortest possible syntax with \`S()\` function
- **Responsive**: Built-in mobile/desktop variants
- **Accessible**: Full ARIA support and keyboard navigation
- **Customizable**: Override any configuration

## Usage Examples

\`\`\`tsx
// Ultra-short syntax
<>{S('friends', { open: true, onClose: () => {} })}</>

// Factory method
<>{SidebarFactory.create('friends-compact', { open: true })}</>

// Preset functions
<>{SidebarPresets.Friends({ open: true })}</>

// Direct component usage
<UnifiedSidebar kind="friends" open={true} onClose={() => {}} />
\`\`\`

## Available Sidebar Kinds

- **Basic**: friends, settings, chat, notifications
- **Sizes**: friends-small, friends-medium, friends-large, friends-full
- **Positions**: friends-left, friends-right, settings-left, settings-right
- **Behaviors**: friends-modal, friends-slide, friends-push, friends-overlay
- **Animations**: friends-fade, friends-scale, friends-no-animation
- **Responsive**: friends-mobile, friends-desktop, friends-responsive

## Migration from Legacy Components

Replace \`<FriendsSidebar>\` with \`<UnifiedSidebar kind="friends">\` or use the factory functions.
				`,
			},
		},
	},
	argTypes: {
		kind: {
			control: { type: 'select' },
			options: [
				'friends',
				'friends-compact',
				'friends-expanded',
				'friends-left',
				'friends-right',
				'friends-small',
				'friends-medium',
				'friends-large',
				'friends-full',
				'friends-mobile',
				'friends-desktop',
				'friends-responsive',
				'friends-modal',
				'friends-slide',
				'friends-push',
				'friends-overlay',
				'friends-fade',
				'friends-scale',
				'friends-no-animation',
				'settings',
				'settings-minimal',
				'settings-left',
				'settings-right',
				'chat',
				'chat-compact',
				'notifications',
				'notifications-compact',
			],
			description: 'The type of sidebar to render',
		},
		open: {
			control: { type: 'boolean' },
			description: 'Whether the sidebar is open or closed',
		},
		title: {
			control: { type: 'text' },
			description: 'Title displayed in the sidebar header',
		},
		hasOverlay: {
			control: { type: 'boolean' },
			description:
				'Whether to show an overlay behind the sidebar',
		},
		showCloseButton: {
			control: { type: 'boolean' },
			description: 'Whether to show a close button',
		},
		closeButtonText: {
			control: { type: 'text' },
			description: 'Text for the close button',
		},
		closeOnOverlayClick: {
			control: { type: 'boolean' },
			description:
				'Whether clicking the overlay closes the sidebar',
		},
		closeOnEscape: {
			control: { type: 'boolean' },
			description:
				'Whether pressing Escape closes the sidebar',
		},
		animationDuration: {
			control: {
				type: 'number',
				min: 0,
				max: 1000,
				step: 50,
			},
			description: 'Animation duration in milliseconds',
		},
		disableAnimation: {
			control: { type: 'boolean' },
			description: 'Whether to disable animations',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedSidebar>;

// Interactive demo with controls
const InteractiveTemplate = (args: any) => {
	const [isOpen, setIsOpen] = useState(args.open || false);

	return (
		<div
			style={{ minHeight: '400px', position: 'relative' }}
		>
			<button
				onClick={() => setIsOpen(true)}
				style={{ margin: '20px' }}
			>
				Open {args.kind} Sidebar
			</button>

			<UnifiedSidebar
				{...args}
				open={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<SidebarDemo sidebarType={args.kind} />
			</UnifiedSidebar>
		</div>
	);
};

// Basic Stories
export const Default: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends',
		title: 'Friends',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		closeOnOverlayClick: true,
		closeOnEscape: true,
		animationDuration: 300,
		disableAnimation: false,
	},
};

export const FriendsCompact: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-compact',
		title: 'Friends (Compact)',
	},
};

export const FriendsExpanded: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-expanded',
		title: 'Friends (Expanded)',
	},
};

export const SettingsSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'settings',
		title: 'Settings',
	},
};

export const ChatSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'chat',
		title: 'Chat',
	},
};

export const NotificationsSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'notifications',
		title: 'Notifications',
	},
};

// Position variants
export const LeftSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-left',
		title: 'Friends (Left)',
	},
};

export const RightSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-right',
		title: 'Friends (Right)',
	},
};

// Size variants
export const SmallSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-small',
		title: 'Friends (Small)',
	},
};

export const LargeSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-large',
		title: 'Friends (Large)',
	},
};

export const FullWidthSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-full',
		title: 'Friends (Full Width)',
	},
};

// Behavior variants
export const ModalSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-modal',
		title: 'Friends (Modal)',
	},
};

export const PushSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-push',
		title: 'Friends (Push)',
	},
};

export const OverlaySidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-overlay',
		title: 'Friends (Overlay)',
	},
};

// Animation variants
export const FadeSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-fade',
		title: 'Friends (Fade Animation)',
	},
};

export const ScaleSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-scale',
		title: 'Friends (Scale Animation)',
	},
};

export const NoAnimationSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-no-animation',
		title: 'Friends (No Animation)',
		disableAnimation: true,
	},
};

// Responsive variants
export const MobileSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-mobile',
		title: 'Friends (Mobile)',
	},
};

export const DesktopSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-desktop',
		title: 'Friends (Desktop)',
	},
};

export const ResponsiveSidebar: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends-responsive',
		title: 'Friends (Responsive)',
	},
};

// Factory pattern examples
export const FactoryExamples: Story = {
	render: () => {
		const [openSidebars, setOpenSidebars] = useState<{
			[key: string]: boolean;
		}>({});

		const toggleSidebar = (key: string) => {
			setOpenSidebars((prev) => ({
				...prev,
				[key]: !prev[key],
			}));
		};

		const closeSidebar = (key: string) => {
			setOpenSidebars((prev) => ({
				...prev,
				[key]: false,
			}));
		};

		return (
			<div style={{ padding: '20px' }}>
				<h3>Factory Pattern Examples</h3>
				<p>
					These examples show different ways to create
					sidebars using the factory system:
				</p>

				<div
					style={{
						display: 'flex',
						gap: '10px',
						flexWrap: 'wrap',
						marginBottom: '20px',
					}}
				>
					<button
						onClick={() => toggleSidebar('ultra-dry')}
					>
						Ultra-DRY: S('friends')
					</button>
					<button onClick={() => toggleSidebar('factory')}>
						Factory: SidebarFactory.create()
					</button>
					<button onClick={() => toggleSidebar('preset')}>
						Preset: SidebarPresets.Friends()
					</button>
					<button onClick={() => toggleSidebar('legacy')}>
						Legacy: FriendsSidebar
					</button>
				</div>

				{/* Ultra-DRY example */}
				{S('friends', {
					open: openSidebars['ultra-dry'] || false,
					onClose: () => closeSidebar('ultra-dry'),
					title: 'Ultra-DRY Sidebar',
					children: (
						<SidebarDemo sidebarType='Ultra-DRY S() function' />
					),
				})}

				{/* Factory example */}
				{SidebarFactory.create('friends-compact', {
					open: openSidebars['factory'] || false,
					onClose: () => closeSidebar('factory'),
					title: 'Factory Sidebar',
					children: (
						<SidebarDemo sidebarType='SidebarFactory.create()' />
					),
				})}

				{/* Preset example */}
				{SidebarPresets.Friends({
					open: openSidebars['preset'] || false,
					onClose: () => closeSidebar('preset'),
					title: 'Preset Sidebar',
					children: (
						<SidebarDemo sidebarType='SidebarPresets.Friends()' />
					),
				})}

				{/* Legacy example */}
				<FriendsSidebar
					open={openSidebars['legacy'] || false}
					onClose={() => closeSidebar('legacy')}
				>
					<div style={{ padding: '20px' }}>
						<h3>Legacy FriendsSidebar</h3>
						<p>
							This uses the backward-compatible
							FriendsSidebar component.
						</p>
					</div>
				</FriendsSidebar>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story: `
This story demonstrates different ways to create sidebars using the DRY factory system:

1. **Ultra-DRY**: \`S('friends', props)\` - Shortest possible syntax
2. **Factory**: \`SidebarFactory.create('friends-compact', props)\` - Explicit factory method
3. **Preset**: \`SidebarPresets.Friends(props)\` - Pre-configured function
4. **Legacy**: \`<FriendsSidebar>\` - Backward compatibility wrapper
				`,
			},
		},
	},
};

// Custom content examples
export const WithCustomContent: Story = {
	render: InteractiveTemplate,
	args: {
		kind: 'friends',
		title: 'Friends List',
		header: (
			<div
				style={{
					padding: '16px 20px',
					background: '#f0f9ff',
					borderBottom: '1px solid #e0e7ff',
				}}
			>
				<h2 style={{ margin: 0, color: '#1e40af' }}>
					Custom Header
				</h2>
				<p
					style={{
						margin: '4px 0 0',
						color: '#64748b',
						fontSize: '14px',
					}}
				>
					With custom styling
				</p>
			</div>
		),
		footer: (
			<div
				style={{
					padding: '16px 20px',
					background: '#f8fafc',
					borderTop: '1px solid #e2e8f0',
				}}
			>
				<button
					style={{
						width: '100%',
						padding: '8px',
						background: '#3b82f6',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
					}}
				>
					Custom Footer Button
				</button>
			</div>
		),
		children: (
			<div style={{ padding: '0' }}>
				<div
					style={{
						padding: '16px 20px',
						borderBottom: '1px solid #f1f5f9',
					}}
				>
					<h4
						style={{ margin: '0 0 8px', color: '#334155' }}
					>
						Online Friends
					</h4>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '12px',
							padding: '8px 0',
						}}
					>
						<div
							style={{
								width: '32px',
								height: '32px',
								background: '#10b981',
								borderRadius: '50%',
							}}
						></div>
						<span>John Doe</span>
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '12px',
							padding: '8px 0',
						}}
					>
						<div
							style={{
								width: '32px',
								height: '32px',
								background: '#f59e0b',
								borderRadius: '50%',
							}}
						></div>
						<span>Jane Smith</span>
					</div>
				</div>
				<div style={{ padding: '16px 20px' }}>
					<h4
						style={{ margin: '0 0 8px', color: '#334155' }}
					>
						Offline Friends
					</h4>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '12px',
							padding: '8px 0',
							opacity: 0.6,
						}}
					>
						<div
							style={{
								width: '32px',
								height: '32px',
								background: '#6b7280',
								borderRadius: '50%',
							}}
						></div>
						<span>Mike Johnson</span>
					</div>
				</div>
			</div>
		),
	},
};
