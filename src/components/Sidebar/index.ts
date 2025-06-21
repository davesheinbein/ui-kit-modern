export { default as UnifiedSidebar } from './UnifiedSidebar';
export type {
	SidebarKind,
	UnifiedSidebarProps,
	SidebarVariant,
} from './UnifiedSidebar';

// Base Sidebar component
export { default as Sidebar, FriendsSidebar } from './Sidebar';
export type { SidebarProps, FriendsSidebarProps } from './Sidebar';

export * from './configurations';

export {
	default as SidebarFactory,
	S,
	SidebarPresets,
	SidebarGroups,
	SidebarComposer,
	createFriendsSidebar,
	createFriendsCompactSidebar,
	createFriendsExpandedSidebar,
	createSettingsSidebar,
	createChatSidebar,
	createNotificationsSidebar,
	createLeftSidebar,
	createRightSidebar,
	createSmallSidebar,
	createMediumSidebar,
	createLargeSidebar,
	createFullSidebar,
	createMobileSidebar,
	createDesktopSidebar,
	createResponsiveSidebar,
	createFadeSidebar,
	createScaleSidebar,
	createNoAnimationSidebar,
	createModalSidebar,
	createSlideSidebar,
	createPushSidebar,
	createOverlaySidebar,
	createSidebar,
	SettingsSidebar,
	ChatSidebar,
	NotificationsSidebar,
} from './factory';
