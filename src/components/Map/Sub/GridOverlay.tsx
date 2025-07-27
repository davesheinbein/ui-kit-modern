import React, { useEffect, useRef, useState } from 'react';
import type {
	CSSProperties,
	ReactNode,
	KeyboardEvent,
} from 'react';

/**
 * Position options for overlay placement.
 */
export type OverlayPosition =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right';

/**
 * Theme options for overlay appearance.
 */
export type OverlayTheme = 'light' | 'dark' | 'auto';

/**
 * Props for GridOverlay component.
 * @property position Where to position the overlay.
 * @property visible Whether the overlay is visible.
 * @property theme Theme for the overlay (light, dark, auto).
 * @property className Additional className for the overlay.
 * @property style Inline style for the overlay.
 * @property gridSize Number of rows/columns in the grid.
 * @property gridColor Grid line color (overrides theme).
 * @property showLabels Show grid labels (top/left).
 * @property labelRenderer Custom label renderer for grid labels.
 * @property animate Animate grid appearance/disappearance.
 * @property ariaLabel Optional ARIA label for accessibility.
 * @property labelColor Color for grid labels (CSS variable fallback).
 * @property onCellFocus Optional callback when a grid cell is focused (for accessibility).
 * @property customCellRenderer Optional custom renderer for grid cells (slot-like).
 * @property children Slot-based custom content inside overlay.
 */
export interface GridOverlayProps {
	position?: OverlayPosition;
	visible?: boolean;
	theme?: OverlayTheme;
	className?: string;
	style?: CSSProperties;
	gridSize?: number;
	gridColor?: string;
	showLabels?: boolean;
	labelRenderer?: (row: number, col: number) => ReactNode;
	animate?: boolean;
	ariaLabel?: string;
	labelColor?: string;
	onCellFocus?: (row: number, col: number) => void;
	customCellRenderer?: (
		row: number,
		col: number
	) => ReactNode;
	children?: ReactNode;
}

/**
 * GridOverlay displays a configurable, theme-aware, accessible grid overlay for map UIs.
 * Supports theming, animation, custom grid size/color, custom cell/label renderers, slot-based content, and accessibility.
 */
