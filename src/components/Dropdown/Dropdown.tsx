import React, {
	forwardRef,
	useRef,
	useId,
	useCallback,
	useState,
} from 'react';
import {
	DropdownLabel,
	DropdownHelper,
	DropdownLoading,
	DropdownClearButton,
	DropdownInput,
	DropdownMenu,
	FilterToggle,
	SelectedChips,
	getContainerClasses,
	useDropdownState,
	useDropdownKeyboard,
	useDropdownOutsideClick,
	handleOptionSelect,
	handleClearSelection,
	handleDropdownToggle,
	handleSearchChange,
	isMultiSelect,
	normalizeValue,
	getFilteredOptions,
	getDisplayValue,
} from './Sub';
import styles from './dropdown.module.scss';
import classNames from 'classnames';

export const Dropdown = forwardRef<HTMLDivElement, any>(
	(
		{
			componentId,
			data,
			children,
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
			variant = 'dropdown',
			size = 'medium',
			searchable = false,
			clearable = false,
			filter = false,
			placeholder,
			searchPlaceholder,
			loadingMessage,
			...props
		},
		ref
	) => {
		const uniqueId = useId();
		const dropdownComponentId =
			componentId || `dropdown-${uniqueId}`;
		const containerRef = useRef<HTMLDivElement>(null);
		const menuRef = useRef<HTMLDivElement>(null);
		const multi = isMultiSelect(variant);

		// Use modular state hook
		const {
			open,
			setOpen,
			value,
			search,
			setSearch,
			handleSelect,
			handleClear,
		} = useDropdownState({
			value: controlledValue,
			defaultValue,
			data,
			onChange,
			onSearch,
			searchable,
			multi,
		});

		// Filter state (local, since not in hook)
		const [filterValue, setFilterValue] = useState<
			'none' | 'az' | 'za' | 'largest' | 'smallest'
		>('none');

		// Keyboard navigation
		const [highlightedIndex, setHighlightedIndex] =
			useState(0);
		const filteredOptionsArr = getFilteredOptions({
			options: Array.isArray(data) ? data : [],
			filter,
			filterValue,
			searchable,
			searchValue: search,
		});
		const filteredOptions =
			Array.isArray(filteredOptionsArr) ?
				filteredOptionsArr
			:	[];

		const { handleKeyDown } = useDropdownKeyboard({
			open,
			setOpen,
			optionsLength: filteredOptions.length,
			highlightedIndex,
			setHighlightedIndex,
			onSelect: (idx: number) => {
				const option = filteredOptions[idx];
				if (option) {
					handleSelect(option.value);
					setOpen(false);
				}
			},
		});

		// Close on outside click
		useDropdownOutsideClick(
			containerRef,
			() => setOpen(false),
			open
		);

		// Display value
		const displayValue = getDisplayValue({
			variant,
			currentValue: value || (multi ? [] : ''),
			options: Array.isArray(data) ? data : [],
		});

		// Event handlers
		const onDropdownToggle = () =>
			handleDropdownToggle({ open, setOpen, disabled });
		const onClear = () =>
			handleClearSelection({
				multi,
				onChange: handleClear,
			});
		const onSearchInput = (val: string) =>
			handleSearchChange({
				value: val,
				setSearch,
				onSearch,
			});
		const onOptionSelect = (val: string) => {
			handleSelect(val);
			setOpen(false);
		};

		// Render
		return (
			<div
				ref={containerRef}
				className={getContainerClasses({
					isOpen: open,
					disabled,
					error,
					loading,
					variant,
					size,
					searchable,
					className,
				})}
				data-testid='dropdown-container'
				{...props}
			>
				<DropdownLabel
					label={label}
					required={required}
					disabled={disabled}
				/>
				<div
					className={styles.control}
					tabIndex={0}
					role='button'
					aria-haspopup='listbox'
					aria-expanded={open}
					onClick={onDropdownToggle}
					onKeyDown={handleKeyDown}
					ref={ref}
				>
					<div className={styles.valueContainer}>
						{(
							multi &&
							Array.isArray(value) &&
							value.length > 0
						) ?
							<SelectedChips
								values={normalizeValue(value, multi)}
								options={Array.isArray(data) ? data : []}
								onRemove={onOptionSelect}
							/>
						:	<span className={styles.singleValue}>
								{displayValue ||
									placeholder ||
									'Dropdown...'}
							</span>
						}
					</div>
					{clearable && !disabled && value && (
						<DropdownClearButton
							onClick={onClear}
							disabled={disabled}
						/>
					)}
					<div className={styles.indicators}>
						<span className={styles.dropdownIndicator}>
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								aria-hidden='true'
							>
								<path
									d='M6 8l4 4 4-4'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</span>
					</div>
				</div>
				{open && (
					<div className={styles.menu} ref={menuRef}>
						{filter && (
							<FilterToggle
								checked={filterValue !== 'none'}
								onChange={(checked) =>
									setFilterValue(checked ? 'az' : 'none')
								}
							/>
						)}
						{searchable && (
							<DropdownInput
								value={search}
								onChange={onSearchInput}
								placeholder={
									searchPlaceholder || 'Search...'
								}
								disabled={disabled}
							/>
						)}
						{loading ?
							<DropdownLoading
								loadingMessage={loadingMessage}
							/>
						:	<DropdownMenu
								options={filteredOptions}
								selectedValues={normalizeValue(
									value,
									multi
								)}
								multi={multi}
								onSelect={onOptionSelect}
								disabled={disabled}
							/>
						}
					</div>
				)}
				<DropdownHelper error={error} helpText={helpText} />
			</div>
		);
	}
);

Dropdown.displayName = 'Dropdown';
