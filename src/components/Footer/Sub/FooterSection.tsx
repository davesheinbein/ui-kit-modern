import React from 'react';
import styles from '../Footer.module.scss';

interface FooterSectionProps {
	leftContent?: React.ReactNode;
	centerContent?: React.ReactNode;
	rightContent?: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({
	leftContent,
	centerContent,
	rightContent,
}) => (
	<>
		<div className={styles.footerLeft}>{leftContent}</div>
		<div className={styles.footerCenter}>
			{centerContent}
		</div>
		<div className={styles.footerRight}>{rightContent}</div>
	</>
);

export default FooterSection;
