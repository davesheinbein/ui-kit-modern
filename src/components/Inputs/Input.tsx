/**
 * Input - Ultra-DRY, prop-driven input component for all input types
 *
 * Usage:
 *   <Input kind="text" label="Username" />
 *   <Input kind="password" label="Password" showPasswordToggle />
 *   <Input kind="email" label="Email" required />
 *   <Input kind="number" label="Age" min={0} max={120} />
 *   <Input kind="search" label="Search" clearable />
 *   <Input kind="custom" label="Custom" icon={<Icon />} />
 *
 * All configuration is via props. No factories, helpers, or presets required.
 */
import React, { forwardRef } from 'react';
import {
	useAppDispatch,
	useAppSelector,
} from '../../store/hooks';
import {
	selectInputValue,
	selectInputState,
	selectShowPassword,
} from '../../store/slices/inputSlice';
import type {
	InputKind,
	InputStyle,
	InputSize,
	InputConfiguration,
} from './configurations';
import styles from './Input.module.scss';

export interface InputProps
	extends Partial<
			Omit<InputConfiguration, 'autoComplete' | 'style'>
		>,
		Omit<
			React.InputHTMLAttributes<HTMLInputElement>,
			'size' | 'prefix' | 'style'
		> {
	kind: InputKind;
	componentId?: string;
	style?: InputStyle;
	onValueChange?: (value: string) => void;
	containerClassName?: string;
	labelClassName?: string;
	inputClassName?: string;
	helperClassName?: string;
	iconClassName?: string;
	debounced?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	(props, ref) => {
		const {
			kind,
			componentId,
			variant,
			size = 'medium',
			state = 'default',
			style: inputStyle = 'outlined',
			placeholder,
			label,
			helperText,
			errorText,
			successText,
			required = false,
			disabled = false,
			autoComplete,
			maxLength,
			minLength,
			pattern,
			customValidation,
			icon,
			prefix,
			suffix,
			clearable = false,
			showPasswordToggle = false,
			debounceMs = 0,
			debounced = false,
			onValueChange,
			containerClassName = '',
			labelClassName = '',
			inputClassName = '',
			helperClassName = '',
			iconClassName = '',
			className = '',
			value: controlledValue,
			defaultValue,
			onChange,
			...rest
		} = props;

		// DRY: All state/logic is handled here, no factories/helpers
		const finalComponentId =
			componentId || `input-${kind}-${React.useId()}`;
		const dispatch = useAppDispatch();
		const inputValue = useAppSelector((state) =>
			selectInputValue(state, finalComponentId)
		);
		const currentState = useAppSelector((state) =>
			selectInputState(state, finalComponentId)
		);
		const showPassword = useAppSelector((state) =>
			selectShowPassword(state, finalComponentId)
		);

		const isControlled = controlledValue !== undefined;
		const finalInputValue =
			isControlled ? controlledValue : inputValue;

		const handleChange = (
			event: React.ChangeEvent<HTMLInputElement>
		) => {
			const newValue = event.target.value;
			if (!isControlled) {
				dispatch(
					setValue({
						componentId: finalComponentId,
						value: newValue,
					})
				);
			}
			if (onChange) {
				onChange(event);
			}
			if (onValueChange) {
				if (debounceMs > 0 && debounced) {
					// Debounce logic (user should implement debounce util or use lodash.debounce)
					onValueChange(newValue); // Replace with debounced version if needed
				} else {
					onValueChange(newValue);
				}
			}
			if (customValidation) {
				const validationResult = customValidation(newValue);
				if (typeof validationResult === 'string') {
					// Set error text in Redux or local state
				} else if (validationResult === false) {
					// Set error state
				} else {
					// Valid
				}
			}
		};

		const handleClear = () => {
			const newValue = '';
			if (!isControlled) {
				dispatch(
					setValue({
						componentId: finalComponentId,
						value: newValue,
					})
				);
			}
			if (onValueChange) {
				onValueChange(newValue);
			}
		};

		const handlePasswordToggle = () => {
			dispatch(
				togglePasswordVisibility({
					componentId: finalComponentId,
				})
			);
		};

		const handleFocus = (
			event: React.FocusEvent<HTMLInputElement>
		) => {
			dispatch(
				setFocused({
					componentId: finalComponentId,
					isFocused: true,
				})
			);
			props.onFocus?.(event);
		};

		const handleBlur = (
			event: React.FocusEvent<HTMLInputElement>
		) => {
			dispatch(
				setFocused({
					componentId: finalComponentId,
					isFocused: false,
				})
			);
			props.onBlur?.(event);
		};

		const inputType =
			variant === 'password' && showPassword ?
				'text'
			:	variant;

		return (
			<div
				className={`${styles.inputContainer} ${containerClassName}`}
			>
				{label && (
					<label
						className={`${styles.label} ${labelClassName}`}
					>
						{label}
						{required && (
							<span className={styles.label__required}>
								*
							</span>
						)}
					</label>
				)}
				<div
					className={`${styles.inputWrapper} ${styles[`size-${size}`]} ${styles[`style-${inputStyle}`]} ${styles[`state-${state}`]} ${className}`}
				>
					{icon && (
						<span
							className={`${styles.icon} ${iconClassName}`}
						>
							{icon}
						</span>
					)}
					{prefix && (
						<span className={styles.prefix}>{prefix}</span>
					)}
					<input
						ref={ref}
						type={inputType}
						className={`${styles.input} ${inputClassName}`}
						placeholder={placeholder}
						value={finalInputValue}
						defaultValue={defaultValue}
						required={required}
						disabled={disabled}
						maxLength={maxLength}
						minLength={minLength}
						pattern={pattern}
						autoComplete={autoComplete}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						{...rest}
					/>
					{suffix && (
						<span className={styles.suffix}>{suffix}</span>
					)}
					{clearable && (
						<button
							type='button'
							className={styles.clearButton}
							aria-label='Clear input'
						>
							&times;
						</button>
					)}
					{showPasswordToggle && kind === 'password' && (
						<button
							type='button'
							className={styles.passwordToggle}
							aria-label='Toggle password visibility'
						>
							👁️
						</button>
					)}
				</div>
				{helperText && (
					<div
						className={`${styles.helperText} ${helperClassName}`}
					>
						{helperText}
					</div>
				)}
				{errorText && (
					<div className={styles.stateError}>
						{errorText}
					</div>
				)}
				{successText && (
					<div className={styles.stateSuccess}>
						{successText}
					</div>
				)}
			</div>
		);
	}
);

Input.displayName = 'Input';

export { Input };
export default Input;
