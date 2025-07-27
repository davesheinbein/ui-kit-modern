import React, { useEffect, useRef, useState } from 'react';
import type {
	CSSProperties,
	ReactNode,
	KeyboardEvent,
} from 'react';

/**
 * Position options for overlay placement.
 */
export type CoordinatesOverlayPosition =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right';

/**
 * Theme options for overlay appearance.
 */
export type CoordinatesOverlayTheme =
	| 'light'
	| 'dark'
	| 'auto';

/**
 * Props for CoordinatesOverlay component.
 * @prop position - Where to position the overlay.
 * @prop visible - Whether the overlay is visible.
 * @prop theme - Theme for the overlay.
 * @prop className - Additional className for the overlay.
 * @prop style - Inline style for the overlay.
 * @prop showMouseCoordinates - Show mouse coordinates (updates on mouse move).
 * @prop showCenterCoordinates - Show map center coordinates (updates on move/zoom).
 * @prop renderCoordinates - Custom renderer for coordinates display.
 * @prop ariaLabel - Optional ARIA label for accessibility.
 * @prop icon - Optional custom icon or label slot.
 * @prop animationClass - Custom animation class for appearance/disappearance.
 * @prop onFocus - Focus event handler for accessibility.
 * @prop onBlur - Blur event handler for accessibility.
 * @prop onHover - Mouse over event handler for interactivity.
 * @prop children - Custom slot-based content to render inside the overlay.
 */
export interface CoordinatesOverlayProps {
	position?: CoordinatesOverlayPosition;
	visible?: boolean;
	theme?: CoordinatesOverlayTheme;
	className?: string;
	style?: CSSProperties;
	showMouseCoordinates?: boolean;
	showCenterCoordinates?: boolean;
	renderCoordinates?: (coords: {
		lat: number;
		lng: number;
		type: 'mouse' | 'center';
	}) => ReactNode;
	ariaLabel?: string;
	icon?: ReactNode;
	animationClass?: string;
	onFocus?: React.FocusEventHandler<HTMLDivElement>;
	onBlur?: React.FocusEventHandler<HTMLDivElement>;
	onHover?: React.MouseEventHandler<HTMLDivElement>;
	children?: React.ReactNode;
}

/**
 * CoordinatesOverlay displays map coordinates (mouse or center) in a configurable overlay.
 * Supports theming, accessibility, and custom rendering.
 */
const CoordinatesOverlay: React.FC<
	CoordinatesOverlayProps
