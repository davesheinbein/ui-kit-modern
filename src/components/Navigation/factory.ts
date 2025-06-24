/**
 * Navigation Factory - Factory for creating navigation components
 *
 * Provides ultra-compact ways to create navigation components with minimal code.
 * Follows the same pattern as factory for consistency.
 */

import React from 'react';
import Navigation, { NavigationProps } from './Navigation';
import {
	NavigationKind,
	getNavigationConfig,
} from './configurations';

// ========================================
// Ultra-DRY Navigation Factory
// ========================================

export interface NavigationFactoryConfig {
	kind: NavigationKind;
	[key: string]: any;
}

/**
 * Ultra-DRY Navigation Factory - creates navigation components with minimal code
 */
export const NavigationFactory = (
	config: NavigationFactoryConfig | NavigationKind
) => {
	const finalConfig =
		typeof config === 'string' ? { kind: config } : config;

	return (props: Partial<NavigationProps> = {}) => {
		const mergedProps = { ...finalConfig, ...props };
		return React.createElement(Navigation, mergedProps);
	};
};

// ========================================
// Pre-configured Navigation Presets
// ========================================

export const NavigationPresets = {
	// Primary Navigation
	navbar: NavigationFactory('navbar'),
	mobileNav: NavigationFactory('mobile-nav'),
	hamburger: NavigationFactory('hamburger-menu'),
	sideDrawer: NavigationFactory('side-drawer'),

	// Secondary Navigation
	breadcrumbs: NavigationFactory('breadcrumbs'),
	pagination: NavigationFactory('pagination'),
	tabs: NavigationFactory('tabs'),
	segmentedControls: NavigationFactory(
		'segmented-controls'
	),

	// Utility Navigation
	backNav: NavigationFactory('back-navigation'),
	stepNav: NavigationFactory('step-navigation'),
	filterNav: NavigationFactory('filter-navigation'),
	quickNav: NavigationFactory('quick-navigation'),

	// Advanced Presets
	responsiveNav: NavigationFactory({
		kind: 'navbar',
		responsive: true,
		mobileBreakpoint: 768,
	}),

	dashboardNav: NavigationFactory({
		kind: 'side-drawer',
		collapsible: true,
		defaultCollapsed: false,
	}),

	wizardNav: NavigationFactory({
		kind: 'step-navigation',
		showProgress: true,
		allowSkip: false,
	}),
};

export default NavigationFactory;
