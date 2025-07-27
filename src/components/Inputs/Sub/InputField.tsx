import React, { forwardRef } from 'react';
import InputIcon from './InputIcon';
import InputClearButton from './InputClearButton';
import InputPasswordToggle from './InputPasswordToggle';
import InputPrefix from './InputPrefix';
import InputSuffix from './InputSuffix';
import styles from '../input.module.scss';
import type { InputProps } from './types';

interface InputFieldProps extends Omit<InputProps, 'ref'> {
	inputType: string;
	finalInputValue: string | number | undefined;
	kindClass: string;
	typeSpecificProps: Record<string, any>;
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
	handleFocus: React.FocusEventHandler<HTMLInputElement>;
	handleBlur: React.FocusEventHandler<HTMLInputElement>;
	handleClear?: () => void;
	handlePasswordToggle?: () => void;
	showPassword?: boolean;
}

const InputField = forwardRef<
	HTMLInputElement,
	InputFieldProps
>(
	(
		{
			icon,
			iconClassName = '',
			prefix,
			suffix,
			inputType,
			finalInputValue,
			kindClass,
			typeSpecificProps,
			placeholder,
			disabled,
			required,
			autoComplete,
			maxLength,
			minLength,
			pattern,
			handleChange,
			handleFocus,
			handleBlur,
			inputStyle,
			state,
			size,
			className = '',
			clearable = false,
			handleClear,
			showPasswordToggle = false,
			handlePasswordToggle,
			showPassword,
			...rest
		},
		ref
	) => {
		return (
			<>
				{icon && (
					<InputIcon
						icon={icon}
						className={iconClassName}
					/>
				)}
				<InputPrefix prefix={prefix} />
				<input
					ref={ref}
					className={`${styles.input} ${kindClass}`}
					type={inputType}
					value={finalInputValue}
					placeholder={placeholder}
					disabled={disabled}
					required={required}
					autoComplete={autoComplete}
					maxLength={maxLength}
					minLength={minLength}
					pattern={pattern}
					{...typeSpecificProps}
					{...rest}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				<InputSuffix suffix={suffix} />
				{clearable && handleClear && (
					<InputClearButton onClear={handleClear} />
				)}
				{showPasswordToggle && handlePasswordToggle && (
					<InputPasswordToggle
						visible={!!showPassword}
						onToggle={handlePasswordToggle}
					/>
				)}
			</>
		);
	}
);

InputField.displayName = 'InputField';

export default InputField;
