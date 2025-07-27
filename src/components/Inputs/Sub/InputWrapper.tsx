import React from 'react';
import InputLabel from './InputLabel';
import InputHelperText from './InputHelperText';
import styles from '../Input.module.scss';

interface InputWrapperProps {
	children: React.ReactNode;
	label?: React.ReactNode;
	required?: boolean;
	helpText?: React.ReactNode;
	errorText?: React.ReactNode;
	successText?: React.ReactNode;
	containerClassName?: string;
	labelClassName?: string;
	helperClassName?: string;
	componentId?: string;
}

const InputWrapper: React.FC<InputWrapperProps> = ({
	children,
	label,
	required,
	helpText,
	errorText,
	successText,
	containerClassName = '',
	labelClassName = '',
	helperClassName = '',
	componentId,
}) => (
	<div
		className={`${styles.inputContainer} ${containerClassName}`}
	>
		{label && (
			<InputLabel
				label={label}
				required={required}
				htmlFor={componentId}
				className={labelClassName}
			/>
		)}
		{children}
		{helpText && (
			<InputHelperText
				helperText={helpText}
				className={helperClassName}
			/>
		)}
		{errorText && <InputHelperText errorText={errorText} />}
		{successText && (
			<InputHelperText successText={successText} />
		)}
	</div>
);

export default InputWrapper;
