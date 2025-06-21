/**
 * Settings Slice - Settings Domain State Management
 *
 * Responsible for:
 * - Application settings and configuration
 * - User preferences that affect app behavior
 * - System-level configurations
 * - Settings synchronization
 *
 * Separated from user preferences - focuses on app configuration
 */

import {
	createSlice,
	createAsyncThunk,
	PayloadAction,
} from '@reduxjs/toolkit';

// Settings interfaces
export interface NotificationSettings {
	enabled: boolean;
	email: boolean;
	push: boolean;
	desktop: boolean;
	sound: boolean;
	vibration: boolean;
	gameInvites: boolean;
	friendRequests: boolean;
	achievements: boolean;
	systemUpdates: boolean;
}

export interface PrivacySettings {
	profileVisibility: 'public' | 'friends' | 'private';
	showOnlineStatus: boolean;
	showGameHistory: boolean;
	showAchievements: boolean;
	allowFriendRequests: boolean;
	allowGameInvites: boolean;
	shareStatistics: boolean;
	dataCollection: boolean;
}

export interface AccessibilitySettings {
	highContrast: boolean;
	largeText: boolean;
	reducedMotion: boolean;
	screenReader: boolean;
	keyboardNavigation: boolean;
	focusIndicators: boolean;
	altText: boolean;
	captionPreferences: {
		enabled: boolean;
		size: 'small' | 'medium' | 'large';
		color: string;
		background: string;
	};
}

export interface PerformanceSettings {
	animationsEnabled: boolean;
	particleEffects: boolean;
	graphicsQuality: 'low' | 'medium' | 'high';
	frameRateLimit: number | null;
	memoryOptimization: boolean;
	preloadAssets: boolean;
	lazyLoading: boolean;
}

export interface SecuritySettings {
	twoFactorAuth: boolean;
	sessionTimeout: number;
	autoLogout: boolean;
	passwordReminder: boolean;
	deviceTracking: boolean;
	loginNotifications: boolean;
	suspiciousActivityAlerts: boolean;
}

export interface SettingsState {
	// Notification settings
	notifications: NotificationSettings;

	// Privacy settings
	privacy: PrivacySettings;

	// Accessibility settings
	accessibility: AccessibilitySettings;

	// Performance settings
	performance: PerformanceSettings;

	// Security settings
	security: SecuritySettings;

	// Language and localization
	language: string;
	region: string;
	timezone: string;
	dateFormat: string;
	timeFormat: '12h' | '24h';
	numberFormat: 'US' | 'EU' | 'other';

	// Application behavior
	autoSave: boolean;
	autoSync: boolean;
	offlineMode: boolean;
	debugMode: boolean;
	developerMode: boolean;

	// Storage and data
	storageQuota: number;
	storageUsed: number;
	cacheSize: number;
	dataSyncInterval: number;

	// Loading states
	isLoading: boolean;
	isSyncing: boolean;
	error: string | null;
	syncError: string | null;

	// Last updated
	lastUpdated: number | null;
	lastSynced: number | null;
}

