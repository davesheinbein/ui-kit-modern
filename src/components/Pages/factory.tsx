/**
 * Page Factory - DRY page factory system
 *
 * This factory provides a simplified API for creating pages using the configuration system,
 * similar to ButtonFactory but for pages.
 */

import React from 'react';
import { Wrapper } from '../Wrappers';
import Page, { PageProps } from './Page';
import {
	getPageConfiguration,
	createPageConfig,
	ExtendedPageKind,
} from './configurations';

// Factory function for creating pages
export const PageFactory: React.FC<PageProps> = ({
	kind,
	configuration,
	...props
}) => {
	const finalConfig =
		configuration ?
			{ ...getPageConfiguration(kind), ...configuration }
		:	getPageConfiguration(kind);

	return (
		<Page
			kind={kind}
			configuration={finalConfig}
			{...props}
		/>
	);
};

PageFactory.displayName = 'PageFactory';

// Preset page components for common use cases
export const PagePresets = {
	// Startup page preset
	Startup: (props: Omit<PageProps, 'kind'>) => (
		<PageFactory kind='startup' {...props} />
	),

	// Landing page preset
	Landing: (props: Omit<PageProps, 'kind'>) => (
		<PageFactory kind='landing' {...props} />
	),

	// Dashboard page preset
	Dashboard: (props: Omit<PageProps, 'kind'>) => (
		<PageFactory kind='dashboard' {...props} />
	),

	// Settings page preset
	Settings: (props: Omit<PageProps, 'kind'>) => (
		<PageFactory kind='settings' {...props} />
	),

	// Profile page preset
	Profile: (props: Omit<PageProps, 'kind'>) => (
		<PageFactory kind='profile' {...props} />
	),

	// Game page preset
	Game: (props: Omit<PageProps, 'kind'>) => (
		<PageFactory kind='game' {...props} />
	),

	// Browse page preset
	Browse: (props: Omit<PageProps, 'kind'>) => (
		<PageFactory kind='browse' {...props} />
	),

	// Results page preset
	Results: (props: Omit<PageProps, 'kind'>) => (
		<PageFactory kind='results' {...props} />
	),

	// About page preset
	About: (props: Omit<PageProps, 'kind'>) => (
		<PageFactory kind='about' {...props} />
	),

	// Help page preset
	Help: (props: Omit<PageProps, 'kind'>) => (
		<PageFactory kind='help' {...props} />
	),
};

// Utility function to create page with custom configuration
export const createPage = (
	kind: ExtendedPageKind,
	props?: Omit<PageProps, 'kind'>,
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
