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
	Component: string;

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
	Component: 'Component',
	maintainAPI: true,
	preserveEvents: true,
	description: 'Generic component wrapper',
	migrationPath: 'Use the specific component method',
};

const provider: WrapperConfiguration = {
	kind: 'provider',
	variant: 'provider-wrapper',
	layout: 'passthrough',
	targetComponent: 'Provider',
	Component: 'Provider',
	maintainAPI: true,
	preserveEvents: true,
	description: 'Generic provider wrapper',
	migrationPath: 'Use the specific provider method',
};

const legacy: WrapperConfiguration = {
	kind: 'legacy',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'LegacyComponent',
	Component: 'Component',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Generic legacy wrapper',
	migrationPath: 'Migrate to the corresponding component',
};

// Layout Wrapper Configurations
const flexContainer: WrapperConfiguration = {
	kind: 'flex-container',
	variant: 'layout-container',
	layout: 'enhanced',
	targetComponent: 'FlexContainer',
	Component: 'FlexContainer',
	maintainAPI: true,
	preserveEvents: true,
	description:
		'Flexbox container wrapper with positioning control',
	migrationPath:
		'Use CSS flexbox directly or Wrapper with flex kind',
};

const gridContainer: WrapperConfiguration = {
	kind: 'grid-container',
	variant: 'layout-container',
	layout: 'enhanced',
	targetComponent: 'GridContainer',
	Component: 'GridContainer',
	maintainAPI: true,
	preserveEvents: true,
	description:
		'CSS Grid container wrapper with positioning control',
	migrationPath:
		'Use CSS grid directly or Wrapper with grid kind',
};

const centerContainer: WrapperConfiguration = {
	kind: 'center-container',
	variant: 'layout-container',
	layout: 'enhanced',
	targetComponent: 'CenterContainer',
	Component: 'CenterContainer',
	maintainAPI: true,
	preserveEvents: true,
	description:
		'Container that centers content both horizontally and vertically',
	migrationPath:
		'Use CSS centering techniques or Wrapper with center kind',
};

const stackContainer: WrapperConfiguration = {
	kind: 'stack-container',
	variant: 'layout-container',
	layout: 'enhanced',
	targetComponent: 'StackContainer',
	Component: 'StackContainer',
	maintainAPI: true,
	preserveEvents: true,
	description: 'Vertical stack container with gap control',
	migrationPath:
		'Use CSS flexbox column or Wrapper with stack kind',
};

const buttonWrapper: WrapperConfiguration = {
	kind: 'button-wrapper',
	variant: 'backward-compatibility',
	layout: 'passthrough',
	targetComponent: 'Button',
	Component: 'Button',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	memoized: true,
	description:
		'Backward compatibility wrapper for Button component',
	migrationPath:
		'Use Button directly or Button for new code',
};

const headerWrapper: WrapperConfiguration = {
	kind: 'header-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Header',
	Component: 'Header',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Simplified interface wrapper for Header component',
	migrationPath:
		'Use Header or Header for advanced features',
};

const modalWrapper: WrapperConfiguration = {
	kind: 'modal-wrapper',
	variant: 'backward-compatibility',
	layout: 'passthrough',
	targetComponent: 'Modal',
	Component: 'Modal',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Backward compatibility wrapper for Modal component',
	migrationPath: 'Use Modal or Modal for new features',
};

const gridWrapper: WrapperConfiguration = {
	kind: 'grid-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Grid',
	Component: 'Grid',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Basic wrapper around Grid for simple use cases',
	migrationPath: 'Use Grid or Grid for advanced layouts',
};

const pageWrapper: WrapperConfiguration = {
	kind: 'page-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Page',
	Component: 'Page',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Wrapper around Page for the most common use case',
	migrationPath: 'Use Page or Page for advanced features',
};

const graphWrapper: WrapperConfiguration = {
	kind: 'graph-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Graphs',
	Component: 'Graph',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Wrapper around Graph for the most common use case',
	migrationPath: 'Use Graph or Graph for advanced charts',
};

const sidebarWrapper: WrapperConfiguration = {
	kind: 'sidebar-wrapper',
	variant: 'backward-compatibility',
	layout: 'passthrough',
	targetComponent: 'Sidebar',
	Component: 'Sidebar',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Backward compatibility wrapper for Sidebar component',
	migrationPath: 'Use Sidebar or Sidebar for new features',
};

