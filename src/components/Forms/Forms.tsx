import React, { forwardRef, useState } from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Forms.module.scss';
import {
	FORM_FIELD_CONFIGURATIONS,
	ExtendedFormsKind,
	FormsConfiguration,
} from './configurations';
import Input from '../Inputs/Input';
import Textarea from '../Textareas/Textarea';
import { Select } from '../Selects/Select';
import { Checkbox } from '../Checkbox/Checkbox';
import { Radio } from '../Radios/Radio';
import { Switch } from '../Switchs/Switch';
import { Range } from '../Ranges/Range';

export type FieldKind =
	| 'input'
	| 'textarea'
	| 'select'
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
	configuration?: FormsConfiguration;
	[key: string]: any;
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

const FormsBody = forwardRef<any, any>(
	(
		{ kind, configuration, value, onChange, ...props },
		ref
	) => {
		switch (kind) {
			case 'input':
			default:
				return (
					<Input
						ref={ref}
						value={value ?? ''}
						onChange={onChange}
						{...props}
						kind={configuration?.inputMode || 'text'}
					/>
				);
			case 'textarea':
				return (
					<Textarea
						ref={ref}
						value={value ?? ''}
						onChange={onChange}
						{...props}
					/>
				);
			case 'select':
				return (
					<Select
						ref={ref}
						value={value ?? ''}
						onChange={onChange}
						{...props}
						kind={configuration?.kind || 'dropdown'}
						options={
							props.options || configuration?.options || []
						}
					/>
				);
			case 'checkbox':
				return (
					<Checkbox
						ref={ref}
						checked={!!value}
						onChange={onChange}
						{...props}
						label={props.label || configuration?.label}
					/>
				);
			case 'radio':
				return (
					<Radio
						ref={ref}
						value={value ?? ''}
						onChange={onChange}
						{...props}
						options={
							props.options || configuration?.options || []
						}
						name={props.name}
						configuration={props.configuration}
					/>
				);
			case 'radio-group':
				return (
					<Radio
						ref={ref}
						value={value ?? ''}
						onChange={onChange}
						{...props}
						options={
							props.options || configuration?.options || []
						}
						name={props.name}
						configuration={props.configuration}
					/>
				);
			case 'switch':
				return (
					<Switch
						ref={ref}
						checked={!!value}
						onChange={onChange}
						{...props}
						label={props.label || configuration?.label}
					/>
				);
			case 'range':
				return (
					<Range
						ref={ref}
						value={value ?? 0}
						onChange={onChange}
						{...props}
						min={props.min ?? configuration?.min ?? 0}
						max={props.max ?? configuration?.max ?? 100}
						step={props.step ?? configuration?.step ?? 1}
					/>
				);
		}
	}
);
FormsBody.displayName = 'FormsBody';

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
		const [formValues, setFormValues] =
			useState<Record<string, any>>(values);

		const handleFieldChange = (
			name: string,
			value: any
		) => {
			const updated = { ...formValues, [name]: value };
			setFormValues(updated);
			onChange?.(updated);
		};

		const handleSubmit = (e: React.FormEvent) => {
			e.preventDefault();
			onSubmit?.(formValues);
		};

		return (
			<form
				ref={ref}
				className={className}
				onSubmit={handleSubmit}
				style={{ width: fullWidth ? '100%' : undefined }}
			>
				{fields.map((field) => (
					<div
						key={field.name}
						className={styles.fieldWrapper}
					>
						{field.label && (
							<label
								className={styles.label}
								htmlFor={field.name}
							>
								{field.label}
								{field.required && (
									<span className={styles.required}>*</span>
								)}
							</label>
						)}
						<div className={styles.fieldContainer}>
							<FormsBody
								{...field}
								value={formValues[field.name] ?? ''}
								onChange={(val: any) =>
									handleFieldChange(field.name, val)
								}
							/>
						</div>
						{field.error && (
							<span className={styles.errorText}>
								{field.error}
							</span>
						)}
						{field.helperText && !field.error && (
							<span className={styles.helperText}>
								{field.helperText}
							</span>
						)}
					</div>
				))}
				{error && (
					<div className={styles.errorText}>{error}</div>
				)}
				{helperText && !error && (
					<div className={styles.helperText}>
						{helperText}
					</div>
				)}
				<button type='submit'>Submit</button>
			</form>
		);
	}
);
Forms.displayName = 'Forms';

export default Forms;
export { Forms, FormsBody };
