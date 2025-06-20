/**
 * NavigationConfigurations.ts - DRY Navigation Configuration System
 *
 * This file provides comprehensive configuration for all navigation component types
 * including navbar, mobile nav, breadcrumbs, pagination, tabs, and side drawers.
 */

// ========================================
// Core Types and Interfaces
// ========================================

export type NavigationKind =
	// Primary Navigation
	| 'navbar'
	| 'mobile-nav'
	| 'hamburger-menu'
	| 'side-drawer'

	// Secondary Navigation
	| 'breadcrumbs'
	| 'pagination'
	| 'tabs'
	| 'segmented-controls'

	// Utility Navigation
	| 'back-navigation'
	| 'step-navigation'
	| 'filter-navigation'
	| 'quick-navigation';

export type NavigationVariant =
	| 'primary'
	| 'secondary'
	| 'minimal'
	| 'detailed'
	| 'mobile-optimized'
	| 'desktop-only'
	| 'responsive'
	| 'overlay'
	| 'embedded'
	| 'floating';

export type NavigationLayout =
	| 'horizontal'
	| 'vertical'
	| 'stacked'
	| 'inline'
	| 'overlay'
	| 'sidebar';

export type NavigationPosition =
	| 'top'
	| 'bottom'
	| 'left'
	| 'right'
	| 'center'
	| 'fixed'
	| 'sticky'
	| 'relative';

// ========================================
// Configuration Interface
// ========================================

export interface NavigationConfiguration {
	kind: NavigationKind;
	variant: NavigationVariant;
	layout: NavigationLayout;
	position?: NavigationPosition;

	// Navigation Properties
	items?: NavigationItem[];
	currentPath?: string;
	onNavigate?: (path: string, item: NavigationItem) => void;

	// Responsive Behavior
	responsive?: boolean;
	mobileBreakpoint?: number;
	collapseOnMobile?: boolean;

	// Visual Properties
	showIcons?: boolean;
	showLabels?: boolean;
	showBadges?: boolean;
	highlightActive?: boolean;

	// Interaction
	allowMultiSelect?: boolean;
	closeOnSelect?: boolean;
	persistState?: boolean;

	// Styling
	className?: string;
	itemClassName?: string;
	activeClassName?: string;
	disabledClassName?: string;

	// Accessibility
	ariaLabel?: string;
	role?: string;

	// Behavior
	animationDuration?: number;
	enableKeyboardNav?: boolean;
	enableSwipeGestures?: boolean;

	// Documentation
	description?: string;
	examples?: string[];
}

export interface NavigationItem {
	id: string;
	label: string;
	path?: string;
	icon?: React.ReactNode;
	badge?: string | number;
	disabled?: boolean;
	active?: boolean;
	children?: NavigationItem[];
	onClick?: (item: NavigationItem) => void;

	// Custom properties
	[key: string]: any;
}

// ========================================
// Navigation Configurations
// ========================================

const navbar: NavigationConfiguration = {
	kind: 'navbar',
	variant: 'primary',
	layout: 'horizontal',
	position: 'top',
	responsive: true,
	showIcons: true,
	showLabels: true,
	highlightActive: true,
	enableKeyboardNav: true,
	description:
		'Primary navigation bar for application header',
};

const mobileNav: NavigationConfiguration = {
	kind: 'mobile-nav',
	variant: 'mobile-optimized',
	layout: 'vertical',
	position: 'bottom',
	responsive: true,
	showIcons: true,
	showLabels: false,
	closeOnSelect: true,
	enableSwipeGestures: true,
	description:
		'Mobile-optimized navigation for bottom tab bar',
};

const hamburgerMenu: NavigationConfiguration = {
	kind: 'hamburger-menu',
	variant: 'overlay',
	layout: 'vertical',
	position: 'left',
	responsive: true,
	showIcons: true,
	showLabels: true,
	closeOnSelect: true,
	animationDuration: 300,
	description:
		'Hamburger menu for mobile navigation overlay',
};

const sideDrawer: NavigationConfiguration = {
	kind: 'side-drawer',
	variant: 'embedded',
	layout: 'vertical',
	position: 'left',
	showIcons: true,
	showLabels: true,
	persistState: true,
	enableKeyboardNav: true,
	description:
		'Side drawer navigation for desktop and tablet',
};

const breadcrumbs: NavigationConfiguration = {
	kind: 'breadcrumbs',
	variant: 'minimal',
	layout: 'horizontal',
	position: 'top',
	showIcons: false,
	showLabels: true,
	highlightActive: true,
	description:
		'Breadcrumb navigation showing current page hierarchy',
};

const pagination: NavigationConfiguration = {
	kind: 'pagination',
	variant: 'detailed',
	layout: 'horizontal',
	position: 'center',
	showIcons: true,
	showLabels: true,
	enableKeyboardNav: true,
	description:
		'Pagination controls for data tables and lists',
};

const tabs: NavigationConfiguration = {
	kind: 'tabs',
	variant: 'primary',
	layout: 'horizontal',
	position: 'top',
	showIcons: false,
	showLabels: true,
	highlightActive: true,
	enableKeyboardNav: true,
	description: 'Tab navigation for content sections',
};

const segmentedControls: NavigationConfiguration = {
	kind: 'segmented-controls',
	variant: 'secondary',
	layout: 'horizontal',
	position: 'center',
	showIcons: false,
	showLabels: true,
	highlightActive: true,
	description: 'Segmented controls for option selection',
};

