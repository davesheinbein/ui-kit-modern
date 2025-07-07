import React, {
	forwardRef,
	useEffect,
	useCallback,
	useRef,
	useState,
} from 'react';
import { Wrapper } from '../Wrappers';
import { Button } from '../Button';
import classNames from './advertisements.module.scss';
import type {
	AdContent,
	AdMetrics,
	AdState,
	AdAnalyticsEvent,
	AdAnalyticsHooks,
	AdProvider,
	AdProviderType,
} from './configurations';
import AdTitle from './Sub/AdTitle';
import AdDescription from './Sub/AdDescription';
import AdCTAButton from './Sub/AdCTAButton';
import AdCloseButton from './Sub/AdCloseButton';
import AdImage from './Sub/AdImage';
import AdSponsoredLabel from './Sub/AdSponsoredLabel';
import MultiAdContainer from './Sub/MultiAdContainer';

// ===== CORE TYPES =====

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
	| 'meta-lead';

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

// ===== STYLE INTERFACES =====

export interface AdStyleProps {
	// Container styles
	containerClassName?: string;
	containerStyle?: React.CSSProperties;
	background?: string;
	borderRadius?: string | number;
	shadow?: string;
	padding?: string | number;
	margin?: string | number;
	border?: string;

	// Modal-specific styles (for modal kinds)
	modalClassName?: string;
	modalStyle?: React.CSSProperties;
	modalBackground?: string;
	modalBorderRadius?: string | number;
	modalPadding?: string | number;
	modalShadow?: string;

	// Backdrop styles
	backdropClassName?: string;
	backdropStyle?: React.CSSProperties;
	backdropBackground?: string;
	backdropOpacity?: number;
	showBackdrop?: boolean;

	// Title styles
	titleClassName?: string;
	titleStyle?: React.CSSProperties;
	titleTag?: keyof JSX.IntrinsicElements;
	titleColor?: string;
	titleSize?: string | number;
	titleWeight?: string | number;

	// Description styles
	descriptionClassName?: string;
	descriptionStyle?: React.CSSProperties;
	descriptionColor?: string;
	descriptionSize?: string | number;

	// Image styles
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

	// CTA button styles
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

	// Close button styles
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

	// Sponsored label styles
	sponsoredClassName?: string;
	sponsoredStyle?: React.CSSProperties;
	sponsoredColor?: string;
	sponsoredSize?: string | number;
}

// ===== BEHAVIOR INTERFACES =====

export interface AdBehaviorProps {
	// Visibility
	visible?: boolean;
	loading?: boolean;
	error?: boolean;

	// Auto behavior
	autoClose?: boolean;
	autoCloseDelay?: number;
	pauseOnHover?: boolean;

	// Interaction
	clickable?: boolean;
	clickTarget?: '_blank' | '_self' | '_parent' | '_top';
	clickRel?: string;
	onClickBehavior?: 'open-url' | 'custom' | 'none';

	// Close behavior
	closable?: boolean;
	closeOnBackdrop?: boolean;
	closeOnEscape?: boolean;
	closeText?: string;

	// Animation
	animationEnabled?: boolean;
	entranceAnimation?: AdAnimation;
	exitAnimation?: AdAnimation;
	animationDuration?: number;
	animationEasing?: string;
	animationDelay?: number;

	// Positioning
	position?: AdPosition;
	positionOffset?: {
		top?: string | number;
		right?: string | number;
		bottom?: string | number;
		left?: string | number;
	};
	zIndex?: number;

	// Responsive
	responsive?: boolean;
	maxWidth?: string | number;
	maxHeight?: string | number;
	minWidth?: string | number;
	minHeight?: string | number;
}

// ===== CONTENT INTERFACES =====

export interface AdContentProps {
	// Core content
	title?: string;
	description?: string;
	imageUrl?: string;
	imageAlt?: string;
	ctaText?: string;
	ctaUrl?: string;

