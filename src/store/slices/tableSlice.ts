import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../index';

// Table state interfaces
export interface TableSorting {
	column: string;
	direction: 'asc' | 'desc';
}

export interface TableFilters {
	[key: string]: any;
}

export interface EditingCell {
	rowId: string | number;
	column: string;
}

interface TableComponentState {
	// Sorting state
	sorting: TableSorting;

	// Filtering state
	filters: TableFilters;
	searchTerm: string;

	// Selection state
	selectedRows: Set<string | number>;

	// Expansion state
	expandedRows: Set<string | number>;

	// Editing state
	editingCell: EditingCell | null;
}

interface TableState {
	// Per-component instance state (keyed by componentId)
	componentStates: Record<string, TableComponentState>;
}

const initialComponentState: TableComponentState = {
	sorting: { column: '', direction: 'asc' },
	filters: {},
	searchTerm: '',
	selectedRows: new Set(),
	expandedRows: new Set(),
	editingCell: null,
};

const initialState: TableState = {
	componentStates: {},
};

const tableSlice = createSlice({
	name: 'table',
	initialState,
	reducers: {
		// Component state management
		initializeComponentState: (
			state,
			action: PayloadAction<{
				componentId: string;
				initialState?: Partial<TableComponentState>;
			}>
		) => {
			const {
				componentId,
				initialState: componentInitial = {},
			} = action.payload;
			if (!state.componentStates[componentId]) {
				state.componentStates[componentId] = {
					...initialComponentState,
					...componentInitial,
				};
			}
		},

		// Sorting actions
		setSorting: (
			state,
			action: PayloadAction<{
				componentId: string;
				sorting: TableSorting;
			}>
		) => {
			const { componentId, sorting } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].sorting =
					sorting;
			}
		},

		// Filtering actions
		setFilters: (
			state,
			action: PayloadAction<{
				componentId: string;
				filters: TableFilters;
			}>
		) => {
			const { componentId, filters } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].filters =
					filters;
			}
		},

		updateFilter: (
			state,
			action: PayloadAction<{
				componentId: string;
				key: string;
				value: any;
			}>
		) => {
			const { componentId, key, value } = action.payload;
			if (state.componentStates[componentId]) {
				if (
					value === null ||
					value === undefined ||
					value === ''
				) {
					delete state.componentStates[componentId].filters[
						key
					];
				} else {
					state.componentStates[componentId].filters[key] =
						value;
				}
			}
		},

		setSearchTerm: (
			state,
			action: PayloadAction<{
				componentId: string;
				searchTerm: string;
			}>
		) => {
			const { componentId, searchTerm } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].searchTerm =
					searchTerm;
			}
		},

		// Selection actions
		setSelectedRows: (
			state,
			action: PayloadAction<{
				componentId: string;
				selectedRows: (string | number)[];
			}>
		) => {
			const { componentId, selectedRows } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].selectedRows =
					new Set(selectedRows);
			}
		},

		addSelectedRow: (
			state,
			action: PayloadAction<{
				componentId: string;
				rowId: string | number;
			}>
		) => {
			const { componentId, rowId } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].selectedRows.add(
					rowId
				);
			}
		},

		removeSelectedRow: (
			state,
			action: PayloadAction<{
				componentId: string;
				rowId: string | number;
			}>
		) => {
			const { componentId, rowId } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[
					componentId
				].selectedRows.delete(rowId);
			}
		},

		clearSelectedRows: (
			state,
			action: PayloadAction<{ componentId: string }>
		) => {
			const { componentId } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[
					componentId
				].selectedRows.clear();
			}
		},

		// Expansion actions
		setExpandedRows: (
			state,
			action: PayloadAction<{
				componentId: string;
				expandedRows: (string | number)[];
			}>
		) => {
			const { componentId, expandedRows } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].expandedRows =
					new Set(expandedRows);
			}
		},

		toggleRowExpansion: (
			state,
			action: PayloadAction<{
				componentId: string;
				rowId: string | number;
			}>
		) => {
			const { componentId, rowId } = action.payload;
			if (state.componentStates[componentId]) {
				const expandedRows =
					state.componentStates[componentId].expandedRows;
				if (expandedRows.has(rowId)) {
					expandedRows.delete(rowId);
				} else {
					expandedRows.add(rowId);
				}
			}
		},

		// Editing actions
		setEditingCell: (
			state,
			action: PayloadAction<{
				componentId: string;
				editingCell: EditingCell | null;
			}>
		) => {
			const { componentId, editingCell } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].editingCell =
					editingCell;
			}
		},

		clearEditingCell: (
			state,
			action: PayloadAction<{ componentId: string }>
		) => {
			const { componentId } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].editingCell =
					null;
			}
		},

		// Cleanup
		removeComponentState: (
			state,
			action: PayloadAction<{ componentId: string }>
		) => {
			const { componentId } = action.payload;
			delete state.componentStates[componentId];
		},

		clearAllComponentStates: (state) => {
			state.componentStates = {};
		},

		// Reset actions
		resetTableState: (
			state,
			action: PayloadAction<{ componentId: string }>
		) => {
			const { componentId } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId] = {
					...initialComponentState,
				};
			}
		},
	},
});

export const {
	initializeComponentState,
	setSorting,
	setFilters,
	updateFilter,
	setSearchTerm,
	setSelectedRows,
	addSelectedRow,
	removeSelectedRow,
	clearSelectedRows,
	setExpandedRows,
	toggleRowExpansion,
	setEditingCell,
	clearEditingCell,
	removeComponentState,
	clearAllComponentStates,
	resetTableState,
} = tableSlice.actions;

// Selectors
export const selectTableComponentState = (
	state: RootState,
	componentId: string
): TableComponentState | undefined =>
	state.table.componentStates[componentId];

export const selectTableSorting = (
	state: RootState,
	componentId: string
): TableSorting =>
	state.table.componentStates[componentId]?.sorting ||
	initialComponentState.sorting;

export const selectTableFilters = (
	state: RootState,
	componentId: string
): TableFilters =>
	state.table.componentStates[componentId]?.filters || {};

export const selectTableSearchTerm = (
	state: RootState,
	componentId: string
): string =>
	state.table.componentStates[componentId]?.searchTerm ||
	'';

export const selectTableSelectedRows = (
	state: RootState,
	componentId: string
): Set<string | number> =>
	state.table.componentStates[componentId]?.selectedRows ||
	new Set();

export const selectTableExpandedRows = (
	state: RootState,
	componentId: string
): Set<string | number> =>
	state.table.componentStates[componentId]?.expandedRows ||
	new Set();

export const selectTableEditingCell = (
	state: RootState,
	componentId: string
): EditingCell | null =>
	state.table.componentStates[componentId]?.editingCell ||
	null;

export const selectIsRowSelected = (
	state: RootState,
	componentId: string,
	rowId: string | number
): boolean =>
	state.table.componentStates[
		componentId
	]?.selectedRows.has(rowId) || false;

export const selectIsRowExpanded = (
	state: RootState,
	componentId: string,
	rowId: string | number
): boolean =>
	state.table.componentStates[
		componentId
	]?.expandedRows.has(rowId) || false;

export const selectSelectedRowsCount = (
	state: RootState,
	componentId: string
): number =>
	state.table.componentStates[componentId]?.selectedRows
		.size || 0;

export default tableSlice.reducer;
