import { useMemo } from 'react';

/**
 * Returns the context value for Map plugins/children.
 */
export function useMapContextValue({
	contextValue,
	currentCenter,
	currentZoom,
	finalConfig,
	mapCore,
	onEvent,
	setSearchTerm,
	setFocusedKeyIndex,
	minimapAnnouncement,
	setMinimapAnnouncement,
}: any) {
	return useMemo(
		() =>
			contextValue || {
				center: currentCenter,
				zoom: currentZoom,
				finalConfig,
				mapCore,
				onEvent,
				setSearchTerm,
				setFocusedKeyIndex,
				minimapAnnouncement,
				setMinimapAnnouncement,
			},
		[
			contextValue,
			currentCenter,
			currentZoom,
			finalConfig,
			mapCore,
			onEvent,
			minimapAnnouncement,
		]
	);
}
