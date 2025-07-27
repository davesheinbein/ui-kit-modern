import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import {
	Map,
	MapKind,
	MapProps,
} from '../../components/Map';
import HeatmapOverlay from '../../components/Map/Sub/HeatmapOverlay';
import MapCustomChildren from '../../components/Map/Sub/MapCustomChildren';
import CompassOverlay from '../../components/Map/Sub/CompassOverlay';
import GridOverlay from '../../components/Map/Sub/GridOverlay';
import FogOfWarOverlay from '../../components/Map/Sub/FogOfWarOverlay';
import MinimapOverlay from '../../components/Map/Sub/MinimapOverlay';
import CoordinatesOverlay from '../../components/Map/Sub/CoordinatesOverlay';

export default {
	title: 'Map/ShowcaseAllFeatures',
	component: Map,
	parameters: {
		layout: 'centered',
	},
};

// Example marker data for each map kind
const mapMarkers: Record<MapKind, MapProps['markers']> = {
	'world-map': [
		{
			id: 'nyc',
			position: { lat: 40.7128, lng: -74.006 },
			title: 'New York City',
		},
		{
			id: 'tokyo',
			position: { lat: 35.6895, lng: 139.6917 },
			title: 'Tokyo',
		},
	],
	'region-map': [
		{
			id: 'bavaria',
			position: { lat: 48.7904, lng: 11.4979 },
			title: 'Bavaria',
		},
	],
	'city-map': [
		{
			id: 'paris',
			position: { lat: 48.8566, lng: 2.3522 },
			title: 'Paris',
		},
	],
	'street-map': [
		{
			id: 'london-bridge',
			position: { lat: 51.5079, lng: -0.0877 },
			title: 'London Bridge',
		},
	],
	'satellite-map': [
		{
			id: 'grand-canyon',
			position: { lat: 36.1069, lng: -112.1129 },
			title: 'Grand Canyon',
		},
	],
	'terrain-map': [
		{
			id: 'alps',
			position: { lat: 46.8182, lng: 8.2275 },
			title: 'Swiss Alps',
		},
	],
	'interactive-map': [
		{
			id: 'sydney',
			position: { lat: -33.8688, lng: 151.2093 },
			title: 'Sydney',
		},
	],
	'game-map': [
		{
			id: 'castle',
			position: { lat: 34.0522, lng: -118.2437 },
			title: 'Castle (Game)',
		},
	],
	'floor-plan': [
		{
			id: 'lobby',
			position: { lat: 0, lng: 0 },
			title: 'Lobby',
		},
	],
	'campus-map': [
		{
			id: 'main-hall',
			position: { lat: 37.4275, lng: -122.1697 },
			title: 'Main Hall',
		},
	],
	'location-marker': [
		{
			id: 'marker',
			position: { lat: 51.5, lng: -0.09 },
			title: 'Marker Example',
		},
	],
	'region-claim-marker': [
		{
			id: 'region',
			position: { lat: 40, lng: -100 },
			title: 'Claimed Region',
		},
	],
	'player-presence-indicator': [
		{
			id: 'player',
			position: { lat: 35, lng: 135 },
			title: 'Player Here',
		},
	],
	'poi-marker': [
		{
			id: 'poi',
			position: { lat: 48.8584, lng: 2.2945 },
			title: 'Eiffel Tower',
		},
	],
	'cluster-marker': [
		{
			id: 'cluster1',
			position: { lat: 40, lng: -75 },
			title: 'Cluster 1',
		},
		{
			id: 'cluster2',
			position: { lat: 41, lng: -74 },
			title: 'Cluster 2',
		},
	],
	'territory-map': [
		{
			id: 'territory',
			position: { lat: 55.3781, lng: -3.436 },
			title: 'Territory',
		},
	],
	'battle-map': [
		{
			id: 'battle',
			position: { lat: 52.52, lng: 13.405 },
			title: 'Battle Site',
		},
	],
	'resource-map': [
		{
			id: 'resource',
			position: { lat: 60, lng: 100 },
			title: 'Resource',
		},
	],
	'mini-map': [
		{
			id: 'mini',
			position: { lat: 0, lng: 0 },
			title: 'Mini Center',
		},
	],
	'radar-view': [
		{
			id: 'radar',
			position: { lat: 0, lng: 0 },
			title: 'Radar Center',
		},
	],
};

