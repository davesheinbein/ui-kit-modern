/**
 * Select Configuration System
 *
 * Defines all select types, configurations, and presets for the DRY Select system.
 */

// Basic select types
export type SelectVariant =
	| 'dropdown'
	| 'multiselect'
	| 'searchable'
	| 'custom';

// Select size variants
export type SelectSize = 'small' | 'medium' | 'large';

// Select state variants
export type SelectState =
	| 'default'
	| 'focus'
	| 'error'
	| 'success'
	| 'disabled'
	| 'loading';

// Select styling variants
export type SelectStyle =
	| 'outlined'
	| 'filled'
	| 'underlined'
	| 'ghost'
	| 'minimal';

// Select placement options
export type SelectPlacement = 'bottom' | 'top' | 'auto';

// Select option structure
export interface SelectOption {
	label: string;
	value: string;
}

// Select option group structure
export interface SelectOptionGroup {
	label: string;
	options: SelectOption[];
}

// Predefined configurations
export const SELECT_CONFIGURATIONS: Record<
	ExtendedSelectKind,
	SelectConfiguration
> = {
	'dropdown': {
		variant: 'dropdown',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		placement: 'bottom',
		searchable: false,
		clearable: true,
		multiple: false,
		closeOnSelect: true,
		showSelectedCount: false,
		maxHeight: 200,
		placeholder: 'Select an option...',
		searchPlaceholder: 'Search...',
		noOptionsMessage: 'No options found',
		loadingMessage: 'Loading...',
		maxSelectedDisplay: 3,
		borderRadius: 'medium',
		animationDuration: 200,
		virtualized: false,
		required: false,
	},
	'multiselect': {
		variant: 'multiselect',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		placement: 'bottom',
		searchable: true,
		clearable: true,
		multiple: true,
		closeOnSelect: false,
		showSelectedCount: true,
		maxHeight: 200,
		placeholder: 'Select options...',
		searchPlaceholder: 'Search...',
		noOptionsMessage: 'No options found',
		loadingMessage: 'Loading...',
		maxSelectedDisplay: 2,
		borderRadius: 'medium',
		animationDuration: 200,
		virtualized: false,
		required: false,
	},
	'searchable-dropdown': {
		variant: 'searchable',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		placement: 'bottom',
		searchable: true,
		clearable: true,
		multiple: false,
		closeOnSelect: true,
		showSelectedCount: false,
		maxHeight: 250,
		placeholder: 'Select or search...',
		searchPlaceholder: 'Search options...',
		noOptionsMessage: 'No options found',
		loadingMessage: 'Loading...',
		maxSelectedDisplay: 3,
		borderRadius: 'medium',
		animationDuration: 200,
		virtualized: false,
		required: false,
	},
	'country-selector': {
		variant: 'searchable',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		placement: 'bottom',
		searchable: true,
		clearable: false,
		multiple: false,
		closeOnSelect: true,
		showSelectedCount: false,
		maxHeight: 200,
		placeholder: 'Select country...',
		searchPlaceholder: 'Search countries...',
		noOptionsMessage: 'No countries found',
		loadingMessage: 'Loading countries...',
		maxSelectedDisplay: 3,
		borderRadius: 'medium',
		animationDuration: 200,
		virtualized: true,
		required: false,
	},
	'timezone-selector': {
		variant: 'searchable',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		placement: 'bottom',
		searchable: true,
		clearable: false,
		multiple: false,
		closeOnSelect: true,
		showSelectedCount: false,
		maxHeight: 200,
		placeholder: 'Select timezone...',
		searchPlaceholder: 'Search timezones...',
		noOptionsMessage: 'No timezones found',
		loadingMessage: 'Loading timezones...',
		maxSelectedDisplay: 3,
		borderRadius: 'medium',
		animationDuration: 200,
		virtualized: true,
		required: false,
	},
	'language-selector': {
		variant: 'searchable',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		placement: 'bottom',
		searchable: true,
		clearable: false,
		multiple: false,
		closeOnSelect: true,
		showSelectedCount: false,
		maxHeight: 200,
		placeholder: 'Select language...',
		searchPlaceholder: 'Search languages...',
		noOptionsMessage: 'No languages found',
		loadingMessage: 'Loading languages...',
		maxSelectedDisplay: 3,
		borderRadius: 'medium',
		animationDuration: 200,
		virtualized: false,
		required: false,
	},
	'category-filter': {
		variant: 'multiselect',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		placement: 'bottom',
		searchable: true,
		clearable: true,
		multiple: true,
		closeOnSelect: false,
		showSelectedCount: true,
		maxHeight: 200,
		placeholder: 'Filter by category...',
		searchPlaceholder: 'Search categories...',
		noOptionsMessage: 'No categories found',
		loadingMessage: 'Loading categories...',
		maxSelectedDisplay: 2,
		borderRadius: 'medium',
		animationDuration: 200,
		virtualized: false,
		required: false,
	},
	'tag-selector': {
		variant: 'multiselect',
		size: 'medium',
		state: 'default',
		style: 'filled',
		placement: 'bottom',
		searchable: true,
		clearable: true,
		multiple: true,
		closeOnSelect: false,
		showSelectedCount: false,
		maxHeight: 150,
		placeholder: 'Add tags...',
		searchPlaceholder: 'Search or add tags...',
		noOptionsMessage: 'No tags found',
		loadingMessage: 'Loading tags...',
		maxSelectedDisplay: 5,
		borderRadius: 'small',
		animationDuration: 150,
		virtualized: false,
		required: false,
	},
	'user-picker': {
		variant: 'searchable',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		placement: 'bottom',
		searchable: true,
		clearable: true,
		multiple: false,
		closeOnSelect: true,
		showSelectedCount: false,
		maxHeight: 200,
		placeholder: 'Select user...',
		searchPlaceholder: 'Search users...',
		noOptionsMessage: 'No users found',
		loadingMessage: 'Searching users...',
		maxSelectedDisplay: 3,
		borderRadius: 'medium',
		animationDuration: 200,
		virtualized: false,
		required: false,
	},
	'date-range': {
		variant: 'dropdown',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		placement: 'bottom',
		searchable: false,
		clearable: true,
		multiple: false,
		closeOnSelect: true,
		showSelectedCount: false,
		maxHeight: 200,
		placeholder: 'Select date range...',
		searchPlaceholder: 'Search...',
		noOptionsMessage: 'No date ranges available',
		loadingMessage: 'Loading...',
		maxSelectedDisplay: 3,
		borderRadius: 'medium',
		animationDuration: 200,
		virtualized: false,
		required: false,
	},
	'custom': {
		variant: 'custom',
		size: 'medium',
		state: 'default',
		style: 'outlined',
		placement: 'bottom',
		searchable: true,
		clearable: true,
		multiple: false,
		closeOnSelect: true,
		showSelectedCount: false,
		maxHeight: 200,
		placeholder: 'Select...',
		searchPlaceholder: 'Search...',
		noOptionsMessage: 'No options found',
		loadingMessage: 'Loading...',
		maxSelectedDisplay: 3,
		borderRadius: 'medium',
		animationDuration: 200,
		virtualized: false,
		required: false,
	},
};
