/**
 * WrapperConfigurations.ts - DRY Wrapper Configuration System
 *
 * This file provides a comprehensive configuration system for all wrapper types
 * used throughout the application. Wrappers provide backward compatibility
 * and simplified interfaces to unified components.
 */

// ========================================
// Core Types and Interfaces
// ========================================

export type WrapperKind =
	// Generic Wrappers
	| 'component'
	| 'provider'
	| 'legacy'

	// Layout Wrappers
	| 'flex-container'
	| 'grid-container'
	| 'center-container'
	| 'stack-container'

	// Component Wrappers
	| 'button-wrapper'
	| 'header-wrapper'
	| 'modal-wrapper'
	| 'grid-wrapper'
	| 'page-wrapper'
	| 'graph-wrapper'
	| 'sidebar-wrapper'
	| 'settings-wrapper'
	| 'theme-wrapper'
	| 'admin-wrapper'
	| 'card-wrapper'
	| 'banner-wrapper'
	| 'chat-wrapper'
	| 'form-wrapper'

	// Provider Wrappers
	| 'socket-provider-wrapper'
	| 'user-settings-provider-wrapper'
	| 'theme-palette-provider-wrapper'
	| 'achievement-socket-listener-wrapper'

	// Legacy Component Wrappers
	| 'primary-button-wrapper'
	| 'secondary-button-wrapper'
	| 'close-button-wrapper'
	| 'icon-button-wrapper'
	| 'browse-header-wrapper'
	| 'modal-header-wrapper'
	| 'vs-grid-wrapper'
	| 'startup-page-wrapper'
	| 'customization-category-wrapper'
	| 'settings-panel-wrapper'
	| 'theme-selector-wrapper'
	| 'friends-sidebar-wrapper'
	| 'session-debugger-wrapper'
	| 'dark-mode-toggle-wrapper'

	// Generic Wrappers
	| 'backward-compatibility-wrapper'
	| 'legacy-wrapper'
	| 'simple-wrapper'
	| 'enhanced-wrapper';

export type WrapperVariant =
	| 'backward-compatibility'
	| 'simplified-interface'
	| 'enhanced-functionality'
	| 'legacy-support'
	| 'provider-wrapper'
	| 'component-wrapper'
	| 'layout-container';

export type WrapperLayout =
	| 'passthrough'
	| 'enhanced'
	| 'simplified'
	| 'decorated';

// ========================================
// Configuration Interfaces
// ========================================

export interface WrapperConfiguration {
	kind: WrapperKind;
	variant: WrapperVariant;
	layout: WrapperLayout;

	// Target Component
	targetComponent: string;
	unifiedComponent: string;

	// Wrapper Properties
	maintainAPI?: boolean;
	addEnhancements?: boolean;
	simplifyProps?: boolean;
	preserveEvents?: boolean;

	// Styling
	className?: string;
	wrapperClassName?: string;
	preserveOriginalStyles?: boolean;

	// Behavior
	forwardRef?: boolean;
	memoized?: boolean;
	deprecationWarning?: boolean;
	migrationGuide?: string;

	// Documentation
	description?: string;
	migrationPath?: string;
	examples?: string[];
}

// ========================================
// Wrapper Configurations
// ========================================

// Generic Wrapper Configurations
const component: WrapperConfiguration = {
	kind: 'component',
	variant: 'component-wrapper',
	layout: 'passthrough',
	targetComponent: 'Component',
	unifiedComponent: 'UnifiedComponent',
	maintainAPI: true,
	preserveEvents: true,
	description: 'Generic component wrapper',
	migrationPath:
		'Use the specific unified component or factory method',
};

const provider: WrapperConfiguration = {
	kind: 'provider',
	variant: 'provider-wrapper',
	layout: 'passthrough',
	targetComponent: 'Provider',
	unifiedComponent: 'UnifiedProvider',
	maintainAPI: true,
	preserveEvents: true,
	description: 'Generic provider wrapper',
	migrationPath:
		'Use the specific unified provider or factory method',
};

const legacy: WrapperConfiguration = {
	kind: 'legacy',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'LegacyComponent',
	unifiedComponent: 'UnifiedComponent',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Generic legacy wrapper',
	migrationPath:
		'Migrate to the corresponding unified component',
};

