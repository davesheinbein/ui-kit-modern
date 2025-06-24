import React, { forwardRef, memo } from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Navigation.module.scss';
import {
	NavigationKind,
	NavigationConfiguration,
	NavigationItem,
	getNavigationConfig,
} from './configurations';

// =============================================================================
// NAVIGATION PROPS
// =============================================================================

export interface NavigationProps {
	kind: NavigationKind;
	componentId?: string; // For identifying this navigation instance in Redux
	children?: React.ReactNode;
	className?: string;

	// Navigation-specific props
	items?: NavigationItem[];
	currentPath?: string;
	onNavigate?: (path: string, item: NavigationItem) => void;

	// Configuration overrides
	configuration?: Partial<NavigationConfiguration>;

	// Behavior props
	responsive?: boolean;
	mobileBreakpoint?: number;
	closeOnSelect?: boolean;

	// Visual props
	showIcons?: boolean;
	showLabels?: boolean;
	showBadges?: boolean;

	// Pagination specific
	totalPages?: number;
	currentPage?: number;
	onPageChange?: (page: number) => void;

	// Tabs specific
	activeTab?: string;
	onTabChange?: (tabId: string) => void;

	// Drawer specific
	isOpen?: boolean;
	onToggle?: (isOpen: boolean) => void;

	// Target component props (will be passed through)
	[key: string]: any;
}

// =============================================================================
// MAIN NAVIGATION COMPONENT
// =============================================================================

const Navigation = forwardRef<any, NavigationProps>(
	(
		{
			kind,
			componentId,
			children,
			className,
			items = [],
			currentPath,
			onNavigate,
			configuration: configOverrides,
			responsive,
			mobileBreakpoint,
			closeOnSelect,
			showIcons,
			showLabels,
			showBadges,
			totalPages,
			currentPage = 1,
			onPageChange,
			activeTab,
			onTabChange,
			isOpen = false,
			onToggle,
			...props
		},
		ref
	) => {
		// Get navigation configuration
		const baseConfig = getNavigationConfig(kind);
		const config =
			configOverrides ?
				{ ...baseConfig, ...configOverrides }
			:	baseConfig;

		// Build className
		const navigationClasses = [
			styles.Navigation,
			styles[`navigation--${config.variant}`],
			styles[`navigation--${config.layout}`],
			config.position &&
				styles[`navigation--${config.position}`],
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Render based on navigation type
		return (
			<nav
				ref={ref}
				className={navigationClasses}
				data-navigation-kind={kind}
				role={config.role || 'navigation'}
				aria-label={
					config.ariaLabel || `${kind} navigation`
				}
			>
				{renderNavigationContent(
					config,
					items,
					currentPath,
					activeTab,
					totalPages,
					currentPage,
					onNavigate,
					showIcons,
					showLabels,
					showBadges,
					children
				)}
			</nav>
		);
	}
);

// =============================================================================
// NAVIGATION CONTENT RENDERERS (from Navigation)
// =============================================================================

function renderNavigationContent(
	config: NavigationConfiguration,
	items: NavigationItem[],
	currentPath?: string,
	activeTab?: string,
	totalPages?: number,
	currentPage: number = 1,
	onNavigate?: (item: NavigationItem) => void,
	showIcons?: boolean,
	showLabels?: boolean,
	showBadges?: boolean,
	children?: React.ReactNode
) {
	switch (config.kind) {
		case 'navbar':
			return renderNavbar(
				config,
				items,
				currentPath,
				onNavigate,
				showIcons,
				showLabels,
				showBadges
			);
		case 'mobile-nav':
			return renderMobileNav(
				config,
				items,
				currentPath,
				onNavigate,
				showIcons,
				showLabels,
				showBadges
			);
		case 'hamburger-menu':
			return renderHamburgerMenu(
				config,
				items,
				currentPath,
				onNavigate,
				showIcons,
				showLabels,
				showBadges
			);
		case 'side-drawer':
			return renderSideDrawer(
				config,
				items,
				currentPath,
				onNavigate,
				showIcons,
				showLabels
			);
		case 'breadcrumbs':
			return renderBreadcrumbs(config, items, onNavigate);
		case 'pagination':
			return renderPagination(
				config,
				totalPages,
				currentPage,
				onNavigate
			);
		case 'tabs':
			return renderTabs(
				config,
				items,
				activeTab,
				onNavigate,
				showIcons,
				showLabels
			);
		case 'segmented-controls':
			return renderSegmentedControls(
				config,
				items,
				activeTab,
				onNavigate
			);
		default:
			return renderGenericNavigation(
				config,
				items,
				onNavigate,
				showIcons,
				showLabels,
				children
			);
	}
}

// ...existing code for renderNavbar, renderMobileNav, renderHamburgerMenu, renderSideDrawer, renderBreadcrumbs, renderPagination, renderTabs, renderSegmentedControls, renderGenericNavigation...
// For brevity, these renderers are unchanged from the previous Navigation implementation
// ...existing code...

Navigation.displayName = 'Navigation';

export default memo(Navigation);
export type { NavigationProps };
