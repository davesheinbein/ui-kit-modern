import React from 'react';
import styles from './Footer.module.scss';

export interface FooterProps {
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
}

const Footer: React.FC<FooterProps> = ({
	leftContent,
	rightContent,
	centerContent,
	className = '',
	copyright,
	links = [],
	showDivider = true,
}) => {
	const defaultLeftContent =
		copyright ||
		`© ${new Date().getFullYear()} UI Kit Modern`;

	const defaultRightContent =
		links.length > 0 ?
			<nav className={styles.footerNav}>
				{links.map((link, index) => (
					<React.Fragment
						key={link.href || link.label || index}
					>
						{link.onClick ?
							<button
								onClick={link.onClick}
								className={styles.footerLink}
								type='button'
							>
								{link.label}
							</button>
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
						{index < links.length - 1 && (
							<span className={styles.footerDivider}>
								•
							</span>
						)}
					</React.Fragment>
				))}
			</nav>
		:	null;

	return (
		<footer
			className={`${styles.footer} ${className}`.trim()}
		>
			<div className={styles.footerLeft}>
				{leftContent !== undefined ?
					leftContent
				:	defaultLeftContent}
			</div>

			{centerContent && (
				<div className={styles.footerCenter}>
					{centerContent}
				</div>
			)}

			<div className={styles.footerRight}>
				{rightContent !== undefined ?
					rightContent
				:	defaultRightContent}
			</div>
		</footer>
	);
};

export default Footer;
