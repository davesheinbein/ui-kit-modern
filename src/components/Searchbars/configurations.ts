// ========================================
// Searchbar Types and Configuration
// ========================================

export type SearchbarVariant =
	| 'default'
	| 'minimal'
	| 'outlined'
	| 'filled'
	| 'underlined';
export type SearchbarSize = 'small' | 'medium' | 'large';

export interface SearchbarConfiguration {
	variant?: SearchbarVariant;
	size?: SearchbarSize;
	placeholder?: string;
	disabled?: boolean;
	loading?: boolean;
	clearable?: boolean;
	autoFocus?: boolean;
	debounce?: number; // ms
	icon?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export interface SearchbarProps
	extends SearchbarConfiguration {
	'value'?: string;
	'defaultValue'?: string;
	'onChange'?: (value: string) => void;
	'onSearch'?: (value: string) => void;
	'onClear'?: () => void;
	'name'?: string;
	'id'?: string;
	'aria-label'?: string;
}
