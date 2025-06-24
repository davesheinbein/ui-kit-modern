import React, {
	forwardRef,
	memo,
	useRef,
	useEffect,
	useId,
} from 'react';
import 'leaflet/dist/leaflet.css';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	Polygon,
	useMap,
	ScaleControl,
	ZoomControl,
} from 'react-leaflet';
import L, { LatLngExpression, Icon } from 'leaflet';
import { Wrapper } from '../Wrappers';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../Button';
import {
	MapKind,
	MapConfiguration,
	MapCoordinate,
	MapMarker,
	MapRegion,
	getMapConfig,
} from './configurations';
import {
	setMapState,
	cleanupComponent,
	selectMapState,
} from '../../store/slices/uiSlice';
import type { RootState } from '../../store';
import styles from './Map.module.scss';

export interface MapProps {
	kind: MapKind;
	componentId?: string; // For Redux state identification
	children?: React.ReactNode;
	className?: string;

	// Map data
	center?: MapCoordinate;
	markers?: MapMarker[];
	regions?: MapRegion[];

	// Map settings overrides
	zoom?: number;
	minZoom?: number;
	maxZoom?: number;

	// Interaction overrides
	interactive?: boolean;
	zoomable?: boolean;
	pannable?: boolean;
	rotatable?: boolean;

	// Controls overrides
	showZoomControls?: boolean;
	showLayerControls?: boolean;
	showScale?: boolean;
	showCompass?: boolean;
	showFullscreen?: boolean;

	// Game features overrides
	showGrid?: boolean;
	showCoordinates?: boolean;
	showMinimap?: boolean;
	showFogOfWar?: boolean;

	// Styling overrides
	variant?: MapConfiguration['variant'];
	size?: MapConfiguration['size'];
	aspectRatio?: string;
	borderRadius?: string;

	// Events
	onClick?: (coordinate: MapCoordinate) => void;
	onMarkerClick?: (marker: MapMarker) => void;
	onRegionClick?: (region: MapRegion) => void;
	onZoomChange?: (zoom: number) => void;
	onCenterChange?: (center: MapCoordinate) => void;
}

// Helper for custom marker icons
const getMarkerIcon = (
	icon?: React.ReactNode,
	color?: string
) => {
	if (!icon) return undefined;
	// For now, only support emoji or string icons as Leaflet icons
	if (typeof icon === 'string') {
		return new L.DivIcon({
			html: `<span style="font-size: 1.5em; color: ${color || 'inherit'}">${icon}</span>`,
		});
	}
	return undefined;
};

// Helper for tile URLs by variant
const getTileLayerUrl = (variant: string) => {
	switch (variant) {
		case 'satellite':
			// OpenTopoMap as a free satellite-like alternative
			return 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
		case 'terrain':
			return 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
		case 'dark':
			return 'https://tiles.stadiamaps.com/tiles/alidade_dark/{z}/{x}/{y}{r}.png';
		case 'light':
			return 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png';
		case 'gaming':
			return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'; // fallback
		default:
			return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	}
};

