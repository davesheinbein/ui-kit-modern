import React, {
	forwardRef,
	memo,
	useMemo,
	useEffect,
	createElement,
} from 'react';
import { Button } from '../Button';
import {
	WrapperKind,
	WrapperConfiguration,
	getWrapperConfig,
} from './configurations';
import styles from './Wrapper.module.scss';

// ========================================
// Universal Component Renderer
// ========================================

function renderTargetComponent(
	config: WrapperConfiguration,
	props: any,
	children: React.ReactNode,
	mergedClassName: string
) {
	const isLayoutContainer =
		config.variant === 'layout-container';
	const isButton = config.Component === 'Button';
	const isForm = config.Component === 'Form';

	// Get  data attributes and styles
	const renderData = getRenderData(
		config,
		props,
		isLayoutContainer
	);

	// Determine element props based on type
	const elementProps =
		isLayoutContainer ?
			{
				...renderData.containerStyles.otherProps,
				style: renderData.containerStyles.style,
				className: mergedClassName,
			}
		:	{
				...props,
				'className': mergedClassName,
				'data--kind': renderData.mappedKind,
			};

	// Universal element wrapper with conditional rendering
	if (isButton) {
		return <Button {...elementProps}>{children}</Button>;
	}
	if (isForm) {
		return createElement('form', elementProps, children);
	}
	return createElement(
		isLayoutContainer ? 'div' : 'div',
		elementProps,
		children
	);
}

// ========================================
// Cross-Compatible Helper Functions
// ========================================

/**
 * Universal render data generator - consolidates all rendering logic
 */
function getRenderData(
	config: WrapperConfiguration,
	props: any,
	isLayoutContainer: boolean
) {
	const mappedKind = mapWrapperKind(config.kind);
	const wrapperType =
		isLayoutContainer ?
			getContainerType(config.kind)
		:	getComponentType(config.Component);

	const containerStyles =
		isLayoutContainer ?
			getContainerStyles(wrapperType, props)
		:	{ style: {}, otherProps: {} };

	return {
		mappedKind,
		wrapperType,
		containerStyles,
	};
}

/**
 * Universal component type mapper
 */
function getComponentType(Component: string): string {
	const typeMap: Record<string, string> = {
		Button: 'button',
		Header: 'header',
		Modal: 'modal',
		Grid: 'grid',
		Page: 'page',
		Graph: 'graph',
		Sidebar: 'sidebar',
		Settings: 'settings',
		Theme: 'theme',
		Admin: 'admin',
		Card: 'card',
		Banner: 'banner',
		Chat: 'chat',
		Form: 'form',
		Provider: 'provider',
	};
	return typeMap[Component] || 'generic';
}

/**
 * Universal container type mapper
 */
function getContainerType(kind: WrapperKind): string {
	const containerMap: Record<string, string> = {
		'flex-container': 'flex-container',
		'grid-container': 'grid-container',
		'center-container': 'center-container',
		'stack-container': 'stack-container',
	};
	return containerMap[kind] || 'generic-container';
}

/**
 * Universal container styles generator with ternary-based logic
 */
