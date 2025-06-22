import React, {
	useEffect,
	useCallback,
	useMemo,
} from 'react';
import UnifiedAdvertisement, {
	AdKind,
	UnifiedAdvertisementProps,
} from './UnifiedAdvertisement';
import {
	AdContent,
	AdProvider,
	AdProviderType,
	AdAnalyticsHooks,
	AdAnalyticsEvent,
	createAnalyticsEvent,
} from './configurations';
import { useAdvertisementContainer } from '../../store/hooks/useAdvertisementRedux';
import styles from './Advertisements.module.scss';

export interface AdContainerProps {
	className?: string;
	style?: React.CSSProperties;

	// Container configuration
	allowedAdTypes?: AdKind[];
	maxAds?: number;
	rotationInterval?: number; // in milliseconds
	autoRotate?: boolean;

	// Advertisement pool
	adPool?: Array<{
		kind: AdKind;
		content: AdContent;
		weight?: number; // for weighted selection
		props?: Partial<UnifiedAdvertisementProps>;
	}>;

	// Fallback content
	fallbackContent?: React.ReactNode;
	showFallbackOnError?: boolean;

	// Event handlers
	onAdLoad?: (adId: string, kind: AdKind) => void;
	onAdError?: (adId: string, error: string) => void;
	onAdClick?: (adId: string, url: string) => void;
	onAdImpression?: (adId: string) => void;

	// Display configuration
	layout?: 'stack' | 'carousel' | 'grid' | 'single';
	spacing?: number;
	alignItems?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'stretch';
	justifyContent?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around';

	// Responsive behavior
	responsive?: boolean;
	breakpoints?: {
		mobile?: {
			maxAds?: number;
			layout?: 'stack' | 'carousel' | 'grid' | 'single';
		};
		tablet?: {
			maxAds?: number;
			layout?: 'stack' | 'carousel' | 'grid' | 'single';
		};
		desktop?: {
			maxAds?: number;
			layout?: 'stack' | 'carousel' | 'grid' | 'single';
		};
	};

	// Enhanced Analytics Support
	analyticsHooks?: AdAnalyticsHooks;
	sessionId?: string;
	userId?: string;
	trackingEnabled?: boolean;

	// Multi-Provider Support
	providers?: AdProvider[];
	primaryProvider?: AdProviderType;
	fallbackProviders?: AdProviderType[];
	providerConfig?: Record<string, any>;

	// Provider rotation and management
	enableProviderRotation?: boolean;
	providerRotationInterval?: number; // milliseconds
	providerFailureThreshold?: number; // consecutive failures before marking provider as down

	// Advanced targeting
	globalTargeting?: Record<string, any>;
	providerSpecificTargeting?: Record<
		AdProviderType,
		Record<string, any>
	>;
}