const backNavigation: NavigationConfiguration = {
	kind: 'back-navigation',
	variant: 'minimal',
	layout: 'horizontal',
	position: 'left',
	showIcons: true,
	showLabels: true,
	description:
		'Back navigation button for page transitions',
};

const stepNavigation: NavigationConfiguration = {
	kind: 'step-navigation',
	variant: 'detailed',
	layout: 'horizontal',
	position: 'top',
	showIcons: true,
	showLabels: true,
	highlightActive: true,
	description:
		'Step-by-step navigation for multi-step processes',
};

const filterNavigation: NavigationConfiguration = {
	kind: 'filter-navigation',
	variant: 'secondary',
	layout: 'horizontal',
	position: 'top',
	showIcons: false,
	showLabels: true,
	allowMultiSelect: true,
	description: 'Filter navigation for data filtering',
};

const quickNavigation: NavigationConfiguration = {
	kind: 'quick-navigation',
	variant: 'floating',
	layout: 'vertical',
	position: 'right',
	showIcons: true,
	showLabels: false,
	description:
		'Quick navigation for frequently used actions',
};

// ========================================
// Configuration Registry
// ========================================

export const NAVIGATION_CONFIGURATIONS: Record<
	NavigationKind,
	NavigationConfiguration
> = {
	// Primary Navigation
	'navbar': navbar,
	'mobile-nav': mobileNav,
	'hamburger-menu': hamburgerMenu,
	'side-drawer': sideDrawer,

	// Secondary Navigation
	'breadcrumbs': breadcrumbs,
	'pagination': pagination,
	'tabs': tabs,
	'segmented-controls': segmentedControls,

	// Utility Navigation
	'back-navigation': backNavigation,
	'step-navigation': stepNavigation,
	'filter-navigation': filterNavigation,
	'quick-navigation': quickNavigation,
};

// ========================================
// Utility Functions
// ========================================

/**
 * Get navigation configuration by kind
 */
export function getNavigationConfig(
	kind: NavigationKind
): NavigationConfiguration {
	return NAVIGATION_CONFIGURATIONS[kind];
}

/**
 * Check if a navigation kind exists
 */
export function isNavigationKind(
	kind: string
): kind is NavigationKind {
	return kind in NAVIGATION_CONFIGURATIONS;
}

/**
 * Get navigation configurations by variant
 */
export function getNavigationsByVariant(
	variant: NavigationVariant
): NavigationConfiguration[] {
	return Object.values(NAVIGATION_CONFIGURATIONS).filter(
		(config) => config.variant === variant
	);
}

/**
 * Get navigation configurations by layout
 */
export function getNavigationsByLayout(
	layout: NavigationLayout
): NavigationConfiguration[] {
	return Object.values(NAVIGATION_CONFIGURATIONS).filter(
		(config) => config.layout === layout
	);
}

/**
 * Create custom navigation configuration
 */
export function createNavigationConfig(
	baseKind: NavigationKind,
	overrides: Partial<NavigationConfiguration>
): NavigationConfiguration {
	const baseConfig = getNavigationConfig(baseKind);
	return { ...baseConfig, ...overrides };
}

/**
 * Navigation presets for common use cases
 */
export const NAVIGATION_PRESETS = {
	// App Navigation
	primaryApp: () =>
		createNavigationConfig('navbar', {
			variant: 'primary',
			showIcons: true,
			showLabels: true,
			responsive: true,
		}),

	mobileApp: () =>
		createNavigationConfig('mobile-nav', {
			variant: 'mobile-optimized',
			position: 'bottom',
			showIcons: true,
			showLabels: false,
		}),

	// Content Navigation
	contentTabs: () =>
		createNavigationConfig('tabs', {
			variant: 'primary',
			showIcons: false,
			showLabels: true,
		}),

	// Data Navigation
	tablePagination: () =>
		createNavigationConfig('pagination', {
			variant: 'detailed',
			enableKeyboardNav: true,
		}),

	// Quick Actions
	floatingNav: () =>
		createNavigationConfig('quick-navigation', {
			variant: 'floating',
			position: 'right',
			showIcons: true,
			showLabels: false,
		}),
};

/**
 * Quick navigation builders
 */
export const QUICK_NAVIGATION = {
	navbar: (items: NavigationItem[]) =>
		createNavigationConfig('navbar', { items }),
	tabs: (items: NavigationItem[]) =>
		createNavigationConfig('tabs', { items }),
	breadcrumbs: (items: NavigationItem[]) =>
		createNavigationConfig('breadcrumbs', { items }),
	pagination: (totalPages: number, currentPage: number) =>
		createNavigationConfig('pagination', {
			items: generatePaginationItems(
				totalPages,
				currentPage
			),
		}),
};

/**
 * Helper function to generate pagination items
 */
function generatePaginationItems(
	totalPages: number,
	currentPage: number
): NavigationItem[] {
	const items: NavigationItem[] = [];

	// Previous button
	items.push({
		id: 'prev',
		label: 'Previous',
		disabled: currentPage <= 1,
		path: `page-${currentPage - 1}`,
	});

	// Page numbers
	for (let i = 1; i <= totalPages; i++) {
		items.push({
			id: `page-${i}`,
			label: i.toString(),
			active: i === currentPage,
			path: `page-${i}`,
		});
	}

	// Next button
	items.push({
		id: 'next',
		label: 'Next',
		disabled: currentPage >= totalPages,
		path: `page-${currentPage + 1}`,
	});

	return items;
}
