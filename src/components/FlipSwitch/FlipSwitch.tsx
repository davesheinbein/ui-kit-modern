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
		<label className='flip-switch'>
			<input
				id={id}
				className='flip-switch__input'
				type='checkbox'
				checked={checked}
				onChange={(e) => onChange?.(e.target.checked)}
			/>
			<span className='flip-switch__toggle'>
				<span className='flip-switch__left'>off</span>
				<span className='flip-switch__right'>on</span>
			</span>
		</label>
	);
};

export default FlipSwitch;
