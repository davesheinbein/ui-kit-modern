import { ReactNode } from 'react';
import styles from './Header.module.scss';

// Header variant types
export type HeaderVariant =
	| 'browse'
	| 'dashboard'
	| 'modal'
	| 'page'
	| 'sidebar'
	| 'navigation'
	| 'simple'
	| 'custom';

// Tab configuration interface
export interface TabConfiguration {
	label: string;
	value: string;
	disabled?: boolean;
	icon?: ReactNode;
	badge?: string | number;
}

// Action configuration interface
export interface ActionConfiguration {
	type: 'back' | 'close' | 'menu' | 'custom';
	icon?: ReactNode;
	label?: string;
	handler: () => void;
	className?: string;
}

// Enhanced header configuration interface
export interface HeaderConfiguration {
	variant: HeaderVariant;
	layout?:
		| 'left-aligned'
		| 'center-aligned'
		| 'space-between'
		| 'custom';

	// Title configuration
	showTitle?: boolean;
	titleSize?: 'small' | 'medium' | 'large' | 'xlarge';
	titleWeight?: 'normal' | 'medium' | 'bold';

	// Tabs configuration
	showTabs?: boolean;
	tabsPosition?:
		| 'below-title'
		| 'beside-title'
		| 'separate-row';
	tabsAlign?: 'left' | 'center' | 'right';

	// Actions configuration
	showActions?: boolean;
	actionsPosition?: 'left' | 'right' | 'both';

	// Styling
	className?: string;
	padding?: 'none' | 'small' | 'medium' | 'large';
	borderBottom?: boolean;
	background?:
		| 'transparent'
		| 'primary'
		| 'secondary'
		| 'custom';

	// Behavior
	sticky?: boolean;
	collapsible?: boolean;
	responsive?: boolean;
}

// Comprehensive header kind definitions
export type ExtendedHeaderKind =
	| 'browse'
	| 'browse-tabbed'
	| 'dashboard'
	| 'dashboard-simple'
	| 'modal'
	| 'modal-close-only'
	| 'page'
	| 'page-with-nav'
	| 'sidebar'
	| 'navigation'
	| 'simple'
	| 'simple-centered'
	| 'game-header'
	| 'settings-header'
	| 'profile-header'
	| 'custom';

// Predefined configurations for maximum DRYness
export const HEADER_CONFIGURATIONS: Record<
	ExtendedHeaderKind,
	HeaderConfiguration
