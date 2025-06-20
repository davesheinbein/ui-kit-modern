import React from 'react';
import UnifiedWrapper, {
	UnifiedWrapperProps,
} from './UnifiedWrapper';
import {
	WrapperKind,
	WrapperConfiguration,
	getWrapperConfig,
	createWrapperConfig,
	QUICK_WRAPPERS,
} from './WrapperConfigurations';

// ========================================
// Factory Props Interface
// ========================================

export interface WrapperFactoryProps
	extends Omit<UnifiedWrapperProps, 'kind'> {
	kind: WrapperKind;
	configuration?: Partial<WrapperConfiguration>;
}

// ========================================
// Main WrapperFactory Class
// ========================================

/**
 * WrapperFactory - Factory class for creating wrappers with maximum DRY principles
 *
 * This factory provides multiple patterns for creating wrappers:
 * 1. Direct instantiation with full configuration
 * 2. Preset-based creation for common patterns
 * 3. Ultra-short aliases for rapid development
 * 4. Builder pattern for complex configurations
 */
class WrapperFactory {
	/**
	 * Create a wrapper with full configuration control
	 */
	static create(props: WrapperFactoryProps): JSX.Element {
		return <UnifiedWrapper {...props} />;
	}

	// ========================================
	// Component Wrapper Methods
	// ========================================

