/**
 * useAdvertisementRedux Hook - Redux-based advertisement state management
 *
 * Provides advertisement functionality using Redux store instead of local state
 */

import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../index';
import {
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
	selectContainer,
	selectComponent,
	selectGlobalMetrics,
	selectProviders,
	selectEnabledProviders,
	selectIsGlobalEnabled,
	selectTrackingEnabled,
	AdProviderType,
	AdState,
} from '../slices/advertisementSlice';

export interface UseAdvertisementContainerReturn {
	// Container state
	currentAds: Array<{
		id: string;
		kind: string;
		content: any;
		weight?: number;
		props?: any;
		provider?: AdProviderType;
	}>;
	currentIndex: number;
	hasError: boolean;
	screenSize: 'mobile' | 'tablet' | 'desktop';
	activeProvider: AdProviderType;
	providerFailures: Record<string, number>;
	providerHealth: any;
	isAutoRotating: boolean;
	rotationInterval?: number;

	// Container actions
	updateAds: (
		ads: Array<{
			id: string;
			kind: string;
			content: any;
			weight?: number;
			props?: any;
			provider?: AdProviderType;
		}>
	) => void;
	rotateToNext: () => void;
	setAutoRotation: (
		isAutoRotating: boolean,
		rotationInterval?: number
	) => void;
	setCurrentIndex: (index: number) => void;
	setError: (hasError: boolean) => void;
	updateScreen: (
		screenSize: 'mobile' | 'tablet' | 'desktop'
	) => void;
	changeProvider: (provider: AdProviderType) => void;
	recordFailure: (provider: AdProviderType) => void;
	updateHealth: (
		provider: AdProviderType,
		health: any
	) => void;
	cleanup: () => void;
}

export interface UseAdvertisementComponentReturn {
	// Component state
	adState: AdState;
	isVisible: boolean;
	error: string | null;
	loadTime: number;
	impressionTracked: boolean;
	clickTracked: boolean;

	// Component actions
	setState: (state: AdState) => void;
	setVisible: (visible: boolean) => void;
	setError: (error: string | null) => void;
	trackImpression: (adId: string) => void;
	trackClick: (adId: string, url: string) => void;
	cleanup: () => void;
}

export interface UseAdvertisementGlobalReturn {
	// Global state
	globalEnabled: boolean;
	defaultProvider: AdProviderType;
	globalMetrics: any;
	providers: any;
	enabledProviders: AdProviderType[];
	trackingEnabled: boolean;

	// Global actions
	setGlobalEnabled: (enabled: boolean) => void;
	setDefaultProvider: (provider: AdProviderType) => void;
	updateProviderConfig: (
		provider: AdProviderType,
		config: Record<string, any>
	) => void;
	toggleProvider: (provider: AdProviderType) => void;
	setTrackingEnabled: (enabled: boolean) => void;
	setUserId: (userId: string) => void;
	updateRevenue: (amount: number) => void;
	resetMetrics: () => void;
}

export const useAdvertisementContainer = (
	containerId: string
): UseAdvertisementContainerReturn => {
	const dispatch = useAppDispatch();
	const container = useAppSelector((state) =>
		selectContainer(state, containerId)
	);

	// Initialize container if it doesn't exist
	const initializeIfNeeded = useCallback(() => {
		if (!container) {
			dispatch(
				initializeContainer({ containerId, config: {} })
			);
		}
	}, [dispatch, containerId, container]);

	// Call initialize on first use
	if (!container) {
		initializeIfNeeded();
	}

	const updateAds = useCallback(
		(
			ads: Array<{
				id: string;
				kind: string;
				content: any;
				weight?: number;
				props?: any;
				provider?: AdProviderType;
			}>
		) => {
			dispatch(updateContainerAds({ containerId, ads }));
		},
		[dispatch, containerId]
	);

	const rotateToNext = useCallback(() => {
		dispatch(rotateAds(containerId));
	}, [dispatch, containerId]);

	const setError = useCallback(
		(hasError: boolean) => {
			dispatch(
				setContainerError({ containerId, hasError })
			);
		},
		[dispatch, containerId]
	);

	const updateScreen = useCallback(
		(screenSize: 'mobile' | 'tablet' | 'desktop') => {
			dispatch(
				updateScreenSize({ containerId, screenSize })
			);
		},
		[dispatch, containerId]
	);

	const changeProvider = useCallback(
		(provider: AdProviderType) => {
			dispatch(switchProvider({ containerId, provider }));
		},
		[dispatch, containerId]
	);

	const recordFailure = useCallback(
		(provider: AdProviderType) => {
			dispatch(
				recordProviderFailure({ containerId, provider })
			);
		},
		[dispatch, containerId]
	);

	const updateHealth = useCallback(
		(provider: AdProviderType, health: any) => {
			dispatch(
				updateProviderHealth({
					containerId,
					provider,
					health,
				})
			);
		},
		[dispatch, containerId]
	);

	const setAutoRotationAction = useCallback(
		(
			isAutoRotating: boolean,
			rotationInterval?: number
		) => {
			dispatch(
				setAutoRotation({
					containerId,
					isAutoRotating,
					rotationInterval,
				})
			);
		},
		[dispatch, containerId]
	);

	const setCurrentIndexAction = useCallback(
		(index: number) => {
			dispatch(setCurrentIndex({ containerId, index }));
		},
		[dispatch, containerId]
	);

	const cleanup = useCallback(() => {
		dispatch(removeContainer(containerId));
	}, [dispatch, containerId]);

	return {
		// State (with defaults if container doesn't exist yet)
		currentAds: container?.currentAds || [],
		currentIndex: container?.currentIndex || 0,
		hasError: container?.hasError || false,
		screenSize: container?.screenSize || 'desktop',
		activeProvider: container?.activeProvider || 'custom',
		providerFailures: container?.providerFailures || {},
		providerHealth: container?.providerHealth || {},
		isAutoRotating: container?.isAutoRotating || false,
		rotationInterval: container?.rotationInterval,

		// Actions
		updateAds,
		rotateToNext,
		setAutoRotation: setAutoRotationAction,
		setCurrentIndex: setCurrentIndexAction,
		setError,
		updateScreen,
		changeProvider,
		recordFailure,
		updateHealth,
		cleanup,
	};
};

