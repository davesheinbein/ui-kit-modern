/**
 * FooterFactory - DRY footer factory system
 *
 * This factory provides a simplified API for creating footer components using the configuration system,
 * similar to ButtonFactory but for footers.
 */

import React from 'react';
import UnifiedFooter from './UnifiedFooter';
import type { UnifiedFooterProps } from './UnifiedFooter';
import type {
	FooterKind,
	FooterConfiguration,
} from './configurations';

// Factory function for creating footer components
export const FooterFactory: React.FC<
	UnifiedFooterProps
> = ({ kind, ...props }) => {
	return <UnifiedFooter kind={kind} {...props} />;
};

FooterFactory.displayName = 'FooterFactory';

/**
 * Ultra-DRY Footer shortcuts - for maximum convenience
 */
export const Foot = FooterFactory; // Ultra-short alias

/**
 * Footer presets with common patterns
 */
export const FooterPresets = {
	/**
	 * Simple footer with just copyright
	 */
	SIMPLE: (props: Partial<FooterConfiguration> = {}) => (
		<FooterFactory kind='simple' {...props} />
	),

	/**
	 * Standard footer with copyright and navigation links
	 */
	STANDARD: (props: Partial<FooterConfiguration> = {}) => (
		<FooterFactory kind='standard' {...props} />
	),

	/**
	 * Minimal footer with centered copyright
	 */
	MINIMAL: (props: Partial<FooterConfiguration> = {}) => (
		<FooterFactory kind='minimal' {...props} />
	),

	/**
	 * Social media footer
	 */
	SOCIAL: (props: Partial<FooterConfiguration> = {}) => (
		<FooterFactory kind='social' {...props} />
	),

	/**
	 * Corporate footer with extensive links
	 */
	CORPORATE: (props: Partial<FooterConfiguration> = {}) => (
		<FooterFactory kind='corporate' {...props} />
	),

	/**
	 * App footer with action buttons
	 */
	APP: (props: Partial<FooterConfiguration> = {}) => (
		<FooterFactory kind='app' {...props} />
	),

	/**
	 * Landing page footer
	 */
	LANDING: (props: Partial<FooterConfiguration> = {}) => (
		<FooterFactory kind='landing' {...props} />
	),

	/**
	 * Sticky footer that stays at bottom
	 */
	STICKY: (props: Partial<FooterConfiguration> = {}) => (
		<FooterFactory kind='sticky' sticky={true} {...props} />
	),
};

/**
 * Convenience function for creating footer components
 */
export const createFooter = (
	kind: FooterKind,
	config: Partial<FooterConfiguration> = {}
) => {
	return <FooterFactory kind={kind} {...config} />;
};

export default FooterFactory;