const settingsWrapper: WrapperConfiguration = {
	kind: 'settings-wrapper',
	variant: 'backward-compatibility',
	layout: 'passthrough',
	targetComponent: 'Settings',
	Component: 'Settings',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Backward compatibility wrapper for Settings component',
	migrationPath:
		'Use Settings or Settings for new features',
};

const themeWrapper: WrapperConfiguration = {
	kind: 'theme-wrapper',
	variant: 'backward-compatibility',
	layout: 'passthrough',
	targetComponent: 'Theme',
	Component: 'Theme',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Backward compatibility wrapper for Theme component',
	migrationPath: 'Use Theme or Theme for new features',
};

const adminWrapper: WrapperConfiguration = {
	kind: 'admin-wrapper',
	variant: 'backward-compatibility',
	layout: 'passthrough',
	targetComponent: 'Admin',
	Component: 'Admin',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Backward compatibility wrapper for Admin component',
	migrationPath: 'Use Admin or Admin for new features',
};

const cardWrapper: WrapperConfiguration = {
	kind: 'card-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Card',
	Component: 'Card',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Simplified interface wrapper for Card component',
	migrationPath: 'Use Card or Card for advanced features',
};

const bannerWrapper: WrapperConfiguration = {
	kind: 'banner-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Banner',
	Component: 'Banner',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Simplified interface wrapper for Banner component',
	migrationPath:
		'Use Banner or Banner for advanced features',
};

const chatWrapper: WrapperConfiguration = {
	kind: 'chat-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Chat',
	Component: 'Chat',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Simplified interface wrapper for Chat component',
	migrationPath: 'Use Chat or Chat for advanced features',
};

const formWrapper: WrapperConfiguration = {
	kind: 'form-wrapper',
	variant: 'simplified-interface',
	layout: 'passthrough',
	targetComponent: 'Form',
	Component: 'Form',
	maintainAPI: true,
	preserveEvents: true,
	forwardRef: true,
	description:
		'Simplified interface wrapper for Form component',
	migrationPath: 'Use Form or Form for advanced features',
};

// Provider Wrappers
const socketProviderWrapper: WrapperConfiguration = {
	kind: 'socket-provider-wrapper',
	variant: 'provider-wrapper',
	layout: 'passthrough',
	targetComponent: 'SocketProvider',
	Component: 'Provider',
	maintainAPI: true,
	preserveEvents: true,
	description:
		'Backward compatibility wrapper for SocketProvider',
	migrationPath: 'Use Provider with kind="socket-provider"',
};

const userSettingsProviderWrapper: WrapperConfiguration = {
	kind: 'user-settings-provider-wrapper',
	variant: 'provider-wrapper',
	layout: 'passthrough',
	targetComponent: 'UserSettingsProvider',
	Component: 'Provider',
	maintainAPI: true,
	preserveEvents: true,
	description:
		'Backward compatibility wrapper for UserSettingsProvider',
	migrationPath:
		'Use Provider with kind="user-settings-provider"',
};

const ThemeProviderWrapper: WrapperConfiguration = {
	kind: 'theme-palette-provider-wrapper',
	variant: 'provider-wrapper',
	layout: 'passthrough',
	targetComponent: 'ThemeProvider',
	Component: 'Provider',
	maintainAPI: true,
	preserveEvents: true,
	description:
		'Backward compatibility wrapper for ThemeProvider',
	migrationPath:
		'Use Provider with kind="theme-palette-provider"',
};

const achievementSocketListenerWrapper: WrapperConfiguration =
	{
		kind: 'achievement-socket-listener-wrapper',
		variant: 'provider-wrapper',
		layout: 'passthrough',
		targetComponent: 'AchievementSocketListener',
		Component: 'Provider',
		maintainAPI: true,
		preserveEvents: true,
		description:
			'Backward compatibility wrapper for AchievementSocketListener',
		migrationPath:
			'Use Provider with kind="achievement-socket-listener"',
	};

// Legacy Component Wrappers
const primaryButtonWrapper: WrapperConfiguration = {
	kind: 'primary-button-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'PrimaryButton',
	Component: 'Button',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Legacy wrapper for PrimaryButton component',
	migrationPath:
		'Use Button with kind="primary" or Button.primary()',
};

const secondaryButtonWrapper: WrapperConfiguration = {
	kind: 'secondary-button-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'SecondaryButton',
	Component: 'Button',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Legacy wrapper for SecondaryButton component',
	migrationPath:
		'Use Button with kind="secondary" or Button.secondary()',
};

