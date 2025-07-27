import React, { useRef, useState } from 'react';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	ScaleControl,
	ZoomControl,
	useMap,
} from 'react-leaflet';
import { getTileLayerUrl, getMarkerIcon } from './helpers';
import { MapMarker, MapRegion } from '../configurations';
import { LatLngExpression } from 'leaflet';
import MapRegions from './MapRegions';
import HeatmapOverlay from './HeatmapOverlay';
import ImageOverlay from './ImageOverlay';
import SVGOverlay from './SVGOverlay';
import CanvasOverlay from './CanvasOverlay';
import LiveDataOverlay from './LiveDataOverlay';
import clsx from 'clsx';
// Optionally import marker clustering if available
let MarkerClusterGroup: any = null;
try {
	MarkerClusterGroup =
		require('react-leaflet-cluster').MarkerClusterGroup;
} catch {}

interface MapContainerWrapperProps {
	center: [number, number];
	zoom: number;
	minZoom?: number;
	maxZoom?: number;
	variant: string;
	markers: MapMarker[];
	regions: MapRegion[];
	showZoomControls?: boolean;
	showScale?: boolean;
	onMarkerClick?: (marker: MapMarker) => void;
	onRegionClick?: (region: MapRegion) => void;
	interactive?: boolean;
	onClick?: (coordinate: {
		lat: number;
		lng: number;
	}) => void;
	// === Advanced features ===
	draggableMarkers?: boolean;
	onMarkerDrag?: (
		marker: MapMarker,
		newPosition: { lat: number; lng: number }
	) => void;
	editableRegions?: boolean;
	onRegionDraw?: (region: MapRegion) => void;
	onRegionEdit?: (region: MapRegion) => void;
	onRegionDelete?: (region: MapRegion) => void;
	mapContextMenu?: (context: {
		type: 'map' | 'marker' | 'region';
		data?: any;
		position: { x: number; y: number };
	}) => React.ReactNode;
	onContextMenu?: (context: {
		type: 'map' | 'marker' | 'region';
		data?: any;
		position: { x: number; y: number };
	}) => void;
	liveData?: any[];
	heatmapOverlays?: Array<{
		data: Array<{
			lat: number;
			lng: number;
			value: number;
		}>;
		options?: Record<string, any>;
	}>;
	imageOverlays?: Array<{
		url: string;
		bounds: [[number, number], [number, number]];
		opacity?: number;
		zIndex?: number;
	}>;
	svgCanvasOverlays?: Array<{
		type: 'svg' | 'canvas';
		render: (props: any) => React.ReactNode;
		zIndex?: number;
	}>;
	weatherLayers?: boolean;
	trafficLayers?: boolean;
	customControlPanels?: React.ReactNode[];
	miniMap?: boolean;
	fullscreenToggle?: boolean;
	geolocate?: boolean;
	animatedTransitions?: boolean;
	clusterMarkers?: boolean;
	tooltipsPopups?: boolean;
	overlayProp?: Array<{
		type: string;
		props: Record<string, any>;
		order?: number;
	}>;
	dynamicChildren?: Array<{
		coordinate: { lat: number; lng: number };
		children: React.ReactNode;
	}>;
	eventHooks?: {
		onDrag?: (e: any) => void;
		onRegionEdit?: (e: any) => void;
		onOverlayClick?: (e: any) => void;
		[key: string]: any;
	};
	theming?: {
		darkMode?: boolean;
		tileSet?: string;
		[key: string]: any;
	};
	drawTools?: boolean;
	customControls?: React.ReactNode[];
	/**
	 * Accessible label for the map container.
	 */
	ariaLabel?: string;
	/**
	 * Tab index for keyboard navigation.
	 */
	tabIndex?: number;
	/**
	 * Custom class for the outer container.
	 */
	containerClassName?: string;
	/**
	 * Custom style for the outer container.
	 */
	containerStyle?: React.CSSProperties;
	/**
	 * Fired when the map loads.
	 */
	onLoad?: (event: {
		type: string;
		data?: any;
		position: { x: number; y: number };
	}) => void;
	/**
	 * Fired when the map moves.
	 */
	onMove?: (event: {
		center: [number, number];
		zoom: number;
	}) => void;
	/**
	 * Fired when the map zooms.
	 */
	onZoom?: (event: { zoom: number }) => void;
	/**
	 * Keyboard event handler for the map container.
	 */
	onKeyDown?: (
		event: React.KeyboardEvent<HTMLDivElement>
	) => void;
	/**
	 * Focus event handler for the map container.
	 */
	onFocus?: (
		event: React.FocusEvent<HTMLDivElement>
	) => void;
	/**
	 * Blur event handler for the map container.
	 */
	onBlur?: (
		event: React.FocusEvent<HTMLDivElement>
	) => void;
}

