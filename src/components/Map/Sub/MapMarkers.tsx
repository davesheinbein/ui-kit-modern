import React, { ReactNode } from 'react';
import { Wrapper } from '../../Wrappers';
import styles from '../Map.module.scss';
import { MapMarker } from '../configurations';
// Try to import Marker and MarkerClusterGroup from react-leaflet if available
let Marker: any = null;
let MarkerClusterGroup: any = null;
try {
	Marker = require('react-leaflet').Marker;
	MarkerClusterGroup =
		require('react-leaflet-markercluster')?.default;
} catch {}

/**
 * Props for custom marker icon renderer.
 */
export type MapMarkerIconRenderer = (
	marker: MapMarker
) => ReactNode;

/**
 * Props for MapMarkers component.
 */
export interface MapMarkersProps {
	/** Array of marker objects */
	'markers': MapMarker[];
	/** Called when a marker is clicked */
	'onMarkerClick'?: (marker: MapMarker) => void;
	/** Enable marker drag-and-drop */
	'draggableMarkers'?: boolean;
	/** Called when a marker is dragged */
	'onMarkerDrag'?: (
		marker: MapMarker,
		newPosition: { lat: number; lng: number }
	) => void;
	/** Enable marker clustering */
	'cluster'?: boolean;
	/** Custom icon renderer for markers */
	'iconRenderer'?: MapMarkerIconRenderer;
	/** Called when a marker is hovered */
	'onMarkerHover'?: (marker: MapMarker) => void;
	/** Filter function for markers */
	'filter'?: (marker: MapMarker) => boolean;
	/** Marker size (overrides per-marker size) */
	'size'?: 'sm' | 'md' | 'lg' | 'xl';
	/** Marker color (overrides per-marker color) */
	'color'?: string;
	/** Marker shadow style */
	'shadow'?: boolean;
	/** Custom className for all markers */
	'className'?: string;
	/** Custom style for all markers */
	'style'?: React.CSSProperties;
	/** Animate marker appearance */
	'animate'?: boolean;
	/** ARIA label for accessibility */
	'aria-label'?: string;
}

/**
 * MapMarkers: Configurable, accessible, animated map markers with clustering and custom icons.
 */
const MapMarkers: React.FC<
	MapMarkersProps & {
		mapContextMenu?: (context: {
			type: 'map' | 'marker' | 'region';
			data?: any;
			position: { x: number; y: number };
		}) => React.ReactNode;
	}
> = ({
	markers,
	onMarkerClick,
	draggableMarkers = false,
	onMarkerDrag,
	cluster = false,
	iconRenderer,
	onMarkerHover,
	filter,
	size,
	color,
	shadow = false,
	className = '',
	style,
	animate = false,
	'aria-label': ariaLabel = 'Map markers',
	mapContextMenu,
}) => {
	// Filter markers if filter prop provided
	const filteredMarkers =
		filter ? markers.filter(filter) : markers;

	const handleContextMenu = (
		e: React.MouseEvent,
		marker: MapMarker
	) => {
		e.preventDefault();
		if (mapContextMenu) {
			mapContextMenu({
				type: 'marker',
				data: marker,
				position: { x: e.clientX, y: e.clientY },
			});
		}
	};

	// Render marker node (Leaflet or fallback)
	const renderMarker = (marker: MapMarker) => {
		const markerSize = size || marker.size || 'md';
		const markerColor = color || marker.color;
		const markerClass = [
			styles.map__marker,
			styles[`map__marker--${markerSize}`],
			marker.clickable && styles['map__marker--clickable'],
			shadow && styles['map__marker--shadow'],
			animate && styles['map__marker--animate'],
			className,
			marker.className,
		]
			.filter(Boolean)
			.join(' ');
		const markerStyle = {
			color: markerColor,
			...style,
			...marker.style,
		};
		const iconNode =
			iconRenderer ?
				iconRenderer(marker)
			:	marker.icon || '📍';
		if (Marker) {
			return (
				<Marker
					key={marker.id}
					position={[
						marker.position.lat,
						marker.position.lng,
					]}
					draggable={!!draggableMarkers}
					eventHandlers={{
						click: () =>
							marker.clickable && onMarkerClick?.(marker),
						dragend: (e: any) => {
							if (draggableMarkers && onMarkerDrag) {
								const { lat, lng } = e.target.getLatLng();
								onMarkerDrag(marker, { lat, lng });
							}
						},
						mouseover: () => onMarkerHover?.(marker),
						contextmenu: (e: any) =>
							handleContextMenu(e.originalEvent, marker),
					}}
					icon={iconNode}
				/>
			);
		}
		// Fallback: HTML5 drag events (not geospatially accurate)
		return (
			<Wrapper
				key={marker.id}
				className={markerClass}
				style={markerStyle}
				onClick={() =>
					marker.clickable && onMarkerClick?.(marker)
				}
				onMouseOver={() => onMarkerHover?.(marker)}
				title={marker.title}
				draggable={!!draggableMarkers}
				onDragEnd={(e: any) => {
					if (draggableMarkers && onMarkerDrag) {
						const { left, top } =
							e.target.getBoundingClientRect();
						onMarkerDrag(marker, { lat: top, lng: left });
					}
				}}
				onContextMenu={(e) => handleContextMenu(e, marker)}
				role='button'
				aria-label={marker.title || ariaLabel}
				tabIndex={0}
			>
				{iconNode}
			</Wrapper>
		);
	};

	// Cluster support (Leaflet only)
	if (Marker && cluster && MarkerClusterGroup) {
		return (
			<MarkerClusterGroup>
				{filteredMarkers.map(renderMarker)}
			</MarkerClusterGroup>
		);
	}
	// No cluster or fallback
	return <>{filteredMarkers.map(renderMarker)}</>;
};

export default MapMarkers;
