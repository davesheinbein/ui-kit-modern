import React, { forwardRef } from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Forms.module.scss';
import {
	FORM_FIELD_CONFIGURATIONS,
	ExtendedFormsKind,
	FormsConfiguration,
} from './configurations';

// DRY FieldKind type
export type FieldKind =
	| 'input'
	| 'textarea'
	| 'select'
	| 'checkbox'
	| 'radio'
	| 'radio-group'
	| 'switch'
	| 'range';

export interface FormsProps {
	kind: FieldKind;
	label?: string;
	error?: string;
	helperText?: string;
	fullWidth?: boolean;
	className?: string;
	value?: any;
	onChange?: (value: any, event?: any) => void;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	configuration?: FormsConfiguration;
	[key: string]: any;
}

const FormsBodyFactory = forwardRef<
	any,
	{
		kind: FieldKind;
		configuration?: FormsConfiguration;
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
					<Wrapper className='checkboxContainer'>
						<input
							{...baseProps}
							type='checkbox'
							checked={value || false}
							value={undefined}
						/>
						{configuration?.label && (
							<label>{configuration.label}</label>
						)}
					</Wrapper>
				);

			case 'radio':
				const radioOptions = configuration?.options || [];
				return (
					<Wrapper className='radioContainer'>
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
					</Wrapper>
				);

			case 'radio-group':
				const groupOptions = configuration?.options || [];
				return (
					<Wrapper className='radioGroup'>
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
					</Wrapper>
				);

			case 'switch':
				return (
					<Wrapper className='switchContainer'>
						<input
							{...baseProps}
							type='checkbox'
							checked={value || false}
							value={undefined}
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
					</Wrapper>
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

FormsBodyFactory.displayName = 'FormsBodyFactory';

/**
 * Forms - DRY, configuration-based form field component
 * Combines Forms (layout) and FormsBodyFactory (input rendering)
 */
const Forms = forwardRef<any, FormsProps>(
	(
		{
			kind,
			label,
			error,
			helperText,
			fullWidth,
			className,
			configuration,
			...props
		},
		ref
	) => {
		// Get default configuration if not provided
		const config =
			configuration ||
			FORM_FIELD_CONFIGURATIONS[
				'text' as ExtendedFormsKind
			];

		const fieldWrapperClass = [
			styles.fieldWrapper,
			fullWidth && styles.fullWidth,
			error && styles.hasError,
			className,
		]
			.filter(Boolean)
			.join(' ');

		return (
			<Wrapper ref={ref} className={fieldWrapperClass}>
				{label && (
					<label className={styles.label}>
						{label}
						{props.required && (
							<span className={styles.required}>*</span>
						)}
					</label>
				)}
				<Wrapper className={styles.fieldContainer}>
					<FormsBodyFactory
						ref={ref}
						kind={kind}
						configuration={config}
						{...props}
					/>
				</Wrapper>
				{error && (
					<span className={styles.errorText}>{error}</span>
				)}
				{helperText && !error && (
					<span className={styles.helperText}>
						{helperText}
					</span>
				)}
			</Wrapper>
		);
	}
);

Forms.displayName = 'Forms';

export default Forms;
export { Forms, FormsBodyFactory };
