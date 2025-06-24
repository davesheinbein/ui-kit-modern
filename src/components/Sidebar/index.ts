export type {
	SidebarKind,
	SidebarVariant,
} from './Sidebar';

// Base Sidebar component
export {
	default as Sidebar,
	FriendsSidebar,
} from './Sidebar';
export type {
	SidebarProps,
	FriendsSidebarProps,
} from './Sidebar';

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
