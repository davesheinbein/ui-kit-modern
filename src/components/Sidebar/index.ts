export { default as UnifiedSidebar } from './UnifiedSidebar';
export type {
	SidebarKind,
	UnifiedSidebarProps,
	SidebarVariant,
} from './UnifiedSidebar';

// Keep the original FriendsSidebar component for backward compatibility
export { default as FriendsSidebar } from './FriendsSidebar';
export type { FriendsSidebarProps } from './FriendsSidebar';

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
	Sidebar,
	SettingsSidebar,
	ChatSidebar,
	NotificationsSidebar,
} from './factory';
