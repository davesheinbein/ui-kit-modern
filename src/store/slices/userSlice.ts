/**
 * User Slice - User Domain State Management
 *
 * Responsible for:
 * - User authentication state
 * - User profile data
 * - User preferences
 * - Session management
 *
 * Follows DRY principles with reusable patterns
 */

import {
	createSlice,
	createAsyncThunk,
	PayloadAction,
} from '@reduxjs/toolkit';

// User interfaces
export interface UserProfile {
	id: string;
	username: string;
	email: string;
	avatar?: string;
	displayName?: string;
	isVerified: boolean;
	createdAt: string;
	lastLoginAt?: string;
}

export interface UserPreferences {
	language: string;
	timezone: string;
	emailNotifications: boolean;
	pushNotifications: boolean;
	chatEnabled: boolean;
	profanityFilter: boolean;
	privacyLevel: 'public' | 'friends' | 'private';
}

export interface UserState {
	// Authentication
	isAuthenticated: boolean;
	isLoading: boolean;
	authError: string | null;

	// Profile
	profile: UserProfile | null;
	profileLoading: boolean;
	profileError: string | null;

	// Preferences
	preferences: UserPreferences;
	preferencesLoading: boolean;
	preferencesError: string | null;

	// Session
	sessionExpiry: number | null;
	lastActivity: number;
}

// Initial state
const initialState: UserState = {
	// Authentication
	isAuthenticated: false,
	isLoading: false,
	authError: null,

	// Profile
	profile: null,
	profileLoading: false,
	profileError: null,

	// Preferences
	preferences: {
		language: 'en',
		timezone: 'UTC',
		emailNotifications: true,
		pushNotifications: true,
		chatEnabled: true,
		profanityFilter: false,
		privacyLevel: 'friends',
	},
	preferencesLoading: false,
	preferencesError: null,

	// Session
	sessionExpiry: null,
	lastActivity: Date.now(),
};

// Async thunks for API calls
export const loginUser = createAsyncThunk(
	'user/login',
	async (credentials: {
		email: string;
		password: string;
	}) => {
		// Mock API call - replace with real implementation
		const response = await fetch('/api/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(credentials),
		});

		if (!response.ok) {
			throw new Error('Login failed');
		}

		return response.json();
	}
);

export const logoutUser = createAsyncThunk(
	'user/logout',
	async () => {
		// Mock API call
		await fetch('/api/auth/logout', { method: 'POST' });
	}
);

export const updateUserProfile = createAsyncThunk(
	'user/updateProfile',
	async (updates: Partial<UserProfile>) => {
		// Mock API call
		const response = await fetch('/api/user/profile', {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(updates),
		});

		if (!response.ok) {
			throw new Error('Profile update failed');
		}

		return response.json();
	}
);

export const updateUserPreferences = createAsyncThunk(
	'user/updatePreferences',
	async (preferences: Partial<UserPreferences>) => {
		// Mock API call
		const response = await fetch('/api/user/preferences', {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(preferences),
		});

		if (!response.ok) {
			throw new Error('Preferences update failed');
		}

		return response.json();
	}
);

// User slice
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// Authentication actions
		clearAuthError: (state) => {
			state.authError = null;
		},

		// Session actions
		updateLastActivity: (state) => {
			state.lastActivity = Date.now();
		},

		setSessionExpiry: (
			state,
			action: PayloadAction<number>
		) => {
			state.sessionExpiry = action.payload;
		},

		// Quick preference updates (for immediate UI feedback)
		toggleChatEnabled: (state) => {
			state.preferences.chatEnabled =
				!state.preferences.chatEnabled;
		},

		toggleProfanityFilter: (state) => {
			state.preferences.profanityFilter =
				!state.preferences.profanityFilter;
		},

		setPrivacyLevel: (
			state,
			action: PayloadAction<UserPreferences['privacyLevel']>
		) => {
			state.preferences.privacyLevel = action.payload;
		},

		// Clear all user data (for logout)
		clearUserData: (state) => {
			state.isAuthenticated = false;
			state.profile = null;
			state.authError = null;
			state.profileError = null;
			state.preferencesError = null;
			state.sessionExpiry = null;
		},
	},
	extraReducers: (builder) => {
		// Login
		builder
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
				state.authError = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isAuthenticated = true;
				state.profile = action.payload.user;
				state.sessionExpiry = action.payload.sessionExpiry;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.authError =
					action.error.message || 'Login failed';
			});

		// Logout
		builder.addCase(logoutUser.fulfilled, (state) => {
			state.isAuthenticated = false;
			state.profile = null;
			state.sessionExpiry = null;
		});

		// Profile update
		builder
			.addCase(updateUserProfile.pending, (state) => {
				state.profileLoading = true;
				state.profileError = null;
			})
			.addCase(
				updateUserProfile.fulfilled,
				(state, action) => {
					state.profileLoading = false;
					if (state.profile) {
						state.profile = {
							...state.profile,
							...action.payload,
						};
					}
				}
			)
			.addCase(
				updateUserProfile.rejected,
				(state, action) => {
					state.profileLoading = false;
					state.profileError =
						action.error.message || 'Profile update failed';
				}
			);

		// Preferences update
		builder
			.addCase(updateUserPreferences.pending, (state) => {
				state.preferencesLoading = true;
				state.preferencesError = null;
			})
			.addCase(
				updateUserPreferences.fulfilled,
				(state, action) => {
					state.preferencesLoading = false;
					state.preferences = {
						...state.preferences,
						...action.payload,
					};
				}
			)
			.addCase(
				updateUserPreferences.rejected,
				(state, action) => {
					state.preferencesLoading = false;
					state.preferencesError =
						action.error.message ||
						'Preferences update failed';
				}
			);
	},
});

// Export actions
export const {
	clearAuthError,
	updateLastActivity,
	setSessionExpiry,
	toggleChatEnabled,
	toggleProfanityFilter,
	setPrivacyLevel,
	clearUserData,
} = userSlice.actions;

// Selectors
export const selectUser = (state: { user: UserState }) =>
	state.user;
export const selectIsAuthenticated = (state: {
	user: UserState;
}) => state.user.isAuthenticated;
export const selectUserProfile = (state: {
	user: UserState;
}) => state.user.profile;
export const selectUserPreferences = (state: {
	user: UserState;
}) => state.user.preferences;
export const selectAuthLoading = (state: {
	user: UserState;
}) => state.user.isLoading;
export const selectAuthError = (state: {
	user: UserState;
}) => state.user.authError;

export default userSlice.reducer;
