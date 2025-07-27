// Utility functions for Map component
import L from 'leaflet';
import { MapConfiguration } from '../configurations';
import type { ReactNode } from 'react';

/**
 * Returns a custom Leaflet marker icon.
 * @param icon Icon as string or ReactNode.
 * @param color CSS color string.
 */
export const getMarkerIcon = (
	icon?: ReactNode,
	color?: string
) => {
	if (typeof icon === 'string' && icon.trim() !== '') {
		return new L.DivIcon({
			html: `<span style="font-size: 1.5em; color: ${color || 'inherit'}">${icon}</span>`,
		});
	}
	return new L.DivIcon({
		html: `<span style="font-size: 1.5em; color: ${color || 'inherit'}">📍</span>`,
	});
};

/**
 * Returns a tile layer URL for a given map variant.
 * @param variant Map variant string.
 */
export const getTileLayerUrl = (variant: string) => {
	switch (variant) {
		case 'satellite':
			return 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
		case 'terrain':
			return 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
		case 'dark':
			return 'https://tiles.stadiamaps.com/tiles/alidade_dark/{z}/{x}/{y}{r}.png';
		case 'light':
			return 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png';
		case 'gaming':
			return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
		default:
			return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	}
};

/**
 * Generates a color string from a region or marker type.
 * @param type Region or marker type.
 * @param theme Optional theme ('light' | 'dark').
 */
export function getRegionColor(
	type: string,
	theme: 'light' | 'dark' = 'light'
): string {
	const palette: Record<string, string> =
		theme === 'dark' ?
			{
				default: '#4fd1c5',
				danger: '#f56565',
				safe: '#68d391',
				neutral: '#a0aec0',
			}
		:	{
				default: '#3182ce',
				danger: '#e53e3e',
				safe: '#38a169',
				neutral: '#718096',
			};
	return palette[type] || palette.default;
}

/**
 * Generates a region icon based on type.
 * @param type Region type.
 * @returns SVG string or ReactNode.
 */
export function getRegionIcon(type: string): ReactNode {
	switch (type) {
		case 'danger':
			return '⚠️';
		case 'safe':
			return '✅';
		case 'neutral':
			return '🔲';
		default:
			return '📍';
	}
}

/**
 * Generates a marker icon color based on marker type and theme.
 * @param type Marker type.
 * @param theme Optional theme.
 */
export function getMarkerColor(
	type: string,
	theme: 'light' | 'dark' = 'light'
): string {
	const palette: Record<string, string> =
		theme === 'dark' ?
			{
				default: '#fbbf24',
				player: '#38bdf8',
				landmark: '#6366f1',
				danger: '#f87171',
			}
		:	{
				default: '#3182ce',
				player: '#60a5fa',
				landmark: '#6366f1',
				danger: '#e53e3e',
			};
	return palette[type] || palette.default;
}

/**
 * Returns a localized label for a marker or region.
 * @param key Label key.
 * @param locale Optional locale string.
 */
export function getLocalizedLabel(
	key: string,
	locale: string = 'en'
): string {
	const labels: Record<string, Record<string, string>> = {
		en: {
			player: 'Player',
			landmark: 'Landmark',
			danger: 'Danger Zone',
			safe: 'Safe Zone',
			neutral: 'Neutral Area',
			default: 'Location',
		},
		es: {
			player: 'Jugador',
			landmark: 'Punto de referencia',
			danger: 'Zona de peligro',
			safe: 'Zona segura',
			neutral: 'Área neutral',
			default: 'Ubicación',
		},
		// Add more locales as needed
	};
	return (
		labels[locale]?.[key] ||
		labels['en'][key] ||
		labels['en'].default
	);
}

/**
 * Generates a region shape (polygon or circle) for a map.
 * @param type Shape type ('circle' | 'polygon').
 * @param center Center coordinates.
 * @param radiusOrPoints Radius (for circle) or points array (for polygon).
 */
export function getRegionShape(
	type: 'circle' | 'polygon',
	center: [number, number],
	radiusOrPoints: number | Array<[number, number]>
) {
	if (type === 'circle') {
		return L.circle(center, {
			radius: radiusOrPoints as number,
		});
	}
	if (type === 'polygon') {
		return L.polygon(
			radiusOrPoints as Array<[number, number]>
		);
	}
	return null;
}
