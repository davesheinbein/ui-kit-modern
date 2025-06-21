/**
 * Advertisement Configurations - DRY Advertisement Configuration System
 *
 * Comprehensive configuration system for all advertisement types including
 * banner ads, interstitials, rewarded ads, native ads, and more.
 *
 * @module AdvertisementConfigurations
 */

import { ReactNode } from 'react';

// ===== CORE TYPES =====

export type AdVariant =
	| 'standard'
	| 'premium'
	| 'sponsored'
	| 'native'
	| 'video'
	| 'interactive'
	| 'minimal'
	| 'branded';

export type AdSize =
	| 'small'
	| 'medium'
	| 'large'
	| 'banner'
	| 'leaderboard'
	| 'rectangle'
	| 'skyscraper'
	| 'mobile-banner'
	| 'fullscreen'
	| 'custom';

export type AdPosition =
	| 'top'
	| 'bottom'
	| 'left'
	| 'right'
	| 'center'
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right'
	| 'floating'
	| 'sticky'
	| 'inline'
	| 'overlay';

export type AdState =
	| 'loading'
	| 'ready'
	| 'playing'
	| 'paused'
	| 'completed'
	| 'error'
	| 'blocked'
	| 'dismissed';

export type AdDisplayMode =
	| 'always'
	| 'timed'
	| 'conditional'
	| 'user-triggered'
	| 'exit-intent'
	| 'scroll-triggered'
	| 'interaction-based';

// ===== ADVERTISEMENT KINDS =====

export type AdvertisementKind =
	| 'banner-ad'
	| 'interstitial-ad'
	| 'rewarded-ad-modal'
	| 'native-ad-card'
	| 'sticky-ad-bar'
	| 'floating-ad-widget'
	| 'toast-ad-notification'
	| 'exit-intent-ad-modal'
	| 'in-game-billboard'
	| 'ad-container'
	| 'video-ad'
	| 'popup-ad'
	| 'sidebar-ad'
	| 'footer-ad'
	| 'header-ad';

// ===== CORE INTERFACES =====

export interface AdContent {
	id?: string;
	title?: string;
	description?: string;
	imageUrl?: string;
	videoUrl?: string;
	logoUrl?: string;
	ctaText?: string;
	ctaUrl?: string;
	actionUrl?: string;
	altText?: string;
	brand?: string;
	sponsored?: boolean;
	rewardData?: {
		type: string;
		amount: number;
		description: string;
	};
}

export interface AdTargeting {
	demographics?: string[];
	interests?: string[];
	location?: string;
	device?: 'mobile' | 'desktop' | 'tablet';
	timeOfDay?: string;
	gameLevel?: number;
	userType?: 'free' | 'premium' | 'returning';
}

export interface AdMetrics {
	impressions?: number;
	clicks?: number;
	conversions?: number;
	conversionRate?: number;
	revenue?: number;
	ctr?: number;
	viewability?: number;
	watchTime?: number;
}

export interface AdAnimation {
	entrance?: 'fade' | 'slide' | 'bounce' | 'zoom' | 'none';
	exit?: 'fade' | 'slide' | 'bounce' | 'zoom' | 'none';
	duration?: number;
	delay?: number;
	easing?: string;
}

export interface AdConfiguration {
	// Core properties
	variant: AdVariant;
	size: AdSize;
	position: AdPosition;
	state: AdState;
	displayMode: AdDisplayMode;

	// Content
	content: AdContent;
	placeholder?: ReactNode;
	fallbackContent?: ReactNode;

	// Behavior
	closeable?: boolean;
	clickable?: boolean;
	autoClose?: boolean;
	autoCloseDelay?: number;
	pauseOnHover?: boolean;
	muted?: boolean;
	controls?: boolean;
	skipable?: boolean;
	skipDelay?: number;

	// Timing
	duration?: number;
	frequency?: number;
	cooldown?: number;
	maxImpressions?: number;

	// Targeting & Analytics
	targeting?: AdTargeting;
	trackingEnabled?: boolean;
	analyticsProvider?: string;
	analyticsHooks?: AdAnalyticsHooks;

	// Ad Providers
	providers?: AdProvider[];
	primaryProvider?: AdProviderType;
	fallbackProviders?: AdProviderType[];
	providerConfig?: Record<
		AdProviderType,
		Partial<AdProviderConfig>
	>;

