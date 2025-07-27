import React from 'react';

export interface MapProps {
	center?: [number, number];
	zoom?: number;
	minZoom?: number;
	maxZoom?: number;
	config?: any;
	markers?: any[];
	regions?: any[];
	overlays?: any[];
	controls?: any[];
	size?: string | number;
	kind?: string;
	variant?: string;
	theme?: string;
	className?: string;
	style?: React.CSSProperties;
	ariaLabel?: string;
	tabIndex?: number;
	loading?: boolean;
	componentId?: string;
	showZoomControls?: boolean;
	showLayerControls?: boolean;
	showScale?: boolean;
	showCompass?: boolean;
	showFullscreen?: boolean;
	showGrid?: boolean;
	showCoordinates?: boolean;
	showMinimap?: boolean;
	showFogOfWar?: boolean;
	keyItems?: { id: string; label: string }[];
	dynamicChildren?: { children: React.ReactNode }[];
	children?: React.ReactNode;
	plugins?: React.ComponentType<any>[];
	onClick?: (e: any) => void;
	onMarkerClick?: (marker: any) => void;
	onRegionClick?: (region: any) => void;
	onZoomChange?: (zoom: number) => void;
	handleZoomIn?: () => void;
	handleZoomOut?: () => void;
}

export interface MapViewProps {
	refObj?: React.Ref<HTMLDivElement>;
	baseClasses?: string;
	containerStyle?: React.CSSProperties;
	containerClassName?: string;
	ariaLabel?: string;
	tabIndex?: number;
	onKeyDown?: (
		e: React.KeyboardEvent<HTMLDivElement>
	) => void;
	onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
	onLoad?: (event: {
		type: string;
		data?: any;
		position: { x: number; y: number };
	}) => void;
	onMove?: (event: {
		center: [number, number];
		zoom: number;
	}) => void;
	onZoom?: (event: { zoom: number }) => void;
	kind?: string;
	componentId?: string;
	className?: string;
	style?: React.CSSProperties;
	center?: { lat: number; lng: number };
	zoom?: number;
	minZoom?: number;
	maxZoom?: number;
	markers?: any[];
	regions?: any[];
	interactive?: boolean;
	zoomable?: boolean;
	pannable?: boolean;
	rotatable?: boolean;
	variant?: string;
	size?: string | number;
	aspectRatio?: string;
	borderRadius?: string;
	overlays?: any[];
	loading?: boolean;
	controls?: any[];
	showZoomControls?: boolean;
	showLayerControls?: boolean;
	showScale?: boolean;
	showCompass?: boolean;
	showFullscreen?: boolean;
	showGrid?: boolean;
	showCoordinates?: boolean;
	showMinimap?: boolean;
	showFogOfWar?: boolean;
	onClick?: (e: any) => void;
	onMarkerClick?: (marker: any) => void;
	onRegionClick?: (region: any) => void;
	onZoomChange?: (zoom: number) => void;
	children?: React.ReactNode;
	currentZoom?: number;
	handleZoomIn?: () => void;
	handleZoomOut?: () => void;
}
