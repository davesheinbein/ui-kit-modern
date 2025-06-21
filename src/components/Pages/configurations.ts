/**
 * Page Configurations - Configuration-driven page types and variants
 *
 * This system allows creating different page types using a single unified component,
 * following the DRY principle and similar to the Button configurations system.
 */

export type PageVariant =
	| 'default'
	| 'centered'
	| 'full-height'
	| 'dashboard'
	| 'landing'
	| 'custom';

export type PageLayout =
	| 'standard'
	| 'centered'
	| 'sidebar'
	| 'split'
	| 'grid'
	| 'custom';

export type PageSize =
	| 'compact'
	| 'medium'
	| 'large'
	| 'full'
	| 'custom';

export type ExtendedPageKind =
	| 'startup'
	| 'landing'
	| 'dashboard'
	| 'settings'
	| 'profile'
	| 'game'
	| 'browse'
	| 'results'
	| 'about'
	| 'help'
	| 'custom';

export interface PageConfiguration {
	kind: ExtendedPageKind;
	variant: PageVariant;
	layout: PageLayout;
	size: PageSize;
	className?: string;
	showHeader?: boolean;
	showFooter?: boolean;
	showNavigation?: boolean;
	centered?: boolean;
	fullHeight?: boolean;
	padding?: string;
	background?: string;
	containerMaxWidth?: string;
	[key: string]: any;
}

// Pre-configured page types for common use cases
export const PAGE_CONFIGURATIONS: Record<
	ExtendedPageKind,
	PageConfiguration
> = {
	startup: {
		kind: 'startup',
		variant: 'landing',
		layout: 'centered',
		size: 'full',
		showHeader: false,
		showFooter: false,
		showNavigation: false,
		centered: true,
		fullHeight: true,
		padding: '32px',
		background: 'default',
		containerMaxWidth: '100%',
	},
	landing: {
		kind: 'landing',
		variant: 'landing',
		layout: 'centered',
		size: 'large',
		showHeader: true,
		showFooter: true,
		showNavigation: false,
		centered: true,
		fullHeight: false,
		padding: '24px',
		background: 'default',
		containerMaxWidth: '1200px',
	},
	dashboard: {
		kind: 'dashboard',
		variant: 'dashboard',
		layout: 'grid',
		size: 'full',
		showHeader: true,
		showFooter: false,
		showNavigation: true,
		centered: false,
		fullHeight: true,
		padding: '16px',
		background: 'light',
		containerMaxWidth: '100%',
	},
	settings: {
		kind: 'settings',
		variant: 'default',
		layout: 'standard',
		size: 'medium',
		showHeader: true,
		showFooter: true,
		showNavigation: true,
		centered: false,
		fullHeight: false,
		padding: '24px',
		background: 'default',
		containerMaxWidth: '800px',
	},
	profile: {
		kind: 'profile',
		variant: 'default',
		layout: 'standard',
		size: 'medium',
		showHeader: true,
		showFooter: true,
		showNavigation: true,
		centered: false,
		fullHeight: false,
		padding: '24px',
		background: 'default',
		containerMaxWidth: '600px',
	},
	game: {
		kind: 'game',
		variant: 'full-height',
		layout: 'centered',
		size: 'full',
		showHeader: false,
		showFooter: false,
		showNavigation: false,
		centered: true,
		fullHeight: true,
		padding: '16px',
		background: 'game',
		containerMaxWidth: '100%',
	},
	browse: {
		kind: 'browse',
		variant: 'default',
		layout: 'standard',
		size: 'large',
		showHeader: true,
		showFooter: true,
		showNavigation: true,
		centered: false,
		fullHeight: false,
		padding: '24px',
		background: 'default',
		containerMaxWidth: '1200px',
	},
	results: {
		kind: 'results',
		variant: 'centered',
		layout: 'centered',
		size: 'medium',
		showHeader: true,
		showFooter: true,
		showNavigation: false,
		centered: true,
		fullHeight: false,
		padding: '32px',
		background: 'light',
		containerMaxWidth: '800px',
	},
	about: {
		kind: 'about',
		variant: 'default',
		layout: 'standard',
		size: 'medium',
		showHeader: true,
		showFooter: true,
		showNavigation: true,
		centered: false,
		fullHeight: false,
		padding: '24px',
		background: 'default',
		containerMaxWidth: '800px',
	},
	help: {
		kind: 'help',
		variant: 'default',
		layout: 'standard',
		size: 'medium',
		showHeader: true,
		showFooter: true,
		showNavigation: true,
		centered: false,
		fullHeight: false,
		padding: '24px',
		background: 'default',
		containerMaxWidth: '800px',
	},
	custom: {
		kind: 'custom',
		variant: 'custom',
		layout: 'custom',
		size: 'custom',
		showHeader: false,
		showFooter: false,
		showNavigation: false,
		centered: false,
		fullHeight: false,
		padding: '0',
		background: 'transparent',
		containerMaxWidth: 'none',
	},
};

// Utility function to get page configuration
export const getPageConfiguration = (
	kind: ExtendedPageKind
): PageConfiguration => {
	return (
		PAGE_CONFIGURATIONS[kind] || PAGE_CONFIGURATIONS.custom
	);
};

// Utility function to create custom page configuration
export const createPageConfig = (
	base: ExtendedPageKind,
	overrides: Partial<PageConfiguration>
): PageConfiguration => {
	return {
		...getPageConfiguration(base),
		...overrides,
	};
};
