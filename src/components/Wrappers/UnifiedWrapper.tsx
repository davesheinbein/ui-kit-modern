import React, { forwardRef, memo } from 'react';
import {
	WrapperKind,
	WrapperConfiguration,
	getWrapperConfig,
	WRAPPER_CONFIGURATIONS,
} from './WrapperConfigurations';
import styles from './Wrapper.module.scss';

// ========================================
// Props Interfaces
// ========================================

export interface UnifiedWrapperProps {
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
// Main UnifiedWrapper Component
// ========================================

/**
 * UnifiedWrapper - Main wrapper component for the DRY wrapper system
 * 
 * This component provides a unified interface for creating backward compatibility
 * wrappers and simplified interfaces to unified components.
 * 
 * Features:
 * - Automatic prop forwarding to target components
 * - Deprecation warnings for legacy wrappers
 * - Migration guidance
 * - Configurable behavior through wrapper configurations
 * - Support for all wrapper types (component, provider, legacy)
 */
const UnifiedWrapper = forwardRef<any, UnifiedWrapperProps>(
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
		// Get wrapper configuration
		const baseConfig = getWrapperConfig(kind);
		const config = configOverrides ? { ...baseConfig, ...configOverrides } : baseConfig;
		
		// Show deprecation warning if needed
		React.useEffect(() => {
			if (
				config.deprecationWarning && 
				!suppressDeprecationWarning &&
				typeof window !== 'undefined'
			) {
				console.warn(
					`🚨 Deprecation Warning: ${config.targetComponent} is deprecated.\n` +
					`📖 Migration Path: ${config.migrationPath}\n` +
					`🔗 Component: ${config.unifiedComponent}\n` +
					`📝 Description: ${config.description}`
				);
			}
		}, [config, suppressDeprecationWarning]);
		
		// Build className
		const wrapperClasses = [
			styles.unifiedWrapper,
			styles[`wrapper--${config.variant}`],
			styles[`wrapper--${config.layout}`],
			config.wrapperClassName,
			className,
		].filter(Boolean).join(' ');
		
		// Prepare props for target component
		const targetProps = { ...props };
		
		// Remove wrapper-specific props
		if ('suppressDeprecationWarning' in targetProps) {
			delete (targetProps as any).suppressDeprecationWarning;
		}
		if ('onMigrationHelp' in targetProps) {
			delete (targetProps as any).onMigrationHelp;
		}
		if ('configuration' in targetProps) {
			delete (targetProps as any).configuration;
		}
		
		// Add wrapper-managed props
		if (config.forwardRef) {
			(targetProps as any).ref = ref;
		}
		
		if (config.preserveOriginalStyles) {
			targetProps.className = [config.className, props.className].filter(Boolean).join(' ');
		}
		
		// Render based on wrapper type
		return (
			<div className={wrapperClasses} data-wrapper-kind={kind}>
				{config.deprecationWarning && typeof window !== 'undefined' && (
					<div className={styles.migrationHelper}>
						<button
							onClick={onMigrationHelp}
							className={styles.migrationButton}
							title={`Migration help for ${config.targetComponent}`}
						>
							📖 Migration Guide
						</button>
					</div>
				)}
				
				{/* Dynamic component rendering based on configuration */}
				{renderTargetComponent(config, targetProps, children)}
			</div>
		);
	}
);

// ========================================
// Component Rendering Logic
// ========================================

/**
 * Render the target component based on wrapper configuration
 */
function renderTargetComponent(
	config: WrapperConfiguration,
	props: any,
	children: React.ReactNode
) {
	// This is where we would dynamically import and render the target unified component
	// For now, we'll use a placeholder approach that can be enhanced
	
	switch (config.unifiedComponent) {
		case 'UnifiedButton':
			return renderUnifiedButton(config, props, children);
		case 'UnifiedHeader':
			return renderUnifiedHeader(config, props, children);
		case 'UnifiedModal':
			return renderUnifiedModal(config, props, children);
		case 'UnifiedGrid':
			return renderUnifiedGrid(config, props, children);
		case 'UnifiedPage':
			return renderUnifiedPage(config, props, children);
		case 'UnifiedGraph':
			return renderUnifiedGraph(config, props, children);
		case 'UnifiedSidebar':
			return renderUnifiedSidebar(config, props, children);
		case 'UnifiedSettings':
			return renderUnifiedSettings(config, props, children);
		case 'UnifiedTheme':
			return renderUnifiedTheme(config, props, children);
		case 'UnifiedAdmin':
			return renderUnifiedAdmin(config, props, children);
		case 'UnifiedCard':
			return renderUnifiedCard(config, props, children);
		case 'UnifiedBanner':
			return renderUnifiedBanner(config, props, children);
		case 'UnifiedChat':
			return renderUnifiedChat(config, props, children);
		case 'UnifiedForm':
			return renderUnifiedForm(config, props, children);
		case 'UnifiedProvider':
			return renderUnifiedProvider(config, props, children);
		// Layout Containers
		case 'FlexContainer':
			return renderFlexContainer(config, props, children);
		case 'GridContainer':
			return renderGridContainer(config, props, children);
		case 'CenterContainer':
			return renderCenterContainer(config, props, children);
		case 'StackContainer':
			return renderStackContainer(config, props, children);
		default:
			return renderGenericWrapper(config, props, children);
	}
}