// Layout Wrapper Configurations
const flexContainer: WrapperConfiguration = {
	kind: 'flex-container',
	variant: 'layout-container',
	layout: 'enhanced',
	targetComponent: 'FlexContainer',
	unifiedComponent: 'FlexContainer',
	maintainAPI: true,
	preserveEvents: true,
	description:
		'Flexbox container wrapper with positioning control',
	migrationPath:
		'Use CSS flexbox directly or UnifiedWrapper with flex kind',
};

const gridContainer: WrapperConfiguration = {
	kind: 'grid-container',
	variant: 'layout-container',
	layout: 'enhanced',
	targetComponent: 'GridContainer',
	unifiedComponent: 'GridContainer',
	maintainAPI: true,
	preserveEvents: true,
	description:
		'CSS Grid container wrapper with positioning control',
	migrationPath:
		'Use CSS grid directly or UnifiedWrapper with grid kind',
};

const centerContainer: WrapperConfiguration = {
	kind: 'center-container',
	variant: 'layout-container',
	layout: 'enhanced',
	targetComponent: 'CenterContainer',
	unifiedComponent: 'CenterContainer',
	maintainAPI: true,
	preserveEvents: true,
	description:
		'Container that centers content both horizontally and vertically',
	migrationPath:
		'Use CSS centering techniques or UnifiedWrapper with center kind',
};

const stackContainer: WrapperConfiguration = {
	kind: 'stack-container',
	variant: 'layout-container',
	layout: 'enhanced',
	targetComponent: 'StackContainer',
	unifiedComponent: 'StackContainer',
	maintainAPI: true,
	preserveEvents: true,
	description: 'Vertical stack container with gap control',
	migrationPath:
		'Use CSS flexbox column or UnifiedWrapper with stack kind',
};

const buttonWrapper: WrapperConfiguration = {
	kind: 'button-wrapper',
	variant: 'backward-compatibility',
	layout: 'passthrough',
	targetComponent: 'Button',
	unifiedComponent: 'Button',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	memoized: true,
	description:
		'Backward compatibility wrapper for Button component',
	migrationPath:
		'Use Button directly or ButtonFactory for new code',
};

const headerWrapper: WrapperConfiguration = {
	kind: 'header-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Header',
	unifiedComponent: 'UnifiedHeader',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Simplified interface wrapper for Header component',
	migrationPath:
		'Use UnifiedHeader or HeaderFactory for advanced features',
};

const modalWrapper: WrapperConfiguration = {
	kind: 'modal-wrapper',
	variant: 'backward-compatibility',
	layout: 'passthrough',
	targetComponent: 'Modal',
	unifiedComponent: 'UnifiedModal',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Backward compatibility wrapper for Modal component',
	migrationPath:
		'Use UnifiedModal or ModalFactory for new features',
};

const gridWrapper: WrapperConfiguration = {
	kind: 'grid-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Grid',
	unifiedComponent: 'UnifiedGrid',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Basic wrapper around UnifiedGrid for simple use cases',
	migrationPath:
		'Use UnifiedGrid or GridFactory for advanced layouts',
};

const pageWrapper: WrapperConfiguration = {
	kind: 'page-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Page',
	unifiedComponent: 'UnifiedPage',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Wrapper around UnifiedPage for the most common use case',
	migrationPath:
		'Use UnifiedPage or PageFactory for advanced features',
};

const graphWrapper: WrapperConfiguration = {
	kind: 'graph-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Graphs',
	unifiedComponent: 'UnifiedGraph',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Wrapper around UnifiedGraph for the most common use case',
	migrationPath:
		'Use UnifiedGraph or GraphFactory for advanced charts',
};

const sidebarWrapper: WrapperConfiguration = {
	kind: 'sidebar-wrapper',
	variant: 'backward-compatibility',
	layout: 'passthrough',
	targetComponent: 'Sidebar',
	unifiedComponent: 'UnifiedSidebar',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Backward compatibility wrapper for Sidebar component',
	migrationPath:
		'Use UnifiedSidebar or SidebarFactory for new features',
};

