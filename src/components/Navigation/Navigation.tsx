/**
 * NavigationProps - API-like, declarative props interface for Navigation component
 *
 * Exposes all configurable options as props. No hidden config, no imperative DOM, no external class reliance.
 */
import React, { forwardRef, memo } from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Navigation.module.scss';
import {
	NavigationKind,
	NavigationVariant,
	NavigationLayout,
	NavigationConfiguration,
	NavigationItem,
	getNavigationConfig,
} from './configurations';

/**
 * Props for the Navigation component.
 */
export interface NavigationProps {
	/**
	 * The kind of navigation (e.g., 'navbar', 'tabs', 'breadcrumbs', etc.)
	 */
	kind: NavigationKind;
	/**
	 * The navigation items to render (links, tabs, steps, etc.)
	 */
	items: NavigationItem[];
	/**
	 * The id of the currently active/selected item (tab, step, breadcrumb, etc.)
	 */
	activeId?: string | number;
	/**
	 * The current page (for pagination kinds)
	 */
	currentPage?: number;
	/**
	 * The total number of pages (for pagination kinds)
	 */
	totalPages?: number;
	/**
	 * Handler called when a navigation item is selected
	 */
	onSelect?: (
		item: NavigationItem,
		event?: React.SyntheticEvent
	) => void;
	/**
	 * If true, the navigation is open (for drawers, menus, etc.)
	 */
	isOpen?: boolean;
	/**
	 * Handler to toggle open/close state (for drawers, menus, etc.)
	 */
	onToggle?: () => void;
	/**
	 * If true, the navigation is collapsible (for side drawers, etc.)
	 */
	collapsible?: boolean;
	/**
	 * Visual variant of the navigation (primary, minimal, etc.)
	 */
	variant?: NavigationVariant;
	/**
	 * Layout direction (horizontal, vertical, etc.)
	 */
	layout?: NavigationLayout;
	/**
	 * If true, show icons in navigation items
	 */
	showIcons?: boolean;
	/**
	 * If true, show labels in navigation items
	 */
	showLabels?: boolean;
	/**
	 * If true, show badges in navigation items
	 */
	showBadges?: boolean;
	/**
	 * If true, navigation adapts responsively
	 */
	responsive?: boolean;
	/**
	 * If true, closes navigation on item select (for overlays, drawers, etc.)
	 */
	closeOnSelect?: boolean;
	/**
	 * Custom configuration overrides (advanced)
	 */
	configuration?: Partial<NavigationConfiguration>;
	/**
	 * Children to render inside the navigation (optional)
	 */
	children?: React.ReactNode;
	/**
	 * Additional className for the navigation root
	 */
	className?: string;
	/**
	 * Unique id for the navigation component (optional)
	 */
	componentId?: string;
	/**
	 * Any other native nav element props
	 */
	[key: string]: any;
}

const Navigation = forwardRef<any, NavigationProps>(
	(
		{
			kind,
			items = [],
			activeId,
			currentPage = 1,
			totalPages,
			onSelect,
			isOpen = false,
			onToggle,
			collapsible,
			variant,
			layout,
			showIcons,
			showLabels,
			showBadges,
			responsive,
			closeOnSelect,
			configuration,
			children,
			className,
			componentId,
			...props
		},
		ref
	) => {
		const baseConfig = getNavigationConfig(kind);
		const config = { ...baseConfig, ...configuration };

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
					activeId,
					currentPage,
					totalPages,
					onSelect,
					showIcons,
					showLabels,
					showBadges,
					children
				)}
			</nav>
		);
	}
);

function renderNavigationContent(
	config: NavigationConfiguration,
	items: NavigationItem[] = [],
	activeId?: string | number,
	currentPage: number = 1,
	totalPages?: number,
	onSelect?: (
		item: NavigationItem,
		event?: React.SyntheticEvent
	) => void,
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
				activeId,
				onSelect,
				showIcons,
				showLabels,
				showBadges
			);
		case 'mobile-nav':
			return renderMobileNav(
				config,
				items,
				activeId,
				onSelect,
				showIcons,
				showLabels,
				showBadges
			);
		case 'hamburger-menu':
			return renderHamburgerMenu(
				config,
				items,
				activeId,
				onSelect,
				showIcons,
				showLabels,
				showBadges
			);
		case 'side-drawer':
			return renderSideDrawer(
				config,
				items,
				activeId,
				onSelect,
				showIcons,
				showLabels
			);
		case 'breadcrumbs':
			return renderBreadcrumbs(
				config,
				items,
				activeId,
				onSelect
			);
		case 'pagination':
			return renderPagination(
				config,
				totalPages,
				currentPage,
				onSelect
			);
		case 'tabs':
			return renderTabs(
				config,
				items,
				activeId,
				onSelect,
				showIcons,
				showLabels
			);
		case 'segmented-controls':
			return renderSegmentedControls(
				config,
				items,
				activeId,
				onSelect
			);
		case 'step-navigation':
			return renderStepNavigation(
				config,
				items,
				activeId,
				onSelect
			);
		default:
			return renderGenericNavigation(
				config,
				items,
				activeId,
				onSelect,
				showIcons,
				showLabels,
				children
			);
	}
}