	/**
	 * Create a button wrapper
	 */
	static button(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='button-wrapper' {...props} />
		);
	}

	/**
	 * Create a header wrapper
	 */
	static header(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='header-wrapper' {...props} />
		);
	}

	/**
	 * Create a modal wrapper
	 */
	static modal(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='modal-wrapper' {...props} />
		);
	}

	/**
	 * Create a grid wrapper
	 */
	static grid(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='grid-wrapper' {...props} />
		);
	}

	/**
	 * Create a page wrapper
	 */
	static page(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='page-wrapper' {...props} />
		);
	}

	/**
	 * Create a graph wrapper
	 */
	static graph(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='graph-wrapper' {...props} />
		);
	}

	/**
	 * Create a sidebar wrapper
	 */
	static sidebar(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='sidebar-wrapper' {...props} />
		);
	}

	/**
	 * Create a settings wrapper
	 */
	static settings(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='settings-wrapper' {...props} />
		);
	}

	/**
	 * Create a theme wrapper
	 */
	static theme(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='theme-wrapper' {...props} />
		);
	}

	/**
	 * Create an admin wrapper
	 */
	static admin(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='admin-wrapper' {...props} />
		);
	}

	/**
	 * Create a card wrapper
	 */
	static card(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='card-wrapper' {...props} />
		);
	}

	/**
	 * Create a banner wrapper
	 */
	static banner(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='banner-wrapper' {...props} />
		);
	}

	/**
	 * Create a chat wrapper
	 */
	static chat(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='chat-wrapper' {...props} />
		);
	}

	/**
	 * Create a form wrapper
	 */
	static form(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='form-wrapper' {...props} />
		);
	}

	// ========================================
	// Provider Wrapper Methods
	// ========================================

	/**
	 * Create a socket provider wrapper
	 */
	static socketProvider(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='socket-provider-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a user settings provider wrapper
	 */
	static userSettingsProvider(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='user-settings-provider-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a theme palette provider wrapper
	 */
	static themePaletteProvider(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='theme-palette-provider-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create an achievement socket listener wrapper
	 */
	static achievementSocketListener(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='achievement-socket-listener-wrapper'
				{...props}
			/>
		);
	}

	// ========================================
	// Legacy Wrapper Methods
	// ========================================

	/**
	 * Create a legacy primary button wrapper
	 */
	static primaryButton(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='primary-button-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a legacy secondary button wrapper
	 */
	static secondaryButton(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='secondary-button-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a legacy close button wrapper
	 */
	static closeButton(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='close-button-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a legacy icon button wrapper
	 */
	static iconButton(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='icon-button-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a legacy browse header wrapper
	 */
	static browseHeader(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='browse-header-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a legacy modal header wrapper
	 */
	static modalHeader(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='modal-header-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a legacy VS grid wrapper
	 */
	static vsGrid(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='vs-grid-wrapper' {...props} />
		);
	}

	/**
	 * Create a legacy startup page wrapper
	 */
	static startupPage(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='startup-page-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a legacy customization category wrapper
	 */
	static customizationCategory(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='customization-category-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a legacy settings panel wrapper
	 */
	static settingsPanel(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='settings-panel-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a legacy theme selector wrapper
	 */
	static themeSelector(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='theme-selector-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a legacy friends sidebar wrapper
	 */
	static friendsSidebar(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='friends-sidebar-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a legacy session debugger wrapper
	 */
	static sessionDebugger(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='session-debugger-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a legacy dark mode toggle wrapper
	 */
	static darkModeToggle(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='dark-mode-toggle-wrapper'
				{...props}
			/>
		);
	}

	// ========================================
	// Generic Wrapper Methods
	// ========================================

	/**
	 * Create a generic component wrapper
	 */
	static component(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return <UnifiedWrapper kind='component' {...props} />;
	}

	/**
	 * Create a generic provider wrapper
	 */
	static provider(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return <UnifiedWrapper kind='provider' {...props} />;
	}

	// ========================================
	// Layout Container Methods
	// ========================================

	/**
	 * Create a flexbox container wrapper
	 */
	static flexContainer(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='flex-container' {...props} />
		);
	}

	/**
	 * Create a CSS grid container wrapper
	 */
	static gridContainer(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='grid-container' {...props} />
		);
	}

	/**
	 * Create a center container wrapper
	 */
	static centerContainer(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='center-container' {...props} />
		);
	}

	/**
	 * Create a stack container wrapper
	 */
	static stackContainer(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='stack-container' {...props} />
		);
	}

	/**
	 * Create a backward compatibility wrapper
	 */
	static backwardCompatibility(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper
				kind='backward-compatibility-wrapper'
				{...props}
			/>
		);
	}

	/**
	 * Create a legacy wrapper
	 */
	static legacy(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='legacy-wrapper' {...props} />
		);
	}

	/**
	 * Create a simple wrapper
	 */
	static simple(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='simple-wrapper' {...props} />
		);
	}

	/**
	 * Create an enhanced wrapper
	 */
	static enhanced(
		props: Omit<WrapperFactoryProps, 'kind'>
	): JSX.Element {
		return (
			<UnifiedWrapper kind='enhanced-wrapper' {...props} />
		);
	}

	// ========================================
	// Builder Pattern Methods
	// ========================================

	/**
	 * Start building a wrapper with configuration
	 */
	static builder(kind: WrapperKind) {
		return new WrapperBuilder(kind);
	}

	/**
	 * Create wrapper with custom configuration
	 */
	static withConfig(
		kind: WrapperKind,
		config: Partial<WrapperConfiguration>
	) {
		return (
			props: Omit<
				WrapperFactoryProps,
				'kind' | 'configuration'
			>
		) => (
			<UnifiedWrapper
				kind={kind}
				configuration={config}
				{...props}
			/>
		);
	}
}

// ========================================
// Builder Pattern Class
// ========================================

class WrapperBuilder {
	private kind: WrapperKind;
	private config: Partial<WrapperConfiguration> = {};

	constructor(kind: WrapperKind) {
		this.kind = kind;
	}

	/**
	 * Set wrapper variant
	 */
	variant(variant: WrapperConfiguration['variant']) {
		this.config.variant = variant;
		return this;
	}

	/**
	 * Set wrapper layout
	 */
	layout(layout: WrapperConfiguration['layout']) {
		this.config.layout = layout;
		return this;
	}

	/**
	 * Set target component
	 */
	target(
		targetComponent: string,
		unifiedComponent: string
	) {
		this.config.targetComponent = targetComponent;
		this.config.unifiedComponent = unifiedComponent;
		return this;
	}

	/**
	 * Enable/disable API maintenance
	 */
	maintainAPI(maintain: boolean = true) {
		this.config.maintainAPI = maintain;
		return this;
	}

	/**
	 * Enable/disable deprecation warning
	 */
	deprecationWarning(warn: boolean = true) {
		this.config.deprecationWarning = warn;
		return this;
	}

	/**
	 * Set migration path
	 */
	migrationPath(path: string) {
		this.config.migrationPath = path;
		return this;
	}

	/**
	 * Set description
	 */
	description(desc: string) {
		this.config.description = desc;
		return this;
	}

	/**
	 * Set className
	 */
	className(className: string) {
		this.config.className = className;
		return this;
	}

	/**
	 * Build the wrapper component
	 */
	build() {
		return (
			props: Omit<
				WrapperFactoryProps,
				'kind' | 'configuration'
			>
		) => (
			<UnifiedWrapper
				kind={this.kind}
				configuration={this.config}
				{...props}
			/>
		);
	}
}

// ========================================
// Ultra-Short Alias
// ========================================

/**
 * W - Ultra-short alias for WrapperFactory
 *
 * Usage:
 * W.button({ children: 'Click me' })
 * W.modal({ isOpen: true })
 * W.legacy({ suppressDeprecationWarning: true })
 */
export const W = WrapperFactory;

// ========================================
// Wrapper Presets
// ========================================

/**
 * WrapperPresets - Pre-configured wrappers for common use cases
 */
export const WrapperPresets = {
	/**
	 * Standard button wrapper
	 */
	BUTTON: (props: any) => WrapperFactory.button(props),

	/**
	 * Standard header wrapper
	 */
	HEADER: (props: any) => WrapperFactory.header(props),

	/**
	 * Standard modal wrapper
	 */
	MODAL: (props: any) => WrapperFactory.modal(props),

	/**
	 * Standard grid wrapper
	 */
	GRID: (props: any) => WrapperFactory.grid(props),

	/**
	 * Standard page wrapper
	 */
	PAGE: (props: any) => WrapperFactory.page(props),

	/**
	 * Standard sidebar wrapper
	 */
	SIDEBAR: (props: any) => WrapperFactory.sidebar(props),

	/**
	 * Standard settings wrapper
	 */
	SETTINGS: (props: any) => WrapperFactory.settings(props),

	/**
	 * Legacy component wrapper with deprecation warning
	 */
	LEGACY_WITH_WARNING: (props: any) =>
		WrapperFactory.legacy({
			...props,
			configuration: { deprecationWarning: true },
		}),

	/**
	 * Legacy component wrapper without deprecation warning
	 */
	LEGACY_SILENT: (props: any) =>
		WrapperFactory.legacy({
			...props,
			suppressDeprecationWarning: true,
		}),

	/**
	 * Backward compatibility wrapper
	 */
	BACKWARD_COMPATIBILITY: (props: any) =>
		WrapperFactory.backwardCompatibility(props),

	/**
	 * Simple wrapper with minimal functionality
	 */
	SIMPLE: (props: any) => WrapperFactory.simple(props),

	/**
	 * Enhanced wrapper with additional features
	 */
	ENHANCED: (props: any) => WrapperFactory.enhanced(props),
};

// ========================================
// Quick Wrapper Functions
// ========================================

/**
 * QuickWrappers - Ultra-convenient shortcuts for instant wrapper creation
 */
export const QuickWrappers = {
	/**
	 * Quick button wrapper
	 */
	button: (children: React.ReactNode, props: any = {}) =>
		WrapperFactory.button({ children, ...props }),

	/**
	 * Quick header wrapper
	 */
	header: (children: React.ReactNode, props: any = {}) =>
		WrapperFactory.header({ children, ...props }),

	/**
	 * Quick modal wrapper
	 */
	modal: (children: React.ReactNode, props: any = {}) =>
		WrapperFactory.modal({ children, ...props }),

	/**
	 * Quick grid wrapper
	 */
	grid: (children: React.ReactNode, props: any = {}) =>
		WrapperFactory.grid({ children, ...props }),

	/**
	 * Quick page wrapper
	 */
	page: (children: React.ReactNode, props: any = {}) =>
		WrapperFactory.page({ children, ...props }),

	/**
	 * Quick sidebar wrapper
	 */
	sidebar: (children: React.ReactNode, props: any = {}) =>
		WrapperFactory.sidebar({ children, ...props }),

	/**
	 * Quick settings wrapper
	 */
	settings: (children: React.ReactNode, props: any = {}) =>
		WrapperFactory.settings({ children, ...props }),

	/**
	 * Quick legacy wrapper
	 */
	legacy: (children: React.ReactNode, props: any = {}) =>
		WrapperFactory.legacy({ children, ...props }),
};

// ========================================
// Standalone Factory Function
// ========================================

/**
 * createWrapper - Standalone function for creating wrappers
 */
export function createWrapper(
	kind: WrapperKind,
	props: Omit<WrapperFactoryProps, 'kind'> = {}
): JSX.Element {
	return <UnifiedWrapper kind={kind} {...props} />;
}

/**
 * createWrapperWithConfig - Create wrapper with custom configuration
 */
export function createWrapperWithConfig(
	kind: WrapperKind,
	config: Partial<WrapperConfiguration>,
	props: Omit<
		WrapperFactoryProps,
		'kind' | 'configuration'
	> = {}
): JSX.Element {
	return (
		<UnifiedWrapper
			kind={kind}
			configuration={config}
			{...props}
		/>
	);
}

// ========================================
// Exports
// ========================================

export default WrapperFactory;
