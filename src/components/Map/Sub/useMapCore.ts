/**
 * useMapCore
 * Core hook for map state/config, returns all derived state and event handlers.
 * @param props MapProps for the map instance.
 * @returns { mapComponentId, config, currentZoom, currentCenter, finalConfig }
 */
import { MapProps } from './types';
import { useMapState } from './MapStateManager';
import { useFinalMapConfig } from './useFinalMapConfig';

export function useMapCore(props: MapProps) {
	const { kind, componentId, zoom, center } = props;
	const {
		mapComponentId,
		config,
		currentZoom,
		currentCenter,
	} = useMapState({
		kind,
		componentId,
		zoom,
		center,
	});
	const finalConfig = useFinalMapConfig(props, config);
	return {
		mapComponentId,
		config,
		currentZoom,
		currentCenter,
		finalConfig,
	};
}
