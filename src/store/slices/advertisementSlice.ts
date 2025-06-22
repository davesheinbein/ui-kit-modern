/**
 * Advertisement Slice - Advertisement state management
 *
 * Handles advertisement display, provider management, analytics, and container state
 * for advertisement components
 */

import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';

// Advertisement interfaces
export type AdState =
	| 'loading'
	| 'ready'
	| 'playing'
	| 'paused'
	| 'completed'
	| 'error'
	| 'blocked'
	| 'dismissed';
export type AdProviderType =
	| 'custom'
	| 'google'
	| 'facebook'
	| 'amazon'
	| 'unity';

export interface AdMetrics {
	impressions: number;
	clicks: number;
	revenue: number;
	ctr: number;
	fillRate: number;
}

export interface AdProviderHealth {
	[key: string]: {
		isHealthy: boolean;
		failureCount: number;
		lastFailure?: Date;
		latency: number;
	};
}

export interface AdContainerState {
	currentAds: Array<{
		id: string;
		kind: string;
		content: any;
		weight?: number;
		props?: any; // Additional props for the advertisement component
		provider?: AdProviderType; // Provider used for this ad
	}>;
	currentIndex: number;
	hasError: boolean;
	screenSize: 'mobile' | 'tablet' | 'desktop';
	activeProvider: AdProviderType;
	providerFailures: Record<string, number>;
	providerHealth: AdProviderHealth;
	rotationInterval?: number;
	isAutoRotating: boolean;
	lastRotation: number;
}

export interface AdComponentState {
	adState: AdState;
	isVisible: boolean;
	error: string | null;
	loadTime: number;
	impressionTracked: boolean;
	clickTracked: boolean;
}

export interface AdvertisementState {
	// Global advertisement settings
	globalEnabled: boolean;
	defaultProvider: AdProviderType;
	globalMetrics: AdMetrics;

	// Container states by ID
	containers: Record<string, AdContainerState>;

	// Individual ad component states by ID
	components: Record<string, AdComponentState>;

	// Provider configuration
	providers: Record<
		AdProviderType,
		{
			enabled: boolean;
			config: Record<string, any>;
			priority: number;
		}
	>;

	// Analytics and tracking
	sessionId: string;
	userId?: string;
	trackingEnabled: boolean;

	// Loading and error states
	loading: boolean;
	error: string | null;
}

const initialState: AdvertisementState = {
	globalEnabled: true,
	defaultProvider: 'custom',
	globalMetrics: {
		impressions: 0,
		clicks: 0,
		revenue: 0,
		ctr: 0,
		fillRate: 0,
	},
	containers: {},
	components: {},
	providers: {
		custom: { enabled: true, config: {}, priority: 1 },
		google: { enabled: false, config: {}, priority: 2 },
		facebook: { enabled: false, config: {}, priority: 3 },
		amazon: { enabled: false, config: {}, priority: 4 },
		unity: { enabled: false, config: {}, priority: 5 },
	},
	sessionId: `session_${Date.now()}`,
	trackingEnabled: true,
	loading: false,
	error: null,
};