const AdContainer: React.FC<AdContainerProps> = ({
	className = '',
	style = {},
	allowedAdTypes = [
		'banner',
		'native-card',
		'floating-widget',
	],
	maxAds = 3,
	rotationInterval = 30000,
	autoRotate = false,
	adPool = [],
	fallbackContent = null,
	showFallbackOnError = true,
	onAdLoad,
	onAdError,
	onAdClick,
	onAdImpression,
	layout = 'stack',
	spacing = 16,
	alignItems = 'flex-start',
	justifyContent = 'flex-start',
	responsive = true,
	breakpoints = {
		mobile: { maxAds: 1, layout: 'single' },
		tablet: { maxAds: 2, layout: 'stack' },
		desktop: { maxAds: 3, layout: 'stack' },
	},

	// Analytics props
	analyticsHooks,
	sessionId,
	userId,
	trackingEnabled = true,

	// Provider props
	providers = [],
	primaryProvider = 'custom',
	fallbackProviders = [],
	providerConfig = {},
	enableProviderRotation = false,
	providerRotationInterval = 300000, // 5 minutes
	providerFailureThreshold = 3,

	// Targeting props
	globalTargeting = {},
	providerSpecificTargeting = {},
}) => {
	// Generate unique container ID
	const containerId = useMemo(
		() => `ad-container-${Date.now()}-${Math.random()}`,
		[]
	);

	// Redux state management
	const {
		currentAds,
		currentIndex,
		hasError,
		screenSize,
		activeProvider: currentProvider,
		providerFailures,
		providerHealth,
		isAutoRotating,
		rotationInterval: currentRotationInterval,
		updateAds,
		rotateToNext,
		setAutoRotation,
		setCurrentIndex,
		setError: setHasError,
		updateScreen: setScreenSize,
		changeProvider: setCurrentProvider,
		recordFailure,
		updateHealth,
		cleanup,
	} = useAdvertisementContainer(containerId);

	// Analytics helper
	const trackEvent = useCallback(
		(event: AdAnalyticsEvent) => {
			if (!trackingEnabled) return;

			analyticsHooks?.onImpression?.(event);
			analyticsHooks?.onClick?.(event);
			analyticsHooks?.onDismiss?.(event);
			analyticsHooks?.onError?.(event);
		},
		[trackingEnabled, analyticsHooks]
	);

	// Filter ads by allowed types
	const filteredAdPool = adPool.filter((ad) =>
		allowedAdTypes.includes(ad.kind)
	);

	// Detect screen size
	useEffect(() => {
		if (!responsive) return;

		const updateScreenSize = () => {
			const width = window.innerWidth;
			if (width < 768) {
				setScreenSize('mobile');
			} else if (width < 1024) {
				setScreenSize('tablet');
			} else {
				setScreenSize('desktop');
			}
		};

		updateScreenSize();
		window.addEventListener('resize', updateScreenSize);
		return () =>
			window.removeEventListener(
				'resize',
				updateScreenSize
			);
	}, [responsive]);

	// Get current configuration based on screen size
	const getCurrentConfig = () => {
		if (!responsive) return { maxAds, layout };
		return breakpoints[screenSize] || { maxAds, layout };
	};

	// Weighted random selection
	const selectWeightedRandom = (
		pool: typeof filteredAdPool
	) => {
		const totalWeight = pool.reduce(
			(sum, ad) => sum + (ad.weight || 1),
			0
		);
		let random = Math.random() * totalWeight;

		for (const ad of pool) {
			random -= ad.weight || 1;
			if (random <= 0) return ad;
		}

		return pool[0]; // fallback
	};

	// Provider management functions
	const getHealthyProvider =
		useCallback((): AdProvider | null => {
			// Try current provider first
			const currentProv = providers.find(
				(p) => p.config.type === currentProvider
			);
			if (
				currentProv &&
				(providerHealth[currentProvider] || 'healthy') ===
					'healthy'
			) {
				return currentProv;
			}

			// Try primary provider
			const primaryProv = providers.find(
				(p) => p.config.type === primaryProvider
			);
			if (
				primaryProv &&
				(providerHealth[primaryProvider] || 'healthy') !==
					'down'
			) {
				return primaryProv;
			}

			// Try fallback providers
			for (const fallbackType of fallbackProviders) {
				const fallbackProv = providers.find(
					(p) => p.config.type === fallbackType
				);
				if (
					fallbackProv &&
					(providerHealth[fallbackType] || 'healthy') !==
						'down'
				) {
					return fallbackProv;
				}
			}

			return null;
		}, [
			providers,
			currentProvider,
			primaryProvider,
			fallbackProviders,
			providerHealth,
		]);

	const handleProviderFailure = useCallback(
		(providerType: AdProviderType, error: string) => {
			// Record the failure in Redux
			recordFailure(providerType as any); // Type cast needed due to type conflicts

			// Get current failure count
			const currentCount =
				providerFailures[providerType] || 0;
			const newCount = currentCount + 1;

			// Update provider health based on failure count
			if (newCount >= providerFailureThreshold) {
				updateHealth(providerType as any, {
					isHealthy: false,
					failureCount: newCount,
					lastFailure: new Date(),
					latency: 0,
				});
			} else if (
				newCount >= Math.floor(providerFailureThreshold / 2)
			) {
				updateHealth(providerType as any, {
					isHealthy: false,
					failureCount: newCount,
					lastFailure: new Date(),
					latency: 0,
				});
			}

			// Track failure event
			trackEvent(
				createAnalyticsEvent(
					'error',
					`provider-failure-${Date.now()}`,
					'ad-container' as any,
					{
						provider: providerType,
						error,
						failureCount: newCount,
					}
				)
			);
		},
		[
			providerFailureThreshold,
			trackEvent,
			providerFailures,
			recordFailure,
			updateHealth,
		]
	);

	const rotateProvider = useCallback(() => {
		if (!enableProviderRotation || providers.length <= 1)
			return;

		const healthyProviders = providers.filter(
			(p) =>
				(providerHealth[p.config.type] || 'healthy') !==
				'down'
		);

		if (healthyProviders.length > 1) {
			const currentIndex = healthyProviders.findIndex(
				(p) => p.config.type === currentProvider
			);
			const nextIndex =
				(currentIndex + 1) % healthyProviders.length;
			setCurrentProvider(
				healthyProviders[nextIndex].config.type
			);
		}
	}, [
		enableProviderRotation,
		providers,
		providerHealth,
		currentProvider,
	]);

	// Provider rotation interval
	useEffect(() => {
		if (
			!enableProviderRotation ||
			providerRotationInterval <= 0
		)
			return;

		const interval = setInterval(
			rotateProvider,
			providerRotationInterval
		);
		return () => clearInterval(interval);
	}, [
		enableProviderRotation,
		providerRotationInterval,
		rotateProvider,
	]);

	// Load ads based on current configuration
	const loadAds = useCallback(() => {
		if (filteredAdPool.length === 0) {
			updateAds([]);
			return;
		}

		const config = getCurrentConfig();
		const adsToShow = Math.min(
			config.maxAds || maxAds,
			filteredAdPool.length
		);
		const selectedAds: Array<{
			id: string;
			kind: string;
			content: any;
			weight?: number;
			props?: any;
			provider?: AdProviderType;
		}> = [];

		// Create a copy of the pool for selection
		const poolCopy = [...filteredAdPool];

		for (
			let i = 0;
			i < adsToShow && poolCopy.length > 0;
			i++
		) {
			const selectedAd = selectWeightedRandom(poolCopy);
			const adId = `ad-${Date.now()}-${i}`;
			const healthyProvider = getHealthyProvider();

			selectedAds.push({
				id: adId,
				kind: selectedAd.kind,
				content: {
					id: adId,
					...selectedAd.content,
				},
				weight: selectedAd.weight,
			});

			// Remove selected ad to avoid duplicates
			const index = poolCopy.indexOf(selectedAd);
			if (index > -1) {
				poolCopy.splice(index, 1);
			}

			onAdLoad?.(adId, selectedAd.kind);
		}

		updateAds(selectedAds);
		setHasError(false);
	}, [
		filteredAdPool,
		maxAds,
		screenSize,
		onAdLoad,
		getHealthyProvider,
		analyticsHooks,
		sessionId,
		userId,
		trackingEnabled,
		providers,
		primaryProvider,
		fallbackProviders,
		providerConfig,
	]);

	// Initialize ads
	useEffect(() => {
		loadAds();
	}, [loadAds]);

	// Auto-rotation
	useEffect(() => {
		if (!autoRotate || currentAds.length <= 1) return;

		const interval = setInterval(() => {
			rotateToNext();
		}, rotationInterval);

		return () => clearInterval(interval);
	}, [autoRotate, currentAds.length, rotationInterval]);

	// Handle ad errors with provider failure tracking
	const handleAdError = useCallback(
		(adId: string, error: string) => {
			setHasError(true);

			// Find the ad and its provider
			const failedAd = currentAds.find(
				(ad) => ad.id === adId
			);
			if (failedAd?.provider) {
				handleProviderFailure(failedAd.provider, error);
			}

			// Track error event
			trackEvent(
				createAnalyticsEvent(
					'error',
					adId,
					'ad-container' as any,
					{ error, provider: failedAd?.provider }
				)
			);

			onAdError?.(adId, error);
		},
		[
			onAdError,
			currentAds,
			handleProviderFailure,
			trackEvent,
		]
	);

	// Handle ad clicks with analytics
	const handleAdClick = useCallback(
		(adId: string, url: string) => {
			// Track click event
			trackEvent(
				createAnalyticsEvent(
					'click',
					adId,
					'ad-container' as any,
					{ url }
				)
			);

			onAdClick?.(adId, url);
		},
		[onAdClick, trackEvent]
	);

	// Handle ad impressions with analytics
	const handleAdImpression = useCallback(
		(adId: string) => {
			// Track impression event
			trackEvent(
				createAnalyticsEvent(
					'impression',
					adId,
					'ad-container' as any,
					{ containerId: `container-${Date.now()}` }
				)
			);

			onAdImpression?.(adId);
		},
		[onAdImpression, trackEvent]
	);

	// Build container styles
	const containerStyles: React.CSSProperties = {
		...style,
		display: 'flex',
		gap: spacing,
		alignItems,
		justifyContent,
	};

	// Apply layout-specific styles
	const config = getCurrentConfig();
	const currentLayout = config.layout || layout;

	switch (currentLayout) {
		case 'stack':
			containerStyles.flexDirection = 'column';
			break;
		case 'carousel':
			containerStyles.flexDirection = 'row';
			containerStyles.overflow = 'hidden';
			break;
		case 'grid':
			containerStyles.display = 'grid';
			containerStyles.gridTemplateColumns = `repeat(auto-fit, minmax(200px, 1fr))`;
			containerStyles.gridGap = spacing;
			break;
		case 'single':
			containerStyles.flexDirection = 'column';
			break;
	}

	// Build className
	const combinedClassName = [
		styles.advertisement,
		styles['advertisement--container'],
		styles[`advertisement--layout-${currentLayout}`],
		className,
	]
		.filter(Boolean)
		.join(' ');

	// Render fallback if needed
	if (
		(hasError && showFallbackOnError) ||
		currentAds.length === 0
	) {
		return fallbackContent ?
				<div
					className={combinedClassName}
					style={containerStyles}
				>
					{fallbackContent}
				</div>
			:	null;
	}

	// Render ads based on layout
	const renderAds = () => {
		switch (currentLayout) {
			case 'carousel':
			case 'single':
				// Show only current ad
				const currentAd = currentAds[currentIndex];
				if (!currentAd) return null;

				return (
					<UnifiedAdvertisement
						key={currentAd.id}
						kind={currentAd.kind}
						content={currentAd.content}
						onAdError={handleAdError}
						onAdClick={handleAdClick}
						onAdImpression={handleAdImpression}
						{...currentAd.props}
					/>
				);

			case 'stack':
			case 'grid':
			default:
				// Show all ads
				return currentAds.map((ad) => (
					<UnifiedAdvertisement
						key={ad.id}
						kind={ad.kind}
						content={ad.content}
						onAdError={handleAdError}
						onAdClick={handleAdClick}
						onAdImpression={handleAdImpression}
						{...ad.props}
					/>
				));
		}
	};

	return (
		<div
			className={combinedClassName}
			style={containerStyles}
			role='region'
			aria-label='Advertisement container'
		>
			{renderAds()}

			{/* Carousel controls */}
			{currentLayout === 'carousel' &&
				currentAds.length > 1 && (
					<div
						className={
							styles.advertisement__carousel_controls
						}
					>
						<button
							onClick={() => {
								const newIndex =
									currentIndex === 0 ?
										currentAds.length - 1
									:	currentIndex - 1;
								setCurrentIndex(newIndex);
							}}
							aria-label='Previous advertisement'
							className={
								styles.advertisement__carousel_button
							}
						>
							‹
						</button>
						<div
							className={
								styles.advertisement__carousel_indicators
							}
						>
							{currentAds.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`${styles.advertisement__carousel_indicator} ${
										index === currentIndex ?
											styles[
												'advertisement__carousel_indicator--active'
											]
										:	''
									}`}
									aria-label={`Go to advertisement ${index + 1}`}
								/>
							))}
						</div>
						<button
							onClick={() => {
								const newIndex =
									(currentIndex + 1) % currentAds.length;
								setCurrentIndex(newIndex);
							}}
							aria-label='Next advertisement'
							className={
								styles.advertisement__carousel_button
							}
						>
							›
						</button>
					</div>
				)}
		</div>
	);
};

export default AdContainer;
