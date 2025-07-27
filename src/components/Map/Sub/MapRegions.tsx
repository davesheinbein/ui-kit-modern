/**
 * MapRegions.tsx
 * Highly configurable, interactive region overlay for maps.
 * Supports editing, drawing, deletion, custom styles, tooltips, and events.
 *
 * @prop regions Array of region definitions (id, coordinates, color, etc.)
 * @prop editable Enable region editing/drawing/deletion.
 * @prop onRegionDraw Callback when a region is drawn.
 * @prop onRegionEdit Callback when a region is edited.
 * @prop onRegionDelete Callback when a region is deleted.
 * @prop onRegionClick Callback when a region is clicked.
 * @prop fillColor Default fill color for regions.
 * @prop strokeColor Default stroke color for region borders.
 * @prop tooltipRenderer Custom tooltip renderer for regions.
 * @prop className Custom class for the overlay container.
 * @prop style Inline style for the overlay container.
 * @prop theme Theme override (light/dark/system).
 * @prop visible Show/hide the overlay.
 * @prop ...rest All other props are passed to the container.
 */
import React, { useEffect, useRef } from 'react';
import {
	Polygon,
	Popup,
	Tooltip,
	useMap,
} from 'react-leaflet';
import { MapRegion } from '../configurations';
import { LatLngExpression } from 'leaflet';

export interface MapRegionsProps {
	regions: MapRegion[];
	editable?: boolean;
	onRegionDraw?: (region: MapRegion) => void;
	onRegionEdit?: (region: MapRegion) => void;
	onRegionDelete?: (region: MapRegion) => void;
	onRegionClick?: (region: MapRegion) => void;
	fillColor?: string;
	strokeColor?: string;
	tooltipRenderer?: (region: MapRegion) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	theme?: string | object;
	visible?: boolean;
	[key: string]: any;
}

const MapRegions: React.FC<
	MapRegionsProps & {
		mapContextMenu?: (context: {
			type: 'map' | 'marker' | 'region';
			data?: any;
			position: { x: number; y: number };
		}) => React.ReactNode;
	}
> = ({
	regions,
	editable = false,
	onRegionDraw,
	onRegionEdit,
	onRegionDelete,
	onRegionClick,
	fillColor,
	strokeColor,
	tooltipRenderer,
	className = '',
	style,
	theme,
	visible = true,
	mapContextMenu,
	...rest
}) => {
	const map = useMap ? useMap() : null;
	const drawControlRef = useRef<any>(null);

	useEffect(() => {
		if (!editable || !map) return;
		let L: any;
		try {
			L = require('leaflet');
			require('leaflet-draw');
		} catch {
			return;
		}
		if (!drawControlRef.current) {
			drawControlRef.current = new L.Control.Draw({
				draw: {
					polygon: true,
					polyline: false,
					rectangle: false,
					circle: false,
					marker: false,
				},
				edit: { featureGroup: new L.FeatureGroup() },
			});
			map.addControl(drawControlRef.current);
			map.on(L.Draw.Event.CREATED, (e: any) => {
				if (onRegionDraw) onRegionDraw(e.layer.toGeoJSON());
			});
			map.on(L.Draw.Event.EDITED, (e: any) => {
				if (onRegionEdit)
					onRegionEdit(e.layers.toGeoJSON());
			});
			map.on(L.Draw.Event.DELETED, (e: any) => {
				if (onRegionDelete)
					onRegionDelete(e.layers.toGeoJSON());
			});
		}
		return () => {
			if (drawControlRef.current) {
				map.removeControl(drawControlRef.current);
				drawControlRef.current = null;
			}
		};
	}, [
		editable,
		map,
		onRegionDraw,
		onRegionEdit,
		onRegionDelete,
	]);

	const handleContextMenu = (
		e: React.MouseEvent,
		region: MapRegion
	) => {
		e.preventDefault();
		if (mapContextMenu) {
			mapContextMenu({
				type: 'region',
				data: region,
				position: { x: e.clientX, y: e.clientY },
			});
		}
	};

	if (!visible) return null;

	return (
		<div
			className={`map__regions-overlay ${className}`.trim()}
			style={style}
			{...rest}
		>
			{regions.map((region) => (
				<Polygon
					key={region.id}
					positions={
						region.coordinates.map((c) => [
							c.lat,
							c.lng,
						]) as LatLngExpression[]
					}
					pathOptions={{
						color: region.color || strokeColor || '#3388ff',
						fillColor:
							region.fillColor ||
							fillColor ||
							region.color ||
							'#3388ff',
						fillOpacity: region.fillOpacity ?? 0.2,
						weight: region.strokeWidth ?? 2,
					}}
					eventHandlers={{
						...(region.clickable && onRegionClick ?
							{ click: () => onRegionClick(region) }
						:	{}),
						contextmenu: (e: any) =>
							handleContextMenu(e.originalEvent, region),
					}}
				>
					{region.title && <Popup>{region.title}</Popup>}
					{tooltipRenderer && (
						<Tooltip>{tooltipRenderer(region)}</Tooltip>
					)}
				</Polygon>
			))}
		</div>
	);
};

export default MapRegions;
