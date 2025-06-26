import { ReactNode } from 'react';
import styles from './Sidebar.module.scss';

// Sidebar variant types
export type SidebarVariant =
	| 'friends'
	| 'settings'
	| 'chat'
	| 'notifications'
	| 'custom';

// Sidebar position types
export type SidebarPosition = 'left' | 'right';

// Sidebar size types
export type SidebarSize =
	| 'small'
	| 'medium'
	| 'large'
	| 'full';

// Enhanced sidebar configuration interface
export interface SidebarConfiguration {
	variant: SidebarVariant;
	position?: SidebarPosition;
	size?: SidebarSize;
	hasOverlay?: boolean;
	showCloseButton?: boolean;
	closeButtonText?: string;
	closeButtonIcon?: ReactNode;
	defaultTitle?: string;
	ariaLabel?: string;
	className?: string;
	overlayClassName?: string;
	headerClassName?: string;
	contentClassName?: string;
	footerClassName?: string;
	behavior?: 'modal' | 'slide' | 'push' | 'overlay';
	animation?: 'slide' | 'fade' | 'scale' | 'none';
	animationDuration?: number;
	zIndex?: number;
	minWidth?: string;
	maxWidth?: string;
	height?: string;
	defaultOpen?: boolean;
}

// Extended sidebar kinds for comprehensive configuration
export type ExtendedSidebarKind =
	// Basic sidebars
	| 'friends'
	| 'friends-compact'
	| 'friends-expanded'
	| 'settings'
	| 'settings-minimal'
	| 'chat'
	| 'chat-compact'
	| 'notifications'
	| 'notifications-compact'

	// Position variants
	| 'friends-left'
	| 'friends-right'
	| 'settings-left'
	| 'settings-right'

	// Size variants
	| 'friends-small'
	| 'friends-medium'
	| 'friends-large'
	| 'friends-full'

	// Behavior variants
	| 'friends-modal'
	| 'friends-slide'
	| 'friends-push'
	| 'friends-overlay'

	// Animation variants
	| 'friends-fade'
	| 'friends-scale'
	| 'friends-no-animation'

	// Custom combinations
	| 'friends-mobile'
	| 'friends-desktop'
	| 'friends-responsive'
	| 'custom';

// Sidebar configuration presets
export const SIDEBAR_CONFIGURATIONS: Record<
	ExtendedSidebarKind,
	SidebarConfiguration