function getContainerStyles(
	containerType: string,
	props: any
) {
	const { style: propStyle, ...otherProps } = props;

	// Extract common container props with defaults
	const getContainerProps = (
		defaults: Record<string, any>
	) => {
		const result: Record<string, any> = {};
		const restProps: Record<string, any> = {};

		Object.entries(otherProps).forEach(([key, value]) => {
			if (key in defaults) {
				result[key] =
					value !== undefined ? value : defaults[key];
			} else {
				restProps[key] = value;
			}
		});

		// Set remaining defaults
		Object.entries(defaults).forEach(
			([key, defaultValue]) => {
				if (!(key in result)) {
					result[key] = defaultValue;
				}
			}
		);

		return { props: result, restProps };
	};

	// Container-specific styling with cross-compatible ternary logic
	const isFlexContainer =
		containerType === 'flex-container';
	const isGridContainer =
		containerType === 'grid-container';
	const isCenterContainer =
		containerType === 'center-container';
	const isStackContainer =
		containerType === 'stack-container';

	if (isFlexContainer || isStackContainer) {
		const defaults =
			isFlexContainer ?
				{
					direction: 'row',
					justify: 'center',
					align: 'center',
					wrap: 'nowrap',
					gap: '1rem',
				}
			:	{
					direction: 'column',
					gap: '1rem',
					align: 'stretch',
					justify: 'flex-start',
				};

		const { props: containerProps, restProps } =
			getContainerProps(defaults);

		return {
			style: {
				display: 'flex',
				flexDirection: containerProps.direction,
				justifyContent:
					isFlexContainer ?
						containerProps.justify
					:	containerProps.justify,
				alignItems: containerProps.align,
				...(isFlexContainer && {
					flexWrap: containerProps.wrap,
				}),
				gap: containerProps.gap,
				...propStyle,
			},
			otherProps: restProps,
		};
	}

	if (isGridContainer) {
		const defaults = {
			columns: 'repeat(auto-fit, minmax(250px, 1fr))',
			rows: 'auto',
			gap: '1rem',
			justifyItems: 'center',
			alignItems: 'center',
		};

		const { props: containerProps, restProps } =
			getContainerProps(defaults);

		return {
			style: {
				display: 'grid',
				gridTemplateColumns: containerProps.columns,
				gridTemplateRows: containerProps.rows,
				gap: containerProps.gap,
				justifyItems: containerProps.justifyItems,
				alignItems: containerProps.alignItems,
				...propStyle,
			},
			otherProps: restProps,
		};
	}

	if (isCenterContainer) {
		const { method = 'flex', ...restProps } = otherProps;

		return {
			style:
				method === 'grid' ?
					{
						display: 'grid',
						placeItems: 'center',
						minHeight: '100%',
						...propStyle,
					}
				:	{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						minHeight: '100%',
						...propStyle,
					},
			otherProps: restProps,
		};
	}

	// Default fallback
	return {
		style: propStyle || {},
		otherProps,
	};
}

// ========================================
// Universal Kind Mapping System
// ========================================

/**
 * Universal wrapper kind mapper - ultra-DRY with cross-compatible ternary logic
 */
function mapWrapperKind(wrapperKind: WrapperKind): string {
	// Define mapping configuration type
	interface MappingConfig {
		patterns: string[];
		map: Record<string, string>;
		default: string;
	}

	// Define all mapping tables with consistent typing
	const mappings: Record<string, MappingConfig> = {
		button: {
			patterns: ['button'],
			map: {
				'primary-button-wrapper': 'primary',
				'secondary-button-wrapper': 'secondary',
				'close-button-wrapper': 'close',
				'icon-button-wrapper': 'icon',
				'dark-mode-toggle-wrapper': 'dark-mode-toggle',
			},
			default: 'default',
		},
		header: {
			patterns: ['header'],
			map: {
				'browse-header-wrapper': 'browse-tabbed',
				'modal-header-wrapper': 'modal',
			},
			default: 'simple',
		},
		grid: {
			patterns: ['grid'],
			map: {
				'vs-grid-wrapper': 'vs-grid',
			},
			default: 'basic',
		},
		page: {
			patterns: ['page'],
			map: {
				'startup-page-wrapper': 'startup',
			},
			default: 'basic',
		},
		sidebar: {
			patterns: ['sidebar'],
			map: {
				'friends-sidebar-wrapper': 'friends',
			},
			default: 'basic',
		},
		settings: {
			patterns: ['settings', 'customization'],
			map: {
				'customization-category-wrapper':
					'customization-category',
				'settings-panel-wrapper': 'settings-panel',
			},
			default: 'settings-panel',
		},
		theme: {
			patterns: ['theme'],
			map: {
				'theme-selector-wrapper': 'selector',
			},
			default: 'basic',
		},
		admin: {
			patterns: ['admin', 'session'],
			map: {
				'session-debugger-wrapper': 'session-debugger',
			},
			default: 'basic',
		},
		provider: {
			patterns: ['provider', 'listener'],
			map: {
				'socket-provider-wrapper': 'socket-provider',
				'user-settings-provider-wrapper':
					'user-settings-provider',
				'theme-palette-provider-wrapper':
					'theme-palette-provider',
				'achievement-socket-listener-wrapper':
					'achievement-socket-listener',
			},
			default: 'generic',
		},
	};

	// Direct component mappings (no pattern matching needed)
	const directMappings: Record<string, string> = {
		'card-wrapper': 'basic',
		'banner-wrapper': 'notification',
		'chat-wrapper': 'basic',
		'form-wrapper': 'basic',
		'graph-wrapper': 'bar',
		'modal-wrapper': 'default',
	};

	// Check direct mappings first (most efficient)
	if (directMappings[wrapperKind]) {
		return directMappings[wrapperKind];
	}

	// Universal pattern-based mapper using ternary logic
	for (const config of Object.values(mappings)) {
		const hasMatchingPattern = config.patterns.some(
			(pattern) => wrapperKind.includes(pattern)
		);

		if (hasMatchingPattern) {
			return config.map[wrapperKind] || config.default;
		}
	}

	return 'default';
}