// ========================================
// Unified Component Renderers
// ========================================

function renderUnifiedButton(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	// Import and render UnifiedButton with appropriate kind mapping
	const kind = mapToButtonKind(config.kind);
	return (
		<div data-wrapper="button" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedButton dynamically */}
			<button {...props} data-unified-kind={kind}>
				{children}
			</button>
		</div>
	);
}

function renderUnifiedHeader(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToHeaderKind(config.kind);
	return (
		<div data-wrapper="header" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedHeader dynamically */}
			<header {...props} data-unified-kind={kind}>
				{children}
			</header>
		</div>
	);
}

function renderUnifiedModal(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToModalKind(config.kind);
	return (
		<div data-wrapper="modal" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedModal dynamically */}
			<div {...props} data-unified-kind={kind}>
				{children}
			</div>
		</div>
	);
}

function renderUnifiedGrid(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToGridKind(config.kind);
	return (
		<div data-wrapper="grid" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedGrid dynamically */}
			<div {...props} data-unified-kind={kind}>
				{children}
			</div>
		</div>
	);
}

function renderUnifiedPage(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToPageKind(config.kind);
	return (
		<div data-wrapper="page" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedPage dynamically */}
			<div {...props} data-unified-kind={kind}>
				{children}
			</div>
		</div>
	);
}

function renderUnifiedGraph(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToGraphKind(config.kind);
	return (
		<div data-wrapper="graph" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedGraph dynamically */}
			<div {...props} data-unified-kind={kind}>
				{children}
			</div>
		</div>
	);
}

function renderUnifiedSidebar(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToSidebarKind(config.kind);
	return (
		<div data-wrapper="sidebar" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedSidebar dynamically */}
			<div {...props} data-unified-kind={kind}>
				{children}
			</div>
		</div>
	);
}

function renderUnifiedSettings(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToSettingsKind(config.kind);
	return (
		<div data-wrapper="settings" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedSettings dynamically */}
			<div {...props} data-unified-kind={kind}>
				{children}
			</div>
		</div>
	);
}

function renderUnifiedTheme(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToThemeKind(config.kind);
	return (
		<div data-wrapper="theme" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedTheme dynamically */}
			<div {...props} data-unified-kind={kind}>
				{children}
			</div>
		</div>
	);
}

function renderUnifiedAdmin(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToAdminKind(config.kind);
	return (
		<div data-wrapper="admin" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedAdmin dynamically */}
			<div {...props} data-unified-kind={kind}>
				{children}
			</div>
		</div>
	);
}

function renderUnifiedCard(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToCardKind(config.kind);
	return (
		<div data-wrapper="card" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedCard dynamically */}
			<div {...props} data-unified-kind={kind}>
				{children}
			</div>
		</div>
	);
}

function renderUnifiedBanner(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToBannerKind(config.kind);
	return (
		<div data-wrapper="banner" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedBanner dynamically */}
			<div {...props} data-unified-kind={kind}>
				{children}
			</div>
		</div>
	);
}

function renderUnifiedChat(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToChatKind(config.kind);
	return (
		<div data-wrapper="chat" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedChat dynamically */}
			<div {...props} data-unified-kind={kind}>
				{children}
			</div>
		</div>
	);
}

function renderUnifiedForm(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToFormKind(config.kind);
	return (
		<div data-wrapper="form" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedForm dynamically */}
			<form {...props} data-unified-kind={kind}>
				{children}
			</form>
		</div>
	);
}

function renderUnifiedProvider(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const kind = mapToProviderKind(config.kind);
	return (
		<div data-wrapper="provider" data-original-kind={config.kind}>
			{/* Placeholder - would import UnifiedProvider dynamically */}
			<div {...props} data-unified-kind={kind}>
				{children}
			</div>
		</div>
	);
}

// ========================================
// Layout Container Renderers
// ========================================