const closeButtonWrapper: WrapperConfiguration = {
	kind: 'close-button-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'CloseButton',
	Component: 'Button',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Legacy wrapper for CloseButton component',
	migrationPath:
		'Use Button with kind="close" or Button.close()',
};

const iconButtonWrapper: WrapperConfiguration = {
	kind: 'icon-button-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'IconButton',
	Component: 'Button',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Legacy wrapper for IconButton component',
	migrationPath:
		'Use Button with kind="icon" or Button.icon()',
};

const browseHeaderWrapper: WrapperConfiguration = {
	kind: 'browse-header-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'BrowseHeader',
	Component: 'Header',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Legacy wrapper for BrowseHeader component',
	migrationPath:
		'Use Header with kind="browse-tabbed" or Header.browseWithTabs()',
};

const modalHeaderWrapper: WrapperConfiguration = {
	kind: 'modal-header-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'ModalHeader',
	Component: 'Header',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Legacy wrapper for ModalHeader component',
	migrationPath:
		'Use Header with kind="modal" or Header.modal()',
};

const vsGridWrapper: WrapperConfiguration = {
	kind: 'vs-grid-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'VSGrid',
	Component: 'Grid',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Legacy VSGrid component - wrapper around Grid',
	migrationPath:
		'Use Grid with kind="vs-grid" or Grid.vsGrid()',
};

const startupPageWrapper: WrapperConfiguration = {
	kind: 'startup-page-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'StartupPage',
	Component: 'Page',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Legacy wrapper using the page system',
	migrationPath:
		'Use Page with kind="startup" or Page.startup()',
};

const customizationCategoryWrapper: WrapperConfiguration = {
	kind: 'customization-category-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'CustomizationCategory',
	Component: 'Settings',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Backward compatibility wrapper for CustomizationCategory',
	migrationPath:
		'Use Settings with kind="customization-category" or Settings',
};

const settingsPanelWrapper: WrapperConfiguration = {
	kind: 'settings-panel-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'SettingsPanel',
	Component: 'Settings',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Backward compatibility wrapper for SettingsPanel',
	migrationPath:
		'Use Settings with kind="settings-panel" or Settings',
};

const themeSelectorWrapper: WrapperConfiguration = {
	kind: 'theme-selector-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'ThemeSelector',
	Component: 'Theme',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description: 'Legacy wrapper using the theme system',
	migrationPath:
		'Use Theme with kind="selector" or Theme.selector()',
};

const friendsSidebarWrapper: WrapperConfiguration = {
	kind: 'friends-sidebar-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'FriendsSidebar',
	Component: 'Sidebar',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Legacy FriendsSidebar - Backward compatibility wrapper',
	migrationPath:
		'Use Sidebar with kind="friends" or Sidebar.friends()',
};

const sessionDebuggerWrapper: WrapperConfiguration = {
	kind: 'session-debugger-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'SessionDebugger',
	Component: 'Admin',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Backward Compatibility Wrapper for SessionDebugger',
	migrationPath:
		'Use Admin with kind="session-debugger" or Admin.sessionDebugger()',
};

const darkModeToggleWrapper: WrapperConfiguration = {
	kind: 'dark-mode-toggle-wrapper',
	variant: 'legacy-support',
	layout: 'passthrough',
	targetComponent: 'DarkModeToggle',
	Component: 'Button',
	maintainAPI: true,
	preserveEvents: true,
	deprecationWarning: true,
	description:
		'Legacy component wrapper for dark mode toggle functionality',
	migrationPath:
		'Use Button with kind="dark-mode-toggle" or Button.darkModeToggle()',
};

const simpleWrapper: WrapperConfiguration = {
	kind: 'simple-wrapper',
	variant: 'simplified-interface',
	layout: 'simplified',
	targetComponent: 'Component',
	Component: 'Component',
	maintainAPI: false,
	simplifyProps: true,
	preserveEvents: true,
	description: 'Simple wrapper with reduced API surface',
	migrationPath: 'Use component for advanced features',
};

const enhancedWrapper: WrapperConfiguration = {
	kind: 'enhanced-wrapper',
	variant: 'enhanced-functionality',
	layout: 'enhanced',
	targetComponent: 'Component',
	Component: 'Component',
	maintainAPI: true,
	addEnhancements: true,
	preserveEvents: true,
	description:
		'Enhanced wrapper with additional functionality',
	migrationPath: 'Use component directly for full control',
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
	'theme-palette-provider-wrapper': ThemeProviderWrapper,
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
): WrapperConfiguration | undefined {
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
				`${baseConfig.className || ''} ${
					overrides.className
				}`.trim()
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
