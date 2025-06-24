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

export default store;

// Minimal root reducer (add your slices as needed)
// const rootReducer = {};

// Use the same reducers as the main store for Storybook
const storybookRootReducer = {
	user: userSlice,
	ui: uiSlice,
	theme: themeSlice,
	socket: socketSlice,
	game: gameSlice,
	settings: settingsSlice,
	notifications: notificationSlice,
	files: fileSlice,
	modals: modalSlice,
	admin: adminSlice,
	table: tableSlice,
	navigation: navigationSlice,
	input: inputSlice,
};

export const storybookStore = configureStore({
	reducer: storybookRootReducer,
});

export type StorybookRootState = ReturnType<
	typeof storybookStore.getState
>;
export type StorybookAppDispatch =
	typeof storybookStore.dispatch;

// Typed hooks for use throughout Storybook
export const useStorybookDispatch = () =>
	useDispatch<StorybookAppDispatch>();
export const useStorybookSelector: TypedUseSelectorHook<StorybookRootState> =
	useSelector;
