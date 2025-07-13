// Hook for managing ad state, metrics, impression, and visibility
import {
	useState,
	useRef,
	useCallback,
	useEffect,
} from 'react';
import type { SingleAdProps } from './types';
import type { AdState, AdMetrics } from './types';

export function useAdState(singleProps: SingleAdProps) {
	const [adState, setAdState] = useState<AdState>('ready');
	const [isVisible, setIsVisible] = useState(true);
	const [metrics, setMetrics] = useState<AdMetrics>({
		impressions: 0,
		clicks: 0,
		ctr: 0,
	});
	const adRef = useRef<HTMLDivElement>(null);
	const impressionTracked = useRef(false);

	// Impression tracking
	useEffect(() => {
		if (
			singleProps.trackingEnabled &&
			singleProps.visible &&
			!impressionTracked.current
		) {
			setMetrics((prev) => ({
				...prev,
				impressions: prev.impressions + 1,
			}));
			impressionTracked.current = true;
			singleProps.onAdImpression?.(
				singleProps.id || '',
				singleProps.kind
			);
		}
	}, [
		singleProps.trackingEnabled,
		singleProps.visible,
		singleProps.onAdImpression,
		singleProps.id,
		singleProps.kind,
	]);

	// Reset impression tracking if ad changes
	useEffect(() => {
		impressionTracked.current = false;
	}, [singleProps.id, singleProps.kind]);

	// Click handler
	const handleAdClick = useCallback(() => {
		if (!isVisible) return;
		const adId = singleProps.id || `ad-${Date.now()}`;
		setMetrics((prev) => {
			const clicks = prev.clicks + 1;
			const ctr =
				prev.impressions ? clicks / prev.impressions : 0;
			return { ...prev, clicks, ctr };
		});
		singleProps.onAdClick?.(adId, singleProps.ctaUrl);
		if (
			singleProps.onClickBehavior === 'open-url' &&
			singleProps.ctaUrl &&
			singleProps.clickable
		) {
			window.open(
				singleProps.ctaUrl,
				singleProps.clickTarget || '_blank',
				singleProps.clickRel
			);
		}
	}, [isVisible, singleProps]);

	// Close handler
	const handleAdClose = useCallback(() => {
		setIsVisible(false);
		singleProps.onAdClose?.(
			singleProps.id || '',
			singleProps.kind
		);
	}, [singleProps]);

	return {
		adState,
		setAdState,
		isVisible,
		setIsVisible,
		metrics,
		setMetrics,
		adRef,
		handleAdClick,
		handleAdClose,
	};
}