// Example centers and zooms for each map kind (visually interesting defaults)
const mapCenters: Record<
	MapKind,
	{ lat: number; lng: number }
> = {
	'world-map': { lat: 30, lng: 10 }, // Center on Mediterranean
	'region-map': { lat: 51.1657, lng: 10.4515 }, // Germany
	'city-map': { lat: 40.7128, lng: -74.006 }, // New York City
	'street-map': { lat: 51.5074, lng: -0.1278 }, // London
	'satellite-map': { lat: 27.9881, lng: 86.925 }, // Mt. Everest
	'terrain-map': { lat: 46.8523, lng: -121.7603 }, // Mt. Rainier
	'interactive-map': { lat: 35.6895, lng: 139.6917 }, // Tokyo
	'game-map': { lat: 34.0522, lng: -118.2437 }, // Los Angeles
	'floor-plan': { lat: 0, lng: 0 }, // Placeholder
	'campus-map': { lat: 37.4275, lng: -122.1697 }, // Stanford
	'location-marker': { lat: 48.8584, lng: 2.2945 }, // Eiffel Tower
	'region-claim-marker': { lat: 40.6892, lng: -74.0445 }, // Statue of Liberty
	'player-presence-indicator': {
		lat: 35.6586,
		lng: 139.7454,
	}, // Tokyo Tower
	'poi-marker': { lat: 51.5007, lng: -0.1246 }, // Big Ben
	'cluster-marker': { lat: 41.9028, lng: 12.4964 }, // Rome
	'territory-map': { lat: 55.9533, lng: -3.1883 }, // Edinburgh
	'battle-map': { lat: 48.1351, lng: 11.582 }, // Munich
	'resource-map': { lat: 59.3293, lng: 18.0686 }, // Stockholm
	'mini-map': { lat: 40.4168, lng: -3.7038 }, // Madrid
	'radar-view': { lat: 35.6895, lng: 139.6917 }, // Tokyo
};

// Example zooms for each map kind (visually interesting defaults)
const mapZooms: Partial<Record<MapKind, number>> = {
	'world-map': 2,
	'region-map': 6,
	'city-map': 13,
	'street-map': 16,
	'satellite-map': 10,
	'terrain-map': 10,
	'interactive-map': 11,
	'game-map': 12,
	'floor-plan': 18,
	'campus-map': 15,
	'location-marker': 15,
	'region-claim-marker': 5,
	'player-presence-indicator': 13,
	'poi-marker': 16,
	'cluster-marker': 7,
	'territory-map': 7,
	'battle-map': 10,
	'resource-map': 5,
	'mini-map': 12,
	'radar-view': 12,
};

const kinds: MapKind[] = [
	'world-map',
	'region-map',
	'city-map',
	'street-map',
	'satellite-map',
	'terrain-map',
	'interactive-map',
	'game-map',
	'floor-plan',
	'campus-map',
	'location-marker',
	'region-claim-marker',
	'player-presence-indicator',
	'poi-marker',
	'cluster-marker',
	'territory-map',
	'battle-map',
	'resource-map',
	'mini-map',
	'radar-view',
];

// Helper: Only render children on client (after mount)
const ClientOnly: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;
	return <>{children}</>;
};

export const Docs = () => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='world-map'
				center={mapCenters['world-map']}
				zoom={mapZooms['world-map']}
				markers={mapMarkers['world-map']}
			/>
		</ClientOnly>
	</div>
);
Docs.storyName = 'Docs';

export const BasicWorldMap = (args: Partial<MapProps>) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='world-map'
				center={mapCenters['world-map']}
				zoom={mapZooms['world-map']}
				markers={mapMarkers['world-map']}
				{...args}
			/>
		</ClientOnly>
	</div>
);
BasicWorldMap.storyName = 'Basic World Map';

export const InteractiveMap = (args: Partial<MapProps>) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='interactive-map'
				interactive
				zoomable
				pannable
				center={mapCenters['interactive-map']}
				zoom={mapZooms['interactive-map']}
				markers={mapMarkers['interactive-map']}
				{...args}
			/>
		</ClientOnly>
	</div>
);
InteractiveMap.storyName = 'Interactive Map';

