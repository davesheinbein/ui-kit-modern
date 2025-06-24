/**
 * UI Slice - UI Domain State Management
 *
 * Responsible for:
 * - Component loading states
 * - Form data and validation
 * - UI interactions (drag/drop, hover, focus)
 * - Component-specific state
 *
 * Separated from business logic - focuses only on UI concerns
 */

import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';

// Component state interfaces
export interface TableState {
	[tableId: string]: {
		sorting: {
			field: string | null;
			direction: 'asc' | 'desc';
		};
		filters: Record<string, any>;
		searchTerm: string;
		selectedRows: string[];
		expandedRows: string[];
		editingCell: {
			rowId: string;
			columnId: string;
		} | null;
		currentPage: number;
		pageSize: number;
	};
}

export interface FormState {
	[formId: string]: {
		data: Record<string, any>;
		errors: Record<string, string>;
		touched: Record<string, boolean>;
		isSubmitting: boolean;
		isDirty: boolean;
		isValid: boolean;
	};
}

export interface ComponentState {
	[componentId: string]: {
		isLoading: boolean;
		isVisible: boolean;
		isExpanded: boolean;
		isDragging: boolean;
		isHovered: boolean;
		isFocused: boolean;
		error: string | null;
		data: any;
	};
}

export interface UIState {
	// Global UI state
	isLoading: boolean;
	globalError: string | null;

	// Drag and drop
	dragState: {
		isDragging: boolean;
		draggedItem: any;
		dropZone: string | null;
	};

	// Component states
	tables: TableState;
	forms: FormState;
	components: ComponentState;

	// Input states
	inputs: {
		[inputId: string]: {
			value: any;
			error: string | null;
			isFocused: boolean;
			isValid: boolean;
		};
	};

	// Switch states
	switches: {
		[switchId: string]: {
			checked: boolean;
			disabled: boolean;
		};
	};

	// Media states
	media: {
		[mediaId: string]: {
			isLoading: boolean;
			hasError: boolean;
			isPlaying: boolean;
			hasLoaded: boolean;
		};
	};

	// Chart states
	charts: {
		[chartId: string]: {
			selectedSeries: string[];
			searchTerm: string;
			isInteractive: boolean;
			allowMultiSelect: boolean;
		};
	};

	// Notification component states (for individual notification instances)
	notifications: {
		[notificationId: string]: {
			isVisible: boolean;
			isPaused: boolean;
			progress: number;
		};
	};

	// Select component states
	selects: {
		[selectId: string]: {
			internalValue: string | string[];
			isOpen: boolean;
			searchValue: string;
			focusedIndex: number;
		};
	};

	// Radio component states
	radios: {
		[radioId: string]: {
			internalValue: string | undefined;
		};
	};

	// Map component states
	maps: {
		[mapId: string]: {
			currentZoom: number;
			currentCenter: { lat: number; lng: number };
		};
	};

	// Card component states
	cards: {
		[cardId: string]: {
			isHovered: boolean;
		};
	};

	// Range component states
	ranges: {
		[rangeId: string]: {
			value: number | number[];
			isDragging: boolean;
			showTooltip: boolean;
		};
	};

	// Chat component states
	chats: {
		[chatId: string]: {
			inputValue: string;
		};
	};
}

