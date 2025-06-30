import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Button } from '../../components/Button';
import { Wrapper } from '../../components/Wrappers';
import { commonDecorators } from '../config/decorators';

const meta = {
	title: 'Sidebar/Sidebar',
	component: Sidebar,
	decorators: commonDecorators,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `All sidebar usage is via <Sidebar variant="..." open={...} onClose={...} {...otherProps} />.\n\n- 'variant', 'open', and 'onClose' are required for interactive sidebars.\n- All previous preset/helper/kind logic is removed for maximum clarity and simplicity.\n- See the Sidebar Variants Gallery below for 20+ layout examples.`,
			},
		},
	},
};
export default meta;

const DemoContent = ({ label }: { label: string }) => (
	<Wrapper p={5}>
		<h3>{label} Sidebar</h3>
		<p>
			This is demo content for the {label.toLowerCase()}{' '}
			sidebar.
		</p>
	</Wrapper>
);

// Overlay component for consistent sidebar UX
const Overlay = ({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) =>
	open ?
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				background: 'rgba(0,0,0,0.4)',
				zIndex: 1000,
			}}
			data-testid='sidebar-overlay'
			onClick={onClose}
		/>
	:	null;

// DRY: All sidebar variant demos in one place
const sidebarVariants = [
	{
		variant: 'classic',
		label: 'Classic Vertical Sidebar',
	},
	{
		variant: 'icon-only',
		label: 'Icon-Only Vertical Sidebar',
		iconOnly: true,
	},
	{
		variant: 'collapsible',
		label: 'Collapsible Sidebar',
		collapsible: true,
	},
	{
		variant: 'persistent-right',
		label: 'Persistent Right Sidebar',
		position: 'right',
	},
	{
		variant: 'horizontal',
		label: 'Horizontal-Style Sidebar',
		horizontal: true,
	},
	{
		variant: 'sticky',
		label: 'Sticky Sidebar',
		sticky: true,
	},
	{
		variant: 'profile',
		label: 'Sidebar with User Profile',
		profile: <div>User Profile</div>,
	},
	{
		variant: 'action-button',
		label: 'Sidebar with Action Button',
		actionButton: <Button kind='primary'>Action</Button>,
	},
	{
		variant: 'mega',
		label: 'Mega Sidebar with Nested Sections',
		children: <DemoContent label='Mega Sidebar' />,
	},
	{
		variant: 'badges',
		label: 'Sidebar with Badges',
		badges: <span>Badge</span>,
	},
	{
		variant: 'search',
		label: 'Sidebar with Search',
		search: <input placeholder='Search...' />,
	},
	{
		variant: 'theme-switcher',
		label: 'Sidebar with Theme Switcher',
		themeSwitcher: (
			<Button kind='secondary'>Switch Theme</Button>
		),
	},
	{
		variant: 'contextual',
		label: 'Contextual Sidebar',
	},
	{
		variant: 'progress',
		label: 'Sidebar with Progress Indicators',
		progress: <progress value={50} max={100} />,
	},
	{
		variant: 'widgets',
		label: 'Sidebar with Embedded Widgets',
		widgets: <div>Widget</div>,
	},
	{
		variant: 'footer-links',
		label: 'Sidebar with Footer Links',
		footerLinks: <a href='#'>Footer Link</a>,
	},
	{
		variant: 'floating',
		label: 'Floating Sidebar',
		floating: true,
	},
	{
		variant: 'split-nav',
		label:
			'Sidebar with Split Navigation and Call to Action',
		splitNav: <div>Split Nav</div>,
	},
	{
		variant: 'mobile-slideout',
		label: 'Mobile Slide-Out Sidebar',
	},
	{
		variant: 'social-links',
		label: 'Sidebar with Social or External Links',
		socialLinks: <a href='https://github.com'>GitHub</a>,
	},
];

// DRY: Single demo component for all variants, now with overlay
const SidebarDemo = ({
	variant,
	label,
	iconOnly,
	collapsible,
	sticky,
	horizontal,
	profile,
	actionButton,
	badges,
	search,
	themeSwitcher,
	progress,
	widgets,
	footerLinks,
	floating,
	splitNav,
	socialLinks,
	position,
	children,
}: any) => {
	const [open, setOpen] = useState(false); // Sidebar closed by default

	// Close on Escape key
	React.useEffect(() => {
		if (!open) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		document.addEventListener('keydown', handleKeyDown);
		return () =>
			document.removeEventListener(
				'keydown',
				handleKeyDown
			);
	}, [open]);

	return (
		<>
			<Wrapper>
				<Button
					kind='primary'
					size='small'
					onClick={() => setOpen(true)}
				>
					Open {label}
				</Button>
			</Wrapper>
			<Overlay open={open} onClose={() => setOpen(false)} />
			<Sidebar
				variant={variant}
				open={open}
				onClose={() => setOpen(false)}
				iconOnly={iconOnly}
				collapsible={collapsible}
				sticky={sticky}
				horizontal={horizontal}
				profile={profile}
				actionButton={actionButton}
				badges={badges}
				search={search}
				themeSwitcher={themeSwitcher}
				progress={progress}
				widgets={widgets}
				footerLinks={footerLinks}
				floating={floating}
				splitNav={splitNav}
				socialLinks={socialLinks}
				position={position}
				title={label}
			>
				{children || <DemoContent label={label} />}
			</Sidebar>
		</>
	);
};

// Export each sidebar variant as its own story for clarity and no overlap
export const ClassicVerticalSidebar = () => (
	<SidebarDemo
		variant='classic'
		label='Classic Vertical Sidebar'
	/>
);
ClassicVerticalSidebar.storyName =
	'Classic Vertical Sidebar';