	// Visual Design
	theme?: 'light' | 'dark' | 'auto' | 'game' | 'minimal';
	borderRadius?:
		| 'none'
		| 'small'
		| 'medium'
		| 'large'
		| 'full';
	shadow?: boolean;
	overlay?: boolean;
	backdrop?: boolean;
	blur?: boolean;

	// Animation
	animation?: AdAnimation;
	hover?: boolean;
	loading?: boolean;

	// Responsive
	responsive?: boolean;
	mobileOptimized?: boolean;
	hideOnMobile?: boolean;
	hideOnDesktop?: boolean;

	// Integration
	adNetwork?: string;
	adUnitId?: string;
	refreshRate?: number;
	lazyLoad?: boolean;

	// Compliance
	gdprCompliant?: boolean;
	coppaCompliant?: boolean;
	showAdLabel?: boolean;
	privacyPolicy?: string;

	// Custom styling
	dimensions?: {
		maxWidth?: number;
		maxHeight?: number;
		minWidth?: number;
		minHeight?: number;
	};
	styles?: React.CSSProperties;
	customStyles?: {
		container?: string;
		content?: string;
		closeButton?: string;
		overlay?: string;
		cta?: string;
	};
}

// ===== PREDEFINED CONFIGURATIONS =====

export const ADVERTISEMENT_CONFIGURATIONS: Record<
	AdvertisementKind,
	AdConfiguration
