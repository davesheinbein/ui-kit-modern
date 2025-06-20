import React from 'react';
import UnifiedNavigation, {
	UnifiedNavigationProps,
} from './UnifiedNavigation';

/**
 * Primary Navigation component - a wrapper around UnifiedNavigation for the most common use case
 * For more advanced navigation types, use UnifiedNavigation with the 'kind' prop
 * @example
 * <Navigation kind="navbar" items={navItems} />
 * <Navigation kind="tabs" activeTab="home" />
 * <Navigation kind="pagination" totalPages={10} currentPage={5} />
 */
export interface NavigationProps
	extends Omit<UnifiedNavigationProps, 'kind'> {
	/** Navigation kind - defaults to 'navbar' */
	kind?: UnifiedNavigationProps['kind'];
}

const Navigation: React.FC<NavigationProps> = ({
	kind = 'navbar',
	children,
	...props
}) => {
	return (
		<UnifiedNavigation kind={kind} {...props}>
			{children}
		</UnifiedNavigation>
	);
};

export default Navigation;
