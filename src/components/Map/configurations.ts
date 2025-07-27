/**
 * MapConfigurations.ts - DRY Map & Geo Component Configuration System
 */

import { ReactNode } from 'react';

export type MapKind =
	// Map views
	| 'world-map'
	| 'region-map'
	| 'city-map'
	| 'street-map'
	| 'satellite-map'
	| 'terrain-map'

	// Interactive maps
	| 'interactive-map'
	| 'game-map'
	| 'floor-plan'
	| 'campus-map'

	// Markers and indicators
	| 'location-marker'
	| 'region-claim-marker'
	| 'player-presence-indicator'
	| 'poi-marker'
	| 'cluster-marker'

	// Game-specific
	| 'territory-map'
	| 'battle-map'
	| 'resource-map'
	| 'mini-map'
	| 'radar-view';

export type MapVariant =
	| 'default'
	| 'dark'
	| 'light'
	| 'satellite'
	| 'terrain'
	| 'gaming';
export type MapSize =
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| 'full';

export interface MapCoordinate {
	lat: number;
	lng: number;
}

export interface MapMarker {
	id: string;
	position: MapCoordinate;
	title?: string;
	description?: string;
	icon?: ReactNode;
	color?: string;
	size?: 'sm' | 'md' | 'lg';
	clickable?: boolean;
	draggable?: boolean;
	onClick?: () => void;
	/**
	 * Optional custom className for this marker (for advanced styling)
	 */
	className?: string;
	/**
	 * Optional custom style for this marker (for advanced styling)
	 */
	style?: React.CSSProperties;
}

export interface MapRegion {
	id: string;
	coordinates: MapCoordinate[];
	title?: string;
	color?: string;
	fillColor?: string;
	fillOpacity?: number;
	strokeWidth?: number;
	clickable?: boolean;
	onClick?: () => void;
}

export interface MapConfiguration {
	kind: MapKind;
	variant: MapVariant;
	size: MapSize;

	// Map settings
	center?: MapCoordinate;
	zoom?: number;
	minZoom?: number;
	maxZoom?: number;

	// Interaction
	interactive?: boolean;
	zoomable?: boolean;
	pannable?: boolean;
	rotatable?: boolean;

	// Controls
	showZoomControls?: boolean;
	showLayerControls?: boolean;
	showScale?: boolean;
	showCompass?: boolean;
	showFullscreen?: boolean;

	// Game features
	showGrid?: boolean;
	showCoordinates?: boolean;
	showMinimap?: boolean;
	showFogOfWar?: boolean;

	// Styling
	aspectRatio?: string;
	borderRadius?: string;
	className?: string;
}

export const MAP_CONFIGURATIONS: Record<
	MapKind,
	MapConfiguration
