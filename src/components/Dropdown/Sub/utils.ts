// Dropdown utility/helper functions
export function isMultiSelect(variant: string) {
	return variant === 'multiselect';
}

export function normalizeValue(
	value: string | string[] | undefined,
	multi: boolean
): string[] {
	if (multi) {
		if (Array.isArray(value)) return value;
		if (typeof value === 'string')
			return value ? [value] : [];
		return [];
	}
	return typeof value === 'string' ? [value] : [];
}

export function filterOptions(
	options: any[],
	search: string
) {
	if (!search) return options;
	return options.filter((opt) =>
		opt.label.toLowerCase().includes(search.toLowerCase())
	);
}

export function getFilteredOptions({
	options,
	filter,
	filterValue,
	searchable,
	searchValue,
}: {
	options: any[];
	filter: boolean;
	filterValue: string;
	searchable: boolean;
	searchValue: string;
}) {
	let filtered = options;
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
	if (searchable && searchValue) {
		filtered = filtered.filter((opt) =>
			opt.label
				.toLowerCase()
				.includes(searchValue.toLowerCase())
		);
	}
	return { selected: [], rest: filtered };
}

export function getDisplayValue({
	variant,
	currentValue,
	options,
}: {
	variant: string;
	currentValue: string | string[];
	options: any[];
}) {
	if (
		variant === 'multiselect' &&
		Array.isArray(currentValue)
	) {
		return options
			.filter((opt) => currentValue.includes(opt.value))
			.map((opt) => opt.label)
			.join(', ');
	}
	const found = options.find(
		(opt) => opt.value === currentValue
	);
	return found ? found.label : '';
}
