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

export type { MapProps } from './Sub/types';
export { default as Map } from './Map';
export { getMapConfig } from './configurations';
