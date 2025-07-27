/**
 * useLeafletValues
 * Memoizes and returns Leaflet-compatible center/zoom values.
 * @param currentCenter MapCoordinate (lat/lng)
 * @param currentZoom number
 * @returns { leafletCenter, leafletZoom }
 */

import { MapCoordinate } from './types';
import { useMemo } from 'react';

export function useLeafletValues(
	currentCenter: MapCoordinate,
	currentZoom: number
) {
	return useMemo(() => {
		const leafletCenter: [number, number] = [
			currentCenter.lat,
			currentCenter.lng,
		];
		const leafletZoom: number = Number(currentZoom);
		return { leafletCenter, leafletZoom };
	}, [currentCenter, currentZoom]);
}