function MapClickHandler({
	interactive,
	onClick,
}: {
	interactive?: boolean;
	onClick?: (coordinate: {
		lat: number;
		lng: number;
	}) => void;
}) {
	const map = useMap();
	React.useEffect(() => {
		if (!interactive || !onClick) return;
		const handler = (e: any) =>
			onClick({ lat: e.latlng.lat, lng: e.latlng.lng });
		map.on('click', handler);
		return () => {
			map.off('click', handler);
		};
	}, [map, interactive, onClick]);
	return null;
}

const MapContainerWrapper: React.FC<
	MapContainerWrapperProps
> = (props) => {
	const {
		center,
		zoom,
		minZoom,
		maxZoom,
		variant,
		markers,
		regions,
		showZoomControls,
		showScale,
		onMarkerClick,
		onRegionClick,
		interactive,
		onClick,
		draggableMarkers,
		onMarkerDrag,
		editableRegions,
		onRegionDraw,
		onRegionEdit,
		onRegionDelete,
		mapContextMenu,
		onContextMenu,
		liveData,
		heatmapOverlays,
		imageOverlays,
		svgCanvasOverlays,
		weatherLayers,
		trafficLayers,
		customControlPanels,
		miniMap,
		fullscreenToggle,
		geolocate,
		animatedTransitions,
		clusterMarkers,
		tooltipsPopups,
		overlayProp,
		dynamicChildren,
		eventHooks,
		theming,
		drawTools,
		customControls,
		ariaLabel,
		tabIndex = 0,
		containerClassName,
		containerStyle,
		onLoad,
		onMove,
		onZoom,
		onKeyDown,
		onFocus,
		onBlur,
		...rest
	} = props;

	const [contextMenu, setContextMenu] =
		useState<React.ReactNode | null>(null);
	const [contextMenuPos, setContextMenuPos] = useState<{
		x: number;
		y: number;
	} | null>(null);
	const mapRef = useRef<any>(null);

	const handleMapContextMenu = (e: any) => {
		e.originalEvent.preventDefault();
		const pos = {
			x: e.originalEvent.clientX,
			y: e.originalEvent.clientY,
		};
		setContextMenuPos(pos);
		if (mapContextMenu) {
			const menu = mapContextMenu({
				type: 'map',
				position: pos,
				data: undefined,
			});
			setContextMenu(menu);
		}
		if (onContextMenu) {
			onContextMenu({
				type: 'map',
				position: pos,
				data: undefined,
			});
		}
	};

	React.useEffect(() => {
		if (!contextMenu) return;
		const handler = () => {
			setContextMenu(null);
			setContextMenuPos(null);
		};
		document.addEventListener('click', handler);
		return () =>
			document.removeEventListener('click', handler);
	}, [contextMenu]);

	React.useEffect(() => {
		if (!mapRef.current) return;
		const map = mapRef.current;
		map.on('contextmenu', handleMapContextMenu);
		return () => {
			map.off('contextmenu', handleMapContextMenu);
		};
	}, [mapRef.current, mapContextMenu, onContextMenu]);

	// Accessibility: focus/keyboard handlers
	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLDivElement>
	) => {
		if (onKeyDown) onKeyDown(e);
		// Example: arrow keys to pan, +/- to zoom
		// ...implement as needed...
	};
	const handleFocus = (
		e: React.FocusEvent<HTMLDivElement>
	) => {
		if (onFocus) onFocus(e);
	};
	const handleBlur = (
		e: React.FocusEvent<HTMLDivElement>
	) => {
		if (onBlur) onBlur(e);
	};

	// Map event hooks for move/zoom/load
	React.useEffect(() => {
		if (!mapRef.current) return;
		const map = mapRef.current;
		if (onLoad)
			onLoad({
				type: 'load',
				data: undefined,
				position: { x: 0, y: 0 },
			});
		const moveHandler = () => {
			if (onMove)
				onMove({
					center: [
						map.getCenter().lat,
						map.getCenter().lng,
					],
					zoom: map.getZoom(),
				});
		};
		const zoomHandler = () => {
			if (onZoom) onZoom({ zoom: map.getZoom() });
		};
		map.on('move', moveHandler);
		map.on('zoom', zoomHandler);
		return () => {
			map.off('move', moveHandler);
			map.off('zoom', zoomHandler);
		};
	}, [mapRef.current, onMove, onZoom, onLoad]);

	return (
		<div
			className={clsx(
				'map-container-outer',
				containerClassName
			)}
			style={{
				width: '100%',
				height: '100%',
				position: 'relative',
				...containerStyle,
			}}
			role='region'
			aria-label={ariaLabel || 'Map'}
			tabIndex={tabIndex}
			onKeyDown={handleKeyDown}
			onFocus={handleFocus}
			onBlur={handleBlur}
			data-theme={theming?.darkMode ? 'dark' : 'light'}
		>
			<MapContainer
				ref={mapRef}
				center={center}
				zoom={zoom}
				minZoom={minZoom}
				maxZoom={maxZoom}
				zoomControl={showZoomControls}
				style={{ width: '100%', height: '100%' }}
			>
				<TileLayer url={getTileLayerUrl(variant)} />
				{/* Heatmap overlays */}
				{heatmapOverlays &&
					heatmapOverlays.map((h, i) => (
						<HeatmapOverlay
							key={i}
							data={h.data}
							options={h.options}
						/>
					))}
				{/* Image overlays */}
				{imageOverlays &&
					imageOverlays.map((img, i) => (
						<ImageOverlay key={i} {...img} />
					))}
				{/* SVG overlays */}
				{svgCanvasOverlays &&
					svgCanvasOverlays
						.filter(
							(
								o
							): o is {
								type: 'svg';
								render: any;
								bounds: [
									[number, number],
									[number, number],
								];
								zIndex?: number;
							} => o.type === 'svg' && 'bounds' in o
						)
						.map((svg, i) => {
							const svgContent =
								typeof svg.render === 'function' ?
									svg.render(svg.bounds)
								:	svg.render;
							return (
								<SVGOverlay
									key={i}
									svg={svgContent}
									bounds={svg.bounds}
									zIndex={svg.zIndex}
								/>
							);
						})}
				{/* Canvas overlays */}
				{svgCanvasOverlays &&
					svgCanvasOverlays
						.filter(
							(
								o
							): o is {
								type: 'canvas';
								render: any;
								bounds: [
									[number, number],
									[number, number],
								];
								zIndex?: number;
							} =>
								o.type === 'canvas' &&
								'bounds' in o &&
								'render' in o
						)
						.map((canvas, i) => (
							<CanvasOverlay
								key={i}
								render={canvas.render}
								bounds={canvas.bounds}
								zIndex={canvas.zIndex}
							/>
						))}
				{/* Live data overlays */}
				{liveData && <LiveDataOverlay data={liveData} />}
				{/* Weather/traffic overlays (stub) */}
				{weatherLayers && (
					<div className='map__weather-overlay'>
						Weather
					</div>
				)}
				{trafficLayers && (
					<div className='map__traffic-overlay'>
						Traffic
					</div>
				)}
				{/* Minimap overlay (stub) */}
				{miniMap && (
					<div className='map__minimap-overlay'>
						Minimap
					</div>
				)}
				{/* Clustered markers */}
				{clusterMarkers && MarkerClusterGroup ?
					<MarkerClusterGroup>
						{markers.map((marker) => {
							const markerIcon = getMarkerIcon(
								marker.icon,
								marker.color
							);
							return (
								<Marker
									key={marker.id}
									position={
										[
											marker.position.lat,
											marker.position.lng,
										] as LatLngExpression
									}
									icon={markerIcon}
									draggable={!!draggableMarkers}
									eventHandlers={{
										click:
											marker.clickable && onMarkerClick ?
												() => onMarkerClick(marker)
											:	undefined,
										dragend:
											draggableMarkers && onMarkerDrag ?
												(e) => {
													const { lat, lng } =
														e.target.getLatLng();
													onMarkerDrag(marker, {
														lat,
														lng,
													});
												}
											:	undefined,
										contextmenu: (e) => {
											if (mapContextMenu) {
												setContextMenu(
													mapContextMenu({
														type: 'marker',
														data: marker,
														position: {
															x: e.originalEvent.clientX,
															y: e.originalEvent.clientY,
														},
													})
												);
												setContextMenuPos({
													x: e.originalEvent.clientX,
													y: e.originalEvent.clientY,
												});
											}
											if (onContextMenu)
												onContextMenu({
													type: 'marker',
													data: marker,
													position: {
														x: e.originalEvent.clientX,
														y: e.originalEvent.clientY,
													},
												});
										},
									}}
								>
									{marker.title && (
										<Popup>{marker.title}</Popup>
									)}
								</Marker>
							);
						})}
					</MarkerClusterGroup>
				:	markers.map((marker) => {
						const markerIcon = getMarkerIcon(
							marker.icon,
							marker.color
						);
						return (
							<Marker
								key={marker.id}
								position={
									[
										marker.position.lat,
										marker.position.lng,
									] as LatLngExpression
								}
								icon={markerIcon}
								draggable={!!draggableMarkers}
								eventHandlers={{
									click:
										marker.clickable && onMarkerClick ?
											() => onMarkerClick(marker)
										:	undefined,
									dragend:
										draggableMarkers && onMarkerDrag ?
											(e) => {
												const { lat, lng } =
													e.target.getLatLng();
												onMarkerDrag(marker, { lat, lng });
											}
										:	undefined,
									contextmenu: (e) => {
										if (mapContextMenu) {
											setContextMenu(
												mapContextMenu({
													type: 'marker',
													data: marker,
													position: {
														x: e.originalEvent.clientX,
														y: e.originalEvent.clientY,
													},
												})
											);
											setContextMenuPos({
												x: e.originalEvent.clientX,
												y: e.originalEvent.clientY,
											});
										}
										if (onContextMenu)
											onContextMenu({
												type: 'marker',
												data: marker,
												position: {
													x: e.originalEvent.clientX,
													y: e.originalEvent.clientY,
												},
											});
									},
								}}
							>
								{marker.title && (
									<Popup>{marker.title}</Popup>
								)}
							</Marker>
						);
					})
				}
				{/* Regions/Polygons with editable support */}
				<MapRegions
					regions={regions}
					onRegionClick={onRegionClick}
					editableRegions={!!editableRegions}
					onRegionDraw={onRegionDraw}
					onRegionEdit={onRegionEdit}
					onRegionDelete={onRegionDelete}
					mapContextMenu={mapContextMenu}
				/>
				{/* Tooltips/Popups for regions/markers (if enabled) */}
				{/* Custom control panels */}
				{customControlPanels &&
					customControlPanels.map((panel, i) => (
						<React.Fragment key={i}>{panel}</React.Fragment>
					))}
				{/* Custom controls */}
				{customControls &&
					customControls.map((ctrl, i) => (
						<React.Fragment key={i}>{ctrl}</React.Fragment>
					))}
				{/* Draw tools (stub) */}
				{drawTools && (
					<div className='map__draw-tools'>Draw Tools</div>
				)}
				{/* Accessibility features (stub) */}
				{/* Geolocate button (stub) */}
				{geolocate && (
					<button className='map__geolocate-btn'>
						Geolocate
					</button>
				)}
				{/* Fullscreen toggle (stub) */}
				{fullscreenToggle && (
					<button className='map__fullscreen-btn'>
						Fullscreen
					</button>
				)}
				{/* Overlay prop (generic overlays) */}
				{overlayProp &&
					overlayProp
						.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
						.map((o, i) => {
							if (
								o.type === 'image' &&
								o.props.url &&
								o.props.bounds
							)
								return (
									<ImageOverlay
										key={i}
										url={o.props.url}
										bounds={o.props.bounds}
										opacity={o.props.opacity}
										zIndex={o.props.zIndex}
									/>
								);
							if (
								o.type === 'svg' &&
								o.props.svg &&
								o.props.bounds
							)
								return (
									<SVGOverlay
										key={i}
										svg={o.props.svg}
										bounds={o.props.bounds}
										zIndex={o.props.zIndex}
									/>
								);
							if (
								o.type === 'canvas' &&
								o.props.render &&
								o.props.bounds
							)
								return (
									<CanvasOverlay
										key={i}
										render={o.props.render}
										bounds={o.props.bounds}
										zIndex={o.props.zIndex}
									/>
								);
							return null;
						})}
				{/* Dynamic children overlays */}
				{dynamicChildren &&
					dynamicChildren.map((item, i) => (
						<div
							key={i}
							style={{
								position: 'absolute',
								left: item.coordinate.lng,
								top: item.coordinate.lat,
							}}
						>
							{item.children}
						</div>
					))}
				{/* Controls */}
				{showZoomControls && (
					<ZoomControl position='topright' />
				)}
				{showScale && (
					<ScaleControl position='bottomleft' />
				)}
				<MapClickHandler
					interactive={interactive}
					onClick={onClick}
				/>
			</MapContainer>
			{contextMenu && contextMenuPos && (
				<div
					style={{
						position: 'absolute',
						left: contextMenuPos.x,
						top: contextMenuPos.y,
						zIndex: 9999,
					}}
				>
					{contextMenu}
				</div>
			)}
		</div>
	);
};

export default MapContainerWrapper;
