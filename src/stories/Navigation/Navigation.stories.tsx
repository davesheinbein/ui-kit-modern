import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from '../../components/Navigation';
import { Wrapper } from '../../components/Wrappers';

const meta: Meta<typeof Navigation> = {
	title: 'Navigation/Navigation',
	component: Navigation,
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
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
			description: 'Navigation component type',
		},
		layout: {
			control: 'select',
			options: ['horizontal', 'vertical', 'responsive'],
			description: 'Navigation layout',
		},
		variant: {
			control: 'select',
			options: [
				'default',
				'minimal',
				'filled',
				'outlined',
				'glass',
				'floating',
			],
			description: 'Navigation variant/style',
		},
		items: {
			control: 'object',
			description: 'Navigation items array',
		},
		currentPath: {
			control: 'text',
			description: 'Current active path',
		},
		responsive: {
			control: 'boolean',
			description: 'Enable responsive behavior',
		},
		mobileBreakpoint: {
			control: {
				type: 'range',
				min: 320,
				max: 1024,
				step: 16,
			},
			description: 'Mobile breakpoint (px)',
		},
		closeOnSelect: {
			control: 'boolean',
			description: 'Close navigation on item select',
		},
		showIcons: {
			control: 'boolean',
			description: 'Show navigation icons',
		},
		showLabels: {
			control: 'boolean',
			description: 'Show navigation labels',
		},
		showBadges: {
			control: 'boolean',
			description: 'Show notification badges',
		},
		totalPages: {
			control: { type: 'range', min: 1, max: 20, step: 1 },
			description: 'Total pages (for pagination)',
		},
		currentPage: {
			control: { type: 'range', min: 1, max: 20, step: 1 },
			description: 'Current page (for pagination)',
		},
		activeTab: {
			control: 'text',
			description: 'Active tab ID (for tabs)',
		},
		isOpen: {
			control: 'boolean',
			description: 'Drawer open state (for drawers)',
		},
		stickyTop: {
			control: 'boolean',
			description: 'Stick to top of viewport',
		},
		animated: {
			control: 'boolean',
			description: 'Enable animations',
		},
		shadow: {
			control: 'boolean',
			description: 'Show shadow/elevation',
		},
		border: {
			control: 'boolean',
			description: 'Show border',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample navigation items for stories
const sampleItems = [
	{ label: 'Home', href: '/', active: true },
	{ label: 'Products', href: '/products' },
	{ label: 'About', href: '/about' },
	{ label: 'Contact', href: '/contact' },
];

const sampleBreadcrumbs = [
	{ label: 'Home', href: '/' },
	{ label: 'Category', href: '/category' },
	{ label: 'Product', href: '/product' },
	{ label: 'Details' }, // Current page
];

const sampleTabs = [
	{ label: 'Overview', value: 'overview', active: true },
	{ label: 'Specifications', value: 'specs' },
	{ label: 'Reviews', value: 'reviews' },
	{ label: 'Support', value: 'support' },
];

// ========================================
// Basic Navigation Stories
// ========================================

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
		variant: 'default',
		layout: 'horizontal',
	},
};

export const MobileNav: Story = {
	args: {
		kind: 'mobile-nav',
		items: sampleItems,
		variant: 'filled',
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
		variant: 'default',
	},
};

export const SegmentedControls: Story = {
	args: {
		kind: 'segmented-controls',
		items: [
			{ label: 'List', value: 'list', active: true },
			{ label: 'Grid', value: 'grid' },
			{ label: 'Card', value: 'card' },
		],
	},
};

export const BackNavigation: Story = {
	args: {
		kind: 'back-navigation',
		backText: 'Back to Products',
		backHref: '/products',
	},
};

export const StepNavigation: Story = {
	args: {
		kind: 'step-navigation',
		steps: [
			{ label: 'Account', completed: true },
			{ label: 'Shipping', current: true },
			{ label: 'Payment' },
			{ label: 'Review' },
		],
		currentStep: 2,
		showProgress: true,
	},
};

export const AllVariants: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
			}}
		>
			<Wrapper>
				<h3>Default Navbar</h3>
				<Navigation
					kind='navbar'
					items={sampleItems}
					variant='default'
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
				<h3>Filled Navbar</h3>
				<Navigation
					kind='navbar'
					items={sampleItems}
					variant='filled'
				/>
			</Wrapper>
			<Wrapper>
				<h3>Outlined Navbar</h3>
				<Navigation
					kind='navbar'
					items={sampleItems}
					variant='outlined'
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
		mobileBreakpoint: 768,
		logo: 'UI Kit',
	},
};

export const NavigationWithIcons: Story = {
	args: {
		kind: 'navbar',
		items: [
			{
				label: 'Home',
				href: '/',
				icon: '🏠',
				active: true,
			},
			{ label: 'Products', href: '/products', icon: '📦' },
			{ label: 'About', href: '/about', icon: 'ℹ️' },
			{ label: 'Contact', href: '/contact', icon: '📞' },
		],
	},
};
