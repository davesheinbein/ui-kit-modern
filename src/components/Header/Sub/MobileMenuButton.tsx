import React from 'react';
import { Button } from '../../Button';
import styles from '../Header.module.scss';
import type { HeaderMobileLayout } from './types';

interface MobileMenuButtonProps {
	mobileLayout: HeaderMobileLayout;
	mobileMenuOpen: boolean;
	setMobileMenuOpen: (open: boolean) => void;
	onMobileMenuToggle?: () => void;
	testId?: string;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
	mobileLayout,
	mobileMenuOpen,
	setMobileMenuOpen,
	onMobileMenuToggle,
	testId,
}) => {
	if (mobileLayout !== 'hamburger') return null;
	return (
		<Button
			kind='ghost'
			size='medium'
			onClick={() => {
				setMobileMenuOpen(!mobileMenuOpen);
				onMobileMenuToggle?.();
			}}
			className={styles.mobileMenuButton}
			label='Toggle mobile menu'
			icon='☰'
			data-testid={`${testId}-mobile-menu-button`}
		/>
	);
};

export default MobileMenuButton;
