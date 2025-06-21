/**
 * Theme Slice - Theme Domain State Management
 *
 * Responsible for:
 * - Theme selection and management
 * - Color palettes and customization
 * - Dark/light mode preferences
 * - Theme-related settings
 *
 * Simple domain-focused slice for all theme concerns
 */

import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';

// Theme interfaces
export interface ThemeDefinition {
	id: string;
	name: string;
	displayName: string;
	type: 'light' | 'dark' | 'auto';
	colors: {
		primary: string;
		secondary: string;
		accent: string;
		background: string;
		surface: string;
		text: string;
		textSecondary: string;
		border: string;
		error: string;
		warning: string;
		success: string;
		info: string;
		[key: string]: string;
	};
	fonts?: {
		primary: string;
		secondary: string;
		mono: string;
	};
	spacing?: {
		xs: string;
		sm: string;
		md: string;
		lg: string;
		xl: string;
	};
	borderRadius?: {
		sm: string;
		md: string;
		lg: string;
	};
}

export interface CustomPalette {
	id: string;
	name: string;
	colors: Record<string, string>;
	isCustom: boolean;
	createdAt: string;
}

export interface ThemeState {
	// Current theme
	currentTheme: string;
	previousTheme: string | null;

	// Theme system
	systemPreference: 'light' | 'dark';
	followSystem: boolean;

	// Available themes
	availableThemes: ThemeDefinition[];
	customThemes: ThemeDefinition[];

	// Palettes
	currentPalette: string | null;
	availablePalettes: CustomPalette[];
	customPalettes: CustomPalette[];

	// Theme customization
	customization: {
		primaryColor: string | null;
		accentColor: string | null;
		borderRadius: 'sharp' | 'rounded' | 'circular' | null;
		fontSize: 'small' | 'medium' | 'large' | null;
		density: 'compact' | 'standard' | 'comfortable' | null;
	};

	// Accessibility
	accessibility: {
		highContrast: boolean;
		reducedMotion: boolean;
		largeText: boolean;
		focusRings: boolean;
	};

	// Loading states
	isLoading: boolean;
	error: string | null;
}

// Default themes
const defaultThemes: ThemeDefinition[] = [
	{
		id: 'light',
		name: 'light',
		displayName: 'Light',
		type: 'light',
		colors: {
			primary: '#2563eb',
			secondary: '#64748b',
			accent: '#06b6d4',
			background: '#ffffff',
			surface: '#f8fafc',
			text: '#1e293b',
			textSecondary: '#64748b',
			border: '#e2e8f0',
			error: '#ef4444',
			warning: '#f59e0b',
			success: '#22c55e',
			info: '#3b82f6',
		},
	},
	{
		id: 'dark',
		name: 'dark',
		displayName: 'Dark',
		type: 'dark',
		colors: {
			primary: '#3b82f6',
			secondary: '#64748b',
			accent: '#06b6d4',
			background: '#0f172a',
			surface: '#1e293b',
			text: '#f1f5f9',
			textSecondary: '#94a3b8',
			border: '#334155',
			error: '#ef4444',
			warning: '#f59e0b',
			success: '#22c55e',
			info: '#3b82f6',
		},
	},
];

