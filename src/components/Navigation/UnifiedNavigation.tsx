import React, { forwardRef, memo, useEffect } from 'react';
import {
	useAppDispatch,
	useAppSelector,
} from '../../store';
import {
	initializeComponentState,
	setIsOpen,
	toggleNavigation,
	closeNavigation,
	setIsMobile,
	setActiveItem,
	selectIsNavigationOpen,
	selectIsMobile,
	selectActiveItemId,
	selectMobileBreakpoint,
} from '../../store/slices/navigationSlice';
import {
	NavigationKind,
	NavigationConfiguration,
	NavigationItem,
	getNavigationConfig,
	NAVIGATION_CONFIGURATIONS,
} from './configurations';
import styles from './Navigation.module.scss';

export interface UnifiedNavigationProps {
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

// ========================================
// Main UnifiedNavigation Component
// ========================================

/**
 * UnifiedNavigation - Main navigation component for the DRY navigation system
 *
 * This component provides a unified interface for all navigation types including
 * navbars, mobile navigation, breadcrumbs, pagination, tabs, and side drawers.
 *
 * Features:
 * - Support for 12+ navigation types
 * - Responsive design with mobile optimization
 * - Keyboard navigation support
 * - Customizable styling and behavior
 * - Accessibility features
 * - Animation and gesture support
 */
const UnifiedNavigation = forwardRef<
	any,
	UnifiedNavigationProps
>(
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
		// Generate componentId if not provided
		const finalComponentId =
			componentId || `navigation-${kind}-${Date.now()}`;

		// Redux hooks
		const dispatch = useAppDispatch();
		const internalIsOpen = useAppSelector((state) =>
			selectIsNavigationOpen(state, finalComponentId)
		);
		const isMobile = useAppSelector((state) =>
			selectIsMobile(state, finalComponentId)
		);
		const activeItemId = useAppSelector((state) =>
			selectActiveItemId(state, finalComponentId)
		);
		const mobileBreakpointValue = useAppSelector((state) =>
			selectMobileBreakpoint(state, finalComponentId)
		);

		// Get navigation configuration
		const baseConfig = getNavigationConfig(kind);
		const config =
			configOverrides ?
				{ ...baseConfig, ...configOverrides }
			:	baseConfig;

		// Initialize component state in Redux on mount
		useEffect(() => {
			const breakpoint =
				mobileBreakpoint || config.mobileBreakpoint || 768;
			dispatch(
				initializeComponentState({
					componentId: finalComponentId,
					initialState: {
						isOpen: isOpen,
						mobileBreakpoint: breakpoint,
					},
				})
			);
		}, [
			dispatch,
			finalComponentId,
			isOpen,
			mobileBreakpoint,
			config.mobileBreakpoint,
		]);

		// Responsive detection
		useEffect(() => {
			if (responsive !== false && config.responsive) {
				const breakpoint =
					mobileBreakpoint ||
					config.mobileBreakpoint ||
					768;
				const checkMobile = () =>
					dispatch(
						setIsMobile({
							componentId: finalComponentId,
							isMobile: window.innerWidth < breakpoint,
						})
					);

				checkMobile();
				window.addEventListener('resize', checkMobile);
				return () =>
					window.removeEventListener('resize', checkMobile);
			}
		}, [
			responsive,
			mobileBreakpoint,
			config.responsive,
			config.mobileBreakpoint,
			dispatch,
			finalComponentId,
		]);

		// Handle navigation
		const handleNavigate = (item: NavigationItem) => {
			if (item.disabled) return;

			// Close mobile menus if configured
			if (
				(closeOnSelect ?? config.closeOnSelect) &&
				isMobile
			) {
				dispatch(
					closeNavigation({ componentId: finalComponentId })
				);
				onToggle?.(false);
			}

			// Set active item in Redux
			dispatch(
				setActiveItem({
					componentId: finalComponentId,
					itemId: item.id,
				})
			);

			// Handle different navigation types
			if (item.onClick) {
				item.onClick(item);
			}

			if (item.path && onNavigate) {
				onNavigate(item.path, item);
			}

			// Handle tabs
			if (kind === 'tabs' && onTabChange) {
				onTabChange(item.id);
			}

			// Handle pagination
			if (kind === 'pagination' && onPageChange) {
				const pageNum = parseInt(
					item.id.replace('page-', '')
				);
				if (!isNaN(pageNum)) {
					onPageChange(pageNum);
				}
			}
		};

		// Build className
		const navigationClasses = [
			styles.unifiedNavigation,
			styles[`navigation--${config.variant}`],
			styles[`navigation--${config.layout}`],
			config.position &&
				styles[`navigation--${config.position}`],
			isMobile && styles['navigation--mobile'],
			internalIsOpen && styles['navigation--open'],
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
				{...props}
			>
				{renderNavigationContent(
					config,
					items,
					currentPath,
					activeTab,
					totalPages,
					currentPage,
					handleNavigate,
					showIcons,
					showLabels,
					showBadges,
					children
				)}
			</nav>
		);
	}
);

