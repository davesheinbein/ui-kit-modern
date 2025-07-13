// Advertisement types and interfaces

export type AdKind =
	| 'banner'
	| 'modal'
	| 'native'
	| 'sticky'
	| 'floating'
	| 'toast'
	| 'billboard'
	| 'container'
	| 'search-ad'
	| 'display-ad'
	| 'shopping-ad'
	| 'video-ad'
	| 'local-ad'
	| 'app-ad'
	| 'image-ad'
	| 'story-ad'
	| 'reels-ad'
	| 'carousel-ad'
	| 'collection-ad'
	| 'lead-ad';

export type AdVariant =
	| 'standard'
	| 'premium'
	| 'minimal'
	| 'branded'
	| 'google-search'
	| 'google-display'
	| 'google-shopping'
	| 'google-video'
	| 'google-local'
	| 'google-app'
	| 'meta-image'
	| 'meta-story'
	| 'meta-reels'
	| 'meta-carousel'
	| 'meta-collection'
	| 'meta-lead'
	| 'facebook-feed';

export type AdSize =
	| 'small'
	| 'medium'
	| 'large'
	| 'fullscreen'
	| 'fit-content'
	| 'banner'
	| 'leaderboard'
	| 'rectangle'
	| 'skyscraper'
	| 'wide-skyscraper'
	| 'square'
	| 'small-rectangle'
	| 'mobile-banner'
	| 'large-mobile'
	| 'half-banner'
	| 'button'
	| 'custom';

export type AdTheme = 'light' | 'dark' | 'auto';
export type AdPosition =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right'
	| 'center'
	| 'fixed'
	| 'absolute'
	| 'relative'
	| 'static';
export type AdLayout =
	| 'stack'
	| 'grid'
	| 'carousel'
	| 'single';
export type AdAnimation =
	| 'fade'
	| 'slide'
	| 'zoom'
	| 'bounce'
	| 'none';

export interface AdStyleProps {
	containerClassName?: string;
	containerStyle?: React.CSSProperties;
	background?: string;
	borderRadius?: string | number;
	shadow?: string;
	padding?: string | number;
	margin?: string | number;
	border?: string;
	modalClassName?: string;
	modalStyle?: React.CSSProperties;
	modalBackground?: string;
	modalBorderRadius?: string | number;
	modalPadding?: string | number;
	modalShadow?: string;
	backdropClassName?: string;
	backdropStyle?: React.CSSProperties;
	backdropBackground?: string;
	backdropOpacity?: number;
	showBackdrop?: boolean;
	titleClassName?: string;
	titleStyle?: React.CSSProperties;
	titleTag?: keyof JSX.IntrinsicElements;
	titleColor?: string;
	titleSize?: string | number;
	titleWeight?: string | number;
	descriptionClassName?: string;
	descriptionStyle?: React.CSSProperties;
	descriptionColor?: string;
	descriptionSize?: string | number;
	imageClassName?: string;
	imageStyle?: React.CSSProperties;
	imagePosition?:
		| 'left'
		| 'right'
		| 'top'
		| 'bottom'
		| 'background';
	imageWidth?: string | number;
	imageHeight?: string | number;
	imageBorderRadius?: string | number;
	ctaClassName?: string;
	ctaStyle?: React.CSSProperties;
	ctaVariant?:
		| 'primary'
		| 'secondary'
		| 'ghost'
		| 'outline';
	ctaBackground?: string;
	ctaColor?: string;
	ctaPadding?: string | number;
	ctaBorderRadius?: string | number;
	closeClassName?: string;
	closeStyle?: React.CSSProperties;
	closePosition?:
		| 'top-right'
		| 'top-left'
		| 'bottom-right'
		| 'bottom-left'
		| 'custom';
	closeBackground?: string;
	closeColor?: string;
	closeSize?: string | number;
	sponsoredClassName?: string;
	sponsoredStyle?: React.CSSProperties;
	sponsoredColor?: string;
	sponsoredSize?: string | number;
}