const initialState: ThemeState = {
	// Current theme
	currentTheme: 'light',
	previousTheme: null,

	// Theme system
	systemPreference: 'light',
	followSystem: false,

	// Available themes
	availableThemes: defaultThemes,
	customThemes: [],

	// Palettes
	currentPalette: null,
	availablePalettes: [],
	customPalettes: [],

	// Customization
	customization: {
		primaryColor: null,
		accentColor: null,
		borderRadius: null,
		fontSize: null,
		density: null,
	},

	// Accessibility
	accessibility: {
		highContrast: false,
		reducedMotion: false,
		largeText: false,
		focusRings: true,
	},

	// Loading
	isLoading: false,
	error: null,
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		// Theme selection
		setTheme: (state, action: PayloadAction<string>) => {
			state.previousTheme = state.currentTheme;
			state.currentTheme = action.payload;
		},

		setSystemPreference: (
			state,
			action: PayloadAction<'light' | 'dark'>
		) => {
			state.systemPreference = action.payload;
			if (state.followSystem) {
				state.previousTheme = state.currentTheme;
				state.currentTheme = action.payload;
			}
		},

		setFollowSystem: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.followSystem = action.payload;
			if (action.payload) {
				state.previousTheme = state.currentTheme;
				state.currentTheme = state.systemPreference;
			}
		},

		// Theme management
		addCustomTheme: (
			state,
			action: PayloadAction<ThemeDefinition>
		) => {
			const existingIndex = state.customThemes.findIndex(
				(t) => t.id === action.payload.id
			);
			if (existingIndex >= 0) {
				state.customThemes[existingIndex] = action.payload;
			} else {
				state.customThemes.push(action.payload);
			}
		},

		removeCustomTheme: (
			state,
			action: PayloadAction<string>
		) => {
			state.customThemes = state.customThemes.filter(
				(t) => t.id !== action.payload
			);
			if (state.currentTheme === action.payload) {
				state.currentTheme = 'light';
			}
		},

		// Palette management
		setPalette: (
			state,
			action: PayloadAction<string | null>
		) => {
			state.currentPalette = action.payload;
		},

		addCustomPalette: (
			state,
			action: PayloadAction<CustomPalette>
		) => {
			const existingIndex = state.customPalettes.findIndex(
				(p) => p.id === action.payload.id
			);
			if (existingIndex >= 0) {
				state.customPalettes[existingIndex] =
					action.payload;
			} else {
				state.customPalettes.push(action.payload);
			}
		},

		removeCustomPalette: (
			state,
			action: PayloadAction<string>
		) => {
			state.customPalettes = state.customPalettes.filter(
				(p) => p.id !== action.payload
			);
			if (state.currentPalette === action.payload) {
				state.currentPalette = null;
			}
		},

		// Theme customization
		updateCustomization: (
			state,
			action: PayloadAction<
				Partial<ThemeState['customization']>
			>
		) => {
			state.customization = {
				...state.customization,
				...action.payload,
			};
		},

		resetCustomization: (state) => {
			state.customization = {
				primaryColor: null,
				accentColor: null,
				borderRadius: null,
				fontSize: null,
				density: null,
			};
		},

		// Accessibility
		updateAccessibility: (
			state,
			action: PayloadAction<
				Partial<ThemeState['accessibility']>
			>
		) => {
			state.accessibility = {
				...state.accessibility,
				...action.payload,
			};
		},

		toggleHighContrast: (state) => {
			state.accessibility.highContrast =
				!state.accessibility.highContrast;
		},

		toggleReducedMotion: (state) => {
			state.accessibility.reducedMotion =
				!state.accessibility.reducedMotion;
		},

		toggleLargeText: (state) => {
			state.accessibility.largeText =
				!state.accessibility.largeText;
		},

		toggleFocusRings: (state) => {
			state.accessibility.focusRings =
				!state.accessibility.focusRings;
		},

		// Utility actions
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},

		setError: (
			state,
			action: PayloadAction<string | null>
		) => {
			state.error = action.payload;
		},

		clearError: (state) => {
			state.error = null;
		},

		// Quick theme toggles
		toggleTheme: (state) => {
			const currentTheme = state.currentTheme;
			if (currentTheme === 'light') {
				state.previousTheme = currentTheme;
				state.currentTheme = 'dark';
			} else if (currentTheme === 'dark') {
				state.previousTheme = currentTheme;
				state.currentTheme = 'light';
			}
		},

		revertTheme: (state) => {
			if (state.previousTheme) {
				const temp = state.currentTheme;
				state.currentTheme = state.previousTheme;
				state.previousTheme = temp;
			}
		},
	},
});

// Export actions
export const {
	setTheme,
	setSystemPreference,
	setFollowSystem,
	addCustomTheme,
	removeCustomTheme,
	setPalette,
	addCustomPalette,
	removeCustomPalette,
	updateCustomization,
	resetCustomization,
	updateAccessibility,
	toggleHighContrast,
	toggleReducedMotion,
	toggleLargeText,
	toggleFocusRings,
	setLoading,
	setError,
	clearError,
	toggleTheme,
	revertTheme,
} = themeSlice.actions;

// Selectors
export const selectTheme = (state: { theme: ThemeState }) =>
	state.theme;
export const selectCurrentTheme = (state: {
	theme: ThemeState;
}) => state.theme.currentTheme;
export const selectThemeDefinition = (state: {
	theme: ThemeState;
}) => {
	const { currentTheme, availableThemes, customThemes } =
		state.theme;
	return [...availableThemes, ...customThemes].find(
		(t) => t.id === currentTheme
	);
};
export const selectCurrentPalette = (state: {
	theme: ThemeState;
}) => state.theme.currentPalette;
export const selectCustomization = (state: {
	theme: ThemeState;
}) => state.theme.customization;
export const selectAccessibility = (state: {
	theme: ThemeState;
}) => state.theme.accessibility;
export const selectAvailableThemes = (state: {
	theme: ThemeState;
}) => state.theme.availableThemes;
export const selectCustomThemes = (state: {
	theme: ThemeState;
}) => state.theme.customThemes;
export const selectAllThemes = (state: {
	theme: ThemeState;
}) => [
	...state.theme.availableThemes,
	...state.theme.customThemes,
];
export const selectThemeLoading = (state: {
	theme: ThemeState;
}) => state.theme.isLoading;
export const selectThemeError = (state: {
	theme: ThemeState;
}) => state.theme.error;

export default themeSlice.reducer;
