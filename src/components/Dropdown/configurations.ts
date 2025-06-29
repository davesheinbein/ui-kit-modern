// Basic select types
export type SelectVariant =
	| 'dropdown'
	| 'multiselect'
	| 'searchable'
	| 'custom';

// Select size variants
export type SelectSize = 'small' | 'medium' | 'large';

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
