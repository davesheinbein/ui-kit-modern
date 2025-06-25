import React, {
	forwardRef,
	useRef,
	useEffect,
	useMemo,
	useId,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './Select.module.scss';
import {
	SELECT_CONFIGURATIONS,
	ExtendedSelectKind,
	SelectConfiguration,
	SelectFactoryProps,
} from './configurations';
import {
	setSelectState,
	selectSelectState,
	cleanupComponent,
} from '../../store/slices/uiSlice';
import type {
	SelectOption,
	SelectOptionGroup,
} from './configurations';

export interface SelectProps extends SelectFactoryProps {
	componentId?: string;
}

/**
 * Select - Main Select Component
 *
 * Simple wrapper around SelectFactory for backward compatibility and ease of use.
 * For advanced configurations, use SelectFactory directly.
 */
export const Select = forwardRef<
	HTMLDivElement,
	SelectProps
>(
	(
		{
			componentId,
			options,
			value: controlledValue,
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
			kind,
			...props
		},
		ref
	) => {
		const uniqueId = useId();
		const selectComponentId =
			componentId || `select-${uniqueId}`;
		const dispatch = useDispatch();

		// Local state setters for Redux-backed state
		const setIsOpen = (isOpen: boolean) => {
			dispatch(
				setSelectState({
					selectId: selectComponentId,
					updates: { isOpen },
				})
			);
		};
		const setInternalValue = (
			internalValue: string | string[]
		) => {
			dispatch(
				setSelectState({
					selectId: selectComponentId,
					updates: { internalValue },
				})
			);
		};
		const setSearchValue = (searchValue: string) => {
			dispatch(
				setSelectState({
					selectId: selectComponentId,
					updates: { searchValue },
				})
			);
		};
		const setFocusedIndex = (focusedIndex: number) => {
			dispatch(
				setSelectState({
					selectId: selectComponentId,
					updates: { focusedIndex },
				})
			);
		};

		useEffect(() => {
			dispatch(
				setSelectState({
					selectId: selectComponentId,
					updates: {
						internalValue:
							controlledValue ||
							defaultValue ||
							(configuration?.multiple ? [] : ''),
						isOpen: false,
						searchValue: '',
						focusedIndex: -1,
					},
				})
			);
			return () => {
				dispatch(cleanupComponent(selectComponentId));
			};
		}, [
			dispatch,
			selectComponentId,
			controlledValue,
			defaultValue,
			configuration?.multiple,
		]);

		const selectState = useSelector(
			selectSelectState(selectComponentId)
		);
		const internalValue =
			selectState?.internalValue ||
			(configuration?.multiple ? [] : '');
		const isOpen = selectState?.isOpen || false;
		const searchValue = selectState?.searchValue || '';
		const focusedIndex = selectState?.focusedIndex || -1;

		const containerRef = useRef<HTMLDivElement>(null);
		const inputRef = useRef<HTMLInputElement>(null);
		const menuRef = useRef<HTMLDivElement>(null);

		const isControlled = controlledValue !== undefined;
		const currentValue =
			isControlled ? controlledValue : internalValue;

		const flatOptions = useMemo(() => {
			return options.reduce<SelectOption[]>((acc, item) => {
				if ('options' in item) {
					return [...acc, ...item.options];
				} else {
					return [...acc, item];
				}
			}, []);
		}, [options]);

		const filteredOptions = useMemo(() => {
			if (!configuration?.searchable || !searchValue) {
				return flatOptions;
			}
			return flatOptions.filter(
				(option) =>
					option.label
						.toLowerCase()
						.includes(searchValue.toLowerCase()) ||
					option.description
						?.toLowerCase()
						.includes(searchValue.toLowerCase())
			);
		}, [
			flatOptions,
			searchValue,
			configuration?.searchable,
		]);

		const handleToggle = () => {
			if (disabled || loading) return;
			setIsOpen(!isOpen);
			if (!isOpen && configuration?.searchable) {
				setTimeout(() => inputRef.current?.focus(), 0);
			}
		};

		const handleSelect = (option: SelectOption) => {
			if (option.disabled) return;
			let newValue: string | string[];
			if (configuration?.multiple) {
				const currentArray =
					Array.isArray(currentValue) ? currentValue : [];
				if (currentArray.includes(option.value)) {
					newValue = currentArray.filter(
						(v) => v !== option.value
					);
				} else {
					newValue = [...currentArray, option.value];
				}
			} else {
				newValue = option.value;
				if (configuration?.closeOnSelect) {
					setIsOpen(false);
				}
			}
			if (!isControlled) {
				setInternalValue(newValue);
			}
			onChange?.(newValue);
		};

		const handleClear = () => {
			const newValue = configuration?.multiple ? [] : '';
			if (!isControlled) {
				setInternalValue(newValue);
			}
			onChange?.(newValue);
		};

		const handleSearchChange = (
			e: React.ChangeEvent<HTMLInputElement>
		) => {
			const value = e.target.value;
			setSearchValue(value);
			onSearch?.(value);
		};

		const handleKeyDown = (e: React.KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowDown':
					e.preventDefault();
					const nextIndex =
						focusedIndex < filteredOptions.length - 1 ?
							focusedIndex + 1
						:	0;
					setFocusedIndex(nextIndex);
					break;
				case 'ArrowUp':
					e.preventDefault();
					const prevIndex =
						focusedIndex > 0 ?
							focusedIndex - 1
						:	filteredOptions.length - 1;
					setFocusedIndex(prevIndex);
					break;
				case 'Enter':
					e.preventDefault();
					if (
						focusedIndex >= 0 &&
						filteredOptions[focusedIndex]
					) {
						handleSelect(filteredOptions[focusedIndex]);
					}
					break;
				case 'Escape':
					setIsOpen(false);
					break;
			}
		};

		useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				if (
					containerRef.current &&
					!containerRef.current.contains(
						event.target as Node
					)
				) {
					setIsOpen(false);
				}
			};
			if (isOpen) {
				document.addEventListener(
					'mousedown',
					handleClickOutside
				);
				return () =>
					document.removeEventListener(
						'mousedown',
						handleClickOutside
					);
			}
		}, [isOpen]);

		const getDisplayValue = () => {
			if (!currentValue) return '';
			if (
				configuration?.multiple &&
				Array.isArray(currentValue)
			) {
				const selectedOptions = currentValue
					.map((val) =>
						flatOptions.find((opt) => opt.value === val)
					)
					.filter(Boolean) as SelectOption[];
				if (selectedOptions.length === 0) return '';
				if (selectedOptions.length === 1)
					return selectedOptions[0].label;
				if (configuration?.showSelectedCount) {
					return `${selectedOptions.length} selected`;
				}
				if (
					selectedOptions.length <=
					(configuration?.maxSelectedDisplay || 3)
				) {
					return selectedOptions
						.map((opt) => opt.label)
						.join(', ');
				}
				return `${selectedOptions
					.slice(0, configuration?.maxSelectedDisplay || 3)
					.map((opt) => opt.label)
					.join(
						', '
					)} +${selectedOptions.length - (configuration?.maxSelectedDisplay || 3)}`;
			}
			const selectedOption = flatOptions.find(
				(opt) => opt.value === currentValue
			);
			return selectedOption?.label || '';
		};

		// Use finalConfig as SelectConfiguration, and destructure with fallback to empty object to avoid type errors and redeclaration
		let finalConfig = configuration;
		if (kind) {
			finalConfig = getFinalConfig(
				kind,
				configuration,
				disabled,
				error,
				loading
			);
		}

		// Fix destructuring from finalConfig: cast finalConfig as SelectConfiguration for destructuring, fallback to empty object if undefined
		const {
			variant,
			size,
			style,
			borderRadius,
			state,
			customStyles,
			...restConfiguration
		} = (finalConfig || {}) as SelectConfiguration;

		const mergedConfiguration = {
			variant,
			size,
			style,
			borderRadius,
			state,
			customStyles,
			...restConfiguration,
		};

		const containerClasses = classNames(
			styles.selectContainer,
			styles[`variant-${variant}`],
			styles[`size-${size}`],
			styles[`style-${style}`],
			styles[`radius-${borderRadius}`],
			{
				[styles.open]: isOpen,
				[styles.disabled]: disabled || state === 'disabled',
				[styles.error]: error || state === 'error',
				[styles.loading]: loading || state === 'loading',
				[styles.multiple]: (
					finalConfig as SelectConfiguration
				)?.multiple,
				[styles.searchable]: (
					finalConfig as SelectConfiguration
				)?.searchable,
			},
			customStyles?.container,
			className
		);

		// ...rest of the rendering logic, menu, options, etc...

		return (
			<div
				ref={ref}
				className={containerClasses}
				{...props}
			>
				{/* ...render label, control, menu, help/error text, etc... */}
			</div>
		);
	}
);

