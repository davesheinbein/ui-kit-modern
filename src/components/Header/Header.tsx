import React, { forwardRef, useState } from 'react';
import { Wrapper } from '../Wrappers';
import { Button, ExtendedButtonKind } from '../Button';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Header.module.scss';

// ==========================================
// Comprehensive Header Props Interface
// ==========================================

export interface HeaderAction {
	id?: string;
	type?: 'button' | 'icon' | 'link' | 'custom';
	label?: string;
	icon?: React.ReactNode;
	onClick?: () => void;
	href?: string;
	disabled?: boolean;
	loading?: boolean;
	variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
	size?: 'small' | 'medium' | 'large';
	className?: string;
	ariaLabel?: string;
	position?: 'left' | 'right';
}

export interface HeaderTab {
	id: string;
	label: string;
	icon?: React.ReactNode;
	badge?: string | number;
	disabled?: boolean;
	href?: string;
	active?: boolean;
}

export interface HeaderNavigationItem {
	id: string;
	label: string;
	href?: string;
	icon?: React.ReactNode;
	badge?: string | number;
	disabled?: boolean;
	active?: boolean;
	onClick?: () => void;
}

export interface HeaderProps
	extends Omit<
		React.HTMLAttributes<HTMLDivElement>,
		'onScroll'
	> {
	// === CONTENT PROPS ===
	/** Header title */
	title?: string;
	/** Header subtitle */
	subtitle?: string;
	/** Title icon */
	icon?: React.ReactNode;
	/** Additional content */
	children?: React.ReactNode;

	// === LAYOUT PROPS ===
	/** Layout style */
	layout?:
		| 'horizontal'
		| 'vertical'
		| 'split'
		| 'stacked'
		| 'centered';
	/** Content alignment */
	align?: 'left' | 'center' | 'right' | 'space-between';
	/** Header position */
	position?:
		| 'top'
		| 'bottom'
		| 'fixed-top'
		| 'fixed-bottom'
		| 'sticky';
	/** Height size */
	height?: 'compact' | 'medium' | 'large' | 'auto';
	/** Max width constraint */
	maxWidth?: string | number;
	/** Full width */
	fullWidth?: boolean;

	// === STYLING PROPS ===
	/** Background variant */
	background?:
		| 'transparent'
		| 'primary'
		| 'secondary'
		| 'surface'
		| 'custom';
	/** Custom background color */
	backgroundColor?: string;
	/** Border bottom */
	borderBottom?: boolean;
	/** Border bottom color */
	borderColor?: string;
	/** Shadow */
	shadow?: boolean | 'small' | 'medium' | 'large';
	/** Border radius */
	borderRadius?: string | number;
	/** Padding */
	padding?: string | number;

	// === BEHAVIOR PROPS ===
	/** Sticky header */
	sticky?: boolean;
	/** Collapsible */
	collapsible?: boolean;
	/** Collapsed state */
	collapsed?: boolean;
	/** On collapse toggle */
	onCollapseToggle?: () => void;
	/** Show on scroll */
	showOnScroll?: boolean;
	/** Hide on scroll */
	hideOnScroll?: boolean;

	// === NAVIGATION PROPS ===
	/** Navigation items */
	navigation?: HeaderNavigationItem[];
	/** Navigation position */
	navigationPosition?: 'left' | 'center' | 'right';
	/** Navigation layout */
	navigationLayout?: 'horizontal' | 'vertical';
	/** On navigation item click */
	onNavigationClick?: (item: HeaderNavigationItem) => void;
	/** Active navigation item */
	activeNavigationId?: string;

	// === TABS PROPS ===
	/** Tab items */
	tabs?: HeaderTab[];
	/** Active tab */
	activeTabId?: string;
	/** On tab change */
	onTabChange?: (tab: HeaderTab) => void;
	/** Tabs position */
	tabsPosition?: 'inline' | 'below' | 'separate';
	/** Tabs alignment */
	tabsAlign?: 'left' | 'center' | 'right';

	// === ACTIONS PROPS ===
	/** Action buttons */
	actions?: HeaderAction[];
	/** Primary action */
	primaryAction?: HeaderAction;
	/** Secondary actions */
	secondaryActions?: HeaderAction[];
	/** Action alignment */
	actionsAlign?: 'left' | 'right' | 'split';

	// === MOBILE PROPS ===
	/** Mobile layout */
	mobileLayout?: 'stacked' | 'collapsed' | 'hamburger';
	/** Mobile breakpoint */
	mobileBreakpoint?: number;
	/** Mobile hamburger menu */
	showMobileMenu?: boolean;
	/** Mobile menu content */
	mobileMenuContent?: React.ReactNode;
	/** Mobile menu actions */
	mobileMenuActions?: HeaderAction[];

	// === SEARCH PROPS ===
	/** Search component */
	search?: React.ReactNode;
	/** Search position */
	searchPosition?: 'left' | 'center' | 'right';
	/** Search full width on mobile */
	searchFullWidthMobile?: boolean;

	// === ACCESSIBILITY PROPS ===
	/** ARIA label */
	ariaLabel?: string;
	/** Role */
	role?: string;
	/** Keyboard navigation */
	keyboardNavigation?: boolean;
	/** Focus trap */
	focusTrap?: boolean;

	// === THEME PROPS ===
	/** Color scheme */
	colorScheme?: 'light' | 'dark' | 'auto';
	/** Theme variant */
	theme?: string;

	// === ANIMATION PROPS ===
	/** Animation */
	animated?: boolean;
	/** Animation duration */
	animationDuration?: number;
	/** Animation easing */
	animationEasing?: string;

	// === RESPONSIVE PROPS ===
	/** Responsive behavior */
	responsive?: boolean;
	/** Hide on mobile */
	hideOnMobile?: boolean;
	/** Hide on tablet */
	hideOnTablet?: boolean;
	/** Hide on desktop */
	hideOnDesktop?: boolean;

	// === EVENT PROPS ===
	/** On mobile menu toggle */
	onMobileMenuToggle?: () => void;
	/** On scroll */
	onScroll?: (scrollY: number) => void;
	/** On resize */
	onResize?: (width: number) => void;

	// === MISC PROPS ===
	/** Loading state */
	loading?: boolean;
	/** Error state */
	error?: string;
	/** Component ID for testing */
	testId?: string;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(
	(
		{
			// Content props
			title,
			subtitle,
			icon,
			children,

			// Layout props
			layout = 'horizontal',
			align = 'left',
			position = 'top',
			height = 'medium',
			maxWidth,
			fullWidth = false,

			// Styling props
			background = 'transparent',
			backgroundColor,
			borderBottom = false,
			borderColor,
			shadow = false,
			borderRadius,
			padding,

			// Behavior props
			sticky = false,
			collapsible = false,
			collapsed = false,
			onCollapseToggle,
			showOnScroll,
			hideOnScroll,

			// Navigation props
			navigation = [],
			navigationPosition = 'left',
			navigationLayout = 'horizontal',
			onNavigationClick,
			activeNavigationId,

			// Tabs props
			tabs = [],
			activeTabId,
			onTabChange,
			tabsPosition = 'inline',
			tabsAlign = 'left',

			// Actions props
			actions = [],
			primaryAction,
			secondaryActions = [],
			actionsAlign = 'right',

			// Mobile props
			mobileLayout = 'hamburger',
			mobileBreakpoint = 768,
			showMobileMenu = false,
			mobileMenuContent,
			mobileMenuActions = [],

			// Search props
			search,
			searchPosition = 'center',
			searchFullWidthMobile = false,

			// Accessibility props
			ariaLabel,
			role = 'banner',
			keyboardNavigation = true,
			focusTrap = false,

			// Theme props
			colorScheme = 'light',
			theme,

			// Animation props
			animated = true,
			animationDuration = 200,
			animationEasing = 'ease',

			// Responsive props
			responsive = true,
			hideOnMobile = false,
			hideOnTablet = false,
			hideOnDesktop = false,

			// Event props
			onMobileMenuToggle,
			onScroll: customOnScroll,
			onResize,

			// Misc props
			loading = false,
			error,
			testId,

			// Standard HTML props
			className = '',
			style,
			...props
		},
		ref
	) => {
		// ==========================================
		// State Management
		// ==========================================
		const [mobileMenuOpen, setMobileMenuOpen] =
			useState(showMobileMenu);

		// ==========================================
		// CSS Classes Generation
		// ==========================================
		const headerClasses = [
			styles.header,
			styles[`layout-${layout}`],
			styles[`align-${align}`],
			styles[`position-${position}`],
			styles[`height-${height}`],
			styles[`background-${background}`],
			borderBottom && styles.borderBottom,
			sticky && styles.sticky,
			collapsed && styles.collapsed,
			collapsible && styles.collapsible,
			fullWidth && styles.fullWidth,
			responsive && styles.responsive,
			animated && styles.animated,
			hideOnMobile && styles.hideOnMobile,
			hideOnTablet && styles.hideOnTablet,
			hideOnDesktop && styles.hideOnDesktop,
			loading && styles.loading,
			error && styles.error,
			colorScheme && styles[`theme-${colorScheme}`],
			theme && styles[`variant-${theme}`],
			className,
		]
			.filter(Boolean)
			.join(' ');

		// ==========================================
		// Style Object Generation
		// ==========================================
		const headerStyle: React.CSSProperties = {
			...style,
			...(backgroundColor && { backgroundColor }),
			...(borderColor && {
				borderBottomColor: borderColor,
			}),
			...(borderRadius && { borderRadius }),
			...(padding && { padding }),
			...(maxWidth && { maxWidth }),
			...(animationDuration && {
				transitionDuration: `${animationDuration}ms`,
			}),
			...(animationEasing && {
				transitionTimingFunction: animationEasing,
			}),
		};

		// ==========================================
		// Render Functions
		// ==========================================

		// Render title section
		const renderTitle = () => {
			if (!title && !subtitle && !icon) return null;

			return (
				<Wrapper className={styles.titleSection}>
					{icon && (
						<span className={styles.titleIcon}>{icon}</span>
					)}
					<Wrapper className={styles.titleContent}>
						{title && (
							<h1
								className={styles.title}
								data-testid={`${testId}-title`}
							>
								{title}
							</h1>
						)}
						{subtitle && (
							<p
								className={styles.subtitle}
								data-testid={`${testId}-subtitle`}
							>
								{subtitle}
							</p>
						)}
					</Wrapper>
					{collapsible && (
						<Button
							kind='icon'
							size='small'
							onClick={onCollapseToggle}
							className={styles.collapseButton}
							label={
								collapsed ? 'Expand header' : (
									'Collapse header'
								)
							}
							icon={collapsed ? '▼' : '▲'}
							data-testid={`${testId}-collapse-button`}
						/>
					)}
				</Wrapper>
			);
		};

		// Render navigation
		const renderNavigation = () => {
			if (!navigation.length) return null;

			return (
				<nav
					className={[
						styles.navigation,
						styles[`nav-position-${navigationPosition}`],
						styles[`nav-layout-${navigationLayout}`],
					]
						.filter(Boolean)
						.join(' ')}
					role='navigation'
					aria-label='Main navigation'
					data-testid={`${testId}-navigation`}
				>
					{navigation.map((item) => (
						<Button
							key={item.id}
							kind={item.active ? 'primary' : 'ghost'}
							size='medium'
							onClick={() => {
								item.onClick?.();
								onNavigationClick?.(item);
							}}
							href={item.href}
							disabled={item.disabled}
							className={[
								styles.navItem,
								item.active && styles.navItemActive,
								activeNavigationId === item.id &&
									styles.navItemActive,
							]
								.filter(Boolean)
								.join(' ')}
							label={item.label}
							icon={item.icon}
							data-testid={`${testId}-nav-${item.id}`}
						>
							{item.label}
							{item.badge && (
								<span className={styles.navItemBadge}>
									{item.badge}
								</span>
							)}
						</Button>
					))}
				</nav>
			);
		};

		// Render tabs
		const renderTabs = () => {
			if (!tabs.length) return null;

			return (
				<div
					className={[
						styles.tabs,
						styles[`tabs-position-${tabsPosition}`],
						styles[`tabs-align-${tabsAlign}`],
					]
						.filter(Boolean)
						.join(' ')}
					role='tablist'
					aria-label='Tab navigation'
					data-testid={`${testId}-tabs`}
				>
					{tabs.map((tab) => (
						<Button
							key={tab.id}
							kind={
								tab.active || activeTabId === tab.id ?
									'primary'
								:	'ghost'
							}
							size='medium'
							onClick={() => onTabChange?.(tab)}
							href={tab.href}
							disabled={tab.disabled}
							className={[
								styles.tab,
								(tab.active || activeTabId === tab.id) &&
									styles.tabActive,
							]
								.filter(Boolean)
								.join(' ')}
							label={tab.label}
							icon={tab.icon}
							role='tab'
							aria-selected={
								tab.active || activeTabId === tab.id
							}
							data-testid={`${testId}-tab-${tab.id}`}
						>
							{tab.label}
							{tab.badge && (
								<span className={styles.tabBadge}>
									{tab.badge}
								</span>
							)}
						</Button>
					))}
				</div>
			);
		};

		// Map action variant to valid Button kind
		const mapActionVariantToKind = (
			variant?: string
		): ExtendedButtonKind => {
			switch (variant) {
				case 'primary':
					return 'primary';
				case 'secondary':
					return 'secondary';
				case 'ghost':
					return 'ghost';
				case 'outline':
					return 'ghost'; // Map outline to ghost as closest equivalent
				default:
					return 'ghost';
			}
		};

		// Render actions
		const renderActions = () => {
			const allActions = [
				...(primaryAction ? [primaryAction] : []),
				...actions,
				...secondaryActions,
			];

			if (!allActions.length) return null;

			return (
				<div
					className={[
						styles.actions,
						styles[`actions-align-${actionsAlign}`],
					]
						.filter(Boolean)
						.join(' ')}
					data-testid={`${testId}-actions`}
				>
					{allActions.map((action, index) => (
						<Button
							key={action.id || index}
							kind={mapActionVariantToKind(action.variant)}
							size={action.size || 'medium'}
							onClick={action.onClick}
							href={action.href}
							disabled={action.disabled}
							loading={action.loading}
							className={action.className}
							label={action.ariaLabel || action.label}
							icon={action.icon}
							data-testid={`${testId}-action-${action.id || index}`}
						>
							{action.type !== 'icon' && action.label}
						</Button>
					))}
				</div>
			);
		};

		// Render search
		const renderSearch = () => {
			if (!search) return null;

			return (
				<div
					className={[
						styles.search,
						styles[`search-position-${searchPosition}`],
						searchFullWidthMobile &&
							styles.searchFullWidthMobile,
					]
						.filter(Boolean)
						.join(' ')}
					data-testid={`${testId}-search`}
				>
					{search}
				</div>
			);
		};

		// Render mobile menu button
		const renderMobileMenuButton = () => {
			if (mobileLayout !== 'hamburger') return null;

			return (
				<Button
					kind='ghost'
					size='medium'
					onClick={() => {
						setMobileMenuOpen(!mobileMenuOpen);
						onMobileMenuToggle?.();
					}}
					className={styles.mobileMenuButton}
					label='Toggle mobile menu'
					icon='☰'
					data-testid={`${testId}-mobile-menu-button`}
				/>
			);
		};

		// Render mobile sidebar
		const renderMobileSidebar = () => {
			if (mobileLayout !== 'hamburger') return null;

			const defaultMobileContent = (
				<div className={styles.mobileMenuContent}>
					{navigation.length > 0 && (
						<div className={styles.mobileNavSection}>
							<h3>Navigation</h3>
							{navigation.map((item) => (
								<Button
									key={item.id}
									kind='ghost'
									fullWidth
									onClick={() => {
										item.onClick?.();
										onNavigationClick?.(item);
										setMobileMenuOpen(false);
									}}
									href={item.href}
									disabled={item.disabled}
									className={styles.mobileNavItem}
									icon={item.icon}
								>
									{item.label}
									{item.badge && (
										<span className={styles.navItemBadge}>
											{item.badge}
										</span>
									)}
								</Button>
							))}
						</div>
					)}
					{search && (
						<div className={styles.mobileSearchSection}>
							<h3>Search</h3>
							{search}
						</div>
					)}
					{mobileMenuActions.length > 0 && (
						<div className={styles.mobileActionsSection}>
							<h3>Actions</h3>
							{mobileMenuActions.map((action, index) => (
								<Button
									key={action.id || index}
									kind={mapActionVariantToKind(
										action.variant
									)}
									fullWidth
									onClick={() => {
										action.onClick?.();
										setMobileMenuOpen(false);
									}}
									disabled={action.disabled}
									loading={action.loading}
									icon={action.icon}
								>
									{action.label}
								</Button>
							))}
						</div>
					)}
				</div>
			);

			return (
				<Sidebar
					variant='classic'
					open={mobileMenuOpen}
					onClose={() => setMobileMenuOpen(false)}
					header={
						<h3 style={{ margin: 0 }}>{title || 'Menu'}</h3>
					}
					showCloseButton
					ariaLabel='Mobile Navigation Menu'
					data-testid={`${testId}-mobile-sidebar`}
				>
					{mobileMenuContent || defaultMobileContent}
				</Sidebar>
			);
		};

		// ==========================================
		// Layout Rendering
		// ==========================================
		const renderContent = () => {
			switch (layout) {
				case 'vertical':
					return (
						<>
							{renderTitle()}
							{renderNavigation()}
							{renderSearch()}
							{tabsPosition === 'below' && renderTabs()}
							{renderActions()}
						</>
					);

				case 'split':
					return (
						<>
							<div className={styles.leftSection}>
								{renderTitle()}
								{navigationPosition === 'left' &&
									renderNavigation()}
							</div>
							<div className={styles.centerSection}>
								{searchPosition === 'center' &&
									renderSearch()}
								{tabsPosition === 'inline' && renderTabs()}
							</div>
							<div className={styles.rightSection}>
								{navigationPosition === 'right' &&
									renderNavigation()}
								{renderActions()}
							</div>
						</>
					);

				case 'stacked':
					return (
						<>
							<div className={styles.topRow}>
								{renderTitle()}
								{renderActions()}
							</div>
							<div className={styles.bottomRow}>
								{renderNavigation()}
								{renderSearch()}
								{renderTabs()}
							</div>
						</>
					);

				case 'centered':
					return (
						<div className={styles.centeredContent}>
							{renderTitle()}
							{renderNavigation()}
							{renderSearch()}
							{renderTabs()}
							{renderActions()}
						</div>
					);

				case 'horizontal':
				default:
					return (
						<>
							{renderTitle()}
							{navigationPosition === 'left' &&
								renderNavigation()}
							{searchPosition === 'left' && renderSearch()}
							<div className={styles.flexSpacer} />
							{navigationPosition === 'center' &&
								renderNavigation()}
							{searchPosition === 'center' &&
								renderSearch()}
							{tabsPosition === 'inline' && renderTabs()}
							<div className={styles.flexSpacer} />
							{navigationPosition === 'right' &&
								renderNavigation()}
							{searchPosition === 'right' && renderSearch()}
							{renderActions()}
							{renderMobileMenuButton()}
						</>
					);
			}
		};

		// ==========================================
		// Loading and Error States
		// ==========================================
		if (loading) {
			return (
				<header
					ref={ref}
					className={headerClasses}
					style={headerStyle}
					role={role}
					aria-label={ariaLabel || 'Loading header'}
					data-testid={testId}
					{...props}
				>
					<div className={styles.loadingState}>
						<span className={styles.loadingSpinner}>
							Loading...
						</span>
					</div>
				</header>
			);
		}

		if (error) {
			return (
				<header
					ref={ref}
					className={headerClasses}
					style={headerStyle}
					role={role}
					aria-label={ariaLabel || 'Header error'}
					data-testid={testId}
					{...props}
				>
					<div className={styles.errorState}>
						<span className={styles.errorMessage}>
							{error}
						</span>
					</div>
				</header>
			);
		}

		// ==========================================
		// Main Render
		// ==========================================
		return (
			<>
				<header
					{...props}
					ref={ref}
					className={headerClasses}
					style={headerStyle}
					role={role}
					aria-label={ariaLabel || title}
					data-testid={testId}
				>
					<Wrapper className={styles.headerInner}>
						{renderContent()}
						{tabsPosition === 'separate' && renderTabs()}
					</Wrapper>
					{children && (
						<Wrapper className={styles.headerChildren}>
							{children}
						</Wrapper>
					)}
				</header>
				{renderMobileSidebar()}
			</>
		);
	}
);

Header.displayName = 'Header';

export { Header };
export default Header;