const initialState: UIState = {
	// Global
	isLoading: false,
	globalError: null,

	// Drag and drop
	dragState: {
		isDragging: false,
		draggedItem: null,
		dropZone: null,
	},

	// Component collections
	tables: {},
	forms: {},
	components: {},
	inputs: {},
	switches: {},
	media: {},
	charts: {},
	notifications: {},
	selects: {},
	radios: {},
	maps: {},
	cards: {},
	ranges: {},
	chats: {},
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		// Global UI actions
		setGlobalLoading: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.isLoading = action.payload;
		},

		setGlobalError: (
			state,
			action: PayloadAction<string | null>
		) => {
			state.globalError = action.payload;
		},

		clearGlobalError: (state) => {
			state.globalError = null;
		},

		// Drag and drop actions
		startDrag: (
			state,
			action: PayloadAction<{
				item: any;
				dropZone?: string;
			}>
		) => {
			state.dragState.isDragging = true;
			state.dragState.draggedItem = action.payload.item;
			state.dragState.dropZone =
				action.payload.dropZone || null;
		},

		endDrag: (state) => {
			state.dragState.isDragging = false;
			state.dragState.draggedItem = null;
			state.dragState.dropZone = null;
		},

		setDropZone: (
			state,
			action: PayloadAction<string | null>
		) => {
			state.dragState.dropZone = action.payload;
		},

		// Table actions
		initializeTable: (
			state,
			action: PayloadAction<{
				tableId: string;
				config?: Partial<TableState[string]>;
			}>
		) => {
			const { tableId, config = {} } = action.payload;
			state.tables[tableId] = {
				sorting: { field: null, direction: 'asc' },
				filters: {},
				searchTerm: '',
				selectedRows: [],
				expandedRows: [],
				editingCell: null,
				currentPage: 1,
				pageSize: 10,
				...config,
			};
		},

		updateTableSorting: (
			state,
			action: PayloadAction<{
				tableId: string;
				field: string;
				direction: 'asc' | 'desc';
			}>
		) => {
			const { tableId, field, direction } = action.payload;
			if (state.tables[tableId]) {
				state.tables[tableId].sorting = {
					field,
					direction,
				};
			}
		},

		updateTableFilters: (
			state,
			action: PayloadAction<{
				tableId: string;
				filters: Record<string, any>;
			}>
		) => {
			const { tableId, filters } = action.payload;
			if (state.tables[tableId]) {
				state.tables[tableId].filters = {
					...state.tables[tableId].filters,
					...filters,
				};
			}
		},

		setTableSearchTerm: (
			state,
			action: PayloadAction<{
				tableId: string;
				searchTerm: string;
			}>
		) => {
			const { tableId, searchTerm } = action.payload;
			if (state.tables[tableId]) {
				state.tables[tableId].searchTerm = searchTerm;
			}
		},

		toggleTableRowSelection: (
			state,
			action: PayloadAction<{
				tableId: string;
				rowId: string;
			}>
		) => {
			const { tableId, rowId } = action.payload;
			if (state.tables[tableId]) {
				const selectedRows =
					state.tables[tableId].selectedRows;
				const index = selectedRows.indexOf(rowId);
				if (index > -1) {
					selectedRows.splice(index, 1);
				} else {
					selectedRows.push(rowId);
				}
			}
		},

		// Form actions
		initializeForm: (
			state,
			action: PayloadAction<{
				formId: string;
				initialData?: Record<string, any>;
			}>
		) => {
			const { formId, initialData = {} } = action.payload;
			state.forms[formId] = {
				data: initialData,
				errors: {},
				touched: {},
				isSubmitting: false,
				isDirty: false,
				isValid: true,
			};
		},

		updateForms: (
			state,
			action: PayloadAction<{
				formId: string;
				field: string;
				value: any;
			}>
		) => {
			const { formId, field, value } = action.payload;
			if (state.forms[formId]) {
				state.forms[formId].data[field] = value;
				state.forms[formId].touched[field] = true;
				state.forms[formId].isDirty = true;
			}
		},

		setFormError: (
			state,
			action: PayloadAction<{
				formId: string;
				field: string;
				error: string;
			}>
		) => {
			const { formId, field, error } = action.payload;
			if (state.forms[formId]) {
				state.forms[formId].errors[field] = error;
				state.forms[formId].isValid =
					Object.keys(state.forms[formId].errors).length ===
					0;
			}
		},

		clearFormErrors: (
			state,
			action: PayloadAction<{
				formId: string;
				field?: string;
			}>
		) => {
			const { formId, field } = action.payload;
			if (state.forms[formId]) {
				if (field) {
					delete state.forms[formId].errors[field];
				} else {
					state.forms[formId].errors = {};
				}
				state.forms[formId].isValid =
					Object.keys(state.forms[formId].errors).length ===
					0;
			}
		},

		setFormSubmitting: (
			state,
			action: PayloadAction<{
				formId: string;
				isSubmitting: boolean;
			}>
		) => {
			const { formId, isSubmitting } = action.payload;
			if (state.forms[formId]) {
				state.forms[formId].isSubmitting = isSubmitting;
			}
		},

		// Generic component actions
		setComponentState: (
			state,
			action: PayloadAction<{
				componentId: string;
				updates: Partial<ComponentState[string]>;
			}>
		) => {
			const { componentId, updates } = action.payload;
			if (!state.components[componentId]) {
				state.components[componentId] = {
					isLoading: false,
					isVisible: true,
					isExpanded: false,
					isDragging: false,
					isHovered: false,
					isFocused: false,
					error: null,
					data: null,
				};
			}
			state.components[componentId] = {
				...state.components[componentId],
				...updates,
			};
		},

		// Input actions
		setInputValue: (
			state,
			action: PayloadAction<{
				inputId: string;
				value: any;
				error?: string | null;
			}>
		) => {
			const {
				inputId,
				value,
				error = null,
			} = action.payload;
			state.inputs[inputId] = {
				...state.inputs[inputId],
				value,
				error,
				isValid: !error,
			};
		},

		setInputFocus: (
			state,
			action: PayloadAction<{
				inputId: string;
				isFocused: boolean;
			}>
		) => {
			const { inputId, isFocused } = action.payload;
			if (!state.inputs[inputId]) {
				state.inputs[inputId] = {
					value: '',
					error: null,
					isFocused: false,
					isValid: true,
				};
			}
			state.inputs[inputId].isFocused = isFocused;
		},

		// Switch actions
		setSwitchState: (
			state,
			action: PayloadAction<{
				switchId: string;
				checked: boolean;
				disabled?: boolean;
			}>
		) => {
			const {
				switchId,
				checked,
				disabled = false,
			} = action.payload;
			state.switches[switchId] = { checked, disabled };
		},

		// Media actions
		setMediaState: (
			state,
			action: PayloadAction<{
				mediaId: string;
				updates: Partial<UIState['media'][string]>;
			}>
		) => {
			const { mediaId, updates } = action.payload;
			if (!state.media[mediaId]) {
				state.media[mediaId] = {
					isLoading: false,
					hasError: false,
					isPlaying: false,
					hasLoaded: false,
				};
			}
			state.media[mediaId] = {
				...state.media[mediaId],
				...updates,
			};
		},

		// Chart actions
		initializeChart: (
			state,
			action: PayloadAction<{
				chartId: string;
				selectedSeries: string[];
				isInteractive?: boolean;
				allowMultiSelect?: boolean;
			}>
		) => {
			const {
				chartId,
				selectedSeries,
				isInteractive = true,
				allowMultiSelect = true,
			} = action.payload;
			state.charts[chartId] = {
				selectedSeries,
				searchTerm: '',
				isInteractive,
				allowMultiSelect,
			};
		},

		setChartSelectedSeries: (
			state,
			action: PayloadAction<{
				chartId: string;
				selectedSeries: string[];
			}>
		) => {
			const { chartId, selectedSeries } = action.payload;
			if (state.charts[chartId]) {
				state.charts[chartId].selectedSeries =
					selectedSeries;
			}
		},

		setChartSearchTerm: (
			state,
			action: PayloadAction<{
				chartId: string;
				searchTerm: string;
			}>
		) => {
			const { chartId, searchTerm } = action.payload;
			if (state.charts[chartId]) {
				state.charts[chartId].searchTerm = searchTerm;
			}
		},

		toggleChartSeries: (
			state,
			action: PayloadAction<{
				chartId: string;
				seriesId: string;
			}>
		) => {
			const { chartId, seriesId } = action.payload;
			if (state.charts[chartId]) {
				const chart = state.charts[chartId];
				const isSelected =
					chart.selectedSeries.includes(seriesId);

				if (chart.allowMultiSelect) {
					if (isSelected) {
						chart.selectedSeries =
							chart.selectedSeries.filter(
								(id) => id !== seriesId
							);
					} else {
						chart.selectedSeries = [
							...chart.selectedSeries,
							seriesId,
						];
					}
				} else {
					chart.selectedSeries =
						isSelected ? [] : [seriesId];
				}
			}
		},

		selectAllChartSeries: (
			state,
			action: PayloadAction<{
				chartId: string;
				allSeriesIds: string[];
			}>
		) => {
			const { chartId, allSeriesIds } = action.payload;
			if (state.charts[chartId]) {
				const chart = state.charts[chartId];
				const allSelected = allSeriesIds.every((id) =>
					chart.selectedSeries.includes(id)
				);
				chart.selectedSeries =
					allSelected ? [] : allSeriesIds;
			}
		},

		// Notification component actions
		setNotificationState: (
			state,
			action: PayloadAction<{
				notificationId: string;
				updates: Partial<UIState['notifications'][string]>;
			}>
		) => {
			const { notificationId, updates } = action.payload;
			if (!state.notifications[notificationId]) {
				state.notifications[notificationId] = {
					isVisible: false,
					isPaused: false,
					progress: 100,
				};
			}
			state.notifications[notificationId] = {
				...state.notifications[notificationId],
				...updates,
			};
		},

		// Select component actions
		setSelectState: (
			state,
			action: PayloadAction<{
				selectId: string;
				updates: Partial<UIState['selects'][string]>;
			}>
		) => {
			const { selectId, updates } = action.payload;
			if (!state.selects[selectId]) {
				state.selects[selectId] = {
					internalValue: '',
					isOpen: false,
					searchValue: '',
					focusedIndex: -1,
				};
			}
			state.selects[selectId] = {
				...state.selects[selectId],
				...updates,
			};
		},

		// Radio component actions
		setRadioState: (
			state,
			action: PayloadAction<{
				radioId: string;
				updates: Partial<UIState['radios'][string]>;
			}>
		) => {
			const { radioId, updates } = action.payload;
			if (!state.radios[radioId]) {
				state.radios[radioId] = {
					internalValue: undefined,
				};
			}
			state.radios[radioId] = {
				...state.radios[radioId],
				...updates,
			};
		},

		// Map component actions
		setMapState: (
			state,
			action: PayloadAction<{
				mapId: string;
				updates: Partial<UIState['maps'][string]>;
			}>
		) => {
			const { mapId, updates } = action.payload;
			if (!state.maps[mapId]) {
				state.maps[mapId] = {
					currentZoom: 1,
					currentCenter: { lat: 0, lng: 0 },
				};
			}
			state.maps[mapId] = {
				...state.maps[mapId],
				...updates,
			};
		},

		// Card component actions
		setCardState: (
			state,
			action: PayloadAction<{
				cardId: string;
				updates: Partial<UIState['cards'][string]>;
			}>
		) => {
			const { cardId, updates } = action.payload;
			if (!state.cards[cardId]) {
				state.cards[cardId] = {
					isHovered: false,
				};
			}
			state.cards[cardId] = {
				...state.cards[cardId],
				...updates,
			};
		},

		// Range component actions
		setRangeState: (
			state,
			action: PayloadAction<{
				rangeId: string;
				updates: Partial<UIState['ranges'][string]>;
			}>
		) => {
			const { rangeId, updates } = action.payload;
			if (!state.ranges[rangeId]) {
				state.ranges[rangeId] = {
					value: 0,
					isDragging: false,
					showTooltip: false,
				};
			}
			state.ranges[rangeId] = {
				...state.ranges[rangeId],
				...updates,
			};
		},

		// Chat component actions
		setChatState: (
			state,
			action: PayloadAction<{
				chatId: string;
				updates: Partial<UIState['chats'][string]>;
			}>
		) => {
			const { chatId, updates } = action.payload;
			if (!state.chats[chatId]) {
				state.chats[chatId] = {
					inputValue: '',
				};
			}
			state.chats[chatId] = {
				...state.chats[chatId],
				...updates,
			};
		},

		// Cleanup actions
		cleanupComponent: (
			state,
			action: PayloadAction<string>
		) => {
			const componentId = action.payload;
			delete state.components[componentId];
			delete state.inputs[componentId];
			delete state.switches[componentId];
			delete state.media[componentId];
			delete state.charts[componentId];
			delete state.notifications[componentId];
			delete state.selects[componentId];
			delete state.radios[componentId];
			delete state.maps[componentId];
			delete state.cards[componentId];
			delete state.ranges[componentId];
			delete state.chats[componentId];
		},

		cleanupForm: (state, action: PayloadAction<string>) => {
			const formId = action.payload;
			delete state.forms[formId];
		},

		cleanupTable: (
			state,
			action: PayloadAction<string>
		) => {
			const tableId = action.payload;
			delete state.tables[tableId];
		},

		cleanupChart: (
			state,
			action: PayloadAction<string>
		) => {
			const chartId = action.payload;
			delete state.charts[chartId];
		},
	},
});