function renderGenericNavigation(
	config: NavigationConfiguration,
	items: NavigationItem[] = [],
	activeId?: string | number,
	onSelect?: (
		item: NavigationItem,
		event?: React.SyntheticEvent
	) => void,
	showIcons?: boolean,
	showLabels?: boolean,
	children?: React.ReactNode
) {
	return (
		<div className={styles.genericNavigation}>
			{renderNavigationList({
				items,
				activeId,
				onSelect,
				showIcons,
				showLabels,
				itemClass: styles.genericList,
				linkClass: styles.genericItem,
				iconClass: styles.genericIcon,
				labelClass: styles.genericLabel,
			})}
			{children}
		</div>
	);
}

function renderBreadcrumbs(
	config: NavigationConfiguration,
	items: NavigationItem[] = [],
	activeId?: string | number,
	onSelect?: (
		item: NavigationItem,
		event?: React.SyntheticEvent
	) => void
) {
	const separator = config.separator || '/';
	return (
		<nav
			className={styles.breadcrumbsList}
			aria-label={config.ariaLabel || 'Breadcrumb'}
		>
			{items.map((item, idx) => (
				<React.Fragment key={item.id}>
					{idx > 0 && (
						<span className={styles.breadcrumbSeparator}>
							{separator}
						</span>
					)}
					<button
						type='button'
						className={
							styles.breadcrumbLink +
							(item.active ? ' active' : '')
						}
						disabled={item.disabled}
						onClick={(e) =>
							item.path && onSelect && onSelect(item, e)
						}
						aria-current={item.active ? 'page' : undefined}
					>
						{item.label}
					</button>
				</React.Fragment>
			))}
		</nav>
	);
}

function renderPagination(
	config: NavigationConfiguration,
	totalPages?: number,
	currentPage: number = 1,
	onSelect?: (
		item: NavigationItem,
		event?: React.SyntheticEvent
	) => void
) {
	if (!totalPages) return null;
	const items: NavigationItem[] = [];
	const showPrevNext = config.showPrevNext ?? true;
	const showFirstLast = config.showFirstLast ?? false;
	if (showFirstLast) {
		items.push({
			id: 'first',
			label: 'First',
			path: '1',
			disabled: currentPage === 1,
		});
	}
	if (showPrevNext) {
		items.push({
			id: 'prev',
			label: 'Previous',
			path: String(currentPage - 1),
			disabled: currentPage === 1,
		});
	}
	for (let i = 1; i <= totalPages; i++) {
		items.push({
			id: `page-${i}`,
			label: String(i),
			path: String(i),
			active: i === currentPage,
		});
	}
	if (showPrevNext) {
		items.push({
			id: 'next',
			label: 'Next',
			path: String(currentPage + 1),
			disabled: currentPage === totalPages,
		});
	}
	if (showFirstLast) {
		items.push({
			id: 'last',
			label: 'Last',
			path: String(totalPages),
			disabled: currentPage === totalPages,
		});
	}
	return (
		<div className={styles.paginationContainer}>
			{renderNavigationList({
				items,
				showIcons: false,
				showLabels: true,
				itemClass: styles.paginationList,
				linkClass: styles.paginationItem,
			})}
		</div>
	);
}

function renderStepNavigation(
	config: NavigationConfiguration,
	items: NavigationItem[] = [],
	activeId?: string | number,
	onSelect?: (
		item: NavigationItem,
		event?: React.SyntheticEvent
	) => void
) {
	return (
		<div className={styles.segmentedContainer}>
			{renderNavigationList({
				items,
				activeId,
				showIcons: false,
				showLabels: true,
				itemClass: styles.segmentedGroup,
				linkClass: styles.segmentedButton,
			})}
		</div>
	);
}

