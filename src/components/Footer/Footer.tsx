import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerLeft}></div>
			<div className={styles.footerRight}></div>
		</div>
	);
};

export default Footer;
