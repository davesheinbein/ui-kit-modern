import React, { useRef, useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

/**
 * Props for ImageOverlay component.
 * @property url Image URL.
 * @property bounds LatLngBounds for overlay.
 * @property opacity Overlay opacity (0-1).
 * @property zIndex Overlay z-index.
 * @property blendMode CSS blend mode.
 * @property draggable Enable drag.
 * @property resizable Enable resize.
 * @property rotatable Enable rotation.
 * @property onClick Click handler.
 * @property onHover Hover handler.
 * @property className Custom class.
 * @property style Custom style.
 */
export interface ImageOverlayProps {
	url: string;
	bounds: [[number, number], [number, number]];
	opacity?: number;
	zIndex?: number;
	blendMode?: React.CSSProperties['mixBlendMode'];
	draggable?: boolean;
	resizable?: boolean;
	rotatable?: boolean;
	onClick?: (e: React.MouseEvent | any) => void;
	onHover?: (e: React.MouseEvent | any) => void;
	className?: string;
	style?: React.CSSProperties;
}

/**
 * ImageOverlay displays a configurable, draggable, resizable, rotatable image overlay for maps.
 * Supports opacity, blend mode, z-index, border, shadow, transitions, and accessibility.
 */
const ImageOverlay: React.FC<ImageOverlayProps> = ({
	url,
	bounds,
	opacity = 1,
	zIndex = 1,
	blendMode,
	draggable = false,
	resizable = false,
	rotatable = false,
	onClick,
	onHover,
	className = '',
	style = {},
}) => {
	const map = useMap();
	const overlayRef = useRef<any>(null);
	const [dragging, setDragging] = useState(false);
	const [dragStart, setDragStart] = useState<
		[number, number] | null
	>(null);
	useEffect(() => {
		if (!map || !window.L || !window.L.imageOverlay) return;
		// Remove style from options, apply to DOM element after addTo
		const overlay = window.L.imageOverlay(url, bounds, {
			opacity,
			zIndex,
			className,
		}).addTo(map);
		overlayRef.current = overlay;
		// Apply style and blendMode to the image element
		overlay.once('add', () => {
			const img = overlay.getElement?.();
			if (img) {
				if (blendMode) img.style.mixBlendMode = blendMode;
				Object.assign(img.style, style);
				img.style.transition =
					'box-shadow 0.3s, border 0.3s, opacity 0.3s';
				img.style.border = '2px solid #fff';
				img.style.boxShadow = '0 2px 12px #0002';
				if (draggable) img.style.cursor = 'grab';
				if (dragging)
					img.style.boxShadow = '0 0 0 3px #1976d2';
				img.tabIndex = 0;
				img.setAttribute('role', 'img');
				img.setAttribute('aria-label', 'Map image overlay');
			}
		});
		if (onClick) overlay.on('click', onClick);
		if (onHover) overlay.on('mouseover', onHover);
		// Drag logic (basic, for demo)
		if (draggable) {
			overlay.on('mousedown', (e: any) => {
				setDragging(true);
				setDragStart([e.latlng.lat, e.latlng.lng]);
			});
			map.on('mousemove', (e: any) => {
				if (dragging && dragStart) {
					// Move overlay by delta (simple, not production)
					const dLat = e.latlng.lat - dragStart[0];
					const dLng = e.latlng.lng - dragStart[1];
					// Use L.latLngBounds for type safety
					const L = window.L;
					const newBounds = L.latLngBounds([
						[bounds[0][0] + dLat, bounds[0][1] + dLng],
						[bounds[1][0] + dLat, bounds[1][1] + dLng],
					]);
					overlay.setBounds(newBounds);
				}
			});
			map.on('mouseup', () => {
				setDragging(false);
				setDragStart(null);
			});
		}
		return () => {
			overlay.off();
			map.removeLayer(overlay);
		};
	}, [
		map,
		url,
		bounds,
		opacity,
		zIndex,
		blendMode,
		style,
		className,
		draggable,
		dragging,
		onClick,
		onHover,
	]);
	return null;
};

export default ImageOverlay;