const initialState: SettingsState = {
	// Notifications
	notifications: {
		enabled: true,
		email: true,
		push: true,
		desktop: false,
		sound: true,
		vibration: true,
		gameInvites: true,
		friendRequests: true,
		achievements: true,
		systemUpdates: false,
	},

	// Privacy
	privacy: {
		profileVisibility: 'friends',
		showOnlineStatus: true,
		showGameHistory: true,
		showAchievements: true,
		allowFriendRequests: true,
		allowGameInvites: true,
		shareStatistics: false,
		dataCollection: false,
	},

	// Accessibility
	accessibility: {
		highContrast: false,
		largeText: false,
		reducedMotion: false,
		screenReader: false,
		keyboardNavigation: true,
		focusIndicators: true,
		altText: true,
		captionPreferences: {
			enabled: false,
			size: 'medium',
			color: '#ffffff',
			background: '#000000',
		},
	},

	// Performance
	performance: {
		animationsEnabled: true,
		particleEffects: true,
		graphicsQuality: 'medium',
		frameRateLimit: null,
		memoryOptimization: false,
		preloadAssets: true,
		lazyLoading: true,
	},

	// Security
	security: {
		twoFactorAuth: false,
		sessionTimeout: 30,
		autoLogout: true,
		passwordReminder: false,
		deviceTracking: true,
		loginNotifications: true,
		suspiciousActivityAlerts: true,
	},

	// Localization
	language: 'en',
	region: 'US',
	timezone: 'UTC',
	dateFormat: 'MM/DD/YYYY',
	timeFormat: '12h',
	numberFormat: 'US',

	// Behavior
	autoSave: true,
	autoSync: true,
	offlineMode: false,
	debugMode: false,
	developerMode: false,

	// Storage
	storageQuota: 1024 * 1024 * 100, // 100MB
	storageUsed: 0,
	cacheSize: 0,
	dataSyncInterval: 5 * 60 * 1000, // 5 minutes

	// Loading
	isLoading: false,
	isSyncing: false,
	error: null,
	syncError: null,

	// Timestamps
	lastUpdated: null,
	lastSynced: null,
};

// Async thunks
export const loadSettings = createAsyncThunk(
	'settings/load',
	async () => {
		// Mock API call
		const response = await fetch('/api/settings');

		if (!response.ok) {
			throw new Error('Failed to load settings');
		}

		return response.json();
	}
);

export const saveSettings = createAsyncThunk(
	'settings/save',
	async (settings: Partial<SettingsState>) => {
		// Mock API call
		const response = await fetch('/api/settings', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(settings),
		});

		if (!response.ok) {
			throw new Error('Failed to save settings');
		}

		return response.json();
	}
);

