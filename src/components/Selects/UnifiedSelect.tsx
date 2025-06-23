import React, {
	forwardRef,
	useEffect,
	useRef,
	useMemo,
	useId,
} from 'react';
import { Button } from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import {
	SelectConfiguration,
	SelectOption,
	SelectOptionGroup,
} from './configurations';
import {
	setSelectState,
	cleanupComponent,
	selectSelectState,
} from '../../store/slices/uiSlice';
import type { RootState } from '../../store';
import styles from './Select.module.scss';

export interface UnifiedSelectProps {
	componentId?: string; // For Redux state identification
	options: SelectOption[] | SelectOptionGroup[];
	value?: string | string[];
	defaultValue?: string | string[];
	onChange?: (value: string | string[]) => void;
	onSearch?: (searchValue: string) => void;
	label?: string;
	helpText?: string;
	error?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	loading?: boolean;
	name?: string;
	id?: string;
	configuration: SelectConfiguration;
}

/**
 * UnifiedSelect - Core Select Component
 *
 * Renders select dropdowns based on configuration with support for multiple variants,
 * search, multiselect, and virtualization. Handles all select states and interactions.
 */
export const UnifiedSelect = forwardRef<
	HTMLDivElement,
	UnifiedSelectProps
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
			...props
		},
		ref
	) => {
		// Generate unique component ID for Redux state isolation
		const uniqueId = useId();
		const selectComponentId =
			componentId || `select-${uniqueId}`;

		// Redux state management
		const dispatch = useDispatch();

		// Initialize component state on mount
		useEffect(() => {
			dispatch(
				setSelectState({
					selectId: selectComponentId,
					updates: {
						internalValue:
							controlledValue ||
							defaultValue ||
							(configuration.multiple ? [] : ''),
						isOpen: false,
						searchValue: '',
						focusedIndex: -1,
					},
				})
			);

			// Cleanup on unmount
			return () => {
				dispatch(cleanupComponent(selectComponentId));
			};
		}, [
			dispatch,
			selectComponentId,
			controlledValue,
			defaultValue,
			configuration.multiple,
		]);

		// Get state from Redux
		const selectState = useSelector(
			selectSelectState(selectComponentId)
		);

		const internalValue =
			selectState?.internalValue ||
			(configuration.multiple ? [] : '');
		const isOpen = selectState?.isOpen || false;
		const searchValue = selectState?.searchValue || '';
		const focusedIndex = selectState?.focusedIndex || -1;

		const containerRef = useRef<HTMLDivElement>(null);
		const inputRef = useRef<HTMLInputElement>(null);
		const menuRef = useRef<HTMLDivElement>(null);

		const isControlled = controlledValue !== undefined;
		const currentValue =
			isControlled ? controlledValue : internalValue;

		// Flatten options for easier processing
		const flatOptions = useMemo(() => {
			return options.reduce<SelectOption[]>((acc, item) => {
				if ('options' in item) {
					// It's a group
					return [...acc, ...item.options];
				} else {
					// It's a single option
					return [...acc, item];
				}
			}, []);
		}, [options]);

		// Filter options based on search
		const filteredOptions = useMemo(() => {
			if (!configuration.searchable || !searchValue) {
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
			configuration.searchable,
		]);

		useEffect(() => {
			if (isControlled) {
				setInternalValue(controlledValue);
			}
		}, [controlledValue, isControlled]);

		const handleToggle = () => {
			if (disabled || loading) return;
			setIsOpen(!isOpen);
			if (!isOpen && configuration.searchable) {
				setTimeout(() => inputRef.current?.focus(), 0);
			}
		};

		const handleSelect = (option: SelectOption) => {
			if (option.disabled) return;

			let newValue: string | string[];

			if (configuration.multiple) {
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
				if (configuration.closeOnSelect) {
					setIsOpen(false);
				}
			}

			if (!isControlled) {
				setInternalValue(newValue);
			}

			onChange?.(newValue);
		};

		const handleClear = () => {
			const newValue = configuration.multiple ? [] : '';
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
					setFocusedIndex((prev) =>
						prev < filteredOptions.length - 1 ? prev + 1 : 0
					);
					break;
				case 'ArrowUp':
					e.preventDefault();
					setFocusedIndex((prev) =>
						prev > 0 ? prev - 1 : filteredOptions.length - 1
					);
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

		// Close dropdown when clicking outside
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
				configuration.multiple &&
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
				if (configuration.showSelectedCount) {
					return `${selectedOptions.length} selected`;
				}
				if (
					selectedOptions.length <=
					configuration.maxSelectedDisplay
				) {
					return selectedOptions
						.map((opt) => opt.label)
						.join(', ');
				}
				return `${selectedOptions
					.slice(0, configuration.maxSelectedDisplay)
					.map((opt) => opt.label)
					.join(
						', '
					)} +${selectedOptions.length - configuration.maxSelectedDisplay}`;
			}

			const selectedOption = flatOptions.find(
				(opt) => opt.value === currentValue
			);
			return selectedOption?.label || '';
		};

		const containerClasses = classNames(
			styles.selectContainer,
			styles[`variant-${configuration.variant}`],
			styles[`size-${configuration.size}`],
			styles[`style-${configuration.style}`],
			styles[`radius-${configuration.borderRadius}`],
			{
				[styles.open]: isOpen,
				[styles.disabled]:
					disabled || configuration.state === 'disabled',
				[styles.error]:
					error || configuration.state === 'error',
				[styles.loading]:
					loading || configuration.state === 'loading',
				[styles.multiple]: configuration.multiple,
				[styles.searchable]: configuration.searchable,
			},
			configuration.customStyles?.container,
			className
		);

		const controlClasses = classNames(
			styles.control,
			configuration.customStyles?.control
		);

		const menuClasses = classNames(
			styles.menu,
			styles[`placement-${configuration.placement}`],
			configuration.customStyles?.menu
		);

		const renderOption = (
			option: SelectOption,
			index: number
		) => {
			const isSelected =
				configuration.multiple ?
					Array.isArray(currentValue) &&
					currentValue.includes(option.value)
				:	currentValue === option.value;
			const isFocused = index === focusedIndex;

			const optionClasses = classNames(
				styles.option,
				{
					[styles.selected]: isSelected,
					[styles.focused]: isFocused,
					[styles.disabled]: option.disabled,
				},
				configuration.customStyles?.option,
				option.className
			);

			return (
				<div
					key={option.value}
					className={optionClasses}
					onClick={() => handleSelect(option)}
					onMouseEnter={() => setFocusedIndex(index)}
				>
					{option.icon && (
						<div className={styles.optionIcon}>
							{option.icon}
						</div>
					)}
					{option.image && (
						<div className={styles.optionImage}>
							<img src={option.image} alt={option.label} />
						</div>
					)}
					<div className={styles.optionContent}>
						<div className={styles.optionLabel}>
							{option.label}
						</div>
						{option.description && (
							<div className={styles.optionDescription}>
								{option.description}
							</div>
						)}
					</div>
					{configuration.multiple && isSelected && (
						<div className={styles.checkmark}>✓</div>
					)}
				</div>
			);
		};

		return (
			<div
				ref={ref}
				className={containerClasses}
				{...props}
			>
				<div ref={containerRef}>
					{label && (
						<div className={styles.fieldLabel}>
							{label}
							{(required || configuration.required) && (
								<span className={styles.requiredMark}>
									*
								</span>
							)}
						</div>
					)}

					<div
						className={controlClasses}
						onClick={handleToggle}
					>
						<div className={styles.valueContainer}>
							{configuration.searchable && isOpen ?
								<input
									ref={inputRef}
									type='text'
									value={searchValue}
									onChange={handleSearchChange}
									onKeyDown={handleKeyDown}
									placeholder={
										configuration.searchPlaceholder
									}
									className={styles.searchInput}
									disabled={disabled}
								/>
							:	<div className={styles.singleValue}>
									{getDisplayValue() || (
										<span className={styles.placeholder}>
											{configuration.placeholder}
										</span>
									)}
								</div>
							}
						</div>

						<div className={styles.indicators}>
							{loading && (
								<div className={styles.loadingIndicator}>
									<div className={styles.spinner} />
								</div>
							)}
							{configuration.clearable &&
								currentValue &&
								!disabled && (
									<Button
										type='button'
										kind='close'
										className={styles.clearIndicator}
										onClick={(e) => {
											e.stopPropagation();
											handleClear();
										}}
									>
										×
									</Button>
								)}
							<div className={styles.dropdownIndicator}>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</div>
					</div>

					{isOpen && (
						<div
							ref={menuRef}
							className={menuClasses}
							style={{
								maxHeight: configuration.maxHeight,
								animationDuration: `${configuration.animationDuration}ms`,
							}}
						>
							{loading ?
								<div className={styles.loadingMessage}>
									{configuration.loadingMessage}
								</div>
							: filteredOptions.length === 0 ?
								<div className={styles.noOptionsMessage}>
									{configuration.noOptionsMessage}
								</div>
							:	filteredOptions.map(renderOption)}
						</div>
					)}
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

UnifiedSelect.displayName = 'UnifiedSelect';

export default UnifiedSelect;
