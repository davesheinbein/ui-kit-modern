import React from 'react';
import { Wrapper } from '../Wrappers';
import { Button } from '../Button';
import styles from './Footer.module.scss';
import { FOOTER_CONFIGURATIONS } from './configurations';
import type {
	FooterKind,
	FooterConfiguration,
	FooterLink,
} from './configurations';

export interface FooterProps
	extends Partial<FooterConfiguration> {
	kind?: FooterKind;
	children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({
	kind = 'standard',
	leftContent,
	rightContent,
	centerContent,
	className = '',
	copyright,
	links,
	showDivider,
	sticky,
	theme,
	size,
	children,
	...rest
}) => {
	const config = FOOTER_CONFIGURATIONS[kind] || {};
	const merged = {
		...config,
		...rest,
		leftContent,
		rightContent,
		centerContent,
		className,
		copyright,
		links,
		showDivider,
		sticky,
		theme,
		size,
	};

	const kindClass = `footer-${kind}`;
	const themeClass =
		merged.theme ? `footer-theme-${merged.theme}` : '';
	const sizeClass =
		merged.size ? `footer-size-${merged.size}` : '';
	const stickyClass =
		merged.sticky ? styles['footer-sticky'] : '';
	const combinedClassName = [
		styles.footer,
		styles[kindClass],
		themeClass && styles[themeClass],
		sizeClass && styles[sizeClass],
		stickyClass,
		className,
	]
		.filter(Boolean)
		.join(' ');

	const defaultCopyright =
		merged.copyright ||
		`© ${new Date().getFullYear()} UI Kit Modern`;
	const defaultLinks = merged.links || [];
	const divider = (index: number, arr: any[]) =>
		merged.showDivider && index < arr.length - 1 ?
			<span className={styles.footerDivider}>•</span>
		:	null;

	// DRY: Single function for slot content
	const getSlot = (slot: 'left' | 'center' | 'right') => {
		if (slot === 'left') {
			return (
				leftContent !== undefined ? leftContent
				: kind === 'minimal' ? defaultCopyright
				: defaultCopyright
			);
		}
		if (slot === 'center') {
			return (
				centerContent !== undefined ? centerContent
				: kind === 'landing' && defaultLinks.length > 0 ?
					<nav className={styles.footerNav}>
						{defaultLinks.map((link: FooterLink, i) => (
							<React.Fragment
								key={link.href || link.label || i}
							>
								<a
									href={link.href}
									className={styles.footerLink}
								>
									{link.label}
								</a>
								{divider(i, defaultLinks)}
							</React.Fragment>
						))}
					</nav>
				:	null
			);
		}
		if (slot === 'right') {
			return (
				rightContent !== undefined ? rightContent
				: kind === 'social' ?
					<>
						<span className={styles.footerRight__label}>
							Follow us:
						</span>
						{defaultLinks.length > 0 && (
							<nav className={styles.footerNav}>
								{defaultLinks.map((link: FooterLink, i) => (
									<React.Fragment
										key={link.href || link.label || i}
									>
										<a
											href={link.href}
											className={styles.footerLink}
											target={
												(
													link.href &&
													link.href.startsWith('http')
												) ?
													'_blank'
												:	undefined
											}
											rel={
												(
													link.href &&
													link.href.startsWith('http')
												) ?
													'noopener noreferrer'
												:	undefined
											}
										>
											{link.label}
										</a>
										{divider(i, defaultLinks)}
									</React.Fragment>
								))}
							</nav>
						)}
					</>
				: defaultLinks.length > 0 && kind !== 'landing' ?
					<nav className={styles.footerNav}>
						{defaultLinks.map((link: FooterLink, i) => (
							<React.Fragment
								key={link.href || link.label || i}
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
										target={
											(
												link.href &&
												link.href.startsWith('http')
											) ?
												'_blank'
											:	undefined
										}
										rel={
											(
												link.href &&
												link.href.startsWith('http')
											) ?
												'noopener noreferrer'
											:	undefined
										}
									>
										{link.label}
									</a>
								}
								{divider(i, defaultLinks)}
							</React.Fragment>
						))}
					</nav>
				:	null
			);
		}
		return null;
	};

	return (
		<footer className={combinedClassName}>
			<Wrapper className={styles.footerLeft}>
				{getSlot('left')}
			</Wrapper>
			<Wrapper className={styles.footerCenter}>
				{getSlot('center')}
			</Wrapper>
			<Wrapper className={styles.footerRight}>
				{getSlot('right')}
			</Wrapper>
		</footer>
	);
};

export default Footer;
