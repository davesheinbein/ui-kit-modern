// src/components/Map/MapFactoryDRY.ts
import React from 'react';
import {
	MapConfiguration,
	getMapConfig,
	MapKind,
} from './MapConfigurations';
import { UnifiedMapProps } from './UnifiedMap';
import UnifiedMap from './UnifiedMap';

/**
 * Ultra-DRY Map Factory
 * Creates configured map components from configuration objects
 */
export class MapFactoryDRY {
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
	WorldMap: MapFactoryDRY.createFromKind('world-map'),
	RegionMap: MapFactoryDRY.createFromKind('region-map'),
	CityMap: MapFactoryDRY.createFromKind('city-map'),
	StreetMap: MapFactoryDRY.createFromKind('street-map'),
	SatelliteMap:
		MapFactoryDRY.createFromKind('satellite-map'),
	TerrainMap: MapFactoryDRY.createFromKind('terrain-map'),

	// Interactive maps
	InteractiveMap: MapFactoryDRY.createFromKind(
		'interactive-map'
	),
	GameMap: MapFactoryDRY.createFromKind('game-map'),
	FloorPlan: MapFactoryDRY.createFromKind('floor-plan'),
	CampusMap: MapFactoryDRY.createFromKind('campus-map'),

	// Markers and indicators
	LocationMarker: MapFactoryDRY.createFromKind(
		'location-marker'
	),
	RegionClaimMarker: MapFactoryDRY.createFromKind(
		'region-claim-marker'
	),
	PlayerPresenceIndicator: MapFactoryDRY.createFromKind(
		'player-presence-indicator'
	),
	POIMarker: MapFactoryDRY.createFromKind('poi-marker'),
	ClusterMarker: MapFactoryDRY.createFromKind(
		'cluster-marker'
	),

	// Game-specific
	TerritoryMap:
		MapFactoryDRY.createFromKind('territory-map'),
	BattleMap: MapFactoryDRY.createFromKind('battle-map'),
	ResourceMap: MapFactoryDRY.createFromKind('resource-map'),
	MiniMap: MapFactoryDRY.createFromKind('mini-map'),
	RadarView: MapFactoryDRY.createFromKind('radar-view'),
};