export const syncSettings = createAsyncThunk(
	'settings/sync',
	async () => {
		// Mock API call for syncing settings across devices
		const response = await fetch('/api/settings/sync');

		if (!response.ok) {
			throw new Error('Failed to sync settings');
		}

		return response.json();
	}
);

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		// Notification settings
		updateNotificationSettings: (
			state,
			action: PayloadAction<Partial<NotificationSettings>>
		) => {
			state.notifications = {
				...state.notifications,
				...action.payload,
			};
			state.lastUpdated = Date.now();
		},

		toggleNotifications: (state) => {
			state.notifications.enabled =
				!state.notifications.enabled;
			state.lastUpdated = Date.now();
		},

		// Privacy settings
		updatePrivacySettings: (
			state,
			action: PayloadAction<Partial<PrivacySettings>>
		) => {
			state.privacy = {
				...state.privacy,
				...action.payload,
			};
			state.lastUpdated = Date.now();
		},

		setProfileVisibility: (
			state,
			action: PayloadAction<
				'public' | 'friends' | 'private'
			>
		) => {
			state.privacy.profileVisibility = action.payload;
			state.lastUpdated = Date.now();
		},

		// Accessibility settings
		updateAccessibilitySettings: (
			state,
			action: PayloadAction<Partial<AccessibilitySettings>>
		) => {
			state.accessibility = {
				...state.accessibility,
				...action.payload,
			};
			state.lastUpdated = Date.now();
		},

		toggleHighContrast: (state) => {
			state.accessibility.highContrast =
				!state.accessibility.highContrast;
			state.lastUpdated = Date.now();
		},

		toggleLargeText: (state) => {
			state.accessibility.largeText =
				!state.accessibility.largeText;
			state.lastUpdated = Date.now();
		},

		toggleReducedMotion: (state) => {
			state.accessibility.reducedMotion =
				!state.accessibility.reducedMotion;
			state.lastUpdated = Date.now();
		},

		// Performance settings
		updatePerformanceSettings: (
			state,
			action: PayloadAction<Partial<PerformanceSettings>>
		) => {
			state.performance = {
				...state.performance,
				...action.payload,
			};
			state.lastUpdated = Date.now();
		},

		setGraphicsQuality: (
			state,
			action: PayloadAction<'low' | 'medium' | 'high'>
		) => {
			state.performance.graphicsQuality = action.payload;
			state.lastUpdated = Date.now();
		},

		toggleAnimations: (state) => {
			state.performance.animationsEnabled =
				!state.performance.animationsEnabled;
			state.lastUpdated = Date.now();
		},

		// Security settings
		updateSecuritySettings: (
			state,
			action: PayloadAction<Partial<SecuritySettings>>
		) => {
			state.security = {
				...state.security,
				...action.payload,
			};
			state.lastUpdated = Date.now();
		},

		toggleTwoFactorAuth: (state) => {
			state.security.twoFactorAuth =
				!state.security.twoFactorAuth;
			state.lastUpdated = Date.now();
		},

		setSessionTimeout: (
			state,
			action: PayloadAction<number>
		) => {
			state.security.sessionTimeout = action.payload;
			state.lastUpdated = Date.now();
		},

		// Localization
		setLanguage: (state, action: PayloadAction<string>) => {
			state.language = action.payload;
			state.lastUpdated = Date.now();
		},

		setTimezone: (state, action: PayloadAction<string>) => {
			state.timezone = action.payload;
			state.lastUpdated = Date.now();
		},

		setTimeFormat: (
			state,
			action: PayloadAction<'12h' | '24h'>
		) => {
			state.timeFormat = action.payload;
			state.lastUpdated = Date.now();
		},

		// Application behavior
		toggleAutoSave: (state) => {
			state.autoSave = !state.autoSave;
			state.lastUpdated = Date.now();
		},

		toggleAutoSync: (state) => {
			state.autoSync = !state.autoSync;
			state.lastUpdated = Date.now();
		},

		toggleOfflineMode: (state) => {
			state.offlineMode = !state.offlineMode;
			state.lastUpdated = Date.now();
		},

		toggleDebugMode: (state) => {
			state.debugMode = !state.debugMode;
			state.lastUpdated = Date.now();
		},

		// Storage management
		updateStorageUsed: (
			state,
			action: PayloadAction<number>
		) => {
			state.storageUsed = action.payload;
		},

		updateCacheSize: (
			state,
			action: PayloadAction<number>
		) => {
			state.cacheSize = action.payload;
		},

		clearCache: (state) => {
			state.cacheSize = 0;
		},

		// Error handling
		setError: (
			state,
			action: PayloadAction<string | null>
		) => {
			state.error = action.payload;
		},

		setSyncError: (
			state,
			action: PayloadAction<string | null>
		) => {
			state.syncError = action.payload;
		},

		clearError: (state) => {
			state.error = null;
		},

		clearSyncError: (state) => {
			state.syncError = null;
		},

		// Reset settings
		resetToDefaults: (state) => {
			// Reset all settings to initial state except loading states and errors
			const { isLoading, isSyncing, error, syncError } =
				state;
			Object.assign(state, {
				...initialState,
				isLoading,
				isSyncing,
				error,
				syncError,
				lastUpdated: Date.now(),
			});
		},

		resetSection: (
			state,
			action: PayloadAction<
				keyof Pick<
					SettingsState,
					| 'notifications'
					| 'privacy'
					| 'accessibility'
					| 'performance'
					| 'security'
				>
			>
		) => {
			const section = action.payload;
			if (section === 'notifications') {
				state.notifications = initialState.notifications;
			} else if (section === 'privacy') {
				state.privacy = initialState.privacy;
			} else if (section === 'accessibility') {
				state.accessibility = initialState.accessibility;
			} else if (section === 'performance') {
				state.performance = initialState.performance;
			} else if (section === 'security') {
				state.security = initialState.security;
			}
			state.lastUpdated = Date.now();
		},
	},
	extraReducers: (builder) => {
		// Load settings
		builder
			.addCase(loadSettings.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(loadSettings.fulfilled, (state, action) => {
				state.isLoading = false;
				Object.assign(state, action.payload);
				state.lastUpdated = Date.now();
			})
			.addCase(loadSettings.rejected, (state, action) => {
				state.isLoading = false;
				state.error =
					action.error.message || 'Failed to load settings';
			});

		// Save settings
		builder
			.addCase(saveSettings.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(saveSettings.fulfilled, (state) => {
				state.isLoading = false;
				state.lastUpdated = Date.now();
			})
			.addCase(saveSettings.rejected, (state, action) => {
				state.isLoading = false;
				state.error =
					action.error.message || 'Failed to save settings';
			});

		// Sync settings
		builder
			.addCase(syncSettings.pending, (state) => {
				state.isSyncing = true;
				state.syncError = null;
			})
			.addCase(syncSettings.fulfilled, (state, action) => {
				state.isSyncing = false;
				Object.assign(state, action.payload);
				state.lastSynced = Date.now();
			})
			.addCase(syncSettings.rejected, (state, action) => {
				state.isSyncing = false;
				state.syncError =
					action.error.message || 'Failed to sync settings';
			});
	},
});