// Export actions
export const {
	setGlobalLoading,
	setGlobalError,
	clearGlobalError,
	startDrag,
	endDrag,
	setDropZone,
	initializeTable,
	updateTableSorting,
	updateTableFilters,
	setTableSearchTerm,
	toggleTableRowSelection,
	initializeForm,
	updateForms,
	setFormError,
	clearFormErrors,
	setFormSubmitting,
	setComponentState,
	setInputValue,
	setInputFocus,
	setSwitchState,
	setMediaState,
	setNotificationState,
	setSelectState,
	setRadioState,
	setMapState,
	setCardState,
	setRangeState,
	setChatState,
	initializeChart,
	setChartSelectedSeries,
	setChartSearchTerm,
	toggleChartSeries,
	selectAllChartSeries,
	cleanupComponent,
	cleanupForm,
	cleanupTable,
	cleanupChart,
} = uiSlice.actions;

// Selectors
export const selectUI = (state: { ui: UIState }) =>
	state.ui;
export const selectGlobalLoading = (state: {
	ui: UIState;
}) => state.ui.isLoading;
export const selectGlobalError = (state: { ui: UIState }) =>
	state.ui.globalError;
export const selectDragState = (state: { ui: UIState }) =>
	state.ui.dragState;
export const selectTableState =
	(tableId: string) => (state: { ui: UIState }) =>
		state.ui.tables[tableId];
