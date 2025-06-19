import React, { forwardRef } from 'react';
import FormField from './FormField';
import {
	FORM_FIELD_CONFIGURATIONS,
	ExtendedFormFieldKind,
	FormFieldConfiguration,
} from './FormFieldConfigurations';
import { FieldKind } from './UnifiedFormField';

export interface FormFieldBodyFactoryProps {
	kind: FieldKind;
	configuration?: FormFieldConfiguration;
	value?: any;
	onChange?: (value: any, event?: any) => void;
	onBlur?: (event: any) => void;
	onFocus?: (event: any) => void;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	className?: string;
	[key: string]: any;
}

/**
 * FormFieldBodyFactory - Creates the actual input element based on field kind
 * This is the DRY equivalent of the individual form field components
 */
const FormFieldBodyFactory = forwardRef<
	any,
	FormFieldBodyFactoryProps
>(
	(
		{
			kind,
			configuration,
			value,
			onChange,
			onBlur,
			onFocus,
			placeholder,
			disabled = false,
			required = false,
			className = '',
			...props
		},
		ref
	) => {
		const handleChange = (event: any) => {
			const target = event.target;
			let newValue;

			switch (kind) {
				case 'checkbox':
				case 'switch':
					newValue = target.checked;
					break;
				case 'range':
					newValue = parseInt(target.value, 10);
					break;
				case 'select':
					newValue = target.value;
					break;
				default:
					newValue = target.value;
			}

			onChange?.(newValue, event);
		};

		const baseProps = {
			ref,
			value: value ?? '',
			onChange: handleChange,
			onBlur,
			onFocus,
			placeholder,
			disabled,
			required,
			className,
			...props,
		};

		switch (kind) {
			case 'input':
			default:
				return (
					<input
						{...baseProps}
						type={configuration?.inputMode || 'text'}
					/>
				);

			case 'textarea':
				return (
					<textarea
						{...baseProps}
						rows={configuration?.minRows || 3}
					/>
				);

			case 'select':
				const options = configuration?.options || [];
				return (
					<select {...baseProps}>
						{placeholder && (
							<option value='' disabled>
								{placeholder}
							</option>
						)}
						{options.map((option: any) => (
							<option
								key={option.value}
								value={option.value}
								disabled={option.disabled}
							>
								{option.label}
							</option>
						))}
					</select>
				);

			case 'checkbox':
				return (
					<div className='checkboxContainer'>
						<input
							{...baseProps}
							type='checkbox'
							checked={value || false}
							value={undefined} // Checkboxes don't use value prop
						/>
						{configuration?.label && (
							<label>{configuration.label}</label>
						)}
					</div>
				);

			case 'radio':
				const radioOptions = configuration?.options || [];
				return (
					<div className='radioContainer'>
						{radioOptions.map((option: any) => (
							<label
								key={option.value}
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '8px',
								}}
							>
								<input
									type='radio'
									name={props.name}
									value={option.value}
									checked={value === option.value}
									onChange={handleChange}
									disabled={disabled || option.disabled}
								/>
								{option.label}
							</label>
						))}
					</div>
				);

			case 'radio-group':
				const groupOptions = configuration?.options || [];
				return (
					<div className='radioGroup'>
						{groupOptions.map((option: any) => (
							<label
								key={option.value}
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '8px',
								}}
							>
								<input
									type='radio'
									name={props.name || 'radio-group'}
									value={option.value}
									checked={value === option.value}
									onChange={handleChange}
									disabled={disabled || option.disabled}
								/>
								{option.label}
							</label>
						))}
					</div>
				);

			case 'switch':
				return (
					<div className='switchContainer'>
						<input
							{...baseProps}
							type='checkbox'
							checked={value || false}
							value={undefined} // Switches don't use value prop
							style={{
								appearance: 'none',
								width: '44px',
								height: '24px',
								backgroundColor:
									value ? '#2563eb' : '#d1d5db',
								borderRadius: '12px',
								position: 'relative',
								cursor: 'pointer',
								transition: 'background-color 0.2s',
							}}
						/>
						{configuration?.label && (
							<label>{configuration.label}</label>
						)}
					</div>
				);

			case 'range':
				return (
					<input
						{...baseProps}
						type='range'
						min={configuration?.min || 0}
						max={configuration?.max || 100}
						step={configuration?.step || 1}
						value={value || 0}
					/>
				);
		}
	}
);

FormFieldBodyFactory.displayName = 'FormFieldBodyFactory';

export default FormFieldBodyFactory;
