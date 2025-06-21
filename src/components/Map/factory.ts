// src/components/Map/MapFactory.ts
import React from 'react';
import {
	MapConfiguration,
	getMapConfig,
	MapKind,
} from './configurations';
import { UnifiedMapProps } from './UnifiedMap';
import UnifiedMap from './UnifiedMap';

/**
 * Factory Map Factory
 * Creates configured map components from configuration objects
 */
export class MapFactory {
	static create(
		config: MapConfiguration & Partial<UnifiedMapProps>
	) {
		return React.forwardRef<
			HTMLDivElement,
			Partial<UnifiedMapProps>
		>((props, ref) =>
			React.createElement(UnifiedMap, {
				ref,
				...config,
				...props,
			})
		);
	}

	static createFromKind(kind: MapKind) {
		const config = getMapConfig(kind);
		return this.create(config);
	}
}

// Pre-configured map components
export const MapComponents = {
	// Map views
	WorldMap: MapFactory.createFromKind('world-map'),
	RegionMap: MapFactory.createFromKind('region-map'),
	CityMap: MapFactory.createFromKind('city-map'),
	StreetMap: MapFactory.createFromKind('street-map'),
	SatelliteMap: MapFactory.createFromKind('satellite-map'),
	TerrainMap: MapFactory.createFromKind('terrain-map'),

	// Interactive maps
	InteractiveMap: MapFactory.createFromKind(
		'interactive-map'
	),
	GameMap: MapFactory.createFromKind('game-map'),
	FloorPlan: MapFactory.createFromKind('floor-plan'),
	CampusMap: MapFactory.createFromKind('campus-map'),

	// Markers and indicators
	LocationMarker: MapFactory.createFromKind(
		'location-marker'
	),
	RegionClaimMarker: MapFactory.createFromKind(
		'region-claim-marker'
	),
	PlayerPresenceIndicator: MapFactory.createFromKind(
		'player-presence-indicator'
	),
	POIMarker: MapFactory.createFromKind('poi-marker'),
	ClusterMarker: MapFactory.createFromKind(
		'cluster-marker'
	),

	// Game-specific
	TerritoryMap: MapFactory.createFromKind('territory-map'),
	BattleMap: MapFactory.createFromKind('battle-map'),
	ResourceMap: MapFactory.createFromKind('resource-map'),
	MiniMap: MapFactory.createFromKind('mini-map'),
	RadarView: MapFactory.createFromKind('radar-view'),
};
