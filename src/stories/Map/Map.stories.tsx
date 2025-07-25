import React, { useEffect, useState } from 'react';
import {
	Map,
	MapKind,
	MapProps,
} from '../../components/Map';
import 'leaflet/dist/leaflet.css';
import { commonDecorators } from '../config/decorators';

const meta = {
	title: 'Map/Map',
	component: Map,
	decorators: commonDecorators,
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
export default meta;

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