> = {
	// Browse headers
	'browse': {
		variant: 'browse',
		layout: 'left-aligned',
		showTitle: true,
		titleSize: 'large',
		titleWeight: 'bold',
		showTabs: false,
		showActions: true,
		actionsPosition: 'left',
		className: styles.browseHeader,
		padding: 'medium',
		borderBottom: false,
		background: 'transparent',
		responsive: true,
	},
	'browse-tabbed': {
		variant: 'browse',
		layout: 'left-aligned',
		showTitle: true,
		titleSize: 'large',
		titleWeight: 'bold',
		showTabs: true,
		tabsPosition: 'below-title',
		tabsAlign: 'left',
		showActions: true,
		actionsPosition: 'left',
		className: styles.browseTabbedHeader,
		padding: 'medium',
		borderBottom: false,
		background: 'transparent',
		responsive: true,
	},

	// Dashboard headers
	'dashboard': {
		variant: 'dashboard',
		layout: 'space-between',
		showTitle: true,
		titleSize: 'large',
		titleWeight: 'bold',
		showTabs: false,
		showActions: true,
		actionsPosition: 'right',
		className: styles.dashboardHeader,
		padding: 'medium',
		borderBottom: true,
		background: 'transparent',
		sticky: true,
		responsive: true,
	},
	'dashboard-simple': {
		variant: 'dashboard',
		layout: 'left-aligned',
		showTitle: true,
		titleSize: 'medium',
		titleWeight: 'bold',
		showTabs: false,
		showActions: false,
		className: styles.dashboardSimpleHeader,
		padding: 'small',
		borderBottom: false,
		background: 'transparent',
		responsive: true,
	},

	// Modal headers
	'modal': {
		variant: 'modal',
		layout: 'space-between',
		showTitle: true,
		titleSize: 'medium',
		titleWeight: 'bold',
		showTabs: false,
		showActions: true,
		actionsPosition: 'right',
		className: styles.modalHeader,
		padding: 'medium',
		borderBottom: true,
		background: 'transparent',
		responsive: false,
	},
	'modal-close-only': {
		variant: 'modal',
		layout: 'space-between',
		showTitle: false,
		showTabs: false,
		showActions: true,
		actionsPosition: 'right',
		className: styles.modalCloseOnlyHeader,
		padding: 'small',
		borderBottom: false,
		background: 'transparent',
		responsive: false,
	},

	// Page headers
	'page': {
		variant: 'page',
		layout: 'left-aligned',
		showTitle: true,
		titleSize: 'xlarge',
		titleWeight: 'bold',
		showTabs: false,
		showActions: false,
		className: styles.pageHeader,
		padding: 'large',
		borderBottom: false,
		background: 'transparent',
		responsive: true,
	},
	'page-with-nav': {
		variant: 'page',
		layout: 'space-between',
		showTitle: true,
		titleSize: 'large',
		titleWeight: 'bold',
		showTabs: false,
		showActions: true,
		actionsPosition: 'both',
		className: styles.pageWithNavHeader,
		padding: 'medium',
		borderBottom: true,
		background: 'transparent',
		sticky: true,
		responsive: true,
	},

	// Sidebar headers
	'sidebar': {
		variant: 'sidebar',
		layout: 'space-between',
		showTitle: true,
		titleSize: 'medium',
		titleWeight: 'bold',
		showTabs: false,
		showActions: true,
		actionsPosition: 'right',
		className: styles.sidebarHeader,
		padding: 'medium',
		borderBottom: true,
		background: 'secondary',
		responsive: false,
	},

	// Navigation headers
	'navigation': {
		variant: 'navigation',
		layout: 'space-between',
		showTitle: true,
		titleSize: 'medium',
		titleWeight: 'bold',
		showTabs: true,
		tabsPosition: 'beside-title',
		tabsAlign: 'center',
		showActions: true,
		actionsPosition: 'both',
		className: styles.navigationHeader,
		padding: 'medium',
		borderBottom: true,
		background: 'primary',
		sticky: true,
		responsive: true,
	},

	// Simple headers
	'simple': {
		variant: 'simple',
		layout: 'left-aligned',
		showTitle: true,
		titleSize: 'medium',
		titleWeight: 'normal',
		showTabs: false,
		showActions: false,
		className: styles.simpleHeader,
		padding: 'small',
		borderBottom: false,
		background: 'transparent',
		responsive: true,
	},
	'simple-centered': {
		variant: 'simple',
		layout: 'center-aligned',
		showTitle: true,
		titleSize: 'medium',
		titleWeight: 'normal',
		showTabs: false,
		showActions: false,
		className: styles.simpleCenteredHeader,
		padding: 'small',
		borderBottom: false,
		background: 'transparent',
		responsive: true,
	},

	// Specific use case headers
	'game-header': {
		variant: 'custom',
		layout: 'space-between',
		showTitle: true,
		titleSize: 'medium',
		titleWeight: 'bold',
		showTabs: false,
		showActions: true,
		actionsPosition: 'both',
		className: styles.gameHeader,
		padding: 'small',
		borderBottom: false,
		background: 'transparent',
		responsive: true,
	},
	'settings-header': {
		variant: 'custom',
		layout: 'left-aligned',
		showTitle: true,
		titleSize: 'large',
		titleWeight: 'bold',
		showTabs: true,
		tabsPosition: 'below-title',
		tabsAlign: 'left',
		showActions: true,
		actionsPosition: 'left',
		className: styles.settingsHeader,
		padding: 'medium',
		borderBottom: true,
		background: 'transparent',
		responsive: true,
	},
	'profile-header': {
		variant: 'custom',
		layout: 'space-between',
		showTitle: true,
		titleSize: 'large',
		titleWeight: 'bold',
		showTabs: false,
		showActions: true,
		actionsPosition: 'right',
		className: styles.profileHeader,
		padding: 'medium',
		borderBottom: true,
		background: 'transparent',
		responsive: true,
	},

	// Custom fallback
	'custom': {
		variant: 'custom',
		layout: 'left-aligned',
		showTitle: true,
		titleSize: 'medium',
		titleWeight: 'normal',
		showTabs: false,
		showActions: false,
		className: '',
		padding: 'medium',
		borderBottom: false,
		background: 'transparent',
		responsive: true,
	},
};

