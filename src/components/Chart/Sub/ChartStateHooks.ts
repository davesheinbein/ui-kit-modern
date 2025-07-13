import { useState, useMemo } from 'react';

export function useChartSearchSort(
	dataSeries,
	showSearch,
	showFilter
) {
	const [search, setSearch] = useState('');
	const [sort, setSort] = useState('alpha');

	const filteredDataSeries = useMemo(() => {
		let items = [...dataSeries];
		if (showSearch && search) {
			items = items.filter((ds) =>
				ds.label
					.toLowerCase()
					.includes(search.toLowerCase())
			);
		}
		if (sort === 'alpha') {
			items.sort((a, b) => a.label.localeCompare(b.label));
		} else if (sort === 'value') {
			items.sort(
				(a, b) =>
					(b.data?.[0]?.value ?? 0) -
					(a.data?.[0]?.value ?? 0)
			);
		}
		return items;
	}, [dataSeries, search, sort, showSearch, showFilter]);

	return {
		search,
		setSearch,
		sort,
		setSort,
		filteredDataSeries,
	};
}

export function useChartSelection(filteredDataSeries) {
	const [selectedSeries, setSelectedSeries] = useState(
		filteredDataSeries && filteredDataSeries.length > 0 ?
			filteredDataSeries[0].id
		:	null
	);
	const handleSelectSeries = (id) => setSelectedSeries(id);
	return { selectedSeries, handleSelectSeries };
}
