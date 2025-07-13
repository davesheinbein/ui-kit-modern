import React from 'react';
import { Checkbox } from '../../Checkbox/Checkbox';

interface FilterToggleProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
}

const FilterToggle: React.FC<FilterToggleProps> = ({
	checked,
	onChange,
}) => (
	<div
		style={{
			padding: '8px 16px',
			borderBottom: '1px solid #eee',
			background: '#f9fafb',
		}}
	>
		<label
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: 8,
			}}
		>
			<Checkbox
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
				style={{ marginRight: 8 }}
			/>
			<span>Enable Filter</span>
		</label>
	</div>
);

export default FilterToggle;
