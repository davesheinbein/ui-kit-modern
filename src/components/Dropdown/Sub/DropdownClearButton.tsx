import React from 'react';
import { Icons } from '../../Icons';

const DropdownClearButton: React.FC<{
	onClick: () => void;
	disabled?: boolean;
}> = ({ onClick, disabled }) => (
	<button
		type='button'
		onClick={onClick}
		disabled={disabled}
		aria-label='Clear selection'
		style={{
			background: 'none',
			border: 'none',
			cursor: 'pointer',
			padding: 0,
		}}
	>
		<Icons name='close' size={18} />
	</button>
);

export default DropdownClearButton;
