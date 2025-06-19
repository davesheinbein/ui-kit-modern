import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	FriendsSidebar,
	UnifiedSidebar,
	S,
} from '../../components/Sidebar';

const meta: Meta<typeof FriendsSidebar> = {
	title: 'Sidebars/FriendsSidebar (DRY System)',
	component: FriendsSidebar,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# FriendsSidebar (DRY System)

This is the backward-compatible FriendsSidebar component that now uses the DRY Sidebar system under the hood.

## Migration Notice

For new development, consider using:
- \`UnifiedSidebar\` with \`kind="friends"\`
- \`S('friends', props)\` for ultra-DRY syntax
- \`SidebarPresets.Friends(props)\` for preset functions

## Legacy Support

This component maintains the same API as the original FriendsSidebar for backward compatibility.
				`,
			},
		},
	},
	argTypes: {
		open: {
			control: { type: 'boolean' },
			description: 'Whether the sidebar is open or closed',
		},
	},
};

export default meta;
type Story = StoryObj<typeof FriendsSidebar>;

const Template = (args: any) => {
	const [isOpen, setIsOpen] = useState(args.open || false);

	return (
		<div
			style={{ minHeight: '400px', position: 'relative' }}
		>
			<button
				onClick={() => setIsOpen(true)}
				style={{ margin: '20px' }}
			>
				Open Friends Sidebar
			</button>

			<FriendsSidebar
				{...args}
				open={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<div style={{ padding: '20px' }}>
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
				</div>
			</FriendsSidebar>
		</div>
	);
};

export const Default: Story = {
	render: Template,
	args: {
		open: false,
	},
};

export const AlwaysOpen: Story = {
	render: (args) => (
		<div
			style={{ minHeight: '400px', position: 'relative' }}
		>
			<FriendsSidebar
				{...args}
				open={true}
				onClose={() => {}}
			>
				<div style={{ padding: '20px' }}>
					<h3>Friends List</h3>
					<p>
						This sidebar is always open for demo purposes.
					</p>
					<ul>
						<li>Friend 1</li>
						<li>Friend 2</li>
						<li>Friend 3</li>
					</ul>
				</div>
			</FriendsSidebar>
		</div>
	),
	args: {
		open: true,
	},
};

// Comparison with new DRY system
export const ComparisonWithDRYSystem: Story = {
	render: () => {
		const [legacyOpen, setLegacyOpen] = useState(false);
		const [dryOpen, setDryOpen] = useState(false);
		const [ultraDryOpen, setUltraDryOpen] = useState(false);

		return (
			<div style={{ padding: '20px' }}>
				<h3>Legacy vs DRY System Comparison</h3>
				<div
					style={{
						display: 'flex',
						gap: '10px',
						marginBottom: '20px',
					}}
				>
					<button onClick={() => setLegacyOpen(true)}>
						Legacy FriendsSidebar
					</button>
					<button onClick={() => setDryOpen(true)}>
						UnifiedSidebar (DRY)
					</button>
					<button onClick={() => setUltraDryOpen(true)}>
						S() Ultra-DRY
					</button>
				</div>

				{/* Legacy FriendsSidebar */}
				<FriendsSidebar
					open={legacyOpen}
					onClose={() => setLegacyOpen(false)}
				>
					<div style={{ padding: '20px' }}>
						<h3>Legacy FriendsSidebar</h3>
						<p>
							Uses the old API but new DRY system under the
							hood.
						</p>
					</div>
				</FriendsSidebar>

				{/* DRY UnifiedSidebar */}
				<UnifiedSidebar
					kind='friends'
					open={dryOpen}
					onClose={() => setDryOpen(false)}
					title='DRY Sidebar'
				>
					<div style={{ padding: '20px' }}>
						<h3>UnifiedSidebar</h3>
						<p>Modern DRY approach with kind="friends".</p>
					</div>
				</UnifiedSidebar>

				{/* Ultra-DRY */}
				{S('friends', {
					open: ultraDryOpen,
					onClose: () => setUltraDryOpen(false),
					title: 'Ultra-DRY',
					children: (
						<div style={{ padding: '20px' }}>
							<h3>S() Ultra-DRY</h3>
							<p>
								Shortest possible syntax: S('friends',
								props)
							</p>
						</div>
					),
				})}
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story: `
This story compares the legacy FriendsSidebar with the new DRY system approaches:

1. **Legacy**: \`<FriendsSidebar>\` - Maintains old API for compatibility
2. **DRY**: \`<UnifiedSidebar kind="friends">\` - Modern explicit approach  
3. **Ultra-DRY**: \`S('friends', props)\` - Shortest possible syntax

All three render the same underlying component but with different APIs.
				`,
			},
		},
	},
};
