import React from 'react';
import UnifiedSidebar, {
	UnifiedSidebarProps,
	SidebarKind,
} from './UnifiedSidebar';
import {
	SIDEBAR_CONFIGURATIONS,
	SIDEBAR_GROUPS,
	QUICK_SIDEBARS,
	SidebarConfiguration,
} from './configurations';

/**
 * Sidebar Factory - Creates sidebars with minimal configuration
 * This is the most DRY way to create sidebars in the entire system
 */
export class SidebarFactory {
	/**
	 * Create a sidebar with a specific kind and minimal props
	 */
	static create(
		kind: SidebarKind,
		props: Partial<UnifiedSidebarProps> = {}
	): React.ReactElement<UnifiedSidebarProps> {
		return React.createElement(UnifiedSidebar, {
			kind,
			open: false, // Default value
			...props,
		});
	}

	/**
	 * Create a sidebar from a configuration group
	 */
	static createFromGroup(
		group: keyof typeof SIDEBAR_GROUPS,
		index: number = 0,
		props: Partial<UnifiedSidebarProps> = {}
	): React.ReactElement<UnifiedSidebarProps> {
		const kinds = SIDEBAR_GROUPS[group];
		const kind = kinds[index] as SidebarKind;
		if (!kind) {
			throw new Error(
				`Invalid index ${index} for group ${group}`
			);
		}
		return this.create(kind, props);
	}

	/**
	 * Create a quick sidebar preset
	 */
	static createQuick(
		preset: keyof typeof QUICK_SIDEBARS,
		props: Partial<UnifiedSidebarProps> = {}
	): React.ReactElement<UnifiedSidebarProps> {
		const kind = QUICK_SIDEBARS[preset];
		return this.create(kind, props);
	}

	/**
	 * Create multiple sidebars at once
	 */
	static createMultiple(
		configs: Array<{
			kind: SidebarKind;
			props?: Partial<UnifiedSidebarProps>;
			key?: string;
		}>
	): React.ReactElement[] {
		return configs.map(({ kind, props = {}, key }, index) =>
			React.cloneElement(this.create(kind, props), {
				key: key || `sidebar-${kind}-${index}`,
			})
		);
	}

	/**
	 * Create a sidebar with custom configuration
	 */
	static createCustom(
		baseKind: SidebarKind,
		customConfig: Partial<SidebarConfiguration>,
		props: Partial<UnifiedSidebarProps> = {}
	): React.ReactElement<UnifiedSidebarProps> {
		// This would require extending the system to support runtime config override
		// For now, just use the base kind and merge props
		return this.create(baseKind, {
			...props,
			className:
				customConfig.className ?
					`${props.className || ''} ${customConfig.className}`.trim()
				:	props.className,
		});
	}
}

/**
 * Ultra-DRY Sidebar Creation Functions
 * These are the shortest possible ways to create sidebars
 */

// Main factory function - shortest way to create any sidebar
export const S = (
	kind: SidebarKind,
	props?: Partial<UnifiedSidebarProps>
) => SidebarFactory.create(kind, props);

// Quick preset functions
export const SidebarPresets = {
	Friends: (props?: Partial<UnifiedSidebarProps>) =>
		SidebarFactory.createQuick('FRIENDS_DEFAULT', props),
	FriendsMobile: (props?: Partial<UnifiedSidebarProps>) =>
		SidebarFactory.createQuick('FRIENDS_MOBILE', props),
	FriendsDesktop: (props?: Partial<UnifiedSidebarProps>) =>
		SidebarFactory.createQuick('FRIENDS_DESKTOP', props),
	Settings: (props?: Partial<UnifiedSidebarProps>) =>
		SidebarFactory.createQuick('SETTINGS_DEFAULT', props),
	Chat: (props?: Partial<UnifiedSidebarProps>) =>
		SidebarFactory.createQuick('CHAT_DEFAULT', props),
	Notifications: (props?: Partial<UnifiedSidebarProps>) =>
		SidebarFactory.createQuick(
			'NOTIFICATIONS_DEFAULT',
			props
		),
};

