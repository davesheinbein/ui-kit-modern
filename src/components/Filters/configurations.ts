// Filter option type
export interface FilterOption {
	label: string;
	value: string | number;
	disabled?: boolean;
}

// Filter configuration for a single filter
export interface FilterConfig {
	key: string;
	label: string;
	options: FilterOption[];
	mode?: FilterMode; // single or multi select
	defaultValue?: string | number | Array<string | number>;
	placeholder?: string;
	collapsible?: boolean;
	collapsed?: boolean;
	dynamic?: boolean;
	context?: boolean;
	[key: string]: any;
}

// Filter layout types
export type FilterLayout =
	| 'top'
	| 'side'
	| 'modal'
	| 'dynamic'
	| 'collapsible'
	| 'context';

// Filter selection mode
export type FilterMode = 'single' | 'multi';
