import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Button } from '../../components/Button';
import { Wrapper } from '../../components/Wrappers';

export default {
	title: 'Sidebar/Sidebar',
	component: Sidebar,
	docs: {
		description: {
			component:
				`All sidebar usage is via <Sidebar variant="..." open={...} onClose={...} {...otherProps} />.\n\n` +
				`- 'variant', 'open', and 'onClose' are required for interactive sidebars.\n` +
				`- All previous preset/helper/kind logic is removed for maximum clarity and simplicity.\n` +
				`- See the Sidebar Variants Gallery below for 20+ layout examples.`,
		},
	},
};

const DemoContent = ({ label }: { label: string }) => (
	<Wrapper style={{ padding: 20 }}>
		<h3>{label} Sidebar</h3>
		<p>
			This is demo content for the {label.toLowerCase()}{' '}
			sidebar.
		</p>
	</Wrapper>
);

const sidebarTypes = [
	{
		variant: 'permanent' as const,
		label: 'Permanent Sidebar',
		extra: { open: true },
	},
	{
		variant: 'collapsible' as const,
		label: 'Collapsible Sidebar',
	},
	{
		variant: 'drawer' as const,
		label: 'Hidden Drawer Sidebar',
	},
	{ variant: 'overlay' as const, label: 'Overlay Sidebar' },
	{ variant: 'push' as const, label: 'Push Sidebar' },
	{
		variant: 'floating' as const,
		label: 'Floating Sidebar',
	},
	{
		variant: 'contextual' as const,
		label: 'Contextual Sidebar',
	},
	{
		variant: 'tabbed' as const,
		label: 'Tabbed Sidebar',
		children: <DemoContent label='Tabbed' />,
	},
	{
		variant: 'multi-level' as const,
		label: 'Multi-Level Sidebar',
		children: <DemoContent label='Multi-Level' />,
	},
	{
		variant: 'icon-only' as const,
		label: 'Icon-Only Sidebar',
	},
	{
		variant: 'permanent' as const,
		label: 'Right-Aligned Sidebar',
		extra: { position: 'right' as const },
	},
	{
		variant: 'profile' as const,
		label: 'User Profile Sidebar',
	},
	{ variant: 'filter' as const, label: 'Filter Sidebar' },
	{
		variant: 'settings' as const,
		label: 'Settings Sidebar',
	},
	{ variant: 'search' as const, label: 'Search Sidebar' },
	{
		variant: 'activity' as const,
		label: 'Activity Feed Sidebar',
	},
	{
		variant: 'quick-actions' as const,
		label: 'Quick Actions Sidebar',
	},
	{
		variant: 'favorites' as const,
		label: 'Favorites Sidebar',
	},
	{ variant: 'media' as const, label: 'Media Sidebar' },
	{
		variant: 'vertical-tabs' as const,
		label: 'Vertical Tab Sidebar',
		children: <DemoContent label='Vertical Tabs' />,
	},
];

export const SidebarVariantsGallery = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(
		null
	);
	return (
		<Wrapper
			style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}
		>
			{sidebarTypes.map((type, idx) => (
				<div
					key={type.label}
					style={{ minWidth: 320, margin: 8 }}
				>
					<Button
						kind='secondary'
						onClick={() => setOpenIndex(idx)}
						style={{ marginBottom: 8 }}
					>
						Open {type.label}
					</Button>
					<Sidebar
						variant={type.variant}
						open={
							openIndex === idx || Boolean(type.extra?.open)
						}
						onClose={() => setOpenIndex(null)}
						title={type.label}
						position={type.extra?.position}
					>
						{type.children || (
							<DemoContent label={type.label} />
						)}
					</Sidebar>
				</div>
			))}
		</Wrapper>
	);
};
SidebarVariantsGallery.storyName =
	'Sidebar Variants Gallery';

// Minimal individual stories for core types
export const PermanentSidebar = () => (
	<Sidebar
		variant='permanent'
		open={true}
		onClose={() => {}}
		title='Permanent Sidebar'
	>
		<DemoContent label='Permanent' />
	</Sidebar>
);
PermanentSidebar.storyName = 'Permanent Sidebar';

export const CollapsibleSidebar = () => {
	const [open, setOpen] = useState(false);
	return (
		<Wrapper>
			<Button
				kind='secondary'
				onClick={() => setOpen(true)}
				style={{ margin: 20 }}
			>
				Open Collapsible Sidebar
			</Button>
			<Sidebar
				variant='collapsible'
				open={open}
				onClose={() => setOpen(false)}
				title='Collapsible Sidebar'
			>
				<DemoContent label='Collapsible' />
			</Sidebar>
		</Wrapper>
	);
};
CollapsibleSidebar.storyName = 'Collapsible Sidebar';

export const OverlaySidebar = () => {
	const [open, setOpen] = useState(false);
	return (
		<Wrapper>
			<Button
				kind='secondary'
				onClick={() => setOpen(true)}
				style={{ margin: 20 }}
			>
				Open Overlay Sidebar
			</Button>
			<Sidebar
				variant='overlay'
				open={open}
				onClose={() => setOpen(false)}
				title='Overlay Sidebar'
			>
				<DemoContent label='Overlay' />
			</Sidebar>
		</Wrapper>
	);
};
OverlaySidebar.storyName = 'Overlay Sidebar';
