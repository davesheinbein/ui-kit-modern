import React from 'react';
import { Wrapper } from '../../Wrappers';
import MapControls from './MapControls';
import MapContainerWrapper from './MapContainerWrapper';
import MapCustomChildren from './MapCustomChildren';
import { MapViewProps } from './types';

const MapView: React.FC<MapViewProps> = ({
	refObj,
	baseClasses,
	containerStyle,
	containerClassName,
	ariaLabel,
	tabIndex,
	onKeyDown,
	onFocus,
	onBlur,
	onLoad,
	onMove,
	onZoom,
	// Map props
	kind,
	componentId,
	className,
	style,
	center,
	zoom,
	minZoom,
	maxZoom,
	markers = [],
	regions = [],
	interactive,
	zoomable,
	pannable,
	rotatable,
	variant,
	size,
	aspectRatio,
	borderRadius,
	overlays,
	loading,
	controls,
	showZoomControls,
	showLayerControls,
	showScale,
	showCompass,
	showFullscreen,
	showGrid,
	showCoordinates,
	showMinimap,
	showFogOfWar,
	onClick,
	onMarkerClick,
	onRegionClick,
	onZoomChange,
	children,
	currentZoom,
	handleZoomIn,
	handleZoomOut,
	...rest
}) => {
	// Convert center to [number, number] if present
	const leafletCenter: [number, number] =
		center ? [center.lat, center.lng] : [0, 0];
	return (
		<Wrapper
			ref={refObj}
			className={baseClasses}
			style={containerStyle}
		>
			<MapContainerWrapper
				center={leafletCenter}
				zoom={zoom as number}
				minZoom={minZoom}
				maxZoom={maxZoom}
				variant={variant as string}
				markers={markers}
				regions={regions}
				showZoomControls={showZoomControls}
				showScale={showScale}
				containerClassName={containerClassName}
				containerStyle={containerStyle}
				ariaLabel={ariaLabel}
				tabIndex={tabIndex}
				onKeyDown={onKeyDown}
				onFocus={onFocus}
				onBlur={onBlur}
				onLoad={onLoad}
				onMove={onMove}
				onZoom={onZoom}
				{...rest}
			/>
			<MapControls
				currentZoom={currentZoom}
				minZoom={minZoom ?? 1}
				maxZoom={maxZoom ?? 20}
				onZoomIn={handleZoomIn}
				onZoomOut={handleZoomOut}
				showZoomControls={showZoomControls}
			/>
			<MapCustomChildren>{children}</MapCustomChildren>
		</Wrapper>
	);
};

export default MapView;
