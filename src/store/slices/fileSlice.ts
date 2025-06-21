/**
 * File Slice - File Domain State Management
 *
 * Responsible for:
 * - File upload states and progress
 * - File management and organization
 * - File validation and errors
 * - File metadata and processing
 *
 * Simple file domain for all file-related operations
 */

import {
	createSlice,
	createAsyncThunk,
	PayloadAction,
} from '@reduxjs/toolkit';

// File interfaces
export interface FileItem {
	id: string;
	name: string;
	size: number;
	type: string;
	lastModified: number;
	status:
		| 'pending'
		| 'uploading'
		| 'processing'
		| 'completed'
		| 'error'
		| 'cancelled';
	progress: number;
	url?: string;
	thumbnailUrl?: string;
	error?: string;
	metadata?: Record<string, any>;
}

export interface FileUploadConfig {
	maxSize: number;
	maxFiles: number;
	allowedTypes: string[];
	autoUpload: boolean;
	generateThumbnails: boolean;
	validateOnSelect: boolean;
	uploadEndpoint: string;
	chunkSize?: number;
	retryAttempts: number;
}

export interface UploadSession {
	id: string;
	files: FileItem[];
	status:
		| 'idle'
		| 'active'
		| 'completed'
		| 'error'
		| 'cancelled';
	totalSize: number;
	uploadedSize: number;
	startTime?: number;
	endTime?: number;
	config: FileUploadConfig;
}

export interface FileState {
	// Current upload sessions
	sessions: Record<string, UploadSession>;
	activeSessionId: string | null;

	// Global file management
	files: FileItem[];
	selectedFiles: string[];

	// Global upload settings
	globalConfig: FileUploadConfig;

	// UI Component States (per component instance)
	componentStates: Record<
		string,
		{
			dragActive: boolean;
			uploadProgress: number;
			validationErrors: string[];
			selectedFiles: File[]; // Store actual File objects for UI purposes
		}
	>;

	// Validation
	validationErrors: Record<string, string[]>;

	// Statistics
	stats: {
		totalUploads: number;
		successfulUploads: number;
		failedUploads: number;
		totalBytesUploaded: number;
		averageUploadTime: number;
	};

	// Loading states
	isLoading: boolean;
	error: string | null;
}

const defaultConfig: FileUploadConfig = {
	maxSize: 10 * 1024 * 1024, // 10MB
	maxFiles: 5,
	allowedTypes: [
		'image/*',
		'video/*',
		'audio/*',
		'.pdf',
		'.doc',
		'.docx',
	],
	autoUpload: false,
	generateThumbnails: true,
	validateOnSelect: true,
	uploadEndpoint: '/api/upload',
	chunkSize: 1024 * 1024, // 1MB chunks
	retryAttempts: 3,
};

const initialState: FileState = {
	sessions: {},
	activeSessionId: null,
	files: [],
	selectedFiles: [],
	globalConfig: defaultConfig,
	componentStates: {},
	validationErrors: {},
	stats: {
		totalUploads: 0,
		successfulUploads: 0,
		failedUploads: 0,
		totalBytesUploaded: 0,
		averageUploadTime: 0,
	},
	isLoading: false,
	error: null,
};

// Async thunks for file operations
export const uploadFile = createAsyncThunk(
	'files/uploadFile',
	async (params: {
		sessionId: string;
		fileId: string;
		file: File;
		config: FileUploadConfig;
	}) => {
		const { sessionId, fileId, file, config } = params;

		// Mock file upload with progress simulation
		return new Promise<{
			fileId: string;
			url: string;
			metadata: Record<string, any>;
		}>((resolve, reject) => {
			let progress = 0;
			const interval = setInterval(() => {
				progress += Math.random() * 20;
				if (progress >= 100) {
					clearInterval(interval);
					resolve({
						fileId,
						url: `https://example.com/files/${fileId}`,
						metadata: {
							originalName: file.name,
							mimeType: file.type,
							uploadedAt: Date.now(),
						},
					});
				}
			}, 200);
		});
	}
);

