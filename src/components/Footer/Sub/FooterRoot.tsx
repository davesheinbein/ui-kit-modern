import React from 'react';
import styles from '../Footer.module.scss';
import { Wrapper } from '../../Wrappers';
import FooterSection from './FooterSection';
import FooterLinks from './FooterLinks';
import type { FooterProps } from './types';
import { FOOTER_CONFIGURATIONS } from '../configurations';

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

	return (
		<Wrapper className={combinedClassName}>
			<FooterSection
				leftContent={merged.leftContent || defaultCopyright}
				centerContent={merged.centerContent}
				rightContent={
					merged.rightContent || (
						<FooterLinks links={defaultLinks} />
					)
				}
			/>
			{children}
		</Wrapper>
	);
};

export default Footer;
