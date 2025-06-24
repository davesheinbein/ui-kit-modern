// =====  COMPONENT SYSTEM =====
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

// Core  Components
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
	FormsFactory,
	F,
	FormsPresets,
	FORM_FIELD_CONFIGURATIONS,
	FORM_FIELD_GROUPS,
	FORM_FIELD_PRESETS,
	createFormsConfig,
	validateForms,
	Forms,
	FormsBodyFactory,
} from './components/Forms';

// Enhanced Checkbox System - All checkbox types via single component (DRY System)
export {
	CheckboxFactory,
	CheckboxPresets,
	Checkbox,
	DarkModeToggle,
	CHECKBOX_CONFIGURATIONS,
} from './components/Checkbox';
export type {
	CheckboxKind,
	BaseCheckboxProps,
	CheckboxProps,
	CheckboxFactoryProps,
	ExtendedCheckboxKind,
	CheckboxConfiguration,
	CheckboxVariant,
} from './components/Checkbox';

export {
	M,
	ModalFactory,
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
	ModalProps,
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
	Sidebar,
	FriendsSidebar,
	SidebarFactory,
	S,
	SidebarPresets,
	SidebarGroups,
	SidebarComposer,
} from './components/Sidebar';
export type {
	SidebarKind,
	SidebarProps,
	FriendsSidebarProps,
	SidebarVariant,
} from './components/Sidebar';

// Enhanced Card System - All card types via single component (DRY System)
export {
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
	CardProps,
	ExtendedCardKind,
	CardConfiguration,
} from './components/Card';

// Enhanced Grid System - All grid types via single component (DRY System)
export {
	Grid,
	GridFactory,
	G,
	GridPresets,
	QuickGrids,
	VSGrid,
	GRID_CONFIGURATIONS,
	GRID_GROUPS,
	GRID_PRESETS,
	createGridConfig,
	validateGrid,
} from './components/Grid';
export type {
	GridKind,
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

// Core  Components
export * from './components/Button';
// These are lightweight wrappers around  components for backward compatibility

// Use FormsFactory, F, or FormsPresets from './components/Forms' instead.

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
	Page,
	StartupPage,
} from './components/Pages';
export type { BasePageProps } from './components/Pages';

// Layout & Navigation
// Footer DRY System - Complete footer solution
export {
	Footer,
	FooterFactory,
	Foot,
	FooterPresets,
	FOOTER_CONFIGURATIONS,
} from './components/Footer';
export type {
	FooterKind,
	FooterProps,
	FooterConfiguration,
	FooterLink,
} from './components/Footer';

// Settings System (DRY) - Now includes comprehensive theme/appearance management
export { default as Settings } from './components/Settings/Settings';
export type {
	SettingsKind,
	SettingsProps,
} from './components/Settings/Settings';

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
	Chat,
	ChatBodyFactory,
} from './components/Chat';
export type {
	ChatFactoryProps,
	ChatKind,
	ChatConfiguration,
	ChatVariant,
	ChatPosition,
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
export { Statistics } from './components/Statistics';
export type {
	StatisticsProps,
	PlayerStats,
	StatisticsMode,
} from './components/Statistics';

// Development & Debug - DRY Admin System
export {
	AdminFactory,
	A,
	AdminPresets,
	createAdmin,
	Admin,
	ADMIN_CONFIGURATIONS,
} from './components/Admin';
export type {
	AdminKind,
	AdminConfiguration,
	AdminProps,
} from './components/Admin';

// Legacy compatibility
export { SessionDebugger } from './components/Admin';
export type { SessionDebuggerProps } from './components/Admin';

// Enhanced Range System - All range/slider types via single component (DRY System)
export {
	RangeFactory,
	Range,
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
	Monetization,
	MonetizationFactory,
	M as MonetizationM,
	MonetizationPresets,
	QuickMonetization,
	SimpleMonetizationFactory,
	createMonetization,
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
	BaseMonetizationProps,
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

// Enhanced Wrapper System - Ultra-DRY wrapper system for backward compatibility and  interfaces
export {
	Wrapper,
	WrapperFactory,
	W,
	WrapperPresets,
	createWrapper,
	createWrapperWithConfig,
} from './components/Wrappers';
export type {
	WrapperProps,
	WrapperKind,
	WrapperVariant,
	WrapperLayout,
	WrapperConfiguration,
	WrapperFactoryProps,
} from './components/Wrappers';

// Export all  and main components for library consumers
export * from './components/FileUpload';
export * from './components/Footer';
export * from './components/Forms';
export * from './components/Graphs';
export * from './components/Grid';
export * from './components/Header';
export * from './components/Map';
export * from './components/Media';
export * from './components/Modal';
export * from './components/Monetization';
export * from './components/Navigation';
export * from './components/Notification';
export * from './components/Progress';
export * from './components/Providers';
export * from './components/Radios';
export * from './components/Ranges';
export * from './components/Selects';

// Explicitly export only the main types/components from Themes to avoid conflicts
export { default as ThemeSelector } from './components/Themes/ThemeSelector';
export type {
	ThemeSelectorProps,
	ThemeKind,
	ThemeVariant,
	ThemeDisplay,
	ThemeLayout,
	ThemeDefinition,
} from './components/Themes/ThemeSelector';

export * from './components/Sidebar';
export * from './components/Statistics';
export * from './components/Switchs';
export * from './components/Table';
export * from './components/Textareas';
export * from './components/Utility';
export * from './components/Wrappers';