export const generateThumbnail = createAsyncThunk(
	'files/generateThumbnail',
	async (params: { fileId: string; file: File }) => {
		const { fileId, file } = params;

		// Mock thumbnail generation
		return new Promise<{
			fileId: string;
			thumbnailUrl: string;
		}>((resolve) => {
			setTimeout(() => {
				resolve({
					fileId,
					thumbnailUrl: `https://example.com/thumbnails/${fileId}`,
				});
			}, 1000);
		});
	}
);

export const validateFiles = createAsyncThunk(
	'files/validateFiles',
	async (params: {
		files: File[];
		config: FileUploadConfig;
	}) => {
		const { files, config } = params;
		const errors: Record<string, string[]> = {};

		// Mock validation
		files.forEach((file, index) => {
			const fileErrors: string[] = [];

			// Size validation
			if (file.size > config.maxSize) {
				fileErrors.push(
					`File size exceeds maximum allowed size of ${config.maxSize / (1024 * 1024)}MB`
				);
			}

			// Type validation
			const isAllowedType = config.allowedTypes.some(
				(type) => {
					if (type.includes('*')) {
						return file.type.startsWith(
							type.replace('*', '')
						);
					}
					return (
						file.type === type || file.name.endsWith(type)
					);
				}
			);

			if (!isAllowedType) {
				fileErrors.push(
					`File type ${file.type} is not allowed`
				);
			}

			if (fileErrors.length > 0) {
				errors[`file-${index}`] = fileErrors;
			}
		});

		return errors;
	}
);

