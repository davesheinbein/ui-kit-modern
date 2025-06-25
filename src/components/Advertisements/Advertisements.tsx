import React, {
	forwardRef,
	useEffect,
	useCallback,
	useMemo,
	useRef,
	useState,
} from 'react';
import { Wrapper } from '../Wrappers';
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

export interface BaseAdvertisementProps {
	className?: string;
	style?: React.CSSProperties;
}

export type AdKind = ExtendedAdKind;

export interface AdvertisementProps
	extends BaseAdvertisementProps {
	count?: 'one' | 'many';

	kind?: AdKind;
	content?: AdContent;

	adPool?: Array<{
		kind: AdKind;
		content: AdContent;
		weight?: number;
		props?: Partial<AdvertisementProps>;
	}>;
	maxAds?: number;
	layout?: 'stack' | 'carousel' | 'grid' | 'single';
	autoRotate?: boolean;
	rotationInterval?: number;
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

	allowedAdTypes?: AdKind[];
	fallbackContent?: React.ReactNode;
	showFallbackOnError?: boolean;

	onAdLoad?: (adId: string, kind: AdKind) => void;
	onAdClick?: (adId: string, url: string) => void;
	onAdImpression?: (adId: string) => void;
	onAdClose?: (adId: string) => void;
	onAdError?: (adId: string, error: string) => void;
	onRewardEarned?: (adId: string, reward: any) => void;

	analyticsHooks?: AdAnalyticsHooks;
	sessionId?: string;
	userId?: string;

	providers?: AdProvider[];
	primaryProvider?: AdProviderType;
	fallbackProviders?: AdProviderType[];
	providerConfig?: Record<string, any>;

	isVisible?: boolean;
	isLoading?: boolean;
	isError?: boolean;

	autoHide?: boolean;
	hideDelay?: number;
	animationEnabled?: boolean;

	targetingData?: Record<string, any>;
	trackingEnabled?: boolean;

	maxWidth?: number;
	maxHeight?: number;
	position?: 'fixed' | 'absolute' | 'relative' | 'static';
	zIndex?: number;

	overrideConfig?: Partial<AdvertisementConfiguration>;
	customClassName?: string;

	showBackdrop?: boolean;
	backdropOpacity?: number;
}

export interface AdContainerProps {
	className?: string;
	style?: React.CSSProperties;

	allowedAdTypes?: AdKind[];
	maxAds?: number;
	rotationInterval?: number;
	autoRotate?: boolean;

	adPool?: Array<{
		kind: AdKind;
		content: AdContent;
		weight?: number;
		props?: Partial<AdvertisementProps>;
	}>;

	fallbackContent?: React.ReactNode;
	showFallbackOnError?: boolean;

	onAdLoad?: (adId: string, kind: AdKind) => void;
	onAdError?: (adId: string, error: string) => void;
	onAdClick?: (adId: string, url: string) => void;
	onAdImpression?: (adId: string) => void;

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

	analyticsHooks?: AdAnalyticsHooks;
	sessionId?: string;
	userId?: string;
	trackingEnabled?: boolean;

	providers?: AdProvider[];
	primaryProvider?: AdProviderType;
	fallbackProviders?: AdProviderType[];
	providerConfig?: Record<string, any>;

	enableProviderRotation?: boolean;
	providerRotationInterval?: number;
	providerFailureThreshold?: number;

	globalTargeting?: Record<string, any>;
	providerSpecificTargeting?: Record<
		AdProviderType,
		Record<string, any>
	>;
}

const Advertisements = forwardRef<
	HTMLDivElement,
	AdvertisementProps
