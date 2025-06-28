import React, {
	useRef,
	useId,
	useEffect,
	useCallback,
	forwardRef,
} from 'react';
import classNames from 'classnames';
import { Wrapper } from '../Wrappers';
import styles from './select.module.scss';
import Loading from '../Loading/Loading';

export interface SelectProps {
	options: Array<{
		label: string;
		value: string;
		numericValue?: number;
	}>; // numericValue is optional for size-based sorting
	value?: string | string[];
	defaultValue?: string | string[];
	onChange?: (value: string | string[]) => void;
	onSearch?: (search: string) => void;
	label?: string | React.ReactNode;
	helpText?: string | React.ReactNode;
	error?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	loading?: boolean;
	name?: string;
	id?: string;
	variant?:
		| 'dropdown'
		| 'multiselect'
		| 'searchable'
		| 'custom';
	size?: 'small' | 'medium' | 'large';
	searchable?: boolean;
	clearable?: boolean;
	filter?: boolean; // filter dropdown
	placeholder?: string;
	searchPlaceholder?: string;
	loadingMessage?: string;
	componentId?: string;
	// ...other native props
	[key: string]: any;
}

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
		const selectComponentId =
			componentId || `select-${uniqueId}`;
		// Remove redux/select state logic for simplicity
		const containerRef = useRef<HTMLDivElement>(null);
		const inputRef = useRef<HTMLInputElement>(null);
		const menuRef = useRef<HTMLDivElement>(null);
		const [isOpen, setIsOpen] = React.useState(false);
		const [searchValue, setSearchValue] =
			React.useState('');
		const [internalValue, setInternalValue] =
			React.useState(
				defaultValue !== undefined ? defaultValue
				: variant === 'multiselect' ? []
				: ''
			);
		const [filterValue, setFilterValue] = React.useState<
			'none' | 'az' | 'za' | 'largest' | 'smallest'
		>('none');
		const isControlled = controlledValue !== undefined;
		const currentValue =
			isControlled ? controlledValue : internalValue;
		const getFilteredOptions = useCallback(() => {
			let filtered = options;
			if (searchable && searchValue) {
				filtered = filtered.filter(
					(opt: { label: string; value: string }) =>
						opt.label
							.toLowerCase()
							.includes(searchValue.toLowerCase())
				);
			}
			if (filter && filterValue !== 'none') {
				if (filterValue === 'az') {
					filtered = [...filtered].sort((a, b) =>
						a.label.localeCompare(b.label)
					);
				} else if (filterValue === 'za') {
					filtered = [...filtered].sort((a, b) =>
						b.label.localeCompare(a.label)
					);
				} else if (filterValue === 'largest') {
					filtered = [...filtered].sort(
						(a, b) =>
							(b.numericValue ?? 0) - (a.numericValue ?? 0)
					);
				} else if (filterValue === 'smallest') {
					filtered = [...filtered].sort(
						(a, b) =>
							(a.numericValue ?? 0) - (b.numericValue ?? 0)
					);
				}
			}
			return filtered;
		}, [
			options,
			searchable,
			searchValue,
			filter,
			filterValue,
		]);
		const filteredOptions = getFilteredOptions();
		const getDisplayValue = () => {
			if (
				variant === 'multiselect' &&
				Array.isArray(currentValue)
			) {
				return options
					.filter((opt: { label: string; value: string }) =>
						currentValue.includes(opt.value)
					)
					.map(
						(opt: { label: string; value: string }) =>
							opt.label
					)
					.join(', ');
			}
			const found = options.find(
				(opt: { label: string; value: string }) =>
					opt.value === currentValue
			);
			return found ? found.label : '';
		};
		const getContainerClasses = () =>
			classNames(
				styles.selectContainer,
				styles[`variant-${variant}`],
				styles[`size-${size}`],
				{
					[styles.open]: isOpen,
					[styles.disabled]: disabled,
					[styles.error]: !!error,
					[styles.loading]: loading,
					[styles.multiple]: variant === 'multiselect',
					[styles.searchable]: searchable,
				},
				className
			);
		const handleToggle = () => {
			if (disabled || loading) return;
			setIsOpen(!isOpen);
			if (!isOpen && searchable) {
				setTimeout(() => inputRef.current?.focus(), 0);
			}
		};
		const handleSelect = (option: {
			label: string;
			value: string;
		}) => {
			if (variant === 'multiselect') {
				let newValue: string[];
				if (
					Array.isArray(currentValue) &&
					currentValue.includes(option.value)
				) {
					newValue = currentValue.filter(
						(v: string) => v !== option.value
					);
				} else {
					newValue =
						Array.isArray(currentValue) ?
							[...currentValue, option.value]
						:	[option.value];
				}
				if (!isControlled) setInternalValue(newValue);
				onChange?.(newValue);
			} else {
				if (!isControlled) setInternalValue(option.value);
				onChange?.(option.value);
				setIsOpen(false);
			}
		};
		const handleClear = () => {
			if (!isControlled)
				setInternalValue(
					variant === 'multiselect' ? [] : ''
				);
			onChange?.(variant === 'multiselect' ? [] : '');
			setSearchValue('');
		};
		const handleSearchChange = (
			e: React.ChangeEvent<HTMLInputElement>
		) => {
			setSearchValue(e.target.value);
			onSearch?.(e.target.value);
		};
		const handleKeyDown = (e: React.KeyboardEvent) => {
			if (e.key === 'Escape') setIsOpen(false);
		};
		return (
			<Wrapper
				kind='component-wrapper'
				ref={containerRef}
				className={getContainerClasses()}
				data-testid='select-container'
			>
				{label && (
					<label className={styles.fieldLabel} htmlFor={id}>
						{label}
						{required && (
							<span className={styles.requiredMark}>*</span>
						)}
					</label>
				)}
				<div
					className={styles.control}
					onClick={handleToggle}
					tabIndex={0}
					role='button'
					aria-haspopup='listbox'
					aria-expanded={isOpen}
					aria-disabled={disabled}
					id={id}
					onKeyDown={handleKeyDown}
				>
					<div className={styles.valueContainer}>
						{searchable && isOpen ?
							<input
								ref={inputRef}
								className={styles.searchInput}
								type='text'
								value={searchValue}
								onChange={handleSearchChange}
								placeholder={
									searchPlaceholder || 'Search...'
								}
								disabled={disabled}
								onKeyDown={handleKeyDown}
							/>
						:	<span className={styles.singleValue}>
								{getDisplayValue() ||
									placeholder ||
									'Select...'}
							</span>
						}
					</div>
					<div className={styles.indicators}>
						{!disabled &&
							clearable &&
							getDisplayValue() && (
								<button
									type='button'
									className={styles.clearIndicator}
									onClick={(e) => {
										e.stopPropagation();
										handleClear();
									}}
									aria-label='Clear selection'
								>
									×
								</button>
							)}
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
				{isOpen && (
					<div className={styles.menu} ref={menuRef}>
						{filter && (
							<div className={styles.filterToggle}>
								<label
									htmlFor='select-filter-dropdown'
									style={{
										fontWeight: 500,
										marginRight: 8,
									}}
								>
									Filter:
								</label>
								<select
									id='select-filter-dropdown'
									value={filterValue}
									onChange={(e) =>
										setFilterValue(e.target.value as any)
									}
									className={styles.filterDropdown}
								>
									<option value='none'>None</option>
									<option value='az'>A to Z</option>
									<option value='za'>Z to A</option>
									<option value='largest'>
										Largest to Smallest
									</option>
									<option value='smallest'>
										Smallest to Largest
									</option>
								</select>
							</div>
						)}
						{loading ?
							<Loading
								message={loadingMessage || 'Loading...'}
							/>
						: filteredOptions.length === 0 ?
							<div className={styles.noOptionsMessage}>
								No options
							</div>
						:	filteredOptions.map(
								(
									option: { label: string; value: string },
									idx: number
								) => {
									const isSelected =
										variant === 'multiselect' ?
											Array.isArray(currentValue) &&
											currentValue.includes(option.value)
										:	currentValue === option.value;
									return (
										<div
											key={option.value}
											className={classNames(styles.option, {
												[styles.selected]: isSelected,
											})}
											role='option'
											aria-selected={isSelected}
											onClick={() => handleSelect(option)}
										>
											{option.label}
										</div>
									);
								}
							)
						}
					</div>
				)}
				{error && (
					<div className={styles.errorText}>{error}</div>
				)}
				{helpText && (
					<div className={styles.helpText}>{helpText}</div>
				)}
			</Wrapper>
		);
	}
);

Select.displayName = 'Select';

export const FilterToggle = (props: {
	checked: boolean;
	onChange: (checked: boolean) => void;
}) => (
	<div
		style={{
			padding: '8px 16px',
			borderBottom: '1px solid #eee',
			background: '#f9fafb',
		}}
	>
		<label
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: 8,
			}}
		>
			<input
				type='checkbox'
				checked={props.checked}
				onChange={(e) => props.onChange(e.target.checked)}
				style={{ marginRight: 8 }}
			/>
			<span>Enable Filter</span>
		</label>
	</div>
);
