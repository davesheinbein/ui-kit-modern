import React from 'react';

/**
 * Button/action configuration for Header actions.
 */
export interface HeaderAction {
	/** Unique action id */
	id?: string;
	/** Action type */
	type?: 'button' | 'icon' | 'link' | 'custom';
	/** Action label */
	label?: string;
	/** Action icon */
	icon?: React.ReactNode;
	/** Click handler */
	onClick?: () => void;
	/** Link href */
	href?: string;
	/** Disabled state */
	disabled?: boolean;
	/** Loading state */
	loading?: boolean;
	/** Visual variant */
	variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
	/** Size variant */
	size?: 'small' | 'medium' | 'large';
	/** Custom class name */
	className?: string;
	/** ARIA label */
	ariaLabel?: string;
	/** Position in header */
	position?: 'left' | 'right';
}

/**
 * Tab configuration for Header tabs.
 */
export interface HeaderTab {
	/** Unique tab id */
	id: string;
	/** Tab label */
	label: string;
	/** Tab icon */
	icon?: React.ReactNode;
	/** Optional badge */
	badge?: string | number;
	/** Disabled state */
	disabled?: boolean;
	/** Link href */
	href?: string;
	/** Active state */
	active?: boolean;
}

/**
 * Navigation item configuration for Header navigation.
 */
export interface HeaderNavigationItem {
	/** Unique nav item id */
	id: string;
	/** Nav item label */
	label: string;
	/** Link href */
	href?: string;
	/** Nav item icon */
	icon?: React.ReactNode;
	/** Optional badge */
	badge?: string | number;
	/** Disabled state */
	disabled?: boolean;
	/** Active state */
	active?: boolean;
	/** Click handler */
	onClick?: () => void;
}

/**
 * Layout variants for Header.
 */
export enum HeaderLayout {
	Horizontal = 'horizontal',
	Vertical = 'vertical',
	Split = 'split',
	Stacked = 'stacked',
	Centered = 'centered',
}

/**
 * Alignment options for Header content.
 */
export enum HeaderAlign {
	Left = 'left',
	Center = 'center',
	Right = 'right',
	SpaceBetween = 'space-between',
}

/**
 * Position options for Header.
 */
export enum HeaderPosition {
	Top = 'top',
	Bottom = 'bottom',
	FixedTop = 'fixed-top',
	FixedBottom = 'fixed-bottom',
	Sticky = 'sticky',
}

/**
 * Height options for Header.
 */
export enum HeaderHeight {
	Compact = 'compact',
	Medium = 'medium',
	Large = 'large',
	Auto = 'auto',
}

/**
 * Background variants for Header.
 */
export enum HeaderBackground {
	Transparent = 'transparent',
	Primary = 'primary',
	Secondary = 'secondary',
	Surface = 'surface',
	Custom = 'custom',
}

/**
 * Navigation position options.
 */
export enum HeaderNavigationPosition {
	Left = 'left',
	Center = 'center',
	Right = 'right',
}

/**
 * Navigation layout options.
 */
export enum HeaderNavigationLayout {
	Horizontal = 'horizontal',
	Vertical = 'vertical',
}

/**
 * Tabs position options.
 */
export enum HeaderTabsPosition {
	Inline = 'inline',
	Below = 'below',
	Separate = 'separate',
}

/**
 * Tabs alignment options.
 */
export enum HeaderTabsAlign {
	Left = 'left',
	Center = 'center',
	Right = 'right',
}

/**
 * Actions alignment options.
 */
export enum HeaderActionsAlign {
	Left = 'left',
	Right = 'right',
	Split = 'split',
}

/**
 * Mobile layout options.
 */
export enum HeaderMobileLayout {
	Stacked = 'stacked',
	Collapsed = 'collapsed',
	Hamburger = 'hamburger',
}

/**
 * Search position options.
 */
export enum HeaderSearchPosition {
	Left = 'left',
	Center = 'center',
	Right = 'right',
}

/**
 * Color scheme options.
 */
export enum HeaderColorScheme {
	Light = 'light',
	Dark = 'dark',
	Auto = 'auto',
}

/**
 * Props for the Header component. All functionality is exposed via props only.
 */