>(
	(
		{
			count = 'one',

			kind,
			content,

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

			allowedAdTypes = [],
			fallbackContent,
			showFallbackOnError = true,
			onAdLoad,
			onAdClick,
			onAdImpression,
			onAdClose,
			onAdError,
			onRewardEarned,

			analyticsHooks,
			sessionId,
			userId,

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

		if (!kind || !content) {
			console.error(
				'Advertisement: kind and content are required for single ads (count="one")'
			);
			return fallbackContent ?
					<>{fallbackContent}</>
				:	null;
		}

		const adSlotRef = useRef<HTMLDivElement>(null);
		const impressionTrackedRef = useRef(false);

		const [adState, setAdState] =
			useState<AdState>('loading');
		const [isAdVisible, setIsAdVisible] =
			useState(isVisible);
		const [metrics, setMetrics] = useState<AdMetrics>({
			impressions: 0,
			clicks: 0,
			ctr: 0,
		});

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

		const loadAdFromProvider = useCallback(async () => {
			if (!adSlotRef.current || providers.length === 0)
				return;

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

			setAdState('error');
		}, [
			providers,
			primaryProvider,
			fallbackProviders,
			config,
			trackEvent,
			createAnalyticsEventHelper,
		]);

		useEffect(() => {
			if (providers.length > 0) {
				loadAdFromProvider();
			} else {
				setAdState('ready');
			}
		}, [loadAdFromProvider, providers]);

		useEffect(() => {
			setIsAdVisible(isVisible);
		}, [isVisible]);

		useEffect(() => {
			if (autoHide && hideDelay > 0 && isAdVisible) {
				const timer = setTimeout(() => {
					setIsAdVisible(false);

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

		const handleAdClose = useCallback(() => {
			setIsAdVisible(false);

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

		const handleRewardEarned = useCallback(() => {
			if (kind === 'rewarded-modal') {
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

		const combinedStyle: React.CSSProperties = {
			...style,
			maxWidth: maxWidth || config.dimensions?.maxWidth,
			maxHeight: maxHeight || config.dimensions?.maxHeight,
			position,
			zIndex,
			...config.styles,
		};

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

		if (isLoading || adState === 'loading') {
			return (
				<Wrapper
					ref={ref}
					className={combinedClassName}
					style={combinedStyle}
					{...props}
				>
					<Wrapper
						className={styles.advertisement__loading}
					>
						Loading advertisement...
					</Wrapper>
				</Wrapper>
			);
		}

		if (isError || adState === 'error') {
			return fallbackContent ?
					<Wrapper
						className={combinedClassName}
						style={combinedStyle}
					>
						{fallbackContent}
					</Wrapper>
				:	null;
		}

		const AdImage = ({
			imageUrl,
			altText,
			className,
		}: {
			imageUrl?: string;
			altText?: string;
			className?: string;
		}) =>
			imageUrl ?
				<img
					src={imageUrl}
					alt={altText || 'Advertisement'}
					className={className}
				/>
			:	null;

		const AdTitle = ({
			title,
			className,
			as = 'h3',
		}: {
			title?: string;
			className?: string;
			as?: keyof JSX.IntrinsicElements;
		}) =>
			title ?
				React.createElement(as, { className }, title)
			:	null;

		const AdDescription = ({
			description,
			className,
		}: {
			description?: string;
			className?: string;
		}) =>
			description ?
				<p className={className}>{description}</p>
			:	null;

		const AdCTAButton = ({
			ctaText,
			onClick,
			className,
		}: {
			ctaText?: string;
			onClick?: () => void;
			className?: string;
		}) =>
			ctaText ?
				<Button
					kind='primary'
					className={className}
					onClick={onClick}
				>
					{ctaText}
				</Button>
			:	null;

		const AdCloseButton = ({
			onClick,
			className,
			ariaLabel = 'Close advertisement',
		}: {
			onClick?: () => void;
			className?: string;
			ariaLabel?: string;
		}) => (
			<Button
				kind='ghost'
				className={className}
				onClick={onClick}
				aria-label={ariaLabel}
			>
				×
			</Button>
		);

		const AdContentBlock = ({
			title,
			description,
			ctaText,
			onCTAClick,
			titleClass,
			descClass,
			ctaClass,
			titleAs = 'h3',
		}: {
			title?: string;
			description?: string;
			ctaText?: string;
			onCTAClick?: () => void;
			titleClass?: string;
			descClass?: string;
			ctaClass?: string;
			titleAs?: keyof JSX.IntrinsicElements;
		}) => (
			<Wrapper className={styles.advertisement__content}>
				<AdTitle
					title={title}
					className={titleClass}
					as={titleAs}
				/>
				<AdDescription
					description={description}
					className={descClass}
				/>
				<AdCTAButton
					ctaText={ctaText}
					onClick={onCTAClick}
					className={ctaClass}
				/>
			</Wrapper>
		);

		const renderAdContent = () => {
			switch (kind) {
				case 'banner':
					return (
						<Wrapper
							className={styles.advertisement__banner}
						>
							<AdImage
								imageUrl={content.imageUrl}
								altText={content.altText}
								className={styles.advertisement__image}
							/>
							<AdContentBlock
								title={content.title}
								description={content.description}
								ctaText={content.ctaText}
								onCTAClick={handleAdClick}
								titleClass={styles.advertisement__title}
								descClass={
									styles.advertisement__description
								}
								ctaClass={styles.advertisement__cta}
							/>
						</Wrapper>
					);
				case 'interstitial':
					return isAdVisible ?
							<Wrapper
								className={styles.advertisement__modal}
							>
								{showBackdrop && (
									<Wrapper
										className={
											styles.advertisement__backdrop
										}
										style={{ opacity: backdropOpacity }}
									/>
								)}
								<Wrapper
									className={
										styles.advertisement__modal_content
									}
								>
									<AdCloseButton
										onClick={handleAdClose}
										className={styles.advertisement__close}
									/>
									<AdImage
										imageUrl={content.imageUrl}
										altText={content.altText}
										className={styles.advertisement__image}
									/>
									<AdContentBlock
										title={content.title}
										description={content.description}
										ctaText={content.ctaText}
										onCTAClick={handleAdClick}
										titleClass={styles.advertisement__title}
										descClass={
											styles.advertisement__description
										}
										ctaClass={styles.advertisement__cta}
										titleAs='h2'
									/>
								</Wrapper>
							</Wrapper>
						:	null;
				case 'rewarded-modal':
					return isAdVisible ?
							<Wrapper
								className={styles.advertisement__modal}
							>
								{showBackdrop && (
									<Wrapper
										className={
											styles.advertisement__backdrop
										}
										style={{ opacity: backdropOpacity }}
									/>
								)}
								<Wrapper
									className={
										styles.advertisement__modal_content
									}
								>
									<Wrapper
										className={
											styles.advertisement__reward_info
										}
									>
										<h2>Watch Ad to Earn Reward</h2>
										<p>
											Complete this advertisement to earn:{' '}
											{content.rewardData?.description}
										</p>
									</Wrapper>
									<AdImage
										imageUrl={content.imageUrl}
										altText={content.altText}
										className={styles.advertisement__image}
									/>
									<Wrapper
										className={
											styles.advertisement__content
										}
									>
										<AdTitle
											title={content.title}
											className={
												styles.advertisement__title
											}
											as='h3'
										/>
										<AdDescription
											description={content.description}
											className={
												styles.advertisement__description
											}
										/>
										<Wrapper
											className={
												styles.advertisement__reward_actions
											}
										>
											<AdCTAButton
												ctaText={
													content.ctaText || 'Claim Reward'
												}
												onClick={() => {
													handleAdClick();
													handleRewardEarned();
												}}
												className={
													styles.advertisement__cta
												}
											/>
											<AdCloseButton
												onClick={handleAdClose}
												className={
													styles.advertisement__close_button
												}
												ariaLabel='Skip'
											/>
										</Wrapper>
									</Wrapper>
								</Wrapper>
							</Wrapper>
						:	null;
				case 'native-card':
					return (
						<Wrapper
							className={styles.advertisement__native}
						>
							<span
								className={styles.advertisement__sponsored}
							>
								Sponsored
							</span>
							<AdImage
								imageUrl={content.imageUrl}
								altText={content.altText}
								className={styles.advertisement__image}
							/>
							<AdContentBlock
								title={content.title}
								description={content.description}
								ctaText={content.ctaText}
								onCTAClick={handleAdClick}
								titleClass={styles.advertisement__title}
								descClass={
									styles.advertisement__description
								}
								ctaClass={styles.advertisement__cta}
								titleAs='h4'
							/>
						</Wrapper>
					);
				case 'sticky-bar':
					return (
						<Wrapper
							className={styles.advertisement__sticky}
						>
							<AdContentBlock
								title={content.title}
								description={content.description}
								ctaText={content.ctaText}
								onCTAClick={handleAdClick}
								titleClass={styles.advertisement__title}
								descClass={
									styles.advertisement__description
								}
								ctaClass={styles.advertisement__cta}
								titleAs='span'
							/>
							<AdCloseButton
								onClick={handleAdClose}
								className={styles.advertisement__close}
							/>
						</Wrapper>
					);
				case 'floating-widget':
					return (
						<Wrapper
							className={styles.advertisement__floating}
						>
							<AdCloseButton
								onClick={handleAdClose}
								className={styles.advertisement__close}
							/>
							<AdImage
								imageUrl={content.imageUrl}
								altText={content.altText}
								className={styles.advertisement__image}
							/>
							<AdContentBlock
								title={content.title}
								ctaText={content.ctaText}
								onCTAClick={handleAdClick}
								titleClass={styles.advertisement__title}
								ctaClass={styles.advertisement__cta}
								titleAs='h5'
							/>
						</Wrapper>
					);
				case 'toast-notification':
					return (
						<Wrapper
							className={styles.advertisement__toast}
						>
							<AdContentBlock
								title={content.title}
								description={content.description}
								ctaText={content.ctaText}
								onCTAClick={handleAdClick}
								titleClass={styles.advertisement__title}
								descClass={
									styles.advertisement__description
								}
								ctaClass={styles.advertisement__cta}
								titleAs='strong'
							/>
							<AdCloseButton
								onClick={handleAdClose}
								className={styles.advertisement__close}
							/>
						</Wrapper>
					);
				default:
					return (
						<Wrapper
							className={styles.advertisement__default}
						>
							<AdImage
								imageUrl={content.imageUrl}
								altText={content.altText}
								className={styles.advertisement__image}
							/>
							<AdContentBlock
								title={content.title}
								description={content.description}
								ctaText={content.ctaText}
								onCTAClick={handleAdClick}
								titleClass={styles.advertisement__title}
								descClass={
									styles.advertisement__description
								}
								ctaClass={styles.advertisement__cta}
							/>
						</Wrapper>
					);
			}
		};

		return (
			<Wrapper
				ref={ref}
				className={combinedClassName}
				style={combinedStyle}
				data-ad-id={content.id}
				data-ad-kind={kind}
				{...props}
			>
				<Wrapper
					ref={adSlotRef}
					className={styles.advertisement__slot}
				>
					{renderAdContent()}
				</Wrapper>
			</Wrapper>
		);
	}
);

Advertisements.displayName = 'Advertisements';

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

		analyticsHooks,
		sessionId,
		userId,
		trackingEnabled = true,

		providers = [],
		primaryProvider = 'custom',
		fallbackProviders = [],
		providerConfig = {},
		enableProviderRotation = false,
		providerRotationInterval = 300000,
		providerFailureThreshold = 3,

		globalTargeting = {},
		providerSpecificTargeting = {},
	}) => {
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

		const [rotationIndex, setRotationIndex] = useState(0);
		const rotationTimerRef =
			useRef<ReturnType<typeof setTimeout>>();

		const [screenSize, setScreenSize] = useState<
			'mobile' | 'tablet' | 'desktop'
		>('desktop');

		const containerId = useMemo(
			() =>
				`ad-container-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
			[]
		);

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

		const selectAdsFromPool = useCallback(() => {
			if (adPool.length === 0) return [];

			const { maxAds: responsiveMaxAds } =
				getResponsiveConfig();

			const allowedAds = adPool.filter((ad) =>
				allowedAdTypes.includes(ad.kind)
			);

			if (allowedAds.length === 0) return [];

			const weightedAds: any[] = [];
			allowedAds.forEach((ad) => {
				const weight = ad.weight || 1;
				for (let i = 0; i < weight; i++) {
					weightedAds.push(ad);
				}
			});

			const shuffled = [...weightedAds].sort(
				() => Math.random() - 0.5
			);
			return shuffled.slice(0, responsiveMaxAds);
		}, [adPool, allowedAdTypes, getResponsiveConfig]);

		useEffect(() => {
			const selectedAds = selectAdsFromPool();
			setCurrentAds(selectedAds);
		}, [selectAdsFromPool]);

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

		const containerClassName = [
			styles.adContainer,
			styles[`adContainer--${layout}`],
			responsive && styles['adContainer--responsive'],
			className,
		]
			.filter(Boolean)
			.join(' ');

		const containerStyle: React.CSSProperties = {
			...style,
			gap: spacing,
			alignItems,
			justifyContent,
		};

		if (
			currentAds.length === 0 ||
			Object.keys(adErrors).length === currentAds.length
		) {
			return showFallbackOnError && fallbackContent ?
					<Wrapper
						className={containerClassName}
						style={containerStyle}
					>
						{fallbackContent}
					</Wrapper>
				:	null;
		}

		const { layout: responsiveLayout } =
			getResponsiveConfig();

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
						<Wrapper
							kind='grid-container'
							className={styles.adContainer__grid}
						>
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
						</Wrapper>
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
			<Wrapper
				className={containerClassName}
				style={containerStyle}
				data-container-id={containerId}
				data-layout={responsiveLayout}
			>
				{responsiveLayout === 'carousel' && (
					<Wrapper className={styles.adContainer__carousel}>
						{renderAds()}
						{currentAds.length > 1 && (
							<Wrapper
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
							</Wrapper>
						)}
					</Wrapper>
				)}
				{responsiveLayout !== 'carousel' && renderAds()}
			</Wrapper>
		);
	}
);

const AdContainer = Advertisements;

export { Advertisements, AdContainer };

export default Advertisements;

export type AdCreationConfig = {
	kind: AdKind;
	defaultProps: Partial<AdvertisementProps>;
	validator?: (content: AdContent) => boolean;
};

const AD_CREATION_CONFIGS: Partial<
	Record<AdKind, AdCreationConfig>
> = {
	'banner': {
		kind: 'banner',
		defaultProps: { position: 'relative' },
		validator: (content: AdContent) =>
			!!content.title || !!content.imageUrl,
	},
	'banner-ad': {
		kind: 'banner-ad',
		defaultProps: { position: 'relative' },
		validator: (content: AdContent) =>
			!!content.title || !!content.imageUrl,
	},
	'interstitial': {
		kind: 'interstitial',
		defaultProps: { position: 'fixed', showBackdrop: true },
		validator: (content: AdContent) =>
			!!content.title && !!content.ctaText,
	},
	'interstitial-ad': {
		kind: 'interstitial-ad',
		defaultProps: { position: 'fixed', showBackdrop: true },
		validator: (content: AdContent) =>
			!!content.title && !!content.ctaText,
	},
	'rewarded-modal': {
		kind: 'rewarded-modal',
		defaultProps: { position: 'fixed', showBackdrop: true },
		validator: (content: AdContent) =>
			!!content.title && !!content.ctaText,
	},
	'rewarded-ad-modal': {
		kind: 'rewarded-ad-modal',
		defaultProps: { position: 'fixed', showBackdrop: true },
		validator: (content: AdContent) =>
			!!content.title && !!content.ctaText,
	},
	'native-card': {
		kind: 'native-card',
		defaultProps: { position: 'relative' },
		validator: (content: AdContent) =>
			!!content.title || !!content.description,
	},
	'native-ad-card': {
		kind: 'native-ad-card',
		defaultProps: { position: 'relative' },
		validator: (content: AdContent) =>
			!!content.title || !!content.description,
	},
	'sticky-bar': {
		kind: 'sticky-bar',
		defaultProps: { position: 'fixed' },
	},
	'sticky-ad-bar': {
		kind: 'sticky-ad-bar',
		defaultProps: { position: 'fixed' },
	},
	'floating-widget': {
		kind: 'floating-widget',
		defaultProps: { position: 'fixed' },
	},
	'floating-ad-widget': {
		kind: 'floating-ad-widget',
		defaultProps: { position: 'fixed' },
	},
	'toast-notification': {
		kind: 'toast-notification',
		defaultProps: {
			position: 'fixed',
			autoHide: true,
			hideDelay: 5000,
		},
	},
	'toast-ad-notification': {
		kind: 'toast-ad-notification',
		defaultProps: {
			position: 'fixed',
			autoHide: true,
			hideDelay: 5000,
		},
	},
	'exit-intent-modal': {
		kind: 'exit-intent-modal',
		defaultProps: { position: 'fixed', showBackdrop: true },
	},
	'exit-intent-ad-modal': {
		kind: 'exit-intent-ad-modal',
		defaultProps: { position: 'fixed', showBackdrop: true },
	},
	'in-game-billboard': {
		kind: 'in-game-billboard',
		defaultProps: { position: 'relative' },
	},
};

const USE_CASE_CONFIGS = {
	website: {
		primary: 'banner' as AdKind,
		secondary: [
			'native-card',
			'sticky-bar',
			'exit-intent-modal',
		] as AdKind[],
		priorities: {
			'banner': 1,
			'native-card': 2,
			'sticky-bar': 3,
			'exit-intent-modal': 4,
		},
	},
	mobile: {
		primary: 'interstitial' as AdKind,
		secondary: [
			'rewarded-modal',
			'toast-notification',
		] as AdKind[],
		priorities: {
			'interstitial': 1,
			'rewarded-modal': 2,
			'toast-notification': 3,
		},
	},
	game: {
		primary: 'in-game-billboard' as AdKind,
		secondary: [
			'rewarded-modal',
			'floating-widget',
		] as AdKind[],
		priorities: {
			'in-game-billboard': 1,
			'rewarded-modal': 2,
			'floating-widget': 3,
		},
	},
	ecommerce: {
		primary: 'banner' as AdKind,
		secondary: [
			'native-card',
			'exit-intent-modal',
			'sticky-bar',
		] as AdKind[],
		priorities: {
			'banner': 1,
			'native-card': 2,
			'exit-intent-modal': 3,
			'sticky-bar': 4,
		},
	},
	blog: {
		primary: 'native-card' as AdKind,
		secondary: ['banner', 'sticky-bar'] as AdKind[],
		priorities: {
			'native-card': 1,
			'banner': 2,
			'sticky-bar': 3,
		},
	},
};

export class Advertisement {
	static createWithConfig(
		kind: AdKind,
		content: AdContent,
		customProps: Partial<AdvertisementProps> = {}
	): React.ReactElement<AdvertisementProps> {
		const config = AD_CREATION_CONFIGS[kind];
		const props = {
			...config?.defaultProps,
			...customProps,
			kind,
			content,
		} as AdvertisementProps;
		return <Advertisements {...props} />;
	}
	static create(
		kind: AdKind,
		content: AdContent,
		customProps: Partial<AdvertisementProps> = {}
	): React.ReactElement<AdvertisementProps> {
		return Advertisement.createWithConfig(
			kind,
			content,
			customProps
		);
	}
	static createBatch(
		specs: Array<{
			kind: AdKind;
			content: AdContent;
			props?: Partial<AdvertisementProps>;
		}>
	): React.ReactElement<AdvertisementProps>[] {
		return specs.map(({ kind, content, props }) =>
			Advertisement.createWithConfig(
				kind,
				content,
				props
			)
		);
	}
	static createConditional(
		condition: boolean,
		kind: AdKind,
		content: AdContent,
		props?: Partial<AdvertisementProps>
	): React.ReactElement<AdvertisementProps> | null {
		return condition ?
				Advertisement.createWithConfig(
					kind,
					content,
					props
				)
			:	null;
	}
	static createSmart(
		context: {
			isMobile?: boolean;
			isGame?: boolean;
			hasSpace?: boolean;
			userEngagement?: 'high' | 'medium' | 'low';
		},
		content: AdContent,
		props?: Partial<AdvertisementProps>
	): React.ReactElement<AdvertisementProps> {
		if (context.isGame)
			return Advertisement.createWithConfig(
				'in-game-billboard',
				content,
				props
			);
		if (context.isMobile)
			return Advertisement.createWithConfig(
				'interstitial',
				content,
				props
			);
		if (context.userEngagement === 'high')
			return Advertisement.createWithConfig(
				'rewarded-modal',
				content,
				props
			);
		return Advertisement.createWithConfig(
			'banner',
			content,
			props
		);
	}
	static createAdSet(
		useCase: keyof typeof USE_CASE_CONFIGS,
		contentMap: Record<string, AdContent>,
		options: {
			sharedProps?: Partial<AdvertisementProps>;
			positions?: Record<
				string,
				Partial<AdvertisementProps>
			>;
			onlyPrimary?: boolean;
		} = {}
	): Record<
		string,
		React.ReactElement<AdvertisementProps>
	> {
		const config = USE_CASE_CONFIGS[useCase];
		const result: Record<
			string,
			React.ReactElement<AdvertisementProps>
		> = {};
		if (options.onlyPrimary && config.primary) {
			result['primary'] =
				Advertisement.createWithConfig(
					config.primary,
					contentMap['primary'] || {},
					options.sharedProps
				);
			return result;
		}
		[config.primary, ...(config.secondary || [])].forEach(
			(kind, idx) => {
				const key =
					idx === 0 ? 'primary' : `secondary${idx}`;
				result[key] = Advertisement.createWithConfig(
					kind,
					contentMap[key] || {},
					{
						...options.sharedProps,
						...(options.positions?.[key] || {}),
					}
				);
			}
		);
		return result;
	}
}

export const AdUtils = {
	batchCreate: (
		requests: Array<{
			kind: AdKind;
			content: AdContent;
			props?: Partial<AdvertisementProps>;
		}>
	) =>
		requests.map(({ kind, content, props }) =>
			Advertisement.createWithConfig(
				kind,
				content,
				props
			)
		),
	conditionalCreate: (
		conditions: Array<{
			condition: boolean;
			kind: AdKind;
			content: AdContent;
			props?: Partial<AdvertisementProps>;
		}>
	) =>
		conditions.map(({ condition, kind, content, props }) =>
			condition ?
				Advertisement.createWithConfig(
					kind,
					content,
					props
				)
			:	null
		),
	responsiveCreate: (
		content: AdContent,
		breakpoints: {
			mobile?: {
				kind: AdKind;
				props?: Partial<AdvertisementProps>;
			};
			tablet?: {
				kind: AdKind;
				props?: Partial<AdvertisementProps>;
			};
			desktop?: {
				kind: AdKind;
				props?: Partial<AdvertisementProps>;
			};
		}
	) => ({
		mobile:
			breakpoints.mobile ?
				Advertisement.createWithConfig(
					breakpoints.mobile.kind,
					content,
					breakpoints.mobile.props
				)
			:	null,
		tablet:
			breakpoints.tablet ?
				Advertisement.createWithConfig(
					breakpoints.tablet.kind,
					content,
					breakpoints.tablet.props
				)
			:	null,
		desktop:
			breakpoints.desktop ?
				Advertisement.createWithConfig(
					breakpoints.desktop.kind,
					content,
					breakpoints.desktop.props
				)
			:	null,
	}),
	abTestCreate: (
		content: AdContent,
		variants: Array<{
			kind: AdKind;
			props?: Partial<AdvertisementProps>;
			weight?: number;
		}>,
		testGroup?: string
	) => {
		const totalWeight = variants.reduce(
			(sum, v) => sum + (v.weight || 1),
			0
		);
		let idx = 0;
		if (testGroup) {
			idx =
				Math.abs(
					testGroup
						.split('')
						.reduce((a, c) => a + c.charCodeAt(0), 0)
				) % variants.length;
		} else {
			let r = Math.random() * totalWeight;
			for (let i = 0; i < variants.length; i++) {
				r -= variants[i].weight || 1;
				if (r <= 0) {
					idx = i;
					break;
				}
			}
		}
		const v = variants[idx];
		return Advertisement.createWithConfig(
			v.kind,
			content,
			v.props
		);
	},
};

export const AdPresets = {
	websiteHeader: (content: AdContent) =>
		Advertisement.createWithConfig(
			'banner',
			content,
			{ position: 'relative' }
		),
	websiteFooter: (content: AdContent) =>
		Advertisement.createWithConfig(
			'banner',
			content,
			{ position: 'relative' }
		),
	websiteInContent: (content: AdContent) =>
		Advertisement.createWithConfig(
			'native-card',
			content,
			{ position: 'relative' }
		),
	websiteSidebar: (content: AdContent) =>
		Advertisement.createWithConfig(
			'native-card',
			content,
			{ position: 'relative' }
		),
	mobileFullscreen: (content: AdContent) =>
		Advertisement.createWithConfig(
			'interstitial',
			content,
			{ position: 'fixed' }
		),
	mobileReward: (
		content: AdContent & { rewardData: any }
	) =>
		Advertisement.createWithConfig(
			'rewarded-modal',
			content,
			{ position: 'fixed' }
		),
	gameBillboard: (content: AdContent) =>
		Advertisement.createWithConfig(
			'in-game-billboard',
			content,
			{ position: 'relative' }
		),
	gameReward: (content: AdContent & { rewardData: any }) =>
		Advertisement.createWithConfig(
			'rewarded-modal',
			content,
			{ position: 'fixed', showBackdrop: true }
		),
	productPromo: (content: AdContent) =>
		Advertisement.createWithConfig(
			'banner',
			content,
			{ position: 'relative' }
		),
	cartAbandonment: (content: AdContent) =>
		Advertisement.createWithConfig(
			'exit-intent-modal',
			content,
			{ position: 'fixed', showBackdrop: true }
		),
	saleNotification: (content: AdContent) =>
		Advertisement.createWithConfig(
			'toast-notification',
			content,
			{ position: 'fixed', autoHide: true, hideDelay: 8000 }
		),
	sponsoredContent: (content: AdContent) =>
		Advertisement.createWithConfig(
			'native-card',
			content,
			{ position: 'relative' }
		),
	newsletterPromo: (content: AdContent) =>
		Advertisement.createWithConfig(
			'sticky-bar',
			content,
			{ position: 'fixed' }
		),
};

(Advertisements as any).Factory = Advertisement;
(Advertisements as any).Utils = AdUtils;
(Advertisements as any).Presets = AdPresets;