export const SatelliteMap = (args: Partial<MapProps>) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='satellite-map'
				variant='satellite'
				center={mapCenters['satellite-map']}
				zoom={mapZooms['satellite-map']}
				markers={mapMarkers['satellite-map']}
				{...args}
			/>
		</ClientOnly>
	</div>
);
SatelliteMap.storyName = 'Satellite Map';

export const TerrainMap = (args: Partial<MapProps>) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='terrain-map'
				variant='terrain'
				center={mapCenters['terrain-map']}
				zoom={mapZooms['terrain-map']}
				markers={mapMarkers['terrain-map']}
				{...args}
			/>
		</ClientOnly>
	</div>
);
TerrainMap.storyName = 'Terrain Map';

export const CityMap = (args: Partial<MapProps>) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='city-map'
				center={mapCenters['city-map']}
				zoom={mapZooms['city-map']}
				markers={mapMarkers['city-map']}
				{...args}
			/>
		</ClientOnly>
	</div>
);
CityMap.storyName = 'City Map';

export const GameMap = (args: Partial<MapProps>) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='game-map'
				showGrid
				center={mapCenters['game-map']}
				zoom={mapZooms['game-map']}
				markers={mapMarkers['game-map']}
				{...args}
			/>
		</ClientOnly>
	</div>
);
GameMap.storyName = 'Game Map';

export const MiniMap = (args: Partial<MapProps>) => (
	<div style={{ height: 300 }}>
		<ClientOnly>
			<Map
				kind='mini-map'
				size='sm'
				center={mapCenters['mini-map']}
				zoom={mapZooms['mini-map']}
				markers={mapMarkers['mini-map']}
				{...args}
			/>
		</ClientOnly>
	</div>
);
MiniMap.storyName = 'Mini Map';

export const UsageExample = (args: Partial<MapProps>) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='world-map'
				center={mapCenters['world-map']}
				zoom={mapZooms['world-map']}
				markers={mapMarkers['world-map']}
				{...args}
			/>
		</ClientOnly>
	</div>
);
UsageExample.storyName = 'Usage Example';

export const AllMapKindsGallery = () => (
	<div
		style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}
	>
		{kinds.map((kind) => (
			<div
				key={kind}
				style={{
					width: 340,
					height: 260,
					border: '1px solid #eee',
					borderRadius: 8,
					overflow: 'hidden',
					background: '#fafbfc',
				}}
			>
				<div
					style={{
						fontSize: 14,
						fontWeight: 600,
						padding: 8,
					}}
				>
					{kind}
				</div>
				<div style={{ height: 200, width: '100%' }}>
					<div style={{ height: '100%', width: '100%' }}>
						<ClientOnly>
							<Map
								kind={kind}
								center={mapCenters[kind]}
								zoom={mapZooms[kind]}
								markers={mapMarkers[kind]}
							/>
						</ClientOnly>
					</div>
				</div>
			</div>
		))}
	</div>
);
AllMapKindsGallery.storyName = 'All Map Kinds (Gallery)';

export const HeatmapExample = (args: Partial<MapProps>) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='city-map'
				center={mapCenters['city-map']}
				zoom={mapZooms['city-map']}
				markers={mapMarkers['city-map']}
				heatmapOverlays={[
					{
						data: [
							{ lat: 40.7128, lng: -74.006, value: 0.8 },
							{ lat: 40.7138, lng: -74.005, value: 0.6 },
							{ lat: 40.7148, lng: -74.004, value: 0.9 },
						],
						options: { radius: 25, blur: 15, maxZoom: 17 },
					},
				]}
				{...args}
			/>
		</ClientOnly>
	</div>
);
HeatmapExample.storyName = 'Heatmap Overlay';

export const ImageOverlayExample = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='city-map'
				center={mapCenters['city-map']}
				zoom={mapZooms['city-map']}
				markers={mapMarkers['city-map']}
				imageOverlays={[
					{
						url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Manhattan_New_York_City_Map.png',
						bounds: [
							[40.700292, -74.017134],
							[40.877483, -73.907005],
						],
						opacity: 0.5,
						zIndex: 10,
					},
				]}
				{...args}
			/>
		</ClientOnly>
	</div>
);
ImageOverlayExample.storyName = 'Image Overlay';