export interface WrapperProps {
	kind: WrapperKind;
	children?: React.ReactNode;
	className?: string;

	// Target component props (will be passed through)
	[key: string]: any;

	// Wrapper-specific props
	suppressDeprecationWarning?: boolean;
	onMigrationHelp?: () => void;

	// Configuration overrides
	configuration?: Partial<WrapperConfiguration>;
}

// ========================================
// Main Wrapper Component (Ultra-DRY Core)
// ========================================

/**
 * Wrapper - Ultra-DRY main wrapper component for the  wrapper system
 *
 * This component provides a completely consolidated interface for all wrapper types
 * with maximum code reuse and cross-compatible ternary-based logic.
 */
const Wrapper = forwardRef<any, WrapperProps>(
	(
		{
			kind,
			children,
			className,
			suppressDeprecationWarning = false,
			onMigrationHelp,
			configuration: configOverrides,
			...props
		},
		ref
	) => {
		const baseConfig = getWrapperConfig(kind);
		const config =
			configOverrides ?
				{ ...baseConfig, ...configOverrides }
			:	baseConfig;

		if (!config) {
			console.warn(
				`Wrapper: Unknown wrapper kind "${kind}"`
			);
			return <div className={className}>{children}</div>;
		}

		const processedProps = useMemo(() => {
			const {
				suppressDeprecationWarning: _,
				onMigrationHelp: __,
				configuration: ___,
				...targetProps
			} = props;
			const managedProps = {
				...targetProps,
				...(config?.forwardRef && { ref }),
			};
			return managedProps;
		}, [props, config, ref]);

		const mergedClassName = useMemo(
			() =>
				[
					styles.Wrapper,
					styles[
						`wrapper--${config?.variant || 'default'}`
					],
					styles[`wrapper--${config?.layout || 'default'}`],
					config?.wrapperClassName,
					className,
				]
					.filter(Boolean)
					.join(' '),
			[config, className]
		);

		useEffect(() => {
			const shouldWarn =
				config?.deprecationWarning &&
				!suppressDeprecationWarning &&
				typeof window !== 'undefined';

			if (shouldWarn) {
				console.warn(
					`🚨 Deprecation Warning: ${config.targetComponent} is deprecated.\n` +
						`📖 Migration Path: ${config.migrationPath}\n` +
						`🔗 Component: ${config.Component}\n` +
						`📝 Description: ${config.description}`
				);
			}
		}, [config, suppressDeprecationWarning]);

		const renderMigrationHelper = () =>
			(
				config?.deprecationWarning &&
				typeof window !== 'undefined'
			) ?
				<div className={styles.migrationHelper}>
					<Button
						kind='secondary'
						onClick={onMigrationHelp}
						className={styles.migrationButton}
						title={`Migration help for ${config?.targetComponent}`}
					>
						📖 Migration Guide
					</Button>
				</div>
			:	null;

		return (
			<>
				{renderMigrationHelper()}
				{renderTargetComponent(
					config,
					processedProps,
					children,
					mergedClassName
				)}
			</>
		);
	}
);

