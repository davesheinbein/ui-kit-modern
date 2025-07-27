/**
 * MapOverlays.tsx
 * Barrel export for all map overlays and their prop types.
 * Includes strict types, JSDoc, and usage example for best practices.
 */

import CompassOverlay, {
	CompassOverlayProps,
} from './CompassOverlay';
import CoordinatesOverlay, {
	CoordinatesOverlayProps,
} from './CoordinatesOverlay';
import MinimapOverlay, {
	MinimapOverlayProps,
} from './MinimapOverlay';
import GridOverlay, {
	GridOverlayProps,
} from './GridOverlay';
import FogOfWarOverlay, {
	FogOfWarOverlayProps,
} from './FogOfWarOverlay';
import HeatmapOverlay, {
	HeatmapOverlayProps,
} from './HeatmapOverlay';
import ImageOverlay, {
	ImageOverlayProps,
} from './ImageOverlay';
import SVGOverlay, { SVGOverlayProps } from './SVGOverlay';
import CanvasOverlay, {
	CanvasOverlayProps,
} from './CanvasOverlay';
import LiveDataOverlay, {
	LiveDataOverlayProps,
} from './LiveDataOverlay';

/**
 * Union of all overlay prop types for dynamic/typed overlay usage.
 */
export type MapOverlayProps =
	| CompassOverlayProps
	| CoordinatesOverlayProps
	| MinimapOverlayProps
	| GridOverlayProps
	| FogOfWarOverlayProps
	| HeatmapOverlayProps
	| ImageOverlayProps
	| SVGOverlayProps
	| CanvasOverlayProps
	| LiveDataOverlayProps;

/**
 * Overlay type string union for overlay configuration.
 */
export type MapOverlayType =
	| 'compass'
	| 'coordinates'
	| 'minimap'
	| 'grid'
	| 'fogOfWar'
	| 'heatmap'
	| 'image'
	| 'svg'
	| 'canvas'
	| 'liveData';

/**
 * Barrel export for all overlays and their prop types.
 * Use these for dynamic rendering, configuration, and strict typing.
 */
export {
	CompassOverlay,
	CoordinatesOverlay,
	MinimapOverlay,
	GridOverlay,
	FogOfWarOverlay,
	HeatmapOverlay,
	ImageOverlay,
	SVGOverlay,
	CanvasOverlay,
	LiveDataOverlay,
};

/**
 * Type re-exports for strict typing (isolatedModules compatibility)
 */
export type {
	CompassOverlayProps,
	CoordinatesOverlayProps,
	MinimapOverlayProps,
	GridOverlayProps,
	FogOfWarOverlayProps,
	HeatmapOverlayProps,
	ImageOverlayProps,
	SVGOverlayProps,
	CanvasOverlayProps,
	LiveDataOverlayProps,
};

/**
 * Example usage:
 *
 * import { CompassOverlay, CompassOverlayProps } from './MapOverlays';
 *
 * <CompassOverlay
 *   position="top-right"
 *   visible
 *   theme="dark"
 *   rotation={45}
 *   onClick={handleCompassClick}
 *   icon={<CustomCompassIcon />}
 * />
 */
