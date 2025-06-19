import React from 'react';
import UnifiedHeader, {
	UnifiedHeaderProps,
} from './UnifiedHeader';

/**
 * Header component - a wrapper around UnifiedHeader for the most common use case
 * For more advanced header types, use UnifiedHeader with the 'kind' prop
 * @example
 * <Header kind="browse" title="Browse Puzzles" />
 * <Header kind="modal" title="Settings" onClose={() => {}} />
 * <Header kind="page" title="Dashboard" />
 */
export interface HeaderProps
	extends Omit<UnifiedHeaderProps, 'kind'> {
	/** Header kind - defaults to 'simple' */
	kind?: UnifiedHeaderProps['kind'];
}

const Header: React.FC<HeaderProps> = ({
	kind = 'simple',
	...props
}) => {
	return <UnifiedHeader kind={kind} {...props} />;
};

export default Header;
