import React, { useMemo } from 'react';
import { MapContext } from './Sub/MapContext';
import MapView from './Sub/MapView';
import MapOverlaysRenderer from './Sub/MapOverlaysRenderer';
import MapCustomChildren from './Sub/MapCustomChildren';
import MapControls from './Sub/MapControls';
import { MapProps } from './Sub/types';
import { Spinner } from '../Loading/Sub';

const Map = React.forwardRef<HTMLDivElement, MapProps>(
	(props, ref) => {
		const orderedOverlays = useMemo(
			() =>
				(props.overlays ?? [])
					.slice()
					.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
			[props.overlays]
		);

		const orderedControls = useMemo(
			() =>
				(props.controls ?? [])
					.slice()
					.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
			[props.controls]
		);

		const containerStyle = {
			width: '100%',
			height: '100%',
			minHeight: 400,
			position: 'relative',
			overflow: 'visible',
			background: 'var(--map-bg, #f8f9fa)',
			borderRadius: 'var(--map-container-radius, 24px)',
			boxShadow:
				'var(--map-container-shadow, 0 6px 32px 0 #2563eb22)',
			...props.style,
		};

		const wrapperProps = {
			'className': props.className ?? 'map__container',
			'style': containerStyle,
			'role': 'region',
			'aria-label': props.ariaLabel ?? 'Map', // keep aria-label quoted for HTML attribute
			'tabIndex': props.tabIndex ?? 0,
		};

		const mapContextValue: any = {
			center: props.center,
			zoom: props.zoom,
			config: props.config,
			markers: props.markers,
			regions: props.regions,
			overlays: props.overlays,
			controls: props.controls,
			size: props.size,
			kind: props.kind,
			variant: props.variant,
			theme: props.theme,
		};

		return (
			<MapContext.Provider value={mapContextValue}>
				<div
					className={wrapperProps.className}
					style={containerStyle as React.CSSProperties}
					role={wrapperProps.role}
					aria-label={wrapperProps['aria-label']}
					tabIndex={wrapperProps.tabIndex}
				>
					{props.loading && <Spinner />}
					<MapView
						refObj={ref}
						baseClasses={props.className ?? ''}
						containerStyle={{
							width: '100%',
							height: '100%',
						}}
						containerClassName={props.className ?? ''}
						ariaLabel={props.ariaLabel ?? 'Map'}
						tabIndex={props.tabIndex ?? 0}
						kind={props.kind}
						componentId={props.componentId}
						center={
							(
								Array.isArray(props.center) &&
								props.center.length === 2
							) ?
								{
									lat: props.center[0],
									lng: props.center[1],
								}
							: (
								typeof props.center === 'object' &&
								props.center !== null &&
								'lat' in props.center &&
								'lng' in props.center
							) ?
								(props.center as {
									lat: number;
									lng: number;
								})
							:	undefined
						}
						zoom={props.zoom}
						minZoom={props.minZoom}
						maxZoom={props.maxZoom}
						markers={props.markers}
						regions={props.regions}
						overlays={props.overlays}
						controls={props.controls}
						size={props.size}
						variant={props.variant}
						loading={props.loading}
						showZoomControls={props.showZoomControls}
						showLayerControls={props.showLayerControls}
						showScale={props.showScale}
						showCompass={props.showCompass}
						showFullscreen={props.showFullscreen}
						showGrid={props.showGrid}
						showCoordinates={props.showCoordinates}
						showMinimap={props.showMinimap}
						showFogOfWar={props.showFogOfWar}
						onClick={props.onClick}
						onMarkerClick={props.onMarkerClick}
						onRegionClick={props.onRegionClick}
						onZoomChange={props.onZoomChange}
						currentZoom={props.zoom}
						handleZoomIn={props.handleZoomIn}
						handleZoomOut={props.handleZoomOut}
					/>
					{/* Overlay container for stacking overlays above the map */}
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							pointerEvents: 'none',
							zIndex: 10,
						}}
						className='map__overlay-container'
					>
						<MapOverlaysRenderer
							overlays={orderedOverlays}
						/>
						{props.keyItems && (
							<MapCustomChildren>
								{props.keyItems.map(
									(item: { id: string; label: string }) => (
										<div key={item.id}>{item.label}</div>
									)
								)}
							</MapCustomChildren>
						)}
						{props.dynamicChildren?.map(
							(
								item: { children: React.ReactNode },
								i: number
							) => (
								<MapCustomChildren key={`dynchild-${i}`}>
									{item.children}
								</MapCustomChildren>
							)
						)}
					</div>
					{/* Controls container above overlays */}
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							pointerEvents: 'none',
							zIndex: 20,
						}}
						className='map__controls-container'
					>
						<MapControls
							controls={orderedControls as any}
							currentZoom={props.zoom ?? 1}
							minZoom={props.minZoom ?? 1}
							maxZoom={props.maxZoom ?? 20}
							onZoomIn={props.handleZoomIn ?? (() => {})}
							onZoomOut={props.handleZoomOut ?? (() => {})}
						/>
					</div>
					{props.children}
					{props.plugins?.map(
						(
							Plugin: React.ComponentType<any>,
							i: number
						) =>
							typeof Plugin === 'function' ?
								<Plugin
									key={`plugin-${i}`}
									{...mapContextValue}
								/>
							:	null
					)}
				</div>
			</MapContext.Provider>
		);
	}
);

export default Map;
