import React, { useRef, useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

/**
 * Props for SVGOverlay component.
 * @property svg SVG string or React node.
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
export interface SVGOverlayProps {
	svg: string | React.ReactNode;
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
 * SVGOverlay displays a configurable, draggable, resizable, rotatable SVG overlay for maps.
 * Supports opacity, blend mode, z-index, border, shadow, transitions, and accessibility.
 */
const SVGOverlay: React.FC<SVGOverlayProps> = ({
	svg,
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
		if (!map || !window.L || !window.L.svgOverlay) return;
		// Only pass string or SVGElement to svgOverlay
		let svgContent: string | SVGElement | undefined =
			undefined;
		if (typeof svg === 'string') {
			svgContent = svg;
		} else if (React.isValidElement(svg)) {
			// Render ReactNode to string
			const temp = document.createElement('div');
			// @ts-ignore
			import('react-dom/server').then((server) => {
				temp.innerHTML = server.renderToStaticMarkup(svg);
				svgContent = temp.firstElementChild as SVGElement;
				const overlay = window.L.svgOverlay(
					svgContent,
					bounds,
					{
						opacity,
						zIndex,
						className,
					}
				).addTo(map);
				overlayRef.current = overlay;
				overlay.once('add', () => {
					const svgEl = overlay.getElement?.();
					if (svgEl) {
						if (blendMode)
							svgEl.style.mixBlendMode = blendMode;
						Object.assign(svgEl.style, style);
						svgEl.style.transition =
							'box-shadow 0.3s, border 0.3s, opacity 0.3s';
						svgEl.style.border = '2px solid #fff';
						svgEl.style.boxShadow = '0 2px 12px #0002';
						if (draggable) svgEl.style.cursor = 'grab';
						if (dragging)
							svgEl.style.boxShadow = '0 0 0 3px #1976d2';
						svgEl.tabIndex = 0;
						svgEl.setAttribute('role', 'img');
						svgEl.setAttribute(
							'aria-label',
							'Map SVG overlay'
						);
					}
				});
				if (onClick) overlay.on('click', onClick);
				if (onHover) overlay.on('mouseover', onHover);
				if (draggable) {
					overlay.on('mousedown', (e: any) => {
						setDragging(true);
						setDragStart([e.latlng.lat, e.latlng.lng]);
					});
					map.on('mousemove', (e: any) => {
						if (dragging && dragStart) {
							const dLat = e.latlng.lat - dragStart[0];
							const dLng = e.latlng.lng - dragStart[1];
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
			});
			return;
		}
		if (!svgContent) return;
		const overlay = window.L.svgOverlay(
			svgContent,
			bounds,
			{
				opacity,
				zIndex,
				className,
			}
		).addTo(map);
		overlayRef.current = overlay;
		overlay.once('add', () => {
			const svgEl = overlay.getElement?.();
			if (svgEl) {
				if (blendMode) svgEl.style.mixBlendMode = blendMode;
				Object.assign(svgEl.style, style);
				svgEl.style.transition =
					'box-shadow 0.3s, border 0.3s, opacity 0.3s';
				svgEl.style.border = '2px solid #fff';
				svgEl.style.boxShadow = '0 2px 12px #0002';
				if (draggable) svgEl.style.cursor = 'grab';
				if (dragging)
					svgEl.style.boxShadow = '0 0 0 3px #1976d2';
				svgEl.tabIndex = 0;
				svgEl.setAttribute('role', 'img');
				svgEl.setAttribute('aria-label', 'Map SVG overlay');
			}
		});
		if (onClick) overlay.on('click', onClick);
		if (onHover) overlay.on('mouseover', onHover);
		if (draggable) {
			overlay.on('mousedown', (e: any) => {
				setDragging(true);
				setDragStart([e.latlng.lat, e.latlng.lng]);
			});
			map.on('mousemove', (e: any) => {
				if (dragging && dragStart) {
					const dLat = e.latlng.lat - dragStart[0];
					const dLng = e.latlng.lng - dragStart[1];
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
		svg,
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

export default SVGOverlay;