const settingsWrapper: WrapperConfiguration = {
	kind: 'settings-wrapper',
	variant: 'backward-compatibility',
	layout: 'passthrough',
	targetComponent: 'Settings',
	unifiedComponent: 'UnifiedSettings',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Backward compatibility wrapper for Settings component',
	migrationPath:
		'Use UnifiedSettings or SettingsFactory for new features',
};

const themeWrapper: WrapperConfiguration = {
	kind: 'theme-wrapper',
	variant: 'backward-compatibility',
	layout: 'passthrough',
	targetComponent: 'Theme',
	unifiedComponent: 'UnifiedTheme',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Backward compatibility wrapper for Theme component',
	migrationPath:
		'Use UnifiedTheme or ThemeFactory for new features',
};

const adminWrapper: WrapperConfiguration = {
	kind: 'admin-wrapper',
	variant: 'backward-compatibility',
	layout: 'passthrough',
	targetComponent: 'Admin',
	unifiedComponent: 'Admin',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Backward compatibility wrapper for Admin component',
	migrationPath:
		'Use Admin or AdminFactory for new features',
};

const cardWrapper: WrapperConfiguration = {
	kind: 'card-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Card',
	unifiedComponent: 'UnifiedCard',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Simplified interface wrapper for Card component',
	migrationPath:
		'Use UnifiedCard or CardFactory for advanced features',
};

const bannerWrapper: WrapperConfiguration = {
	kind: 'banner-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Banner',
	unifiedComponent: 'UnifiedBanner',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Simplified interface wrapper for Banner component',
	migrationPath:
		'Use UnifiedBanner or BannerFactory for advanced features',
};

const chatWrapper: WrapperConfiguration = {
	kind: 'chat-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Chat',
	unifiedComponent: 'UnifiedChat',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Simplified interface wrapper for Chat component',
	migrationPath:
		'Use UnifiedChat or ChatFactory for advanced features',
};

const formWrapper: WrapperConfiguration = {
	kind: 'form-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Form',
	unifiedComponent: 'UnifiedForm',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Simplified interface wrapper for Form component',
	migrationPath:
		'Use UnifiedForm or FormFactory for advanced features',
};

// Provider Wrappers
const socketProviderWrapper: WrapperConfiguration = {
	kind: 'socket-provider-wrapper',
	variant: 'provider-wrapper',
	layout: 'passthrough',
	targetComponent: 'SocketProvider',
	unifiedComponent: 'UnifiedProvider',
	maintainAPI: true,
	preserveEvents: true,
	description:
		'Backward compatibility wrapper for SocketProvider',
	migrationPath:
		'Use UnifiedProvider with kind="socket-provider"',
};

const userSettingsProviderWrapper: WrapperConfiguration = {
	kind: 'user-settings-provider-wrapper',
	variant: 'provider-wrapper',
	layout: 'passthrough',
	targetComponent: 'UserSettingsProvider',
	unifiedComponent: 'UnifiedProvider',
	maintainAPI: true,
	preserveEvents: true,
	description:
		'Backward compatibility wrapper for UserSettingsProvider',
	migrationPath:
		'Use UnifiedProvider with kind="user-settings-provider"',
};

const themePaletteProviderWrapper: WrapperConfiguration = {
	kind: 'theme-palette-provider-wrapper',
	variant: 'provider-wrapper',
	layout: 'passthrough',
	targetComponent: 'ThemePaletteProvider',
	unifiedComponent: 'UnifiedProvider',
	maintainAPI: true,
	preserveEvents: true,
	description:
		'Backward compatibility wrapper for ThemePaletteProvider',
	migrationPath:
		'Use UnifiedProvider with kind="theme-palette-provider"',
};

const achievementSocketListenerWrapper: WrapperConfiguration =
	{
		kind: 'achievement-socket-listener-wrapper',
		variant: 'provider-wrapper',
		layout: 'passthrough',
		targetComponent: 'AchievementSocketListener',
		unifiedComponent: 'UnifiedProvider',
		maintainAPI: true,
		preserveEvents: true,
		description:
			'Backward compatibility wrapper for AchievementSocketListener',
		migrationPath:
			'Use UnifiedProvider with kind="achievement-socket-listener"',
	};