// Group-based creation functions
export const SidebarGroups = {
	Friends: (
		index: number = 0,
		props?: Partial<UnifiedSidebarProps>
	) =>
		SidebarFactory.createFromGroup('FRIENDS', index, props),
	Settings: (
		index: number = 0,
		props?: Partial<UnifiedSidebarProps>
	) =>
		SidebarFactory.createFromGroup(
			'SETTINGS',
			index,
			props
		),
	Chat: (
		index: number = 0,
		props?: Partial<UnifiedSidebarProps>
	) => SidebarFactory.createFromGroup('CHAT', index, props),
	Notifications: (
		index: number = 0,
		props?: Partial<UnifiedSidebarProps>
	) =>
		SidebarFactory.createFromGroup(
			'NOTIFICATIONS',
			index,
			props
		),
	Sizes: (
		index: number = 0,
		props?: Partial<UnifiedSidebarProps>
	) =>
		SidebarFactory.createFromGroup('SIZES', index, props),
	Behaviors: (
		index: number = 0,
		props?: Partial<UnifiedSidebarProps>
	) =>
		SidebarFactory.createFromGroup(
			'BEHAVIORS',
			index,
			props
		),
	Animations: (
		index: number = 0,
		props?: Partial<UnifiedSidebarProps>
	) =>
		SidebarFactory.createFromGroup(
			'ANIMATIONS',
			index,
			props
		),
	Responsive: (
		index: number = 0,
		props?: Partial<UnifiedSidebarProps>
	) =>
		SidebarFactory.createFromGroup(
			'RESPONSIVE',
			index,
			props
		),
};

// Specific sidebar creation functions for common use cases
export const createFriendsSidebar = (
	props?: Partial<UnifiedSidebarProps>
) => S('friends', props);

export const createFriendsCompactSidebar = (
	props?: Partial<UnifiedSidebarProps>
) => S('friends-compact', props);

export const createFriendsExpandedSidebar = (
	props?: Partial<UnifiedSidebarProps>
) => S('friends-expanded', props);

export const createSettingsSidebar = (
	props?: Partial<UnifiedSidebarProps>
) => S('settings', props);

export const createChatSidebar = (
	props?: Partial<UnifiedSidebarProps>
) => S('chat', props);

export const createNotificationsSidebar = (
	props?: Partial<UnifiedSidebarProps>
) => S('notifications', props);

// Position-specific functions
export const createLeftSidebar = (
	variant: 'friends' | 'settings' = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-left` as SidebarKind, props);

export const createRightSidebar = (
	variant: 'friends' | 'settings' = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-right` as SidebarKind, props);

// Size-specific functions
export const createSmallSidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-small` as SidebarKind, props);

export const createMediumSidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-medium` as SidebarKind, props);

export const createLargeSidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-large` as SidebarKind, props);

export const createFullSidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-full` as SidebarKind, props);

// Responsive functions
export const createMobileSidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-mobile` as SidebarKind, props);

export const createDesktopSidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-desktop` as SidebarKind, props);

export const createResponsiveSidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-responsive` as SidebarKind, props);

// Animation-specific functions
export const createFadeSidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-fade` as SidebarKind, props);

export const createScaleSidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-scale` as SidebarKind, props);

export const createNoAnimationSidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-no-animation` as SidebarKind, props);

// Behavior-specific functions
export const createModalSidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-modal` as SidebarKind, props);

export const createSlideSidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-slide` as SidebarKind, props);

export const createPushSidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-push` as SidebarKind, props);

export const createOverlaySidebar = (
	variant: string = 'friends',
	props?: Partial<UnifiedSidebarProps>
) => S(`${variant}-overlay` as SidebarKind, props);

/**
 * Sidebar composition utilities
 */
export const SidebarComposer = {
	/**
	 * Create a sidebar stack (multiple sidebars with different z-indexes)
	 */
	createStack: (
		configs: Array<{
			kind: SidebarKind;
			props?: Partial<UnifiedSidebarProps>;
		}>
	) => {
		return configs.map(({ kind, props = {} }, index) =>
			S(kind, {
				...props,
				style: {
					...props.style,
					zIndex:
						((props.style?.zIndex as number) || 1000) +
						index,
				},
			})
		);
	},

	/**
	 * Create a responsive sidebar that changes based on screen size
	 */
	createResponsive: (
		mobileKind: SidebarKind,
		desktopKind: SidebarKind,
		props?: Partial<UnifiedSidebarProps>
	) => {
		// This would require media query detection
		// For now, return the responsive variant
		return S('friends-responsive', props);
	},
};

/**
 * Legacy aliases for backward compatibility
 */
export const createSidebar = S;
export const Sidebar = S;
export const FriendsSidebar = (
	props?: Partial<UnifiedSidebarProps>
) => S('friends', props);
export const SettingsSidebar = (
	props?: Partial<UnifiedSidebarProps>
) => S('settings', props);
export const ChatSidebar = (
	props?: Partial<UnifiedSidebarProps>
) => S('chat', props);
export const NotificationsSidebar = (
	props?: Partial<UnifiedSidebarProps>
) => S('notifications', props);

// Default export is the factory
export default SidebarFactory;