export interface AdBehaviorProps {
	visible?: boolean;
	loading?: boolean;
	error?: boolean;
	autoClose?: boolean;
	autoCloseDelay?: number;
	pauseOnHover?: boolean;
	clickable?: boolean;
	clickTarget?: '_blank' | '_self' | '_parent' | '_top';
	clickRel?: string;
	onClickBehavior?: 'open-url' | 'custom' | 'none';
	closable?: boolean;
	closeOnBackdrop?: boolean;
	closeOnEscape?: boolean;
	closeText?: string;
	animationEnabled?: boolean;
	entranceAnimation?: AdAnimation;
	exitAnimation?: AdAnimation;
	animationDuration?: number;
	animationEasing?: string;
	animationDelay?: number;
	position?: AdPosition;
	positionOffset?: {
		top?: string | number;
		right?: string | number;
		bottom?: string | number;
		left?: string | number;
	};
	zIndex?: number;
	responsive?: boolean;
	maxWidth?: string | number;
	maxHeight?: string | number;
	minWidth?: string | number;
	minHeight?: string | number;
}

export interface AdContentProps {
	title?: string;
	description?: string;
	imageUrl?: string;
	imageAlt?: string;
	ctaText?: string;
	ctaUrl?: string;
	brand?: string;
	sponsored?: boolean;
	sponsoredText?: string;
	rewardType?: string;
	rewardAmount?: number;
	rewardDescription?: string;
	customContent?: React.ReactNode;
	headerContent?: React.ReactNode;
	footerContent?: React.ReactNode;
	// Added for story compatibility
	displayUrl?: string;
	price?: string;
	location?: string;
	carouselItems?: any[];
	// Add extra fields for story compatibility
	sitelinks?: Array<string | { text: string; url: string }>;
	rating?: number;
	hours?: string;
	videoUrl?: string;
	storyOverlay?: any;
	collectionProducts?: any[];
	reviews?: number;
	videoDuration?: number;
	skipCountdown?: number;
	leadFormFields?: any[];
}

export interface AdItem {
	kind: AdKind;
	content: AdContentProps;
	weight?: number;
	style?: AdStyleProps;
	behavior?: AdBehaviorProps;
}

export interface AdMultiProps {
	count: 'many';
	ads: AdItem[];
	maxAds?: number;
	layout?: AdLayout;
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
	autoRotate?: boolean;
	rotationInterval?: number;
	breakpoints?: {
		mobile?: { maxAds?: number; layout?: AdLayout };
		tablet?: { maxAds?: number; layout?: AdLayout };
		desktop?: { maxAds?: number; layout?: AdLayout };
	};
}

export interface AdEventProps {
	onAdLoad?: (adId: string, kind: AdKind) => void;
	onAdClick?: (adId: string, url?: string) => void;
	onAdImpression?: (adId: string) => void;
	onAdClose?: (adId: string) => void;
	onAdError?: (adId: string, error: string) => void;
	onRewardEarned?: (adId: string, reward: any) => void;
	onAnimationStart?: (
		adId: string,
		animation: AdAnimation
	) => void;
	onAnimationEnd?: (
		adId: string,
		animation: AdAnimation
	) => void;
}

export interface AdAnalyticsProps {
	trackingEnabled?: boolean;
	analyticsProvider?: string;
	sessionId?: string;
	userId?: string;
	analyticsHooks?: any;
	targetingData?: Record<string, any>;
}

export interface AdProviderProps {
	providers?: any[];
	primaryProvider?: string;
	fallbackProviders?: string[];
	providerConfig?: Record<string, any>;
	enableProviderRotation?: boolean;
	providerRotationInterval?: number;
}

export interface SingleAdProps
	extends AdStyleProps,
		AdBehaviorProps,
		AdContentProps,
		AdEventProps,
		AdAnalyticsProps,
		AdProviderProps {
	kind: AdKind;
	count?: 'one';
	variant?: AdVariant;
	size?: AdSize;
	theme?: AdTheme;
	fallbackContent?: React.ReactNode;
	showFallbackOnError?: boolean;
}

export interface MultiAdProps
	extends AdMultiProps,
		AdEventProps,
		AdAnalyticsProps,
		AdProviderProps {
	fallbackContent?: React.ReactNode;
	showFallbackOnError?: boolean;
	allowedAdTypes?: AdKind[];
}

export type AdvertisementProps =
	| SingleAdProps
	| MultiAdProps;

// AdState type for advertisement state
export type AdState =
	| 'loading'
	| 'ready'
	| 'playing'
	| 'paused'
	| 'completed'
	| 'error'
	| 'blocked'
	| 'dismissed';

// AdMetrics interface for tracking ad metrics
export interface AdMetrics {
	impressions: number;
	clicks: number;
	ctr: number;
}
