import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { Button } from '../../Button';
import styles from '../Header.module.scss';
import type {
	HeaderNavigationItem,
	HeaderAction,
} from './types';

interface MobileSidebarProps {
	title?: string;
	navigation: HeaderNavigationItem[];
	onNavigationClick?: (item: HeaderNavigationItem) => void;
	search?: React.ReactNode;
	mobileMenuActions: HeaderAction[];
	mobileMenuContent?: React.ReactNode;
	mobileMenuOpen: boolean;
	setMobileMenuOpen: (open: boolean) => void;
	testId?: string;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
	title,
	navigation,
	onNavigationClick,
	search,
	mobileMenuActions,
	mobileMenuContent,
	mobileMenuOpen,
	setMobileMenuOpen,
	testId,
}) => {
	const defaultMobileContent = (
		<div className={styles.mobileMenuContent}>
			{navigation.length > 0 && (
				<div className={styles.mobileNavSection}>
					<h3>Navigation</h3>
					{navigation.map((item) => (
						<Button
							key={item.id}
							kind='ghost'
							fullWidth
							onClick={() => {
								item.onClick?.();
								onNavigationClick?.(item);
								setMobileMenuOpen(false);
							}}
							href={item.href}
							disabled={item.disabled}
							className={styles.mobileNavItem}
							icon={item.icon}
						>
							{item.label}
							{item.badge && (
								<span className={styles.navItemBadge}>
									{item.badge}
								</span>
							)}
						</Button>
					))}
				</div>
			)}
			{search && (
				<div className={styles.mobileSearchSection}>
					<h3>Search</h3>
					{search}
				</div>
			)}
			{mobileMenuActions.length > 0 && (
				<div className={styles.mobileActionsSection}>
					<h3>Actions</h3>
					{mobileMenuActions.map((action, index) => (
						<Button
							key={action.id || index}
							kind={
								action.variant === 'primary' ?
									'primary'
								:	'ghost'
							}
							fullWidth
							onClick={() => {
								action.onClick?.();
								setMobileMenuOpen(false);
							}}
							disabled={action.disabled}
							loading={action.loading}
							icon={action.icon}
						>
							{action.label}
						</Button>
					))}
				</div>
			)}
		</div>
	);

	return (
		<Sidebar
			variant='classic'
			open={mobileMenuOpen}
			onClose={() => setMobileMenuOpen(false)}
			header={
				<h3 style={{ margin: 0 }}>{title || 'Menu'}</h3>
			}
			showCloseButton
			ariaLabel='Mobile Navigation Menu'
			data-testid={`${testId}-mobile-sidebar`}
		>
			{mobileMenuContent || defaultMobileContent}
		</Sidebar>
	);
};

export default MobileSidebar;
