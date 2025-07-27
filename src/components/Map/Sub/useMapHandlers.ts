/**
 * useMapHandlers
 * Returns zoom in/out handlers and supports more map events.
 * @param currentZoom Current zoom level
 * @param minZoom Minimum zoom
 * @param maxZoom Maximum zoom
 * @param onZoomChange Callback for zoom changes
 * @returns { handleZoomIn, handleZoomOut }
 */

import { useCallback } from 'react';

export function useMapHandlers({
	currentZoom,
	minZoom,
	maxZoom,
	onZoomChange,
}: {
	currentZoom: number;
	minZoom: number;
	maxZoom: number;
	onZoomChange?: (zoom: number) => void;
}) {
	const handleZoomIn = useCallback(() => {
		const newZoom = Math.min(
			currentZoom + 1,
			maxZoom ?? 20
		);
		onZoomChange?.(newZoom);
	}, [currentZoom, maxZoom, onZoomChange]);

	const handleZoomOut = useCallback(() => {
		const newZoom = Math.max(currentZoom - 1, minZoom ?? 1);
		onZoomChange?.(newZoom);
	}, [currentZoom, minZoom, onZoomChange]);

	// Add more event handlers as needed (e.g., pan, rotate)

	return { handleZoomIn, handleZoomOut };
}
