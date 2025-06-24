import React, {
	forwardRef,
	useCallback,
	useEffect,
} from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Input.module.scss';
import {
	InputKind,
	InputStyle,
	InputConfiguration,
	INPUT_CONFIGURATIONS,
} from './configurations';
// Redux hooks and actions (assume these are available in store/hooks and store/slices)
import {
	useAppDispatch,
	useAppSelector,
} from '../../store/hooks';
import {
	selectInputValue,
	selectInputState,
	selectShowPassword,
	selectIsFocused,
	selectIsValid,
	selectInputErrorText,
	initializeComponentState,
	removeComponentState,
	setValue,
	setFocused,
	togglePasswordVisibility,
} from '../../store/slices/inputSlice';

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
	(
		{
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
			...props
		},
		ref
	) => {
		const finalComponentId =
			componentId || `input-${kind}-${Date.now()}`;
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
		const isFocused = useAppSelector((state) =>
			selectIsFocused(state, finalComponentId)
		);
		const isValid = useAppSelector((state) =>
			selectIsValid(state, finalComponentId)
		);
		const reduxErrorText = useAppSelector((state) =>
			selectInputErrorText(state, finalComponentId)
		);

		useEffect(() => {
			const initialValue = String(
				defaultValue || controlledValue || ''
			);
			dispatch(
				initializeComponentState({
					componentId: finalComponentId,
					initialState: {
						value: initialValue,
						state:
							state === 'disabled' ? 'error' : 'default',
					},
				})
			);
			return () => {
				dispatch(
					removeComponentState({
						componentId: finalComponentId,
					})
				);
			};
		}, [dispatch, finalComponentId, defaultValue, state]);

		useEffect(() => {
			if (controlledValue !== undefined) {
				dispatch(
					setValue({
						componentId: finalComponentId,
						value: String(controlledValue),
					})
				);
			}
		}, [controlledValue, dispatch, finalComponentId]);

		const config = INPUT_CONFIGURATIONS[kind] || {};
		const mergedConfig = {
			variant: variant || config.variant || 'text',
			size: size || config.size || 'medium',
			style: inputStyle || config.style || 'outlined',
			placeholder: placeholder || config.placeholder || '',
			label: label || config.label || '',
			helperText: helperText || config.helperText || '',
			errorText:
				errorText ||
				reduxErrorText ||
				config.errorText ||
				'',
			successText: successText || config.successText || '',
			required: required || config.required || false,
			disabled: disabled || config.disabled || false,
			autoComplete:
				autoComplete || config.autoComplete || '',
			maxLength: maxLength || config.maxLength,
			minLength: minLength || config.minLength,
			pattern: pattern || config.pattern || '',
			icon: icon || config.icon || '',
			prefix: prefix || config.prefix || '',
			suffix: suffix || config.suffix || '',
			clearable: clearable || config.clearable || false,
			showPasswordToggle:
				showPasswordToggle ||
				config.showPasswordToggle ||
				false,
			debounceMs: debounceMs || config.debounceMs || 0,
		};

		const isControlled = controlledValue !== undefined;
		const finalInputValue =
			isControlled ? controlledValue : inputValue;

		const handleChange = useCallback(
			(event: React.ChangeEvent<HTMLInputElement>) => {
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
					if (mergedConfig.debounceMs > 0 && debounced) {
						// Debounce logic (user should implement debounce util or use lodash.debounce)
						onValueChange(newValue); // Replace with debounced version if needed
					} else {
						onValueChange(newValue);
					}
				}
				if (customValidation) {
					const validationResult =
						customValidation(newValue);
					if (typeof validationResult === 'string') {
						// Set error text in Redux or local state
					} else if (validationResult === false) {
						// Set error state
					} else {
						// Valid
					}
				}
			},
			[
				isControlled,
				onChange,
				onValueChange,
				mergedConfig.debounceMs,
				debounced,
				customValidation,
				dispatch,
				finalComponentId,
			]
		);

		const handleClear = useCallback(() => {
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
		}, [
			isControlled,
			onValueChange,
			dispatch,
			finalComponentId,
		]);

		const handlePasswordToggle = useCallback(() => {
			dispatch(
				togglePasswordVisibility({
					componentId: finalComponentId,
				})
			);
		}, [dispatch, finalComponentId]);

		const handleFocus = useCallback(
			(event: React.FocusEvent<HTMLInputElement>) => {
				dispatch(
					setFocused({
						componentId: finalComponentId,
						isFocused: true,
					})
				);
				props.onFocus?.(event);
			},
			[dispatch, finalComponentId, props.onFocus]
		);

		const handleBlur = useCallback(
			(event: React.FocusEvent<HTMLInputElement>) => {
				dispatch(
					setFocused({
						componentId: finalComponentId,
						isFocused: false,
					})
				);
				props.onBlur?.(event);
			},
			[dispatch, finalComponentId, props.onBlur]
		);

		const inputType =
			mergedConfig.variant === 'password' && showPassword ?
				'text'
			:	mergedConfig.variant;

		const containerClasses = [
			styles.inputContainer,
			styles[`size-${mergedConfig.size}`],
			styles[`style-${mergedConfig.style}`],
			styles[`state-${currentState}`],
			mergedConfig.disabled && styles.disabled,
			containerClassName,
		]
			.filter(Boolean)
			.join(' ');

		const inputClasses = [
			styles.input,
			mergedConfig.icon && styles.hasIcon,
			mergedConfig.prefix && styles.hasPrefix,
			mergedConfig.suffix && styles.hasSuffix,
			inputClassName,
			className,
		]
			.filter(Boolean)
			.join(' ');

		const displayHelperText =
			(
				currentState === 'error' &&
				(reduxErrorText || mergedConfig.errorText)
			) ?
				reduxErrorText || mergedConfig.errorText
			: (
				currentState === 'success' &&
				mergedConfig.successText
			) ?
				mergedConfig.successText
			:	mergedConfig.helperText;

		return (
			<Wrapper className={containerClasses}>
				{mergedConfig.label && (
					<label
						className={`${styles.label} ${labelClassName}`}
					>
						{mergedConfig.label}
						{mergedConfig.required && (
							<span className={styles.required}>*</span>
						)}
					</label>
				)}
				<div className={styles.inputWrapper}>
					{mergedConfig.icon && (
						<span
							className={`${styles.icon} ${iconClassName}`}
						>
							{/* icon rendering logic */}
						</span>
					)}
					{mergedConfig.prefix && (
						<span className={styles.prefix}>
							{mergedConfig.prefix}
						</span>
					)}
					<input
						type={inputType}
						ref={ref}
						className={inputClasses}
						placeholder={mergedConfig.placeholder}
						disabled={mergedConfig.disabled}
						required={mergedConfig.required}
						maxLength={mergedConfig.maxLength}
						minLength={mergedConfig.minLength}
						pattern={mergedConfig.pattern}
						autoComplete={mergedConfig.autoComplete}
						value={finalInputValue}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						{...props}
					/>
					{mergedConfig.suffix && (
						<span className={styles.suffix}>
							{mergedConfig.suffix}
						</span>
					)}
					{mergedConfig.clearable && finalInputValue && (
						<button
							type='button'
							className={styles.clearButton}
							onClick={handleClear}
							tabIndex={-1}
							aria-label='Clear input'
						>
							&times;
						</button>
					)}
					{mergedConfig.showPasswordToggle &&
						mergedConfig.variant === 'password' && (
							<button
								type='button'
								className={styles.passwordToggle}
								onClick={handlePasswordToggle}
								tabIndex={-1}
								aria-label='Toggle password visibility'
							>
								{showPassword ? 'Hide' : 'Show'}
							</button>
						)}
				</div>
				{displayHelperText && (
					<div
						className={`${styles.helperText} ${helperClassName}`}
					>
						{displayHelperText}
					</div>
				)}
			</Wrapper>
		);
	}
);

Input.displayName = 'Input';

export default Input;
