import React from 'react';
import {
	CompassOverlay,
	CoordinatesOverlay,
	MinimapOverlay,
	GridOverlay,
	FogOfWarOverlay,
} from './MapOverlays';
import HeatmapOverlay from './HeatmapOverlay';
import ImageOverlay from './ImageOverlay';
import SVGOverlay from './SVGOverlay';
import CanvasOverlay from './CanvasOverlay';
import LiveDataOverlay from './LiveDataOverlay';

/**
 * Overlay configuration for dynamic rendering.
 */
export interface MapOverlayConfig {
	/** Overlay type (e.g., 'compass', 'coordinates', 'minimap', etc.) */
	type: string;
	/** Overlay props */
	props?: any;
	/** Optional order for stacking overlays */
	order?: number;
	/** Optional custom renderer for this overlay */
	renderer?: React.ComponentType<any>;
	/** Optional theme for this overlay */
	theme?: string | object;
	/** If false, overlay is not rendered */
	visible?: boolean;
}

/**
 * Props for MapOverlaysRenderer.
 */
export interface MapOverlaysRendererProps {
	/**
	 * Array of overlay configs to render, ordered by stacking (lowest first).
	 */
	overlays?: MapOverlayConfig[];
	/**
	 * Optional theme for all overlays.
	 */
	theme?: string | object;
}

/**
 * MapOverlaysRenderer: Dynamically renders overlays by stacking order, with support for custom renderers and themes.
 */
const MapOverlaysRenderer: React.FC<
	MapOverlaysRendererProps
> = ({ overlays = [], theme }) => {
	// Sort overlays by order (lowest first)
	const ordered = overlays
		.filter((o) => o.visible !== false)
		.slice()
		.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

	// Overlay type to component map
	const overlayMap: Record<
		string,
		React.ComponentType<any>
	> = {
		compass: CompassOverlay,
		coordinates: CoordinatesOverlay,
		minimap: MinimapOverlay,
		grid: GridOverlay,
		fogOfWar: FogOfWarOverlay,
		heatmap: HeatmapOverlay,
		image: ImageOverlay,
		svg: SVGOverlay,
		canvas: CanvasOverlay,
		liveData: LiveDataOverlay,
	};

	return (
		<>
			{ordered.map((overlay, i) => {
				const {
					type,
					props,
					renderer,
					theme: overlayTheme,
				} = overlay;
				const Comp = renderer || overlayMap[type];
				if (!Comp) return null;
				// Pass theme prop if supported
				return (
					<Comp
						key={overlay.type + '-' + i}
						{...props}
						theme={overlayTheme || theme}
					/>
				);
			})}
		</>
	);
};

export default MapOverlaysRenderer;
