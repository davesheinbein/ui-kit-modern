import React from 'react';
import { useMap } from 'react-leaflet';

/**
 * HeatmapOverlay
 * Renders one or more heatmap layers using the provided data and options.
 * Requires a heatmap plugin (e.g., leaflet.heat) to be installed and registered.
 *
 * @prop data Array of heatmap data points or array of arrays for multiple layers.
 * @prop radius Radius of each point (default 25).
 * @prop blur Amount of blur (default 15).
 * @prop gradient Color gradient (object or CSS variable fallback).
 * @prop opacity Opacity of the heatmap layer (default 1).
 * @prop interactive Whether the heatmap is interactive (receives pointer events).
 * @prop zIndex z-index for the overlay (default 400).
 * @prop blendMode CSS blend mode for the overlay.
 * @prop className Custom className for the overlay container.
 * @prop style Inline style for the overlay container.
 * @prop ariaLabel Optional ARIA label for accessibility.
 * @prop onClick Click event handler for the overlay.
 * @prop onHover Hover event handler for the overlay.
 * @prop children Custom renderers/slot-based content.
 */
export interface HeatmapOverlayProps {
	data:
		| Array<{ lat: number; lng: number; value: number }>
		| Array<
				Array<{ lat: number; lng: number; value: number }>
		  >;
	radius?: number;
	blur?: number;
	gradient?: Record<string, string>;
	opacity?: number;
	interactive?: boolean;
	zIndex?: number;
	blendMode?: React.CSSProperties['mixBlendMode'];
	options?: Record<string, any>;
	className?: string;
	style?: React.CSSProperties;
	ariaLabel?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	onHover?: React.MouseEventHandler<HTMLDivElement>;
	children?: React.ReactNode; // Slot-based custom overlays/content
}

const HeatmapOverlay: React.FC<HeatmapOverlayProps> = ({
	data,
	radius = 25,
	blur = 15,
	gradient,
	opacity = 1,
	interactive = false,
	zIndex = 400,
	blendMode,
	options = {},
	className = '',
	style = {},
	ariaLabel = 'Heatmap overlay',
	onClick,
	onHover,
	children,
}) => {
	const map = useMap();
	React.useEffect(() => {
		if (
			!map ||
			!(window.L as any) ||
			!(window.L as any).heatLayer
		)
			return;
		// Support multiple heatmap layers
		const layers: any[] = [];
		const dataLayers =
			Array.isArray(data[0]) ?
				(data as Array<
					Array<{ lat: number; lng: number; value: number }>
				>)
			:	[
					data as Array<{
						lat: number;
						lng: number;
						value: number;
					}>,
				];
		dataLayers.forEach((layerData, i) => {
			const points = layerData.map((d) => [
				d.lat,
				d.lng,
				d.value,
			]);
			// @ts-ignore
			const heat = (window.L as any)
				.heatLayer(points, {
					radius,
					blur,
					gradient: gradient || undefined,
					opacity,
					interactive,
					zIndex,
					...options,
				})
				.addTo(map);
			if (zIndex) heat.setZIndex(zIndex);
			layers.push(heat);
		});
		return () => {
			layers.forEach((layer) => map.removeLayer(layer));
		};
	}, [
		map,
		data,
		radius,
		blur,
		gradient,
		opacity,
		interactive,
		zIndex,
		options,
	]);

	// CSS variables for theming and dark mode
	const cssVars = {
		'--map-heatmap-radius': radius,
		'--map-heatmap-blur': blur,
		'--map-heatmap-opacity': opacity,
		...(gradient ?
			Object.fromEntries(
				Object.entries(gradient).map(([k, v]) => [
					`--map-heatmap-gradient-${k}`,
					v,
				])
			)
		:	{}),
		zIndex,
		'mixBlendMode': blendMode,
		...style,
	} as React.CSSProperties;

	// Optionally render a container for ARIA/keyboard if interactive or for custom content
	const handleFocus:
		| React.FocusEventHandler<HTMLDivElement>
		| undefined =
		onHover ?
			(e) => {
				// Optionally call onHover with a synthetic mouse event-like object
				// @ts-ignore
				onHover(e as any);
			}
		:	undefined;

	if (interactive || onClick || onHover || children) {
		return (
			<div
				className={`map__heatmap-overlay modern-heatmap-overlay ${className}`}
				style={cssVars}
				aria-label={ariaLabel}
				tabIndex={0}
				role='region'
				onClick={onClick}
				onMouseOver={onHover}
				onFocus={handleFocus}
				data-theme='light dark'
			>
				{/* Slot-based custom overlays/content */}
				{children}
			</div>
		);
	}
	return null;
};

export default HeatmapOverlay;
