import React, { forwardRef } from 'react';
import Radio from './Radio';
import {
	RADIO_CONFIGURATIONS,
	ExtendedRadioKind,
	RadioConfiguration,
	RadioFactoryProps,
} from './configurations';

/**
 * RadioFactory - DRY Radio Component Factory
 *
 * Creates radio components based on kind with predefined configurations.
 * Supports all radio types from basic standard radios to complex card selections.
 */
export const RadioFactory = forwardRef<
	HTMLDivElement,
	RadioFactoryProps
>(
	(
		{
			kind,
			name,
			options,
			value,
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
		// Get base configuration for the specified kind
		const baseConfig =
			RADIO_CONFIGURATIONS[kind] ||
			RADIO_CONFIGURATIONS.standard;

		// Merge with custom configuration
		const finalConfig: RadioConfiguration = {
			...baseConfig,
			...configuration,
		};

		// Apply state overrides
		if (disabled) {
			finalConfig.state = 'disabled';
		}
		if (error) {
			finalConfig.state = 'error';
		}
		if (required) {
			finalConfig.required = true;
		}

		return (
			<Radio
				ref={ref}
				name={name}
				options={options}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				label={label}
				helpText={helpText}
				error={error}
				className={className}
				disabled={disabled}
				required={required}
				configuration={finalConfig}
				{...props}
			/>
		);
	}
);

RadioFactory.displayName = 'RadioFactory';

export default RadioFactory;

// Export specific radio creators for common use cases
export const StandardRadio = (
	props: Omit<RadioFactoryProps, 'kind'>
) => <RadioFactory kind='standard' {...props} />;

export const ButtonGroupRadio = (
	props: Omit<RadioFactoryProps, 'kind'>
) => <RadioFactory kind='button-group' {...props} />;

export const CardSelectionRadio = (
	props: Omit<RadioFactoryProps, 'kind'>
) => <RadioFactory kind='card-selection' {...props} />;

export const ToggleSwitchRadio = (
	props: Omit<RadioFactoryProps, 'kind'>
) => <RadioFactory kind='toggle-switch' {...props} />;

export const ImageRadio = (
	props: Omit<RadioFactoryProps, 'kind'>
) => <RadioFactory kind='image-radio' {...props} />;

export const ColorPickerRadio = (
	props: Omit<RadioFactoryProps, 'kind'>
) => <RadioFactory kind='color-picker' {...props} />;

export const SizeSelectorRadio = (
	props: Omit<RadioFactoryProps, 'kind'>
) => <RadioFactory kind='size-selector' {...props} />;

export const PlanSelectorRadio = (
	props: Omit<RadioFactoryProps, 'kind'>
) => <RadioFactory kind='plan-selector' {...props} />;

export const PreferenceRadio = (
	props: Omit<RadioFactoryProps, 'kind'>
) => <RadioFactory kind='preference' {...props} />;

export const CustomRadio = (
	props: Omit<RadioFactoryProps, 'kind'>
) => <RadioFactory kind='custom' {...props} />;

// Export types
export type {
	RadioFactoryProps,
	ExtendedRadioKind as RadioKind,
	RadioConfiguration,
} from './configurations';