const fileSlice = createSlice({
	name: 'files',
	initialState,
	reducers: {
		// Session management
		createSession: (
			state,
			action: PayloadAction<{
				sessionId: string;
				config?: Partial<FileUploadConfig>;
			}>
		) => {
			const { sessionId, config = {} } = action.payload;
			state.sessions[sessionId] = {
				id: sessionId,
				files: [],
				status: 'idle',
				totalSize: 0,
				uploadedSize: 0,
				config: { ...state.globalConfig, ...config },
			};
			state.activeSessionId = sessionId;
		},

		removeSession: (
			state,
			action: PayloadAction<string>
		) => {
			const sessionId = action.payload;
			delete state.sessions[sessionId];
			if (state.activeSessionId === sessionId) {
				state.activeSessionId = null;
			}
		},

		setActiveSession: (
			state,
			action: PayloadAction<string | null>
		) => {
			state.activeSessionId = action.payload;
		},

		// File management
		addFiles: (
			state,
			action: PayloadAction<{
				sessionId: string;
				files: File[];
			}>
		) => {
			const { sessionId, files } = action.payload;
			const session = state.sessions[sessionId];

			if (session) {
				const newFiles: FileItem[] = files.map((file) => ({
					id: `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
					name: file.name,
					size: file.size,
					type: file.type,
					lastModified: file.lastModified,
					status: 'pending',
					progress: 0,
				}));

				session.files.push(...newFiles);
				session.totalSize += files.reduce(
					(sum, file) => sum + file.size,
					0
				);
				state.files.push(...newFiles);
			}
		},

		removeFile: (
			state,
			action: PayloadAction<{
				sessionId: string;
				fileId: string;
			}>
		) => {
			const { sessionId, fileId } = action.payload;
			const session = state.sessions[sessionId];

			if (session) {
				const fileIndex = session.files.findIndex(
					(f) => f.id === fileId
				);
				if (fileIndex >= 0) {
					const file = session.files[fileIndex];
					session.totalSize -= file.size;
					session.files.splice(fileIndex, 1);
				}
			}

			// Remove from global files
			const globalIndex = state.files.findIndex(
				(f) => f.id === fileId
			);
			if (globalIndex >= 0) {
				state.files.splice(globalIndex, 1);
			}

			// Remove from selection
			const selectedIndex =
				state.selectedFiles.indexOf(fileId);
			if (selectedIndex >= 0) {
				state.selectedFiles.splice(selectedIndex, 1);
			}
		},

		updateFileStatus: (
			state,
			action: PayloadAction<{
				fileId: string;
				status: FileItem['status'];
				error?: string;
			}>
		) => {
			const { fileId, status, error } = action.payload;

			// Update in all sessions
			Object.values(state.sessions).forEach((session) => {
				const file = session.files.find(
					(f) => f.id === fileId
				);
				if (file) {
					file.status = status;
					if (error) file.error = error;
				}
			});

			// Update in global files
			const globalFile = state.files.find(
				(f) => f.id === fileId
			);
			if (globalFile) {
				globalFile.status = status;
				if (error) globalFile.error = error;
			}
		},

		updateFileProgress: (
			state,
			action: PayloadAction<{
				fileId: string;
				progress: number;
			}>
		) => {
			const { fileId, progress } = action.payload;

			// Update in all sessions
			Object.values(state.sessions).forEach((session) => {
				const file = session.files.find(
					(f) => f.id === fileId
				);
				if (file) {
					file.progress = progress;
					if (
						progress === 100 &&
						file.status === 'uploading'
					) {
						file.status = 'completed';
					}
				}
			});

			// Update in global files
			const globalFile = state.files.find(
				(f) => f.id === fileId
			);
			if (globalFile) {
				globalFile.progress = progress;
				if (
					progress === 100 &&
					globalFile.status === 'uploading'
				) {
					globalFile.status = 'completed';
				}
			}
		},

		// File selection
		selectFile: (state, action: PayloadAction<string>) => {
			const fileId = action.payload;
			if (!state.selectedFiles.includes(fileId)) {
				state.selectedFiles.push(fileId);
			}
		},

		deselectFile: (
			state,
			action: PayloadAction<string>
		) => {
			const fileId = action.payload;
			const index = state.selectedFiles.indexOf(fileId);
			if (index >= 0) {
				state.selectedFiles.splice(index, 1);
			}
		},

		selectAllFiles: (
			state,
			action: PayloadAction<string>
		) => {
			const sessionId = action.payload;
			const session = state.sessions[sessionId];
			if (session) {
				state.selectedFiles = [
					...new Set([
						...state.selectedFiles,
						...session.files.map((f) => f.id),
					]),
				];
			}
		},

		deselectAllFiles: (state) => {
			state.selectedFiles = [];
		},

		// Configuration
		updateGlobalConfig: (
			state,
			action: PayloadAction<Partial<FileUploadConfig>>
		) => {
			state.globalConfig = {
				...state.globalConfig,
				...action.payload,
			};
		},

		updateSessionConfig: (
			state,
			action: PayloadAction<{
				sessionId: string;
				config: Partial<FileUploadConfig>;
			}>
		) => {
			const { sessionId, config } = action.payload;
			const session = state.sessions[sessionId];
			if (session) {
				session.config = { ...session.config, ...config };
			}
		},

		// Validation
		setValidationErrors: (
			state,
			action: PayloadAction<Record<string, string[]>>
		) => {
			state.validationErrors = action.payload;
		},

		clearValidationErrors: (
			state,
			action: PayloadAction<string | undefined>
		) => {
			const fileId = action.payload;
			if (fileId) {
				delete state.validationErrors[fileId];
			} else {
				state.validationErrors = {};
			}
		},

		// Statistics
		updateStats: (
			state,
			action: PayloadAction<Partial<FileState['stats']>>
		) => {
			state.stats = { ...state.stats, ...action.payload };
		},

		incrementUploadCount: (
			state,
			action: PayloadAction<{
				success: boolean;
				size: number;
				duration?: number;
			}>
		) => {
			const { success, size, duration } = action.payload;
			state.stats.totalUploads += 1;
			state.stats.totalBytesUploaded += size;

			if (success) {
				state.stats.successfulUploads += 1;
			} else {
				state.stats.failedUploads += 1;
			}

			if (duration) {
				const totalTime =
					state.stats.averageUploadTime *
						(state.stats.totalUploads - 1) +
					duration;
				state.stats.averageUploadTime =
					totalTime / state.stats.totalUploads;
			}
		},

		// Utility actions
		clearCompletedFiles: (
			state,
			action: PayloadAction<string>
		) => {
			const sessionId = action.payload;
			const session = state.sessions[sessionId];
			if (session) {
				session.files = session.files.filter(
					(f) => f.status !== 'completed'
				);
			}
		},

		clearErrorFiles: (
			state,
			action: PayloadAction<string>
		) => {
			const sessionId = action.payload;
			const session = state.sessions[sessionId];
			if (session) {
				session.files = session.files.filter(
					(f) => f.status !== 'error'
				);
			}
		},

		retryFailedFiles: (
			state,
			action: PayloadAction<string>
		) => {
			const sessionId = action.payload;
			const session = state.sessions[sessionId];
			if (session) {
				session.files.forEach((file) => {
					if (file.status === 'error') {
						file.status = 'pending';
						file.progress = 0;
						file.error = undefined;
					}
				});
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

		// Component-specific UI state management
		initializeComponentState: (
			state,
			action: PayloadAction<string>
		) => {
			const componentId = action.payload;
			if (!state.componentStates[componentId]) {
				state.componentStates[componentId] = {
					dragActive: false,
					uploadProgress: 0,
					validationErrors: [],
					selectedFiles: [],
				};
			}
		},

		setComponentDragActive: (
			state,
			action: PayloadAction<{
				componentId: string;
				dragActive: boolean;
			}>
		) => {
			const { componentId, dragActive } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].dragActive =
					dragActive;
			}
		},

		setComponentUploadProgress: (
			state,
			action: PayloadAction<{
				componentId: string;
				progress: number;
			}>
		) => {
			const { componentId, progress } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].uploadProgress =
					progress;
			}
		},

		setComponentValidationErrors: (
			state,
			action: PayloadAction<{
				componentId: string;
				errors: string[];
			}>
		) => {
			const { componentId, errors } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[
					componentId
				].validationErrors = errors;
			}
		},

		setComponentSelectedFiles: (
			state,
			action: PayloadAction<{
				componentId: string;
				files: File[];
			}>
		) => {
			const { componentId, files } = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId].selectedFiles =
					files;
			}
		},

		clearComponentState: (
			state,
			action: PayloadAction<string>
		) => {
			const componentId = action.payload;
			if (state.componentStates[componentId]) {
				state.componentStates[componentId] = {
					dragActive: false,
					uploadProgress: 0,
					validationErrors: [],
					selectedFiles: [],
				};
			}
		},

		removeComponentState: (
			state,
			action: PayloadAction<string>
		) => {
			const componentId = action.payload;
			delete state.componentStates[componentId];
		},
	},
	extraReducers: (builder) => {
		// Upload file
		builder
			.addCase(uploadFile.pending, (state, action) => {
				const { fileId } = action.meta.arg;
				fileSlice.caseReducers.updateFileStatus(state, {
					type: 'updateFileStatus',
					payload: { fileId, status: 'uploading' },
				});
			})
			.addCase(uploadFile.fulfilled, (state, action) => {
				const { fileId, url, metadata } = action.payload;

				// Update file with result
				Object.values(state.sessions).forEach((session) => {
					const file = session.files.find(
						(f) => f.id === fileId
					);
					if (file) {
						file.url = url;
						file.metadata = metadata;
						file.status = 'completed';
						file.progress = 100;
					}
				});

				const globalFile = state.files.find(
					(f) => f.id === fileId
				);
				if (globalFile) {
					globalFile.url = url;
					globalFile.metadata = metadata;
					globalFile.status = 'completed';
					globalFile.progress = 100;
				}
			})
			.addCase(uploadFile.rejected, (state, action) => {
				const { fileId } = action.meta.arg;
				fileSlice.caseReducers.updateFileStatus(state, {
					type: 'updateFileStatus',
					payload: {
						fileId,
						status: 'error',
						error: action.error.message || 'Upload failed',
					},
				});
			});

		// Generate thumbnail
		builder.addCase(
			generateThumbnail.fulfilled,
			(state, action) => {
				const { fileId, thumbnailUrl } = action.payload;

				Object.values(state.sessions).forEach((session) => {
					const file = session.files.find(
						(f) => f.id === fileId
					);
					if (file) {
						file.thumbnailUrl = thumbnailUrl;
					}
				});

				const globalFile = state.files.find(
					(f) => f.id === fileId
				);
				if (globalFile) {
					globalFile.thumbnailUrl = thumbnailUrl;
				}
			}
		);

		// Validate files
		builder.addCase(
			validateFiles.fulfilled,
			(state, action) => {
				state.validationErrors = action.payload;
			}
		);
	},
});

// Export actions
export const {
	createSession,
	removeSession,
	setActiveSession,
	addFiles,
	removeFile,
	updateFileStatus,
	updateFileProgress,
	selectFile,
	deselectFile,
	selectAllFiles,
	deselectAllFiles,
	updateGlobalConfig,
	updateSessionConfig,
	setValidationErrors,
	clearValidationErrors,
	updateStats,
	incrementUploadCount,
	clearCompletedFiles,
	clearErrorFiles,
	retryFailedFiles,
	setError,
	clearError,
	setLoading,
	// Component state actions
	initializeComponentState,
	setComponentDragActive,
	setComponentUploadProgress,
	setComponentValidationErrors,
	setComponentSelectedFiles,
	clearComponentState,
	removeComponentState,
} = fileSlice.actions;

// Selectors
export const selectFiles = (state: any) => state.files;
export const selectSession =
	(sessionId: string) => (state: any) =>
		state.files.sessions[sessionId];
export const selectActiveSession = (state: any) =>
	state.files.activeSessionId ?
		state.files.sessions[state.files.activeSessionId]
	:	null;
export const selectSessionFiles =
	(sessionId: string) => (state: any) =>
		state.files.sessions[sessionId]?.files || [];
export const selectSelectedFiles = (state: any) =>
	state.files.files.filter((f: any) =>
		state.files.selectedFiles.includes(f.id)
	);
export const selectFilesByStatus =
	(status: FileItem['status']) => (state: any) =>
		state.files.files.filter(
			(f: any) => f.status === status
		);
export const selectUploadProgress =
	(sessionId: string) => (state: any) => {
		const session = state.files.sessions[sessionId];
		if (!session || session.files.length === 0) return 0;

		const totalProgress = session.files.reduce(
			(sum: number, file: any) => sum + file.progress,
			0
		);
		return totalProgress / session.files.length;
	};
export const selectValidationErrors = (state: any) =>
	state.files.validationErrors;
export const selectFileStats = (state: any) =>
	state.files.stats;
export const selectGlobalConfig = (state: any) =>
	state.files.globalConfig;

// Component-specific selectors
export const selectComponentState =
	(componentId: string) => (state: any) =>
		state.files.componentStates[componentId] || {
			dragActive: false,
			uploadProgress: 0,
			validationErrors: [],
			selectedFiles: [],
		};
export const selectComponentDragActive =
	(componentId: string) => (state: any) =>
		state.files.componentStates[componentId]?.dragActive ||
		false;
export const selectComponentUploadProgress =
	(componentId: string) => (state: any) =>
		state.files.componentStates[componentId]
			?.uploadProgress || 0;
export const selectComponentValidationErrors =
	(componentId: string) => (state: any) =>
		state.files.componentStates[componentId]
			?.validationErrors || [];
export const selectComponentSelectedFiles =
	(componentId: string) => (state: any) =>
		state.files.componentStates[componentId]
			?.selectedFiles || [];

export default fileSlice.reducer;