// Header groups for common use cases
export const HEADER_GROUPS = {
	MODAL_HEADERS: {
		'standard': {
			kind: 'modal' as ExtendedHeaderKind,
			props: {},
		},
		'close-only': {
			kind: 'modal-close-only' as ExtendedHeaderKind,
			props: {},
		},
	},
	BROWSE_HEADERS: {
		'simple': {
			kind: 'browse' as ExtendedHeaderKind,
			props: {},
		},
		'with-tabs': {
			kind: 'browse-tabbed' as ExtendedHeaderKind,
			props: {},
		},
	},
	DASHBOARD_HEADERS: {
		full: {
			kind: 'dashboard' as ExtendedHeaderKind,
			props: {},
		},
		simple: {
			kind: 'dashboard-simple' as ExtendedHeaderKind,
			props: {},
		},
	},
} as const;

// Quick header presets
export const QUICK_HEADERS = {
	// Quick modal headers
	MODAL_WITH_TITLE: (
		title: string,
		onClose: () => void
	) => ({
		kind: 'modal' as ExtendedHeaderKind,
		title,
		actions: [{ type: 'close' as const, handler: onClose }],
	}),
	MODAL_CLOSE_ONLY: (onClose: () => void) => ({
		kind: 'modal-close-only' as ExtendedHeaderKind,
		actions: [{ type: 'close' as const, handler: onClose }],
	}),

	// Quick browse headers
	BROWSE_WITH_BACK: (
		title: string,
		onBack: () => void
	) => ({
		kind: 'browse' as ExtendedHeaderKind,
		title,
		actions: [{ type: 'back' as const, handler: onBack }],
	}),
	BROWSE_WITH_TABS: (
		title: string,
		tabs: TabConfiguration[],
		currentTab: string,
		onTabChange: (tab: string) => void,
		onBack: () => void
	) => ({
		kind: 'browse-tabbed' as ExtendedHeaderKind,
		title,
		tabs,
		currentTab,
		onTabChange,
		actions: [{ type: 'back' as const, handler: onBack }],
	}),

	// Quick page headers
	PAGE_SIMPLE: (title: string) => ({
		kind: 'page' as ExtendedHeaderKind,
		title,
	}),
	PAGE_WITH_BACK: (title: string, onBack: () => void) => ({
		kind: 'page-with-nav' as ExtendedHeaderKind,
		title,
		actions: [{ type: 'back' as const, handler: onBack }],
	}),
} as const;

/**
 * Utility function to create header configurations with overrides
 */
export function createHeaderConfig(
	kind: ExtendedHeaderKind,
	overrides: Partial<HeaderConfiguration> = {}
): HeaderConfiguration {
	return {
		...HEADER_CONFIGURATIONS[kind],
		...overrides,
	};
}

/**
 * Utility function to merge action configurations
 */
export function mergeActions(
	baseActions: ActionConfiguration[],
	additionalActions: ActionConfiguration[]
): ActionConfiguration[] {
	return [...baseActions, ...additionalActions];
}
