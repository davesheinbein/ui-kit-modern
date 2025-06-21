import React, {
	forwardRef,
	useState,
	useCallback,
} from 'react';
import {
	InputKind,
	InputVariant,
	InputSize,
	InputState,
	InputStyle,
	InputConfiguration,
	INPUT_CONFIGURATIONS,
} from './configurations';
import styles from './Input.module.scss';

// Extended props interface for UnifiedInput
export interface UnifiedInputProps
	extends Partial<
			Omit<InputConfiguration, 'autoComplete' | 'style'>
		>,
		Omit<
			React.InputHTMLAttributes<HTMLInputElement>,
			'size' | 'prefix' | 'style'
		> {
	kind: InputKind;
	style?: InputStyle; // Use our custom style type instead of React's
	onValueChange?: (value: string) => void;
	containerClassName?: string;
	labelClassName?: string;
	inputClassName?: string;
	helperClassName?: string;
	iconClassName?: string;
	debounced?: boolean;
}

// Main UnifiedInput Component
const UnifiedInput = forwardRef<
	HTMLInputElement,
	UnifiedInputProps
>(
	(
		{
			kind,
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
		// Get configuration for this input kind
		const config = INPUT_CONFIGURATIONS[kind] || {};
		const mergedConfig = {
			variant: variant || config.variant || 'text',
			size: size || config.size || 'medium',
			style: inputStyle || config.style || 'outlined',
			placeholder: placeholder || config.placeholder || '',
			label: label || config.label || '',
			helperText: helperText || config.helperText || '',
			errorText: errorText || config.errorText || '',
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

		// Internal state management
		const [internalValue, setInternalValue] = useState(
			defaultValue || ''
		);
		const [showPassword, setShowPassword] = useState(false);
		const [currentState, setCurrentState] =
			useState<InputState>(state);
		const [validationMessage, setValidationMessage] =
			useState('');

		// Determine if component is controlled or uncontrolled
		const isControlled = controlledValue !== undefined;
		const inputValue =
			isControlled ? controlledValue : internalValue;

		// Debounce functionality
		const [debounceTimeout, setDebounceTimeout] = useState<
			number | null
		>(null);

		// Handle input changes
		const handleChange = useCallback(
			(event: React.ChangeEvent<HTMLInputElement>) => {
				const newValue = event.target.value;

				// Update internal state if uncontrolled
				if (!isControlled) {
					setInternalValue(newValue);
				}

				// Call original onChange if provided
				if (onChange) {
					onChange(event);
				}

				// Handle debounced value changes
				if (onValueChange) {
					if (mergedConfig.debounceMs > 0 && debounced) {
						if (debounceTimeout) {
							clearTimeout(debounceTimeout);
						}
						const timeout = setTimeout(() => {
							onValueChange(newValue);
						}, mergedConfig.debounceMs);
						setDebounceTimeout(timeout);
					} else {
						onValueChange(newValue);
					}
				}

				// Custom validation
				if (config.customValidation) {
					const validationResult =
						config.customValidation(newValue);
					if (typeof validationResult === 'string') {
						setCurrentState('error');
						setValidationMessage(validationResult);
					} else if (validationResult === false) {
						setCurrentState('error');
						setValidationMessage('Invalid input');
					} else {
						setCurrentState('default');
						setValidationMessage('');
					}
				}
			},
			[
				isControlled,
				onChange,
				onValueChange,
				mergedConfig.debounceMs,
				debounced,
				debounceTimeout,
				config.customValidation,
			]
		);

		// Handle clear button
		const handleClear = useCallback(() => {
			const newValue = '';
			if (!isControlled) {
				setInternalValue(newValue);
			}
			if (onValueChange) {
				onValueChange(newValue);
			}
		}, [isControlled, onValueChange]);

		// Handle password toggle
		const handlePasswordToggle = useCallback(() => {
			setShowPassword((prev) => !prev);
		}, []);

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
				(validationMessage || mergedConfig.errorText)
			) ?
				validationMessage || mergedConfig.errorText
			: (
				currentState === 'success' &&
				mergedConfig.successText
			) ?
				mergedConfig.successText
			:	mergedConfig.helperText;

		return (
			<div className={containerClasses}>
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
						value={inputValue}
						placeholder={mergedConfig.placeholder}
						disabled={mergedConfig.disabled}
						required={mergedConfig.required}
						autoComplete={mergedConfig.autoComplete}
						maxLength={mergedConfig.maxLength}
						minLength={mergedConfig.minLength}
						pattern={mergedConfig.pattern}
						className={inputClasses}
						onChange={handleChange}
						{...props}
					/>

					{mergedConfig.suffix && (
						<span className={styles.suffix}>
							{mergedConfig.suffix}
						</span>
					)}

					{mergedConfig.showPasswordToggle &&
						mergedConfig.variant === 'password' && (
							<button
								type='button'
								className={styles.passwordToggle}
								onClick={handlePasswordToggle}
								tabIndex={-1}
							>
								{showPassword ? '👁️' : '👁️‍🗨️'}
							</button>
						)}

					{mergedConfig.clearable && inputValue && (
						<button
							type='button'
							className={styles.clearButton}
							onClick={handleClear}
							tabIndex={-1}
						>
							✕
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
			</div>
		);
	}
);

UnifiedInput.displayName = 'UnifiedInput';

export default UnifiedInput;
