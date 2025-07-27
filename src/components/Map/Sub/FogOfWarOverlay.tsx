import React, { useRef, useState, useEffect } from 'react';
import type {
	CSSProperties,
	ReactNode,
	MouseEvent,
	KeyboardEvent,
} from 'react';

/**
 * Position options for overlay placement.
 */
export type FogOfWarOverlayPosition =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right';

/**
 * Theme options for overlay appearance.
 */
export type FogOfWarOverlayTheme =
	| 'light'
	| 'dark'
	| 'auto';

/**
 * Props for FogOfWarOverlay component.
 * @prop position - Where to position the overlay.
 * @prop visible - Whether the overlay is visible.
 * @prop theme - Theme for the overlay.
 * @prop className - Additional className for the overlay.
 * @prop style - Inline style for the overlay.
 * @prop fogOpacity - Opacity of the fog (0-1).
 * @prop animate - Animate fog appearance/disappearance.
 * @prop revealOnHover - Reveal fog on hover or click.
 * @prop customShape - Custom SVG shape for fog.
 * @prop onReveal - Callback when fog is revealed.
 * @prop ariaLabel - Optional ARIA label for accessibility.
 * @prop label - Optional custom label/content slot.
 * @prop children - Slot-based custom content inside overlay.
 */
export interface FogOfWarOverlayProps {
	position?: FogOfWarOverlayPosition;
	visible?: boolean;
	theme?: FogOfWarOverlayTheme;
	className?: string;
	style?: CSSProperties;
	fogOpacity?: number;
	animate?: boolean;
	revealOnHover?: boolean;
	customShape?: ReactNode;
	onReveal?: (
		e:
			| MouseEvent<HTMLDivElement>
			| KeyboardEvent<HTMLDivElement>
	) => void;
	ariaLabel?: string;
	label?: ReactNode;
	children?: ReactNode;
}

/**
 * FogOfWarOverlay displays a configurable fog overlay for map UIs.
 * Supports theming, animation, custom shapes, slot-based content, and accessibility.
 */
const FogOfWarOverlay: React.FC<FogOfWarOverlayProps> = ({
	position = 'top-right',
	visible = true,
	theme = 'auto',
	className = '',
	style = {},
	fogOpacity = 0.7,
	animate = true,
	revealOnHover = false,
	customShape,
	onReveal,
	ariaLabel = 'Fog of war',
	label,
	children,
}) => {
	const [revealed, setRevealed] = useState(false);
	const [mounted, setMounted] = useState(false);
	const overlayRef = useRef<HTMLDivElement>(null);

	// Mount animation
	useEffect(() => {
		if (visible) setMounted(true);
		else {
			const timeout = setTimeout(
				() => setMounted(false),
				500
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
			'--fogofwar-bg',
			isDark ? 'rgba(30,41,59,0.92)' : 'rgba(30,41,59,0.85)'
		);
		el.style.setProperty(
			'--fogofwar-color',
			isDark ? '#f3f3f3' : '#fff'
		);
		el.style.setProperty('--fogofwar-radius', '8px');
		el.style.setProperty(
			'--fogofwar-shadow',
			isDark ? '0 2px 8px #0008' : '0 2px 8px #0004'
		);
		el.style.setProperty(
			'--fogofwar-focus',
			isDark ? '0 0 0 2px #fff8' : '0 0 0 2px #1e293b44'
		);
	}, [theme, overlayRef.current]);

	// Handle reveal on hover/click/keyboard
	const handleReveal = (
		e:
			| MouseEvent<HTMLDivElement>
			| KeyboardEvent<HTMLDivElement>
	) => {
		setRevealed(true);
		onReveal?.(e);
	};
	const handleKeyDown = (
		e: KeyboardEvent<HTMLDivElement>
	) => {
		if ((e.key === 'Enter' || e.key === ' ') && !revealed) {
			handleReveal(e);
		}
		if (e.key === 'Escape') {
			(e.target as HTMLDivElement).blur();
		}
	};

	if (!mounted) return null;

	// Compose overlay classes
	const overlayClass = [
		'map__fogofwar-overlay',
		`map__fogofwar-overlay--${position}`,
		theme !== 'auto' ?
			`map__fogofwar-overlay--${theme}`
		:	'',
		animate ? 'map__fogofwar-overlay--animate' : '',
		revealed ? 'map__fogofwar-overlay--revealed' : '',
		visible ?
			'map__fogofwar-overlay--visible'
		:	'map__fogofwar-overlay--hidden',
		className,
	]
		.filter(Boolean)
		.join(' ');

	// Overlay style
	const overlayStyle: CSSProperties = {
		opacity: revealed ? 0 : fogOpacity,
		pointerEvents:
			revealOnHover || onReveal ? 'auto' : 'none',
		transition:
			animate ?
				'opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s'
			:	undefined,
		background: 'var(--fogofwar-bg)',
		color: 'var(--fogofwar-color)',
		borderRadius: 'var(--fogofwar-radius)',
		boxShadow: 'var(--fogofwar-shadow)',
		outline: 'none',
		transform:
			visible ? 'translateY(0)' : 'translateY(10px)',
		...style,
	};

	return (
		<div
			ref={overlayRef}
			className={overlayClass}
			style={overlayStyle}
			aria-label={ariaLabel}
			tabIndex={0}
			role='region'
			aria-live='polite'
			onMouseEnter={
				revealOnHover ? handleReveal : undefined
			}
			onClick={onReveal ? handleReveal : undefined}
			onKeyDown={handleKeyDown}
			onFocus={(e) =>
				(e.currentTarget.style.boxShadow =
					'var(--fogofwar-focus)')
			}
			onBlur={(e) =>
				(e.currentTarget.style.boxShadow =
					'var(--fogofwar-shadow)')
			}
		>
			{customShape ?
				<div className='map__fogofwar-overlay__custom-shape'>
					{customShape}
				</div>
			:	<svg
					width='100%'
					height='100%'
					viewBox='0 0 100 100'
					className='map__fogofwar-overlay__svg'
				>
					<rect
						x='0'
						y='0'
						width='100'
						height='100'
						fill='currentColor'
					/>
				</svg>
			}
			<span
				className='map__fogofwar-overlay__label'
				aria-live='polite'
			>
				{label ?
					label
				: revealed ?
					'Revealed'
				:	'Fog of War'}
			</span>
			{/* Slot-based custom content */}
			{children}
		</div>
	);
};

export default FogOfWarOverlay;
