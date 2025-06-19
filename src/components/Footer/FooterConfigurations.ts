/**
 * Footer Component Configurations
 *
 * This file defines all the configuration objects for footer-related components
 * following the DRY pattern used throughout the system.
 */

export type FooterKind =
	| 'simple'
	| 'standard'
	| 'minimal'
	| 'social'
	| 'corporate'
	| 'app'
	| 'landing'
	| 'sticky'
	| 'custom';

export interface FooterLink {
	label: string;
	href?: string;
	onClick?: () => void;
}

export interface FooterConfiguration {
	kind: FooterKind;
	leftContent?: React.ReactNode;
	rightContent?: React.ReactNode;
	centerContent?: React.ReactNode;
	className?: string;
	copyright?: string;
	links?: FooterLink[];
	showDivider?: boolean;
	sticky?: boolean;
	theme?: 'light' | 'dark' | 'transparent';
	size?: 'small' | 'medium' | 'large';
}

/**
 * Pre-configured footer component configurations
 */
export const FOOTER_CONFIGURATIONS: Record<
	FooterKind,
	Partial<FooterConfiguration>
> = {
	simple: {
		showDivider: false,
		theme: 'light',
		size: 'small',
		links: [],
	},
	standard: {
		showDivider: true,
		theme: 'light',
		size: 'medium',
		links: [
			{ label: 'Privacy', href: '/privacy' },
			{ label: 'Terms', href: '/terms' },
			{ label: 'Contact', href: '/contact' },
		],
	},
	minimal: {
		showDivider: false,
		theme: 'light',
		size: 'small',
		links: [],
	},
	social: {
		showDivider: true,
		theme: 'light',
		size: 'medium',
		links: [
			{ label: 'Twitter', href: 'https://twitter.com' },
			{ label: 'GitHub', href: 'https://github.com' },
			{ label: 'LinkedIn', href: 'https://linkedin.com' },
		],
	},
	corporate: {
		showDivider: true,
		theme: 'light',
		size: 'large',
		links: [
			{ label: 'About', href: '/about' },
			{ label: 'Careers', href: '/careers' },
			{ label: 'Press', href: '/press' },
			{ label: 'Legal', href: '/legal' },
			{ label: 'Privacy', href: '/privacy' },
		],
	},
	app: {
		showDivider: false,
		theme: 'light',
		size: 'small',
		links: [
			{ label: 'Help', href: '/help' },
			{
				label: 'Settings',
				onClick: () => console.log('Settings clicked'),
			},
		],
	},
	landing: {
		showDivider: true,
		theme: 'light',
		size: 'medium',
		links: [
			{ label: 'Features', href: '#features' },
			{ label: 'Pricing', href: '#pricing' },
			{ label: 'Contact', href: '#contact' },
		],
	},
	sticky: {
		sticky: true,
		showDivider: true,
		theme: 'light',
		size: 'medium',
	},
	custom: {
		theme: 'light',
		size: 'medium',
	},
};
