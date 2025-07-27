import React, {
	useRef,
	useEffect,
	useCallback,
	useState,
} from 'react';
import { useMap } from 'react-leaflet';

/**
 * CanvasOverlayProps
 * @description Highly configurable canvas overlay for map visualizations.
 * @prop render - Render callback for drawing on canvas.
 * @prop bounds - Canvas bounds in map coordinates.
 * @prop zIndex - Stacking order of the overlay.
 * @prop opacity - Canvas opacity (0-1).
 * @prop blendMode - CSS blend mode for compositing.
 * @prop className - Custom class for the canvas element.
 * @prop style - Inline style for the canvas element.
 * @prop onClick - Click handler for interactivity.
 * @prop ariaLabel - Accessible label for the canvas overlay.
 * @prop visible - If false, overlay is hidden.
 * @prop theme - Theme object or string for CSS variables.
 * @prop animationClass - Custom animation class for appearance/disappearance.
 * @prop onFocus - Focus event handler for accessibility.
 * @prop onBlur - Blur event handler for accessibility.
 * @prop onHover - Mouse over event handler for interactivity.
 * @prop children - Custom slot-based content to render above the canvas.
 */
export interface CanvasOverlayProps {
	render: (ctx: CanvasRenderingContext2D, map: any) => void;
	bounds: [[number, number], [number, number]];
	zIndex?: number;
	opacity?: number;
	blendMode?: React.CSSProperties['mixBlendMode'];
	className?: string;
	style?: React.CSSProperties;
	onClick?: (
		e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
	) => void;
	ariaLabel?: string;
	visible?: boolean;
	theme?: string | object;
	animationClass?: string;
	onFocus?: React.FocusEventHandler<HTMLCanvasElement>;
	onBlur?: React.FocusEventHandler<HTMLCanvasElement>;
	onHover?: React.MouseEventHandler<HTMLCanvasElement>;
	children?: React.ReactNode;
}

const CanvasOverlay = React.forwardRef<
	HTMLCanvasElement,
	CanvasOverlayProps
>(
	(
		{
			render,
			bounds,
			zIndex = 1,
			opacity = 1,
			blendMode,
			className = '',
			style = {},
			onClick,
			ariaLabel = 'Map canvas overlay',
			visible = true,
			theme,
			animationClass = '',
			onFocus,
			onBlur,
			onHover,
			children,
		},
		ref
	) => {
		const map = useMap();
		const canvasRef = useRef<HTMLCanvasElement | null>(
			null
		);
		const [mounted, setMounted] = useState(false);

		// Attach to ref if provided
		useEffect(() => {
			if (ref && canvasRef.current) {
				if (typeof ref === 'function')
					ref(canvasRef.current);
				else
					(
						ref as React.MutableRefObject<HTMLCanvasElement | null>
					).current = canvasRef.current;
			}
		}, [ref]);

		// Theming: set CSS variables for light/dark/auto
		useEffect(() => {
			if (!canvasRef.current) return;
			const el = canvasRef.current;
			let isDark = false;
			if (typeof theme === 'string' && theme === 'dark')
				isDark = true;
			else if (theme === 'auto' || !theme) {
				isDark =
					window.matchMedia &&
					window.matchMedia('(prefers-color-scheme: dark)')
						.matches;
			}
			el.style.setProperty(
				'--canvas-overlay-bg',
				isDark ?
					'rgba(34,34,34,0.92)'
				:	'rgba(255,255,255,0.85)'
			);
			el.style.setProperty(
				'--canvas-overlay-shadow',
				isDark ? '0 2px 8px #0008' : '0 2px 8px #0001'
			);
			el.style.setProperty(
				'--canvas-overlay-focus',
				isDark ? '0 0 0 2px #fff8' : '0 0 0 2px #2224'
			);
		}, [theme, canvasRef.current]);

		// Dynamic canvas overlay logic (redraw on map move/zoom)
		useEffect(() => {
			if (
				!map ||
				typeof window === 'undefined' ||
				!window.L ||
				!(window.L as any).canvasOverlay
			)
				return;
			const leafletCanvasOverlay = (window.L as any)
				.canvasOverlay;
			if (!leafletCanvasOverlay) return;
			const overlay = leafletCanvasOverlay(
				(
					ctx: CanvasRenderingContext2D,
					leafletMap: any
				) => {
					if (canvasRef.current) {
						canvasRef.current.style.opacity =
							String(opacity);
						if (blendMode)
							canvasRef.current.style.mixBlendMode =
								blendMode;
					}
					render(ctx, leafletMap);
				},
				bounds,
				{ zIndex }
			).addTo(map);
			// Redraw on map move/zoom
			map.on(
				'move zoom',
				() => overlay.redraw && overlay.redraw()
			);
			return () => {
				map.off(
					'move zoom',
					() => overlay.redraw && overlay.redraw()
				);
				map.removeLayer(overlay);
			};
		}, [map, render, bounds, zIndex, opacity, blendMode]);

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

		// Keyboard accessibility: ESC to blur, focus ring
		const handleKeyDown = useCallback(
			(e: React.KeyboardEvent<HTMLCanvasElement>) => {
				if (e.key === 'Escape') {
					(e.target as HTMLCanvasElement).blur();
				}
			},
			[]
		);

		if (!mounted) return null;

		return (
			<div style={{ position: 'relative', zIndex }}>
				<canvas
					ref={canvasRef}
					className={[
						'map__canvas-overlay',
						animationClass,
						className,
						visible ?
							'map__canvas-overlay--visible'
						:	'map__canvas-overlay--hidden',
					]
						.filter(Boolean)
						.join(' ')}
					style={{
						opacity,
						mixBlendMode: blendMode,
						pointerEvents: onClick ? 'auto' : 'none',
						zIndex,
						background: 'var(--canvas-overlay-bg)',
						boxShadow: 'var(--canvas-overlay-shadow)',
						outline: 'none',
						transition: 'opacity 0.3s, box-shadow 0.3s',
						...((typeof theme === 'object' && theme) || {}),
						...style,
					}}
					tabIndex={onClick ? 0 : -1}
					aria-label={ariaLabel}
					onClick={onClick}
					onKeyDown={handleKeyDown}
					onFocus={
						onFocus ||
						((e) =>
							(e.currentTarget.style.boxShadow =
								'var(--canvas-overlay-focus)'))
					}
					onBlur={
						onBlur ||
						((e) =>
							(e.currentTarget.style.boxShadow =
								'var(--canvas-overlay-shadow)'))
					}
					onMouseOver={onHover}
					role='img'
					data-theme={
						typeof theme === 'string' ? theme : undefined
					}
				/>
				{children && (
					<div
						className='map__canvas-overlay-children'
						style={{
							position: 'absolute',
							inset: 0,
							pointerEvents: 'none',
						}}
					>
						{children}
					</div>
				)}
			</div>
		);
	}
);

export default CanvasOverlay;