> = {
	// Basic sidebars
	'friends': {
		variant: 'friends',
		position: 'right',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 300,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar',
		className: styles.friendsSidebar,
		overlayClassName: styles.sidebarOverlay,
	},

	'friends-compact': {
		variant: 'friends',
		position: 'right',
		size: 'small',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 250,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (compact)',
		className: styles.friendsSidebarCompact,
		overlayClassName: styles.sidebarOverlay,
	},

	'friends-expanded': {
		variant: 'friends',
		position: 'right',
		size: 'large',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 300,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (expanded)',
		className: styles.friendsSidebarExpanded,
		overlayClassName: styles.sidebarOverlay,
	},

	'settings': {
		variant: 'settings',
		position: 'left',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 300,
		zIndex: 2100,
		ariaLabel: 'Settings sidebar',
		className: styles.settingsSidebar,
		overlayClassName: styles.sidebarOverlay,
	},

	'settings-minimal': {
		variant: 'settings',
		position: 'left',
		size: 'small',
		hasOverlay: false,
		showCloseButton: false,
		behavior: 'push',
		animation: 'slide',
		animationDuration: 200,
		zIndex: 1000,
		ariaLabel: 'Settings sidebar (minimal)',
		className: styles.settingsSidebarMinimal,
	},

	'chat': {
		variant: 'chat',
		position: 'right',
		size: 'medium',
		hasOverlay: false,
		showCloseButton: true,
		closeButtonText: '×',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 250,
		zIndex: 1500,
		ariaLabel: 'Chat sidebar',
		className: styles.chatSidebar,
	},

	'chat-compact': {
		variant: 'chat',
		position: 'right',
		size: 'small',
		hasOverlay: false,
		showCloseButton: true,
		closeButtonText: '×',
		behavior: 'slide',
		animation: 'fade',
		animationDuration: 200,
		zIndex: 1500,
		ariaLabel: 'Chat sidebar (compact)',
		className: styles.chatSidebarCompact,
	},

	'notifications': {
		variant: 'notifications',
		position: 'right',
		size: 'small',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Dismiss',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 250,
		zIndex: 2200,
		ariaLabel: 'Notifications sidebar',
		className: styles.notificationsSidebar,
		overlayClassName: styles.sidebarOverlay,
	},

	'notifications-compact': {
		variant: 'notifications',
		position: 'right',
		size: 'small',
		hasOverlay: false,
		showCloseButton: false,
		behavior: 'slide',
		animation: 'fade',
		animationDuration: 150,
		zIndex: 1800,
		ariaLabel: 'Notifications sidebar (compact)',
		className: styles.notificationsSidebarCompact,
	},

	// Position variants
	'friends-left': {
		variant: 'friends',
		position: 'left',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 300,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (left)',
		className: styles.friendsSidebarLeft,
		overlayClassName: styles.sidebarOverlay,
	},

	'friends-right': {
		variant: 'friends',
		position: 'right',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 300,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (right)',
		className: styles.friendsSidebarRight,
		overlayClassName: styles.sidebarOverlay,
	},

	'settings-left': {
		variant: 'settings',
		position: 'left',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 300,
		zIndex: 2100,
		ariaLabel: 'Settings sidebar (left)',
		className: styles.settingsSidebarLeft,
		overlayClassName: styles.sidebarOverlay,
	},

	'settings-right': {
		variant: 'settings',
		position: 'right',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 300,
		zIndex: 2100,
		ariaLabel: 'Settings sidebar (right)',
		className: styles.settingsSidebarRight,
		overlayClassName: styles.sidebarOverlay,
	},

	// Size variants
	'friends-small': {
		variant: 'friends',
		position: 'right',
		size: 'small',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 250,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (small)',
		className: styles.friendsSidebarSmall,
		overlayClassName: styles.sidebarOverlay,
	},

	'friends-medium': {
		variant: 'friends',
		position: 'right',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 300,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (medium)',
		className: styles.friendsSidebarMedium,
		overlayClassName: styles.sidebarOverlay,
	},

	'friends-large': {
		variant: 'friends',
		position: 'right',
		size: 'large',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 350,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (large)',
		className: styles.friendsSidebarLarge,
		overlayClassName: styles.sidebarOverlay,
	},

	'friends-full': {
		variant: 'friends',
		position: 'right',
		size: 'full',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 400,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (full width)',
		className: styles.friendsSidebarFull,
		overlayClassName: styles.sidebarOverlay,
	},

	// Behavior variants
	'friends-modal': {
		variant: 'friends',
		position: 'right',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'modal',
		animation: 'fade',
		animationDuration: 250,
		zIndex: 2500,
		ariaLabel: 'Friends sidebar (modal)',
		className: styles.friendsSidebarModal,
		overlayClassName: styles.sidebarOverlay,
	},

	'friends-slide': {
		variant: 'friends',
		position: 'right',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 300,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (slide)',
		className: styles.friendsSidebarSlide,
		overlayClassName: styles.sidebarOverlay,
	},

	'friends-push': {
		variant: 'friends',
		position: 'right',
		size: 'medium',
		hasOverlay: false,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'push',
		animation: 'slide',
		animationDuration: 300,
		zIndex: 1000,
		ariaLabel: 'Friends sidebar (push)',
		className: styles.friendsSidebarPush,
	},

	'friends-overlay': {
		variant: 'friends',
		position: 'right',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'overlay',
		animation: 'fade',
		animationDuration: 200,
		zIndex: 2000,
		ariaLabel: 'Friends sidebar (overlay)',
		className: styles.friendsSidebarOverlayMode,
		overlayClassName: styles.sidebarOverlay,
	},

	// Animation variants
	'friends-fade': {
		variant: 'friends',
		position: 'right',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'fade',
		animationDuration: 250,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (fade animation)',
		className: styles.friendsSidebarFade,
		overlayClassName: styles.sidebarOverlay,
	},

	'friends-scale': {
		variant: 'friends',
		position: 'right',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'scale',
		animationDuration: 300,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (scale animation)',
		className: styles.friendsSidebarScale,
		overlayClassName: styles.sidebarOverlay,
	},

	'friends-no-animation': {
		variant: 'friends',
		position: 'right',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'none',
		animationDuration: 0,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (no animation)',
		className: styles.friendsSidebarNoAnimation,
		overlayClassName: styles.sidebarOverlay,
	},

	// Custom combinations
	'friends-mobile': {
		variant: 'friends',
		position: 'right',
		size: 'full',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 250,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (mobile)',
		className: styles.friendsSidebarMobile,
		overlayClassName: styles.sidebarOverlay,
	},

	'friends-desktop': {
		variant: 'friends',
		position: 'right',
		size: 'medium',
		hasOverlay: false,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'push',
		animation: 'slide',
		animationDuration: 300,
		zIndex: 1000,
		ariaLabel: 'Friends sidebar (desktop)',
		className: styles.friendsSidebarDesktop,
	},

	'friends-responsive': {
		variant: 'friends',
		position: 'right',
		size: 'medium',
		hasOverlay: true,
		showCloseButton: true,
		closeButtonText: 'Close',
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 300,
		zIndex: 2100,
		ariaLabel: 'Friends sidebar (responsive)',
		className: styles.friendsSidebarResponsive,
		overlayClassName: styles.sidebarOverlay,
	},

	'custom': {
		variant: 'custom',
		position: 'right',
		size: 'medium',
		hasOverlay: false,
		showCloseButton: false,
		behavior: 'slide',
		animation: 'slide',
		animationDuration: 300,
		zIndex: 1000,
		ariaLabel: 'Custom sidebar',
		className: '',
	},
};

