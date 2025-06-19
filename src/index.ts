// ===== UNIFIED COMPONENT SYSTEM =====
// Primary exports - Use these for new development

// Ultra-DRY Component Factory System - Universal component creation
export {
	ComponentFactory,
	C,
	ComponentPresets,
	QuickComponents,
	COMPONENT_CONFIGURATIONS,
} from './components/UltraDRYComponentFactory';
export type {
	ComponentType,
	ComponentKind,
	ComponentConfiguration,
	ComponentFactoryProps,
} from './components/UltraDRYComponentFactory';

// Core Unified Components
export * from './components/Button';

// Enhanced Form Field System - All form field types via single component (DRY System)
export {
	FormFieldFactory,
	F,
	FormFieldPresets,
	FORM_FIELD_CONFIGURATIONS,
	FORM_FIELD_GROUPS,
	FORM_FIELD_PRESETS,
	createFormFieldConfig,
	validateFormField,
	UnifiedFormField,
	FormField,
	FormFieldBodyFactory,
} from './components/FormField';

// Enhanced Checkbox System - All checkbox types via single component (DRY System)
export {
	CheckboxFactory,
	C as CheckboxC,
	CheckboxPresets,
	UnifiedCheckbox,
	Checkbox,
	DarkModeToggle,
	CHECKBOX_CONFIGURATIONS,
} from './components/Checkbox';
export type {
	CheckboxKind,
	UnifiedCheckboxProps,
	BaseCheckboxProps,
	CheckboxProps,
	CheckboxFactoryProps,
	ExtendedCheckboxKind,
	CheckboxConfiguration,
	CheckboxVariant,
} from './components/Checkbox';

export {
	UnifiedModal,
	ModalFactory,
	M,
	ModalPresets,
	createModal,
	ModalBodyFactory,
	ModalFooterFactory,
	MODAL_CONFIGURATIONS,
	MODAL_GROUPS,
	getModalConfiguration,
	mergeModalConfiguration,
	isGameModal,
	isVersusModal,
	isCommerceModal,
	isInteractionModal,
	isLayoutModal,
} from './components/Modal';
export type {
	ModalKind,
	UnifiedModalProps,
	ExtendedModalKind,
	ModalConfiguration,
	ModalSize,
	ModalPosition,
	ModalAnimation,
} from './components/Modal';

// Enhanced Header System - All header types via single component (DRY System)
export {
	HeaderFactory,
	H,
	HeaderPresets,
	createHeader,
	UnifiedHeader,
	Header,
	BrowseHeader,
	HEADER_CONFIGURATIONS,
	HEADER_GROUPS,
	QUICK_HEADERS,
	createHeaderConfig,
	mergeActions,
} from './components/Header';
export type {
	HeaderKind,
	UnifiedHeaderProps,
	HeaderProps,
	BrowseHeaderProps,
	ExtendedHeaderKind,
	HeaderConfiguration,
	HeaderVariant,
	TabConfiguration,
	ActionConfiguration,
} from './components/Header';

// Enhanced Button System - All button types via single component
export {
	UnifiedButton,
	Button,
	ButtonFactory,
	B,
	ButtonPresets,
	BUTTON_CONFIGURATIONS,
	BUTTON_GROUPS,
	QUICK_BUTTONS,
} from './components/Button';
export type {
	ButtonKind,
	UnifiedButtonProps,
	ButtonProps,
	ExtendedButtonKind,
	ButtonConfiguration,
} from './components/Button';

// Enhanced Sidebar System - All sidebar types via single component
export {
	UnifiedSidebar,
	FriendsSidebar,
	SidebarFactory,
	S,
	SidebarPresets,
	SidebarGroups,
	SidebarComposer,
	SIDEBAR_CONFIGURATIONS,
	SIDEBAR_GROUPS,
	QUICK_SIDEBARS,
	createSidebarConfig,
	getSidebarConfig,
	isSidebarKind,
} from './components/Sidebar';
export type {
	SidebarKind,
	UnifiedSidebarProps,
	FriendsSidebarProps,
	ExtendedSidebarKind,
	SidebarConfiguration,
	SidebarVariant,
} from './components/Sidebar';

// Enhanced Card System - All card types via single component (DRY System)
export {
	UnifiedCard,
	Card,
	CardFactory,
	CardPresets,
	CardFactoryClass,
	QuickCards,
	CARD_CONFIGURATIONS,
	CARD_GROUPS,
	QUICK_CARDS,
	createCardConfig,
} from './components/Card';
// Note: Card factory uses CardFactory or QuickCards instead of 'C' to avoid conflict with ComponentFactory
export { C as CardC } from './components/Card'; // Card factory alias
export type {
	CardKind,
	UnifiedCardProps,
	CardProps,
	ExtendedCardKind,
	CardConfiguration,
} from './components/Card';

// Enhanced Grid System - All grid types via single component (DRY System)
export {
	UnifiedGrid,
	GridFactory,
	G,
	GridPresets,
	QuickGrids,
	Grid,
	GRID_CONFIGURATIONS,
	GRID_GROUPS,
	GRID_PRESETS,
	createGridConfig,
	validateGrid,
} from './components/Grid';
export type {
	GridKind,
	UnifiedGridProps,
	GridProps,
	BaseGridProps,
	VSGridProps,
	SolvedGroupsProps,
	PregameGridProps,
	ExtendedGridKind,
	GridConfiguration,
	GridVariant,
	GridLayout,
	GridStyling,
	GridBehavior,
	GridFactoryProps,
} from './components/Grid';

