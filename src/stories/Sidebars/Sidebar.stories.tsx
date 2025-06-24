import React, { useState } from 'react';
import { Wrapper } from '../../components/Wrappers';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button';
import {
	Sidebar,
	SidebarFactory,
	S,
	SidebarPresets,
	FriendsSidebar,
} from '../../components/Sidebar';

// Example content for sidebars
const SidebarDemo: React.FC<{ sidebarType: string }> = ({
	sidebarType,
}) => (
	<Wrapper style={{ padding: '20px', lineHeight: '1.6' }}>
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
	</Wrapper>
);

// Meta configuration for the DRY Sidebar system
const meta: Meta<typeof Sidebar> = {
	title: 'Sidebars/Sidebar',
	component: Sidebar,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# DRY Sidebar System

This is the new DRY (Don't Repeat Yourself) sidebar system that replaces individual sidebar components.

## Features

- ** API**: Single component for all sidebar types
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
<Sidebar kind="friends" open={true} onClose={() => {}} />
\`\`\`

## Available Sidebar Kinds

- **Basic**: friends, settings, chat, notifications
- **Sizes**: friends-small, friends-medium, friends-large, friends-full
- **Positions**: friends-left, friends-right, settings-left, settings-right
- **Behaviors**: friends-modal, friends-slide, friends-push, friends-overlay
- **Animations**: friends-fade, friends-scale, friends-no-animation
- **Responsive**: friends-mobile, friends-desktop, friends-responsive

## Migration from Legacy Components

Replace \`<FriendsSidebar>\` with \`<Sidebar kind="friends">\` or use the factory functions.
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
type Story = StoryObj<typeof Sidebar>;

// Interactive demo with controls
const InteractiveTemplate = (args: any) => {
	const [isOpen, setIsOpen] = useState(args.open || false);

	return (
		<Wrapper
			style={{ minHeight: '400px', position: 'relative' }}
		>
			<Button
				kind='secondary'
				onClick={() => setIsOpen(true)}
				style={{ margin: '20px' }}
			>
				Open {args.kind} Sidebar
			</Button>

			<Sidebar
				{...args}
				open={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<SidebarDemo sidebarType={args.kind} />
			</Sidebar>
		</Wrapper>
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
			<Wrapper style={{ padding: '20px' }}>
				<h3>Factory Pattern Examples</h3>
				<p>
					These examples show different ways to create
					sidebars using the factory system:
				</p>

				<Wrapper
					style={{
						display: 'flex',
						gap: '10px',
						flexWrap: 'wrap',
						marginBottom: '20px',
					}}
				>
					<Button
						kind='secondary'
						onClick={() => toggleSidebar('ultra-dry')}
					>
						Ultra-DRY: S('friends')
					</Button>
					<Button
						kind='secondary'
						onClick={() => toggleSidebar('factory')}
					>
						Factory: SidebarFactory.create()
					</Button>
					<Button
						kind='secondary'
						onClick={() => toggleSidebar('preset')}
					>
						Preset: SidebarPresets.Friends()
					</Button>
					<Button
						kind='secondary'
						onClick={() => toggleSidebar('legacy')}
					>
						Legacy: FriendsSidebar
					</Button>
				</Wrapper>

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
					<Wrapper style={{ padding: '20px' }}>
						<h3>Legacy FriendsSidebar</h3>
						<p>
							This uses the backward-compatible
							FriendsSidebar component.
						</p>
					</Wrapper>
				</FriendsSidebar>
			</Wrapper>
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
			<Wrapper
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
			</Wrapper>
		),
		footer: (
			<Wrapper
				style={{
					padding: '16px 20px',
					background: '#f8fafc',
					borderTop: '1px solid #e2e8f0',
				}}
			>
				<Button
					kind='primary'
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
				</Button>
			</Wrapper>
		),
		children: (
			<Wrapper style={{ padding: '0' }}>
				<Wrapper
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
					<Wrapper
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '12px',
							padding: '8px 0',
						}}
					>
						<Wrapper
							style={{
								width: '32px',
								height: '32px',
								background: '#10b981',
								borderRadius: '50%',
							}}
						></Wrapper>
						<span>John Doe</span>
					</Wrapper>
					<Wrapper
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '12px',
							padding: '8px 0',
						}}
					>
						<Wrapper
							style={{
								width: '32px',
								height: '32px',
								background: '#f59e0b',
								borderRadius: '50%',
							}}
						></Wrapper>
						<span>Jane Smith</span>
					</Wrapper>
				</Wrapper>
				<Wrapper style={{ padding: '16px 20px' }}>
					<h4
						style={{ margin: '0 0 8px', color: '#334155' }}
					>
						Offline Friends
					</h4>
					<Wrapper
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '12px',
							padding: '8px 0',
							opacity: 0.6,
						}}
					>
						<Wrapper
							style={{
								width: '32px',
								height: '32px',
								background: '#6b7280',
								borderRadius: '50%',
							}}
						></Wrapper>
						<span>Mike Johnson</span>
					</Wrapper>
				</Wrapper>
			</Wrapper>
		),
	},
};

// Backward Compatibility Stories for FriendsSidebar
export const LegacyFriendsSidebar: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<Wrapper
				style={{ minHeight: '400px', position: 'relative' }}
			>
				<Button
					kind='secondary'
					onClick={() => setIsOpen(true)}
					style={{ margin: '20px' }}
				>
					Open Legacy FriendsSidebar
				</Button>

				<FriendsSidebar
					open={isOpen}
					onClose={() => setIsOpen(false)}
				>
					<Wrapper style={{ padding: '20px' }}>
						<h3>Friends List</h3>
						<p>
							This is the legacy FriendsSidebar component
							using the new DRY system.
						</p>
						<ul>
							<li>Friend 1</li>
							<li>Friend 2</li>
							<li>Friend 3</li>
						</ul>
					</Wrapper>
				</FriendsSidebar>
			</Wrapper>
		);
	},
	parameters: {
		docs: {
			description: {
				story: `
This story demonstrates the backward-compatible FriendsSidebar component that now uses the DRY Sidebar system under the hood.

## Migration Notice

For new development, consider using:
- \`Sidebar\` with \`kind="friends"\`
- \`S('friends', props)\` for ultra-DRY syntax
- \`SidebarPresets.Friends(props)\` for preset functions

## Legacy Support

This component maintains the same API as the original FriendsSidebar for backward compatibility.
				`,
			},
		},
	},
};

