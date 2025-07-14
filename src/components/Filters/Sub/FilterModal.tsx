import React from 'react';

interface FilterModalProps {
	open: boolean;
	onToggle: (open: boolean) => void;
	children: React.ReactNode;
}

const FilterModal: React.FC<FilterModalProps> = ({
	open,
	onToggle,
	children,
}) => {
	if (!open) return null;
	return (
		<div className='filter-modal'>
			<button onClick={() => onToggle(false)}>Close</button>
			<div className='filter-modal-content'>{children}</div>
		</div>
	);
};

export default FilterModal;
