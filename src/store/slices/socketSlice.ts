/**
 * Socket Slice - Socket Domain State Management
 *
 * Responsible for:
 * - WebSocket connection state
 * - Real-time events and messages
 * - Connection management
 * - Socket-related settings
 *
 * Separated socket concerns from other domains
 */

import {
	createSlice,
	createAsyncThunk,
	PayloadAction,
} from '@reduxjs/toolkit';

// Socket interfaces
export interface SocketMessage {
	id: string;
	type: string;
	data: any;
	timestamp: number;
	acknowledged: boolean;
}

export interface SocketEvent {
	type: string;
	handler: string;
	active: boolean;
}

export interface SocketState {
	// Connection
	isConnected: boolean;
	isConnecting: boolean;
	connectionError: string | null;
	reconnectAttempts: number;
	maxReconnectAttempts: number;
	reconnectDelay: number;

	// Socket instance (non-serializable, handle carefully)
	socketId: string | null;
	url: string | null;

	// Messages
	messages: SocketMessage[];
	pendingMessages: SocketMessage[];
	messageHistory: SocketMessage[];
	maxMessageHistory: number;

	// Events
	registeredEvents: SocketEvent[];

	// Settings
	autoReconnect: boolean;
	heartbeatInterval: number;
	lastHeartbeat: number | null;

	// Statistics
	stats: {
		messagesReceived: number;
		messagesSent: number;
		connectTime: number | null;
		totalUptime: number;
		reconnectCount: number;
	};
}

const initialState: SocketState = {
	// Connection
	isConnected: false,
	isConnecting: false,
	connectionError: null,
	reconnectAttempts: 0,
	maxReconnectAttempts: 5,
	reconnectDelay: 1000,

	// Socket instance
	socketId: null,
	url: null,

	// Messages
	messages: [],
	pendingMessages: [],
	messageHistory: [],
	maxMessageHistory: 100,

	// Events
	registeredEvents: [],

	// Settings
	autoReconnect: true,
	heartbeatInterval: 30000,
	lastHeartbeat: null,

	// Statistics
	stats: {
		messagesReceived: 0,
		messagesSent: 0,
		connectTime: null,
		totalUptime: 0,
		reconnectCount: 0,
	},
};

// Async thunks for socket operations
export const connectSocket = createAsyncThunk(
	'socket/connect',
	async (params: { url: string; options?: any }) => {
		const { url, options = {} } = params;

		// Mock socket connection - replace with actual implementation
		return new Promise<{
			socketId: string;
			url: string;
			connectTime: number;
		}>((resolve, reject) => {
			setTimeout(() => {
				// Simulate successful connection
				resolve({
					socketId: `socket-${Date.now()}`,
					url,
					connectTime: Date.now(),
				});
			}, 1000);
		});
	}
);

export const disconnectSocket = createAsyncThunk(
	'socket/disconnect',
	async () => {
		// Mock socket disconnection
		return new Promise<{ disconnectTime: number }>(
			(resolve) => {
				setTimeout(() => {
					resolve({ disconnectTime: Date.now() });
				}, 500);
			}
		);
	}
);

export const sendMessage = createAsyncThunk(
	'socket/sendMessage',
	async (message: { type: string; data: any }) => {
		// Mock sending message
		const socketMessage: SocketMessage = {
			id: `msg-${Date.now()}`,
			type: message.type,
			data: message.data,
			timestamp: Date.now(),
			acknowledged: false,
		};

		// Simulate network delay
		await new Promise((resolve) =>
			setTimeout(resolve, 100)
		);

		return { ...socketMessage, acknowledged: true };
	}
);