> = {
	'banner-ad': {
		variant: 'standard',
		size: 'banner',
		position: 'top',
		state: 'ready',
		displayMode: 'always',
		content: {
			title: 'Advertisement',
			ctaText: 'Learn More',
		},
		closeable: false,
		clickable: true,
		autoClose: false,
		trackingEnabled: true,
		theme: 'auto',
		borderRadius: 'small',
		shadow: true,
		responsive: true,
		showAdLabel: true,
		animation: {
			entrance: 'fade',
			duration: 300,
		},
	},

	'interstitial-ad': {
		variant: 'premium',
		size: 'fullscreen',
		position: 'overlay',
		state: 'ready',
		displayMode: 'conditional',
		content: {
			title: 'Sponsored Content',
			ctaText: 'Continue',
		},
		closeable: true,
		clickable: true,
		autoClose: true,
		autoCloseDelay: 5000,
		skipable: true,
		skipDelay: 3000,
		trackingEnabled: true,
		theme: 'dark',
		borderRadius: 'medium',
		overlay: true,
		backdrop: true,
		animation: {
			entrance: 'zoom',
			exit: 'fade',
			duration: 500,
		},
		mobileOptimized: true,
	},

	'rewarded-ad-modal': {
		variant: 'interactive',
		size: 'large',
		position: 'center',
		state: 'ready',
		displayMode: 'user-triggered',
		content: {
			title: 'Watch Ad for Reward',
			description: 'Watch this short video to earn coins!',
			ctaText: 'Watch Now',
		},
		closeable: true,
		duration: 30000,
		skipable: false,
		trackingEnabled: true,
		theme: 'game',
		borderRadius: 'large',
		shadow: true,
		overlay: true,
		backdrop: true,
		animation: {
			entrance: 'bounce',
			exit: 'zoom',
			duration: 400,
		},
	},

	'native-ad-card': {
		variant: 'native',
		size: 'medium',
		position: 'inline',
		state: 'ready',
		displayMode: 'always',
		content: {
			title: 'Sponsored',
			ctaText: 'Learn More',
		},
		closeable: false,
		clickable: true,
		trackingEnabled: true,
		theme: 'auto',
		borderRadius: 'medium',
		shadow: false,
		responsive: true,
		showAdLabel: true,
		animation: {
			entrance: 'fade',
			duration: 200,
		},
	},

	'sticky-ad-bar': {
		variant: 'minimal',
		size: 'banner',
		position: 'sticky',
		state: 'ready',
		displayMode: 'always',
		content: {
			title: 'Ad',
			ctaText: 'Learn More',
		},
		closeable: true,
		trackingEnabled: true,
		theme: 'light',
		borderRadius: 'none',
		shadow: true,
		responsive: true,
		mobileOptimized: true,
		animation: {
			entrance: 'slide',
			duration: 300,
		},
	},

	'floating-ad-widget': {
		variant: 'standard',
		size: 'small',
		position: 'floating',
		state: 'ready',
		displayMode: 'timed',
		content: {
			ctaText: 'Click Here',
		},
		closeable: true,
		autoClose: true,
		autoCloseDelay: 10000,
		pauseOnHover: true,
		trackingEnabled: true,
		theme: 'auto',
		borderRadius: 'full',
		shadow: true,
		hover: true,
		animation: {
			entrance: 'bounce',
			exit: 'fade',
			duration: 400,
		},
	},

	'toast-ad-notification': {
		variant: 'minimal',
		size: 'small',
		position: 'top-right',
		state: 'ready',
		displayMode: 'conditional',
		content: {
			title: 'Special Offer',
			ctaText: 'View Deal',
		},
		closeable: true,
		autoClose: true,
		autoCloseDelay: 5000,
		trackingEnabled: true,
		theme: 'light',
		borderRadius: 'medium',
		shadow: true,
		animation: {
			entrance: 'slide',
			exit: 'fade',
			duration: 300,
		},
	},

	'exit-intent-ad-modal': {
		variant: 'premium',
		size: 'large',
		position: 'center',
		state: 'ready',
		displayMode: 'exit-intent',
		content: {
			title: 'Wait! Special Offer',
			description: "Don't miss out on this exclusive deal!",
			ctaText: 'Get Offer',
		},
		closeable: true,
		trackingEnabled: true,
		theme: 'auto',
		borderRadius: 'large',
		shadow: true,
		overlay: true,
		backdrop: true,
		animation: {
			entrance: 'zoom',
			exit: 'fade',
			duration: 500,
		},
		frequency: 1,
		cooldown: 86400000, // 24 hours
	},

	'in-game-billboard': {
		variant: 'branded',
		size: 'rectangle',
		position: 'center',
		state: 'ready',
		displayMode: 'always',
		content: {
			title: 'Game Sponsor',
		},
		closeable: false,
		trackingEnabled: true,
		theme: 'game',
		borderRadius: 'small',
		shadow: false,
		responsive: false,
		animation: {
			entrance: 'fade',
			duration: 500,
		},
	},

	'ad-container': {
		variant: 'standard',
		size: 'custom',
		position: 'inline',
		state: 'loading',
		displayMode: 'always',
		content: {},
		closeable: false,
		trackingEnabled: true,
		theme: 'auto',
		borderRadius: 'small',
		responsive: true,
		lazyLoad: true,
		refreshRate: 30000,
		animation: {
			entrance: 'fade',
			duration: 200,
		},
	},

	'video-ad': {
		variant: 'video',
		size: 'large',
		position: 'center',
		state: 'ready',
		displayMode: 'user-triggered',
		content: {
			title: 'Video Advertisement',
			ctaText: 'Watch',
		},
		closeable: true,
		duration: 30000,
		skipable: true,
		skipDelay: 5000,
		controls: true,
		muted: false,
		trackingEnabled: true,
		theme: 'dark',
		borderRadius: 'medium',
		overlay: true,
		backdrop: true,
		animation: {
			entrance: 'zoom',
			exit: 'fade',
			duration: 400,
		},
	},

	'popup-ad': {
		variant: 'standard',
		size: 'medium',
		position: 'center',
		state: 'ready',
		displayMode: 'timed',
		content: {
			title: 'Advertisement',
			ctaText: 'Learn More',
		},
		closeable: true,
		autoClose: true,
		autoCloseDelay: 8000,
		trackingEnabled: true,
		theme: 'auto',
		borderRadius: 'medium',
		shadow: true,
		overlay: true,
		animation: {
			entrance: 'zoom',
			exit: 'fade',
			duration: 300,
		},
	},

	'sidebar-ad': {
		variant: 'standard',
		size: 'skyscraper',
		position: 'right',
		state: 'ready',
		displayMode: 'always',
		content: {
			title: 'Advertisement',
			ctaText: 'Learn More',
		},
		closeable: false,
		trackingEnabled: true,
		theme: 'auto',
		borderRadius: 'small',
		shadow: true,
		responsive: true,
		hideOnMobile: true,
		animation: {
			entrance: 'fade',
			duration: 300,
		},
	},

	'footer-ad': {
		variant: 'minimal',
		size: 'banner',
		position: 'bottom',
		state: 'ready',
		displayMode: 'always',
		content: {
			title: 'Advertisement',
			ctaText: 'Learn More',
		},
		closeable: false,
		trackingEnabled: true,
		theme: 'auto',
		borderRadius: 'none',
		shadow: false,
		responsive: true,
		animation: {
			entrance: 'slide',
			duration: 300,
		},
	},

	'header-ad': {
		variant: 'minimal',
		size: 'leaderboard',
		position: 'top',
		state: 'ready',
		displayMode: 'always',
		content: {
			title: 'Advertisement',
			ctaText: 'Learn More',
		},
		closeable: false,
		trackingEnabled: true,
		theme: 'auto',
		borderRadius: 'none',
		shadow: false,
		responsive: true,
		animation: {
			entrance: 'slide',
			duration: 300,
		},
	},
};