// Core Unified Components
export * from './components/Button';
// These are lightweight wrappers around unified components for backward compatibility

// Note: Legacy form field components have been migrated to the DRY FormField system.
// Use FormFieldFactory, F, or FormFieldPresets from './components/FormField' instead.

// Enhanced Modal System - All modal types via single component
export {
	Modal,
	SimpleModalFactory,
	useModal,
} from './components/Modal';

// DRY Banner System
export * from './components/Banner';
export {
	BannerFactory,
	Ban,
	BannerPresets,
} from './components/Banner';

// ===== DOMAIN-SPECIFIC COMPONENTS =====
// Specialized components for specific use cases

// Note: Legacy modal components have been migrated to the DRY modal system.
// Use ModalFactory, M, or ModalPresets from './components/Modal' instead.

// Enhanced Pages System - All page types via single component (DRY System)
export {
	PageFactory,
	P as PageP,
	PagePresets,
	createPage,
	UnifiedPage,
	Page,
	StartupPage,
} from './components/Pages';
export type {
	PageKind,
	UnifiedPageProps,
	BasePageProps,
	PageProps,
	PageFactoryProps,
	ExtendedPageKind,
	PageConfiguration,
	PageVariant,
	PageLayout,
	StartupPageProps,
} from './components/Pages';

// Layout & Navigation
// Footer DRY System - Complete footer solution
export {
	Footer,
	UnifiedFooter,
	FooterFactory,
	Foot,
	FooterPresets,
	FOOTER_CONFIGURATIONS,
} from './components/Footer';
export type {
	FooterKind,
	UnifiedFooterProps,
	FooterProps,
	FooterConfiguration,
	FooterLink,
} from './components/Footer';

// Settings System (DRY) - Now includes comprehensive theme/appearance management
export * from './components/Settings';

// Context Providers
export * from './components/Providers';

// Social & Communication
// Note: FriendCard is deprecated - use UnifiedCard with kind="friend" instead
// export { FriendCard } from './components/FriendCard';
// Note: FriendsSidebar is now part of the DRY Sidebar system - exported above
export { VSQuickChatBar } from './components/Chat';

// ===== DRY CHAT SYSTEM =====
export {
	ChatFactory,
	ChatFactoryClass,
	ChatFactoryShortcut,
	ChatPresets,
	CHAT_CONFIGURATIONS,
	UnifiedChat,
	Chat,
	ChatBodyFactory,
} from './components/Chat';
export type {
	ChatFactoryProps,
	ChatKind,
	ChatConfiguration,
	ChatVariant,
	ChatPosition,
	UnifiedChatProps,
	ChatProps,
	ChatBodyFactoryProps,
} from './components/Chat';

// Notifications & Feedback - Now using DRY Banner System
// Legacy exports removed: FeedbackBanner, GlobalToast, NotificationBanner, ToastBanner
// Use BannerFactory, Ban, or BannerPresets instead

// Game Components - VSStatusBar moved to DRY Banner System
// Note: Legacy grid components have been migrated to the DRY Grid system.
// Use GridFactory, G, or QuickGrids from './components/Grid' instead.
// export { PregameGridLockout } from './components/PregameGridLockout'; // @deprecated Use UnifiedGrid with kind="pregame-lockout"
// export { SolvedGroupsDisplay } from './components/SolvedGroupsDisplay'; // @deprecated Use UnifiedGrid with kind="solved-groups"
// export { VSBotGame } from './components/VSBotGame'; // @deprecated Use UnifiedGrid with kind="vs-bot"
// export { VSGrid } from './components/VSGrid'; // @deprecated Use UnifiedGrid with kind="vs-grid"
// export { VSMultiplayerGame } from './components/VSMultiplayerGame'; // @deprecated Use UnifiedGrid with kind="vs-multiplayer"
// VSStatusBar moved to Banner system: use BannerFactory with kind="vs-status"

// Data Visualization
export { default as Graphs } from './components/Graphs';
export type {
	GraphsProps,
	GraphShape,
} from './components/Graphs';
export { StatisticsSummary } from './components/Statistics';
export type {
	StatisticsSummaryProps,
	PlayerStats,
	StatisticsSummaryMode,
} from './components/Statistics';

// Development & Debug - DRY Admin System
export {
	AdminFactory,
	A,
	AdminPresets,
	createAdmin,
	UnifiedAdmin,
	Admin,
	AdminBodyFactory,
	ADMIN_CONFIGURATIONS,
} from './components/Admin';
export type {
	AdminKind,
	AdminConfiguration,
	AdminProps,
	UnifiedAdminProps,
	AdminBodyFactoryProps,
} from './components/Admin';

// Legacy compatibility
export { default as SessionDebugger } from './components/Admin/SessionDebugger';
export type { SessionDebuggerProps } from './components/Admin/SessionDebugger';
