import React, {
	useState,
	useRef,
	useEffect,
	useCallback,
} from 'react';
import type { SearchbarProps } from './configurations';
import styles from './searchbars.module.scss';

const Searchbar: React.FC<SearchbarProps> = ({
	'value': controlledValue,
	defaultValue = '',
	onChange,
	onSearch,
	onClear,
	placeholder = 'Search...',
	variant = 'default',
	size = 'medium',
	disabled = false,
	loading = false,
	clearable = false,
	autoFocus = false,
	debounce = 0,
	icon,
	className = '',
	style,
	name,
	id,
	'aria-label': ariaLabel,
	...rest
}) => {
	const [value, setValue] = useState(
		controlledValue ?? defaultValue
	);
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const debounceTimeout = useRef<NodeJS.Timeout | null>(
		null
	);

	// Sync controlled value
	useEffect(() => {
		if (controlledValue !== undefined)
			setValue(controlledValue);
	}, [controlledValue]);

	// Debounced search
	useEffect(() => {
		if (debounce > 0 && onSearch) {
			if (debounceTimeout.current)
				clearTimeout(debounceTimeout.current);
			debounceTimeout.current = setTimeout(() => {
				onSearch(value);
			}, debounce);
			return () => {
				if (debounceTimeout.current)
					clearTimeout(debounceTimeout.current);
			};
		}
		return undefined;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const handleInput = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setValue(e.target.value);
		onChange?.(e.target.value);
		if (!debounce && onSearch) onSearch(e.target.value);
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === 'Enter' && onSearch) {
			onSearch(value);
		}
	};

	const handleClear = useCallback(() => {
		setValue('');
		onChange?.('');
		onClear?.();
		if (onSearch) onSearch('');
		inputRef.current?.focus();
	}, [onChange, onClear, onSearch]);

	const containerClass = [
		styles.searchbarContainer,
		styles[`variant-${variant}`],
		styles[`size-${size}`],
		disabled && 'disabled',
		loading && 'loading',
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<div className={containerClass} style={style}>
			{icon && <span className={styles.icon}>{icon}</span>}
			<input
				ref={inputRef}
				className={styles.searchbarInput}
				type='search'
				value={value}
				onChange={handleInput}
				onKeyDown={handleKeyDown}
				placeholder={placeholder}
				disabled={disabled}
				autoFocus={autoFocus}
				name={name}
				id={id}
				aria-label={ariaLabel || placeholder}
				{...rest}
			/>
			{clearable && value && !loading && (
				<button
					type='button'
					className={styles.clearButton}
					onClick={handleClear}
					aria-label='Clear search'
				>
					×
				</button>
			)}
			{loading && (
				<span className={styles.loadingSpinner}>⏳</span>
			)}
		</div>
	);
};

export default Searchbar;
