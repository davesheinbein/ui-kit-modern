import React, {
	forwardRef,
	useEffect,
	useCallback,
	useMemo,
	useRef,
	useState,
} from 'react';
import {
	ADVERTISEMENT_CONFIGURATIONS,
	ExtendedAdKind,
	AdvertisementConfiguration,
	AdvertisementKind,
	AdContent,
	AdMetrics,
	AdState,
	AdAnalyticsEvent,
	AdAnalyticsHooks,
	AdProvider,
	AdProviderType,
	createAnalyticsEvent,
} from './configurations';
import { Button } from '../Button';
import styles from './Advertisements.module.scss';

// Base advertisement props interface
export interface BaseAdvertisementProps {
	className?: string;
	style?: React.CSSProperties;
}

// Use the extended ad kinds from configurations
export type AdKind = ExtendedAdKind;

// Individual Advertisement Props
export interface AdvertisementProps
	extends BaseAdvertisementProps {
	// Count prop to determine single vs multiple ads
	count?: 'one' | 'many';

	// Single ad props (when count="one" or undefined)
	kind?: AdKind;
	content?: AdContent;

	// Multiple ads props (when count="many")
	adPool?: Array<{
		kind: AdKind;
		content: AdContent;
		weight?: number; // for weighted selection
		props?: Partial<AdvertisementProps>;
	}>;
	maxAds?: number;
	layout?: 'stack' | 'carousel' | 'grid' | 'single';
	autoRotate?: boolean;
	rotationInterval?: number; // in milliseconds
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

	// Responsive behavior (for multiple ads)
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

	// Common props for both single and multiple
	allowedAdTypes?: AdKind[];
	fallbackContent?: React.ReactNode;
	showFallbackOnError?: boolean;

	// Event handlers
	onAdLoad?: (adId: string, kind: AdKind) => void;
	onAdClick?: (adId: string, url: string) => void;
	onAdImpression?: (adId: string) => void;
	onAdClose?: (adId: string) => void;
	onAdError?: (adId: string, error: string) => void;
	onRewardEarned?: (adId: string, reward: any) => void;

	// Enhanced Analytics Hooks
	analyticsHooks?: AdAnalyticsHooks;
	sessionId?: string;
	userId?: string;

	// Ad Provider Support
	providers?: AdProvider[];
	primaryProvider?: AdProviderType;
	fallbackProviders?: AdProviderType[];
	providerConfig?: Record<string, any>;

	// State props
	isVisible?: boolean;
	isLoading?: boolean;
	isError?: boolean;

	// Display props
	autoHide?: boolean;
	hideDelay?: number; // in milliseconds
	animationEnabled?: boolean;

	// Targeting and tracking
	targetingData?: Record<string, any>;
	trackingEnabled?: boolean;

	// Layout props
	maxWidth?: number;
	maxHeight?: number;
	position?: 'fixed' | 'absolute' | 'relative' | 'static';
	zIndex?: number;

	// Enhanced customization
	overrideConfig?: Partial<AdvertisementConfiguration>;
	customClassName?: string;

	// Modal specific props (for interstitial and reward modals)
	showBackdrop?: boolean;
	backdropOpacity?: number;
}

// Container Props Interface
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
		props?: Partial<AdvertisementProps>;
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

// Single Advertisement Component
const Advertisements = forwardRef<
	HTMLDivElement,
	AdvertisementProps
