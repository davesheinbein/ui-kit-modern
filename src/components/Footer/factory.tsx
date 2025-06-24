/**
 * FooterFactory - DRY footer factory system
 *
 * This factory provides a simplified API for creating footer components using the configuration system,
 * similar to ButtonFactory but for footers.
 */

import React from 'react';
import { Wrapper } from '../Wrappers';
import Footer from './Footer';
import { Button } from '../Button';
import type { FooterProps } from './Footer';
import type {
	FooterKind,
	FooterConfiguration,
	FooterLink,
} from './configurations';
import styles from './Footer.module.scss';

export interface FooterBodyFactoryProps {
	kind: FooterKind;
	leftContent?: React.ReactNode;
	rightContent?: React.ReactNode;
	centerContent?: React.ReactNode;
	copyright?: string;
	links?: FooterLink[];
	showDivider?: boolean;
	[key: string]: any;
}

/**
 * Simple footer content component
 */
const SimpleFooterBody: React.FC<any> = (props) => {
	const { copyright } = props;
	const defaultCopyright =
		copyright ||
		`© ${new Date().getFullYear()} UI Kit Modern`;

	return (
		<>
			<Wrapper className={styles.footerLeft}>
				{defaultCopyright}
			</Wrapper>
			<Wrapper className={styles.footerRight}></Wrapper>
		</>
	);
};

/**
 * Standard footer with navigation links
 */
const StandardFooterBody: React.FC<any> = (props) => {
	const {
		copyright,
		links = [],
		showDivider = true,
	} = props;
	const defaultCopyright =
		copyright ||
		`© ${new Date().getFullYear()} UI Kit Modern`;

	return (
		<>
			<Wrapper className={styles.footerLeft}>
				{defaultCopyright}
			</Wrapper>
			<Wrapper className={styles.footerRight}>
				{links.length > 0 && (
					<nav className={styles.footerNav}>
						{' '}
						{links.map(
							(link: FooterLink, index: number) => (
								<React.Fragment
									key={link.href || link.label || index}
								>
									{link.onClick ?
										<Button
											onClick={link.onClick}
											className={styles.footerLink}
											type='button'
											kind='ghost'
										>
											{link.label}
										</Button>
									: link.href ?
										<a
											href={link.href}
											className={styles.footerLink}
											target={
												link.href.startsWith('http') ?
													'_blank'
												:	undefined
											}
											rel={
												link.href.startsWith('http') ?
													'noopener noreferrer'
												:	undefined
											}
										>
											{link.label}
										</a>
									:	<span className={styles.footerLink}>
											{link.label}
										</span>
									}
									{showDivider &&
										index < links.length - 1 && (
											<span
												className={styles.footerDivider}
											>
												•
											</span>
										)}
								</React.Fragment>
							)
						)}
					</nav>
				)}
			</Wrapper>
		</>
	);
};

/**
 * Minimal footer content component
 */
const MinimalFooterBody: React.FC<any> = (props) => {
	const { copyright } = props;
	const defaultCopyright =
		copyright || `© ${new Date().getFullYear()}`;

	return (
		<>
			<Wrapper className={styles.footerLeft}></Wrapper>
			<Wrapper className={styles.footerCenter}>
				{defaultCopyright}
			</Wrapper>
			<Wrapper className={styles.footerRight}></Wrapper>
		</>
	);
};

/**
 * Social footer with social media links
 */
const SocialFooterBody: React.FC<any> = (props) => {
	const {
		copyright,
		links = [],
		showDivider = true,
	} = props;
	const defaultCopyright =
		copyright ||
		`© ${new Date().getFullYear()} UI Kit Modern`;

	return (
		<>
			<Wrapper className={styles.footerLeft}>
				{defaultCopyright}
			</Wrapper>
			<Wrapper className={styles.footerRight}>
				<span style={{ marginRight: '1rem' }}>
					Follow us:
				</span>
				{links.length > 0 && (
					<nav className={styles.footerNav}>
						{links.map(
							(link: FooterLink, index: number) => (
								<React.Fragment
									key={link.href || link.label || index}
								>
									<a
										href={link.href}
										className={styles.footerLink}
										target='_blank'
										rel='noopener noreferrer'
									>
										{link.label}
									</a>
									{showDivider &&
										index < links.length - 1 && (
											<span
												className={styles.footerDivider}
											>
												•
											</span>
										)}
								</React.Fragment>
							)
						)}
					</nav>
				)}
			</Wrapper>
		</>
	);
};

/**
 * Corporate footer with extensive links
 */
