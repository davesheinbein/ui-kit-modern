/**
 * Redux Store Configuration
 *
 * Centralized store following DRY, Simple, Separated, Responsible principles:
 * - DRY: Reusable patterns across slices
 * - Simple: One slice per domain
 * - Separated: UI state separate from business logic
 * - Responsible: Each slice owns its domain
 */

import { configureStore } from '@reduxjs/toolkit';
import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux';

// Import all slices
import userSlice from './slices/userSlice';
import uiSlice from './slices/uiSlice';
import themeSlice from './slices/themeSlice';
import socketSlice from './slices/socketSlice';
import gameSlice from './slices/gameSlice';
import settingsSlice from './slices/settingsSlice';
import notificationSlice from './slices/notificationSlice';
import fileSlice from './slices/fileSlice';
import modalSlice from './slices/modalSlice';
import adminSlice from './slices/adminSlice';
import tableSlice from './slices/tableSlice';
import navigationSlice from './slices/navigationSlice';
import inputSlice from './slices/inputSlice';
import cartSlice from './slices/cartSlice';
import advertisementSlice from './slices/advertisementSlice';

export const store = configureStore({
	reducer: {
		// User domain - authentication, profile, preferences
		user: userSlice,

		// UI domain - component states, loading, errors, form data
		ui: uiSlice,

		// Theme domain - themes, palettes, dark mode
		theme: themeSlice,

		// Socket domain - connection state, real-time events
		socket: socketSlice,

		// Game domain - game state, matches, leaderboards
		game: gameSlice,

		// Settings domain - application settings, configurations
		settings: settingsSlice,

		// Notification domain - alerts, toasts, achievements
		notifications: notificationSlice,

		// File domain - uploads, file management
		files: fileSlice,

		// Modal domain - modal states and data
		modals: modalSlice,

		// Admin domain - debug panels, performance monitoring, error logging
		admin: adminSlice,

		// Table domain - table state, sorting, filtering, selection
		table: tableSlice,

		// Navigation domain - navigation open/close, responsive, active items
		navigation: navigationSlice,

		// Input domain - input values, states, validation, focus
		input: inputSlice,

		// Cart domain - shopping cart items, pricing, checkout state
		cart: cartSlice,

		// Advertisement domain - ad display, providers, analytics
		advertisement: advertisementSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignore specific action types or paths that contain non-serializable data
				ignoredActions: [
					'socket/connected',
					'socket/disconnected',
				],
				ignoredPaths: ['socket.socketInstance'],
			},
		}),
	devTools: typeof window !== 'undefined',
});

// Infer store types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks for use throughout app
export const useAppDispatch = () =>
	useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
	useSelector;

// Export cart functionality
export * from './slices/cartSlice';
export { default as useCartRedux } from './hooks/useCartRedux';

// Export advertisement functionality
export {
	initializeContainer,
	updateContainerAds,
	rotateAds,
	setAutoRotation,
	setCurrentIndex,
	setContainerError,
	updateScreenSize,
	switchProvider,
	recordProviderFailure,
	updateProviderHealth,
	initializeComponent,
	setComponentState,
	setComponentVisibility,
	setComponentError,
	trackImpression,
	trackClick,
	updateRevenue,
	setGlobalEnabled,
	setDefaultProvider,
	updateProviderConfig,
	toggleProvider,
	setTrackingEnabled,
	setUserId,
	removeContainer,
	removeComponent,
	resetMetrics,
	setLoading as setAdLoading,
	setError as setAdError,
	selectAdvertisement,
	selectContainer,
	selectComponent,
	selectGlobalMetrics,
	selectProviders,
	selectEnabledProviders,
	selectIsGlobalEnabled,
	selectTrackingEnabled,
} from './slices/advertisementSlice';
export type { AdProviderType, AdState } from './slices/advertisementSlice';
export { default as useAdvertisementRedux } from './hooks/useAdvertisementRedux';

export default store;
