/**
 * useFinalMapConfig
 * Memoizes and merges map props with config, supporting more derived state and event hooks.
 * @param props MapProps for the map instance.
 * @param config Base map configuration.
 * @returns Final merged config object for the map.
 */
import { MapProps } from './types';
import { useMemo } from 'react';

export function useFinalMapConfig(
	props: MapProps,
	config: any
) {
	return useMemo(
		() => ({
			...config,
			center: props.center ?? config.center,
			zoom: props.zoom ?? config.zoom,
			minZoom: props.minZoom ?? config.minZoom,
			maxZoom: props.maxZoom ?? config.maxZoom,
			interactive: props.interactive ?? config.interactive,
			zoomable: props.zoomable ?? config.zoomable,
			pannable: props.pannable ?? config.pannable,
			rotatable: props.rotatable ?? config.rotatable,
			showZoomControls:
				props.showZoomControls ?? config.showZoomControls,
			showLayerControls:
				props.showLayerControls ?? config.showLayerControls,
			showScale: props.showScale ?? config.showScale,
			showCompass: props.showCompass ?? config.showCompass,
			showFullscreen:
				props.showFullscreen ?? config.showFullscreen,
			showGrid: props.showGrid ?? config.showGrid,
			showCoordinates:
				props.showCoordinates ?? config.showCoordinates,
			showMinimap: props.showMinimap ?? config.showMinimap,
			showFogOfWar:
				props.showFogOfWar ?? config.showFogOfWar,
			variant: props.variant ?? config.variant,
			size: props.size ?? config.size,
			aspectRatio: props.aspectRatio ?? config.aspectRatio,
			borderRadius:
				props.borderRadius ?? config.borderRadius,
			// Add more derived state or event hooks as needed
			onLoad: props.onLoad,
			onMove: props.onMove,
			onZoom: props.onZoom,
		}),
		[props, config]
	);
}