const socketSlice = createSlice({
	name: 'socket',
	initialState,
	reducers: {
		// Connection management
		setConnecting: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.isConnecting = action.payload;
		},

		setConnectionError: (
			state,
			action: PayloadAction<string | null>
		) => {
			state.connectionError = action.payload;
		},

		clearConnectionError: (state) => {
			state.connectionError = null;
		},

		// Message handling
		receiveMessage: (
			state,
			action: PayloadAction<SocketMessage>
		) => {
			const message = action.payload;
			state.messages.push(message);
			state.messageHistory.push(message);
			state.stats.messagesReceived += 1;

			// Trim message history if needed
			if (
				state.messageHistory.length >
				state.maxMessageHistory
			) {
				state.messageHistory = state.messageHistory.slice(
					-state.maxMessageHistory
				);
			}
		},

		acknowledgeMessage: (
			state,
			action: PayloadAction<string>
		) => {
			const messageId = action.payload;
			const message = state.messages.find(
				(m) => m.id === messageId
			);
			if (message) {
				message.acknowledged = true;
			}

			const pendingMessage = state.pendingMessages.find(
				(m) => m.id === messageId
			);
			if (pendingMessage) {
				pendingMessage.acknowledged = true;
			}
		},

		clearMessages: (state) => {
			state.messages = [];
		},

		clearMessageHistory: (state) => {
			state.messageHistory = [];
		},

		// Event management
		registerEvent: (
			state,
			action: PayloadAction<{
				type: string;
				handler: string;
			}>
		) => {
			const { type, handler } = action.payload;
			const existingEvent = state.registeredEvents.find(
				(e) => e.type === type
			);

			if (existingEvent) {
				existingEvent.handler = handler;
				existingEvent.active = true;
			} else {
				state.registeredEvents.push({
					type,
					handler,
					active: true,
				});
			}
		},

		unregisterEvent: (
			state,
			action: PayloadAction<string>
		) => {
			const eventType = action.payload;
			const eventIndex = state.registeredEvents.findIndex(
				(e) => e.type === eventType
			);
			if (eventIndex >= 0) {
				state.registeredEvents.splice(eventIndex, 1);
			}
		},

		toggleEvent: (state, action: PayloadAction<string>) => {
			const eventType = action.payload;
			const event = state.registeredEvents.find(
				(e) => e.type === eventType
			);
			if (event) {
				event.active = !event.active;
			}
		},

		// Settings
		updateSettings: (
			state,
			action: PayloadAction<{
				autoReconnect?: boolean;
				maxReconnectAttempts?: number;
				reconnectDelay?: number;
				heartbeatInterval?: number;
				maxMessageHistory?: number;
			}>
		) => {
			const {
				autoReconnect,
				maxReconnectAttempts,
				reconnectDelay,
				heartbeatInterval,
				maxMessageHistory,
			} = action.payload;

			if (autoReconnect !== undefined)
				state.autoReconnect = autoReconnect;
			if (maxReconnectAttempts !== undefined)
				state.maxReconnectAttempts = maxReconnectAttempts;
			if (reconnectDelay !== undefined)
				state.reconnectDelay = reconnectDelay;
			if (heartbeatInterval !== undefined)
				state.heartbeatInterval = heartbeatInterval;
			if (maxMessageHistory !== undefined)
				state.maxMessageHistory = maxMessageHistory;
		},

		// Heartbeat
		updateHeartbeat: (state) => {
			state.lastHeartbeat = Date.now();
		},

		// Statistics
		incrementReconnectCount: (state) => {
			state.stats.reconnectCount += 1;
		},

		updateUptime: (
			state,
			action: PayloadAction<number>
		) => {
			state.stats.totalUptime = action.payload;
		},

		resetStats: (state) => {
			state.stats = {
				messagesReceived: 0,
				messagesSent: 0,
				connectTime: null,
				totalUptime: 0,
				reconnectCount: 0,
			};
		},

		// Utility
		resetReconnectAttempts: (state) => {
			state.reconnectAttempts = 0;
		},
	},
	extraReducers: (builder) => {
		// Connect socket
		builder
			.addCase(connectSocket.pending, (state) => {
				state.isConnecting = true;
				state.connectionError = null;
			})
			.addCase(connectSocket.fulfilled, (state, action) => {
				state.isConnecting = false;
				state.isConnected = true;
				state.socketId = action.payload.socketId;
				state.url = action.payload.url;
				state.stats.connectTime =
					action.payload.connectTime;
				state.reconnectAttempts = 0;
			})
			.addCase(connectSocket.rejected, (state, action) => {
				state.isConnecting = false;
				state.isConnected = false;
				state.connectionError =
					action.error.message || 'Connection failed';
				state.reconnectAttempts += 1;
			});

		// Disconnect socket
		builder.addCase(
			disconnectSocket.fulfilled,
			(state, action) => {
				state.isConnected = false;
				state.isConnecting = false;
				state.socketId = null;
				state.url = null;

				// Update uptime
				if (state.stats.connectTime) {
					state.stats.totalUptime +=
						action.payload.disconnectTime -
						state.stats.connectTime;
				}
				state.stats.connectTime = null;
			}
		);

		// Send message
		builder
			.addCase(sendMessage.pending, (state, action) => {
				// Add to pending messages
				const tempMessage: SocketMessage = {
					id: `temp-${Date.now()}`,
					type: action.meta.arg.type,
					data: action.meta.arg.data,
					timestamp: Date.now(),
					acknowledged: false,
				};
				state.pendingMessages.push(tempMessage);
			})
			.addCase(sendMessage.fulfilled, (state, action) => {
				// Remove from pending and update stats
				state.pendingMessages =
					state.pendingMessages.filter(
						(m) => m.id !== action.payload.id
					);
				state.stats.messagesSent += 1;
			})
			.addCase(sendMessage.rejected, (state, action) => {
				// Handle failed message send
				state.connectionError =
					action.error.message || 'Failed to send message';
			});
	},
});

// Export actions
export const {
	setConnecting,
	setConnectionError,
	clearConnectionError,
	receiveMessage,
	acknowledgeMessage,
	clearMessages,
	clearMessageHistory,
	registerEvent,
	unregisterEvent,
	toggleEvent,
	updateSettings,
	updateHeartbeat,
	incrementReconnectCount,
	updateUptime,
	resetStats,
	resetReconnectAttempts,
} = socketSlice.actions;

// Selectors
export const selectSocket = (state: {
	socket: SocketState;
}) => state.socket;
export const selectIsConnected = (state: {
	socket: SocketState;
}) => state.socket.isConnected;
export const selectIsConnecting = (state: {
	socket: SocketState;
}) => state.socket.isConnecting;
export const selectConnectionError = (state: {
	socket: SocketState;
}) => state.socket.connectionError;
export const selectMessages = (state: {
	socket: SocketState;
}) => state.socket.messages;
export const selectPendingMessages = (state: {
	socket: SocketState;
}) => state.socket.pendingMessages;
export const selectMessageHistory = (state: {
	socket: SocketState;
}) => state.socket.messageHistory;
export const selectRegisteredEvents = (state: {
	socket: SocketState;
}) => state.socket.registeredEvents;
export const selectSocketStats = (state: {
	socket: SocketState;
}) => state.socket.stats;
export const selectSocketSettings = (state: {
	socket: SocketState;
}) => ({
	autoReconnect: state.socket.autoReconnect,
	maxReconnectAttempts: state.socket.maxReconnectAttempts,
	reconnectDelay: state.socket.reconnectDelay,
	heartbeatInterval: state.socket.heartbeatInterval,
	maxMessageHistory: state.socket.maxMessageHistory,
});

export default socketSlice.reducer;