export const LegacyFriendsSidebarAlwaysOpen: Story = {
	render: () => (
		<Wrapper
			style={{ minHeight: '400px', position: 'relative' }}
		>
			<FriendsSidebar open={true} onClose={() => {}}>
				<Wrapper style={{ padding: '20px' }}>
					<h3>Friends List</h3>
					<p>
						This sidebar is always open for demo purposes.
					</p>
					<ul>
						<li>Friend 1</li>
						<li>Friend 2</li>
						<li>Friend 3</li>
					</ul>
				</Wrapper>
			</FriendsSidebar>
		</Wrapper>
	),
	parameters: {
		docs: {
			description: {
				story: `
Legacy FriendsSidebar component that is always open for demo purposes.
				`,
			},
		},
	},
};

// Comparison between legacy and new DRY system
export const LegacyVsDRYSystemComparison: Story = {
	render: () => {
		const [legacyOpen, setLegacyOpen] = useState(false);
		const [dryOpen, setDryOpen] = useState(false);
		const [ultraDryOpen, setUltraDryOpen] = useState(false);

		return (
			<Wrapper style={{ padding: '20px' }}>
				<h3>Legacy vs DRY System Comparison</h3>
				<Wrapper
					style={{
						display: 'flex',
						gap: '10px',
						marginBottom: '20px',
					}}
				>
					<Button
						kind='secondary'
						onClick={() => setLegacyOpen(true)}
					>
						Legacy FriendsSidebar
					</Button>
					<Button
						kind='secondary'
						onClick={() => setDryOpen(true)}
					>
						Sidebar (DRY)
					</Button>
					<Button
						kind='secondary'
						onClick={() => setUltraDryOpen(true)}
					>
						S() Ultra-DRY
					</Button>
				</Wrapper>

				{/* Legacy FriendsSidebar */}
				<FriendsSidebar
					open={legacyOpen}
					onClose={() => setLegacyOpen(false)}
				>
					<Wrapper style={{ padding: '20px' }}>
						<h3>Legacy FriendsSidebar</h3>
						<p>
							Uses the old API but new DRY system under the
							hood.
						</p>
					</Wrapper>
				</FriendsSidebar>

				{/* DRY Sidebar */}
				<Sidebar
					kind='friends'
					open={dryOpen}
					onClose={() => setDryOpen(false)}
					title='DRY Sidebar'
				>
					<Wrapper style={{ padding: '20px' }}>
						<h3>Sidebar</h3>
						<p>Modern DRY approach with kind="friends".</p>
					</Wrapper>
				</Sidebar>

				{/* Ultra-DRY */}
				{S('friends', {
					open: ultraDryOpen,
					onClose: () => setUltraDryOpen(false),
					title: 'Ultra-DRY',
					children: (
						<Wrapper style={{ padding: '20px' }}>
							<h3>S() Ultra-DRY</h3>
							<p>
								Shortest possible syntax: S('friends',
								props)
							</p>
						</Wrapper>
					),
				})}
			</Wrapper>
		);
	},
	parameters: {
		docs: {
			description: {
				story: `
This story compares the legacy FriendsSidebar with the new DRY system approaches:

1. **Legacy**: \`<FriendsSidebar>\` - Maintains old API for compatibility
2. **DRY**: \`<Sidebar kind="friends">\` - Modern explicit approach  
3. **Ultra-DRY**: \`S('friends', props)\` - Shortest possible syntax

All three render the same underlying component but with different APIs.
				`,
			},
		},
	},
};
