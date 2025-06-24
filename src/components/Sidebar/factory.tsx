import React from 'react';
import { Wrapper } from '../Wrappers';
import Sidebar from './Sidebar';
import type { SidebarProps } from './Sidebar';
import { ExtendedSidebarKind } from './configurations';

/**
 * Sidebar Factory - Creates sidebars with minimal configuration
 * This is the most DRY way to create sidebars in the entire system
 */
export class SidebarFactory {
	/**
	 * Create a sidebar with a specific kind and minimal props
	 */
	static create(
		kind: ExtendedSidebarKind,
		props: Partial<SidebarProps> = {}
	): React.ReactElement<SidebarProps> {
		return React.createElement(Sidebar, {
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
		props: Partial<SidebarProps> = {}
	): React.ReactElement<SidebarProps> {
		const kinds = SIDEBAR_GROUPS[group];
		const kind = kinds[index] as ExtendedSidebarKind;
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
		props: Partial<SidebarProps> = {}
	): React.ReactElement<SidebarProps> {
		const kind = QUICK_SIDEBARS[preset];
		return this.create(kind, props);
	}

	/**
	 * Create multiple sidebars at once
	 */
	static createMultiple(
		configs: Array<{
			kind: ExtendedSidebarKind;
			props?: Partial<SidebarProps>;
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
		baseKind: ExtendedSidebarKind,
		customConfig: Partial<SidebarConfiguration>,
		props: Partial<SidebarProps> = {}
	): React.ReactElement<SidebarProps> {
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
	kind: ExtendedSidebarKind,
	props?: Partial<SidebarProps>
) => SidebarFactory.create(kind, props);

// Quick preset functions
export const SidebarPresets = {
	Friends: (props?: Partial<SidebarProps>) =>
		SidebarFactory.createQuick('FRIENDS_DEFAULT', props),
	FriendsMobile: (props?: Partial<SidebarProps>) =>
		SidebarFactory.createQuick('FRIENDS_MOBILE', props),
	FriendsDesktop: (props?: Partial<SidebarProps>) =>
		SidebarFactory.createQuick('FRIENDS_DESKTOP', props),
	Settings: (props?: Partial<SidebarProps>) =>
		SidebarFactory.createQuick('SETTINGS_DEFAULT', props),
	Chat: (props?: Partial<SidebarProps>) =>
		SidebarFactory.createQuick('CHAT_DEFAULT', props),
	Notifications: (props?: Partial<SidebarProps>) =>
		SidebarFactory.createQuick(
			'NOTIFICATIONS_DEFAULT',
			props
		),
};

// Group-based creation functions
export const SidebarGroups = {
	Friends: (
		index: number = 0,
		props?: Partial<SidebarProps>
	) =>
		SidebarFactory.createFromGroup('FRIENDS', index, props),
	Settings: (
		index: number = 0,
		props?: Partial<SidebarProps>
	) =>
		SidebarFactory.createFromGroup(
			'SETTINGS',
			index,
			props
		),
	Chat: (
		index: number = 0,
		props?: Partial<SidebarProps>
	) => SidebarFactory.createFromGroup('CHAT', index, props),
	Notifications: (
		index: number = 0,
		props?: Partial<SidebarProps>
	) =>
		SidebarFactory.createFromGroup(
			'NOTIFICATIONS',
			index,
			props
		),
	Sizes: (
		index: number = 0,
		props?: Partial<SidebarProps>
	) =>
		SidebarFactory.createFromGroup('SIZES', index, props),
	Behaviors: (
		index: number = 0,
		props?: Partial<SidebarProps>
	) =>
		SidebarFactory.createFromGroup(
			'BEHAVIORS',
			index,
			props
		),
	Animations: (
		index: number = 0,
		props?: Partial<SidebarProps>
	) =>
		SidebarFactory.createFromGroup(
			'ANIMATIONS',
			index,
			props
		),
	Responsive: (
		index: number = 0,
		props?: Partial<SidebarProps>
	) =>
		SidebarFactory.createFromGroup(
			'RESPONSIVE',
			index,
			props
		),
};

// Specific sidebar creation functions for common use cases
export const createFriendsSidebar = (
	props?: Partial<SidebarProps>
) => S('friends', props);

export const createFriendsCompactSidebar = (
	props?: Partial<SidebarProps>
) => S('friends-compact', props);

export const createFriendsExpandedSidebar = (
	props?: Partial<SidebarProps>
) => S('friends-expanded', props);

export const createSettingsSidebar = (
	props?: Partial<SidebarProps>
) => S('settings', props);

export const createChatSidebar = (
	props?: Partial<SidebarProps>
) => S('chat', props);

export const createNotificationsSidebar = (
	props?: Partial<SidebarProps>
) => S('notifications', props);

// Position-specific functions
export const createLeftSidebar = (
	variant: 'friends' | 'settings' = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-left` as ExtendedSidebarKind, props);

export const createRightSidebar = (
	variant: 'friends' | 'settings' = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-right` as ExtendedSidebarKind, props);

// Size-specific functions
export const createSmallSidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-small` as ExtendedSidebarKind, props);

export const createMediumSidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-medium` as ExtendedSidebarKind, props);

export const createLargeSidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-large` as ExtendedSidebarKind, props);

export const createFullSidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-full` as ExtendedSidebarKind, props);

// Responsive functions
export const createMobileSidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-mobile` as ExtendedSidebarKind, props);

export const createDesktopSidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-desktop` as ExtendedSidebarKind, props);

export const createResponsiveSidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) =>
	S(`${variant}-responsive` as ExtendedSidebarKind, props);

// Animation-specific functions
export const createFadeSidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-fade` as ExtendedSidebarKind, props);

export const createScaleSidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-scale` as ExtendedSidebarKind, props);

export const createNoAnimationSidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) =>
	S(
		`${variant}-no-animation` as ExtendedSidebarKind,
		props
	);

// Behavior-specific functions
export const createModalSidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-modal` as ExtendedSidebarKind, props);

export const createSlideSidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-slide` as ExtendedSidebarKind, props);

export const createPushSidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-push` as ExtendedSidebarKind, props);

export const createOverlaySidebar = (
	variant: string = 'friends',
	props?: Partial<SidebarProps>
) => S(`${variant}-overlay` as ExtendedSidebarKind, props);

/**
 * Sidebar composition utilities
 */
export const SidebarComposer = {
	/**
	 * Create a sidebar stack (multiple sidebars with different z-indexes)
	 */
	createStack: (
		configs: Array<{
			kind: ExtendedSidebarKind;
			props?: Partial<SidebarProps>;
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
		mobileKind: ExtendedSidebarKind,
		desktopKind: ExtendedSidebarKind,
		props?: Partial<SidebarProps>
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
	props?: Partial<SidebarProps>
) => S('friends', props);
export const SettingsSidebar = (
	props?: Partial<SidebarProps>
) => S('settings', props);
export const ChatSidebar = (
	props?: Partial<SidebarProps>
) => S('chat', props);
export const NotificationsSidebar = (
	props?: Partial<SidebarProps>
) => S('notifications', props);

// Default export is the factory
export default SidebarFactory;
