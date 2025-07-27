import React, { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import ReactDOMServer from 'react-dom/server';
import 'leaflet.markercluster';

/**
 * Props for LiveDataOverlay component.
 * @property data Array of marker data (lat, lng, id, ...).
 * @property icon Custom marker icon renderer.
 * @property zIndex Marker z-index.
 * @property cluster Enable clustering.
 * @property filter Filter function for markers.
 * @property iconRenderer Custom icon renderer per marker.
 * @property popupRenderer Custom popup renderer per marker.
 * @property onMarkerClick Click handler for marker.
 * @property onMarkerHover Hover handler for marker.
 * @property animation Enable marker animation.
 * @property className Custom class.
 * @property style Custom style.
 */
export interface LiveDataOverlayProps {
	data: Array<{
		lat: number;
		lng: number;
		id: string;
		[key: string]: any;
	}>;
	icon?: React.ReactNode;
	zIndex?: number;
	cluster?: boolean;
	filter?: (item: any) => boolean;
	iconRenderer?: (item: any) => React.ReactNode;
	popupRenderer?: (item: any) => React.ReactNode;
	onMarkerClick?: (item: any) => void;
	onMarkerHover?: (item: any) => void;
	animation?: boolean;
	className?: string;
	style?: React.CSSProperties;
}

/**
 * LiveDataOverlay displays real-time, animated, clustered markers with custom icons and popups.
 * Supports filtering, clustering, animation, accessibility, and strict/documented props.
 */
const LiveDataOverlay: React.FC<LiveDataOverlayProps> = ({
	data,
	icon,
	zIndex = 2,
	cluster = false,
	filter,
	iconRenderer,
	popupRenderer,
	onMarkerClick,
	onMarkerHover,
	animation = true,
	className = '',
	style = {},
}) => {
	const map = useMap();
	const markersRef = useRef<any[]>([]);
	useEffect(() => {
		if (!map || !window.L) return;
		let markerGroup: any = null;
		let markers: any[] = [];
		let L = window.L;
		let filteredData = filter ? data.filter(filter) : data;
		if (cluster && L.markerClusterGroup) {
			markerGroup = L.markerClusterGroup();
		}
		filteredData.forEach((item) => {
			let markerIcon =
				iconRenderer ? iconRenderer(item) : icon;
			let marker = L.marker([item.lat, item.lng], {
				zIndexOffset: zIndex,
				icon:
					markerIcon && L.divIcon ?
						L.divIcon({
							html:
								typeof markerIcon === 'string' ? markerIcon
								:	undefined,
							className,
							...style,
						})
					:	undefined,
				riseOnHover: animation,
			});
			if (onMarkerClick)
				marker.on('click', () => onMarkerClick(item));
			if (onMarkerHover)
				marker.on('mouseover', () => onMarkerHover(item));
			if (popupRenderer) {
				const popupContent = ReactDOMServer.renderToString(
					popupRenderer(item)
				);
				marker.bindPopup(popupContent);
			}
			if (markerGroup) markerGroup.addLayer(marker);
			else marker.addTo(map);
			markers.push(marker);
		});
		if (markerGroup) markerGroup.addTo(map);
		markersRef.current = markers;
		return () => {
			markers.forEach((m) => map.removeLayer(m));
			if (markerGroup) map.removeLayer(markerGroup);
		};
	}, [
		map,
		data,
		icon,
		zIndex,
		cluster,
		filter,
		iconRenderer,
		popupRenderer,
		onMarkerClick,
		onMarkerHover,
		animation,
		className,
		style,
	]);
	return null;
};

// Extend Leaflet type for markerClusterGroup
declare global {
	interface Window {
		L: typeof import('leaflet') & {
			markerClusterGroup?: () => any;
		};
	}
}

export default LiveDataOverlay;
