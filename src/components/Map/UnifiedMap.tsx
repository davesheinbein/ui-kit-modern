import React, {
	forwardRef,
	memo,
	useRef,
	useEffect,
	useId,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export interface UnifiedMapProps {
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

const UnifiedMap = forwardRef<
	HTMLDivElement,
	UnifiedMapProps
>(
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

		// Handle map click
		const handleMapClick = (
			event: React.MouseEvent<HTMLDivElement>
		) => {
			if (!finalConfig.interactive || !onClick) return;

			const rect =
				event.currentTarget.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;

			// Convert pixel coordinates to lat/lng (simplified)
			const lat =
				((rect.height - y) / rect.height - 0.5) * 180;
			const lng = (x / rect.width - 0.5) * 360;

			onClick({ lat, lng });
		};

		// Render zoom controls
		const renderZoomControls = () => {
			if (!finalConfig.showZoomControls) return null;

			return (
				<div className={styles.map__zoom_controls}>
					<button
						className={styles.map__zoom_button}
						onClick={handleZoomIn}
						disabled={
							currentZoom >= (finalConfig.maxZoom ?? 20)
						}
						aria-label='Zoom in'
					>
						+
					</button>
					<button
						className={styles.map__zoom_button}
						onClick={handleZoomOut}
						disabled={
							currentZoom <= (finalConfig.minZoom ?? 1)
						}
						aria-label='Zoom out'
					>
						−
					</button>
				</div>
			);
		};

		// Render markers
		const renderMarkers = () => {
			return markers.map((marker) => (
				<div
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
				</div>
			));
		};

		// Render grid overlay
		const renderGrid = () => {
			if (!finalConfig.showGrid) return null;

			return <div className={styles.map__grid}></div>;
		};

		// Render coordinates display
		const renderCoordinates = () => {
			if (!finalConfig.showCoordinates) return null;

			return (
				<div className={styles.map__coordinates}>
					{currentCenter.lat.toFixed(4)},{' '}
					{currentCenter.lng.toFixed(4)}
				</div>
			);
		};

		// Render scale
		const renderScale = () => {
			if (!finalConfig.showScale) return null;

			return (
				<div className={styles.map__scale}>
					<div className={styles.map__scale_bar}></div>
					<div className={styles.map__scale_label}>1km</div>
				</div>
			);
		};

		// Render compass
		const renderCompass = () => {
			if (!finalConfig.showCompass) return null;

			return (
				<div className={styles.map__compass}>
					<div className={styles.map__compass_needle}>
						🧭
					</div>
				</div>
			);
		};

		// Render minimap
		const renderMinimap = () => {
			if (!finalConfig.showMinimap) return null;

			return (
				<div className={styles.map__minimap}>
					<div className={styles.map__minimap_content}>
						{/* Simplified minimap representation */}
						<div
							className={styles.map__minimap_viewport}
						></div>
					</div>
				</div>
			);
		};

		const containerStyle: React.CSSProperties = {
			aspectRatio: finalConfig.aspectRatio,
			borderRadius: finalConfig.borderRadius,
		};

		return (
			<div
				ref={ref}
				className={baseClasses}
				style={containerStyle}
				onClick={handleMapClick}
				{...rest}
			>
				<div ref={mapRef} className={styles.map__content}>
					{/* Map background/tiles would be rendered here */}
					<div className={styles.map__tiles}>
						{finalConfig.kind.includes('game') ?
							<div className={styles.map__game_background}>
								🗺️
							</div>
						:	<div
								className={styles.map__default_background}
							>
								🌍
							</div>
						}
					</div>

					{renderGrid()}
					{renderMarkers()}

					{finalConfig.showFogOfWar && (
						<div className={styles.map__fog_of_war}></div>
					)}
				</div>

				{/* Controls and overlays */}
				{renderZoomControls()}
				{renderScale()}
				{renderCompass()}
				{renderCoordinates()}
				{renderMinimap()}

				{children && (
					<div className={styles.map__custom}>
						{children}
					</div>
				)}
			</div>
		);
	}
);

UnifiedMap.displayName = 'UnifiedMap';
export default memo(UnifiedMap);
