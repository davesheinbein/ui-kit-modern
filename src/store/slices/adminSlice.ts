import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface ErrorLogEntry {
	time: string;
	message: string;
}

interface PerformanceMetrics {
	memory: number;
	fps: number;
	loadTime: number;
}

interface AdminComponentState {
	// Session Debugger state
	clientTime: string | null;

	// Performance Monitor state
	performance: PerformanceMetrics;

	// Error Logger state
	errors: ErrorLogEntry[];
}

interface AdminState {
	// Per-component instance state (keyed by componentId)
	componentStates: Record<string, AdminComponentState>;

	// Global admin settings
	isDebugModeEnabled: boolean;
	globalAdminEnabled: boolean;
}

const initialComponentState: AdminComponentState = {
	clientTime: null,
	performance: {
		memory: 0,
		fps: 0,
		loadTime: 0,
	},
	errors: [],
};

const initialState: AdminState = {
	componentStates: {},
	isDebugModeEnabled: false,
	globalAdminEnabled:
		typeof window !== 'undefined' ? true : false, // Default to true in browser
};

const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		// Component state management
		initializeComponentState: (
			state,
			action: PayloadAction<{ componentId: string }>
		) => {
			const { componentId } = action.payload;
			if (!state.componentStates[componentId]) {
				state.componentStates[componentId] = {
					...initialComponentState,
				};
			}
		},

		// Session Debugger actions
		setClientTime: (
			state,
			action: PayloadAction<{
				componentId: string;
				time: string;
			}>
		) => {
			const { componentId, time } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].clientTime =
					time;
			}
		},

		// Performance Monitor actions
		setPerformanceMetrics: (
			state,
			action: PayloadAction<{
				componentId: string;
				metrics: PerformanceMetrics;
			}>
		) => {
			const { componentId, metrics } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].performance =
					metrics;
			}
		},

		// Error Logger actions
		addError: (
			state,
			action: PayloadAction<{
				componentId: string;
				error: ErrorLogEntry;
			}>
		) => {
			const { componentId, error } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].errors.push(
					error
				);
			}
		},

		setErrors: (
			state,
			action: PayloadAction<{
				componentId: string;
				errors: ErrorLogEntry[];
			}>
		) => {
			const { componentId, errors } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].errors = errors;
			}
		},

		clearErrors: (
			state,
			action: PayloadAction<{ componentId: string }>
		) => {
			const { componentId } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].errors = [];
			}
		},

		// Global admin settings
		setDebugModeEnabled: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.isDebugModeEnabled = action.payload;
		},

		setGlobalAdminEnabled: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.globalAdminEnabled = action.payload;
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
	},
});

export const {
	initializeComponentState,
	setClientTime,
	setPerformanceMetrics,
	addError,
	setErrors,
	clearErrors,
	setDebugModeEnabled,
	setGlobalAdminEnabled,
	removeComponentState,
	clearAllComponentStates,
} = adminSlice.actions;

// Selectors
export const selectAdminComponentState = (
	state: RootState,
	componentId: string
): AdminComponentState | undefined =>
	state.admin.componentStates[componentId];

export const selectClientTime = (
	state: RootState,
	componentId: string
): string | null =>
	state.admin.componentStates[componentId]?.clientTime ||
	null;

export const selectPerformanceMetrics = (
	state: RootState,
	componentId: string
): PerformanceMetrics =>
	state.admin.componentStates[componentId]?.performance ||
	initialComponentState.performance;

export const selectErrors = (
	state: RootState,
	componentId: string
): ErrorLogEntry[] =>
	state.admin.componentStates[componentId]?.errors || [];

export const selectIsDebugModeEnabled = (
	state: RootState
): boolean => state.admin.isDebugModeEnabled;

export const selectGlobalAdminEnabled = (
	state: RootState
): boolean => state.admin.globalAdminEnabled;

export const selectAllComponentStates = (
	state: RootState
) => state.admin.componentStates;

export default adminSlice.reducer;