const CorporateFooterBody: React.FC<any> = (props) => {
	const {
		copyright,
		links = [],
		showDivider = true,
	} = props;
	const defaultCopyright =
		copyright ||
		`© ${new Date().getFullYear()} Company Name. All rights reserved.`;

	return (
		<>
			<Wrapper className={styles.footerLeft}>
				{defaultCopyright}
			</Wrapper>
			<Wrapper className={styles.footerRight}>
				{links.length > 0 && (
					<nav className={styles.footerNav}>
						{links.map(
							(link: FooterLink, index: number) => (
								<React.Fragment
									key={link.href || link.label || index}
								>
									<a
										href={link.href}
										className={styles.footerLink}
									>
										{link.label}
									</a>
									{showDivider &&
										index < links.length - 1 && (
											<span
												className={styles.footerDivider}
											>
												•
											</span>
										)}
								</React.Fragment>
							)
						)}
					</nav>
				)}
			</Wrapper>
		</>
	);
};

/**
 * App footer with action buttons
 */
const AppFooterBody: React.FC<any> = (props) => {
	const { copyright, links = [] } = props;
	const defaultCopyright = copyright || `v1.0.0`;

	return (
		<>
			<Wrapper className={styles.footerLeft}>
				{defaultCopyright}
			</Wrapper>
			<Wrapper className={styles.footerRight}>
				{links.length > 0 && (
					<nav className={styles.footerNav}>
						{' '}
						{links.map(
							(link: FooterLink, index: number) => (
								<React.Fragment
									key={link.href || link.label || index}
								>
									{link.onClick ?
										<Button
											onClick={link.onClick}
											className={styles.footerLink}
											type='button'
											kind='ghost'
										>
											{link.label}
										</Button>
									:	<a
											href={link.href}
											className={styles.footerLink}
										>
											{link.label}
										</a>
									}
								</React.Fragment>
							)
						)}
					</nav>
				)}
			</Wrapper>
		</>
	);
};

/**
 * Landing page footer
 */
const LandingFooterBody: React.FC<any> = (props) => {
	const {
		copyright,
		links = [],
		showDivider = true,
	} = props;
	const defaultCopyright =
		copyright ||
		`© ${new Date().getFullYear()} UI Kit Modern`;

	return (
		<>
			<Wrapper className={styles.footerLeft}>
				{defaultCopyright}
			</Wrapper>
			<Wrapper className={styles.footerCenter}>
				{links.length > 0 && (
					<nav className={styles.footerNav}>
						{links.map(
							(link: FooterLink, index: number) => (
								<React.Fragment
									key={link.href || link.label || index}
								>
									<a
										href={link.href}
										className={styles.footerLink}
									>
										{link.label}
									</a>
									{showDivider &&
										index < links.length - 1 && (
											<span
												className={styles.footerDivider}
											>
												•
											</span>
										)}
								</React.Fragment>
							)
						)}
					</nav>
				)}
			</Wrapper>
			<Wrapper className={styles.footerRight}></Wrapper>
		</>
	);
};

/**
 * Factory component that renders the appropriate footer body based on kind
 */
export const FooterBodyFactory: React.FC<
	FooterBodyFactoryProps
> = ({
	kind,
	leftContent,
	rightContent,
	centerContent,
	...props
}) => {
	// If custom content is provided, use it
	if (
		leftContent !== undefined ||
		rightContent !== undefined ||
		centerContent !== undefined
	) {
		return (
			<>
				<Wrapper className={styles.footerLeft}>
					{leftContent !== undefined ?
						leftContent
					:	props.copyright ||
						`© ${new Date().getFullYear()} UI Kit Modern`
					}
				</Wrapper>
				{centerContent && (
					<Wrapper className={styles.footerCenter}>
						{centerContent}
					</Wrapper>
				)}
				<Wrapper className={styles.footerRight}>
					{rightContent}
				</Wrapper>
			</>
		);
	}

	// Otherwise use the predefined footer body based on kind
	switch (kind) {
		case 'simple':
			return <SimpleFooterBody {...props} />;
		case 'standard':
			return <StandardFooterBody {...props} />;
		case 'minimal':
			return <MinimalFooterBody {...props} />;
		case 'social':
			return <SocialFooterBody {...props} />;
		case 'corporate':
			return <CorporateFooterBody {...props} />;
		case 'app':
			return <AppFooterBody {...props} />;
		case 'landing':
			return <LandingFooterBody {...props} />;
		case 'sticky':
			return <StandardFooterBody {...props} />;
		case 'custom':
			return <StandardFooterBody {...props} />;
		default:
			return <StandardFooterBody {...props} />;
	}
};

// Factory function for creating footer components
export const FooterFactory: React.FC<FooterProps> = ({
	kind,
	...props
}) => {
	return <Footer kind={kind} {...props} />;
};

FooterFactory.displayName = 'FooterFactory';

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
