import React, {
	useRef,
	useState,
	useCallback,
} from 'react';
import type {
	CSSProperties,
	ReactNode,
	MouseEvent,
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
 * Props for MinimapOverlay component.
 * @property position Where to position the overlay.
 * @property visible Whether the overlay is visible.
 * @property theme Theme for the overlay (light, dark, auto).
 * @property className Additional className for the overlay.
 * @property style Inline style for the overlay.
 * @property interactive Whether the minimap is interactive (click/drag to move main map).
 * @property layers Custom minimap layers (e.g., overlays, markers).
 * @property borderColor Border color for the minimap (CSS variable fallback).
 * @property background Background for the minimap (CSS variable fallback).
 * @property onClick Click handler for the minimap.
 * @property onViewportChange Callback when minimap viewport changes.
 * @property ariaLabel Optional ARIA label for accessibility.
 * @property animate Animate minimap appearance/disappearance.
 * @property shadow Add shadow to minimap.
 * @property shape Shape of minimap (circle, square, rounded).
 * @property children Slot-based custom content inside overlay.
 */
export interface MinimapOverlayProps {
	position?: OverlayPosition;
	visible?: boolean;
	theme?: OverlayTheme;
	className?: string;
	style?: CSSProperties;
	interactive?: boolean;
	layers?: ReactNode;
	borderColor?: string;
	background?: string;
	onClick?: (e: MouseEvent<HTMLDivElement>) => void;
	onViewportChange?: (viewport: any) => void;
	ariaLabel?: string;
	animate?: boolean;
	shadow?: boolean;
	shape?: 'circle' | 'square' | 'rounded';
	children?: ReactNode;
}

/**
 * MinimapOverlay displays a configurable, theme-aware, accessible minimap overlay for map UIs.
 * Supports theming, animation, drag/click interactivity, custom overlays, slot-based content, and accessibility.
 */
const MinimapOverlay: React.FC<MinimapOverlayProps> = ({
	position = 'bottom-left',
	visible = true,
	theme = 'auto',
	className = '',
	style = {},
	interactive = false,
	layers,
	borderColor = 'var(--map-minimap-border, #ccc)',
	background = 'var(--map-minimap-bg, #fff)',
	onClick,
	onViewportChange,
	ariaLabel = 'Minimap',
	animate = true,
	shadow = false,
	shape = 'rounded',
	children,
}) => {
	const minimapRef = useRef<HTMLDivElement>(null);
	const [dragging, setDragging] = useState(false);
	const [dragStart, setDragStart] = useState<{
		x: number;
		y: number;
	} | null>(null);
	const [mounted, setMounted] = useState(false);

	// Mount animation
	React.useEffect(() => {
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
	React.useEffect(() => {
		if (!minimapRef.current) return;
		const el = minimapRef.current;
		let isDark = false;
		if (theme === 'dark') isDark = true;
		else if (theme === 'auto') {
			isDark =
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)')
					.matches;
		}
		el.style.setProperty(
			'--map-minimap-bg',
			isDark ?
				'rgba(34,34,34,0.92)'
			:	'rgba(255,255,255,0.85)'
		);
		el.style.setProperty(
			'--map-minimap-border',
			isDark ? '#888' : '#ccc'
		);
		el.style.setProperty(
			'--map-minimap-radius',
			shape === 'circle' ? '50%'
			: shape === 'rounded' ? '12px'
			: '0'
		);
		el.style.setProperty(
			'--map-minimap-shadow',
			shadow ?
				isDark ? '0 2px 8px #0008'
				:	'0 2px 8px #0002'
			:	'none'
		);
		el.style.setProperty(
			'--map-minimap-focus',
			isDark ? '0 0 0 2px #fff8' : '0 0 0 2px #2224'
		);
	}, [theme, minimapRef.current, shape, shadow]);

	// Drag-to-move logic (calls onViewportChange with new coords)
	const handleMouseDown = React.useCallback(
		(e: React.MouseEvent) => {
			if (!interactive) return;
			setDragging(true);
			setDragStart({ x: e.clientX, y: e.clientY });
			document.body.style.userSelect = 'none';
		},
		[interactive]
	);

	// Use a generic Event and cast to MouseEvent for window listeners
	const handleWindowMouseMove = React.useCallback(
		(e: Event) => {
			if (!dragging || !dragStart) return;
			const mouseEvent = e as unknown as MouseEvent;
			const dx = mouseEvent.clientX - dragStart.x;
			const dy = mouseEvent.clientY - dragStart.y;
			if (onViewportChange) {
				onViewportChange({ dx, dy });
			}
		},
		[dragging, dragStart, onViewportChange]
	);

	const handleWindowMouseUp = React.useCallback(() => {
		if (dragging) {
			setDragging(false);
			setDragStart(null);
			document.body.style.userSelect = '';
		}
	}, [dragging]);

	React.useEffect(() => {
		if (dragging) {
			window.addEventListener(
				'mousemove',
				handleWindowMouseMove
			);
			window.addEventListener(
				'mouseup',
				handleWindowMouseUp
			);
			return () => {
				window.removeEventListener(
					'mousemove',
					handleWindowMouseMove
				);
				window.removeEventListener(
					'mouseup',
					handleWindowMouseUp
				);
			};
		}
	}, [
		dragging,
		handleWindowMouseMove,
		handleWindowMouseUp,
	]);

	// Keyboard accessibility: arrow keys to move viewport, ESC to blur
	const handleKeyDown = (
		e: KeyboardEvent<HTMLDivElement>
	) => {
		if (!interactive || !onViewportChange) return;
		let dx = 0,
			dy = 0;
		if (e.key === 'ArrowLeft') dx = -10;
		else if (e.key === 'ArrowRight') dx = 10;
		else if (e.key === 'ArrowUp') dy = -10;
		else if (e.key === 'ArrowDown') dy = 10;
		else if (e.key === 'Escape') {
			(e.target as HTMLDivElement).blur();
			return;
		} else return;
		e.preventDefault();
		onViewportChange({ dx, dy });
	};

	if (!mounted) return null;

	// Compose overlay classes
	const overlayClass = [
		'map__minimap-overlay',
		`map__minimap-overlay--${position}`,
		theme !== 'auto' ?
			`map__minimap-overlay--${theme}`
		:	'',
		animate ? 'map__minimap-overlay--animate' : '',
		interactive ? 'map__minimap-overlay--interactive' : '',
		shadow ? 'map__minimap-overlay--shadow' : '',
		shape ? `map__minimap-overlay--${shape}` : '',
		dragging ? 'map__minimap-overlay--dragging' : '',
		visible ?
			'map__minimap-overlay--visible'
		:	'map__minimap-overlay--hidden',
		className,
	]
		.filter(Boolean)
		.join(' ');

	// Overlay style
	const overlayStyle: CSSProperties = {
		border: '2px solid var(--map-minimap-border)',
		background: 'var(--map-minimap-bg)',
		borderRadius: 'var(--map-minimap-radius)',
		boxShadow: 'var(--map-minimap-shadow)',
		cursor:
			interactive ?
				dragging ? 'grabbing'
				:	'grab'
			:	'default',
		transition:
			animate ?
				'box-shadow 0.2s, border-color 0.2s, background 0.2s, opacity 0.3s, transform 0.3s'
			:	undefined,
		opacity: visible ? 1 : 0,
		transform:
			visible ? 'translateY(0)' : 'translateY(10px)',
		outline: 'none',
		...style,
	};

	return (
		<div
			ref={minimapRef}
			className={overlayClass}
			style={overlayStyle}
			aria-label={ariaLabel}
			tabIndex={0}
			role='region'
			onClick={onClick}
			onMouseDown={handleMouseDown}
			onKeyDown={handleKeyDown}
			data-theme={theme}
			aria-grabbed={dragging}
			onFocus={(e) =>
				(e.currentTarget.style.boxShadow =
					'var(--map-minimap-focus)')
			}
			onBlur={(e) =>
				(e.currentTarget.style.boxShadow =
					'var(--map-minimap-shadow)')
			}
		>
			<div className='map__minimap-overlay__content'>
				{/* Minimap SVG or canvas would go here */}
				<svg
					width='100%'
					height='100%'
					viewBox='0 0 100 100'
					className='map__minimap-overlay__svg'
				>
					<rect
						x='0'
						y='0'
						width='100'
						height='100'
						fill='none'
						stroke='var(--map-minimap-border)'
						strokeWidth={2}
					/>
					{/* Custom layers/overlays */}
					{layers}
				</svg>
				{/* Slot-based custom content */}
				{children}
			</div>
		</div>
	);
};

export default MinimapOverlay;
