/**
 * Async Redux Actions (Thunks)
 *
 * Example async actions using Redux Toolkit's createAsyncThunk
 */

import { createAsyncThunk } from '@reduxjs/toolkit';

// Example: Async user authentication
export const loginUser = createAsyncThunk(
	'user/login',
	async (
		credentials: { email: string; password: string },
		{ rejectWithValue }
	) => {
		try {
			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(credentials),
			});

			if (!response.ok) {
				throw new Error('Login failed');
			}

			const data = await response.json();
			return data.user;
		} catch (error) {
			return rejectWithValue(
				error instanceof Error ?
					error.message
				:	'Login failed'
			);
		}
	}
);

// Example: Async file upload
export const uploadFile = createAsyncThunk(
	'files/upload',
	async (file: File, { rejectWithValue }) => {
		try {
			const formData = new FormData();
			formData.append('file', file);

			const response = await fetch('/api/files/upload', {
				method: 'POST',
				body: formData,
			});

			if (!response.ok) {
				throw new Error('Upload failed');
			}

			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(
				error instanceof Error ?
					error.message
				:	'Upload failed'
			);
		}
	}
);

// Example: Async theme loading
export const loadTheme = createAsyncThunk(
	'theme/load',
	async (themeId: string, { rejectWithValue }) => {
		try {
			const response = await fetch(
				`/api/themes/${themeId}`
			);

			if (!response.ok) {
				throw new Error('Theme loading failed');
			}

			const theme = await response.json();
			return theme;
		} catch (error) {
			return rejectWithValue(
				error instanceof Error ?
					error.message
				:	'Theme loading failed'
			);
		}
	}
);

// Example: Async data fetching with pagination
export const fetchTableData = createAsyncThunk(
	'table/fetchData',
	async (
		params: {
			page: number;
			pageSize: number;
			sortBy?: string;
			filter?: any;
		},
		{ rejectWithValue }
	) => {
		try {
			const queryParams = new URLSearchParams({
				page: params.page.toString(),
				pageSize: params.pageSize.toString(),
				...(params.sortBy && { sortBy: params.sortBy }),
				...(params.filter && {
					filter: JSON.stringify(params.filter),
				}),
			});

			const response = await fetch(
				`/api/table/data?${queryParams}`
			);

			if (!response.ok) {
				throw new Error('Data fetching failed');
			}

			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(
				error instanceof Error ?
					error.message
				:	'Data fetching failed'
			);
		}
	}
);

// Example: WebSocket connection management
export const connectWebSocket = createAsyncThunk(
	'socket/connect',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const socket = new WebSocket('ws://localhost:8080');

			return new Promise<{
				connected: boolean;
				socketId: string;
			}>((resolve, reject) => {
				socket.onopen = () => {
					resolve({
						connected: true,
						socketId: 'socket-' + Date.now(),
					});
				};

				socket.onerror = (error) => {
					reject(error);
				};

				socket.onmessage = (event) => {
					// Dispatch real-time updates to relevant slices
					const message = JSON.parse(event.data);
					// dispatch(handleSocketMessage(message));
				};
			});
		} catch (error) {
			return rejectWithValue(
				error instanceof Error ?
					error.message
				:	'WebSocket connection failed'
			);
		}
	}
);