const Map = forwardRef<HTMLDivElement, MapProps>(
	(
		{
			kind,
			componentId,
			children,
			className = '',
			center,
			markers = [],
			regions = [],
			zoom,
			minZoom,
			maxZoom,
			interactive,
			zoomable,
			pannable,
			rotatable,
			showZoomControls,
			showLayerControls,
			showScale,
			showCompass,
			showFullscreen,
			showGrid,
			showCoordinates,
			showMinimap,
			showFogOfWar,
			variant,
			size,
			aspectRatio,
			borderRadius,
			onClick,
			onMarkerClick,
			onRegionClick,
			onZoomChange,
			onCenterChange,
			...rest
		},
		ref
	) => {
		const config = getMapConfig(kind);

		// Generate unique component ID for Redux state isolation
		const uniqueId = useId();
		const mapComponentId = componentId || `map-${uniqueId}`;

		// Redux state management
		const dispatch = useDispatch();

		// Initialize component state on mount
		useEffect(() => {
			dispatch(
				setMapState({
					mapId: mapComponentId,
					updates: {
						currentZoom: zoom ?? config.zoom ?? 1,
						currentCenter: center ??
							config.center ?? { lat: 0, lng: 0 },
					},
				})
			);

			// Cleanup on unmount
			return () => {
				dispatch(cleanupComponent(mapComponentId));
			};
		}, [
			dispatch,
			mapComponentId,
			zoom,
			config.zoom,
			center,
			config.center,
		]);

		// Get state from Redux
		const mapState = useSelector(
			selectMapState(mapComponentId)
		);

		const currentZoom =
			mapState?.currentZoom ?? zoom ?? config.zoom ?? 1;
		const currentCenter = mapState?.currentCenter ??
			center ??
			config.center ?? { lat: 0, lng: 0 };

		const mapRef = useRef<HTMLDivElement>(null);

		// Merge configuration with props
		const finalConfig = {
			...config,
			center: center ?? config.center,
			zoom: zoom ?? config.zoom,
			minZoom: minZoom ?? config.minZoom,
			maxZoom: maxZoom ?? config.maxZoom,
			interactive: interactive ?? config.interactive,
			zoomable: zoomable ?? config.zoomable,
			pannable: pannable ?? config.pannable,
			rotatable: rotatable ?? config.rotatable,
			showZoomControls:
				showZoomControls ?? config.showZoomControls,
			showLayerControls:
				showLayerControls ?? config.showLayerControls,
			showScale: showScale ?? config.showScale,
			showCompass: showCompass ?? config.showCompass,
			showFullscreen:
				showFullscreen ?? config.showFullscreen,
			showGrid: showGrid ?? config.showGrid,
			showCoordinates:
				showCoordinates ?? config.showCoordinates,
			showMinimap: showMinimap ?? config.showMinimap,
			showFogOfWar: showFogOfWar ?? config.showFogOfWar,
			variant: variant ?? config.variant,
			size: size ?? config.size,
			aspectRatio: aspectRatio ?? config.aspectRatio,
			borderRadius: borderRadius ?? config.borderRadius,
		};

		// Generate class names
		const baseClasses = [
			styles.map,
			styles[`map--${finalConfig.kind}`],
			styles[`map--${finalConfig.variant}`],
			styles[`map--${finalConfig.size}`],
			finalConfig.interactive && styles['map--interactive'],
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Handle zoom changes
		const handleZoomIn = () => {
			const newZoom = Math.min(
				currentZoom + 1,
				finalConfig.maxZoom ?? 20
			);
			dispatch(
				setMapState({
					mapId: mapComponentId,
					updates: { currentZoom: newZoom },
				})
			);
			onZoomChange?.(newZoom);
		};

		const handleZoomOut = () => {
			const newZoom = Math.max(
				currentZoom - 1,
				finalConfig.minZoom ?? 1
			);
			dispatch(
				setMapState({
					mapId: mapComponentId,
					updates: { currentZoom: newZoom },
				})
			);
			onZoomChange?.(newZoom);
		};

		// Render zoom controls
		const renderZoomControls = () => {
			if (!finalConfig.showZoomControls) return null;

			return (
				<Wrapper className={styles.map__zoom_controls}>
					<Button
						kind='secondary'
						className={styles.map__zoom_button}
						onClick={handleZoomIn}
						disabled={
							currentZoom >= (finalConfig.maxZoom ?? 20)
						}
						aria-label='Zoom in'
					>
						+
					</Button>
					<Button
						kind='secondary'
						className={styles.map__zoom_button}
						onClick={handleZoomOut}
						disabled={
							currentZoom <= (finalConfig.minZoom ?? 1)
						}
						aria-label='Zoom out'
					>
						−
					</Button>
				</Wrapper>
			);
		};

		// Render markers
		const renderMarkers = () => {
			return markers.map((marker) => (
				<Wrapper
					key={marker.id}
					className={[
						styles.map__marker,
						styles[`map__marker--${marker.size || 'md'}`],
						marker.clickable &&
							styles['map__marker--clickable'],
					]
						.filter(Boolean)
						.join(' ')}
					style={{
						color: marker.color,
						// Position would be calculated based on lat/lng
					}}
					onClick={() =>
						marker.clickable && onMarkerClick?.(marker)
					}
					title={marker.title}
				>
					{marker.icon || '📍'}
				</Wrapper>
			));
		};

		// Render grid overlay
		const renderGrid = () => {
			if (!finalConfig.showGrid) return null;

			return (
				<Wrapper className={styles.map__grid}></Wrapper>
			);
		};

		// Render coordinates display
		const renderCoordinates = () => {
			if (!finalConfig.showCoordinates) return null;

			return (
				<Wrapper className={styles.map__coordinates}>
					{currentCenter.lat.toFixed(4)},{' '}
					{currentCenter.lng.toFixed(4)}
				</Wrapper>
			);
		};

		// Render scale
		const renderScale = () => {
			if (!finalConfig.showScale) return null;

			return (
				<Wrapper className={styles.map__scale}>
					<Wrapper
						className={styles.map__scale_bar}
					></Wrapper>
					<Wrapper className={styles.map__scale_label}>
						1km
					</Wrapper>
				</Wrapper>
			);
		};

		// Render compass
		const renderCompass = () => {
			if (!finalConfig.showCompass) return null;

			return (
				<Wrapper className={styles.map__compass}>
					<Wrapper className={styles.map__compass_needle}>
						🧭
					</Wrapper>
				</Wrapper>
			);
		};

		// Render minimap
		const renderMinimap = () => {
			if (!finalConfig.showMinimap) return null;

			return (
				<Wrapper className={styles.map__minimap}>
					<Wrapper className={styles.map__minimap_content}>
						{/* Simplified minimap representation */}
						<Wrapper
							className={styles.map__minimap_viewport}
						></Wrapper>
					</Wrapper>
				</Wrapper>
			);
		};

		const leafletMarkers = markers.filter(
			(m) =>
				m.position &&
				typeof m.position.lat === 'number' &&
				typeof m.position.lng === 'number'
		);
		const leafletRegions = regions.filter(
			(r) =>
				Array.isArray(r.coordinates) &&
				r.coordinates.length > 0
		);

		const containerStyle: React.CSSProperties = {
			aspectRatio: finalConfig.aspectRatio,
			borderRadius: finalConfig.borderRadius,
			width: '100%',
			height: '100%',
		};

		const leafletCenter: [number, number] = [
			currentCenter.lat,
			currentCenter.lng,
		];
		const leafletZoom: number = Number(currentZoom);

		// Custom map event handler for click
		function MapClickHandler() {
			const map = useMap();
			map.on('click', (e: L.LeafletMouseEvent) => {
				if (finalConfig.interactive && onClick) {
					onClick({ lat: e.latlng.lat, lng: e.latlng.lng });
				}
			});
			return null;
		}

		return (
			<Wrapper
				ref={ref}
				className={baseClasses}
				style={containerStyle}
				{...rest}
			>
				<MapContainer
					center={leafletCenter}
					zoom={leafletZoom}
					minZoom={finalConfig.minZoom}
					maxZoom={finalConfig.maxZoom}
					style={{
						width: '100%',
						height: '100%',
						borderRadius: finalConfig.borderRadius,
					}}
					scrollWheelZoom={!!finalConfig.zoomable}
					zoomControl={false}
				>
					<MapClickHandler />
					<TileLayer
						attribution='&copy; OpenStreetMap contributors'
						url={getTileLayerUrl(finalConfig.variant)}
					/>
					{/* Markers */}
					{leafletMarkers.map((marker) => (
						<Marker
							key={marker.id}
							position={
								[
									marker.position.lat,
									marker.position.lng,
								] as LatLngExpression
							}
							icon={getMarkerIcon(
								marker.icon,
								marker.color
							)}
							eventHandlers={
								marker.clickable && onMarkerClick ?
									{
										click: () => onMarkerClick(marker),
									}
								:	undefined
							}
						>
							{marker.title && (
								<Popup>{marker.title}</Popup>
							)}
						</Marker>
					))}
					{/* Regions/Polygons */}
					{leafletRegions.map((region) => (
						<Polygon
							key={region.id}
							positions={
								region.coordinates.map((c) => [
									c.lat,
									c.lng,
								]) as LatLngExpression[]
							}
							pathOptions={{
								color: region.color || '#3388ff',
								fillColor:
									region.fillColor ||
									region.color ||
									'#3388ff',
								fillOpacity: region.fillOpacity ?? 0.2,
								weight: region.strokeWidth ?? 2,
							}}
							eventHandlers={
								region.clickable && onRegionClick ?
									{
										click: () => onRegionClick(region),
									}
								:	undefined
							}
						>
							{region.title && (
								<Popup>{region.title}</Popup>
							)}
						</Polygon>
					))}
					{/* Controls */}
					{finalConfig.showZoomControls && (
						<ZoomControl position='topright' />
					)}
					{finalConfig.showScale && (
						<ScaleControl position='bottomleft' />
					)}
				</MapContainer>

				{/* Custom overlays and controls */}
				{renderCompass()}
				{renderCoordinates()}
				{renderMinimap()}
				{renderGrid()}
				{finalConfig.showFogOfWar && (
					<Wrapper
						className={styles.map__fog_of_war}
					></Wrapper>
				)}

				{children && (
					<Wrapper className={styles.map__custom}>
						{children}
					</Wrapper>
				)}
			</Wrapper>
		);
	}
);

Map.displayName = 'Map';
export default memo(Map);
