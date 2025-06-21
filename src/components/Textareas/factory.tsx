import React, { forwardRef } from 'react';
import {
	TEXTAREA_CONFIGURATIONS,
	ExtendedTextareaKind,
	TextareaConfiguration,
	TextareaFactoryProps,
} from './configurations';

// Create a simple UnifiedTextarea component
const UnifiedTextarea = forwardRef<
	HTMLTextAreaElement,
	any
>(({ configuration, value, onChange, ...props }, ref) => {
	return (
		<div className='textarea-container'>
			{props.label && <label>{props.label}</label>}
			<textarea
				ref={ref}
				value={value}
				onChange={(e) => onChange?.(e.target.value)}
				rows={configuration.rows}
				{...props}
			/>
			{props.helpText && (
				<div className='help-text'>{props.helpText}</div>
			)}
			{props.error && (
				<div className='error-text'>{props.error}</div>
			)}
		</div>
	);
});

export const TextareaFactory = forwardRef<
	HTMLTextAreaElement,
	TextareaFactoryProps
>(
	(
		{
			kind,
			value,
			defaultValue,
			onChange,
			label,
			placeholder,
			helpText,
			error,
			className,
			disabled,
			required,
			maxLength,
			name,
			id,
			configuration,
			...props
		},
		ref
	) => {
		const baseConfig =
			TEXTAREA_CONFIGURATIONS[kind] ||
			TEXTAREA_CONFIGURATIONS.standard;
		const finalConfig: TextareaConfiguration = {
			...baseConfig,
			...configuration,
		};

		return (
			<UnifiedTextarea
				ref={ref}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				label={label}
				placeholder={placeholder}
				helpText={helpText}
				error={error}
				className={className}
				disabled={disabled}
				required={required}
				maxLength={maxLength}
				name={name}
				id={id}
				configuration={finalConfig}
				{...props}
			/>
		);
	}
);

TextareaFactory.displayName = 'TextareaFactory';

export default TextareaFactory;

export type {
	TextareaFactoryProps,
	ExtendedTextareaKind as TextareaKind,
	TextareaConfiguration,
} from './configurations';