export const useAdvertisementComponent = (
	componentId: string
): UseAdvertisementComponentReturn => {
	const dispatch = useAppDispatch();
	const component = useAppSelector((state) =>
		selectComponent(state, componentId)
	);

	// Initialize component if it doesn't exist
	const initializeIfNeeded = useCallback(() => {
		if (!component) {
			dispatch(
				initializeComponent({ componentId, config: {} })
			);
		}
	}, [dispatch, componentId, component]);

	// Call initialize on first use
	if (!component) {
		initializeIfNeeded();
	}

	const setState = useCallback(
		(adState: AdState) => {
			dispatch(setComponentState({ componentId, adState }));
		},
		[dispatch, componentId]
	);

	const setVisible = useCallback(
		(isVisible: boolean) => {
			dispatch(
				setComponentVisibility({ componentId, isVisible })
			);
		},
		[dispatch, componentId]
	);

	const setError = useCallback(
		(error: string | null) => {
			dispatch(setComponentError({ componentId, error }));
		},
		[dispatch, componentId]
	);

	const trackImpressionAction = useCallback(
		(adId: string) => {
			dispatch(trackImpression({ componentId, adId }));
		},
		[dispatch, componentId]
	);

	const trackClickAction = useCallback(
		(adId: string, url: string) => {
			dispatch(trackClick({ componentId, adId, url }));
		},
		[dispatch, componentId]
	);

	const cleanup = useCallback(() => {
		dispatch(removeComponent(componentId));
	}, [dispatch, componentId]);

	return {
		// State (with defaults if component doesn't exist yet)
		adState: component?.adState || 'loading',
		isVisible: component?.isVisible || true,
		error: component?.error || null,
		loadTime: component?.loadTime || 0,
		impressionTracked:
			component?.impressionTracked || false,
		clickTracked: component?.clickTracked || false,

		// Actions
		setState,
		setVisible,
		setError,
		trackImpression: trackImpressionAction,
		trackClick: trackClickAction,
		cleanup,
	};
};

export const useAdvertisementGlobal =
	(): UseAdvertisementGlobalReturn => {
		const dispatch = useAppDispatch();

		// Selectors
		const globalEnabled = useAppSelector(
			selectIsGlobalEnabled
		);
		const globalMetrics = useAppSelector(
			selectGlobalMetrics
		);
		const providers = useAppSelector(selectProviders);
		const enabledProviders = useAppSelector(
			selectEnabledProviders
		);
		const trackingEnabled = useAppSelector(
			selectTrackingEnabled
		);
		const defaultProvider = useAppSelector(
			(state) => state.advertisement.defaultProvider
		);

		// Actions
		const setGlobalEnabledAction = useCallback(
			(enabled: boolean) => {
				dispatch(setGlobalEnabled(enabled));
			},
			[dispatch]
		);

		const setDefaultProviderAction = useCallback(
			(provider: AdProviderType) => {
				dispatch(setDefaultProvider(provider));
			},
			[dispatch]
		);

		const updateProviderConfigAction = useCallback(
			(
				provider: AdProviderType,
				config: Record<string, any>
			) => {
				dispatch(
					updateProviderConfig({ provider, config })
				);
			},
			[dispatch]
		);

		const toggleProviderAction = useCallback(
			(provider: AdProviderType) => {
				dispatch(toggleProvider(provider));
			},
			[dispatch]
		);

		const setTrackingEnabledAction = useCallback(
			(enabled: boolean) => {
				dispatch(setTrackingEnabled(enabled));
			},
			[dispatch]
		);

		const setUserIdAction = useCallback(
			(userId: string) => {
				dispatch(setUserId(userId));
			},
			[dispatch]
		);

		const updateRevenueAction = useCallback(
			(amount: number) => {
				dispatch(updateRevenue(amount));
			},
			[dispatch]
		);

		const resetMetricsAction = useCallback(() => {
			dispatch(resetMetrics());
		}, [dispatch]);

		return {
			// State
			globalEnabled,
			defaultProvider,
			globalMetrics,
			providers,
			enabledProviders,
			trackingEnabled,

			// Actions
			setGlobalEnabled: setGlobalEnabledAction,
			setDefaultProvider: setDefaultProviderAction,
			updateProviderConfig: updateProviderConfigAction,
			toggleProvider: toggleProviderAction,
			setTrackingEnabled: setTrackingEnabledAction,
			setUserId: setUserIdAction,
			updateRevenue: updateRevenueAction,
			resetMetrics: resetMetricsAction,
		};
	};

export default {
	useAdvertisementContainer,
	useAdvertisementComponent,
	useAdvertisementGlobal,
};
