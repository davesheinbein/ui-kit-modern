// ===== UNIFIED COMPONENT SYSTEM =====
// Primary exports - Use these for new development

// Component Factory System - Universal component creation
export {
	ComponentFactory,
	C,
	ComponentPresets,
	QuickComponents,
	COMPONENT_CONFIGURATIONS,
} from './components/ComponentFactory';
export type {
	ComponentType,
	ComponentKind,
	ComponentConfiguration,
	ComponentFactoryProps,
} from './components/ComponentFactory';

// Core Unified Components
export * from './components/Advertisements';
export * from './components/Analytics';
export * from './components/Button';
export * from './components/Navigation';
export * from './components/Table';
export * from './components/Notification';
export * from './components/FileUpload';
export * from './components/Chart';
export * from './components/EmptyState';
export * from './components/Progress';
export * from './components/Media';
export * from './components/Map';
export * from './components/Utility';

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
	ModalWorkflows,
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
	VSGrid,
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
	VSGridPropsLegacy,
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

// Use GridFactory, G, or QuickGrids from './components/Grid' instead.

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
	Admin,
	AdminBodyFactory,
	ADMIN_CONFIGURATIONS,
} from './components/Admin';
export type {
	AdminKind,
	AdminConfiguration,
	AdminProps,
	AdminBodyFactoryProps,
} from './components/Admin';

// Legacy compatibility
export { SessionDebugger } from './components/Admin';
export type { SessionDebuggerProps } from './components/Admin';

// Enhanced Range System - All range/slider types via single component (DRY System)
export {
	RangeFactory,
	Range,
	UnifiedRange,
	RANGE_CONFIGURATIONS,
} from './components/Ranges';
export type {
	RangeFactoryProps,
	RangeConfiguration,
	ExtendedRangeKind,
	RangeVariant,
	RangeSize,
	RangeState,
	RangeStyle,
} from './components/Ranges';

// Monetization Components
export {
	UnifiedMonetization,
	MonetizationFactory,
	M as MonetizationM,
	MonetizationPresets,
	QuickMonetization,
	SimpleMonetizationFactory,
	createMonetization,
	Monetization,
	MONETIZATION_CONFIGURATIONS,
	MONETIZATION_GROUPS,
	createMonetizationConfig,
	validateMonetizationConfig,
	formatPrice,
	calculateDiscount,
} from './components/Monetization';
export type {
	MonetizationKind,
	MonetizationVariant,
	MonetizationSize,
	PricingPeriod,
	PaymentMethod,
	MonetizationConfiguration,
	MonetizationStyling,
	MonetizationBehavior,
	MonetizationContent,
	PricingPlan,
	UsageData,
	PaymentData,
	UnifiedMonetizationProps,
	BaseMonetizationProps,
	MonetizationProps,
	PricingCardConfig,
	SubscriptionPlanConfig,
	FeatureComparisonConfig,
	PaymentFormConfig,
	BillingSummaryConfig,
	UpgradePromptConfig,
	UsageMeterConfig,
	CreditDisplayConfig,
	PurchaseButtonConfig,
	DiscountBannerConfig,
} from './components/Monetization';
