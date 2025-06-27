import React, { useState } from 'react';
import { Input, InputProps } from '../components/Inputs';
import {
	Radio,
	RadioProps,
} from '../components/Radios/Radio';
import { Switch } from '../components/Switchs';
import type { SwitchProps } from '../components/Switchs/configurations';
import { Select } from '../components/Selects/Select';
import type { SelectProps } from '../components/Selects/Select';
import Textarea from '../components/Textareas/Textarea';
import type { TextareaProps } from '../components/Textareas/Textarea';

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
		onChange?.(e.target.checked);
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
 * StatefulSelect
 * A helper for Storybook that manages its own value state.
 */
export const StatefulSelect: React.FC<SelectProps> = ({
	value: _value,
	onChange,
	...props
}) => {
	const [value, setValue] = useState(_value ?? '');
	const handleChange = (val: string | string[]) => {
		setValue(val);
		onChange?.(val);
	};
	return (
		<Select
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
	kind = 'standard',
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
			kind={kind}
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