export const IconOnlyVerticalSidebar = () => (
	<SidebarDemo
		variant='icon-only'
		label='Icon-Only Vertical Sidebar'
		iconOnly
	/>
);
IconOnlyVerticalSidebar.storyName =
	'Icon-Only Vertical Sidebar';

export const CollapsibleSidebar = () => (
	<SidebarDemo
		variant='collapsible'
		label='Collapsible Sidebar'
		collapsible
	/>
);
CollapsibleSidebar.storyName = 'Collapsible Sidebar';

export const PersistentRightSidebar = () => (
	<SidebarDemo
		variant='persistent-right'
		label='Persistent Right Sidebar'
		position='right'
	/>
);
PersistentRightSidebar.storyName =
	'Persistent Right Sidebar';

export const HorizontalStyleSidebar = () => (
	<SidebarDemo
		variant='horizontal'
		label='Horizontal-Style Sidebar'
		horizontal
	/>
);
HorizontalStyleSidebar.storyName =
	'Horizontal-Style Sidebar';

export const StickySidebar = () => (
	<SidebarDemo
		variant='sticky'
		label='Sticky Sidebar'
		sticky
	/>
);
StickySidebar.storyName = 'Sticky Sidebar';

export const SidebarWithUserProfile = () => (
	<SidebarDemo
		variant='profile'
		label='Sidebar with User Profile'
		profile={<div>User Profile</div>}
	/>
);
SidebarWithUserProfile.storyName =
	'Sidebar with User Profile';

export const SidebarWithActionButton = () => (
	<SidebarDemo
		variant='action-button'
		label='Sidebar with Action Button'
		actionButton={<Button kind='primary'>Action</Button>}
	/>
);
SidebarWithActionButton.storyName =
	'Sidebar with Action Button';

export const MegaSidebarWithNestedSections = () => (
	<SidebarDemo
		variant='mega'
		label='Mega Sidebar with Nested Sections'
	>
		<DemoContent label='Mega Sidebar' />
	</SidebarDemo>
);
MegaSidebarWithNestedSections.storyName =
	'Mega Sidebar with Nested Sections';

export const SidebarWithBadges = () => (
	<SidebarDemo
		variant='badges'
		label='Sidebar with Badges'
		badges={<span>Badge</span>}
	/>
);
SidebarWithBadges.storyName = 'Sidebar with Badges';

export const SidebarWithSearch = () => (
	<SidebarDemo
		variant='search'
		label='Sidebar with Search'
		search={<input placeholder='Search...' />}
	/>
);
SidebarWithSearch.storyName = 'Sidebar with Search';

export const SidebarWithThemeSwitcher = () => (
	<SidebarDemo
		variant='theme-switcher'
		label='Sidebar with Theme Switcher'
		themeSwitcher={
			<Button kind='secondary'>Switch Theme</Button>
		}
	/>
);
SidebarWithThemeSwitcher.storyName =
	'Sidebar with Theme Switcher';

export const ContextualSidebar = () => (
	<SidebarDemo
		variant='contextual'
		label='Contextual Sidebar'
	/>
);
ContextualSidebar.storyName = 'Contextual Sidebar';

export const SidebarWithProgressIndicators = () => (
	<SidebarDemo
		variant='progress'
		label='Sidebar with Progress Indicators'
		progress={<progress value={50} max={100} />}
	/>
);
SidebarWithProgressIndicators.storyName =
	'Sidebar with Progress Indicators';

export const SidebarWithEmbeddedWidgets = () => (
	<SidebarDemo
		variant='widgets'
		label='Sidebar with Embedded Widgets'
		widgets={<div>Widget</div>}
	/>
);
SidebarWithEmbeddedWidgets.storyName =
	'Sidebar with Embedded Widgets';

export const SidebarWithFooterLinks = () => (
	<SidebarDemo
		variant='footer-links'
		label='Sidebar with Footer Links'
		footerLinks={<a href='#'>Footer Link</a>}
	/>
);
SidebarWithFooterLinks.storyName =
	'Sidebar with Footer Links';

export const FloatingSidebar = () => (
	<SidebarDemo
		variant='floating'
		label='Floating Sidebar'
		floating
	/>
);
FloatingSidebar.storyName = 'Floating Sidebar';

export const SidebarWithSplitNavigationAndCTA = () => (
	<SidebarDemo
		variant='split-nav'
		label='Sidebar with Split Navigation and Call to Action'
		splitNav={<div>Split Nav</div>}
	/>
);
SidebarWithSplitNavigationAndCTA.storyName =
	'Sidebar with Split Navigation and Call to Action';

export const MobileSlideOutSidebar = () => (
	<SidebarDemo
		variant='mobile-slideout'
		label='Mobile Slide-Out Sidebar'
	/>
);
MobileSlideOutSidebar.storyName =
	'Mobile Slide-Out Sidebar';

export const SidebarWithSocialOrExternalLinks = () => (
	<SidebarDemo
		variant='social-links'
		label='Sidebar with Social or External Links'
		socialLinks={<a href='https://github.com'>GitHub</a>}
	/>
);
SidebarWithSocialOrExternalLinks.storyName =
	'Sidebar with Social or External Links';

// Optionally, keep the gallery for visual reference, but not as the main story
export const SidebarVariantsGallery = () => (
	<Wrapper
		style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}
	>
		{sidebarVariants.map((props) => (
			<SidebarDemo key={props.label} {...props} />
		))}
	</Wrapper>
);
SidebarVariantsGallery.storyName =
	'Sidebar Variants Gallery';
