import React from 'react';
import type { FooterLink } from '../configurations';
import styles from '../Footer.module.scss';

interface FooterLinksProps {
	links?: FooterLink[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({
	links,
}) => {
	if (!links || links.length === 0) return null;
	return (
		<nav className={styles.footerNav}>
			{links.map((link, i) => (
				<a
					key={i}
					href={link.href}
					className={styles.footerLink}
					target={link.target || '_self'}
					rel={link.rel}
				>
					{link.label}
				</a>
			))}
		</nav>
	);
};

export default FooterLinks;
