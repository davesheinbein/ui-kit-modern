import React, { forwardRef } from 'react';
import { Wrapper } from '../Wrappers';
import {
	TEXTAREA_CONFIGURATIONS,
	ExtendedTextareaKind,
	TextareaConfiguration,
	TextareaFactoryProps,
} from './configurations';

export interface TextareaProps
	extends Partial<TextareaFactoryProps> {
	kind?: ExtendedTextareaKind;
	configuration?: Partial<TextareaConfiguration>;
}

const Textarea = forwardRef<
	HTMLTextAreaElement,
	TextareaProps
>(
	(
		{
			kind = 'standard',
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
			<Wrapper
				className={`textarea-container${className ? ' ' + className : ''}`}
			>
				{label && <label htmlFor={id}>{label}</label>}
				<textarea
					ref={ref}
					value={value}
					defaultValue={defaultValue}
					onChange={(e) => onChange?.(e.target.value)}
					rows={finalConfig.rows}
					placeholder={placeholder}
					disabled={disabled}
					required={required}
					maxLength={maxLength}
					name={name}
					id={id}
					className={finalConfig.customStyles?.textarea}
					{...props}
				/>
				{helpText && !error && (
					<Wrapper className='help-text'>
						{helpText}
					</Wrapper>
				)}
				{error && (
					<Wrapper className='error-text'>{error}</Wrapper>
				)}
			</Wrapper>
		);
	}
);

Textarea.displayName = 'Textarea';

export default Textarea;
