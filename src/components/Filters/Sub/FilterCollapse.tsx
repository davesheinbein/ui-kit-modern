import React from 'react';

interface FilterCollapseProps {
	collapsed: boolean;
	onToggle: () => void;
	children: React.ReactNode;
}

const FilterCollapse: React.FC<FilterCollapseProps> = ({
	collapsed,
	onToggle,
	children,
}) => {
	return (
		<div
			className={`filter-collapse${collapsed ? ' collapsed' : ''}`}
		>
			<button onClick={onToggle}>
				{collapsed ? 'Expand' : 'Collapse'}
			</button>
			{!collapsed && (
				<div className='filter-collapse-content'>
					{children}
				</div>
			)}
		</div>
	);
};

export default FilterCollapse;