const GridOverlay: React.FC<GridOverlayProps> = ({
	position = 'top-left',
	visible = true,
	theme = 'auto',
	className = '',
	style = {},
	gridSize = 10,
	gridColor,
	showLabels = false,
	labelRenderer,
	animate = true,
	ariaLabel = 'Grid overlay',
	labelColor,
	onCellFocus,
	customCellRenderer,
	children,
}) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const [mounted, setMounted] = useState(false);
	// CSS variable fallback for theming
	const resolvedGridColor =
		gridColor || 'var(--map-grid-color, rgba(0,0,0,0.2))';
	const resolvedLabelColor =
		labelColor ||
		'var(--map-grid-label-color, rgba(0,0,0,0.5))';

	// Mount animation
	useEffect(() => {
		if (visible) setMounted(true);
		else {
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
			'--map-grid-color',
			isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.2)'
		);
		el.style.setProperty(
			'--map-grid-label-color',
			isDark ? '#f3f3f3' : '#222'
		);
		el.style.setProperty(
			'--map-grid-bg',
			isDark ?
				'rgba(34,34,34,0.92)'
			:	'rgba(255,255,255,0.85)'
		);
		el.style.setProperty('--map-grid-radius', '8px');
		el.style.setProperty(
			'--map-grid-shadow',
			isDark ? '0 2px 8px #0008' : '0 2px 8px #0001'
		);
		el.style.setProperty(
			'--map-grid-focus',
			isDark ? '0 0 0 2px #fff8' : '0 0 0 2px #2224'
		);
	}, [theme, overlayRef.current]);

	// Keyboard navigation: allow tabbing through grid cells if customCellRenderer is provided
	const handleKeyDown = (
		e: KeyboardEvent<HTMLDivElement>
	) => {
		if (!customCellRenderer) return;
		const total = gridSize * gridSize;
		const active = document.activeElement as HTMLElement;
		if (!active || !active.dataset.gridIndex) return;
		let idx = parseInt(active.dataset.gridIndex, 10);
		if (e.key === 'ArrowRight') idx = (idx + 1) % total;
		else if (e.key === 'ArrowLeft')
			idx = (idx - 1 + total) % total;
		else if (e.key === 'ArrowDown')
			idx = (idx + gridSize) % total;
		else if (e.key === 'ArrowUp')
			idx = (idx - gridSize + total) % total;
		else if (e.key === 'Escape') {
			active.blur();
			return;
		} else return;
		e.preventDefault();
		const next =
			overlayRef.current?.querySelector<HTMLElement>(
				`[data-grid-index='${idx}']`
			);
		next?.focus();
		if (onCellFocus) {
			const row = Math.floor(idx / gridSize);
			const col = idx % gridSize;
			onCellFocus(row, col);
		}
	};

	// Compose overlay classes
	const overlayClass = [
		'map__grid-overlay',
		`map__grid-overlay--${position}`,
		theme !== 'auto' ? `map__grid-overlay--${theme}` : '',
		animate ? 'map__grid-overlay--animate' : '',
		visible ?
			'map__grid-overlay--visible'
		:	'map__grid-overlay--hidden',
		className,
	]
		.filter(Boolean)
		.join(' ');

	// Render grid lines and labels
	const lines: ReactNode[] = [];
	const labels: ReactNode[] = [];
	for (let i = 1; i < gridSize; i++) {
		// Vertical lines
		lines.push(
			<line
				key={`v-${i}`}
				x1={`${(i * 100) / gridSize}%`}
				y1='0%'
				x2={`${(i * 100) / gridSize}%`}
				y2='100%'
				stroke={resolvedGridColor}
				strokeWidth={1}
			/>
		);
		// Horizontal lines
		lines.push(
			<line
				key={`h-${i}`}
				x1='0%'
				y1={`${(i * 100) / gridSize}%`}
				x2='100%'
				y2={`${(i * 100) / gridSize}%`}
				stroke={resolvedGridColor}
				strokeWidth={1}
			/>
		);
		if (showLabels) {
			// Top labels
			labels.push(
				<text
					key={`label-top-${i}`}
					x={`${(i * 100) / gridSize}%`}
					y='10'
					fontSize='10'
					fill={resolvedLabelColor}
					textAnchor='middle'
				>
					{labelRenderer ? labelRenderer(0, i) : i}
				</text>
			);
			// Left labels
			labels.push(
				<text
					key={`label-left-${i}`}
					x='10'
					y={`${(i * 100) / gridSize}%`}
					fontSize='10'
					fill={resolvedLabelColor}
					textAnchor='start'
					alignmentBaseline='middle'
				>
					{labelRenderer ? labelRenderer(i, 0) : i}
				</text>
			);
		}
	}

	// Render custom cell content if provided
	let customCells: ReactNode = null;
	if (customCellRenderer) {
		const cells: ReactNode[] = [];
		for (let row = 0; row < gridSize; row++) {
			for (let col = 0; col < gridSize; col++) {
				const idx = row * gridSize + col;
				cells.push(
					<div
						key={`cell-${row}-${col}`}
						className='map__grid-overlay__cell'
						tabIndex={0}
						data-grid-index={idx}
						style={{
							position: 'absolute',
							left: `${(col * 100) / gridSize}%`,
							top: `${(row * 100) / gridSize}%`,
							width: `${100 / gridSize}%`,
							height: `${100 / gridSize}%`,
							outline: 'none',
							background: 'none',
						}}
						aria-label={`Grid cell ${row + 1}, ${col + 1}`}
						role='gridcell'
						onFocus={(e) =>
							(e.currentTarget.style.boxShadow =
								'var(--map-grid-focus)')
						}
						onBlur={(e) =>
							(e.currentTarget.style.boxShadow = 'none')
						}
					>
						{customCellRenderer(row, col)}
					</div>
				);
			}
		}
		customCells = (
			<div
				className='map__grid-overlay__cells'
				style={{
					position: 'absolute',
					inset: 0,
					pointerEvents: 'none',
				}}
			>
				{cells}
			</div>
		);
	}

	if (!mounted) return null;

	return (
		<div
			ref={overlayRef}
			className={overlayClass}
			style={
				{
					...style,
					'background': 'var(--map-grid-bg)',
					'color': 'var(--map-grid-label-color)',
					'borderRadius': 'var(--map-grid-radius)',
					'boxShadow': 'var(--map-grid-shadow)',
					'outline': 'none',
					'transition': 'opacity 0.3s, transform 0.3s',
					'opacity': visible ? 1 : 0,
					'transform':
						visible ? 'translateY(0)' : 'translateY(10px)',
					'--map-grid-color': gridColor,
					'--map-grid-label-color': labelColor,
				} as CSSProperties
			}
			aria-label={ariaLabel}
			tabIndex={0}
			role='grid'
			onKeyDown={handleKeyDown}
			data-theme={theme}
			onFocus={(e) =>
				(e.currentTarget.style.boxShadow =
					'var(--map-grid-focus)')
			}
			onBlur={(e) =>
				(e.currentTarget.style.boxShadow =
					'var(--map-grid-shadow)')
			}
		>
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 100 100'
				className='map__grid-overlay__svg'
				aria-hidden={!!customCellRenderer}
			>
				{/* Border */}
				<rect
					x='0'
					y='0'
					width='100'
					height='100'
					fill='none'
					stroke={resolvedGridColor}
					strokeWidth={1.5}
				/>
				{/* Grid lines */}
				{lines}
				{/* Labels */}
				{labels}
			</svg>
			{customCells}
			{/* Slot-based custom content */}
			{children}
		</div>
	);
};

export default GridOverlay;
