import React, { forwardRef } from 'react';
import InputField from './InputField';
import InputWrapper from './InputWrapper';
import { useInputHandlers } from './useInputHandlers';
import { useNormalizedInputProps } from './useNormalizedInputProps';
import type { InputProps } from './types';

const InputOrchestrator = forwardRef<
	HTMLInputElement,
	InputProps
>((props, ref) => {
	const normalizedProps = useNormalizedInputProps(props);
	const {
		label,
		helperText,
		errorText,
		successText,
		required = false,
		containerClassName = '',
		labelClassName = '',
		helperClassName = '',
		iconClassName = '',
		prefix,
		suffix,
		icon,
		clearable = false,
		showPasswordToggle = false,
		state = 'default',
		size = 'medium',
		inputStyle,
		...rest
	} = normalizedProps;

	const {
		finalComponentId,
		inputValue,
		showPassword,
		handleChange,
		handleClear,
		handlePasswordToggle,
		handleFocus,
		handleBlur,
		inputType,
		kindClass,
		typeSpecificProps,
		wrapperClassNames,
	} = useInputHandlers(normalizedProps);

	return (
		<InputWrapper
			label={label}
			required={required}
			helpText={helperText}
			errorText={errorText}
			successText={successText}
			containerClassName={containerClassName}
			labelClassName={labelClassName}
			helperClassName={helperClassName}
			componentId={finalComponentId}
		>
			<div className={wrapperClassNames}>
				<InputField
					ref={ref}
					icon={icon}
					iconClassName={iconClassName}
					prefix={prefix}
					suffix={suffix}
					inputType={inputType || 'text'}
					finalInputValue={inputValue}
					kindClass={kindClass}
					typeSpecificProps={typeSpecificProps}
					placeholder={rest.placeholder}
					disabled={rest.disabled}
					required={required}
					autoComplete={rest.autoComplete}
					maxLength={rest.maxLength}
					minLength={rest.minLength}
					pattern={rest.pattern}
					handleChange={handleChange}
					handleFocus={handleFocus}
					handleBlur={handleBlur}
					inputStyle={inputStyle}
					state={state}
					size={size}
					className={rest.inputClassName}
					clearable={clearable}
					handleClear={handleClear}
					showPasswordToggle={
						showPasswordToggle && props.kind === 'password'
					}
					handlePasswordToggle={handlePasswordToggle}
					showPassword={showPassword}
					{...rest}
				/>
			</div>
		</InputWrapper>
	);
});

InputOrchestrator.displayName = 'InputOrchestrator';
export default InputOrchestrator;
