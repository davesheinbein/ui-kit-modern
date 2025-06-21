import React, { forwardRef, useEffect, useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import {
	RadioConfiguration,
	RadioOption,
} from './configurations';
import {
	setRadioState,
	cleanupComponent,
	selectRadioState,
} from '../../store/slices/uiSlice';
import type { RootState } from '../../store';
import styles from './Radio.module.scss';

export interface UnifiedRadioProps {
	componentId?: string; // For Redux state identification
	name: string;
	options: RadioOption[];
	value?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	label?: string;
	helpText?: string;
	error?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	configuration: RadioConfiguration;
}

/**
 * UnifiedRadio - Core Radio Component
 *
 * Renders radio buttons based on configuration with support for multiple variants,
 * styles, and layouts. Handles all radio states and interactions.
 */
export const UnifiedRadio = forwardRef<
	HTMLDivElement,
	UnifiedRadioProps
>(
	(
		{
			componentId,
			name,
			options,
			value: controlledValue,
			defaultValue,
			onChange,
			label,
			helpText,
			error,
			className,
			disabled,
			required,
			configuration,
			...props
		},
		ref
	) => {
		// Generate unique component ID for Redux state isolation
		const uniqueId = useId();
		const radioComponentId =
			componentId || `radio-${uniqueId}`;

		// Redux state management
		const dispatch = useDispatch();

		// Initialize component state on mount
		useEffect(() => {
			dispatch(
				setRadioState({
					radioId: radioComponentId,
					updates: {
						internalValue: controlledValue || defaultValue,
					},
				})
			);

			// Cleanup on unmount
			return () => {
				dispatch(cleanupComponent(radioComponentId));
			};
		}, [
			dispatch,
			radioComponentId,
			controlledValue,
			defaultValue,
		]);

		// Get state from Redux
		const radioState = useSelector(
			selectRadioState(radioComponentId)
		);

		const internalValue = radioState?.internalValue;

		const isControlled = controlledValue !== undefined;
		const currentValue =
			isControlled ? controlledValue : internalValue;

		useEffect(() => {
			if (isControlled) {
				dispatch(
					setRadioState({
						radioId: radioComponentId,
						updates: { internalValue: controlledValue },
					})
				);
			}
		}, [
			controlledValue,
			isControlled,
			dispatch,
			radioComponentId,
		]);

		const handleChange = (optionValue: string) => {
			if (disabled) return;

			// Handle deselection if allowed and same value is clicked
			const newValue =
				(
					configuration.allowDeselect &&
					currentValue === optionValue
				) ?
					undefined
				:	optionValue;

			if (!isControlled) {
				dispatch(
					setRadioState({
						radioId: radioComponentId,
						updates: { internalValue: newValue },
					})
				);
			}

			onChange?.(newValue || '');
		};

		const containerClasses = classNames(
			styles.radioContainer,
			styles[`variant-${configuration.variant}`],
			styles[`size-${configuration.size}`],
			styles[`style-${configuration.style}`],
			styles[`alignment-${configuration.alignment}`],
			styles[`spacing-${configuration.spacing}`],
			styles[`radius-${configuration.borderRadius}`],
			{
				[styles.disabled]:
					disabled || configuration.state === 'disabled',
				[styles.error]:
					error || configuration.state === 'error',
				[styles.required]:
					required || configuration.required,
			},
			configuration.customStyles?.container,
			className
		);

		const renderOption = (
			option: RadioOption,
			index: number
		) => {
			const isSelected = currentValue === option.value;
			const isDisabled = disabled || option.disabled;

			const optionClasses = classNames(
				styles.radioOption,
				styles[`option-${configuration.variant}`],
				{
					[styles.selected]: isSelected,
					[styles.disabled]: isDisabled,
					[styles.hasIcon]: !!option.icon,
					[styles.hasImage]: !!option.image,
					[styles.hasDescription]:
						!!option.description &&
						configuration.showDescriptions,
				},
				configuration.customStyles?.option,
				option.className
			);

			const inputClasses = classNames(
				styles.radioInput,
				configuration.customStyles?.input
			);

			const labelClasses = classNames(
				styles.radioLabel,
				configuration.customStyles?.label
			);

			const descriptionClasses = classNames(
				styles.radioDescription,
				configuration.customStyles?.description
			);

			return (
				<div key={option.value} className={optionClasses}>
					<input
						type='radio'
						id={`${name}-${option.value}`}
						name={name}
						value={option.value}
						checked={isSelected}
						disabled={isDisabled}
						onChange={() => handleChange(option.value)}
						className={inputClasses}
						style={{
							animationDuration: `${configuration.animationDuration}ms`,
						}}
					/>
					<label
						htmlFor={`${name}-${option.value}`}
						className={labelClasses}
					>
						{option.image && (
							<div className={styles.optionImage}>
								<img
									src={option.image}
									alt={option.label}
								/>
							</div>
						)}
						{option.icon && (
							<div className={styles.optionIcon}>
								{option.icon}
							</div>
						)}
						{configuration.showLabels && (
							<span className={styles.optionText}>
								{option.label}
							</span>
						)}
						{option.description &&
							configuration.showDescriptions && (
								<span className={descriptionClasses}>
									{option.description}
								</span>
							)}
					</label>
				</div>
			);
		};

		return (
			<div
				ref={ref}
				className={containerClasses}
				{...props}
			>
				{label && (
					<div className={styles.fieldLabel}>
						{label}
						{(required || configuration.required) && (
							<span className={styles.requiredMark}>*</span>
						)}
					</div>
				)}

				<div className={styles.optionsContainer}>
					{options.map(renderOption)}
				</div>

				{helpText && !error && (
					<div className={styles.helpText}>{helpText}</div>
				)}

				{error && (
					<div className={styles.errorText}>{error}</div>
				)}
			</div>
		);
	}
);

UnifiedRadio.displayName = 'UnifiedRadio';

export default UnifiedRadio;
