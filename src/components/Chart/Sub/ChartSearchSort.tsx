import React from 'react';

interface ChartSearchSortProps {
	search: string;
	setSearch: (s: string) => void;
	sort: string;
	setSort: (s: string) => void;
	showSearch?: boolean;
	showFilter?: boolean;
}

const ChartSearchSort: React.FC<ChartSearchSortProps> = ({
	search,
	setSearch,
	sort,
	setSort,
	showSearch = false,
	showFilter = false,
}) => (
	<div className='legend__sortWrapper'>
		{showSearch && (
			<input
				className='legend__search'
				type='text'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder='Search...'
				aria-label='Search legend'
			/>
		)}
		{showFilter && (
			<>
				<label
					className='legend__sortLabel'
					htmlFor='legend-sort'
				>
					Sort:
				</label>
				<select
					id='legend-sort'
					className='legend__sort'
					value={sort}
					onChange={(e) => setSort(e.target.value)}
				>
					<option value='alpha'>A-Z</option>
					<option value='value'>Value</option>
				</select>
				<span className='legend__sortCaret'>▼</span>
			</>
		)}
	</div>
);

export default ChartSearchSort;
