import React, { forwardRef, useState } from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Forms.module.scss';
import Input from '../Inputs/Input';
import Textarea from '../Textareas/Textarea';
import { Dropdown } from '../Dropdown/Dropdown';
import { Checkbox } from '../Checkbox/Checkbox';
import { Radio } from '../Radios/Radio';
import { Switch } from '../Switchs/Switch';
import { Range } from '../Ranges/Range';

export type FieldKind =
	| 'input'
	| 'textarea'
	| 'dropdown'
	| 'checkbox'
	| 'radio'
	| 'radio-group'
	| 'switch'
	| 'range';

export interface FormsFieldConfig {
	kind: FieldKind;
	name: string;
	label?: string;
	helperText?: string;
	error?: string;
	placeholder?: string;
	options?: any[];
	min?: number;
	max?: number;
	step?: number;
	required?: boolean;
	configuration?: Record<string, any>;
	[key: string]: any; // Allow all other props to be passed through
}

export interface FormsProps {
	fields: FormsFieldConfig[];
	values?: Record<string, any>;
	onChange?: (values: Record<string, any>) => void;
	onSubmit?: (values: Record<string, any>) => void;
	error?: string;
	helperText?: string;
	fullWidth?: boolean;
	className?: string;
}

const Forms = forwardRef<any, FormsProps>(
	(
		{
			fields,
			values = {},
			onChange,
			onSubmit,
			error,
			helperText,
			fullWidth,
			className,
			...props
		},
		ref
	) => {
		const handleFieldChange = (
			name: string,
			value: any
		) => {
			const newValues = { ...values, [name]: value };
			onChange?.(newValues);
		};

		return (
			<form ref={ref} className={className} {...props}>
				{fields.map((field) => {
					const { kind, name, options, ...fieldProps } =
						field;
					const commonProps = {
						...fieldProps,
						name,
						value: values[name],
						onChange: (e: any) => {
							const val = e?.target ? e.target.value : e;
							handleFieldChange(name, val);
						},
					};

					// Map generic kind to component-specific kind
					if (kind === 'input') {
						return (
							<Input
								key={name}
								kind='text'
								{...commonProps}
							/>
						);
					}
					if (kind === 'textarea') {
						return (
							<Textarea
								key={name}
								kind='standard'
								{...commonProps}
							/>
						);
					}
					if (kind === 'dropdown') {
						return (
							<Dropdown
								key={name}
								options={options}
								{...commonProps}
							/>
						);
					}
					if (kind === 'checkbox') {
						return (
							<Checkbox
								key={name}
								kind='checkbox'
								{...commonProps}
							/>
						);
					}
					if (kind === 'radio' || kind === 'radio-group') {
						return (
							<Radio
								key={name}
								kind='standard'
								options={options as any[]}
								{...commonProps}
							/>
						);
					}
					if (kind === 'switch') {
						return (
							<Switch
								key={name}
								kind='toggle'
								{...commonProps}
							/>
						);
					}
					if (kind === 'range') {
						return (
							<Range
								key={name}
								kind='range'
								{...commonProps}
							/>
						);
					}
					return null;
				})}
				{error && (
					<div className={styles.errorText}>{error}</div>
				)}
				{helperText && (
					<div className={styles.helperText}>
						{helperText}
					</div>
				)}
			</form>
		);
	}
);
Forms.displayName = 'Forms';

export default Forms;
export { Forms };
