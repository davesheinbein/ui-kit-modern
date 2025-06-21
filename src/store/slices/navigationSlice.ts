import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../index';

// Navigation state interfaces
interface NavigationComponentState {
	// Open/closed state for collapsible navigation
	isOpen: boolean;

	// Responsive state
	isMobile: boolean;

	// Active item tracking
	activeItemId: string | null;

	// Mobile breakpoint for responsive behavior
	mobileBreakpoint: number;
}

interface NavigationState {
	// Per-component instance state (keyed by componentId)
	componentStates: Record<string, NavigationComponentState>;

	// Global navigation preferences
	defaultMobileBreakpoint: number;
	globalResponsiveEnabled: boolean;
}

const initialComponentState: NavigationComponentState = {
	isOpen: false,
	isMobile: false,
	activeItemId: null,
	mobileBreakpoint: 768,
};

const initialState: NavigationState = {
	componentStates: {},
	defaultMobileBreakpoint: 768,
	globalResponsiveEnabled: true,
};

const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		// Component state management
		initializeComponentState: (
			state,
			action: PayloadAction<{
				componentId: string;
				initialState?: Partial<NavigationComponentState>;
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

		// Open/close actions
		setIsOpen: (
			state,
			action: PayloadAction<{
				componentId: string;
				isOpen: boolean;
			}>
		) => {
			const { componentId, isOpen } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].isOpen = isOpen;
			}
		},

		toggleNavigation: (
			state,
			action: PayloadAction<{ componentId: string }>
		) => {
			const { componentId } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].isOpen =
					!state.componentStates[componentId].isOpen;
			}
		},

		closeNavigation: (
			state,
			action: PayloadAction<{ componentId: string }>
		) => {
			const { componentId } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].isOpen = false;
			}
		},

		// Responsive actions
		setIsMobile: (
			state,
			action: PayloadAction<{
				componentId: string;
				isMobile: boolean;
			}>
		) => {
			const { componentId, isMobile } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].isMobile =
					isMobile;
			}
		},

		setMobileBreakpoint: (
			state,
			action: PayloadAction<{
				componentId: string;
				breakpoint: number;
			}>
		) => {
			const { componentId, breakpoint } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[
					componentId
				].mobileBreakpoint = breakpoint;
			}
		},

		// Active item actions
		setActiveItem: (
			state,
			action: PayloadAction<{
				componentId: string;
				itemId: string | null;
			}>
		) => {
			const { componentId, itemId } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].activeItemId =
					itemId;
			}
		},

		// Global settings actions
		setDefaultMobileBreakpoint: (
			state,
			action: PayloadAction<number>
		) => {
			state.defaultMobileBreakpoint = action.payload;
		},

		setGlobalResponsiveEnabled: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.globalResponsiveEnabled = action.payload;
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
		resetNavigationState: (
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
	setIsOpen,
	toggleNavigation,
	closeNavigation,
	setIsMobile,
	setMobileBreakpoint,
	setActiveItem,
	setDefaultMobileBreakpoint,
	setGlobalResponsiveEnabled,
	removeComponentState,
	clearAllComponentStates,
	resetNavigationState,
} = navigationSlice.actions;

// Selectors
export const selectNavigationComponentState = (
	state: RootState,
	componentId: string
): NavigationComponentState | undefined =>
	state.navigation.componentStates[componentId];

export const selectIsNavigationOpen = (
	state: RootState,
	componentId: string
): boolean =>
	state.navigation.componentStates[componentId]?.isOpen ||
	false;

export const selectIsMobile = (
	state: RootState,
	componentId: string
): boolean =>
	state.navigation.componentStates[componentId]?.isMobile ||
	false;

export const selectActiveItemId = (
	state: RootState,
	componentId: string
): string | null =>
	state.navigation.componentStates[componentId]
		?.activeItemId || null;

export const selectMobileBreakpoint = (
	state: RootState,
	componentId: string
): number =>
	state.navigation.componentStates[componentId]
		?.mobileBreakpoint ||
	state.navigation.defaultMobileBreakpoint;

export const selectDefaultMobileBreakpoint = (
	state: RootState
): number => state.navigation.defaultMobileBreakpoint;

export const selectGlobalResponsiveEnabled = (
	state: RootState
): boolean => state.navigation.globalResponsiveEnabled;

export const selectAllNavigationStates = (
	state: RootState
) => state.navigation.componentStates;

export default navigationSlice.reducer;
