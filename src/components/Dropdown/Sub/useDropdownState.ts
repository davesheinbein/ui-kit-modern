import { useState, useCallback } from 'react';
import { DropdownOption } from './types';
import {
	isMultiSelect,
	normalizeValue,
	filterOptions,
} from './utils';

export function useDropdownState({
	value: controlledValue,
	defaultValue,
	data = [],
	onChange,
	onSearch,
	searchable,
	multi,
}: {
	value?: string | string[];
	defaultValue?: string | string[];
	data?: DropdownOption[];
	onChange: (value: string | string[]) => void;
	onSearch?: (search: string) => void;
	searchable?: boolean;
	multi: boolean;
}) {
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState('');
	const [uncontrolledValue, setUncontrolledValue] =
		useState<string | string[] | undefined>(defaultValue);

	const isControlled = controlledValue !== undefined;
	const value =
		isControlled ? controlledValue : uncontrolledValue;
	const selectedValues = normalizeValue(value, multi);

	const filteredOptions =
		searchable ? filterOptions(data, search) : data;

	const handleOpen = useCallback(() => setOpen(true), []);
	const handleClose = useCallback(() => setOpen(false), []);
	const handleToggle = useCallback(
		() => setOpen((o) => !o),
		[]
	);

	const handleSelect = useCallback(
		(val: string) => {
			let newValue: string | string[];
			if (multi) {
				if (selectedValues.includes(val)) {
					newValue = selectedValues.filter(
						(v) => v !== val
					);
				} else {
					newValue = [...selectedValues, val];
				}
			} else {
				newValue = val;
				handleClose();
			}
			if (!isControlled) setUncontrolledValue(newValue);
			onChange(newValue);
		},
		[
			multi,
			selectedValues,
			isControlled,
			onChange,
			handleClose,
		]
	);

	const handleClear = useCallback(() => {
		if (!isControlled)
			setUncontrolledValue(multi ? [] : '');
		onChange(multi ? [] : '');
	}, [multi, isControlled, onChange]);

	const handleSearch = useCallback(
		(val: string) => {
			setSearch(val);
			onSearch?.(val);
		},
		[onSearch]
	);

	return {
		open,
		setOpen,
		handleOpen,
		handleClose,
		handleToggle,
		search,
		setSearch: handleSearch,
		value,
		selectedValues,
		filteredOptions,
		handleSelect,
		handleClear,
	};
}
