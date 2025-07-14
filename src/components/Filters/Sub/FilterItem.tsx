import React from 'react';
import type { FilterConfig } from '../configurations';

interface FilterItemProps {
	filter: FilterConfig;
	value: string | string[];
	onChange: (val: string | string[]) => void;
}

const FilterItem: React.FC<FilterItemProps> = ({
	filter,
	value,
	onChange,
}) => {
	// TODO: Render filter input based on filter.mode/options
	// This is a stub; implement select/input logic as needed
	return (
		<div className='filter-item'>
			<label>{filter.label}</label>
			{/* Render select/input based on filter.mode/options */}
		</div>
	);
};

export default FilterItem;
