import React from 'react';
import './FlipSwitch.scss';

type FlipSwitchProps = {
	id?: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
};

export const FlipSwitch: React.FC<FlipSwitchProps> = ({
	id = 'flip-switch',
	checked = false,
	onChange,
}) => {
	return (
		<label className='switch'>
			<input
				id={id}
				className='cb'
				type='checkbox'
				checked={checked}
				onChange={(e) => onChange?.(e.target.checked)}
			/>
			<span className='toggle'>
				<span className='left'>off</span>
				<span className='right'>on</span>
			</span>
		</label>
	);
};

export default FlipSwitch;
