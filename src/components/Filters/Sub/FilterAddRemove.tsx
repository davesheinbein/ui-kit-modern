import React from 'react';

interface FilterAddRemoveProps {
	onAdd: () => void;
	onRemove: (key: string) => void;
	filterKeys: string[];
}

const FilterAddRemove: React.FC<FilterAddRemoveProps> = ({
	onAdd,
	onRemove,
	filterKeys,
}) => {
	return (
		<div className='filter-add-remove'>
			<button onClick={onAdd}>Add Filter</button>
			{filterKeys.map((key) => (
				<button key={key} onClick={() => onRemove(key)}>
					Remove {key}
				</button>
			))}
		</div>
	);
};

export default FilterAddRemove;