Select.displayName = 'Select';

// --- FACTORY LOGIC CONSOLIDATION ---
function getFinalConfig(
	kind: ExtendedSelectKind | undefined,
	configuration: Partial<SelectConfiguration> | undefined,
	disabled?: boolean,
	error?: string,
	loading?: boolean
): SelectConfiguration | undefined {
	if (!kind)
		return configuration as SelectConfiguration | undefined;
	const baseConfig =
		SELECT_CONFIGURATIONS[kind] ||
		SELECT_CONFIGURATIONS.dropdown;
	const finalConfig: SelectConfiguration = {
		...baseConfig,
		...configuration,
	};
	if (disabled) finalConfig.state = 'disabled';
	if (error) finalConfig.state = 'error';
	if (loading) finalConfig.state = 'loading';
	return finalConfig;
}

export const Dropdown: React.FC<
	Omit<SelectFactoryProps, 'kind'>
> = (props) => <Select kind='dropdown' {...props} />;
export const Multiselect: React.FC<
	Omit<SelectFactoryProps, 'kind'>
> = (props) => <Select kind='multiselect' {...props} />;
export const Autocomplete: React.FC<
	Omit<SelectFactoryProps, 'kind'>
> = (props) => <Select kind='autocomplete' {...props} />;
export const SearchableDropdown: React.FC<
	Omit<SelectFactoryProps, 'kind'>
