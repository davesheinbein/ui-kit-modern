import React from 'react';
import Footer from './Footer';
import { FooterBodyFactory } from './factory';
import { FOOTER_CONFIGURATIONS } from './configurations';
import type {
	FooterKind,
	FooterConfiguration,
} from './configurations';

// Re-export types for easier importing
export type { FooterKind } from './configurations';

export interface UnifiedFooterProps
	extends FooterConfiguration {
	kind: FooterKind;
	children?: React.ReactNode;
	[key: string]: any;
}

/**
 * UnifiedFooter - The main DRY footer component
 *
 * This component combines the base Footer wrapper with the FooterBodyFactory
 * to create any footer component type through configuration.
 */
const UnifiedFooter: React.FC<UnifiedFooterProps> = ({
	kind,
	children,
	...props
}) => {
	// Get base configuration for this footer kind
	const baseConfig = FOOTER_CONFIGURATIONS[kind] || {};

	// Merge base config with props (props take precedence)
	const finalConfig = {
		...baseConfig,
		...props,
		kind,
	};

	const {
		theme = 'light',
		size = 'medium',
		sticky = false,
		className = '',
		kind: _kind, // Extract kind to avoid passing it twice
		...footerProps
	} = finalConfig;

	// Build CSS classes
	const kindClass = `footer-${kind}`;
	const themeClass = `footer-theme-${theme}`;
	const sizeClass = `footer-size-${size}`;
	const stickyClass = sticky ? 'footer-sticky' : '';
	const combinedClassName = [
		kindClass,
		themeClass,
		sizeClass,
		stickyClass,
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<Footer className={combinedClassName} {...footerProps}>
			{children || (
				<FooterBodyFactory kind={kind} {...footerProps} />
			)}
		</Footer>
	);
};

export default UnifiedFooter;