	// Additional content
	brand?: string;
	sponsored?: boolean;
	sponsoredText?: string;

	// Reward content (for rewarded ads)
	rewardType?: string;
	rewardAmount?: number;
	rewardDescription?: string;

	// Custom content
	customContent?: React.ReactNode;
	headerContent?: React.ReactNode;
	footerContent?: React.ReactNode;
}

// ===== MULTI-AD INTERFACES =====

export interface AdItem {
	kind: AdKind;
	content: AdContentProps;
	weight?: number;
	style?: AdStyleProps;
	behavior?: AdBehaviorProps;
}

export interface AdMultiProps {
	// Multi-ad configuration
	count: 'many';
	ads: AdItem[];
	maxAds?: number;
	layout?: AdLayout;
	spacing?: number;

	// Layout alignment
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

	// Rotation
	autoRotate?: boolean;
	rotationInterval?: number;

	// Responsive breakpoints
	breakpoints?: {
		mobile?: { maxAds?: number; layout?: AdLayout };
		tablet?: { maxAds?: number; layout?: AdLayout };
		desktop?: { maxAds?: number; layout?: AdLayout };
	};
}

// ===== EVENT INTERFACES =====

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

// ===== ANALYTICS INTERFACES =====

export interface AdAnalyticsProps {
	trackingEnabled?: boolean;
	analyticsProvider?: string;
	sessionId?: string;
	userId?: string;
	analyticsHooks?: AdAnalyticsHooks;
	targetingData?: Record<string, any>;
}

// ===== PROVIDER INTERFACES =====

export interface AdProviderProps {
	providers?: AdProvider[];
	primaryProvider?: AdProviderType;
	fallbackProviders?: AdProviderType[];
	providerConfig?: Record<string, any>;
	enableProviderRotation?: boolean;
	providerRotationInterval?: number;
}

// ===== MAIN PROPS INTERFACES =====

interface BaseAdvertisementProps {
	'className'?: string;
	'style'?: React.CSSProperties;
	'id'?: string;
	'data-testid'?: string;
}

export interface SingleAdProps
	extends BaseAdvertisementProps,
		AdStyleProps,
		AdBehaviorProps,
		AdContentProps,
		AdEventProps,
		AdAnalyticsProps,
		AdProviderProps {
	// Core props (required for single ads)
	kind: AdKind;
	count?: 'one';

	// Display props
	variant?: AdVariant;
	size?: AdSize;
	theme?: AdTheme;

	// Fallback
	fallbackContent?: React.ReactNode;
	showFallbackOnError?: boolean;
}

export interface MultiAdProps
	extends BaseAdvertisementProps,
		AdMultiProps,
		AdEventProps,
		AdAnalyticsProps,
		AdProviderProps {
	// Fallback
	fallbackContent?: React.ReactNode;
	showFallbackOnError?: boolean;
	allowedAdTypes?: AdKind[];
}

export type AdvertisementProps =
	| SingleAdProps
	| MultiAdProps;

// ===== DEFAULT CONFIGURATIONS =====

const DEFAULT_SINGLE_AD_CONFIG: Partial<SingleAdProps> = {
	count: 'one',
	kind: 'banner',
	variant: 'standard',
	size: 'medium',
	theme: 'auto',
	visible: true,
	loading: false,
	error: false,
	clickable: true,
	clickTarget: '_blank',
	clickRel: 'noopener noreferrer',
	onClickBehavior: 'open-url',
	closable: false,
	closeText: '×',
	animationEnabled: true,
	entranceAnimation: 'fade',
	exitAnimation: 'fade',
	animationDuration: 300,
	position: 'relative',
	zIndex: 1000,
	responsive: true,
	trackingEnabled: true,
	showFallbackOnError: true,
	backdropOpacity: 0.7,
	showBackdrop: true,
	titleTag: 'h3',
	ctaVariant: 'primary',
	closePosition: 'top-right',
	imagePosition: 'left',
	sponsoredText: 'Sponsored',
};

