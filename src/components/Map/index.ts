// src/components/Map/index.ts
export type {
	MapKind,
	MapVariant,
	MapSize,
	MapCoordinate,
	MapMarker,
	MapRegion,
	MapConfiguration,
} from './configurations';

export type { MapProps } from './Map';
export { default as Map } from './Map';
export { MapFactory, MapComponents } from './factory';
export { getMapConfig } from './configurations';