>(
	(
		{
			// Count determines single vs multiple ads
			count = 'one',

			// Single ad props
			kind,
			content,

			// Multiple ads props
			adPool = [],
			maxAds = 3,
			layout = 'stack',
			autoRotate = false,
			rotationInterval = 30000,
			spacing = 16,
			alignItems = 'flex-start',
			justifyContent = 'flex-start',
			responsive = true,
			breakpoints = {},

			// Common props
			allowedAdTypes = [],
			fallbackContent,
			showFallbackOnError = true,
			onAdLoad,
			onAdClick,
			onAdImpression,
			onAdClose,
			onAdError,
			onRewardEarned,

			// Enhanced Analytics
			analyticsHooks,
			sessionId,
			userId,

			// Provider Support
			providers = [],
			primaryProvider = 'custom',
			fallbackProviders = [],
			providerConfig = {},

			isVisible = true,
			isLoading = false,
			isError = false,
			autoHide = false,
			hideDelay = 5000,
			animationEnabled = true,
			targetingData = {},
			trackingEnabled = true,
			maxWidth,
			maxHeight,
			position = 'relative',
			zIndex = 1000,
			overrideConfig = {},
			customClassName = '',
			className = '',
			style = {},
			showBackdrop = true,
			backdropOpacity = 0.8,
			...props
		},
		ref
	) => {
		// If count is "many", render the container logic
		if (count === 'many') {
			return (
				<AdContainerImplementation
					ref={ref}
					className={className}
					style={style}
					adPool={adPool}
					maxAds={maxAds}
					layout={layout}
					autoRotate={autoRotate}
					rotationInterval={rotationInterval}
					spacing={spacing}
					alignItems={alignItems}
					justifyContent={justifyContent}
					responsive={responsive}
					breakpoints={breakpoints}
					allowedAdTypes={allowedAdTypes}
					fallbackContent={fallbackContent}
					showFallbackOnError={showFallbackOnError}
					onAdLoad={onAdLoad}
					onAdClick={onAdClick}
					onAdImpression={onAdImpression}
					onAdError={onAdError}
					analyticsHooks={analyticsHooks}
					sessionId={sessionId}
					userId={userId}
					trackingEnabled={trackingEnabled}
					providers={providers}
					primaryProvider={primaryProvider}
					fallbackProviders={fallbackProviders}
					providerConfig={providerConfig}
				/>
			);
		}

		// For single ads, ensure we have required props
		if (!kind || !content) {
			console.error(
				'Advertisement: kind and content are required for single ads (count="one")'
			);
			return fallbackContent ?
					<>{fallbackContent}</>
				:	null;
		}
		// Refs
		const adSlotRef = useRef<HTMLDivElement>(null);
		const impressionTrackedRef = useRef(false);

		// State
		const [adState, setAdState] =
			useState<AdState>('loading');
		const [isAdVisible, setIsAdVisible] =
			useState(isVisible);
		const [metrics, setMetrics] = useState<AdMetrics>({
			impressions: 0,
			clicks: 0,
			ctr: 0,
		});

		// Get base configuration and apply overrides
		const baseConfig =
			ADVERTISEMENT_CONFIGURATIONS[
				kind.replace(
					/^(banner|interstitial|rewarded-modal|native-card|sticky-bar|floating-widget|toast-notification|exit-intent-modal|ingame-billboard|container)$/,
					(match: string) => {
						const mapping: Record<
							string,
							AdvertisementKind
						> = {
							'banner': 'banner-ad',
							'interstitial': 'interstitial-ad',
							'rewarded-modal': 'rewarded-ad-modal',
							'native-card': 'native-ad-card',
							'sticky-bar': 'sticky-ad-bar',
							'floating-widget': 'floating-ad-widget',
							'toast-notification': 'toast-ad-notification',
							'exit-intent-modal': 'exit-intent-ad-modal',
							'ingame-billboard': 'in-game-billboard',
							'container': 'ad-container',
						};
						return mapping[match] || match;
					}
				) as AdvertisementKind
			] || ADVERTISEMENT_CONFIGURATIONS['banner-ad'];

		const config: AdvertisementConfiguration = {
			...baseConfig,
			clickable: baseConfig.clickable ?? true,
			...overrideConfig,
		};

		// Analytics Helper Functions
		const createAnalyticsEventHelper = useCallback(
			(
				eventType: AdAnalyticsEvent['eventType'],
				metadata?: Record<string, any>
			): AdAnalyticsEvent => {
				return {
					eventType,
					adId: content.id || 'unknown',
					adKind: baseConfig.state as any,
					timestamp: Date.now(),
					sessionId,
					userId,
					metadata,
				};
			},
			[content.id, baseConfig, sessionId, userId]
		);

		const trackEvent = useCallback(
			(event: AdAnalyticsEvent) => {
				if (!trackingEnabled) return;

				// Call analytics hooks
				switch (event.eventType) {
					case 'impression':
						analyticsHooks?.onImpression?.(event);
						break;
					case 'click':
						analyticsHooks?.onClick?.(event);
						break;
					case 'dismiss':
						analyticsHooks?.onDismiss?.(event);
						break;
					case 'error':
						analyticsHooks?.onError?.(event);
						break;
					case 'conversion':
						analyticsHooks?.onConversion?.(event);
						break;
					case 'view':
						analyticsHooks?.onView?.(event);
						break;
					case 'interaction':
						analyticsHooks?.onInteraction?.(event);
						break;
				}
			},
			[trackingEnabled, analyticsHooks]
		);

		// Provider Management
		const loadAdFromProvider = useCallback(async () => {
			if (!adSlotRef.current || providers.length === 0)
				return;

			// Try primary provider first
			const primaryProv = providers.find(
				(p) => p.config.type === primaryProvider
			);
			if (primaryProv) {
				try {
					const loadedContent = await primaryProv.loadAd(
						adSlotRef.current,
						config
					);
					if (loadedContent) {
						setAdState('ready');
						return;
					}
				} catch (error) {
					console.error(
						`Primary provider (${primaryProvider}) failed:`,
						error
					);
					trackEvent(
						createAnalyticsEventHelper('error', {
							provider: primaryProvider,
							error: String(error),
						})
					);
				}
			}

			// Try fallback providers
			for (const fallbackType of fallbackProviders) {
				const fallbackProv = providers.find(
					(p) => p.config.type === fallbackType
				);
				if (fallbackProv) {
					try {
						const loadedContent = await fallbackProv.loadAd(
							adSlotRef.current,
							config
						);
						if (loadedContent) {
							setAdState('ready');
							return;
						}
					} catch (error) {
						console.error(
							`Fallback provider (${fallbackType}) failed:`,
							error
						);
						trackEvent(
							createAnalyticsEventHelper('error', {
								provider: fallbackType,
								error: String(error),
							})
						);
					}
				}
			}

			// All providers failed
			setAdState('error');
		}, [
			providers,
			primaryProvider,
			fallbackProviders,
			config,
			trackEvent,
			createAnalyticsEventHelper,
		]);

		// Load ad from providers when component mounts
		useEffect(() => {
			if (providers.length > 0) {
				loadAdFromProvider();
			} else {
				setAdState('ready');
			}
		}, [loadAdFromProvider, providers]);

		// Update visibility when prop changes
		useEffect(() => {
			setIsAdVisible(isVisible);
		}, [isVisible]);

		// Auto-hide functionality
		useEffect(() => {
			if (autoHide && hideDelay > 0 && isAdVisible) {
				const timer = setTimeout(() => {
					setIsAdVisible(false);
					// Track dismiss event
					trackEvent(
						createAnalyticsEventHelper('dismiss', {
							reason: 'auto-hide',
						})
					);
					onAdClose?.(content.id || 'unknown');
				}, hideDelay);

				return () => clearTimeout(timer);
			}
		}, [
			autoHide,
			hideDelay,
			isAdVisible,
			content.id,
			onAdClose,
			trackEvent,
			createAnalyticsEventHelper,
		]);

		// Track impressions with enhanced analytics
		useEffect(() => {
			if (
				isAdVisible &&
				trackingEnabled &&
				adState === 'ready' &&
				!impressionTrackedRef.current
			) {
				impressionTrackedRef.current = true;
				setMetrics((prev) => ({
					...prev,
					impressions: (prev.impressions || 0) + 1,
				}));

				// Track impression event
				trackEvent(
					createAnalyticsEventHelper('impression', {
						adKind: kind,
						position,
						viewport:
							typeof window !== 'undefined' ?
								{
									width: window.innerWidth,
									height: window.innerHeight,
								}
							:	undefined,
					})
				);

				onAdImpression?.(content.id || 'unknown');
			}
		}, [
			isAdVisible,
			trackingEnabled,
			adState,
			content.id,
			onAdImpression,
			trackEvent,
			createAnalyticsEventHelper,
			kind,
			position,
		]);

		// Handle ad click with enhanced analytics
		const handleAdClick = useCallback(() => {
			if (content.actionUrl) {
				setMetrics((prev) => {
					const newClicks = (prev.clicks || 0) + 1;
					const impressions = prev.impressions || 0;
					return {
						...prev,
						clicks: newClicks,
						ctr:
							impressions > 0 ?
								(newClicks / impressions) * 100
							:	0,
					};
				});

				// Track click event
				trackEvent(
					createAnalyticsEventHelper('click', {
						actionUrl: content.actionUrl,
						ctaText: content.ctaText,
						timestamp: Date.now(),
					})
				);

				onAdClick?.(
					content.id || 'unknown',
					content.actionUrl
				);

				// Open link if it's a clickable ad
				if (config.clickable) {
					window.open(
						content.actionUrl,
						'_blank',
						'noopener,noreferrer'
					);
				}
			}
		}, [
			content.id,
			content.actionUrl,
			content.ctaText,
			config.clickable,
			onAdClick,
			trackEvent,
			createAnalyticsEventHelper,
		]);

		// Handle ad close with analytics
		const handleAdClose = useCallback(() => {
			setIsAdVisible(false);

			// Track dismiss event
			trackEvent(
				createAnalyticsEventHelper('dismiss', {
					reason: 'user-close',
				})
			);

			onAdClose?.(content.id || 'unknown');
		}, [
			content.id,
			onAdClose,
			trackEvent,
			createAnalyticsEventHelper,
		]);

		// Handle reward earned (for rewarded ads) with analytics
		const handleRewardEarned = useCallback(() => {
			if (kind === 'rewarded-modal') {
				// Track conversion event
				trackEvent(
					createAnalyticsEventHelper('conversion', {
						rewardType: content.rewardData?.type,
						rewardAmount: content.rewardData?.amount,
					})
				);

				onRewardEarned?.(
					content.id || 'unknown',
					content.rewardData
				);
			}
		}, [
			kind,
			content.id,
			content.rewardData,
			onRewardEarned,
			trackEvent,
			createAnalyticsEventHelper,
		]);

		// Build className
		const combinedClassName = [
			styles.advertisement,
			styles[`advertisement--${kind}`],
			styles[`advertisement--${config.variant}`],
			styles[`advertisement--${config.size}`],
			animationEnabled && styles['advertisement--animated'],
			isLoading && styles['advertisement--loading'],
			isError && styles['advertisement--error'],
			!isAdVisible && styles['advertisement--hidden'],
			customClassName,
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Build inline styles
		const combinedStyle: React.CSSProperties = {
			...style,
			maxWidth: maxWidth || config.dimensions?.maxWidth,
			maxHeight: maxHeight || config.dimensions?.maxHeight,
			position,
			zIndex,
			...config.styles,
		};

		// Don't render if not visible and not a modal type
		if (
			!isAdVisible &&
			![
				'interstitial',
				'rewarded-modal',
				'exit-intent-modal',
			].includes(kind)
		) {
			return null;
		}

		// Render loading state
		if (isLoading || adState === 'loading') {
			return (
				<div
					ref={ref}
					className={combinedClassName}
					style={combinedStyle}
					{...props}
				>
					<div className={styles.advertisement__loading}>
						Loading advertisement...
					</div>
				</div>
			);
		}

		// Render error state
		if (isError || adState === 'error') {
			return fallbackContent ?
					<div
						className={combinedClassName}
						style={combinedStyle}
					>
						{fallbackContent}
					</div>
				:	null;
		}

		// Render different ad types
		const renderAdContent = () => {
			switch (kind) {
				case 'banner':
					return (
						<div className={styles.advertisement__banner}>
							{content.imageUrl && (
								<img
									src={content.imageUrl}
									alt={content.altText || 'Advertisement'}
									className={styles.advertisement__image}
								/>
							)}
							<div
								className={styles.advertisement__content}
							>
								{content.title && (
									<h3
										className={styles.advertisement__title}
									>
										{content.title}
									</h3>
								)}
								{content.description && (
									<p
										className={
											styles.advertisement__description
										}
									>
										{content.description}
									</p>
								)}
								{content.ctaText && (
									<Button
										kind='primary'
										className={styles.advertisement__cta}
										onClick={handleAdClick}
									>
										{content.ctaText}
									</Button>
								)}
							</div>
						</div>
					);

				case 'interstitial':
					return isAdVisible ?
							<div className={styles.advertisement__modal}>
								{showBackdrop && (
									<div
										className={
											styles.advertisement__backdrop
										}
										style={{ opacity: backdropOpacity }}
									/>
								)}
								<div
									className={
										styles.advertisement__modal_content
									}
								>
									<Button
										kind='close'
										className={styles.advertisement__close}
										onClick={handleAdClose}
										aria-label='Close advertisement'
									>
										×
									</Button>
									{content.imageUrl && (
										<img
											src={content.imageUrl}
											alt={
												content.altText || 'Advertisement'
											}
											className={
												styles.advertisement__image
											}
										/>
									)}
									<div
										className={
											styles.advertisement__content
										}
									>
										{content.title && (
											<h2
												className={
													styles.advertisement__title
												}
											>
												{content.title}
											</h2>
										)}
										{content.description && (
											<p
												className={
													styles.advertisement__description
												}
											>
												{content.description}
											</p>
										)}
										{content.ctaText && (
											<Button
												kind='primary'
												className={
													styles.advertisement__cta
												}
												onClick={handleAdClick}
											>
												{content.ctaText}
											</Button>
										)}
									</div>
								</div>
							</div>
						:	null;

				case 'rewarded-modal':
					return isAdVisible ?
							<div className={styles.advertisement__modal}>
								{showBackdrop && (
									<div
										className={
											styles.advertisement__backdrop
										}
										style={{ opacity: backdropOpacity }}
									/>
								)}
								<div
									className={
										styles.advertisement__modal_content
									}
								>
									<div
										className={
											styles.advertisement__reward_info
										}
									>
										<h2>Watch Ad to Earn Reward</h2>
										<p>
											Complete this advertisement to earn:{' '}
											{content.rewardData?.description}
										</p>
									</div>
									{content.imageUrl && (
										<img
											src={content.imageUrl}
											alt={
												content.altText || 'Advertisement'
											}
											className={
												styles.advertisement__image
											}
										/>
									)}
									<div
										className={
											styles.advertisement__content
										}
									>
										{content.title && (
											<h3
												className={
													styles.advertisement__title
												}
											>
												{content.title}
											</h3>
										)}
										{content.description && (
											<p
												className={
													styles.advertisement__description
												}
											>
												{content.description}
											</p>
										)}
										<div
											className={
												styles.advertisement__reward_actions
											}
										>
											<Button
												kind='primary'
												className={
													styles.advertisement__cta
												}
												onClick={() => {
													handleAdClick();
													handleRewardEarned();
												}}
											>
												{content.ctaText || 'Claim Reward'}
											</Button>
											<Button
												kind='ghost'
												className={
													styles.advertisement__close_button
												}
												onClick={handleAdClose}
											>
												Skip
											</Button>
										</div>
									</div>
								</div>
							</div>
						:	null;

				case 'native-card':
					return (
						<div className={styles.advertisement__native}>
							<span
								className={styles.advertisement__sponsored}
							>
								Sponsored
							</span>
							{content.imageUrl && (
								<img
									src={content.imageUrl}
									alt={content.altText || 'Advertisement'}
									className={styles.advertisement__image}
								/>
							)}
							<div
								className={styles.advertisement__content}
							>
								{content.title && (
									<h4
										className={styles.advertisement__title}
									>
										{content.title}
									</h4>
								)}
								{content.description && (
									<p
										className={
											styles.advertisement__description
										}
									>
										{content.description}
									</p>
								)}
								{content.ctaText && (
									<Button
										kind='primary'
										className={styles.advertisement__cta}
										onClick={handleAdClick}
									>
										{content.ctaText}
									</Button>
								)}
							</div>
						</div>
					);

				case 'sticky-bar':
					return (
						<div className={styles.advertisement__sticky}>
							<div
								className={styles.advertisement__content}
							>
								{content.title && (
									<span
										className={styles.advertisement__title}
									>
										{content.title}
									</span>
								)}
								{content.description && (
									<span
										className={
											styles.advertisement__description
										}
									>
										{content.description}
									</span>
								)}
								{content.ctaText && (
									<Button
										kind='primary'
										className={styles.advertisement__cta}
										onClick={handleAdClick}
									>
										{content.ctaText}
									</Button>
								)}
							</div>
							<Button
								kind='ghost'
								className={styles.advertisement__close}
								onClick={handleAdClose}
								aria-label='Close advertisement'
							>
								×
							</Button>
						</div>
					);

				case 'floating-widget':
					return (
						<div className={styles.advertisement__floating}>
							<Button
								kind='ghost'
								className={styles.advertisement__close}
								onClick={handleAdClose}
								aria-label='Close advertisement'
							>
								×
							</Button>
							{content.imageUrl && (
								<img
									src={content.imageUrl}
									alt={content.altText || 'Advertisement'}
									className={styles.advertisement__image}
								/>
							)}
							<div
								className={styles.advertisement__content}
							>
								{content.title && (
									<h5
										className={styles.advertisement__title}
									>
										{content.title}
									</h5>
								)}
								{content.ctaText && (
									<Button
										kind='primary'
										className={styles.advertisement__cta}
										onClick={handleAdClick}
									>
										{content.ctaText}
									</Button>
								)}
							</div>
						</div>
					);

				case 'toast-notification':
					return (
						<div className={styles.advertisement__toast}>
							<div
								className={styles.advertisement__content}
							>
								{content.title && (
									<strong
										className={styles.advertisement__title}
									>
										{content.title}
									</strong>
								)}
								{content.description && (
									<p
										className={
											styles.advertisement__description
										}
									>
										{content.description}
									</p>
								)}
								{content.ctaText && (
									<Button
										kind='primary'
										className={styles.advertisement__cta}
										onClick={handleAdClick}
									>
										{content.ctaText}
									</Button>
								)}
							</div>
							<Button
								kind='ghost'
								className={styles.advertisement__close}
								onClick={handleAdClose}
								aria-label='Close advertisement'
							>
								×
							</Button>
						</div>
					);

				default:
					return (
						<div className={styles.advertisement__default}>
							{content.imageUrl && (
								<img
									src={content.imageUrl}
									alt={content.altText || 'Advertisement'}
									className={styles.advertisement__image}
								/>
							)}
							<div
								className={styles.advertisement__content}
							>
								{content.title && (
									<h3
										className={styles.advertisement__title}
									>
										{content.title}
									</h3>
								)}
								{content.description && (
									<p
										className={
											styles.advertisement__description
										}
									>
										{content.description}
									</p>
								)}
								{content.ctaText && (
									<Button
										kind='primary'
										className={styles.advertisement__cta}
										onClick={handleAdClick}
									>
										{content.ctaText}
									</Button>
								)}
							</div>
						</div>
					);
			}
		};

		return (
			<div
				ref={ref}
				className={combinedClassName}
				style={combinedStyle}
				data-ad-id={content.id}
				data-ad-kind={kind}
				{...props}
			>
				<div
					ref={adSlotRef}
					className={styles.advertisement__slot}
				>
					{renderAdContent()}
				</div>
			</div>
		);
	}
);

Advertisements.displayName = 'Advertisements';

// Advertisement Container Implementation (used internally by Advertisement component)
const AdContainerImplementation = forwardRef<
	HTMLDivElement,
	AdContainerProps & { ref?: React.Ref<HTMLDivElement> }
>(
	({
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
		// Container state
		const [currentAds, setCurrentAds] = useState<any[]>([]);
		const [adErrors, setAdErrors] = useState<
			Record<string, string>
		>({});
		const [containerMetrics, setContainerMetrics] =
			useState({
				totalImpressions: 0,
				totalClicks: 0,
				loadedAds: 0,
				errorRate: 0,
			});

		// Rotation state
		const [rotationIndex, setRotationIndex] = useState(0);
		const rotationTimerRef =
			useRef<ReturnType<typeof setTimeout>>();

		// Responsive state
		const [screenSize, setScreenSize] = useState<
			'mobile' | 'tablet' | 'desktop'
		>('desktop');

		// Generate unique container ID
		const containerId = useMemo(
			() =>
				`ad-container-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
			[]
		);

		// Get responsive config
		const getResponsiveConfig = useCallback(() => {
			if (!responsive || !breakpoints) {
				return { maxAds, layout };
			}
			const config = breakpoints[screenSize];
			if (!config) {
				return { maxAds, layout };
			}
			return {
				maxAds: config.maxAds || maxAds,
				layout: config.layout || layout,
			};
		}, [
			responsive,
			breakpoints,
			screenSize,
			maxAds,
			layout,
		]);

		// Screen size detection
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

			return () => {
				window.removeEventListener(
					'resize',
					updateScreenSize
				);
			};
		}, [responsive]);

		// Select ads based on allowed types and weights
		const selectAdsFromPool = useCallback(() => {
			if (adPool.length === 0) return [];

			const { maxAds: responsiveMaxAds } =
				getResponsiveConfig();

			// Filter by allowed types
			const allowedAds = adPool.filter((ad) =>
				allowedAdTypes.includes(ad.kind)
			);

			if (allowedAds.length === 0) return [];

			// Weighted selection
			const weightedAds: any[] = [];
			allowedAds.forEach((ad) => {
				const weight = ad.weight || 1;
				for (let i = 0; i < weight; i++) {
					weightedAds.push(ad);
				}
			});

			// Shuffle and select
			const shuffled = [...weightedAds].sort(
				() => Math.random() - 0.5
			);
			return shuffled.slice(0, responsiveMaxAds);
		}, [adPool, allowedAdTypes, getResponsiveConfig]);

		// Initialize ads
		useEffect(() => {
			const selectedAds = selectAdsFromPool();
			setCurrentAds(selectedAds);
		}, [selectAdsFromPool]);

		// Auto-rotation
		useEffect(() => {
			if (
				!autoRotate ||
				rotationInterval <= 0 ||
				currentAds.length <= 1
			) {
				return;
			}

			rotationTimerRef.current = setInterval(() => {
				setRotationIndex(
					(prev) => (prev + 1) % currentAds.length
				);
			}, rotationInterval);

			return () => {
				if (rotationTimerRef.current) {
					clearInterval(rotationTimerRef.current);
				}
			};
		}, [autoRotate, rotationInterval, currentAds.length]);

		// Handle ad events
		const handleAdLoad = useCallback(
			(adId: string, kind: AdKind) => {
				setContainerMetrics((prev) => ({
					...prev,
					loadedAds: prev.loadedAds + 1,
				}));
				onAdLoad?.(adId, kind);
			},
			[onAdLoad]
		);

		const handleAdError = useCallback(
			(adId: string, error: string) => {
				setAdErrors((prev) => ({ ...prev, [adId]: error }));
				setContainerMetrics((prev) => {
					const newErrorRate =
						currentAds.length > 0 ?
							(Object.keys(adErrors).length + 1) /
							currentAds.length
						:	0;
					return {
						...prev,
						errorRate: newErrorRate,
					};
				});
				onAdError?.(adId, error);
			},
			[adErrors, currentAds.length, onAdError]
		);

		const handleAdClick = useCallback(
			(adId: string, url: string) => {
				setContainerMetrics((prev) => ({
					...prev,
					totalClicks: prev.totalClicks + 1,
				}));
				onAdClick?.(adId, url);
			},
			[onAdClick]
		);

		const handleAdImpression = useCallback(
			(adId: string) => {
				setContainerMetrics((prev) => ({
					...prev,
					totalImpressions: prev.totalImpressions + 1,
				}));
				onAdImpression?.(adId);
			},
			[onAdImpression]
		);

		// Build container className
		const containerClassName = [
			styles.adContainer,
			styles[`adContainer--${layout}`],
			responsive && styles['adContainer--responsive'],
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Build container styles
		const containerStyle: React.CSSProperties = {
			...style,
			gap: spacing,
			alignItems,
			justifyContent,
		};

		// Show fallback if no ads or all failed
		if (
			currentAds.length === 0 ||
			Object.keys(adErrors).length === currentAds.length
		) {
			return showFallbackOnError && fallbackContent ?
					<div
						className={containerClassName}
						style={containerStyle}
					>
						{fallbackContent}
					</div>
				:	null;
		}

		const { layout: responsiveLayout } =
			getResponsiveConfig();

		// Render based on layout
		const renderAds = () => {
			switch (responsiveLayout) {
				case 'single':
					const currentAd =
						currentAds[rotationIndex] || currentAds[0];
					if (!currentAd) return null;

					return (
						<Advertisements
							key={`${currentAd.content.id}-${rotationIndex}`}
							kind={currentAd.kind}
							content={currentAd.content}
							onAdClick={handleAdClick}
							onAdImpression={handleAdImpression}
							onAdError={handleAdError}
							analyticsHooks={analyticsHooks}
							sessionId={sessionId}
							userId={userId}
							trackingEnabled={trackingEnabled}
							providers={providers}
							primaryProvider={primaryProvider}
							fallbackProviders={fallbackProviders}
							{...currentAd.props}
						/>
					);

				case 'carousel':
					return currentAds.map((ad: any) => (
						<Advertisements
							key={ad.content.id}
							kind={ad.kind}
							content={ad.content}
							onAdClick={handleAdClick}
							onAdImpression={handleAdImpression}
							onAdError={handleAdError}
							analyticsHooks={analyticsHooks}
							sessionId={sessionId}
							userId={userId}
							trackingEnabled={trackingEnabled}
							providers={providers}
							primaryProvider={primaryProvider}
							fallbackProviders={fallbackProviders}
							{...ad.props}
						/>
					));

				case 'grid':
					return (
						<div className={styles.adContainer__grid}>
							{currentAds.map((ad: any) => (
								<Advertisements
									key={ad.content.id}
									kind={ad.kind}
									content={ad.content}
									onAdClick={handleAdClick}
									onAdImpression={handleAdImpression}
									onAdError={handleAdError}
									analyticsHooks={analyticsHooks}
									sessionId={sessionId}
									userId={userId}
									trackingEnabled={trackingEnabled}
									providers={providers}
									primaryProvider={primaryProvider}
									fallbackProviders={fallbackProviders}
									{...ad.props}
								/>
							))}
						</div>
					);

				case 'stack':
				default:
					return currentAds.map((ad: any) => (
						<Advertisements
							key={ad.content.id}
							kind={ad.kind}
							content={ad.content}
							onAdClick={handleAdClick}
							onAdImpression={handleAdImpression}
							onAdError={handleAdError}
							analyticsHooks={analyticsHooks}
							sessionId={sessionId}
							userId={userId}
							trackingEnabled={trackingEnabled}
							providers={providers}
							primaryProvider={primaryProvider}
							fallbackProviders={fallbackProviders}
							{...ad.props}
						/>
					));
			}
		};

		return (
			<div
				className={containerClassName}
				style={containerStyle}
				data-container-id={containerId}
				data-layout={responsiveLayout}
			>
				{responsiveLayout === 'carousel' && (
					<div className={styles.adContainer__carousel}>
						{renderAds()}
						{currentAds.length > 1 && (
							<div
								className={
									styles.adContainer__carousel_indicators
								}
							>
								{currentAds.map((_, index: number) => (
									<Button
										key={index}
										kind='ghost'
										className={[
											styles.adContainer__carousel_indicator,
											index === rotationIndex &&
												styles[
													'adContainer__carousel_indicator--active'
												],
										]
											.filter(Boolean)
											.join(' ')}
										onClick={() => setRotationIndex(index)}
										aria-label={`Show ad ${index + 1}`}
									/>
								))}
							</div>
						)}
					</div>
				)}
				{responsiveLayout !== 'carousel' && renderAds()}
			</div>
		);
	}
);

// Create AdContainer alias for backward compatibility
const AdContainer = Advertisements;

// Export both components and types
export { Advertisements, AdContainer };

// Default export is Advertisements
export default Advertisements;
