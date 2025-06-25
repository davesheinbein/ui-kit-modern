import React, { useEffect, useState } from 'react';
import {
	Map,
	MapKind,
	MapProps,
} from '../../components/Map';
import 'leaflet/dist/leaflet.css';

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

// Example centers for each map kind
const mapCenters: Record<
	MapKind,
	{ lat: number; lng: number }
> = {
	'world-map': { lat: 20, lng: 0 },
	'region-map': { lat: 48.5, lng: 11.5 },
	'city-map': { lat: 48.8566, lng: 2.3522 },
	'street-map': { lat: 51.5079, lng: -0.0877 },
	'satellite-map': { lat: 36.1069, lng: -112.1129 },
	'terrain-map': { lat: 46.8182, lng: 8.2275 },
	'interactive-map': { lat: -33.8688, lng: 151.2093 },
	'game-map': { lat: 34.0522, lng: -118.2437 },
	'floor-plan': { lat: 0, lng: 0 },
	'campus-map': { lat: 37.4275, lng: -122.1697 },
	'location-marker': { lat: 51.5, lng: -0.09 },
	'region-claim-marker': { lat: 40, lng: -100 },
	'player-presence-indicator': { lat: 35, lng: 135 },
	'poi-marker': { lat: 48.8584, lng: 2.2945 },
	'cluster-marker': { lat: 40, lng: -75 },
	'territory-map': { lat: 55.3781, lng: -3.436 },
	'battle-map': { lat: 52.52, lng: 13.405 },
	'resource-map': { lat: 60, lng: 100 },
	'mini-map': { lat: 0, lng: 0 },
	'radar-view': { lat: 0, lng: 0 },
};

export default {
	title: 'Map/Map',
	component: Map,
	parameters: {
		docs: {
			description: {
				component: `
**Unified Map Component**  
All map types, variants, and features are supported via props.  
Usage: \`<Map {...props} />\`

**Visibility Note:**
- Leaflet CSS is imported at the top of this file.
- The map container must have an explicit height (e.g., 400px) to be visible.
				`,
			},
		},
	},
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
				zoom={12}
				center={mapCenters['city-map']}
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