> = {
	// Map views
	'world-map': {
		kind: 'world-map',
		variant: 'default',
		size: 'lg',
		center: { lat: 0, lng: 0 },
		zoom: 2,
		minZoom: 1,
		maxZoom: 18,
		interactive: true,
		zoomable: true,
		pannable: true,
		showZoomControls: true,
		showLayerControls: true,
		aspectRatio: '16/9',
	},

	'region-map': {
		kind: 'region-map',
		variant: 'default',
		size: 'md',
		zoom: 6,
		minZoom: 4,
		maxZoom: 12,
		interactive: true,
		zoomable: true,
		pannable: true,
		showZoomControls: true,
		aspectRatio: '4/3',
	},

	'city-map': {
		kind: 'city-map',
		variant: 'default',
		size: 'md',
		zoom: 12,
		minZoom: 8,
		maxZoom: 18,
		interactive: true,
		zoomable: true,
		pannable: true,
		showZoomControls: true,
		showScale: true,
		aspectRatio: '16/9',
	},

	'street-map': {
		kind: 'street-map',
		variant: 'default',
		size: 'lg',
		zoom: 16,
		minZoom: 12,
		maxZoom: 20,
		interactive: true,
		zoomable: true,
		pannable: true,
		showZoomControls: true,
		showScale: true,
		aspectRatio: '16/9',
	},

	'satellite-map': {
		kind: 'satellite-map',
		variant: 'satellite',
		size: 'lg',
		zoom: 10,
		interactive: true,
		zoomable: true,
		pannable: true,
		showZoomControls: true,
		showLayerControls: true,
		aspectRatio: '16/9',
	},

	'terrain-map': {
		kind: 'terrain-map',
		variant: 'terrain',
		size: 'lg',
		zoom: 8,
		interactive: true,
		zoomable: true,
		pannable: true,
		showZoomControls: true,
		showLayerControls: true,
		aspectRatio: '16/9',
	},

	// Interactive maps
	'interactive-map': {
		kind: 'interactive-map',
		variant: 'default',
		size: 'xl',
		zoom: 10,
		interactive: true,
		zoomable: true,
		pannable: true,
		rotatable: true,
		showZoomControls: true,
		showLayerControls: true,
		showScale: true,
		showCompass: true,
		showFullscreen: true,
		aspectRatio: '16/9',
	},

	'game-map': {
		kind: 'game-map',
		variant: 'gaming',
		size: 'full',
		zoom: 1,
		interactive: true,
		zoomable: true,
		pannable: true,
		showZoomControls: true,
		showGrid: true,
		showCoordinates: true,
		showMinimap: true,
		aspectRatio: '16/9',
	},

	'floor-plan': {
		kind: 'floor-plan',
		variant: 'light',
		size: 'lg',
		zoom: 1,
		interactive: true,
		zoomable: true,
		pannable: true,
		showZoomControls: true,
		showGrid: true,
		showScale: true,
		aspectRatio: '4/3',
	},

	'campus-map': {
		kind: 'campus-map',
		variant: 'light',
		size: 'lg',
		zoom: 16,
		interactive: true,
		zoomable: true,
		pannable: true,
		showZoomControls: true,
		aspectRatio: '16/9',
	},

	// Markers and indicators
	'location-marker': {
		kind: 'location-marker',
		variant: 'default',
		size: 'sm',
		interactive: false,
		aspectRatio: '1/1',
	},

	'region-claim-marker': {
		kind: 'region-claim-marker',
		variant: 'gaming',
		size: 'md',
		interactive: true,
		aspectRatio: '1/1',
	},

	'player-presence-indicator': {
		kind: 'player-presence-indicator',
		variant: 'gaming',
		size: 'sm',
		interactive: true,
		aspectRatio: '1/1',
	},

	'poi-marker': {
		kind: 'poi-marker',
		variant: 'default',
		size: 'md',
		interactive: true,
		aspectRatio: '1/1',
	},

	'cluster-marker': {
		kind: 'cluster-marker',
		variant: 'default',
		size: 'lg',
		interactive: true,
		aspectRatio: '1/1',
	},

	// Game-specific
	'territory-map': {
		kind: 'territory-map',
		variant: 'gaming',
		size: 'lg',
		zoom: 4,
		interactive: true,
		zoomable: true,
		pannable: true,
		showZoomControls: true,
		showFogOfWar: true,
		aspectRatio: '16/9',
	},

	'battle-map': {
		kind: 'battle-map',
		variant: 'dark',
		size: 'xl',
		zoom: 1,
		interactive: true,
		zoomable: true,
		pannable: true,
		showGrid: true,
		showCoordinates: true,
		aspectRatio: '1/1',
	},

	'resource-map': {
		kind: 'resource-map',
		variant: 'terrain',
		size: 'lg',
		zoom: 6,
		interactive: true,
		zoomable: true,
		pannable: true,
		showZoomControls: true,
		aspectRatio: '16/9',
	},

	'mini-map': {
		kind: 'mini-map',
		variant: 'dark',
		size: 'xs',
		zoom: 1,
		interactive: false,
		zoomable: false,
		pannable: false,
		aspectRatio: '1/1',
		borderRadius: '8px',
	},

	'radar-view': {
		kind: 'radar-view',
		variant: 'dark',
		size: 'sm',
		zoom: 1,
		interactive: false,
		aspectRatio: '1/1',
		borderRadius: '50%',
	},
};

export const getMapConfig = (
	kind: MapKind
): MapConfiguration => {
	return MAP_CONFIGURATIONS[kind];
};