export interface HeaderProps
	extends Omit<
		React.HTMLAttributes<HTMLDivElement>,
		'onScroll'
	> {
	/** Header title */
	title?: string;
	/** Header subtitle */
	subtitle?: string;
	/** Title icon */
	icon?: React.ReactNode;
	/** Additional content below header */
	children?: React.ReactNode;

	/** Layout variant */
	layout?: HeaderLayout;
	/** Content alignment */
	align?: HeaderAlign;
	/** Header position */
	position?: HeaderPosition;
	/** Height size */
	height?: HeaderHeight;
	/** Max width constraint */
	maxWidth?: string | number;
	/** Full width */
	fullWidth?: boolean;

	/** Background variant */
	background?: HeaderBackground;
	/** Custom background color */
	backgroundColor?: string;
	/** Border bottom */
	borderBottom?: boolean;
	/** Border color */
	borderColor?: string;
	/** Shadow */
	shadow?: boolean | 'small' | 'medium' | 'large';
	/** Border radius */
	borderRadius?: string | number;
	/** Padding */
	padding?: string | number;

	/** Sticky header */
	sticky?: boolean;
	/** Collapsible */
	collapsible?: boolean;
	/** Collapsed state */
	collapsed?: boolean;
	/** Collapse toggle handler */
	onCollapseToggle?: () => void;
	/** Show on scroll */
	showOnScroll?: boolean;
	/** Hide on scroll */
	hideOnScroll?: boolean;

	/** Navigation items */
	navigation?: HeaderNavigationItem[];
	/** Navigation position */
	navigationPosition?: HeaderNavigationPosition;
	/** Navigation layout */
	navigationLayout?: HeaderNavigationLayout;
	/** Navigation click handler */
	onNavigationClick?: (item: HeaderNavigationItem) => void;
	/** Active navigation item id */
	activeNavigationId?: string;

	/** Tab items */
	tabs?: HeaderTab[];
	/** Active tab id */
	activeTabId?: string;
	/** Tab change handler */
	onTabChange?: (tab: HeaderTab) => void;
	/** Tabs position */
	tabsPosition?: HeaderTabsPosition;
	/** Tabs alignment */
	tabsAlign?: HeaderTabsAlign;

	/** Action buttons */
	actions?: HeaderAction[];
	/** Primary action */
	primaryAction?: HeaderAction;
	/** Secondary actions */
	secondaryActions?: HeaderAction[];
	/** Actions alignment */
	actionsAlign?: HeaderActionsAlign;

	/** Mobile layout */
	mobileLayout?: HeaderMobileLayout;
	/** Mobile breakpoint */
	mobileBreakpoint?: number;
	/** Show mobile menu */
	showMobileMenu?: boolean;
	/** Mobile menu content */
	mobileMenuContent?: React.ReactNode;
	/** Mobile menu actions */
	mobileMenuActions?: HeaderAction[];

	/** Search component */
	search?: React.ReactNode;
	/** Search position */
	searchPosition?: HeaderSearchPosition;
	/** Search full width on mobile */
	searchFullWidthMobile?: boolean;

	/** ARIA label */
	ariaLabel?: string;
	/** ARIA role */
	role?: string;
	/** Enable keyboard navigation */
	keyboardNavigation?: boolean;
	/** Trap focus within header */
	focusTrap?: boolean;

	/** Color scheme */
	colorScheme?: HeaderColorScheme;
	/** Theme name */
	theme?: string;

	/** Enable animation */
	animated?: boolean;
	/** Animation duration (ms) */
	animationDuration?: number;
	/** Animation easing */
	animationEasing?: string;

	/** Enable responsive layout */
	responsive?: boolean;
	/** Hide on mobile */
	hideOnMobile?: boolean;
	/** Hide on tablet */
	hideOnTablet?: boolean;
	/** Hide on desktop */
	hideOnDesktop?: boolean;

	/** Mobile menu open state */
	mobileMenuOpen: boolean;
	/** Set mobile menu open state */
	setMobileMenuOpen: (open: boolean) => void;
	/** Mobile menu toggle handler */
	onMobileMenuToggle?: () => void;
	/** Scroll handler */
	onScroll?: (scrollY: number) => void;
	/** Resize handler */
	onResize?: (width: number) => void;

	/** Loading state */
	loading?: boolean;
	/** Error state */
	error?: string;
	/** Test ID for testing */
	testId?: string;
}