// ===== ANALYTICS INTERFACES =====

export interface AdAnalyticsEvent {
	eventType:
		| 'impression'
		| 'click'
		| 'dismiss'
		| 'error'
		| 'conversion'
		| 'view'
		| 'interaction';
	adId: string;
	adKind: AdvertisementKind;
	timestamp: number;
	sessionId?: string;
	userId?: string;
	metadata?: Record<string, any>;
}

export interface AdAnalyticsHooks {
	onImpression?: (event: AdAnalyticsEvent) => void;
	onClick?: (event: AdAnalyticsEvent) => void;
	onDismiss?: (event: AdAnalyticsEvent) => void;
	onError?: (event: AdAnalyticsEvent) => void;
	onConversion?: (event: AdAnalyticsEvent) => void;
	onView?: (event: AdAnalyticsEvent) => void;
	onInteraction?: (event: AdAnalyticsEvent) => void;
}

export interface AdAnalyticsProvider {
	name: string;
	trackEvent: (
		event: AdAnalyticsEvent
	) => Promise<void> | void;
	initialize?: (
		config: Record<string, any>
	) => Promise<void> | void;
	batchEvents?: boolean;
	batchSize?: number;
	flushInterval?: number;
}

// ===== AD PROVIDER INTERFACES =====

export type AdProviderType =
	| 'adsense'
	| 'adsterra'
	| 'custom'
	| 'direct'
	| 'programmatic'
	| 'affiliate'
	| 'sponsored';

export interface AdProviderConfig {
	type: AdProviderType;
	name: string;
	apiKey?: string;
	publisherId?: string;
	siteId?: string;
	zoneId?: string;
	adUnitId?: string;
	customConfig?: Record<string, any>;

	// Provider-specific settings
	targeting?: AdTargeting;
	fallbackAds?: AdContent[];
	refreshRate?: number;
	maxRetries?: number;

	// Revenue and reporting
	revShare?: number; // percentage
	reportingUrl?: string;
	webhookUrl?: string;
}

export interface AdProvider {
	config: AdProviderConfig;
	loadAd: (
		adSlot: HTMLElement,
		adConfig: AdConfiguration
	) => Promise<AdContent | null>;
	refreshAd?: (
		adSlot: HTMLElement
	) => Promise<AdContent | null>;
	destroyAd?: (adSlot: HTMLElement) => void;
	reportMetrics?: (metrics: AdMetrics) => Promise<void>;

	// Provider lifecycle
	initialize?: () => Promise<void>;
	cleanup?: () => void;
}

// ===== PROVIDER IMPLEMENTATIONS =====

export const createAdSenseProvider = (
	config: Partial<AdProviderConfig>
): AdProvider => {
	const providerConfig: AdProviderConfig = {
		type: 'adsense',
		name: 'Google AdSense',
		refreshRate: 30000,
		maxRetries: 3,
		...config,
	};

	return {
		config: providerConfig,

		async loadAd(
			adSlot: HTMLElement,
			adConfig: AdConfiguration
		): Promise<AdContent | null> {
			try {
				// AdSense implementation
				if (
					typeof window !== 'undefined' &&
					(window as any).adsbygoogle
				) {
					const ads = (window as any).adsbygoogle;

					// Create AdSense ad unit
					const adElement = document.createElement('ins');
					adElement.className = 'adsbygoogle';
					adElement.style.display = 'block';
					adElement.setAttribute(
						'data-ad-client',
						providerConfig.publisherId || ''
					);
					adElement.setAttribute(
						'data-ad-slot',
						providerConfig.adUnitId || ''
					);
					adElement.setAttribute('data-ad-format', 'auto');

					adSlot.appendChild(adElement);
					ads.push({});

					return {
						id: `adsense-${Date.now()}`,
						title: 'Google AdSense Ad',
						sponsored: true,
					};
				}
				return null;
			} catch (error) {
				console.error('AdSense loading error:', error);
				return null;
			}
		},

		async initialize() {
			if (
				typeof window !== 'undefined' &&
				!document.querySelector(
					'script[src*="adsbygoogle"]'
				)
			) {
				const script = document.createElement('script');
				script.async = true;
				script.src =
					'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
				script.setAttribute(
					'data-ad-client',
					providerConfig.publisherId || ''
				);
				document.head.appendChild(script);

				(window as any).adsbygoogle =
					(window as any).adsbygoogle || [];
			}
		},
	};
};

