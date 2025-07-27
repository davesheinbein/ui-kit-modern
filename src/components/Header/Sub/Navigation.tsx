import React from 'react';
import { Button } from '../../Button';
import styles from '../Header.module.scss';
import type {
	HeaderNavigationItem,
	HeaderNavigationPosition,
	HeaderNavigationLayout,
} from './types';

interface NavigationProps {
	navigation: HeaderNavigationItem[];
	navigationPosition: HeaderNavigationPosition;
	navigationLayout: HeaderNavigationLayout;
	onNavigationClick?: (item: HeaderNavigationItem) => void;
	activeNavigationId?: string;
	testId?: string;
}

const Navigation: React.FC<NavigationProps> = ({
	navigation,
	navigationPosition,
	navigationLayout,
	onNavigationClick,
	activeNavigationId,
	testId,
}) => {
	if (!navigation.length) return null;

	return (
		<nav
			className={[
				styles.navigation,
				styles[`nav-position-${navigationPosition}`],
				styles[`nav-layout-${navigationLayout}`],
			]
				.filter(Boolean)
				.join(' ')}
			role='navigation'
			aria-label='Main navigation'
			data-testid={`${testId}-navigation`}
		>
			{navigation.map((item) => (
				<Button
					key={item.id}
					kind={item.active ? 'primary' : 'ghost'}
					size='medium'
					onClick={() => {
						item.onClick?.();
						onNavigationClick?.(item);
					}}
					href={item.href}
					disabled={item.disabled}
					className={[
						styles.navItem,
						item.active && styles.navItemActive,
						activeNavigationId === item.id &&
							styles.navItemActive,
					]
						.filter(Boolean)
						.join(' ')}
					label={item.label}
					icon={item.icon}
					data-testid={`${testId}-nav-${item.id}`}
				>
					{item.label}
					{item.badge && (
						<span className={styles.navItemBadge}>
							{item.badge}
						</span>
					)}
				</Button>
			))}
		</nav>
	);
};

export default Navigation;
