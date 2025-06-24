import React, {
	forwardRef,
	useCallback,
	useEffect,
} from 'react';
import { Wrapper } from '../Wrappers';
import {
	InputKind,
	InputVariant,
	InputSize,
	InputState,
	InputStyle,
	InputConfiguration,
	INPUT_CONFIGURATIONS,
} from './configurations';
import {
	useAppDispatch,
	useAppSelector,
} from '../../store';
import {
	initializeComponentState,
	setValue,
	setInputState,
	setErrorText,
	togglePasswordVisibility,
	setFocused,
	setValid,
	removeComponentState,
	selectInputValue,
	selectInputState,
	selectInputErrorText,
	selectShowPassword,
	selectIsFocused,
	selectIsValid,
} from '../../store/slices/inputSlice';
import { Button } from '../Button';
import styles from './Input.module.scss';

// Extended props interface for Input
export interface InputProps
	extends Partial<
			Omit<InputConfiguration, 'autoComplete' | 'style'>
		>,
		Omit<
			React.InputHTMLAttributes<HTMLInputElement>,
			'size' | 'prefix' | 'style'
		> {
	kind: InputKind;
	componentId?: string; // For Redux state identification
	style?: InputStyle; // Use our custom style type instead of React's
	onValueChange?: (value: string) => void;
	containerClassName?: string;
	labelClassName?: string;
	inputClassName?: string;
	helperClassName?: string;
	iconClassName?: string;
	debounced?: boolean;
}

// Main Input Component
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
		// Generate componentId if not provided
		const finalComponentId =
			componentId || `input-${kind}-${Date.now()}`;

		// Redux hooks
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

		// Initialize Redux state on mount
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
							state === 'disabled' ? 'error' : 'default', // Map to Redux InputState
					},
				})
			);

			// Cleanup on unmount
			return () => {
				dispatch(
					removeComponentState({
						componentId: finalComponentId,
					})
				);
			};
		}, [dispatch, finalComponentId, defaultValue, state]);

		// Update Redux when controlled value changes
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

		// Get configuration for this input kind
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

		// Determine if component is controlled or uncontrolled
		const isControlled = controlledValue !== undefined;
		const finalInputValue =
			isControlled ? controlledValue : inputValue;

		// Handle input changes
		const handleChange = useCallback(
			(event: React.ChangeEvent<HTMLInputElement>) => {
				const newValue = event.target.value;

				// Update Redux state if uncontrolled
				if (!isControlled) {
					dispatch(
						setValue({
							componentId: finalComponentId,
							value: newValue,
						})
					);
				}

				// Call original onChange if provided
				if (onChange) {
					onChange(event);
				}

				// Handle debounced value changes
				if (onValueChange) {
					if (mergedConfig.debounceMs > 0 && debounced) {
						// For debounced inputs, we could use Redux to manage the timeout
						// For now, use immediate callback
						setTimeout(() => {
							onValueChange(newValue);
						}, mergedConfig.debounceMs);
					} else {
						onValueChange(newValue);
					}
				}

				// Custom validation
				if (customValidation) {
					const validationResult =
						customValidation(newValue);
					if (typeof validationResult === 'string') {
						dispatch(
							setInputState({
								componentId: finalComponentId,
								inputState: 'error',
							})
						);
						dispatch(
							setErrorText({
								componentId: finalComponentId,
								errorText: validationResult,
							})
						);
					} else if (validationResult === false) {
						dispatch(
							setInputState({
								componentId: finalComponentId,
								inputState: 'error',
							})
						);
						dispatch(
							setErrorText({
								componentId: finalComponentId,
								errorText: 'Invalid input',
							})
						);
					} else {
						dispatch(
							setInputState({
								componentId: finalComponentId,
								inputState: 'default',
							})
						);
						dispatch(
							setErrorText({
								componentId: finalComponentId,
								errorText: '',
							})
						);
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

		// Handle clear button
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

		// Handle password toggle
		const handlePasswordToggle = useCallback(() => {
			dispatch(
				togglePasswordVisibility({
					componentId: finalComponentId,
				})
			);
		}, [dispatch, finalComponentId]);

		// Handle focus and blur events
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

		// Determine input type
		const inputType =
			mergedConfig.variant === 'password' && showPassword ?
				'text'
			:	mergedConfig.variant;

		// Build CSS classes
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

		// Determine helper text to show
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

				<Wrapper className={styles.inputWrapper}>
					{mergedConfig.icon && (
						<span
							className={`${styles.icon} ${iconClassName}`}
						>
							{mergedConfig.icon}
						</span>
					)}

					{mergedConfig.prefix && (
						<span className={styles.prefix}>
							{mergedConfig.prefix}
						</span>
					)}

					<input
						ref={ref}
						type={inputType}
						value={finalInputValue}
						placeholder={mergedConfig.placeholder}
						disabled={mergedConfig.disabled}
						required={mergedConfig.required}
						autoComplete={mergedConfig.autoComplete}
						maxLength={mergedConfig.maxLength}
						minLength={mergedConfig.minLength}
						pattern={mergedConfig.pattern}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						className={inputClasses}
						{...props}
					/>

					{mergedConfig.suffix && (
						<span className={styles.suffix}>
							{mergedConfig.suffix}
						</span>
					)}

					{mergedConfig.showPasswordToggle &&
						mergedConfig.variant === 'password' && (
							<Button
								kind='ghost'
								type='button'
								className={styles.passwordToggle}
								onClick={handlePasswordToggle}
								tabIndex={-1}
							>
								{showPassword ? '👁️' : '👁️‍🗨️'}
							</Button>
						)}

					{mergedConfig.clearable && inputValue && (
						<Button
							kind='ghost'
							type='button'
							className={styles.clearButton}
							onClick={handleClear}
							tabIndex={-1}
						>
							✕
						</Button>
					)}
				</Wrapper>

				{displayHelperText && (
					<Wrapper
						className={`${styles.helperText} ${helperClassName}`}
					>
						{displayHelperText}
					</Wrapper>
				)}
			</Wrapper>
		);
	}
);

Input.displayName = 'Input';

export default Input;