export const selectFormState =
	(formId: string) => (state: { ui: UIState }) =>
		state.ui.forms[formId];
export const selectComponentState =
	(componentId: string) => (state: { ui: UIState }) =>
		state.ui.components[componentId];
export const selectInputState =
	(inputId: string) => (state: { ui: UIState }) =>
		state.ui.inputs[inputId];
export const selectSwitchState =
	(switchId: string) => (state: { ui: UIState }) =>
		state.ui.switches[switchId];
export const selectMediaState =
	(mediaId: string) => (state: { ui: UIState }) =>
		state.ui.media[mediaId];
export const selectNotificationState =
	(notificationId: string) => (state: { ui: UIState }) =>
		state.ui.notifications[notificationId];
export const selectSelectState =
	(selectId: string) => (state: { ui: UIState }) =>
		state.ui.selects[selectId];
export const selectRadioState =
	(radioId: string) => (state: { ui: UIState }) =>
		state.ui.radios[radioId];
export const selectMapState =
	(mapId: string) => (state: { ui: UIState }) =>
		state.ui.maps[mapId];
export const selectCardState =
	(cardId: string) => (state: { ui: UIState }) =>
		state.ui.cards[cardId];
export const selectRangeState =
	(rangeId: string) => (state: { ui: UIState }) =>
		state.ui.ranges[rangeId];
export const selectChatState =
	(chatId: string) => (state: { ui: UIState }) =>
		state.ui.chats[chatId];
export const selectChartState =
	(chartId: string) => (state: { ui: UIState }) =>
		state.ui.charts[chartId];
export const selectChartSelectedSeries =
	(chartId: string) => (state: { ui: UIState }) =>
		state.ui.charts[chartId]?.selectedSeries || [];
export const selectChartSearchTerm =
	(chartId: string) => (state: { ui: UIState }) =>
		state.ui.charts[chartId]?.searchTerm || '';

export default uiSlice.reducer;