// ===================== STATIC HELPERS (formerly WrapperFactory) =====================

export interface WrapperFactoryProps
	extends Omit<WrapperProps, 'kind'> {
	kind: WrapperKind;
	configuration?: Partial<WrapperConfiguration>;
}

export const WrapperHelpers = {
	button: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='button-wrapper' {...props} />
	),
	header: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='header-wrapper' {...props} />
	),
	modal: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='modal-wrapper' {...props} />
	),
	grid: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='grid-wrapper' {...props} />
	),
	page: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='page-wrapper' {...props} />
	),
	graph: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='graph-wrapper' {...props} />
	),
	sidebar: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='sidebar-wrapper' {...props} />
	),
	settings: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='settings-wrapper' {...props} />
	),
	theme: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='theme-wrapper' {...props} />
	),
	admin: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='admin-wrapper' {...props} />
	),
	card: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='card-wrapper' {...props} />
	),
	banner: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='banner-wrapper' {...props} />
	),
	chat: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='chat-wrapper' {...props} />
	),
	form: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='form-wrapper' {...props} />
	),
	// Provider wrappers
	socketProvider: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => (
		<Wrapper kind='socket-provider-wrapper' {...props} />
	),
	userSettingsProvider: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => (
		<Wrapper
			kind='user-settings-provider-wrapper'
			{...props}
		/>
	),
	themePaletteProvider: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => (
		<Wrapper
			kind='theme-palette-provider-wrapper'
			{...props}
		/>
	),
	achievementSocketListener: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => (
		<Wrapper
			kind='achievement-socket-listener-wrapper'
			{...props}
		/>
	),
	// Legacy wrappers
	primaryButton: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => <Wrapper kind='primary-button-wrapper' {...props} />,
	secondaryButton: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => (
		<Wrapper kind='secondary-button-wrapper' {...props} />
	),
	closeButton: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => <Wrapper kind='close-button-wrapper' {...props} />,
	iconButton: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => <Wrapper kind='icon-button-wrapper' {...props} />,
	browseHeader: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => <Wrapper kind='browse-header-wrapper' {...props} />,
	modalHeader: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => <Wrapper kind='modal-header-wrapper' {...props} />,
	vsGrid: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='vs-grid-wrapper' {...props} />
	),
	startupPage: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => <Wrapper kind='startup-page-wrapper' {...props} />,
	customizationCategory: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => (
		<Wrapper
			kind='customization-category-wrapper'
			{...props}
		/>
	),
	settingsPanel: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => <Wrapper kind='settings-panel-wrapper' {...props} />,
	themeSelector: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => <Wrapper kind='theme-selector-wrapper' {...props} />,
	friendsSidebar: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => (
		<Wrapper kind='friends-sidebar-wrapper' {...props} />
	),
	sessionDebugger: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => (
		<Wrapper kind='session-debugger-wrapper' {...props} />
	),
	darkModeToggle: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => (
		<Wrapper kind='dark-mode-toggle-wrapper' {...props} />
	),
	// Generic wrappers
	component: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='component' {...props} />
	),
	provider: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='provider' {...props} />
	),
	legacy: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='legacy' {...props} />
	),
	// Layout containers
	flexContainer: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => <Wrapper kind='flex-container' {...props} />,
	gridContainer: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => <Wrapper kind='grid-container' {...props} />,
	centerContainer: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => <Wrapper kind='center-container' {...props} />,
	stackContainer: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => <Wrapper kind='stack-container' {...props} />,
	backwardCompatibility: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => (
		<Wrapper
			kind='backward-compatibility-wrapper'
			{...props}
		/>
	),
	legacySilent: (
		props: Omit<WrapperFactoryProps, 'kind'>
	) => (
		<Wrapper
			kind='legacy-wrapper'
			suppressDeprecationWarning
			{...props}
		/>
	),
	simple: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='simple-wrapper' {...props} />
	),
	enhanced: (props: Omit<WrapperFactoryProps, 'kind'>) => (
		<Wrapper kind='enhanced-wrapper' {...props} />
	),
};