const advertisementSlice = createSlice({
	name: 'advertisement',
	initialState,
	reducers: {
		// Container management
		initializeContainer: (
			state,
			action: PayloadAction<{
				containerId: string;
				config: Partial<AdContainerState>;
			}>
		) => {
			const { containerId, config } = action.payload;
			state.containers[containerId] = {
				currentAds: [],
				currentIndex: 0,
				hasError: false,
				screenSize: 'desktop',
				activeProvider: state.defaultProvider,
				providerFailures: {},
				providerHealth: {},
				isAutoRotating: false,
				lastRotation: Date.now(),
				...config,
			};
		},

		updateContainerAds: (
			state,
			action: PayloadAction<{
				containerId: string;
				ads: Array<{
					id: string;
					kind: string;
					content: any;
					weight?: number;
				}>;
			}>
		) => {
			const { containerId, ads } = action.payload;
			if (state.containers[containerId]) {
				state.containers[containerId].currentAds = ads;
			}
		},

		rotateAds: (state, action: PayloadAction<string>) => {
			const containerId = action.payload;
			const container = state.containers[containerId];
			if (container && container.currentAds.length > 1) {
				container.currentIndex =
					(container.currentIndex + 1) %
					container.currentAds.length;
				container.lastRotation = Date.now();
			}
		},

		setAutoRotation: (
			state,
			action: PayloadAction<{
				containerId: string;
				isAutoRotating: boolean;
				rotationInterval?: number;
			}>
		) => {
			const {
				containerId,
				isAutoRotating,
				rotationInterval,
			} = action.payload;
			const container = state.containers[containerId];
			if (container) {
				container.isAutoRotating = isAutoRotating;
				if (rotationInterval !== undefined) {
					container.rotationInterval = rotationInterval;
				}
			}
		},

		setCurrentIndex: (
			state,
			action: PayloadAction<{
				containerId: string;
				index: number;
			}>
		) => {
			const { containerId, index } = action.payload;
			const container = state.containers[containerId];
			if (
				container &&
				index >= 0 &&
				index < container.currentAds.length
			) {
				container.currentIndex = index;
			}
		},

		setContainerError: (
			state,
			action: PayloadAction<{
				containerId: string;
				hasError: boolean;
			}>
		) => {
			const { containerId, hasError } = action.payload;
			if (state.containers[containerId]) {
				state.containers[containerId].hasError = hasError;
			}
		},

		updateScreenSize: (
			state,
			action: PayloadAction<{
				containerId: string;
				screenSize: 'mobile' | 'tablet' | 'desktop';
			}>
		) => {
			const { containerId, screenSize } = action.payload;
			if (state.containers[containerId]) {
				state.containers[containerId].screenSize =
					screenSize;
			}
		},

		// Provider management
		switchProvider: (
			state,
			action: PayloadAction<{
				containerId: string;
				provider: AdProviderType;
			}>
		) => {
			const { containerId, provider } = action.payload;
			if (state.containers[containerId]) {
				state.containers[containerId].activeProvider =
					provider;
			}
		},

		recordProviderFailure: (
			state,
			action: PayloadAction<{
				containerId: string;
				provider: AdProviderType;
			}>
		) => {
			const { containerId, provider } = action.payload;
			const container = state.containers[containerId];
			if (container) {
				container.providerFailures[provider] =
					(container.providerFailures[provider] || 0) + 1;
				container.providerHealth[provider] = {
					...container.providerHealth[provider],
					isHealthy: false,
					failureCount:
						container.providerFailures[provider],
					lastFailure: new Date(),
				};
			}
		},

		updateProviderHealth: (
			state,
			action: PayloadAction<{
				containerId: string;
				provider: AdProviderType;
				health: Partial<AdProviderHealth[string]>;
			}>
		) => {
			const { containerId, provider, health } =
				action.payload;
			const container = state.containers[containerId];
			if (container) {
				container.providerHealth[provider] = {
					...container.providerHealth[provider],
					...health,
				};
			}
		},

		// Component management
		initializeComponent: (
			state,
			action: PayloadAction<{
				componentId: string;
				config: Partial<AdComponentState>;
			}>
		) => {
			const { componentId, config } = action.payload;
			state.components[componentId] = {
				adState: 'loading',
				isVisible: true,
				error: null,
				loadTime: 0,
				impressionTracked: false,
				clickTracked: false,
				...config,
			};
		},

		setComponentState: (
			state,
			action: PayloadAction<{
				componentId: string;
				adState: AdState;
			}>
		) => {
			const { componentId, adState } = action.payload;
			if (state.components[componentId]) {
				state.components[componentId].adState = adState;
			}
		},

		setComponentVisibility: (
			state,
			action: PayloadAction<{
				componentId: string;
				isVisible: boolean;
			}>
		) => {
			const { componentId, isVisible } = action.payload;
			if (state.components[componentId]) {
				state.components[componentId].isVisible = isVisible;
			}
		},

		setComponentError: (
			state,
			action: PayloadAction<{
				componentId: string;
				error: string | null;
			}>
		) => {
			const { componentId, error } = action.payload;
			if (state.components[componentId]) {
				state.components[componentId].error = error;
				state.components[componentId].adState =
					error ? 'error' : 'ready';
			}
		},

		// Analytics and tracking
		trackImpression: (
			state,
			action: PayloadAction<{
				componentId: string;
				adId: string;
			}>
		) => {
			const { componentId } = action.payload;
			if (state.components[componentId]) {
				state.components[componentId].impressionTracked =
					true;
			}
			state.globalMetrics.impressions += 1;
		},

		trackClick: (
			state,
			action: PayloadAction<{
				componentId: string;
				adId: string;
				url: string;
			}>
		) => {
			const { componentId } = action.payload;
			if (state.components[componentId]) {
				state.components[componentId].clickTracked = true;
			}
			state.globalMetrics.clicks += 1;
			state.globalMetrics.ctr =
				state.globalMetrics.impressions > 0 ?
					(state.globalMetrics.clicks /
						state.globalMetrics.impressions) *
					100
				:	0;
		},

		updateRevenue: (
			state,
			action: PayloadAction<number>
		) => {
			state.globalMetrics.revenue += action.payload;
		},

		// Global settings
		setGlobalEnabled: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.globalEnabled = action.payload;
		},

		setDefaultProvider: (
			state,
			action: PayloadAction<AdProviderType>
		) => {
			state.defaultProvider = action.payload;
		},

		updateProviderConfig: (
			state,
			action: PayloadAction<{
				provider: AdProviderType;
				config: Record<string, any>;
			}>
		) => {
			const { provider, config } = action.payload;
			state.providers[provider].config = {
				...state.providers[provider].config,
				...config,
			};
		},

		toggleProvider: (
			state,
			action: PayloadAction<AdProviderType>
		) => {
			const provider = action.payload;
			state.providers[provider].enabled =
				!state.providers[provider].enabled;
		},

		setTrackingEnabled: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.trackingEnabled = action.payload;
		},

		setUserId: (state, action: PayloadAction<string>) => {
			state.userId = action.payload;
		},

		// Cleanup
		removeContainer: (
			state,
			action: PayloadAction<string>
		) => {
			const containerId = action.payload;
			delete state.containers[containerId];
		},

		removeComponent: (
			state,
			action: PayloadAction<string>
		) => {
			const componentId = action.payload;
			delete state.components[componentId];
		},

		resetMetrics: (state) => {
			state.globalMetrics = {
				impressions: 0,
				clicks: 0,
				revenue: 0,
				ctr: 0,
				fillRate: 0,
			};
		},

		// Loading and error states
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},

		setError: (
			state,
			action: PayloadAction<string | null>
		) => {
			state.error = action.payload;
		},
	},
});

// Selectors
export const selectAdvertisement = (state: any) =>
	state.advertisement;

export const selectContainer = (
	state: any,
	containerId: string
) => state.advertisement.containers[containerId];

export const selectComponent = (
	state: any,
	componentId: string
) => state.advertisement.components[componentId];

export const selectGlobalMetrics = (state: any) =>
	state.advertisement.globalMetrics;

export const selectProviders = (state: any) =>
	state.advertisement.providers;

export const selectEnabledProviders = (state: any) =>
	Object.entries(state.advertisement.providers)
		.filter(([_, config]: [string, any]) => config.enabled)
		.map(([provider]) => provider as AdProviderType);

export const selectIsGlobalEnabled = (state: any) =>
	state.advertisement.globalEnabled;

export const selectTrackingEnabled = (state: any) =>
	state.advertisement.trackingEnabled;

export const {
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
	setLoading,
	setError,
} = advertisementSlice.actions;

export default advertisementSlice.reducer;
