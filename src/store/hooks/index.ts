/**
 * Custom Redux Hooks
 *
 * Higher-level hooks that combine multiple Redux operations
 * for common use cases in the UI kit
 */

import { useCallback } from 'react';
import {
	useAppDispatch,
	useAppSelector,
	RootState,
} from '../index';

// Theme hooks
export const useTheme = () => {
	const dispatch = useAppDispatch();
	const theme = useAppSelector(
		(state: RootState) => state.theme
	);

	const toggleDarkMode = useCallback(() => {
		// Assuming you have a toggleDarkMode action in themeSlice
		// dispatch(toggleDarkMode());
	}, [dispatch]);

	return {
		currentTheme: theme,
		toggleDarkMode,
	};
};

// Modal hooks
export const useModal = (modalId: string) => {
	const dispatch = useAppDispatch();
	const modalState = useAppSelector(
		(state: RootState) => state.modals
	);

	const openModal = useCallback(
		(data?: any) => {
			// Assuming you have openModal action in modalSlice
			// dispatch(openModal({ id: modalId, data }));
		},
		[dispatch, modalId]
	);

	const closeModal = useCallback(() => {
		// dispatch(closeModal(modalId));
	}, [dispatch, modalId]);

	return {
		modalState,
		openModal,
		closeModal,
	};
};

// Notification hooks
export const useNotifications = () => {
	const dispatch = useAppDispatch();
	const notifications = useAppSelector(
		(state: RootState) => state.notifications
	);

	const showSuccess = useCallback(
		(message: string) => {
			// dispatch(addNotification({ type: 'success', message }));
		},
		[dispatch]
	);

	const showError = useCallback(
		(message: string) => {
			// dispatch(addNotification({ type: 'error', message }));
		},
		[dispatch]
	);

	const showInfo = useCallback(
		(message: string) => {
			// dispatch(addNotification({ type: 'info', message }));
		},
		[dispatch]
	);

	const dismissNotification = useCallback(
		(id: string) => {
			// dispatch(removeNotification(id));
		},
		[dispatch]
	);

	return {
		notifications,
		showSuccess,
		showError,
		showInfo,
		dismissNotification,
	};
};

// Loading state hook
export const useLoading = () => {
	const loading = useAppSelector(
		(state: RootState) => state.ui
	);
	return loading;
};

// Form input hooks
export const useInput = (inputId: string) => {
	const dispatch = useAppDispatch();
	const inputState = useAppSelector(
		(state: RootState) => state.input
	);

	const setValue = useCallback(
		(value: any) => {
			// dispatch(setInputValue({ id: inputId, value }));
		},
		[dispatch, inputId]
	);

	const setError = useCallback(
		(error: string | null) => {
			// dispatch(setInputError({ id: inputId, error }));
		},
		[dispatch, inputId]
	);

	const setTouched = useCallback(() => {
		// dispatch(setInputTouched(inputId));
	}, [dispatch, inputId]);

	const componentState =
		inputState.componentStates[inputId];

	return {
		value: componentState?.value || '',
		error: componentState?.errorText || null,
		isFocused: componentState?.isFocused || false,
		isValid: componentState?.isValid || true,
		state: componentState?.state || 'default',
		setValue,
		setError,
		setTouched,
	};
};

// Admin/Debug hooks
export const useAdminDebug = () => {
	const admin = useAppSelector(
		(state: RootState) => state.admin
	);
	const dispatch = useAppDispatch();

	const logError = useCallback(
		(error: any) => {
			// dispatch(logError(error));
		},
		[dispatch]
	);

	const clearLogs = useCallback(() => {
		// dispatch(clearLogs());
	}, [dispatch]);

	return {
		admin,
		logError,
		clearLogs,
	};
};

// Navigation hooks
export const useNavigation = () => {
	const navigation = useAppSelector(
		(state: RootState) => state.navigation
	);
	const dispatch = useAppDispatch();

	const toggleSidebar = useCallback(() => {
		// dispatch(toggleSidebar());
	}, [dispatch]);

	const setActiveItem = useCallback(
		(itemId: string) => {
			// dispatch(setActiveItem(itemId));
		},
		[dispatch]
	);

	return {
		navigation,
		toggleSidebar,
		setActiveItem,
	};
};

// Table hooks
export const useTable = () => {
	const table = useAppSelector(
		(state: RootState) => state.table
	);
	const dispatch = useAppDispatch();

	const setSortBy = useCallback(
		(column: string) => {
			// dispatch(setSortBy(column));
		},
		[dispatch]
	);

	const setFilter = useCallback(
		(filter: any) => {
			// dispatch(setFilter(filter));
		},
		[dispatch]
	);

	return {
		table,
		setSortBy,
		setFilter,
	};
};