// Builder pattern for advanced configuration
export class WrapperBuilder {
	private kind: WrapperKind;
	private config: Partial<WrapperConfiguration> = {};

	constructor(kind: WrapperKind) {
		this.kind = kind;
	}
	variant(variant: WrapperConfiguration['variant']) {
		this.config.variant = variant;
		return this;
	}
	layout(layout: WrapperConfiguration['layout']) {
		this.config.layout = layout;
		return this;
	}
	target(targetComponent: string, Component: string) {
		this.config.targetComponent = targetComponent;
		this.config.Component = Component;
		return this;
	}
	maintainAPI(maintain: boolean = true) {
		this.config.maintainAPI = maintain;
		return this;
	}
	deprecationWarning(warn: boolean = true) {
		this.config.deprecationWarning = warn;
		return this;
	}
	migrationPath(path: string) {
		this.config.migrationPath = path;
		return this;
	}
	description(desc: string) {
		this.config.description = desc;
		return this;
	}
	className(className: string) {
		this.config.className = className;
		return this;
	}
	build() {
		return (
			props: Omit<
				WrapperFactoryProps,
				'kind' | 'configuration'
			>
		) => (
			<Wrapper
				kind={this.kind}
				configuration={this.config}
				{...props}
			/>
		);
	}
}

// Presets for common use cases
export const WrapperPresets = {
	BUTTON: (props: any) => WrapperHelpers.button(props),
	HEADER: (props: any) => WrapperHelpers.header(props),
	MODAL: (props: any) => WrapperHelpers.modal(props),
	GRID: (props: any) => WrapperHelpers.grid(props),
	PAGE: (props: any) => WrapperHelpers.page(props),
	SIDEBAR: (props: any) => WrapperHelpers.sidebar(props),
	SETTINGS: (props: any) => WrapperHelpers.settings(props),
	LEGACY_WITH_WARNING: (props: any) =>
		WrapperHelpers.legacy({
			...props,
			configuration: { deprecationWarning: true },
		}),
	LEGACY_SILENT: (props: any) =>
		WrapperHelpers.legacySilent(props),
	BACKWARD_COMPATIBILITY: (props: any) =>
		WrapperHelpers.backwardCompatibility(props),
	SIMPLE: (props: any) => WrapperHelpers.simple(props),
	ENHANCED: (props: any) => WrapperHelpers.enhanced(props),
};

// Quick wrapper functions for instant creation
export const QuickWrappers = {
	button: (children: React.ReactNode, props: any = {}) =>
		WrapperHelpers.button({ children, ...props }),
	header: (children: React.ReactNode, props: any = {}) =>
		WrapperHelpers.header({ children, ...props }),
	modal: (children: React.ReactNode, props: any = {}) =>
		WrapperHelpers.modal({ children, ...props }),
	grid: (children: React.ReactNode, props: any = {}) =>
		WrapperHelpers.grid({ children, ...props }),
	page: (children: React.ReactNode, props: any = {}) =>
		WrapperHelpers.page({ children, ...props }),
	sidebar: (children: React.ReactNode, props: any = {}) =>
		WrapperHelpers.sidebar({ children, ...props }),
	settings: (children: React.ReactNode, props: any = {}) =>
		WrapperHelpers.settings({ children, ...props }),
	legacy: (children: React.ReactNode, props: any = {}) =>
		WrapperHelpers.legacy({ children, ...props }),
};

// Standalone creation functions
export function createWrapper(
	kind: WrapperKind,
	props: Omit<WrapperFactoryProps, 'kind'> = {}
) {
	return <Wrapper kind={kind} {...props} />;
}

export function createWrapperWithConfig(
	kind: WrapperKind,
	config: Partial<WrapperConfiguration>,
	props: Omit<
		WrapperFactoryProps,
		'kind' | 'configuration'
	> = {}
) {
	return (
		<Wrapper
			kind={kind}
			configuration={config}
			{...props}
		/>
	);
}

// ...existing code...

export default memo(Wrapper);
