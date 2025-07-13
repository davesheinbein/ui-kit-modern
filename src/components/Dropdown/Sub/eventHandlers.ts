// Dropdown event handler utilities
// These are designed for maximum modularity and reuse in Dropdown.tsx
import { DropdownOption } from './types';

/**
 * Handles selecting an option (single or multi)
 */
export function handleOptionSelect({
	value,
	optionValue,
	multi,
	onChange,
}: {
	value: string | string[];
	optionValue: string;
	multi: boolean;
	onChange: (val: string | string[]) => void;
}) {
	if (multi) {
		const arr =
			Array.isArray(value) ? value
			: value ? [value]
			: [];
		if (arr.includes(optionValue)) {
			onChange(arr.filter((v) => v !== optionValue));
		} else {
			onChange([...arr, optionValue]);
		}
	} else {
		onChange(optionValue);
	}
}

/**
 * Handles clearing the selection
 */
export function handleClearSelection({
	multi,
	onChange,
}: {
	multi: boolean;
	onChange: (val: string | string[]) => void;
}) {
	onChange(multi ? [] : '');
}

/**
 * Handles toggling the dropdown open/close
 */
export function handleDropdownToggle({
	open,
	setOpen,
	disabled,
}: {
	open: boolean;
	setOpen: (open: boolean) => void;
	disabled?: boolean;
}) {
	if (!disabled) setOpen(!open);
}

/**
 * Handles search input changes
 */
export function handleSearchChange({
	value,
	setSearch,
	onSearch,
}: {
	value: string;
	setSearch: (val: string) => void;
	onSearch?: (val: string) => void;
}) {
	setSearch(value);
	if (onSearch) onSearch(value);
}

/**
 * Handles focus event
 */
export function handleFocus({
	setOpen,
	disabled,
}: {
	setOpen: (open: boolean) => void;
	disabled?: boolean;
}) {
	if (!disabled) setOpen(true);
}

/**
 * Handles blur event
 */
export function handleBlur({
	setOpen,
}: {
	setOpen: (open: boolean) => void;
}) {
	setOpen(false);
}

// Add more event handlers as needed for Dropdown modularity