// Legacy Component Wrappers
const primaryButtonWrapper: WrapperConfiguration = {
	kind: 'primary-button-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'PrimaryButton',
	unifiedComponent: 'Button',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Legacy wrapper for PrimaryButton component',
	migrationPath:
		'Use Button with kind="primary" or ButtonFactory.primary()',
};

const secondaryButtonWrapper: WrapperConfiguration = {
	kind: 'secondary-button-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'SecondaryButton',
	unifiedComponent: 'Button',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Legacy wrapper for SecondaryButton component',
	migrationPath:
		'Use Button with kind="secondary" or ButtonFactory.secondary()',
};

const closeButtonWrapper: WrapperConfiguration = {
	kind: 'close-button-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'CloseButton',
	unifiedComponent: 'Button',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Legacy wrapper for CloseButton component',
	migrationPath:
		'Use Button with kind="close" or ButtonFactory.close()',
};

const iconButtonWrapper: WrapperConfiguration = {
	kind: 'icon-button-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'IconButton',
	unifiedComponent: 'Button',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Legacy wrapper for IconButton component',
	migrationPath:
		'Use Button with kind="icon" or ButtonFactory.icon()',
};

const browseHeaderWrapper: WrapperConfiguration = {
	kind: 'browse-header-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'BrowseHeader',
	unifiedComponent: 'UnifiedHeader',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Legacy wrapper for BrowseHeader component',
	migrationPath:
		'Use UnifiedHeader with kind="browse-tabbed" or HeaderFactory.browseWithTabs()',
};

const modalHeaderWrapper: WrapperConfiguration = {
	kind: 'modal-header-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'ModalHeader',
	unifiedComponent: 'UnifiedHeader',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Legacy wrapper for ModalHeader component',
	migrationPath:
		'Use UnifiedHeader with kind="modal" or HeaderFactory.modal()',
};

const vsGridWrapper: WrapperConfiguration = {
	kind: 'vs-grid-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'VSGrid',
	unifiedComponent: 'UnifiedGrid',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Legacy VSGrid component - wrapper around UnifiedGrid',
	migrationPath:
		'Use UnifiedGrid with kind="vs-grid" or GridFactory.vsGrid()',
};

const startupPageWrapper: WrapperConfiguration = {
	kind: 'startup-page-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'StartupPage',
	unifiedComponent: 'UnifiedPage',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Legacy wrapper using the unified page system',
	migrationPath:
		'Use UnifiedPage with kind="startup" or PageFactory.startup()',
};

const customizationCategoryWrapper: WrapperConfiguration = {
	kind: 'customization-category-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'CustomizationCategory',
	unifiedComponent: 'UnifiedSettings',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Backward compatibility wrapper for CustomizationCategory',
	migrationPath:
		'Use UnifiedSettings with kind="customization-category" or SettingsFactory',
};

const settingsPanelWrapper: WrapperConfiguration = {
	kind: 'settings-panel-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'SettingsPanel',
	unifiedComponent: 'UnifiedSettings',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Backward compatibility wrapper for SettingsPanel',
	migrationPath:
		'Use UnifiedSettings with kind="settings-panel" or SettingsFactory',
};

const themeSelectorWrapper: WrapperConfiguration = {
	kind: 'theme-selector-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'ThemeSelector',
	unifiedComponent: 'UnifiedTheme',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Legacy wrapper using the unified theme system',
	migrationPath:
		'Use UnifiedTheme with kind="selector" or ThemeFactory.selector()',
};

const friendsSidebarWrapper: WrapperConfiguration = {
	kind: 'friends-sidebar-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'FriendsSidebar',
	unifiedComponent: 'UnifiedSidebar',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Legacy FriendsSidebar - Backward compatibility wrapper',
	migrationPath:
		'Use UnifiedSidebar with kind="friends" or SidebarFactory.friends()',
};

const sessionDebuggerWrapper: WrapperConfiguration = {
	kind: 'session-debugger-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'SessionDebugger',
	unifiedComponent: 'Admin',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Backward Compatibility Wrapper for SessionDebugger',
	migrationPath:
		'Use Admin with kind="session-debugger" or AdminFactory.sessionDebugger()',
};

