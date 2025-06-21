/**
 * TableConfigurations.ts - DRY Table Configuration System
 *
 * This file provides comprehensive configuration for all table component types
 * including data tables, grid tables, skeleton tables, and specialized displays.
 */

// ========================================
// Core Types and Interfaces
// ========================================

export type TableKind =
	// Basic Tables
	| 'data-table'
	| 'simple-table'
	| 'sortable-table'
	| 'filterable-table'

	// Advanced Tables
	| 'data-grid'
	| 'editable-grid'
	| 'selectable-grid'
	| 'expandable-grid'

	// Loading States
	| 'skeleton-table'
	| 'loading-table'

	// Specialized Tables
	| 'pricing-table'
	| 'comparison-table'
	| 'stats-table'
	| 'leaderboard-table';

export type TableVariant =
	| 'default'
	| 'minimal'
	| 'striped'
	| 'bordered'
	| 'compact'
	| 'spacious'
	| 'modern'
	| 'glass';

export type TableLayout = 'fixed' | 'auto' | 'responsive';

export type TableSorting = {
	column: string;
	direction: 'asc' | 'desc' | 'none';
};

export type TableColumn = {
	key: string;
	label: string;
	sortable?: boolean;
	filterable?: boolean;
	width?: string | number;
	minWidth?: string | number;
	maxWidth?: string | number;
	align?: 'left' | 'center' | 'right';
	type?:
		| 'text'
		| 'number'
		| 'date'
		| 'boolean'
		| 'currency'
		| 'custom';
	format?: (value: any) => React.ReactNode;
	cellRenderer?: (
		value: any,
		row: any,
		column: TableColumn
	) => React.ReactNode;
};

export type TableRow = {
	id: string | number;
	[key: string]: any;
	selected?: boolean;
	expanded?: boolean;
	disabled?: boolean;
};

export type TableFilter = {
	column: string;
	value: any;
	operator?:
		| 'equals'
		| 'contains'
		| 'startsWith'
		| 'endsWith'
		| 'greaterThan'
		| 'lessThan';
};

export type TablePagination = {
	page: number;
	pageSize: number;
	total: number;
	showSizeSelector?: boolean;
	pageSizeOptions?: number[];
};

// ========================================
// Configuration Interface
// ========================================

export interface TableConfiguration {
	kind: TableKind;
	variant?: TableVariant;
	layout?: TableLayout;

	// Core table props
	columns?: TableColumn[];
	data?: TableRow[];
	keyField?: string;

	// Features
	sortable?: boolean;
	filterable?: boolean;
	selectable?: boolean;
	expandable?: boolean;
	editable?: boolean;

	// Sorting
	defaultSort?: TableSorting;
	multiSort?: boolean;

	// Filtering
	defaultFilters?: TableFilter[];
	searchable?: boolean;
	searchPlaceholder?: string;

	// Pagination
	pagination?: TablePagination | boolean;

	// Selection
	selectionMode?: 'single' | 'multiple' | 'none';
	selectedRows?: (string | number)[];

	// Expansion
	expandableRows?: boolean;
	defaultExpanded?: (string | number)[];

	// Loading states
	loading?: boolean;
	loadingRows?: number;

	// Styling
	height?: string | number;
	maxHeight?: string | number;
	minHeight?: string | number;
	stickyHeader?: boolean;
	zebraStripes?: boolean;
	borderStyle?: 'none' | 'horizontal' | 'vertical' | 'all';

	// Behavior
	clickableRows?: boolean;
	hoverEffects?: boolean;

	// Callbacks
	onSort?: (sorting: TableSorting) => void;
	onFilter?: (filters: TableFilter[]) => void;
	onSelect?: (selectedRows: (string | number)[]) => void;
	onRowClick?: (row: TableRow, index: number) => void;
	onRowDoubleClick?: (row: TableRow, index: number) => void;
	onCellEdit?: (
		rowId: string | number,
		column: string,
		value: any
	) => void;
	onExpand?: (
		rowId: string | number,
		expanded: boolean
	) => void;

	// Custom styling
	className?: string;
	headerClassName?: string;
	bodyClassName?: string;
	rowClassName?:
		| string
		| ((row: TableRow, index: number) => string);
	cellClassName?:
		| string
		| ((
				value: any,
				row: TableRow,
				column: TableColumn
		  ) => string);
}

// ========================================
// Configuration Registry
// ========================================

export const TABLE_CONFIGURATIONS: Record<
	TableKind,
	TableConfiguration