export const LiveDataOverlayExample = (
	args: Partial<MapProps>
) => {
	const [liveData, setLiveData] = useState([
		{ id: 'player1', lat: 40.72, lng: -74.01 },
		{ id: 'player2', lat: 40.73, lng: -74.0 },
	]);
	// Simulate live updates
	useEffect(() => {
		const interval = setInterval(() => {
			setLiveData((prev) =>
				prev.map((p) => ({
					...p,
					lat: p.lat + (Math.random() - 0.5) * 0.001,
					lng: p.lng + (Math.random() - 0.5) * 0.001,
				}))
			);
		}, 2000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div style={{ height: 400 }}>
			<ClientOnly>
				<Map
					kind='city-map'
					center={mapCenters['city-map']}
					zoom={mapZooms['city-map']}
					markers={mapMarkers['city-map']}
					liveData={liveData}
					{...args}
				/>
			</ClientOnly>
		</div>
	);
};
LiveDataOverlayExample.storyName = 'Live Data Overlay';

export const SVGOverlayExample = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='city-map'
				center={mapCenters['city-map']}
				zoom={mapZooms['city-map']}
				markers={mapMarkers['city-map']}
				svgOverlays={[
					{
						svg: `<svg width='200' height='200'><circle cx='100' cy='100' r='80' fill='rgba(0,0,255,0.3)' /></svg>`,
						bounds: [
							[40.700292, -74.017134],
							[40.877483, -73.907005],
						],
						zIndex: 12,
					},
				]}
				{...args}
			/>
		</ClientOnly>
	</div>
);
SVGOverlayExample.storyName = 'SVG Overlay';

export const CanvasOverlayExample = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='city-map'
				center={mapCenters['city-map']}
				zoom={mapZooms['city-map']}
				markers={mapMarkers['city-map']}
				canvasOverlays={[
					{
						render: (
							ctx: CanvasRenderingContext2D,
							bounds: [[number, number], [number, number]],
							size: { x: number; y: number }
						) => {
							ctx.fillStyle = 'rgba(255,0,0,0.2)';
							ctx.fillRect(0, 0, size.x, size.y);
						},
						bounds: [
							[40.700292, -74.017134],
							[40.877483, -73.907005],
						],
						zIndex: 13,
					},
				]}
				{...args}
			/>
		</ClientOnly>
	</div>
);
CanvasOverlayExample.storyName = 'Canvas Overlay';

export const ClusterMarkersExample = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='cluster-marker'
				center={mapCenters['cluster-marker']}
				zoom={mapZooms['cluster-marker']}
				markers={mapMarkers['cluster-marker']}
				clusterMarkers
				{...args}
			/>
		</ClientOnly>
	</div>
);
ClusterMarkersExample.storyName = 'Clustered Markers';

export const TooltipPopupExample = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='poi-marker'
				center={mapCenters['poi-marker']}
				zoom={mapZooms['poi-marker']}
				markers={mapMarkers['poi-marker']}
				showTooltips
				showPopups
				{...args}
			/>
		</ClientOnly>
	</div>
);
TooltipPopupExample.storyName = 'Tooltips & Popups';

export const CustomControlsExample = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='city-map'
				center={mapCenters['city-map']}
				zoom={mapZooms['city-map']}
				markers={mapMarkers['city-map']}
				customControls={[
					{
						position: 'topright',
						element: (
							<button style={{ padding: 8 }}>
								Custom Control
							</button>
						),
					},
				]}
				{...args}
			/>
		</ClientOnly>
	</div>
);
CustomControlsExample.storyName = 'Custom Controls';

export const MinimapExample = (args: Partial<MapProps>) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='mini-map'
				center={mapCenters['mini-map']}
				zoom={mapZooms['mini-map']}
				markers={mapMarkers['mini-map']}
				showMinimap
				{...args}
			/>
		</ClientOnly>
	</div>
);
MinimapExample.storyName = 'Minimap';

export const FullscreenExample = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='city-map'
				center={mapCenters['city-map']}
				zoom={mapZooms['city-map']}
				markers={mapMarkers['city-map']}
				fullscreenControl
				{...args}
			/>
		</ClientOnly>
	</div>
);
FullscreenExample.storyName = 'Fullscreen Control';

export const GeolocateExample = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='city-map'
				center={mapCenters['city-map']}
				zoom={mapZooms['city-map']}
				markers={mapMarkers['city-map']}
				geolocateControl
				{...args}
			/>
		</ClientOnly>
	</div>
);
GeolocateExample.storyName = 'Geolocate Control';

