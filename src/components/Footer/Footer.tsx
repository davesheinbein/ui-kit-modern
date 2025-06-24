import React from 'react';
import { Wrapper } from '../Wrappers';
import { Button } from '../Button';
import styles from './Footer.module.scss';
import { FooterBodyFactory } from './factory';
import { FOOTER_CONFIGURATIONS } from './configurations';
import type {
	FooterKind,
	FooterConfiguration,
} from './configurations';

export type { FooterKind } from './configurations';

export interface FooterProps extends FooterConfiguration {
	leftContent?: React.ReactNode;
	rightContent?: React.ReactNode;
	centerContent?: React.ReactNode;
	className?: string;
	copyright?: string;
	links?: Array<{
		label: string;
		href?: string;
		onClick?: () => void;
	}>;
	showDivider?: boolean;
	children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({
	kind = 'standard',
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
		styles.footer,
		styles[kindClass],
		styles[themeClass],
		styles[sizeClass],
		stickyClass && styles[stickyClass],
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<footer className={combinedClassName}>
			{children ?
				children
			:	<FooterBodyFactory kind={kind} {...footerProps} />}
		</footer>
	);
};

export default Footer;