export const createAdsterraProvider = (
	config: Partial<AdProviderConfig>
): AdProvider => {
	const providerConfig: AdProviderConfig = {
		type: 'adsterra',
		name: 'Adsterra',
		refreshRate: 60000,
		maxRetries: 2,
		...config,
	};

	return {
		config: providerConfig,

		async loadAd(
			adSlot: HTMLElement,
			adConfig: AdConfiguration
		): Promise<AdContent | null> {
			try {
				// Adsterra implementation
				const adElement = document.createElement('div');
				adElement.id = `adsterra-${Date.now()}`;
				adSlot.appendChild(adElement);

				// Load Adsterra script
				const script = document.createElement('script');
				script.async = true;
				script.setAttribute('data-cfasync', 'false');
				script.src = `//www.highperformanceformat.com/${providerConfig.zoneId}/invoke.js`;
				adElement.appendChild(script);

				return {
					id: adElement.id,
					title: 'Adsterra Ad',
					sponsored: true,
				};
			} catch (error) {
				console.error('Adsterra loading error:', error);
				return null;
			}
		},

		destroyAd(adSlot: HTMLElement) {
			// Clean up Adsterra ads
			const adElements = adSlot.querySelectorAll(
				'[id^="adsterra-"]'
			);
			adElements.forEach((el) => el.remove());
		},
	};
};

export const createCustomProvider = (
	config: AdProviderConfig & {
		loadAdFunction: (
			adSlot: HTMLElement,
			adConfig: AdConfiguration
		) => Promise<AdContent | null>;
	}
): AdProvider => {
	return {
		config,
		loadAd: config.loadAdFunction,

		async reportMetrics(metrics: AdMetrics) {
			if (config.reportingUrl) {
				try {
					await fetch(config.reportingUrl, {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							metrics,
							providerId: config.name,
						}),
					});
				} catch (error) {
					console.error('Metrics reporting error:', error);
				}
			}
		},
	};
};

// ===== ANALYTICS PROVIDER IMPLEMENTATIONS =====

export const createGoogleAnalyticsProvider = (
	trackingId: string
): AdAnalyticsProvider => ({
	name: 'Google Analytics',

	trackEvent(event: AdAnalyticsEvent) {
		if (
			typeof window !== 'undefined' &&
			(window as any).gtag
		) {
			(window as any).gtag('event', event.eventType, {
				event_category: 'Advertisement',
				event_label: `${event.adKind}-${event.adId}`,
				custom_map: event.metadata,
			});
		}
	},

	async initialize(config: Record<string, any>) {
		if (
			typeof window !== 'undefined' &&
			!document.querySelector(
				`script[src*="${trackingId}"]`
			)
		) {
			const script = document.createElement('script');
			script.async = true;
			script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
			document.head.appendChild(script);

			(window as any).dataLayer =
				(window as any).dataLayer || [];
			(window as any).gtag = function () {
				(window as any).dataLayer.push(arguments);
			};
			(window as any).gtag('js', new Date());
			(window as any).gtag('config', trackingId);
		}
	},
});

