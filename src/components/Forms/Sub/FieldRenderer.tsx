import React from 'react';
import Input from '../../Inputs/Input';
import Textarea from '../../Textareas/Textarea';
import { Dropdown } from '../../Dropdown/Dropdown';
import { Checkbox } from '../../Checkbox/Checkbox';
import { Radio } from '../../Radios/Radio';
import { Switch } from '../../Switchs/Switch';
import { Range } from '../../Ranges/Range';
import type { FormsFieldConfig } from './types';

interface FieldRendererProps {
	field: FormsFieldConfig;
	value: any;
	onFieldChange: (name: string, value: any) => void;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({
	field,
	value,
	onFieldChange,
}) => {
	const { kind, name, options, ...fieldProps } = field;

	switch (kind) {
		case 'input':
			return (
				<Input
					{...fieldProps}
					kind='text'
					name={name}
					value={value}
					onChange={(
						e: React.ChangeEvent<HTMLInputElement>
					) => onFieldChange(name, e.target.value)}
				/>
			);
		case 'textarea':
			return (
				<Textarea
					{...fieldProps}
					kind='standard'
					name={name}
					value={value}
					onChange={(e: any) => {
						if (typeof e === 'string')
							onFieldChange(name, e);
						else if (e && e.target)
							onFieldChange(name, e.target.value);
					}}
				/>
			);
		case 'dropdown':
			return (
				<Dropdown
					{...fieldProps}
					name={name}
					options={options}
					value={value}
					onChange={(val: any) => onFieldChange(name, val)}
				/>
			);
		case 'checkbox':
			return (
				<Checkbox
					{...fieldProps}
					kind='checkbox'
					name={name}
					checked={!!value}
					onChange={(
						e: React.ChangeEvent<HTMLInputElement>
					) => onFieldChange(name, e.target.checked)}
				/>
			);
		case 'radio':
		case 'radio-group':
			return (
				<Radio
					{...fieldProps}
					kind='standard'
					name={name}
					options={options as any[]}
					onChange={(val: any) => onFieldChange(name, val)}
				/>
			);
		case 'switch':
			return (
				<Switch
					{...fieldProps}
					kind='toggle'
					name={name}
					checked={!!value}
					onChange={(val: any) => onFieldChange(name, val)}
				/>
			);
		case 'range':
			return (
				<Range
					{...fieldProps}
					kind='range'
					name={name}
					value={value}
					onChange={(val: any) => onFieldChange(name, val)}
				/>
			);
		default:
			return null;
	}
};

export default FieldRenderer;
