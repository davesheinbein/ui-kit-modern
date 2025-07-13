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
import {
	generateContainerStyles,
	generateAnimationStyles,
	generateClassName,
} from './Sub/adUtils';
import {
	DEFAULT_SINGLE_AD_CONFIG,
	DEFAULT_MULTI_AD_CONFIG,
} from './Sub/adDefaults';
import * as AdTypes from './Sub/types';
import AdModalLayout from './Sub/AdModalLayout';
import AdBannerLayout from './Sub/AdBannerLayout';
import AdLoading from './Sub/AdLoading';
import AdError from './Sub/AdError';
import MultiAdContainer from './Sub/MultiAdContainer';

// ===== MAIN PROPS INTERFACES =====

interface BaseAdvertisementProps {
	'className'?: string;
	'style'?: React.CSSProperties;
	'id'?: string;
	'data-testid'?: string;
}

export interface SingleAdProps
	extends BaseAdvertisementProps,
		AdTypes.AdStyleProps,
		AdTypes.AdBehaviorProps,
		AdTypes.AdContentProps,
		AdTypes.AdEventProps,
		AdTypes.AdAnalyticsProps,
		AdTypes.AdProviderProps {
	// Core props (required for single ads)
	kind: AdTypes.AdKind;
	count?: 'one';

	// Display props
	variant?: AdTypes.AdVariant;
	size?: AdTypes.AdSize;
	theme?: AdTypes.AdTheme;

	// Fallback
	fallbackContent?: React.ReactNode;
	showFallbackOnError?: boolean;
}

export interface MultiAdProps
	extends BaseAdvertisementProps,
		AdTypes.AdMultiProps,
		AdTypes.AdEventProps,
		AdTypes.AdAnalyticsProps,
		AdTypes.AdProviderProps {
	// Fallback
	fallbackContent?: React.ReactNode;
	showFallbackOnError?: boolean;
	allowedAdTypes?: AdTypes.AdKind[];
}

export type AdvertisementProps =
	| SingleAdProps
	| MultiAdProps;

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
	const [adState, setAdState] =
		useState<AdTypes.AdState>('ready');
	const [isVisible, setIsVisible] = useState(true);
	const [metrics, setMetrics] = useState<AdTypes.AdMetrics>(
		{
			impressions: 0,
			clicks: 0,
			ctr: 0,
		}
	);
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
			<AdLoading
				ref={ref}
				className={className}
				style={containerStyles}
				dataTestId={singleProps['data-testid']}
			/>
		);
	}

	// Error state
	if (singleProps.error) {
		return (
				singleProps.showFallbackOnError &&
					singleProps.fallbackContent
			) ?
				<AdError
					ref={ref}
					fallbackContent={singleProps.fallbackContent}
				/>
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
		switch (singleProps.kind) {
			case 'modal':
				return (
					<AdModalLayout
						singleProps={singleProps}
						handleAdClick={handleAdClick}
						handleAdClose={handleAdClose}
					/>
				);
			default:
				return (
					<AdBannerLayout
						singleProps={singleProps}
						handleAdClick={handleAdClick}
						handleAdClose={handleAdClose}
					/>
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
