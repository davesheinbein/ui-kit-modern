import React, { useState } from 'react';
import { Input, InputProps } from '../../components/Inputs';
import {
	Radio,
	RadioProps,
} from '../../components/Radios/Radio';
import { Switch } from '../../components/Switchs';
import type { SwitchProps } from '../../components/Switchs/configurations';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import type { DropdownProps } from '../../components/Dropdown/Dropdown';
import { Textarea } from '../../components/Textareas';
import type { TextareaProps } from '../../components/Textareas/configurations';
import {
	Checkbox,
	CheckboxProps,
} from '../../components/Checkbox';

/**
 * StatefulInput
 * A helper for Storybook that manages its own value state.
 */
export const StatefulInput: React.FC<InputProps> = ({
	value: _value,
	onChange,
	...props
}) => {
	const [value, setValue] = useState(_value ?? '');
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setValue(e.target.value);
		onChange?.(e);
	};
	return (
		<Input
			{...props}
			value={value}
			onChange={handleChange}
		/>
	);
};

/**
 * StatefulRadio
 * A helper for Storybook that manages its own value state.
 */
export const StatefulRadio: React.FC<RadioProps> = ({
	value: _value,
	onChange,
	...props
}) => {
	const [value, setValue] = useState(_value ?? '');
	const handleChange = (val: string) => {
		setValue(val);
		onChange?.(val);
	};
	return (
		<Radio
			{...props}
			value={value}
			onChange={handleChange}
		/>
	);
};

/**
 * StatefulSwitch
 * A helper for Storybook that manages its own checked state.
 */
export const StatefulSwitch: React.FC<SwitchProps> = ({
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
		<Switch
			{...props}
			checked={checked}
			onChange={handleChange}
		/>
	);
};

/**
 * StatefulDropdown
 * A helper for Storybook that manages its own value state for Dropdown.
 */
export const StatefulDropdown: React.FC<DropdownProps> = ({
	value: _value,
	onChange,
	...props
}) => {
	const [value, setValue] = useState(
		_value ?? (props.variant === 'multiDropdown' ? [] : '')
	);
	const handleChange = (val: any) => {
		setValue(val);
		onChange?.(val);
	};
	return (
		<Dropdown
			{...props}
			value={value}
			onChange={handleChange}
		/>
	);
};

/**
 * StatefulTextarea
 * A helper for Storybook that manages its own value state.
 */
export const StatefulTextarea: React.FC<TextareaProps> = ({
	value: _value,
	onChange,
	...props
}) => {
	const [value, setValue] = useState(_value ?? '');
	const handleChange = (val: string) => {
		setValue(val);
		onChange?.(val);
	};
	return (
		<Textarea
			{...props}
			value={value}
			onChange={handleChange}
		/>
	);
};

/**
 * StatefulToggle
 * Generic boolean state helper for open/close, show/hide, etc.
 */
export const StatefulToggle: React.FC<{
	initial?: boolean;
	children: (
		open: boolean,
		setOpen: (v: boolean) => void
	) => React.ReactNode;
}> = ({ initial = false, children }) => {
	const [open, setOpen] = useState(initial);
	return <>{children(open, setOpen)}</>;
};

/**
 * StatefulNumber
 * Generic number state helper for demo controls.
 */
export const StatefulNumber: React.FC<{
	initial?: number;
	children: (
		value: number,
		setValue: (v: number) => void
	) => React.ReactNode;
}> = ({ initial = 0, children }) => {
	const [value, setValue] = useState(initial);
	return <>{children(value, setValue)}</>;
};

/**
 * StatefulObject
 * Generic object state helper for demo controls.
 */
export const StatefulObject: React.FC<{
	initial: any;
	children: (
		value: any,
		setValue: (v: any) => void
	) => React.ReactNode;
}> = ({ initial, children }) => {
	const [value, setValue] = useState(initial);
	return <>{children(value, setValue)}</>;
};

/**
 * StatefulCheckbox
 * A helper for Storybook that manages its own checked state for Checkbox, Toggle, and Dark Mode Toggle.
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
