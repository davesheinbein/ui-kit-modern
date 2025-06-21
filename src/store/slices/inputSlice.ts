import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../index';

// Input state interfaces
export type InputState =
	| 'default'
	| 'error'
	| 'success'
	| 'warning'
	| 'loading';

interface InputComponentState {
	// Input value state
	value: string;

	// Input state (error, success, etc.)
	state: InputState;

	// Error/helper text
	errorText: string;

	// Password visibility for password inputs
	showPassword: boolean;

	// Focus state
	isFocused: boolean;

	// Validation state
	isValid: boolean;

	// Debounce timeout ID (for internal use)
	debounceTimeoutId: number | null;
}

interface InputSliceState {
	// Per-component instance state (keyed by componentId)
	componentStates: Record<string, InputComponentState>;

	// Global input preferences
	globalDebounceDelay: number;
	globalValidationEnabled: boolean;
}

const initialComponentState: InputComponentState = {
	value: '',
	state: 'default',
	errorText: '',
	showPassword: false,
	isFocused: false,
	isValid: true,
	debounceTimeoutId: null,
};

const initialState: InputSliceState = {
	componentStates: {},
	globalDebounceDelay: 300,
	globalValidationEnabled: true,
};

const inputSlice = createSlice({
	name: 'input',
	initialState,
	reducers: {
		// Component state management
		initializeComponentState: (
			state,
			action: PayloadAction<{
				componentId: string;
				initialState?: Partial<InputComponentState>;
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

		// Value actions
		setValue: (
			state,
			action: PayloadAction<{
				componentId: string;
				value: string;
			}>
		) => {
			const { componentId, value } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].value = value;
			}
		},

		clearValue: (
			state,
			action: PayloadAction<{ componentId: string }>
		) => {
			const { componentId } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].value = '';
			}
		},

		// State actions
		setInputState: (
			state,
			action: PayloadAction<{
				componentId: string;
				inputState: InputState;
			}>
		) => {
			const { componentId, inputState } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].state =
					inputState;
			}
		},

		setErrorText: (
			state,
			action: PayloadAction<{
				componentId: string;
				errorText: string;
			}>
		) => {
			const { componentId, errorText } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].errorText =
					errorText;
			}
		},

		clearError: (
			state,
			action: PayloadAction<{ componentId: string }>
		) => {
			const { componentId } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].errorText = '';
				state.componentStates[componentId].state =
					'default';
			}
		},

		// Password visibility actions
		setShowPassword: (
			state,
			action: PayloadAction<{
				componentId: string;
				showPassword: boolean;
			}>
		) => {
			const { componentId, showPassword } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].showPassword =
					showPassword;
			}
		},

		togglePasswordVisibility: (
			state,
			action: PayloadAction<{ componentId: string }>
		) => {
			const { componentId } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].showPassword =
					!state.componentStates[componentId].showPassword;
			}
		},

		// Focus actions
		setFocused: (
			state,
			action: PayloadAction<{
				componentId: string;
				isFocused: boolean;
			}>
		) => {
			const { componentId, isFocused } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].isFocused =
					isFocused;
			}
		},

		// Validation actions
		setValid: (
			state,
			action: PayloadAction<{
				componentId: string;
				isValid: boolean;
			}>
		) => {
			const { componentId, isValid } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].isValid =
					isValid;
			}
		},

		// Debounce actions
		setDebounceTimeout: (
			state,
			action: PayloadAction<{
				componentId: string;
				timeoutId: number | null;
			}>
		) => {
			const { componentId, timeoutId } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[
					componentId
				].debounceTimeoutId = timeoutId;
			}
		},

		// Global settings actions
		setGlobalDebounceDelay: (
			state,
			action: PayloadAction<number>
		) => {
			state.globalDebounceDelay = action.payload;
		},

		setGlobalValidationEnabled: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.globalValidationEnabled = action.payload;
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
		resetInputState: (
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
	setValue,
	clearValue,
	setInputState,
	setErrorText,
	clearError,
	setShowPassword,
	togglePasswordVisibility,
	setFocused,
	setValid,
	setDebounceTimeout,
	setGlobalDebounceDelay,
	setGlobalValidationEnabled,
	removeComponentState,
	clearAllComponentStates,
	resetInputState,
} = inputSlice.actions;

// Selectors
export const selectInputComponentState = (
	state: RootState,
	componentId: string
): InputComponentState | undefined =>
	state.input.componentStates[componentId];

export const selectInputValue = (
	state: RootState,
	componentId: string
): string =>
	state.input.componentStates[componentId]?.value || '';

export const selectInputState = (
	state: RootState,
	componentId: string
): InputState =>
	state.input.componentStates[componentId]?.state ||
	'default';

export const selectInputErrorText = (
	state: RootState,
	componentId: string
): string =>
	state.input.componentStates[componentId]?.errorText || '';

export const selectShowPassword = (
	state: RootState,
	componentId: string
): boolean =>
	state.input.componentStates[componentId]?.showPassword ||
	false;

export const selectIsFocused = (
	state: RootState,
	componentId: string
): boolean =>
	state.input.componentStates[componentId]?.isFocused ||
	false;

export const selectIsValid = (
	state: RootState,
	componentId: string
): boolean =>
	state.input.componentStates[componentId]?.isValid || true;

export const selectDebounceTimeoutId = (
	state: RootState,
	componentId: string
): number | null =>
	state.input.componentStates[componentId]
		?.debounceTimeoutId || null;

export const selectGlobalDebounceDelay = (
	state: RootState
): number => state.input.globalDebounceDelay;

export const selectGlobalValidationEnabled = (
	state: RootState
): boolean => state.input.globalValidationEnabled;

export const selectAllInputStates = (state: RootState) =>
	state.input.componentStates;

export default inputSlice.reducer;