> = (props) => (
	<Select kind='searchable-dropdown' {...props} />
);
export const CountrySelector: React.FC<
	Omit<SelectFactoryProps, 'kind'>
> = (props) => (
	<Select kind='country-selector' {...props} />
);
export const TimezoneSelector: React.FC<
	Omit<SelectFactoryProps, 'kind'>
> = (props) => (
	<Select kind='timezone-selector' {...props} />
);
export const LanguageSelector: React.FC<
	Omit<SelectFactoryProps, 'kind'>
> = (props) => (
	<Select kind='language-selector' {...props} />
);
export const CategoryFilter: React.FC<
	Omit<SelectFactoryProps, 'kind'>
> = (props) => <Select kind='category-filter' {...props} />;
export const TagSelector: React.FC<
	Omit<SelectFactoryProps, 'kind'>
> = (props) => <Select kind='tag-selector' {...props} />;
export const UserPicker: React.FC<
	Omit<SelectFactoryProps, 'kind'>
> = (props) => <Select kind='user-picker' {...props} />;
export const DateRangeSelector: React.FC<
	Omit<SelectFactoryProps, 'kind'>
> = (props) => <Select kind='date-range' {...props} />;
export const CustomSelect: React.FC<
	Omit<SelectFactoryProps, 'kind'>
> = (props) => <Select kind='custom' {...props} />;

// Export types for consumers
export type {
	SelectFactoryProps,
	ExtendedSelectKind as SelectKind,
	SelectConfiguration,
} from './configurations';
