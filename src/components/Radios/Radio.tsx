import React, { forwardRef, useEffect, useId } from 'react';
import { Wrapper } from '../Wrappers';
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

export interface RadioProps {
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

export const Radio = forwardRef<HTMLDivElement, RadioProps>(
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
				<Wrapper
					key={option.value}
					className={optionClasses}
				>
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
							<Wrapper className={styles.optionImage}>
								<img
									src={option.image}
									alt={option.label}
								/>
							</Wrapper>
						)}
						{option.icon && (
							<Wrapper className={styles.optionIcon}>
								{option.icon}
							</Wrapper>
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
				</Wrapper>
			);
		};

		return (
			<Wrapper
				ref={ref}
				className={containerClasses}
				{...props}
			>
				{label && (
					<Wrapper className={styles.fieldLabel}>
						{label}
						{(required || configuration.required) && (
							<span className={styles.requiredMark}>*</span>
						)}
					</Wrapper>
				)}

				<Wrapper className={styles.optionsContainer}>
					{options.map(renderOption)}
				</Wrapper>

				{helpText && !error && (
					<Wrapper className={styles.helpText}>
						{helpText}
					</Wrapper>
				)}

				{error && (
					<Wrapper className={styles.errorText}>
						{error}
					</Wrapper>
				)}
			</Wrapper>
		);
	}
);

Radio.displayName = 'Radio';
export default Radio;

// ===================== STATIC HELPERS AND PRESETS (formerly factory) =====================
import {
	RADIO_CONFIGURATIONS,
	ExtendedRadioKind,
	RadioConfiguration,
} from './configurations';

export interface RadioFactoryProps
	extends Omit<RadioProps, 'configuration'> {
	kind: ExtendedRadioKind;
	configuration?: Partial<RadioConfiguration>;
}

// Factory-like static helper
function createRadio({
	kind,
	configuration,
	...props
}: RadioFactoryProps) {
	const baseConfig =
		RADIO_CONFIGURATIONS[kind] ||
		RADIO_CONFIGURATIONS.standard;
	const finalConfig: RadioConfiguration = {
		...baseConfig,
		...configuration,
	};
	return <Radio {...props} configuration={finalConfig} />;
}

// Preset helpers for common radio types
const Presets = {
	Standard: (props: Omit<RadioFactoryProps, 'kind'>) =>
		createRadio({ kind: 'standard', ...props }),
	ButtonGroup: (props: Omit<RadioFactoryProps, 'kind'>) =>
		createRadio({ kind: 'button-group', ...props }),
	CardSelection: (props: Omit<RadioFactoryProps, 'kind'>) =>
		createRadio({ kind: 'card-selection', ...props }),
	ToggleSwitch: (props: Omit<RadioFactoryProps, 'kind'>) =>
		createRadio({ kind: 'toggle-switch', ...props }),
	Image: (props: Omit<RadioFactoryProps, 'kind'>) =>
		createRadio({ kind: 'image-radio', ...props }),
	ColorPicker: (props: Omit<RadioFactoryProps, 'kind'>) =>
		createRadio({ kind: 'color-picker', ...props }),
	SizeSelector: (props: Omit<RadioFactoryProps, 'kind'>) =>
		createRadio({ kind: 'size-selector', ...props }),
	PlanSelector: (props: Omit<RadioFactoryProps, 'kind'>) =>
		createRadio({ kind: 'plan-selector', ...props }),
	Preference: (props: Omit<RadioFactoryProps, 'kind'>) =>
		createRadio({ kind: 'preference', ...props }),
	Custom: (props: Omit<RadioFactoryProps, 'kind'>) =>
		createRadio({ kind: 'custom', ...props }),
};

// Attach helpers to Radio
(Radio as any).Presets = Presets;
(Radio as any).createRadio = createRadio;

export { Presets as RadioPresets, createRadio };
export type {
	RadioFactoryProps,
	ExtendedRadioKind as RadioKind,
};