// ========================================
// Navigation Content Renderers
// ========================================

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
				showLabels
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

function renderNavbar(
	config: NavigationConfiguration,
	items: NavigationItem[],
	currentPath?: string,
	onNavigate?: (item: NavigationItem) => void,
	showIcons?: boolean,
	showLabels?: boolean,
	showBadges?: boolean
) {
	return (
		<div className={styles.navbarContainer}>
			<div className={styles.navbarBrand}>
				{/* Brand/Logo area */}
			</div>

			<ul className={styles.navbarItems}>
				{items.map((item) => (
					<li key={item.id} className={styles.navbarItem}>
						<button
							className={[
								styles.navbarLink,
								item.active || item.path === currentPath ?
									styles.active
								:	'',
								item.disabled ? styles.disabled : '',
							]
								.filter(Boolean)
								.join(' ')}
							onClick={() => onNavigate?.(item)}
							disabled={item.disabled}
							aria-current={
								item.active ? 'page' : undefined
							}
						>
							{(showIcons ?? config.showIcons) &&
								item.icon && (
									<span className={styles.navbarIcon}>
										{item.icon}
									</span>
								)}
							{(showLabels ?? config.showLabels) && (
								<span className={styles.navbarLabel}>
									{item.label}
								</span>
							)}
							{(showBadges ?? config.showBadges) &&
								item.badge && (
									<span className={styles.navbarBadge}>
										{item.badge}
									</span>
								)}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

function renderMobileNav(
	config: NavigationConfiguration,
	items: NavigationItem[],
	currentPath?: string,
	onNavigate?: (item: NavigationItem) => void,
	showIcons?: boolean,
	showLabels?: boolean,
	showBadges?: boolean
) {
	return (
		<div className={styles.mobileNavContainer}>
			{items.map((item) => (
				<button
					key={item.id}
					className={[
						styles.mobileNavItem,
						item.active || item.path === currentPath ?
							styles.active
						:	'',
						item.disabled ? styles.disabled : '',
					]
						.filter(Boolean)
						.join(' ')}
					onClick={() => onNavigate?.(item)}
					disabled={item.disabled}
					aria-current={item.active ? 'page' : undefined}
				>
					{(showIcons ?? config.showIcons) && item.icon && (
						<span className={styles.mobileNavIcon}>
							{item.icon}
						</span>
					)}
					{(showLabels ?? config.showLabels) && (
						<span className={styles.mobileNavLabel}>
							{item.label}
						</span>
					)}
					{(showBadges ?? config.showBadges) &&
						item.badge && (
							<span className={styles.mobileNavBadge}>
								{item.badge}
							</span>
						)}
				</button>
			))}
		</div>
	);
}

function renderBreadcrumbs(
	config: NavigationConfiguration,
	items: NavigationItem[],
	onNavigate?: (item: NavigationItem) => void
) {
	return (
		<ol className={styles.breadcrumbsList}>
			{items.map((item, index) => (
				<li key={item.id} className={styles.breadcrumbItem}>
					{index < items.length - 1 ?
						<>
							<button
								className={styles.breadcrumbLink}
								onClick={() => onNavigate?.(item)}
								disabled={item.disabled}
							>
								{item.label}
							</button>
							<span className={styles.breadcrumbSeparator}>
								/
							</span>
						</>
					:	<span
							className={[
								styles.breadcrumbCurrent,
								styles.active,
							].join(' ')}
						>
							{item.label}
						</span>
					}
				</li>
			))}
		</ol>
	);
}

function renderPagination(
	config: NavigationConfiguration,
	totalPages?: number,
	currentPage: number = 1,
	onNavigate?: (item: NavigationItem) => void
) {
	if (!totalPages) return null;

	const generatePaginationItems = () => {
		const items: NavigationItem[] = [];

		// Previous button
		items.push({
			id: 'prev',
			label: 'Previous',
			disabled: currentPage <= 1,
		});

		// Page numbers (with smart truncation)
		const showPages = Math.min(totalPages, 7);
		let startPage = Math.max(
			1,
			currentPage - Math.floor(showPages / 2)
		);
		let endPage = Math.min(
			totalPages,
			startPage + showPages - 1
		);

		if (endPage - startPage < showPages - 1) {
			startPage = Math.max(1, endPage - showPages + 1);
		}

		for (let i = startPage; i <= endPage; i++) {
			items.push({
				id: `page-${i}`,
				label: i.toString(),
				active: i === currentPage,
			});
		}

		// Next button
		items.push({
			id: 'next',
			label: 'Next',
			disabled: currentPage >= totalPages,
		});

		return items;
	};

	const paginationItems = generatePaginationItems();

	return (
		<div className={styles.paginationContainer}>
			<ul className={styles.paginationList}>
				{paginationItems.map((item) => (
					<li
						key={item.id}
						className={styles.paginationItem}
					>
						<button
							className={[
								styles.paginationButton,
								item.active ? styles.active : '',
								item.disabled ? styles.disabled : '',
							]
								.filter(Boolean)
								.join(' ')}
							onClick={() => onNavigate?.(item)}
							disabled={item.disabled}
							aria-current={
								item.active ? 'page' : undefined
							}
						>
							{item.label}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

function renderTabs(
	config: NavigationConfiguration,
	items: NavigationItem[],
	activeTab?: string,
	onNavigate?: (item: NavigationItem) => void,
	showIcons?: boolean,
	showLabels?: boolean
) {
	return (
		<div className={styles.tabsContainer}>
			<ul className={styles.tabsList} role='tablist'>
				{items.map((item) => (
					<li
						key={item.id}
						className={styles.tabItem}
						role='presentation'
					>
						<button
							className={[
								styles.tabButton,
								item.active || item.id === activeTab ?
									styles.active
								:	'',
								item.disabled ? styles.disabled : '',
							]
								.filter(Boolean)
								.join(' ')}
							onClick={() => onNavigate?.(item)}
							disabled={item.disabled}
							role='tab'
							aria-selected={
								item.active || item.id === activeTab
							}
							id={`tab-${item.id}`}
							aria-controls={`panel-${item.id}`}
						>
							{(showIcons ?? config.showIcons) &&
								item.icon && (
									<span className={styles.tabIcon}>
										{item.icon}
									</span>
								)}
							{(showLabels ?? config.showLabels) && (
								<span className={styles.tabLabel}>
									{item.label}
								</span>
							)}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

function renderSegmentedControls(
	config: NavigationConfiguration,
	items: NavigationItem[],
	activeTab?: string,
	onNavigate?: (item: NavigationItem) => void
) {
	return (
		<div className={styles.segmentedContainer}>
			<div className={styles.segmentedGroup} role='group'>
				{items.map((item) => (
					<button
						key={item.id}
						className={[
							styles.segmentedButton,
							item.active || item.id === activeTab ?
								styles.active
							:	'',
							item.disabled ? styles.disabled : '',
						]
							.filter(Boolean)
							.join(' ')}
						onClick={() => onNavigate?.(item)}
						disabled={item.disabled}
						aria-pressed={
							item.active || item.id === activeTab
						}
					>
						{item.label}
					</button>
				))}
			</div>
		</div>
	);
}

function renderHamburgerMenu(
	config: NavigationConfiguration,
	items: NavigationItem[],
	currentPath?: string,
	onNavigate?: (item: NavigationItem) => void,
	showIcons?: boolean,
	showLabels?: boolean
) {
	return (
		<div className={styles.hamburgerContainer}>
			<ul className={styles.hamburgerList}>
				{items.map((item) => (
					<li
						key={item.id}
						className={styles.hamburgerItem}
					>
						<button
							className={[
								styles.hamburgerLink,
								item.active || item.path === currentPath ?
									styles.active
								:	'',
								item.disabled ? styles.disabled : '',
							]
								.filter(Boolean)
								.join(' ')}
							onClick={() => onNavigate?.(item)}
							disabled={item.disabled}
						>
							{(showIcons ?? config.showIcons) &&
								item.icon && (
									<span className={styles.hamburgerIcon}>
										{item.icon}
									</span>
								)}
							{(showLabels ?? config.showLabels) && (
								<span className={styles.hamburgerLabel}>
									{item.label}
								</span>
							)}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

function renderSideDrawer(
	config: NavigationConfiguration,
	items: NavigationItem[],
	currentPath?: string,
	onNavigate?: (item: NavigationItem) => void,
	showIcons?: boolean,
	showLabels?: boolean
) {
	return (
		<div className={styles.sideDrawerContainer}>
			<ul className={styles.sideDrawerList}>
				{items.map((item) => (
					<li
						key={item.id}
						className={styles.sideDrawerItem}
					>
						<button
							className={[
								styles.sideDrawerLink,
								item.active || item.path === currentPath ?
									styles.active
								:	'',
								item.disabled ? styles.disabled : '',
							]
								.filter(Boolean)
								.join(' ')}
							onClick={() => onNavigate?.(item)}
							disabled={item.disabled}
						>
							{(showIcons ?? config.showIcons) &&
								item.icon && (
									<span className={styles.sideDrawerIcon}>
										{item.icon}
									</span>
								)}
							{(showLabels ?? config.showLabels) && (
								<span className={styles.sideDrawerLabel}>
									{item.label}
								</span>
							)}
						</button>

						{/* Render nested items if present */}
						{item.children && item.children.length > 0 && (
							<ul className={styles.sideDrawerSubList}>
								{item.children.map((child) => (
									<li
										key={child.id}
										className={styles.sideDrawerSubItem}
									>
										<button
											className={[
												styles.sideDrawerSubLink,
												(
													child.active ||
													child.path === currentPath
												) ?
													styles.active
												:	'',
												child.disabled ?
													styles.disabled
												:	'',
											]
												.filter(Boolean)
												.join(' ')}
											onClick={() => onNavigate?.(child)}
											disabled={child.disabled}
										>
											{child.label}
										</button>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

function renderGenericNavigation(
	config: NavigationConfiguration,
	items: NavigationItem[],
	onNavigate?: (item: NavigationItem) => void,
	showIcons?: boolean,
	showLabels?: boolean,
	children?: React.ReactNode
) {
	return (
		<div className={styles.genericNavigation}>
			{children || (
				<ul className={styles.genericList}>
					{items.map((item) => (
						<li
							key={item.id}
							className={styles.genericItem}
						>
							<button
								className={[
									styles.genericLink,
									item.active ? styles.active : '',
									item.disabled ? styles.disabled : '',
								]
									.filter(Boolean)
									.join(' ')}
								onClick={() => onNavigate?.(item)}
								disabled={item.disabled}
							>
								{(showIcons ?? config.showIcons) &&
									item.icon && (
										<span className={styles.genericIcon}>
											{item.icon}
										</span>
									)}
								{(showLabels ?? config.showLabels) && (
									<span className={styles.genericLabel}>
										{item.label}
									</span>
								)}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

// ========================================
// Memoized Export
// ========================================

UnifiedNavigation.displayName = 'UnifiedNavigation';

export default memo(UnifiedNavigation);