function renderFlexContainer(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const {
		direction = 'row',
		justify = 'center',
		align = 'center',
		wrap = 'nowrap',
		gap = '1rem',
		...otherProps
	} = props;

	const flexStyles = {
		display: 'flex',
		flexDirection: direction,
		justifyContent: justify,
		alignItems: align,
		flexWrap: wrap,
		gap: gap,
		...otherProps.style,
	};

	return (
		<div 
			{...otherProps}
			data-wrapper="flex-container" 
			data-original-kind={config.kind}
			style={flexStyles}
		>
			{children}
		</div>
	);
}

function renderGridContainer(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const {
		columns = 'repeat(auto-fit, minmax(250px, 1fr))',
		rows = 'auto',
		gap = '1rem',
		justifyItems = 'center',
		alignItems = 'center',
		...otherProps
	} = props;

	const gridStyles = {
		display: 'grid',
		gridTemplateColumns: columns,
		gridTemplateRows: rows,
		gap: gap,
		justifyItems: justifyItems,
		alignItems: alignItems,
		...otherProps.style,
	};

	return (
		<div 
			{...otherProps}
			data-wrapper="grid-container" 
			data-original-kind={config.kind}
			style={gridStyles}
		>
			{children}
		</div>
	);
}

function renderCenterContainer(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const {
		method = 'flex', // 'flex' or 'grid'
		...otherProps
	} = props;

	const centerStyles = method === 'grid' 
		? {
			display: 'grid',
			placeItems: 'center',
			minHeight: '100%',
			...otherProps.style,
		}
		: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			minHeight: '100%',
			...otherProps.style,
		};

	return (
		<div 
			{...otherProps}
			data-wrapper="center-container" 
			data-original-kind={config.kind}
			style={centerStyles}
		>
			{children}
		</div>
	);
}

function renderStackContainer(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	const {
		direction = 'column',
		gap = '1rem',
		align = 'stretch',
		justify = 'flex-start',
		...otherProps
	} = props;

	const stackStyles = {
		display: 'flex',
		flexDirection: direction,
		gap: gap,
		alignItems: align,
		justifyContent: justify,
		...otherProps.style,
	};

	return (
		<div 
			{...otherProps}
			data-wrapper="stack-container" 
			data-original-kind={config.kind}
			style={stackStyles}
		>
			{children}
		</div>
	);
}

function renderGenericWrapper(config: WrapperConfiguration, props: any, children: React.ReactNode) {
	return (
		<div data-wrapper="generic" data-original-kind={config.kind}>
			<div {...props}>
				{children}
			</div>
		</div>
	);
}

// ========================================
// Kind Mapping Functions
// ========================================

function mapToButtonKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		case 'primary-button-wrapper': return 'primary';
		case 'secondary-button-wrapper': return 'secondary';
		case 'close-button-wrapper': return 'close';
		case 'icon-button-wrapper': return 'icon';
		case 'dark-mode-toggle-wrapper': return 'dark-mode-toggle';
		default: return 'default';
	}
}

function mapToHeaderKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		case 'browse-header-wrapper': return 'browse-tabbed';
		case 'modal-header-wrapper': return 'modal';
		default: return 'simple';
	}
}

function mapToModalKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		default: return 'default';
	}
}

function mapToGridKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		case 'vs-grid-wrapper': return 'vs-grid';
		default: return 'basic';
	}
}

function mapToPageKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		case 'startup-page-wrapper': return 'startup';
		default: return 'basic';
	}
}

function mapToGraphKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		default: return 'bar';
	}
}

function mapToSidebarKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		case 'friends-sidebar-wrapper': return 'friends';
		default: return 'basic';
	}
}

function mapToSettingsKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		case 'customization-category-wrapper': return 'customization-category';
		case 'settings-panel-wrapper': return 'settings-panel';
		default: return 'settings-panel';
	}
}

function mapToThemeKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		case 'theme-selector-wrapper': return 'selector';
		default: return 'basic';
	}
}

function mapToAdminKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		case 'session-debugger-wrapper': return 'session-debugger';
		default: return 'basic';
	}
}

function mapToCardKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		default: return 'basic';
	}
}

function mapToBannerKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		default: return 'notification';
	}
}

function mapToChatKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		default: return 'basic';
	}
}

function mapToFormKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		default: return 'basic';
	}
}

function mapToProviderKind(wrapperKind: WrapperKind): string {
	switch (wrapperKind) {
		case 'socket-provider-wrapper': return 'socket-provider';
		case 'user-settings-provider-wrapper': return 'user-settings-provider';
		case 'theme-palette-provider-wrapper': return 'theme-palette-provider';
		case 'achievement-socket-listener-wrapper': return 'achievement-socket-listener';
		default: return 'generic';
	}
}

// ========================================
// Memoized Export
// ========================================

UnifiedWrapper.displayName = 'UnifiedWrapper';

export default memo(UnifiedWrapper);