export const SearchExample = (args: Partial<MapProps>) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='city-map'
				center={mapCenters['city-map']}
				zoom={mapZooms['city-map']}
				markers={mapMarkers['city-map']}
				searchControl
				{...args}
			/>
		</ClientOnly>
	</div>
);
SearchExample.storyName = 'Search Control';

export const AccessibilityExample = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<ClientOnly>
			<Map
				kind='city-map'
				center={mapCenters['city-map']}
				zoom={mapZooms['city-map']}
				markers={mapMarkers['city-map']}
				ariaLabel='Accessible City Map'
				keyboardNavigation
				{...args}
			/>
		</ClientOnly>
	</div>
);
AccessibilityExample.storyName = 'Accessibility Features';

export const WeatherTrafficOverlayExample = (
	args: Partial<MapProps>
) => {
	const [weatherEnabled, setWeatherEnabled] =
		useState(true);
	const [trafficEnabled, setTrafficEnabled] =
		useState(false);
	return (
		<div style={{ height: 400 }}>
			<ClientOnly>
				<Map
					kind='city-map'
					center={mapCenters['city-map']}
					zoom={mapZooms['city-map']}
					markers={mapMarkers['city-map']}
					weatherLayers={weatherEnabled}
					trafficLayers={trafficEnabled}
					onToggleWeather={setWeatherEnabled}
					weatherEnabled={weatherEnabled}
					onToggleTraffic={setTrafficEnabled}
					trafficEnabled={trafficEnabled}
					{...args}
				/>
			</ClientOnly>
		</div>
	);
};
WeatherTrafficOverlayExample.storyName =
	'Weather & Traffic Overlays';

export const MinimapKeyNavigationExample = (
	args: Partial<MapProps>
) => {
	const [selectedKeyItem, setSelectedKeyItem] =
		useState('nyc');
	const keyItems = [
		{ id: 'nyc', label: 'New York City' },
		{ id: 'tokyo', label: 'Tokyo' },
		{ id: 'paris', label: 'Paris' },
	];
	return (
		<div style={{ height: 400 }}>
			<ClientOnly>
				<Map
					kind='world-map'
					center={mapCenters['world-map']}
					zoom={mapZooms['world-map']}
					markers={mapMarkers['world-map']}
					showMinimap
					keyItems={keyItems}
					onKeyItemSelect={setSelectedKeyItem}
					selectedKeyItem={selectedKeyItem}
					ariaLabel='World Map with Key Navigation'
					{...args}
				/>
			</ClientOnly>
		</div>
	);
};
MinimapKeyNavigationExample.storyName =
	'Minimap & Key Navigation';

// Overlay stories for explicit visual regression and documentation
export const CompassOverlayStory = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<Map
			kind='city-map'
			center={{ lat: 48.8566, lng: 2.3522 }}
			zoom={13}
			{...args}
		>
			<CompassOverlay />
		</Map>
	</div>
);
CompassOverlayStory.storyName = 'Compass Overlay';

export const GridOverlayStory = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<Map
			kind='city-map'
			center={{ lat: 48.8566, lng: 2.3522 }}
			zoom={13}
			{...args}
		>
			<GridOverlay />
		</Map>
	</div>
);
GridOverlayStory.storyName = 'Grid Overlay';

export const FogOfWarOverlayStory = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<Map
			kind='city-map'
			center={{ lat: 48.8566, lng: 2.3522 }}
			zoom={13}
			{...args}
		>
			<FogOfWarOverlay />
		</Map>
	</div>
);
FogOfWarOverlayStory.storyName = 'Fog Of War Overlay';

export const MinimapOverlayStory = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<Map
			kind='city-map'
			center={{ lat: 48.8566, lng: 2.3522 }}
			zoom={13}
			{...args}
		>
			<MinimapOverlay />
		</Map>
	</div>
);
MinimapOverlayStory.storyName = 'Minimap Overlay';

export const CoordinatesOverlayStory = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<Map
			kind='city-map'
			center={{ lat: 48.8566, lng: 2.3522 }}
			zoom={13}
			{...args}
		>
			<CoordinatesOverlay />
		</Map>
	</div>
);
CoordinatesOverlayStory.storyName = 'Coordinates Overlay';