const darkModeToggleWrapper: WrapperConfiguration = {
	kind: 'dark-mode-toggle-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'DarkModeToggle',
	unifiedComponent: 'Button',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Legacy component wrapper for dark mode toggle functionality',
	migrationPath:
		'Use Button with kind="dark-mode-toggle" or ButtonFactory.darkModeToggle()',
};

// Generic Wrappers
const backwardCompatibilityWrapper: WrapperConfiguration = {
	kind: 'backward-compatibility-wrapper',
	variant: 'backward-compatibility',
	layout: 'passthrough',
	targetComponent: 'LegacyComponent',
	unifiedComponent: 'UnifiedComponent',
	maintainAPI: true,
	preserveEvents: true,
	description: 'Generic backward compatibility wrapper',
	migrationPath:
		'Migrate to the corresponding unified component',
};

const legacyWrapper: WrapperConfiguration = {
	kind: 'legacy-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'LegacyComponent',
	unifiedComponent: 'UnifiedComponent',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Generic legacy component wrapper',
	migrationPath:
		'Use the corresponding unified component or factory',
};

const simpleWrapper: WrapperConfiguration = {
	kind: 'simple-wrapper',
	variant: 'simplified-interface',
	layout: 'simplified',
	targetComponent: 'Component',
	unifiedComponent: 'UnifiedComponent',
	maintainAPI: false,
	simplifyProps: true,
	preserveEvents: true,
	description: 'Simple wrapper with reduced API surface',
	migrationPath:
		'Use unified component for advanced features',
};

const enhancedWrapper: WrapperConfiguration = {
	kind: 'enhanced-wrapper',
	variant: 'enhanced-functionality',
	layout: 'enhanced',
	targetComponent: 'Component',
	unifiedComponent: 'UnifiedComponent',
	maintainAPI: true,
	addEnhancements: true,
	preserveEvents: true,
	description:
		'Enhanced wrapper with additional functionality',
	migrationPath:
		'Use unified component directly for full control',
};

// ========================================
// Configuration Registry
// ========================================

export const WRAPPER_CONFIGURATIONS: Record<
	WrapperKind,
	WrapperConfiguration
> = {
	// Generic Wrappers
	'component': component,
	'provider': provider,
	'legacy': legacy,

	// Layout Wrappers
	'flex-container': flexContainer,
	'grid-container': gridContainer,
	'center-container': centerContainer,
	'stack-container': stackContainer,

	// Component Wrappers
	'button-wrapper': buttonWrapper,
	'header-wrapper': headerWrapper,
	'modal-wrapper': modalWrapper,
	'grid-wrapper': gridWrapper,
	'page-wrapper': pageWrapper,
	'graph-wrapper': graphWrapper,
	'sidebar-wrapper': sidebarWrapper,
	'settings-wrapper': settingsWrapper,
	'theme-wrapper': themeWrapper,
	'admin-wrapper': adminWrapper,
	'card-wrapper': cardWrapper,
	'banner-wrapper': bannerWrapper,
	'chat-wrapper': chatWrapper,
	'form-wrapper': formWrapper,

	// Provider Wrappers
	'socket-provider-wrapper': socketProviderWrapper,
	'user-settings-provider-wrapper':
		userSettingsProviderWrapper,
	'theme-palette-provider-wrapper':
		themePaletteProviderWrapper,
	'achievement-socket-listener-wrapper':
		achievementSocketListenerWrapper,

	// Legacy Component Wrappers
	'primary-button-wrapper': primaryButtonWrapper,
	'secondary-button-wrapper': secondaryButtonWrapper,
	'close-button-wrapper': closeButtonWrapper,
	'icon-button-wrapper': iconButtonWrapper,
	'browse-header-wrapper': browseHeaderWrapper,
	'modal-header-wrapper': modalHeaderWrapper,
	'vs-grid-wrapper': vsGridWrapper,
	'startup-page-wrapper': startupPageWrapper,
	'customization-category-wrapper':
		customizationCategoryWrapper,
	'settings-panel-wrapper': settingsPanelWrapper,
	'theme-selector-wrapper': themeSelectorWrapper,
	'friends-sidebar-wrapper': friendsSidebarWrapper,
	'session-debugger-wrapper': sessionDebuggerWrapper,
	'dark-mode-toggle-wrapper': darkModeToggleWrapper,

	// Generic Wrappers
	'backward-compatibility-wrapper':
		backwardCompatibilityWrapper,
	'legacy-wrapper': legacyWrapper,
	'simple-wrapper': simpleWrapper,
	'enhanced-wrapper': enhancedWrapper,
};

