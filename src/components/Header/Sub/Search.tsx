import React from 'react';
import styles from '../Header.module.scss';
import type { HeaderSearchPosition } from './types';

interface SearchProps {
	search?: React.ReactNode;
	searchPosition: HeaderSearchPosition;
	searchFullWidthMobile: boolean;
	testId?: string;
}

const Search: React.FC<SearchProps> = ({
	search,
	searchPosition,
	searchFullWidthMobile,
	testId,
}) => {
	if (!search) return null;
	return (
		<div
			className={[
				styles.search,
				styles[`search-position-${searchPosition}`],
				searchFullWidthMobile &&
					styles.searchFullWidthMobile,
			]
				.filter(Boolean)
				.join(' ')}
			data-testid={`${testId}-search`}
		>
			{search}
		</div>
	);
};

export default Search;