const DEFAULT_MULTI_AD_CONFIG: Partial<MultiAdProps> = {
	count: 'many',
	maxAds: 3,
	layout: 'stack',
	spacing: 16,
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	autoRotate: false,
	rotationInterval: 30000,
	showFallbackOnError: true,
	trackingEnabled: true,
	breakpoints: {
		mobile: { maxAds: 1, layout: 'single' },
		tablet: { maxAds: 2, layout: 'stack' },
		desktop: { maxAds: 3, layout: 'stack' },
	},
};

// ===== UTILITY FUNCTIONS =====

const generateContainerStyles = (
	props: SingleAdProps
): React.CSSProperties => {
	const styles: React.CSSProperties = {};

	// Position and layout
	if (props.position) {
		if (
			[
				'top-left',
				'top-right',
				'bottom-left',
				'bottom-right',
				'center',
			].includes(props.position)
		) {
			styles.position = 'fixed';

			switch (props.position) {
				case 'top-left':
					styles.top = props.positionOffset?.top || 20;
					styles.left = props.positionOffset?.left || 20;
					break;
				case 'top-right':
					styles.top = props.positionOffset?.top || 20;
					styles.right = props.positionOffset?.right || 20;
					break;
				case 'bottom-left':
					styles.bottom =
						props.positionOffset?.bottom || 20;
					styles.left = props.positionOffset?.left || 20;
					break;
				case 'bottom-right':
					styles.bottom =
						props.positionOffset?.bottom || 20;
					styles.right = props.positionOffset?.right || 20;
					break;
				case 'center':
					styles.top = '50%';
					styles.left = '50%';
					styles.transform = 'translate(-50%, -50%)';
					break;
			}
		} else if (
			[
				'fixed',
				'absolute',
				'relative',
				'static',
				'sticky',
			].includes(props.position)
		) {
			styles.position = props.position as
				| 'fixed'
				| 'absolute'
				| 'relative'
				| 'static'
				| 'sticky';
		}
	}

	// Size constraints
	if (props.maxWidth) styles.maxWidth = props.maxWidth;
	if (props.maxHeight) styles.maxHeight = props.maxHeight;
	if (props.minWidth) styles.minWidth = props.minWidth;
	if (props.minHeight) styles.minHeight = props.minHeight;

	// Z-index
	if (props.zIndex !== undefined)
		styles.zIndex = props.zIndex;

	// Styling
	if (props.background)
		styles.background = props.background;
	if (props.borderRadius !== undefined)
		styles.borderRadius = props.borderRadius;
	if (props.padding !== undefined)
		styles.padding = props.padding;
	if (props.margin !== undefined)
		styles.margin = props.margin;
	if (props.border) styles.border = props.border;
	if (props.shadow) styles.boxShadow = props.shadow;

	return { ...styles, ...props.containerStyle };
};

const generateAnimationStyles = (
	props: SingleAdProps
): string => {
	if (!props.animationEnabled) return '';

	const duration = props.animationDuration || 300;
	const easing = props.animationEasing || 'ease';
	const delay = props.animationDelay || 0;

	return `${duration}ms ${easing} ${delay}ms`;
};

const generateClassName = (
	props: SingleAdProps
): string => {
	const classes = [classNames.advertisement];

	// Add kind class
	classes.push(classNames[`advertisement__${props.kind}`]);

	// Add variant class
	if (props.variant)
		classes.push(
			classNames[`advertisement--${props.variant}`]
		);

	// Add size class
	if (props.size)
		classes.push(
			classNames[`advertisement--size-${props.size}`]
		);

	// Add theme class
	if (props.theme)
		classes.push(
			classNames[`advertisement--${props.theme}`]
		);

	// Add state classes
	if (props.loading)
		classes.push(classNames['advertisement--loading']);
	if (props.error)
		classes.push(classNames['advertisement--error']);
	if (!props.visible)
		classes.push(classNames['advertisement--hidden']);

	// Add position class
	if (props.position)
		classes.push(
			classNames[`advertisement--${props.position}`]
		);

	// Add custom className
	if (props.containerClassName)
		classes.push(props.containerClassName);
	if (props.className) classes.push(props.className);

	return classes.filter(Boolean).join(' ');
};