// ========================================
// Utility Functions
// ========================================

/**
 * Get wrapper configuration by kind
 */
export function getWrapperConfig(
	kind: WrapperKind
): WrapperConfiguration {
	return WRAPPER_CONFIGURATIONS[kind];
}

/**
 * Check if a wrapper kind exists
 */
export function isWrapperKind(
	kind: string
): kind is WrapperKind {
	return kind in WRAPPER_CONFIGURATIONS;
}

/**
 * Get all wrapper configurations by variant
 */
export function getWrappersByVariant(
	variant: WrapperVariant
): WrapperConfiguration[] {
	return Object.values(WRAPPER_CONFIGURATIONS).filter(
		(config) => config.variant === variant
	);
}

/**
 * Get all legacy wrappers that should show deprecation warnings
 */
export function getDeprecatedWrappers(): WrapperConfiguration[] {
	return Object.values(WRAPPER_CONFIGURATIONS).filter(
		(config) => config.deprecationWarning
	);
}

/**
 * Create a wrapper configuration with custom overrides
 */
export function createWrapperConfig(
	baseKind: WrapperKind,
	overrides: Partial<WrapperConfiguration> = {}
): WrapperConfiguration {
	const baseConfig = WRAPPER_CONFIGURATIONS[baseKind];
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

// ========================================
// Wrapper Groups for Organization
// ========================================

export const WRAPPER_GROUPS = {
	COMPONENT: [
		'button-wrapper',
		'header-wrapper',
		'modal-wrapper',
		'grid-wrapper',
		'page-wrapper',
		'graph-wrapper',
		'sidebar-wrapper',
		'settings-wrapper',
		'theme-wrapper',
		'admin-wrapper',
		'card-wrapper',
		'banner-wrapper',
		'chat-wrapper',
		'form-wrapper',
	] as WrapperKind[],

	PROVIDER: [
		'socket-provider-wrapper',
		'user-settings-provider-wrapper',
		'theme-palette-provider-wrapper',
		'achievement-socket-listener-wrapper',
	] as WrapperKind[],

	LEGACY: [
		'primary-button-wrapper',
		'secondary-button-wrapper',
		'close-button-wrapper',
		'icon-button-wrapper',
		'browse-header-wrapper',
		'modal-header-wrapper',
		'vs-grid-wrapper',
		'startup-page-wrapper',
		'customization-category-wrapper',
		'settings-panel-wrapper',
		'theme-selector-wrapper',
		'friends-sidebar-wrapper',
		'session-debugger-wrapper',
		'dark-mode-toggle-wrapper',
	] as WrapperKind[],

	GENERIC: [
		'backward-compatibility-wrapper',
		'legacy-wrapper',
		'simple-wrapper',
		'enhanced-wrapper',
	] as WrapperKind[],
};

// ========================================
// Quick Wrapper Presets
// ========================================

export const QUICK_WRAPPERS = {
	BUTTON: 'button-wrapper' as WrapperKind,
	HEADER: 'header-wrapper' as WrapperKind,
	MODAL: 'modal-wrapper' as WrapperKind,
	GRID: 'grid-wrapper' as WrapperKind,
	PAGE: 'page-wrapper' as WrapperKind,
	SIDEBAR: 'sidebar-wrapper' as WrapperKind,
	SETTINGS: 'settings-wrapper' as WrapperKind,
	LEGACY: 'legacy-wrapper' as WrapperKind,
	COMPATIBILITY:
		'backward-compatibility-wrapper' as WrapperKind,
};