// Export actions
export const {
	updateNotificationSettings,
	toggleNotifications,
	updatePrivacySettings,
	setProfileVisibility,
	updateAccessibilitySettings,
	toggleHighContrast,
	toggleLargeText,
	toggleReducedMotion,
	updatePerformanceSettings,
	setGraphicsQuality,
	toggleAnimations,
	updateSecuritySettings,
	toggleTwoFactorAuth,
	setSessionTimeout,
	setLanguage,
	setTimezone,
	setTimeFormat,
	toggleAutoSave,
	toggleAutoSync,
	toggleOfflineMode,
	toggleDebugMode,
	updateStorageUsed,
	updateCacheSize,
	clearCache,
	setError,
	setSyncError,
	clearError,
	clearSyncError,
	resetToDefaults,
	resetSection,
} = settingsSlice.actions;

// Selectors
export const selectSettings = (state: {
	settings: SettingsState;
}) => state.settings;
export const selectNotificationSettings = (state: {
	settings: SettingsState;
}) => state.settings.notifications;
export const selectPrivacySettings = (state: {
	settings: SettingsState;
}) => state.settings.privacy;
export const selectAccessibilitySettings = (state: {
	settings: SettingsState;
}) => state.settings.accessibility;
export const selectPerformanceSettings = (state: {
	settings: SettingsState;
}) => state.settings.performance;
export const selectSecuritySettings = (state: {
	settings: SettingsState;
}) => state.settings.security;
export const selectLanguageSettings = (state: {
	settings: SettingsState;
}) => ({
	language: state.settings.language,
	region: state.settings.region,
	timezone: state.settings.timezone,
	dateFormat: state.settings.dateFormat,
	timeFormat: state.settings.timeFormat,
	numberFormat: state.settings.numberFormat,
});
export const selectAppBehaviorSettings = (state: {
	settings: SettingsState;
}) => ({
	autoSave: state.settings.autoSave,
	autoSync: state.settings.autoSync,
	offlineMode: state.settings.offlineMode,
	debugMode: state.settings.debugMode,
	developerMode: state.settings.developerMode,
});
export const selectStorageInfo = (state: {
	settings: SettingsState;
}) => ({
	quota: state.settings.storageQuota,
	used: state.settings.storageUsed,
	cacheSize: state.settings.cacheSize,
	available:
		state.settings.storageQuota -
		state.settings.storageUsed,
	usagePercent:
		(state.settings.storageUsed /
			state.settings.storageQuota) *
		100,
});
export const selectSettingsLoading = (state: {
	settings: SettingsState;
}) => state.settings.isLoading;
export const selectSettingsSyncing = (state: {
	settings: SettingsState;
}) => state.settings.isSyncing;
export const selectSettingsError = (state: {
	settings: SettingsState;
}) => state.settings.error;
export const selectSyncError = (state: {
	settings: SettingsState;
}) => state.settings.syncError;

export default settingsSlice.reducer;