> = ({
	position = 'bottom-right',
	visible = true,
	theme = 'auto',
	className = '',
	style = {},
	showMouseCoordinates = true,
	showCenterCoordinates = false,
	renderCoordinates,
	ariaLabel = 'Map coordinates',
	icon,
	animationClass = '',
	onFocus,
	onBlur,
	onHover,
	children,
}) => {
	// State for coordinates
	const [mouseCoords, setMouseCoords] = useState<{
		lat: number;
		lng: number;
	} | null>(null);
	const [centerCoords, setCenterCoords] = useState<{
		lat: number;
		lng: number;
	} | null>(null);
	const [mounted, setMounted] = useState(false);
	const overlayRef = useRef<HTMLDivElement>(null);

	// Effect: Listen for mousemove on map container
	useEffect(() => {
		if (!showMouseCoordinates) return;
		const mapEl =
			overlayRef.current?.closest('.leaflet-container') ||
			document.querySelector('.leaflet-container');
		if (!mapEl) return;
		const handleMouseMove = (e: Event) => {
			const mouseEvent = e as MouseEvent;
			// Try to get Leaflet map instance from DOM element or global
			let map: any = null;
			if ((mapEl as any)._leaflet_map) {
				map = (mapEl as any)._leaflet_map;
			} else if (
				typeof window !== 'undefined' &&
				(window as any).L &&
				(window as any).L.DomUtil &&
				(window as any).L.DomUtil.getMap
			) {
				map = (window as any).L.DomUtil.getMap(mapEl);
			}
			if (map && map.containerPointToLatLng) {
				const rect = mapEl.getBoundingClientRect();
				const point = {
					x: mouseEvent.clientX - rect.left,
					y: mouseEvent.clientY - rect.top,
				};
				const latlng = map.containerPointToLatLng(point);
				setMouseCoords({
					lat: latlng.lat,
					lng: latlng.lng,
				});
			}
		};
		mapEl.addEventListener('mousemove', handleMouseMove);
		return () =>
			mapEl.removeEventListener(
				'mousemove',
				handleMouseMove
			);
	}, [showMouseCoordinates]);

	// Effect: Listen for map move/zoom for center coordinates
	useEffect(() => {
		if (!showCenterCoordinates) return;
		const mapEl =
			overlayRef.current?.closest('.leaflet-container') ||
			document.querySelector('.leaflet-container');
		let map: any = null;
		if (mapEl && (mapEl as any)._leaflet_map) {
			map = (mapEl as any)._leaflet_map;
		} else if (
			typeof window !== 'undefined' &&
			(window as any).L &&
			(window as any).L.DomUtil &&
			(window as any).L.DomUtil.getMap
		) {
			map = (window as any).L.DomUtil.getMap(mapEl);
		}
		if (!map) return;
		const updateCenter = () => {
			const center = map.getCenter && map.getCenter();
			if (center)
				setCenterCoords({
					lat: center.lat,
					lng: center.lng,
				});
		};
		updateCenter();
		map.on && map.on('move zoom', updateCenter);
		return () => {
			map.off && map.off('move zoom', updateCenter);
		};
	}, [showCenterCoordinates]);

	// Mount animation
	useEffect(() => {
		if (visible) setMounted(true);
		else {
			// Delay unmount for animation
			const timeout = setTimeout(
				() => setMounted(false),
				300
			);
			return () => clearTimeout(timeout);
		}
	}, [visible]);

	// Theming: set CSS variables for light/dark/auto
	useEffect(() => {
		if (!overlayRef.current) return;
		const el = overlayRef.current;
		let isDark = false;
		if (theme === 'dark') isDark = true;
		else if (theme === 'auto') {
			isDark =
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)')
					.matches;
		}
		el.style.setProperty(
			'--coordinates-bg',
			isDark ?
				'rgba(34,34,34,0.92)'
			:	'rgba(255,255,255,0.85)'
		);
		el.style.setProperty(
			'--coordinates-color',
			isDark ? '#f3f3f3' : '#222'
		);
		el.style.setProperty('--coordinates-radius', '8px');
		el.style.setProperty(
			'--coordinates-shadow',
			isDark ? '0 2px 8px #0008' : '0 2px 8px #0001'
		);
		el.style.setProperty(
			'--coordinates-padding',
			'0.5em 1em'
		);
		el.style.setProperty(
			'--coordinates-focus',
			isDark ? '0 0 0 2px #fff8' : '0 0 0 2px #2224'
		);
	}, [theme, overlayRef.current]);

	// Keyboard accessibility: ESC to blur, focus ring
	const handleKeyDown = (
		e: KeyboardEvent<HTMLDivElement>
	) => {
		if (e.key === 'Escape') {
			(e.target as HTMLDivElement).blur();
		}
	};

	if (!mounted) return null;

	// Compose overlay classes
	const overlayClass = [
		'map__coordinates-overlay',
		`map__coordinates-overlay--${position}`,
		animationClass,
		theme !== 'auto' ?
			`map__coordinates-overlay--${theme}`
		:	'',
		'map__coordinates-animated',
		visible ?
			'map__coordinates-overlay--visible'
		:	'map__coordinates-overlay--hidden',
		className,
	]
		.filter(Boolean)
		.join(' ');

	// Format coordinates for display
	const formatCoords = (
		coords: { lat: number; lng: number } | null
	) =>
		coords ?
			`${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`
		:	'--, --';

	return (
		<div
			ref={overlayRef}
			className={overlayClass}
			style={{
				...style,
				transition: 'opacity 0.3s, transform 0.3s',
				opacity: visible ? 1 : 0,
				transform:
					visible ? 'translateY(0)' : 'translateY(10px)',
				background: 'var(--coordinates-bg)',
				color: 'var(--coordinates-color)',
				borderRadius: 'var(--coordinates-radius)',
				boxShadow: 'var(--coordinates-shadow)',
				padding: 'var(--coordinates-padding)',
				outline: 'none',
			}}
			aria-label={ariaLabel}
			tabIndex={0}
			role='status'
			aria-live='polite'
			onKeyDown={handleKeyDown}
			onFocus={
				onFocus ||
				((e) =>
					(e.currentTarget.style.boxShadow =
						'var(--coordinates-focus)'))
			}
			onBlur={
				onBlur ||
				((e) =>
					(e.currentTarget.style.boxShadow =
						'var(--coordinates-shadow)'))
			}
			onMouseOver={onHover}
		>
			{icon && (
				<span
					className='map__coordinates-icon'
					aria-hidden='true'
				>
					{icon}
				</span>
			)}
			{showMouseCoordinates &&
				mouseCoords &&
				(renderCoordinates ?
					renderCoordinates({
						...mouseCoords,
						type: 'mouse',
					})
				:	<div className='map__coordinates-overlay__row'>
						<span className='map__coordinates-overlay__label'>
							Mouse:
						</span>
						<span className='map__coordinates-overlay__value'>
							{formatCoords(mouseCoords)}
						</span>
					</div>)}
			{showCenterCoordinates &&
				centerCoords &&
				(renderCoordinates ?
					renderCoordinates({
						...centerCoords,
						type: 'center',
					})
				:	<div className='map__coordinates-overlay__row'>
						<span className='map__coordinates-overlay__label'>
							Center:
						</span>
						<span className='map__coordinates-overlay__value'>
							{formatCoords(centerCoords)}
						</span>
					</div>)}
			{!showMouseCoordinates && !showCenterCoordinates && (
				<div className='map__coordinates-overlay__row'>
					No coordinates selected
				</div>
			)}
			{children && (
				<div
					className='map__coordinates-overlay-children'
					style={{ marginTop: 8 }}
				>
					{children}
				</div>
			)}
		</div>
	);
};

export default CoordinatesOverlay;
