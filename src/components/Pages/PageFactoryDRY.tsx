/**
 * Page Factory - DRY page factory system
 *
 * This factory provides a simplified API for creating pages using the configuration system,
 * similar to ButtonFactory but for pages.
 */

import React from 'react';
import UnifiedPage, {
	UnifiedPageProps,
} from './UnifiedPage';
import {
	getPageConfiguration,
	createPageConfig,
	ExtendedPageKind,
} from './PageConfigurations';

// Factory function for creating pages
export const PageFactory: React.FC<UnifiedPageProps> = ({
	kind,
	configuration,
	...props
}) => {
	const finalConfig =
		configuration ?
			{ ...getPageConfiguration(kind), ...configuration }
		:	getPageConfiguration(kind);

	return (
		<UnifiedPage
			kind={kind}
			configuration={finalConfig}
			{...props}
		/>
	);
};

PageFactory.displayName = 'PageFactory';

// Short alias for convenience
export const P = PageFactory;

// Preset page components for common use cases
export const PagePresets = {
	// Startup page preset
	Startup: (props: Omit<UnifiedPageProps, 'kind'>) => (
		<PageFactory kind='startup' {...props} />
	),

	// Landing page preset
	Landing: (props: Omit<UnifiedPageProps, 'kind'>) => (
		<PageFactory kind='landing' {...props} />
	),

	// Dashboard page preset
	Dashboard: (props: Omit<UnifiedPageProps, 'kind'>) => (
		<PageFactory kind='dashboard' {...props} />
	),

	// Settings page preset
	Settings: (props: Omit<UnifiedPageProps, 'kind'>) => (
		<PageFactory kind='settings' {...props} />
	),

	// Profile page preset
	Profile: (props: Omit<UnifiedPageProps, 'kind'>) => (
		<PageFactory kind='profile' {...props} />
	),

	// Game page preset
	Game: (props: Omit<UnifiedPageProps, 'kind'>) => (
		<PageFactory kind='game' {...props} />
	),

	// Browse page preset
	Browse: (props: Omit<UnifiedPageProps, 'kind'>) => (
		<PageFactory kind='browse' {...props} />
	),

	// Results page preset
	Results: (props: Omit<UnifiedPageProps, 'kind'>) => (
		<PageFactory kind='results' {...props} />
	),

	// About page preset
	About: (props: Omit<UnifiedPageProps, 'kind'>) => (
		<PageFactory kind='about' {...props} />
	),

	// Help page preset
	Help: (props: Omit<UnifiedPageProps, 'kind'>) => (
		<PageFactory kind='help' {...props} />
	),
};

// Utility function to create page with custom configuration
export const createPage = (
	kind: ExtendedPageKind,
	props?: Omit<UnifiedPageProps, 'kind'>,
	configOverrides?: any
) => {
	const config =
		configOverrides ?
			createPageConfig(kind, configOverrides)
		:	getPageConfiguration(kind);

	return (
		<PageFactory
			kind={kind}
			configuration={config}
			{...props}
		/>
	);
};

export default PageFactory;
