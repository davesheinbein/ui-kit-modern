import React, { useState } from 'react';
import {
	Checkbox,
	CheckboxProps,
} from '../../components/Checkbox';

/**
 * StatefulCheckbox
 * A helper component for Storybook and demos that manages its own checked state.
 * For use in interactive stories where you want to see the ripple and checked state change.
 */
export const StatefulCheckbox: React.FC<CheckboxProps> = ({
	checked: _checked,
	onChange,
	...props
}) => {
	const [checked, setChecked] = useState(_checked ?? false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setChecked(e.target.checked);
		onChange?.(e);
	};

	return (
		<Checkbox
			{...props}
			checked={checked}
			onChange={handleChange}
		/>
	);
};
