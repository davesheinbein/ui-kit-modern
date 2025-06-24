import React, { forwardRef } from 'react';
import Select from './Select';
import {
	SELECT_CONFIGURATIONS,
	ExtendedSelectKind,
	SelectConfiguration,
	SelectFactoryProps,
} from './configurations';

/**
 * SelectFactory - DRY Select Component Factory
 *
 * Creates select components based on kind with predefined configurations.
 * Supports all select types from basic dropdowns to complex multiselects with search.
 */
export const SelectFactory = forwardRef<
	HTMLDivElement,
	SelectFactoryProps
>(
	(
		{
			kind,
			options,
			value,
			defaultValue,
			onChange,
			onSearch,
			label,
			helpText,
			error,
			className,
			disabled,
			required,
			loading,
			name,
			id,
			configuration,
			...props
		},
		ref
	) => {
		// Get base configuration for the specified kind
		const baseConfig =
			SELECT_CONFIGURATIONS[kind] ||
			SELECT_CONFIGURATIONS.dropdown;

		// Merge with custom configuration
		const finalConfig: SelectConfiguration = {
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
		if (loading) {
			finalConfig.state = 'loading';
		}

		return (
			<Select
				ref={ref}
				kind={kind}
				options={options}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				onSearch={onSearch}
				label={label}
				helpText={helpText}
				error={error}
				className={className}
				disabled={disabled}
				required={required}
				loading={loading}
				name={name}
				id={id}
				configuration={finalConfig}
				{...props}
			/>
		);
	}
);

SelectFactory.displayName = 'SelectFactory';

export default SelectFactory;

// Export specific select creators for common use cases
export const Dropdown = (
	props: Omit<SelectFactoryProps, 'kind'>
) => <SelectFactory kind='dropdown' {...props} />;

export const Multiselect = (
	props: Omit<SelectFactoryProps, 'kind'>
) => <SelectFactory kind='multiselect' {...props} />;

export const Autocomplete = (
	props: Omit<SelectFactoryProps, 'kind'>
) => <SelectFactory kind='autocomplete' {...props} />;

export const SearchableDropdown = (
	props: Omit<SelectFactoryProps, 'kind'>
) => (
	<SelectFactory kind='searchable-dropdown' {...props} />
);

export const CountrySelector = (
	props: Omit<SelectFactoryProps, 'kind'>
) => <SelectFactory kind='country-selector' {...props} />;

export const TimezoneSelector = (
	props: Omit<SelectFactoryProps, 'kind'>
) => <SelectFactory kind='timezone-selector' {...props} />;

export const LanguageSelector = (
	props: Omit<SelectFactoryProps, 'kind'>
) => <SelectFactory kind='language-selector' {...props} />;

export const CategoryFilter = (
	props: Omit<SelectFactoryProps, 'kind'>
) => <SelectFactory kind='category-filter' {...props} />;

export const TagSelector = (
	props: Omit<SelectFactoryProps, 'kind'>
) => <SelectFactory kind='tag-selector' {...props} />;

export const UserPicker = (
	props: Omit<SelectFactoryProps, 'kind'>
) => <SelectFactory kind='user-picker' {...props} />;

export const DateRangeSelector = (
	props: Omit<SelectFactoryProps, 'kind'>
) => <SelectFactory kind='date-range' {...props} />;

export const CustomSelect = (
	props: Omit<SelectFactoryProps, 'kind'>
) => <SelectFactory kind='custom' {...props} />;

// Export types
export type {
	SelectFactoryProps,
	ExtendedSelectKind as SelectKind,
	SelectConfiguration,
} from './configurations';
