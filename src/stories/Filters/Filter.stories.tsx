import Filters from '../../components/Filters/Filter';
import React from 'react';

export default {
	title: 'Filters/Filters',
	component: Filters,
};

export const TopFilters = () => (
	<Filters
		filters={[
			{
				key: 'status',
				label: 'Status',
				options: [
					{ label: 'Active', value: 'active' },
					{ label: 'Inactive', value: 'inactive' },
					{ label: 'Pending', value: 'pending' },
				],
				mode: 'single',
			},
		]}
		value={{ status: 'active' }}
		onChange={() => {}}
	/>
);