export const createCustomAnalyticsProvider = (config: {
	name: string;
	endpoint: string;
	apiKey?: string;
	batchEvents?: boolean;
	batchSize?: number;
	flushInterval?: number;
}): AdAnalyticsProvider => {
	let eventQueue: AdAnalyticsEvent[] = [];
	let flushTimer: number | null = null;

	const flushEvents = async () => {
		if (eventQueue.length === 0) return;

		try {
			await fetch(config.endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					...(config.apiKey && {
						Authorization: `Bearer ${config.apiKey}`,
					}),
				},
				body: JSON.stringify({ events: eventQueue }),
			});
			eventQueue = [];
		} catch (error) {
			console.error('Analytics flush error:', error);
		}
	};

	return {
		name: config.name,
		batchEvents: config.batchEvents ?? true,
		batchSize: config.batchSize ?? 10,
		flushInterval: config.flushInterval ?? 30000,

		trackEvent(event: AdAnalyticsEvent) {
			if (config.batchEvents) {
				eventQueue.push(event);

				if (eventQueue.length >= (config.batchSize ?? 10)) {
					flushEvents();
				} else if (!flushTimer) {
					flushTimer = setTimeout(() => {
						flushEvents();
						flushTimer = null;
					}, config.flushInterval ?? 30000);
				}
			} else {
				// Send immediately
				fetch(config.endpoint, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						...(config.apiKey && {
							Authorization: `Bearer ${config.apiKey}`,
						}),
					},
					body: JSON.stringify({ event }),
				}).catch((error) =>
					console.error('Analytics error:', error)
				);
			}
		},
	};
};

// ===== CORE INTERFACES (EXISTING) =====

// Export extended ad kinds for compatibility
export type ExtendedAdKind =
	| AdvertisementKind
	| 'banner'
	| 'interstitial'
	| 'rewarded-modal'
	| 'native-card'
	| 'sticky-bar'
	| 'floating-widget'
	| 'toast-notification'
	| 'exit-intent-modal'
	| 'ingame-billboard'
	| 'container';

export type AdvertisementConfiguration = AdConfiguration;

// ===== HELPER FUNCTIONS =====

export const getAdvertisementConfig = (
	kind: AdvertisementKind
): AdConfiguration => {
	return (
		ADVERTISEMENT_CONFIGURATIONS[kind] ||
		ADVERTISEMENT_CONFIGURATIONS['banner-ad']
	);
};

export const createAdvertisementConfig = (
	baseKind: AdvertisementKind,
	overrides: Partial<AdConfiguration>
): AdConfiguration => {
	const baseConfig = getAdvertisementConfig(baseKind);
	return {
		...baseConfig,
		...overrides,
		content: {
			...baseConfig.content,
			...overrides.content,
		},
	};
};

export const isAdvertisementKind = (
	kind: string
): kind is AdvertisementKind => {
	return Object.keys(ADVERTISEMENT_CONFIGURATIONS).includes(
		kind
	);
};

export const createAnalyticsEvent = (
	eventType: AdAnalyticsEvent['eventType'],
	adId: string,
	adKind: AdvertisementKind,
	metadata?: Record<string, any>
): AdAnalyticsEvent => {
	return {
		eventType,
		adId,
		adKind,
		timestamp: Date.now(),
		sessionId:
			typeof window !== 'undefined' ?
				window.sessionStorage?.getItem('sessionId') ||
				undefined
			:	undefined,
		metadata,
	};
};

// ===== ADVERTISEMENT GROUPS =====

export const ADVERTISEMENT_GROUPS = {
	DISPLAY: [
		'banner-ad',
		'sidebar-ad',
		'header-ad',
		'footer-ad',
	],
	INTERACTIVE: [
		'interstitial-ad',
		'rewarded-ad-modal',
		'video-ad',
	],
	NATIVE: ['native-ad-card', 'in-game-billboard'],
	OVERLAY: [
		'floating-ad-widget',
		'toast-ad-notification',
		'popup-ad',
	],
	MODAL: [
		'exit-intent-ad-modal',
		'rewarded-ad-modal',
		'interstitial-ad',
	],
	STICKY: ['sticky-ad-bar'],
	CONTAINER: ['ad-container'],
} as const;

export const ADVERTISEMENT_PRESETS = {
	GAMING: [
		'rewarded-ad-modal',
		'in-game-billboard',
		'interstitial-ad',
	],
	ECOMMERCE: [
		'exit-intent-ad-modal',
		'banner-ad',
		'native-ad-card',
	],
	CONTENT: ['native-ad-card', 'sidebar-ad', 'footer-ad'],
	MOBILE: [
		'banner-ad',
		'interstitial-ad',
		'toast-ad-notification',
	],
	MINIMAL: [
		'sticky-ad-bar',
		'toast-ad-notification',
		'native-ad-card',
	],
} as const;