function renderNavigationList({
	items = [],
	activeId,
	onSelect,
	showIcons = true,
	showLabels = true,
	showBadges = false,
	itemClass = '',
	linkClass = '',
	iconClass = '',
	labelClass = '',
	badgeClass = '',
	getItemActive,
	getItemDisabled,
	getItemKey,
	getItemLabel,
	getItemIcon,
	getItemBadge,
	getItemOnClick,
	role = 'menuitem',
	as = 'button',
}: {
	items: NavigationItem[];
	activeId?: string | number;
	onSelect?: (
		item: NavigationItem,
		event?: React.SyntheticEvent
	) => void;
	showIcons?: boolean;
	showLabels?: boolean;
	showBadges?: boolean;
	itemClass?: string;
	linkClass?: string;
	iconClass?: string;
	labelClass?: string;
	badgeClass?: string;
	getItemActive?: (item: NavigationItem) => boolean;
	getItemDisabled?: (item: NavigationItem) => boolean;
	getItemKey?: (item: NavigationItem) => string;
	getItemLabel?: (item: NavigationItem) => string;
	getItemIcon?: (item: NavigationItem) => React.ReactNode;
	getItemBadge?: (item: NavigationItem) => React.ReactNode;
	getItemOnClick?: (
		item: NavigationItem
	) => (() => void) | undefined;
	role?: string;
	as?: 'button' | 'a';
}) {
	return (
		<ul className={itemClass} role='menubar'>
			{items.map((item) => {
				const isActive =
					getItemActive ?
						getItemActive(item)
					:	item.active ||
						(activeId && item.id === activeId);
				const isDisabled =
					getItemDisabled ?
						getItemDisabled(item)
					:	!!item.disabled;
				const key = getItemKey ? getItemKey(item) : item.id;
				const label =
					getItemLabel ? getItemLabel(item) : item.label;
				const icon =
					getItemIcon ? getItemIcon(item) : item.icon;
				const badge =
					getItemBadge ? getItemBadge(item) : item.badge;
				const onClick =
					getItemOnClick ?
						getItemOnClick(item)
					:	() => {
							if (isDisabled) return;
							if (onSelect && item.path)
								onSelect(item, item.path);
							if (item.onClick) item.onClick(item);
						};
				return (
					<li key={key} className={linkClass} role='none'>
						{as === 'a' && item.path ?
							<a
								href={item.path}
								className={[
									linkClass,
									isActive && 'active',
									isDisabled && 'disabled',
								]
									.filter(Boolean)
									.join(' ')}
								aria-current={isActive ? 'page' : undefined}
								tabIndex={isDisabled ? -1 : 0}
								aria-disabled={isDisabled}
								role={role}
								onClick={onClick}
							>
								{showIcons && icon && (
									<span className={iconClass}>{icon}</span>
								)}
								{showLabels && (
									<span className={labelClass}>
										{label}
									</span>
								)}
								{showBadges && badge && (
									<span className={badgeClass}>
										{badge}
									</span>
								)}
							</a>
						:	<button
								type='button'
								className={[
									linkClass,
									isActive && 'active',
									isDisabled && 'disabled',
								]
									.filter(Boolean)
									.join(' ')}
								disabled={isDisabled}
								aria-current={isActive ? 'page' : undefined}
								aria-disabled={isDisabled}
								role={role}
								onClick={onClick}
							>
								{showIcons && icon && (
									<span className={iconClass}>{icon}</span>
								)}
								{showLabels && (
									<span className={labelClass}>
										{label}
									</span>
								)}
								{showBadges && badge && (
									<span className={badgeClass}>
										{badge}
									</span>
								)}
							</button>
						}
					</li>
				);
			})}
		</ul>
	);
}

function renderNavbar(
	config: NavigationConfiguration,
	items: NavigationItem[] = [],
	activeId?: string | number,
	onSelect?: (
		item: NavigationItem,
		event?: React.SyntheticEvent
	) => void,
	showIcons?: boolean,
	showLabels?: boolean,
	showBadges?: boolean
) {
	return (
		<div className={styles.navbarContainer}>
			{renderNavigationList({
				items,
				activeId,
				onSelect,
				showIcons,
				showLabels,
				showBadges,
				itemClass: styles.navbarItems,
				linkClass: styles.navbarItem,
				iconClass: styles.navbarIcon,
				labelClass: styles.navbarLabel,
				badgeClass: styles.navbarBadge,
			})}
		</div>
	);
}