// ===== COMPONENTS =====

// ===== MAIN COMPONENT =====

const Advertisements = forwardRef<
	HTMLDivElement,
	AdvertisementProps
>((props, ref) => {
	// Handle multi-ad case
	if (props.count === 'many') {
		return (
			<MultiAdContainer
				{...(props as MultiAdProps)}
				ref={ref}
			/>
		);
	}

	// Single ad logic
	const singleProps = {
		...DEFAULT_SINGLE_AD_CONFIG,
		...props,
	} as SingleAdProps;

	// State management
	const [adState, setAdState] = useState<AdState>('ready');
	const [isVisible, setIsVisible] = useState(true);
	const [metrics, setMetrics] = useState<AdMetrics>({
		impressions: 0,
		clicks: 0,
		ctr: 0,
	});
	const adRef = useRef<HTMLDivElement>(null);
	const impressionTracked = useRef(false);

	// Generate styles and classes
	const containerStyles =
		generateContainerStyles(singleProps);
	const animationStyle =
		generateAnimationStyles(singleProps);
	const className = generateClassName(singleProps);

	// Early return if not visible via props (but not state)
	if (!singleProps.visible) return null;

	// Handle click behavior
	const handleAdClick = useCallback(() => {
		// Don't handle clicks if ad is closed
		if (!isVisible) return;

		const adId = singleProps.id || `ad-${Date.now()}`;

		// Update metrics
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

		// Call event handler
		singleProps.onAdClick?.(adId, singleProps.ctaUrl);

		// Handle URL opening
		if (
			singleProps.onClickBehavior === 'open-url' &&
			singleProps.ctaUrl &&
			singleProps.clickable
		) {
			const target = singleProps.clickTarget || '_blank';
			const rel =
				singleProps.clickRel || 'noopener noreferrer';

			if (target === '_blank') {
				window.open(singleProps.ctaUrl, target, rel);
			} else {
				window.location.href = singleProps.ctaUrl;
			}
		}
	}, [
		isVisible,
		singleProps.onAdClick,
		singleProps.ctaUrl,
		singleProps.clickable,
		singleProps.onClickBehavior,
		singleProps.clickTarget,
		singleProps.clickRel,
		singleProps.id,
	]);

	// Handle close behavior
	const handleAdClose = useCallback(() => {
		const adId = singleProps.id || `ad-${Date.now()}`;

		// Mark ad as closed in state (this will hide it)
		setIsVisible(false);

		// Call external close handler if provided
		singleProps.onAdClose?.(adId);
	}, [singleProps.onAdClose, singleProps.id]);

	// Handle impression tracking
	useEffect(() => {
		if (
			singleProps.trackingEnabled &&
			!impressionTracked.current &&
			singleProps.visible
		) {
			impressionTracked.current = true;
			const adId = singleProps.id || `ad-${Date.now()}`;

			setMetrics((prev) => ({
				...prev,
				impressions: (prev.impressions || 0) + 1,
			}));
			singleProps.onAdImpression?.(adId);
		}
	}, [
		singleProps.trackingEnabled,
		singleProps.visible,
		singleProps.onAdImpression,
		singleProps.id,
	]);

	// Auto-close behavior
	useEffect(() => {
		if (
			singleProps.autoClose &&
			singleProps.autoCloseDelay
		) {
			const timer = setTimeout(() => {
				handleAdClose();
			}, singleProps.autoCloseDelay);

			return () => clearTimeout(timer);
		}
	}, [
		singleProps.autoClose,
		singleProps.autoCloseDelay,
		handleAdClose,
	]);

	// Early return if closed (after all hooks)
	if (!isVisible) return null;

	// Loading state
	if (singleProps.loading) {
		return (
			<Wrapper
				ref={ref}
				className={className}
				style={containerStyles}
				data-testid={singleProps['data-testid']}
			>
				Loading advertisement...
			</Wrapper>
		);
	}

	// Error state
	if (singleProps.error) {
		return (
				singleProps.showFallbackOnError &&
					singleProps.fallbackContent
			) ?
				<Wrapper ref={ref}>
					{singleProps.fallbackContent}
				</Wrapper>
			:	null;
	}

	// Custom content override
	if (singleProps.customContent) {
		return (
			<Wrapper
				ref={ref}
				className={className}
				style={containerStyles}
				data-testid={singleProps['data-testid']}
			>
				{singleProps.customContent}
			</Wrapper>
		);
	}

	// Render different ad kinds
	const renderAdContent = () => {
		const commonProps = {
			onClick:
				singleProps.clickable ? handleAdClick : undefined,
		};

		switch (singleProps.kind) {
			case 'modal':
				return (
					<>
						{singleProps.showBackdrop && (
							<div
								className={
									classNames.advertisement__backdrop
								}
								style={{
									background:
										singleProps.backdropBackground ||
										`rgba(0, 0, 0, ${singleProps.backdropOpacity})`,
									...singleProps.backdropStyle,
								}}
								onClick={
									singleProps.closeOnBackdrop ?
										handleAdClose
									:	undefined
								}
							/>
						)}
						<div
							className={
								classNames.advertisement__modal_content
							}
							style={{
								background:
									singleProps.modalBackground || '#ffffff',
								borderRadius:
									singleProps.modalBorderRadius || 12,
								padding: singleProps.modalPadding || 24,
								boxShadow:
									singleProps.modalShadow ||
									'0 8px 32px rgba(0, 0, 0, 0.2)',
								...singleProps.modalStyle,
							}}
						>
							{singleProps.headerContent}

							<AdSponsoredLabel
								sponsored={singleProps.sponsored}
								sponsoredText={singleProps.sponsoredText}
								sponsoredClassName={
									singleProps.sponsoredClassName
								}
								sponsoredStyle={singleProps.sponsoredStyle}
								sponsoredColor={singleProps.sponsoredColor}
								sponsoredSize={singleProps.sponsoredSize}
							/>

							<AdImage
								imageUrl={singleProps.imageUrl}
								imageAlt={singleProps.imageAlt}
								imageClassName={singleProps.imageClassName}
								imageStyle={singleProps.imageStyle}
								imageWidth={singleProps.imageWidth}
								imageHeight={singleProps.imageHeight}
								imageBorderRadius={
									singleProps.imageBorderRadius
								}
							/>

							<AdTitle
								title={singleProps.title}
								titleTag={singleProps.titleTag}
								titleClassName={singleProps.titleClassName}
								titleStyle={singleProps.titleStyle}
								titleColor={singleProps.titleColor}
								titleSize={singleProps.titleSize}
								titleWeight={singleProps.titleWeight}
							/>

							<AdDescription
								description={singleProps.description}
								descriptionClassName={
									singleProps.descriptionClassName
								}
								descriptionStyle={
									singleProps.descriptionStyle
								}
								descriptionColor={
									singleProps.descriptionColor
								}
								descriptionSize={
									singleProps.descriptionSize
								}
							/>

							<AdCTAButton
								ctaText={singleProps.ctaText}
								onClick={handleAdClick}
								ctaClassName={singleProps.ctaClassName}
								ctaStyle={singleProps.ctaStyle}
								ctaVariant={singleProps.ctaVariant}
								ctaBackground={singleProps.ctaBackground}
								ctaColor={singleProps.ctaColor}
								ctaPadding={singleProps.ctaPadding}
								ctaBorderRadius={
									singleProps.ctaBorderRadius
								}
							/>

							{singleProps.closable && (
								<div
									style={{
										position: 'absolute',
										top: 8,
										right: 8,
										zIndex: 2,
									}}
								>
									<AdCloseButton
										onClick={handleAdClose}
										closeClassName={
											singleProps.closeClassName
										}
										closeStyle={singleProps.closeStyle}
										closeText={singleProps.closeText}
										closePosition='top-right'
									/>
								</div>
							)}

							{singleProps.footerContent}
						</div>
					</>
				);

			default:
				// Banner, native, sticky, floating, toast, billboard - all use same layout with different styling
				return (
					<Wrapper {...commonProps}>
						{singleProps.headerContent}

						<AdSponsoredLabel
							sponsored={singleProps.sponsored}
							sponsoredText={singleProps.sponsoredText}
							sponsoredClassName={
								singleProps.sponsoredClassName
							}
							sponsoredStyle={singleProps.sponsoredStyle}
							sponsoredColor={singleProps.sponsoredColor}
							sponsoredSize={singleProps.sponsoredSize}
						/>

						{singleProps.imagePosition !== 'background' && (
							<AdImage
								imageUrl={singleProps.imageUrl}
								imageAlt={singleProps.imageAlt}
								imageClassName={singleProps.imageClassName}
								imageStyle={singleProps.imageStyle}
								imageWidth={singleProps.imageWidth}
								imageHeight={singleProps.imageHeight}
								imageBorderRadius={
									singleProps.imageBorderRadius
								}
							/>
						)}

						<div
							className={classNames.advertisement__content}
						>
							<AdTitle
								title={singleProps.title}
								titleTag={singleProps.titleTag}
								titleClassName={singleProps.titleClassName}
								titleStyle={singleProps.titleStyle}
								titleColor={singleProps.titleColor}
								titleSize={singleProps.titleSize}
								titleWeight={singleProps.titleWeight}
							/>

							<AdDescription
								description={singleProps.description}
								descriptionClassName={
									singleProps.descriptionClassName
								}
								descriptionStyle={
									singleProps.descriptionStyle
								}
								descriptionColor={
									singleProps.descriptionColor
								}
								descriptionSize={
									singleProps.descriptionSize
								}
							/>
						</div>

						<AdCTAButton
							ctaText={singleProps.ctaText}
							onClick={handleAdClick}
							ctaClassName={singleProps.ctaClassName}
							ctaStyle={singleProps.ctaStyle}
							ctaVariant={singleProps.ctaVariant}
							ctaBackground={singleProps.ctaBackground}
							ctaColor={singleProps.ctaColor}
							ctaPadding={singleProps.ctaPadding}
							ctaBorderRadius={singleProps.ctaBorderRadius}
						/>

						{singleProps.closable && (
							<div
								style={{
									position: 'absolute',
									top: 8,
									right: 8,
									zIndex: 2,
								}}
							>
								<AdCloseButton
									onClick={handleAdClose}
									closeClassName={
										singleProps.closeClassName
									}
									closeStyle={singleProps.closeStyle}
									closeText={singleProps.closeText}
									closePosition='top-right'
								/>
							</div>
						)}

						{singleProps.footerContent}
					</Wrapper>
				);
		}
	};

	return (
		<Wrapper
			ref={ref}
			className={className}
			style={{
				...containerStyles,
				...(animationStyle && {
					transition: `all ${animationStyle}`,
				}),
				...(singleProps.imagePosition === 'background' &&
					singleProps.imageUrl && {
						backgroundImage: `url(${singleProps.imageUrl})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}),
			}}
			data-testid={singleProps['data-testid']}
			data-ad-kind={singleProps.kind}
			data-ad-variant={singleProps.variant}
		>
			<div
				className={
					classNames[`advertisement__${singleProps.kind}`]
				}
			>
				{renderAdContent()}
			</div>
		</Wrapper>
	);
});

// ===== COMPONENTS =====

Advertisements.displayName = 'Advertisements';

export { Advertisements };
export default Advertisements;
