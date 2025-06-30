import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from '../../components/Navigation/Navigation';
import { Wrapper } from '../../components/Wrappers';
import { commonDecorators } from '../config/decorators';

const meta: Meta<typeof Navigation> = {
	title: 'Navigation/Navigation',
	component: Navigation,
	decorators: commonDecorators,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Standardized NavigationItem shape
const sampleItems = [
	{ id: 'home', label: 'Home', path: '/', active: true },
	{ id: 'products', label: 'Products', path: '/products' },
	{ id: 'about', label: 'About', path: '/about' },
	{ id: 'contact', label: 'Contact', path: '/contact' },
];

const sampleBreadcrumbs = [
	{ id: 'home', label: 'Home', path: '/' },
	{ id: 'category', label: 'Category', path: '/category' },
	{ id: 'product', label: 'Product', path: '/product' },
	{ id: 'details', label: 'Details' },
];

const sampleTabs = [
	{ id: 'overview', label: 'Overview', active: true },
	{ id: 'specs', label: 'Specifications' },
	{ id: 'reviews', label: 'Reviews' },
	{ id: 'support', label: 'Support' },
];

export const Default: Story = {
	args: {
		kind: 'navbar',
		items: sampleItems,
	},
};

export const Navbar: Story = {
	args: {
		kind: 'navbar',
		items: sampleItems,
		variant: 'primary',
		layout: 'horizontal',
	},
};

export const MobileNav: Story = {
	args: {
		kind: 'mobile-nav',
		items: sampleItems,
		variant: 'mobile-optimized',
	},
	parameters: {
		viewport: {
			defaultViewport: 'mobile1',
		},
	},
};

export const HamburgerMenu: Story = {
	args: {
		kind: 'hamburger-menu',
		items: sampleItems,
		isOpen: true,
	},
};

export const SideDrawer: Story = {
	args: {
		kind: 'side-drawer',
		items: sampleItems,
		isOpen: true,
		collapsible: true,
	},
};

export const Breadcrumbs: Story = {
	args: {
		kind: 'breadcrumbs',
		items: sampleBreadcrumbs,
		activeId: 'details',
		separator: '/',
	},
};

export const Pagination: Story = {
	args: {
		kind: 'pagination',
		currentPage: 3,
		totalPages: 10,
		showPrevNext: true,
		showFirstLast: true,
	},
};

export const Tabs: Story = {
	args: {
		kind: 'tabs',
		items: sampleTabs,
		activeId: 'overview',
		variant: 'primary',
	},
};

export const SegmentedControls: Story = {
	args: {
		kind: 'segmented-controls',
		items: [
			{ id: 'list', label: 'List', active: true },
			{ id: 'grid', label: 'Grid' },
			{ id: 'card', label: 'Card' },
		],
		activeId: 'list',
	},
};

export const BackNavigation: Story = {
	args: {
		kind: 'back-navigation',
		items: [
			{
				id: 'back',
				label: 'Back to Products',
				path: '/products',
			},
		],
		activeId: 'back',
	},
};

export const StepNavigation: Story = {
	args: {
		kind: 'step-navigation',
		items: [
			{ id: 'account', label: 'Account', active: true },
			{ id: 'shipping', label: 'Shipping' },
			{ id: 'payment', label: 'Payment' },
			{ id: 'review', label: 'Review' },
		],
		activeId: 'shipping',
		showProgress: true,
	},
};

export const AllVariants: Story = {
	render: () => (
		<Wrapper direction='column' gap={8}>
			<Wrapper>
				<h3>Default Navbar</h3>
				<Navigation
					kind='navbar'
					items={sampleItems}
					variant='primary'
				/>
			</Wrapper>
			<Wrapper>
				<h3>Minimal Navbar</h3>
				<Navigation
					kind='navbar'
					items={sampleItems}
					variant='minimal'
				/>
			</Wrapper>
			<Wrapper>
				<h3>Mobile Navbar</h3>
				<Navigation
					kind='mobile-nav'
					items={sampleItems}
					variant='mobile-optimized'
				/>
			</Wrapper>
		</Wrapper>
	),
};

export const ResponsiveNavigation: Story = {
	args: {
		kind: 'navbar',
		items: sampleItems,
		responsive: true,
	},
};

export const NavigationWithIcons: Story = {
	args: {
		kind: 'navbar',
		items: [
			{
				id: 'home',
				label: 'Home',
				path: '/',
				icon: '🏠',
				active: true,
			},
			{
				id: 'products',
				label: 'Products',
				path: '/products',
				icon: '📦',
			},
			{
				id: 'about',
				label: 'About',
				path: '/about',
				icon: 'ℹ️',
			},
			{
				id: 'contact',
				label: 'Contact',
				path: '/contact',
				icon: '📞',
			},
		],
	},
};

meta.argTypes = {
	kind: {
		control: 'select',
		options: [
			'navbar',
			'mobile-nav',
			'hamburger-menu',
			'side-drawer',
			'breadcrumbs',
			'pagination',
			'tabs',
			'segmented-controls',
			'back-navigation',
			'step-navigation',
			'filter-navigation',
			'quick-navigation',
		],
		description: 'The kind of navigation to render.',
	},
	variant: {
		control: 'text',
		description:
			'Navigation variant (primary, minimal, etc.)',
	},
	layout: {
		control: 'text',
		description:
			'Layout direction (horizontal, vertical, etc.)',
	},
	position: {
		control: 'text',
		description: 'Position (top, left, etc.)',
	},
	showIcons: {
		control: 'boolean',
		description: 'Show icons in navigation items',
	},
	showLabels: {
		control: 'boolean',
		description: 'Show labels in navigation items',
	},
	showBadges: {
		control: 'boolean',
		description: 'Show badges in navigation items',
	},
	highlightActive: {
		control: 'boolean',
		description: 'Highlight the active item',
	},
	responsive: {
		control: 'boolean',
		description:
			'Responsive mode (switches to mobile at breakpoint)',
	},
	collapseOnMobile: {
		control: 'boolean',
		description: 'Collapse navigation on mobile',
	},
	closeOnSelect: {
		control: 'boolean',
		description:
			'Close navigation on item select (for drawers/menus)',
	},
	allowMultiSelect: {
		control: 'boolean',
		description: 'Allow multiple items to be selected',
	},
	persistState: {
		control: 'boolean',
		description:
			'Persist open/close state (for drawers/menus)',
	},
	animationDuration: {
		control: 'number',
		description: 'Animation duration (ms)',
	},
	enableKeyboardNav: {
		control: 'boolean',
		description: 'Enable keyboard navigation',
	},
	enableSwipeGestures: {
		control: 'boolean',
		description: 'Enable swipe gestures (for mobile nav)',
	},
	ariaLabel: {
		control: 'text',
		description: 'ARIA label for accessibility',
	},
	role: {
		control: 'text',
		description: 'ARIA role for accessibility',
	},
	totalPages: {
		control: 'number',
		description: 'Total number of pages (for pagination)',
	},
	currentPage: {
		control: 'number',
		description: 'Current page (for pagination)',
	},
	showPrevNext: {
		control: 'boolean',
		description:
			'Show previous/next buttons (for pagination)',
	},
	showFirstLast: {
		control: 'boolean',
		description: 'Show first/last buttons (for pagination)',
	},
	activeTab: {
		control: 'text',
		description:
			'Active tab id (for tabs/segmented controls)',
	},
	isOpen: {
		control: 'boolean',
		description: 'Is the drawer/menu open?',
	},
	collapsible: {
		control: 'boolean',
		description: 'Is the drawer/menu collapsible?',
	},
	defaultCollapsed: {
		control: 'boolean',
		description: 'Default collapsed state',
	},
	separator: {
		control: 'text',
		description: 'Separator string for breadcrumbs',
	},
	currentStep: {
		control: 'number',
		description: 'Current step index (1-based)',
	},
	showProgress: {
		control: 'boolean',
		description: 'Show progress bar for steps',
	},
	allowSkip: {
		control: 'boolean',
		description: 'Allow skipping steps',
	},
};