export const MapCustomChildrenStory = (
	args: Partial<MapProps>
) => (
	<div style={{ height: 400 }}>
		<Map
			kind='city-map'
			center={{ lat: 48.8566, lng: 2.3522 }}
			zoom={13}
			{...args}
		>
			<MapCustomChildren>
				<div
					style={{
						position: 'absolute',
						top: 20,
						left: 20,
						background: 'rgba(0,0,0,0.7)',
						color: '#fff',
						padding: 8,
						borderRadius: 4,
					}}
				>
					Custom Overlay Content
				</div>
			</MapCustomChildren>
		</Map>
	</div>
);
MapCustomChildrenStory.storyName = 'Map Custom Children';

/**
 * Visually rich showcase story for Map: demonstrates all overlays, controls, markers, regions, and custom children.
 */
export const ShowcaseAllFeatures = () => {
	const [zoom, setZoom] = useState(3);
	const [center, setCenter] = useState({ lat: 40, lng: 0 });
	const regionPolygon = [
		{ lat: 45, lng: -10 },
		{ lat: 50, lng: 10 },
		{ lat: 40, lng: 30 },
		{ lat: 35, lng: 10 },
		{ lat: 38, lng: -10 },
	];
	const markers = [
		{
			id: 'nyc',
			position: { lat: 40.7128, lng: -74.006 },
			title: 'New York City',
			color: '#2563eb',
		},
		{
			id: 'paris',
			position: { lat: 48.8566, lng: 2.3522 },
			title: 'Paris',
			color: '#f59e42',
		},
		{
			id: 'tokyo',
			position: { lat: 35.6895, lng: 139.6917 },
			title: 'Tokyo',
			color: '#10b981',
		},
		{
			id: 'custom',
			position: { lat: 45, lng: 10 },
			title: 'Custom Marker',
			icon: <span style={{ fontSize: 20 }}>⭐️</span>,
		},
	];
	const regions = [
		{
			id: 'region1',
			coordinates: regionPolygon,
			title: 'Demo Region',
			color: '#2563eb', // border color
			strokeWidth: 2,
			fillColor: 'rgba(37,99,235,0.2)',
			fillOpacity: 0.5,
		},
	];
	return (
		<div
			style={{
				width: '100%',
				maxWidth: 900,
				height: 540,
				margin: '0 auto',
				background:
					'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
				borderRadius: 24,
				boxShadow: '0 6px 32px 0 #2563eb22',
				padding: 24,
				display: 'flex',
				flexDirection: 'column',
				gap: 16,
			}}
		>
			<div
				style={{
					fontWeight: 700,
					fontSize: 22,
					color: '#2563eb',
					marginBottom: 8,
				}}
			>
				🌍 Map Showcase: All Features
			</div>
			<Map
				kind='world-map'
				center={center}
				zoom={zoom}
				minZoom={2}
				maxZoom={8}
				style={{
					height: 420,
					borderRadius: 18,
					boxShadow: '0 2px 12px 0 #2563eb18',
				}}
				markers={markers}
				regions={regions}
				showZoomControls
				showAttribution={false}
			>
				{/* Overlays */}
				<CompassOverlay />
				<GridOverlay />
				<FogOfWarOverlay />
				<MinimapOverlay />
				<CoordinatesOverlay />
				{/* Custom children */}
				<MapCustomChildren>
					<div
						style={{
							position: 'absolute',
							top: 24,
							right: 24,
							background: '#fff',
							borderRadius: 8,
							boxShadow: '0 1px 6px 0 #2563eb22',
							padding: '6px 16px',
							fontWeight: 600,
							color: '#2563eb',
							zIndex: 10,
						}}
					>
						Custom Content
					</div>
				</MapCustomChildren>
			</Map>
			<div
				style={{
					fontSize: 15,
					color: '#64748b',
					marginTop: 8,
				}}
			>
				Features: Overlays (Compass, Grid, Fog of War,
				Minimap, Coordinates), Custom Children, Markers,
				Regions, Controls
			</div>
		</div>
	);
};
ShowcaseAllFeatures.storyName = 'Showcase: All Features';
ShowcaseAllFeatures.parameters = {
	layout: 'centered',
	docs: {
		storyDescription:
			'A visually rich demonstration of all Map features: overlays, controls, markers, regions, and custom children.',
	},
};