// Sidebar groups for logical organization
export const SIDEBAR_GROUPS = {
	FRIENDS: [
		'friends',
		'friends-compact',
		'friends-expanded',
		'friends-left',
		'friends-right',
	],
	SETTINGS: [
		'settings',
		'settings-minimal',
		'settings-left',
		'settings-right',
	],
	CHAT: ['chat', 'chat-compact'],
	NOTIFICATIONS: ['notifications', 'notifications-compact'],
	SIZES: [
		'friends-small',
		'friends-medium',
		'friends-large',
		'friends-full',
	],
	BEHAVIORS: [
		'friends-modal',
		'friends-slide',
		'friends-push',
		'friends-overlay',
	],
	ANIMATIONS: [
		'friends-fade',
		'friends-scale',
		'friends-no-animation',
	],
	RESPONSIVE: [
		'friends-mobile',
		'friends-desktop',
		'friends-responsive',
	],
};

// Quick sidebar presets for common use cases
export const QUICK_SIDEBARS = {
	FRIENDS_DEFAULT: 'friends' as ExtendedSidebarKind,
	FRIENDS_MOBILE: 'friends-mobile' as ExtendedSidebarKind,
	FRIENDS_DESKTOP: 'friends-desktop' as ExtendedSidebarKind,
	SETTINGS_DEFAULT: 'settings' as ExtendedSidebarKind,
	CHAT_DEFAULT: 'chat' as ExtendedSidebarKind,
	NOTIFICATIONS_DEFAULT:
		'notifications' as ExtendedSidebarKind,
};

/**
 * Create a sidebar configuration with custom overrides
 */
export function createSidebarConfig(
	baseKind: ExtendedSidebarKind,
	overrides: Partial<SidebarConfiguration> = {}
): SidebarConfiguration {
	const baseConfig = SIDEBAR_CONFIGURATIONS[baseKind];
	return {
		...baseConfig,
		...overrides,
		// Merge className if both exist
		className:
			overrides.className ?
				`${baseConfig.className || ''} ${overrides.className}`.trim()
			:	baseConfig.className,
	};
}

/**
 * Get sidebar configuration by kind
 */
export function getSidebarConfig(
	kind: ExtendedSidebarKind
): SidebarConfiguration {
	return SIDEBAR_CONFIGURATIONS[kind];
}

/**
 * Check if a sidebar kind exists
 */
export function isSidebarKind(
	kind: string
): kind is ExtendedSidebarKind {
	return kind in SIDEBAR_CONFIGURATIONS;
}