function renderTabs(
	config: NavigationConfiguration,
	items: NavigationItem[] = [],
	activeId?: string | number,
	onSelect?: (
		item: NavigationItem,
		event?: React.SyntheticEvent
	) => void,
	showIcons?: boolean,
	showLabels?: boolean
) {
	const handleNavigate =
		onSelect ?
			(item: NavigationItem, event: React.SyntheticEvent) =>
				onSelect(item, event)
		:	undefined;
	return (
		<div className={styles.tabsContainer}>
			{renderNavigationList({
				items,
				activeId,
				onSelect: handleNavigate,
				showIcons,
				showLabels,
				itemClass: styles.tabsList,
				linkClass: styles.tabItem,
				iconClass: styles.tabIcon,
				labelClass: styles.tabLabel,
				badgeClass: '',
			})}
		</div>
	);
}

function renderSegmentedControls(
	config: NavigationConfiguration,
	items: NavigationItem[] = [],
	activeId?: string | number,
	onSelect?: (
		item: NavigationItem,
		event?: React.SyntheticEvent
	) => void
) {
	const handleNavigate =
		onSelect ?
			(item: NavigationItem, event: React.SyntheticEvent) =>
				onSelect(item, event)
		:	undefined;
	return (
		<div className={styles.segmentedContainer}>
			<div className={styles.segmentedGroup}>
				{renderNavigationList({
					items,
					activeId,
					onSelect: handleNavigate,
					showIcons: false,
					showLabels: true,
					itemClass: '',
					linkClass: styles.segmentedButton,
					iconClass: '',
					labelClass: '',
					badgeClass: '',
				})}
			</div>
		</div>
	);
}

function renderHamburgerMenu(
	config: NavigationConfiguration,
	items: NavigationItem[] = [],
	activeId?: string | number,
	onSelect?: (
		item: NavigationItem,
		event?: React.SyntheticEvent
	) => void,
	showIcons?: boolean,
	showLabels?: boolean,
	showBadges?: boolean
) {
	const handleNavigate =
		onSelect ?
			(item: NavigationItem, event: React.SyntheticEvent) =>
				onSelect(item, event)
		:	undefined;
	return (
		<div className={styles.hamburgerContainer}>
			{renderNavigationList({
				items,
				activeId,
				onSelect: handleNavigate,
				showIcons,
				showLabels,
				showBadges,
				itemClass: styles.hamburgerList,
				linkClass: styles.hamburgerItem,
				iconClass: styles.hamburgerIcon,
				labelClass: styles.hamburgerLabel,
				badgeClass: '',
			})}
		</div>
	);
}

function renderSideDrawer(
	config: NavigationConfiguration,
	items: NavigationItem[] = [],
	activeId?: string | number,
	onSelect?: (
		item: NavigationItem,
		event?: React.SyntheticEvent
	) => void,
	showIcons?: boolean,
	showLabels?: boolean
) {
	const handleNavigate =
		onSelect ?
			(item: NavigationItem, event: React.SyntheticEvent) =>
				onSelect(item, event)
		:	undefined;
	return (
		<div className={styles.sideDrawerContainer}>
			{renderNavigationList({
				items,
				activeId,
				onSelect: handleNavigate,
				showIcons,
				showLabels,
				itemClass: styles.sideDrawerList,
				linkClass: styles.sideDrawerItem,
				iconClass: styles.sideDrawerIcon,
				labelClass: styles.sideDrawerLabel,
				badgeClass: '',
			})}
		</div>
	);
}

function renderMobileNav(
	config: NavigationConfiguration,
	items: NavigationItem[] = [],
	activeId?: string | number,
	onSelect?: (
		item: NavigationItem,
		event?: React.SyntheticEvent
	) => void,
	showIcons?: boolean,
	showLabels?: boolean,
	showBadges?: boolean
) {
	const handleNavigate =
		onSelect ?
			(item: NavigationItem, event: React.SyntheticEvent) =>
				onSelect(item, event)
		:	undefined;
	return (
		<div className={styles.mobileNavContainer}>
			{renderNavigationList({
				items,
				activeId,
				onSelect: handleNavigate,
				showIcons,
				showLabels,
				showBadges,
				itemClass: styles.mobileNavItem,
				linkClass: styles.mobileNavItem,
				iconClass: styles.mobileNavIcon,
				labelClass: styles.mobileNavLabel,
				badgeClass: styles.mobileNavBadge,
			})}
		</div>
	);
}

Navigation.displayName = 'Navigation';

export default memo(Navigation);
export { Navigation };
