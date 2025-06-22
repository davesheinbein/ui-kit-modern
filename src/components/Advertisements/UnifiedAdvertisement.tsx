import React, {
	forwardRef,
	useEffect,
	useCallback,
	useMemo,
	useRef,
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
} from './configurations';
import {
	useAdvertisementRedux,
} from '../../store';
import styles from './Advertisements.module.scss';

// Base advertisement props interface
export interface BaseAdvertisementProps {
	className?: string;
	style?: React.CSSProperties;
}

// Use the extended ad kinds from configurations
export type AdKind = ExtendedAdKind;

export interface UnifiedAdvertisementProps
	extends BaseAdvertisementProps {
	kind: AdKind;

	// Content props
	content: AdContent;

	// Behavior props
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

	// Container specific props
	allowedAdTypes?: AdKind[];
	fallbackContent?: React.ReactNode;
}

const UnifiedAdvertisement = forwardRef<
	HTMLDivElement,
	UnifiedAdvertisementProps
>(
	(
		{
			kind,
			content,
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
			allowedAdTypes = [],
			fallbackContent,
			...props
		},
		ref
	) => {
		// Refs
		const adSlotRef = useRef<HTMLDivElement>(null);
		const impressionTrackedRef = useRef(false);

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
		const createAnalyticsEvent = useCallback(
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
						createAnalyticsEvent('error', {
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
							createAnalyticsEvent('error', {
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
			createAnalyticsEvent,
		]);

		// Generate unique component ID
		const componentId = useMemo(() => 
			`ad-${kind}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
			[kind]
		);

		// Redux state management
		const { useAdvertisementComponent } = useAdvertisementRedux;
		const adComponent = useAdvertisementComponent(componentId);

		// Derived state
		const adState = adComponent.adState;
		const isAdVisible = isVisible && adComponent.isVisible;
		
		// Initialize component state when component mounts
		useEffect(() => {
			adComponent.setState('loading');
			adComponent.setVisible(isVisible);
		}, [adComponent, isVisible]);

		// Load ad from providers when component mounts
		useEffect(() => {
			if (providers.length > 0) {
				loadAdFromProvider();
			} else {
				setAdState('ready');
			}
		}, [loadAdFromProvider, providers]);

		// Auto-hide functionality
		useEffect(() => {
			if (autoHide && hideDelay > 0 && isAdVisible) {
				const timer = setTimeout(() => {
					setIsAdVisible(false);
					// Track dismiss event
					trackEvent(
						createAnalyticsEvent('dismiss', {
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
			createAnalyticsEvent,
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
					createAnalyticsEvent('impression', {
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
			createAnalyticsEvent,
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
					createAnalyticsEvent('click', {
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
			createAnalyticsEvent,
		]);

		// Handle ad close with analytics
		const handleAdClose = useCallback(() => {
			setIsAdVisible(false);

			// Track dismiss event
			trackEvent(
				createAnalyticsEvent('dismiss', {
					reason: 'user-close',
				})
			);

			onAdClose?.(content.id || 'unknown');
		}, [
			content.id,
			onAdClose,
			trackEvent,
			createAnalyticsEvent,
		]);

		// Handle reward earned (for rewarded ads) with analytics
		const handleRewardEarned = useCallback(() => {
			if (kind === 'rewarded-modal') {
				// Track conversion event
				trackEvent(
					createAnalyticsEvent('conversion', {
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
			createAnalyticsEvent,
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
									<button
										className={styles.advertisement__cta}
										onClick={handleAdClick}
									>
										{content.ctaText}
									</button>
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
									<button
										className={styles.advertisement__close}
										onClick={handleAdClose}
										aria-label='Close advertisement'
									>
										×
									</button>
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
											<button
												className={
													styles.advertisement__cta
												}
												onClick={handleAdClick}
											>
												{content.ctaText}
											</button>
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
											<button
												className={
													styles.advertisement__cta
												}
												onClick={() => {
													handleAdClick();
													handleRewardEarned();
												}}
											>
												{content.ctaText || 'Claim Reward'}
											</button>
											<button
												className={
													styles.advertisement__close_button
												}
												onClick={handleAdClose}
											>
												Skip
											</button>
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
									<button
										className={styles.advertisement__cta}
										onClick={handleAdClick}
									>
										{content.ctaText}
									</button>
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
									<button
										className={styles.advertisement__cta}
										onClick={handleAdClick}
									>
										{content.ctaText}
									</button>
								)}
							</div>
							<button
								className={styles.advertisement__close}
								onClick={handleAdClose}
								aria-label='Close advertisement'
							>
								×
							</button>
						</div>
					);

				case 'floating-widget':
					return (
						<div className={styles.advertisement__floating}>
							<button
								className={styles.advertisement__close}
								onClick={handleAdClose}
								aria-label='Close advertisement'
							>
								×
							</button>
							{content.imageUrl && (
								<img
									src={content.imageUrl}
									alt={content.altText || 'Advertisement'}
									className={styles.advertisement__image}
									onClick={handleAdClick}
								/>
							)}
							{content.title && (
								<h5 className={styles.advertisement__title}>
									{content.title}
								</h5>
							)}
						</div>
					);

				case 'toast-notification':
					return (
						<div className={styles.advertisement__toast}>
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
									<button
										className={styles.advertisement__cta}
										onClick={handleAdClick}
									>
										{content.ctaText}
									</button>
								)}
							</div>
							<button
								className={styles.advertisement__close}
								onClick={handleAdClose}
								aria-label='Close advertisement'
							>
								×
							</button>
						</div>
					);

				case 'exit-intent-modal':
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
									<button
										className={styles.advertisement__close}
										onClick={handleAdClose}
										aria-label='Close advertisement'
									>
										×
									</button>
									<div
										className={
											styles.advertisement__exit_intent
										}
									>
										<h2>Wait! Before you go...</h2>
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
											{content.ctaText && (
												<button
													className={
														styles.advertisement__cta
													}
													onClick={handleAdClick}
												>
													{content.ctaText}
												</button>
											)}
										</div>
									</div>
								</div>
							</div>
						:	null;

				case 'ingame-billboard':
					return (
						<div
							className={styles.advertisement__billboard}
						>
							{content.imageUrl && (
								<img
									src={content.imageUrl}
									alt={content.altText || 'Advertisement'}
									className={styles.advertisement__image}
									onClick={handleAdClick}
								/>
							)}
							<div
								className={
									styles.advertisement__billboard_overlay
								}
							>
								{content.title && (
									<h3
										className={styles.advertisement__title}
									>
										{content.title}
									</h3>
								)}
							</div>
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
									<button
										className={styles.advertisement__cta}
										onClick={handleAdClick}
									>
										{content.ctaText}
									</button>
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
				role='banner'
				aria-label={`${kind} advertisement: ${content.title || content.description}`}
				{...props}
			>
				{/* Ad slot for provider content */}
				<div
					ref={adSlotRef}
					className={styles.advertisement__slot}
				/>
				{renderAdContent()}
			</div>
		);
	}
);

UnifiedAdvertisement.displayName = 'UnifiedAdvertisement';

export default UnifiedAdvertisement;
