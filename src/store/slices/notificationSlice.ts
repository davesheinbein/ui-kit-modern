/**
 * Notification Slice - Notification Domain State Management
 *
 * Responsible for:
 * - Toast notifications and alerts
 * - Achievement notifications
 * - System messages
 * - Notification queue and display
 *
 * Simple notification domain for all alert/notification concerns
 */

import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';

// Notification interfaces
export interface Notification {
	id: string;
	type:
		| 'success'
		| 'error'
		| 'warning'
		| 'info'
		| 'achievement';
	title: string;
	message: string;
	icon?: string;
	avatar?: string;
	timestamp: number;
	duration?: number; // Auto-dismiss duration in ms, null for persistent
	persistent?: boolean;
	actions?: NotificationAction[];
	data?: any;
	read: boolean;
	dismissed: boolean;
}

export interface NotificationAction {
	label: string;
	action: string;
	style?: 'primary' | 'secondary' | 'danger';
	data?: any;
}

export interface NotificationState {
	// Active notifications (displayed in UI)
	active: Notification[];

	// All notifications (history)
	all: Notification[];

	// Queue for notifications waiting to be shown
	queue: Notification[];

	// Display settings
	maxActive: number;
	defaultDuration: number;
	position:
		| 'top-right'
		| 'top-left'
		| 'bottom-right'
		| 'bottom-left'
		| 'top-center'
		| 'bottom-center';

	// Statistics
	stats: {
		total: number;
		unread: number;
		dismissed: number;
		achievements: number;
	};

	// Settings
	soundEnabled: boolean;
	showAchievements: boolean;
	showSystem: boolean;
	showErrors: boolean;
	groupSimilar: boolean;

	// Loading
	isLoading: boolean;
	error: string | null;
}

const initialState: NotificationState = {
	active: [],
	all: [],
	queue: [],

	// Display settings
	maxActive: 5,
	defaultDuration: 5000,
	position: 'top-right',

	// Statistics
	stats: {
		total: 0,
		unread: 0,
		dismissed: 0,
		achievements: 0,
	},

	// Settings
	soundEnabled: true,
	showAchievements: true,
	showSystem: true,
	showErrors: true,
	groupSimilar: true,

	// Loading
	isLoading: false,
	error: null,
};

const notificationSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		// Add notifications
		addNotification: (
			state,
			action: PayloadAction<
				Omit<
					Notification,
					'id' | 'timestamp' | 'read' | 'dismissed'
				>
			>
		) => {
			const notification: Notification = {
				...action.payload,
				id: `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
				timestamp: Date.now(),
				read: false,
				dismissed: false,
			};

			// Add to all notifications
			state.all.unshift(notification);
			state.stats.total += 1;
			state.stats.unread += 1;

			// Track achievement notifications
			if (notification.type === 'achievement') {
				state.stats.achievements += 1;
			}

			// Check if we can show immediately or queue
			if (state.active.length < state.maxActive) {
				state.active.push(notification);
			} else {
				state.queue.push(notification);
			}
		},

		// Quick notification creators
		addSuccess: (
			state,
			action: PayloadAction<{
				title: string;
				message: string;
				duration?: number;
			}>
		) => {
			const { title, message, duration } = action.payload;
			notificationSlice.caseReducers.addNotification(
				state,
				{
					type: 'addNotification',
					payload: {
						type: 'success',
						title,
						message,
						duration: duration || state.defaultDuration,
					},
				}
			);
		},

		addError: (
			state,
			action: PayloadAction<{
				title: string;
				message: string;
				persistent?: boolean;
			}>
		) => {
			const {
				title,
				message,
				persistent = false,
			} = action.payload;
			notificationSlice.caseReducers.addNotification(
				state,
				{
					type: 'addNotification',
					payload: {
						type: 'error',
						title,
						message,
						persistent,
						duration:
							persistent ? undefined : (
								state.defaultDuration * 2
							),
					},
				}
			);
		},

		addWarning: (
			state,
			action: PayloadAction<{
				title: string;
				message: string;
				duration?: number;
			}>
		) => {
			const { title, message, duration } = action.payload;
			notificationSlice.caseReducers.addNotification(
				state,
				{
					type: 'addNotification',
					payload: {
						type: 'warning',
						title,
						message,
						duration: duration || state.defaultDuration,
					},
				}
			);
		},

		addInfo: (
			state,
			action: PayloadAction<{
				title: string;
				message: string;
				duration?: number;
			}>
		) => {
			const { title, message, duration } = action.payload;
			notificationSlice.caseReducers.addNotification(
				state,
				{
					type: 'addNotification',
					payload: {
						type: 'info',
						title,
						message,
						duration: duration || state.defaultDuration,
					},
				}
			);
		},

		addAchievement: (
			state,
			action: PayloadAction<{
				title: string;
				message: string;
				icon?: string;
				data?: any;
			}>
		) => {
			const { title, message, icon, data } = action.payload;
			notificationSlice.caseReducers.addNotification(
				state,
				{
					type: 'addNotification',
					payload: {
						type: 'achievement',
						title,
						message,
						icon,
						data,
						duration: 8000, // Longer duration for achievements
						persistent: false,
					},
				}
			);
		},

		// Dismiss notifications
		dismissNotification: (
			state,
			action: PayloadAction<string>
		) => {
			const notificationId = action.payload;

			// Remove from active
			const activeIndex = state.active.findIndex(
				(n) => n.id === notificationId
			);
			if (activeIndex >= 0) {
				state.active.splice(activeIndex, 1);

				// Move next queued notification to active
				if (state.queue.length > 0) {
					const nextNotification = state.queue.shift()!;
					state.active.push(nextNotification);
				}
			}

			// Mark as dismissed in all notifications
			const notification = state.all.find(
				(n) => n.id === notificationId
			);
			if (notification && !notification.dismissed) {
				notification.dismissed = true;
				state.stats.dismissed += 1;
			}
		},

		dismissAll: (state) => {
			// Clear active notifications
			state.active.forEach((notification) => {
				if (!notification.dismissed) {
					notification.dismissed = true;
					state.stats.dismissed += 1;
				}
			});
			state.active = [];

			// Clear queue
			state.queue.forEach((notification) => {
				if (!notification.dismissed) {
					notification.dismissed = true;
					state.stats.dismissed += 1;
				}
			});
			state.queue = [];
		},

		// Mark as read
		markAsRead: (state, action: PayloadAction<string>) => {
			const notificationId = action.payload;
			const notification = state.all.find(
				(n) => n.id === notificationId
			);
			if (notification && !notification.read) {
				notification.read = true;
				state.stats.unread -= 1;
			}
		},

		markAllAsRead: (state) => {
			state.all.forEach((notification) => {
				if (!notification.read) {
					notification.read = true;
				}
			});
			state.stats.unread = 0;
		},

		// Handle notification actions
		executeAction: (
			state,
			action: PayloadAction<{
				notificationId: string;
				actionIndex: number;
			}>
		) => {
			const { notificationId } = action.payload;
			// Mark notification as read when action is executed
			const notification = state.all.find(
				(n) => n.id === notificationId
			);
			if (notification && !notification.read) {
				notification.read = true;
				state.stats.unread -= 1;
			}
		},

		// Settings
		updateSettings: (
			state,
			action: PayloadAction<{
				soundEnabled?: boolean;
				showAchievements?: boolean;
				showSystem?: boolean;
				showErrors?: boolean;
				groupSimilar?: boolean;
				maxActive?: number;
				defaultDuration?: number;
				position?: NotificationState['position'];
			}>
		) => {
			const {
				soundEnabled,
				showAchievements,
				showSystem,
				showErrors,
				groupSimilar,
				maxActive,
				defaultDuration,
				position,
			} = action.payload;

			if (soundEnabled !== undefined)
				state.soundEnabled = soundEnabled;
			if (showAchievements !== undefined)
				state.showAchievements = showAchievements;
			if (showSystem !== undefined)
				state.showSystem = showSystem;
			if (showErrors !== undefined)
				state.showErrors = showErrors;
			if (groupSimilar !== undefined)
				state.groupSimilar = groupSimilar;
			if (maxActive !== undefined)
				state.maxActive = maxActive;
			if (defaultDuration !== undefined)
				state.defaultDuration = defaultDuration;
			if (position !== undefined) state.position = position;
		},

		toggleSound: (state) => {
			state.soundEnabled = !state.soundEnabled;
		},

		// Clear history
		clearHistory: (state) => {
			state.all = state.all.filter(
				(n) =>
					state.active.includes(n) ||
					state.queue.includes(n)
			);
			// Recalculate stats
			state.stats.total = state.all.length;
			state.stats.unread = state.all.filter(
				(n) => !n.read
			).length;
			state.stats.dismissed = state.all.filter(
				(n) => n.dismissed
			).length;
			state.stats.achievements = state.all.filter(
				(n) => n.type === 'achievement'
			).length;
		},

		clearAll: (state) => {
			state.active = [];
			state.all = [];
			state.queue = [];
			state.stats = {
				total: 0,
				unread: 0,
				dismissed: 0,
				achievements: 0,
			};
		},

		// Filter notifications
		removeByType: (
			state,
			action: PayloadAction<Notification['type']>
		) => {
			const type = action.payload;

			// Remove from active
			state.active = state.active.filter(
				(n) => n.type !== type
			);

			// Remove from queue
			state.queue = state.queue.filter(
				(n) => n.type !== type
			);

			// Remove from all and update stats
			const removedCount = state.all.filter(
				(n) => n.type === type
			).length;
			const removedUnread = state.all.filter(
				(n) => n.type === type && !n.read
			).length;
			const removedAchievements =
				type === 'achievement' ?
					state.all.filter((n) => n.type === 'achievement')
						.length
				:	0;

			state.all = state.all.filter((n) => n.type !== type);
			state.stats.total -= removedCount;
			state.stats.unread -= removedUnread;
			if (type === 'achievement') {
				state.stats.achievements -= removedAchievements;
			}
		},

		// Error handling
		setError: (
			state,
			action: PayloadAction<string | null>
		) => {
			state.error = action.payload;
		},

		clearError: (state) => {
			state.error = null;
		},

		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},

		// Auto-dismiss expired notifications
		processExpiredNotifications: (state) => {
			const now = Date.now();
			const expiredIds: string[] = [];

			state.active.forEach((notification) => {
				if (
					!notification.persistent &&
					notification.duration &&
					now - notification.timestamp >=
						notification.duration
				) {
					expiredIds.push(notification.id);
				}
			});

			// Dismiss expired notifications
			expiredIds.forEach((id) => {
				notificationSlice.caseReducers.dismissNotification(
					state,
					{
						type: 'dismissNotification',
						payload: id,
					}
				);
			});
		},
	},
});

// Export actions
export const {
	addNotification,
	addSuccess,
	addError,
	addWarning,
	addInfo,
	addAchievement,
	dismissNotification,
	dismissAll,
	markAsRead,
	markAllAsRead,
	executeAction,
	updateSettings,
	toggleSound,
	clearHistory,
	clearAll,
	removeByType,
	setError,
	clearError,
	setLoading,
	processExpiredNotifications,
} = notificationSlice.actions;

// Selectors
export const selectNotifications = (state: {
	notifications: NotificationState;
}) => state.notifications;
export const selectActiveNotifications = (state: {
	notifications: NotificationState;
}) => state.notifications.active;
export const selectAllNotifications = (state: {
	notifications: NotificationState;
}) => state.notifications.all;
export const selectQueuedNotifications = (state: {
	notifications: NotificationState;
}) => state.notifications.queue;
export const selectNotificationStats = (state: {
	notifications: NotificationState;
}) => state.notifications.stats;
export const selectUnreadNotifications = (state: {
	notifications: NotificationState;
}) => state.notifications.all.filter((n) => !n.read);
export const selectRecentNotifications =
	(limit: number = 10) =>
	(state: { notifications: NotificationState }) =>
		state.notifications.all.slice(0, limit);
export const selectNotificationsByType =
	(type: Notification['type']) =>
	(state: { notifications: NotificationState }) =>
		state.notifications.all.filter((n) => n.type === type);
export const selectAchievementNotifications = (state: {
	notifications: NotificationState;
}) =>
	state.notifications.all.filter(
		(n) => n.type === 'achievement'
	);
export const selectNotificationSettings = (state: {
	notifications: NotificationState;
}) => ({
	soundEnabled: state.notifications.soundEnabled,
	showAchievements: state.notifications.showAchievements,
	showSystem: state.notifications.showSystem,
	showErrors: state.notifications.showErrors,
	groupSimilar: state.notifications.groupSimilar,
	maxActive: state.notifications.maxActive,
	defaultDuration: state.notifications.defaultDuration,
	position: state.notifications.position,
});

export default notificationSlice.reducer;