> = {
	// Basic Tables
	'data-table': {
		kind: 'data-table',
		variant: 'default',
		layout: 'auto',
		sortable: true,
		filterable: false,
		selectable: false,
		hoverEffects: true,
		stickyHeader: false,
	},

	'simple-table': {
		kind: 'simple-table',
		variant: 'minimal',
		layout: 'auto',
		sortable: false,
		filterable: false,
		selectable: false,
		hoverEffects: false,
	},

	'sortable-table': {
		kind: 'sortable-table',
		variant: 'default',
		layout: 'auto',
		sortable: true,
		multiSort: false,
		hoverEffects: true,
		stickyHeader: false,
	},

	'filterable-table': {
		kind: 'filterable-table',
		variant: 'default',
		layout: 'responsive',
		sortable: true,
		filterable: true,
		searchable: true,
		searchPlaceholder: 'Search...',
		hoverEffects: true,
	},

	// Advanced Tables
	'data-grid': {
		kind: 'data-grid',
		variant: 'modern',
		layout: 'fixed',
		sortable: true,
		filterable: true,
		selectable: true,
		selectionMode: 'multiple',
		pagination: true,
		stickyHeader: true,
		hoverEffects: true,
		borderStyle: 'all',
	},

	'editable-grid': {
		kind: 'editable-grid',
		variant: 'bordered',
		layout: 'fixed',
		sortable: true,
		filterable: true,
		editable: true,
		selectable: true,
		selectionMode: 'single',
		hoverEffects: true,
		clickableRows: true,
	},

	'selectable-grid': {
		kind: 'selectable-grid',
		variant: 'striped',
		layout: 'auto',
		sortable: true,
		selectable: true,
		selectionMode: 'multiple',
		hoverEffects: true,
		borderStyle: 'horizontal',
	},

	'expandable-grid': {
		kind: 'expandable-grid',
		variant: 'default',
		layout: 'auto',
		sortable: true,
		expandable: true,
		expandableRows: true,
		hoverEffects: true,
		clickableRows: true,
	},

	// Loading States
	'skeleton-table': {
		kind: 'skeleton-table',
		variant: 'minimal',
		layout: 'auto',
		loading: true,
		loadingRows: 5,
		sortable: false,
		filterable: false,
		selectable: false,
	},

	'loading-table': {
		kind: 'loading-table',
		variant: 'default',
		layout: 'auto',
		loading: true,
		sortable: false,
		filterable: false,
		selectable: false,
	},

	// Specialized Tables
	'pricing-table': {
		kind: 'pricing-table',
		variant: 'modern',
		layout: 'fixed',
		sortable: false,
		filterable: false,
		selectable: false,
		borderStyle: 'all',
		hoverEffects: true,
	},

	'comparison-table': {
		kind: 'comparison-table',
		variant: 'bordered',
		layout: 'auto',
		sortable: true,
		filterable: false,
		selectable: false,
		stickyHeader: true,
		borderStyle: 'all',
	},

	'stats-table': {
		kind: 'stats-table',
		variant: 'compact',
		layout: 'auto',
		sortable: true,
		filterable: false,
		selectable: false,
		zebraStripes: true,
		hoverEffects: true,
	},

	'leaderboard-table': {
		kind: 'leaderboard-table',
		variant: 'spacious',
		layout: 'auto',
		sortable: true,
		filterable: true,
		searchable: true,
		selectable: false,
		hoverEffects: true,
		pagination: true,
	},
};

// ========================================
// Helper Functions
// ========================================

/**
 * Get table configuration by kind
 */
export const getTableConfig = (
	kind: TableKind
): TableConfiguration => {
	return (
		TABLE_CONFIGURATIONS[kind] ||
		TABLE_CONFIGURATIONS['data-table']
	);
};

/**
 * Merge table configurations
 */
export const mergeTableConfig = (
	base: TableConfiguration,
	override: Partial<TableConfiguration>
): TableConfiguration => {
	return {
		...base,
		...override,
		columns: override.columns || base.columns,
		data: override.data || base.data,
	};
};

/**
 * Create custom table configuration
 */
export const createTableConfig = (
	kind: TableKind,
	overrides: Partial<TableConfiguration> = {}
): TableConfiguration => {
	const baseConfig = getTableConfig(kind);
	return mergeTableConfig(baseConfig, overrides);
};

/**
 * Validate table configuration
 */
export const validateTableConfig = (
	config: TableConfiguration
): string[] => {
	const errors: string[] = [];

	if (!config.kind) {
		errors.push('Table kind is required');
	}

	if (
		config.pagination &&
		typeof config.pagination === 'object'
	) {
		const pag = config.pagination as TablePagination;
		if (pag.page < 1) {
			errors.push('Pagination page must be >= 1');
		}
		if (pag.pageSize < 1) {
			errors.push('Pagination pageSize must be >= 1');
		}
	}

	if (config.selectable && !config.selectionMode) {
		errors.push(
			'Selection mode required when selectable is true'
		);
	}

	return errors;
};
